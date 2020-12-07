import { faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actions, helpers } from "lbn-core";
import { setUpgrade } from "lbn-core/dist/actions/squadrons";
import { buttonBlue, red } from "lbn-core/dist/assets/colors";
import {
  getUpgrades,
  pilotOptions,
  shipTypeForXws,
  shipTypeOptions,
  upgradesForSlot,
} from "lbn-core/dist/loader";
import { UserState } from "lbn-core/dist/reducers/user";
import requests from "lbn-core/dist/requests";
import { AppState } from "lbn-core/dist/state";
import {
  Faction,
  Language,
  Ship,
  ShipType,
  Slot,
  Upgrade,
} from "lbn-core/dist/types";
import { NextApiRequest, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Store } from "redux";
import { v4 as uuid } from "uuid";
import { Layout } from "../components/layout";
import { PilotPopover } from "../components/pilot-popover";
import { ShipPopover } from "../components/ship-popover";
import { UpgradePopover } from "../components/upgrade-popover";
import { copyToClipboard } from "../helpers/clipboard";
import { useJWT, useSquadronXWS } from "../helpers/hooks";
import { renderHardpoint } from "../page-components/render";
import { getSession } from "../passport/iron";

const { squadrons, user, sync } = actions;
const { convert, importExport, serializer, unit, i18n } = helpers;
const { useLocalized } = i18n;
const { fullSync } = sync;
const { userDidLogin } = user;
const {
  addShipAction,
  addSquadron,
  changePilotAction,
  copyShip,
  importSquadron,
  removeShip,
  removeSquadron,
  toggleFormat,
} = squadrons;
const { deserialize, serialize } = serializer;
const { keyFromSlot } = convert;
const { exportAsText, exportAsTTS, exportAsXws } = importExport;
const { loadSquadron } = unit;

export type DataItem = {
  type: "Ship" | "Upgrade" | "Empty" | "SlotOptions";
  key: string;
  slot: Slot;
  index: number;
  slotIndex?: number;
  ship?: Ship;
  upgrade?: Upgrade;
  title?: string;
  slotOptions?: Slot[];
};

type Props = {
  uid: string;
};

const EditPage: NextPage<Props> = ({ uid }) => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t, c } = useLocalized(language);
  const jwt = useJWT();

  const xws = useSquadronXWS(uid);
  const squadron = loadSquadron(xws);
  const [name, setName] = useState(squadron ? squadron.name : "New Squadron");
  const collection = useSelector<AppState, any>((s) => s.app.collection);

  const [shipBase, setShipBase] = useState<ShipType | undefined>();
  const [columns, setColumns] = useState(false);

  const p: { [s: string]: Slot } = {};
  squadron?.ships.forEach((s) => {
    if (
      s.ability &&
      s.upgrades &&
      s.ability.slotOptions &&
      s.ability.slotOptions.find(
        (sl) => s.upgrades && s.upgrades[keyFromSlot(sl)]
      )
    ) {
      const u = s.ability.slotOptions.find(
        (sl) => s.upgrades && s.upgrades[keyFromSlot(sl)]
      );
      u && (p[s.uid] = u);
    }
  });
  const [hardpoints, setHardpoints] = useState<{ [s: string]: Slot | null }>(p);

  useEffect(() => {
    if (!xws) {
      return;
    }
    setName(xws.name);

    const url = `?lbx=${serialize(xws)}&uid=${uid}`;
    window.history.pushState("", "", url);
  }, [xws]);

  if (!xws || !squadron) {
    return null;
  }

  const actions: {
    title: string;
    className?: string;
    onClick: () => void;
  }[] = [
    {
      title: "Export XWS",
      onClick: () => copyToClipboard(exportAsXws(squadron)),
    },
    {
      title: "Export TTS",
      onClick: () => copyToClipboard(exportAsTTS(squadron, t)),
    },
    {
      title: "Export as text",
      onClick: () => copyToClipboard(exportAsText(squadron, t)),
    },
  ];
  if (jwt) {
    actions.push({
      title: "Delete squadron",
      className: "text-red-500",
      onClick: () => {
        dispatch(removeSquadron(uid));
      },
    });
  }

  return (
    <Layout
      name={name}
      points={xws.cost}
      format={squadron.format}
      onChangeFormat={() => dispatch(toggleFormat(squadron.uid))}
      onPrint={() => {
        const url = `/print?lbx=${serialize(xws)}`;
        window.open(url, "_ blank");
      }}
      actions={actions}
    >
      <div>
        <button className="text-gray-500" onClick={() => setColumns(!columns)}>
          {columns && (
            <svg
              className="w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          )}
          {!columns && (
            <svg
              className="w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`flex flex-1 flex-col grid grid-cols-1 ${
          columns && "sm:grid-cols-2"
        } gap-x-3 gap-y-3`}
      >
        {squadron.ships.map((s) => {
          const showHardpointPicker =
            s.ability &&
            s.upgrades &&
            s.ability.slotOptions &&
            !s.ability.slotOptions.find(
              (sl) => s.upgrades && s.upgrades[keyFromSlot(sl)]
            );

          const upgrades = getUpgrades(
            squadron,
            s,
            // @ts-ignore
            hardpoints[s.uid] ? [hardpoints[s.uid]] : []
          );
          const shipType = shipTypeForXws(squadron.faction, s.xws);

          return (
            <div
              key={s.uid}
              className="bg-white rounded-lg shadow px-2 py-6 md:px-5 md:py-4 relative"
            >
              <div className="divide-y divide-gray-200 md:mr-5">
                <PilotPopover
                  halfWidth
                  value={s.pilot}
                  ship={s}
                  options={pilotOptions(shipType, t)}
                  onChange={(p) => {
                    dispatch(
                      changePilotAction(
                        squadron.uid,
                        s.uid,
                        p?.xws || "",
                        Boolean(s.pilot.slots.find((s) => s === "Force Power")),
                        Boolean(s.pilot.slots.find((s) => s === "Talent"))
                      )
                    );
                  }}
                />

                <div className="mt-1"></div>
              </div>

              <div
                className={`mt-1 grid grid-cols-2 gap-1 lg:grid-cols-${
                  columns ? "2" : "4"
                } md:mr-5`}
              >
                {upgrades.map((upgrade, index) => (
                  <div key={uuid()}>
                    <UpgradePopover
                      side={0}
                      slot={upgrade.slot}
                      value={upgrade.upgrade}
                      options={upgradesForSlot(
                        squadron,
                        s,
                        upgrade.slot,
                        t,
                        c,
                        true
                      )}
                      onChange={(newValue) => {
                        const getSlotIndex = () => {
                          let slotIndex = 0;
                          for (let i = 0; i < s.pilot.slots.length; i++) {
                            if (s.pilot.slots[i] === upgrade.slot) {
                              if (i === index) {
                                return slotIndex;
                              }
                              slotIndex += 1;
                            }
                          }
                          return 0;
                        };
                        dispatch(
                          setUpgrade(
                            squadron.uid,
                            s.uid,
                            upgrade.slot,
                            getSlotIndex(),
                            newValue
                          )
                        );
                      }}
                    />
                  </div>
                ))}
                {showHardpointPicker &&
                  renderHardpoint(hardpoints[s.uid], squadron, (v) => {
                    hardpoints[s.uid] = v;
                    setHardpoints({ ...hardpoints });
                  })}
              </div>

              <button className="pointer absolute top-2 right-2">
                <FontAwesomeIcon
                  style={{ width: 17, height: 17 }}
                  icon={faTimes}
                  color={red}
                  onClick={() => dispatch(removeShip(squadron.uid, s.uid))}
                />
              </button>

              <button className="pointer absolute bottom-2 right-2">
                <FontAwesomeIcon
                  style={{ width: 17, height: 17 }}
                  icon={faCopy}
                  color={buttonBlue}
                  onClick={() => dispatch(copyShip(squadron.uid, s.uid))}
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="my-3 bg-white rounded-lg shadow px-5 py-4 sm:px-6 grid grid-cols-2 gap-1">
        <ShipPopover
          value={shipBase}
          options={shipTypeOptions(squadron, t, collection, true)}
          onChange={setShipBase}
        />

        {shipBase && (
          <PilotPopover
            ship={shipBase}
            options={pilotOptions(shipBase, t)}
            onChange={(v) => {
              if (v) {
                dispatch(addShipAction(squadron.uid, shipBase.xws, v.xws));
              }
              setShipBase(undefined);
            }}
          />
        )}
      </div>
    </Layout>
  );
};

EditPage.getInitialProps = async ({ store, query, req }) => {
  let { lbx, faction, uid = uuid() } = query;

  // console.log(ctx);

  const appStore: Store<AppState, AnyAction> = store;

  const { getState, dispatch } = appStore;
  const state = getState();

  if (req) {
    const user: UserState = await getSession(req as NextApiRequest);
    if (user) {
      console.log({ user });
      dispatch(userDidLogin(user));
      const { data } = await requests.syncRequest(user);
      dispatch(fullSync(data));
    }
  }

  // Om vi inte har den sparad så är det dax att skapa, vi sätter nytt uid då
  if (!state.app.xws.find((x) => x && x.uid === uid)) {
    if (lbx) {
      // Importera utifrån
      const xws = deserialize(lbx as string, uuid());
      uid = xws.uid;
      dispatch(importSquadron(xws));
    } else if (!faction && state.app.xws.length > 0) {
      // Hämtar första
      uid = state.app.xws[0].uid;
    } else {
      // Skapa helt ny
      uid = dispatch(
        addSquadron((faction || "Rebel Alliance") as Faction, "Hyperspace")
      ).uid;
    }
  }

  return { uid: uid as string };
};

export default EditPage;

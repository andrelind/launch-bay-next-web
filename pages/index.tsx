import { faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextApiRequest, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction, Store } from "redux";
import { v4 as uuid } from "uuid";
import {
  addShipAction,
  addSquadron,
  changePilotAction,
  copyShip,
  importSquadron,
  removeShip,
  removeSquadron,
  toggleFormat,
} from "../actions/squadrons";
import { fullSync } from "../actions/sync";
import { userDidLogin } from "../actions/user";
import { buttonBlue, red } from "../assets/colors";
import { Layout } from "../components/layout";
import Select from "../components/select";
import { PilotOption } from "../components/select/pilot";
import { ShipTypeOption } from "../components/select/ship";
import { UnitSingleValue } from "../components/select/unit";
import { copyToClipboard } from "../helpers/clipboard";
import { keyFromSlot } from "../helpers/convert";
import { useJWT, useMinimized, useSquadronXWS } from "../helpers/hooks";
import {
  exportAsText,
  exportAsTTS,
  exportAsXws,
} from "../helpers/import+export";
import { deserialize, serialize } from "../helpers/serializer";
import { loadSquadron } from "../helpers/unit";
import {
  getUpgrades,
  loadShips,
  pilotOptions,
  PilotValue,
  shipForXws,
  ShipValue,
} from "../page-components/loader";
import { renderHardpoint, renderUpgrade } from "../page-components/render";
import { getSession } from "../passport/iron";
import { UserState } from "../reducers/user";
import { sync } from "../requests/sync";
import { AppState } from "../store/state";
import { Faction, Ship, Slot, Upgrade } from "../types";

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
  const jwt = useJWT();

  const xws = useSquadronXWS(uid);
  const squadron = loadSquadron(xws);
  const [name, setName] = useState(squadron ? squadron.name : "New Squadron");
  const minimized = useMinimized("index");

  //   const allSquadrons = useSelector((s: AppState) => s.app.xws);
  const [shipBase, setShipBase] = useState<ShipValue | null>(null);

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
      title: "Print",
      onClick: () => {
        const url = `/print?lbx=${serialize(xws)}&mode=${
          minimized ? "compact" : "full"
        }`;
        window.open(url, "_ blank");
      },
    },
    {
      title: "Export XWS",
      onClick: () => copyToClipboard(exportAsXws(squadron)),
    },
    {
      title: "Export TTS",
      onClick: () => copyToClipboard(exportAsTTS(squadron)),
    },
    {
      title: "Export as text",
      onClick: () => copyToClipboard(exportAsText(squadron)),
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
      actions={actions}
    >
      <div className="flex flex-1 flex-col">
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
          const shipType = shipForXws(squadron, s.xws);

          return (
            <div
              key={s.uid}
              className="my-2 bg-white rounded-lg shadow px-2 py-6 md:px-5 md:py-4 relative"
            >
              <div className="divide-y divide-gray-200 md:mr-5">
                <Select
                  components={{
                    Option: PilotOption,
                    SingleValue: UnitSingleValue,
                    IndicatorSeparator: null,
                    DropdownIndicator: null,
                  }}
                  isSearchable={false}
                  readOnly
                  instanceId={"changePilot"}
                  faction={squadron.faction}
                  //@ts-ignore
                  value={{ value: s.xws, label: s.name, ship: s }}
                  //@ts-ignore
                  onChange={(p: PilotValue) => {
                    dispatch(
                      changePilotAction(
                        squadron.uid,
                        s.uid,
                        p.pilot.xws,
                        Boolean(s.pilot.slots.find((s) => s === "Force Power")),
                        Boolean(s.pilot.slots.find((s) => s === "Talent"))
                      )
                    );
                  }}
                  options={pilotOptions(shipType)}
                />
                <div className="mt-1"></div>
              </div>

              <div className="mt-1 grid grid-cols-2 gap-1 sm:grid-cols-2 lg:grid-cols-4 md:mr-5">
                {upgrades.map((upgrade, index) => (
                  <div key={uuid()}>
                    {renderUpgrade(upgrade, squadron, s, index)}
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

      <div className="my-2 bg-white rounded-lg shadow px-5 py-4 sm:px-6">
        <Select
          components={{ Option: ShipTypeOption, IndicatorSeparator: null }}
          isSearchable={false}
          readOnly
          instanceId={"selectShip"}
          faction={squadron.faction}
          placeholder={"Add ship"}
          value={shipBase}
          // @ts-ignore
          onChange={(v: ShipValue) => setShipBase(v)}
          options={loadShips(squadron)}
        />

        {shipBase && (
          <Select
            components={{ Option: PilotOption, IndicatorSeparator: null }}
            isSearchable={false}
            readOnly
            instanceId={"selectPilot"}
            faction={squadron.faction}
            placeholder={"Select pilot"}
            // @ts-ignore
            onChange={(value: PilotValue) => {
              dispatch(
                addShipAction(squadron.uid, shipBase.ship.xws, value.pilot.xws)
              );
              setShipBase(null);
            }}
            options={pilotOptions(shipBase)}
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
      const { data } = await sync(user.jwt);
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

  // const { minimized } = parseCookies(ctx);
  // if (minimized === "true" && !state.app.misc.minimized.index) {
  //   dispatch(toggleMinimize("index"));
  // }

  return { uid: uid as string };
};

export default EditPage;

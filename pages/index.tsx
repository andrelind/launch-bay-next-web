import { faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { components } from "react-select";
import { AnyAction, Store } from "redux";
import { v4 as uuid } from "uuid";
import {
  addShipAction,
  addSquadron,
  changePilotAction,
  copyShip,
  importSquadron,
  removeShip,
  toggleFormat,
} from "../actions/squadrons";
import { fullSync } from "../actions/sync";
import { userDidLogin } from "../actions/user";
import { buttonBlue, red } from "../assets/colors";
import { Layout } from "../components/layout";
import PilotComponent from "../components/pilot";
import Select from "../components/select";
import ShipType from "../components/ship-type";
import Unit from "../components/unit";
import { keyFromSlot } from "../helpers/convert";
import { useMinimized, useSquadronXWS } from "../helpers/hooks";
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
  //   const theme = useTheme();

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

  const SingleValue = ({ data }: any) => (
    <Unit
      hideUpgrades={true}
      showCostWithUpgrades={true}
      ship={data.ship}
      minimized={minimized}
    />
  );

  const Option = ({ data, ...rest }: any) => (
    // @ts-ignore
    <components.Option {...rest}>
      <ShipType shipType={data.ship} minimized={true} />
    </components.Option>
  );

  const PilotOption = ({ data, ...rest }: any) => (
    // @ts-ignore
    <components.Option {...rest}>
      <PilotComponent pilot={data.pilot} minimized={true} />
    </components.Option>
  );

  return (
    <Layout
      name={name}
      points={squadron.cost}
      format={squadron.format}
      onChangeFormat={() => dispatch(toggleFormat(squadron.uid))}
    >
      {/* <TopRow>
        <TitleEnd>
          <Button
            color={"secondary"}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            endIcon={
              <FontAwesomeIcon
                icon={faShareSquare}
                style={{ height: 15, width: 15 }}
              />
            }
          >
            Actions
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                const url = `/print?lbx=${serialize(xws)}&mode=${
                  minimized ? "compact" : "full"
                }`;
                window.open(url, "_ blank");
              }}
            >
              Open print page
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                copyToClipboard(exportAsXws(squadron));
              }}
            >
              Copy XWS
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                copyToClipboard(exportAsTTS(squadron));
              }}
            >
              Copy TTS
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                copyToClipboard(exportAsText(squadron));
              }}
            >
              Copy as text
            </MenuItem>
            <MenuItem
              style={{ color: red }}
              onClick={() => {
                setAnchorEl(null);
                dispatch(removeSquadron(uid));
                if (allSquadrons.length > 1) {
                  const u =
                    allSquadrons[0].uid !== uid
                      ? allSquadrons[0].uid
                      : allSquadrons[1].uid;
                  router.push(`/?uid=${u}`);
                }
              }}
            >
              Delete squadron
            </MenuItem>
          </Menu>
        </TitleEnd>
      </TopRow> */}

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
              className="my-2 bg-white rounded-lg shadow px-2 py-4 md:px-5 relative"
            >
              <div className="divide-y divide-gray-200">
                <Select
                  components={{
                    Option: PilotOption,
                    SingleValue,
                    IndicatorSeparator: null,
                    DropdownIndicator: null,
                  }}
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
                        s.pilot.slots.find((s) => s === "Force Power") !== null,
                        s.pilot.slots.find((s) => s === "Talent") !== null
                      )
                    );
                  }}
                  options={pilotOptions(shipType)}
                />
                <div className="mt-1"></div>
              </div>

              <div className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
                {upgrades.map((upgrade, index) => (
                  <div key={uuid()}>
                    {renderUpgrade(upgrade, squadron, s, minimized, index)}
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
          components={{ Option, IndicatorSeparator: null }}
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
  console.log({ appStore });
  const { dispatch } = appStore;
  const state = appStore.getState?.();
  if (!state) {
    console.log("No state");
  }

  // @ts-ignore
  if (req && req.user) {
    // @ts-ignore
    const user: UserState = ctx.req.user;
    dispatch(userDidLogin(user));
    const { data } = await sync(user.jwt);
    dispatch(fullSync(data));
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
        addSquadron(
          uid as string,
          (faction || "Rebel Alliance") as Faction,
          "Hyperspace"
        )
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

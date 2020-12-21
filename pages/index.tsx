import { actions, helpers } from 'lbn-core';
import { addSquadron, setUpgrade } from 'lbn-core/dist/actions/squadrons';
import { importAllSync } from 'lbn-core/dist/actions/sync';
import { userDidLogin } from 'lbn-core/dist/actions/user';
import {
  getUpgrades,
  pilotOptions,
  shipTypeForXws,
  shipTypeOptions,
  upgradesForSlot,
} from 'lbn-core/dist/loader';
import { UserState } from 'lbn-core/dist/reducers/user';
import requests from 'lbn-core/dist/requests';
import { AppState } from 'lbn-core/dist/state';
import { Ship, ShipType, Slot, Upgrade } from 'lbn-core/dist/types';
import { NextApiRequest, NextPage } from 'next';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Store } from 'redux';
import { v4 as uuid } from 'uuid';
import { Layout } from '../components/layout';
import { PilotPopover } from '../components/pilot-popover';
import { ShipPopover } from '../components/ship-popover';
import { UpgradePopover } from '../components/upgrade-popover';
import { copyToClipboard } from '../helpers/clipboard';
import { useJWT, useSquadronXWS } from '../helpers/hooks';
import { getSession } from '../passport/iron';
import { wrapper } from '../store';

const { squadrons } = actions;
const { convert, importExport, serializer, unit, i18n } = helpers;
const { useLocalized } = i18n;

const {
  addShipAction,
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
  type: 'Ship' | 'Upgrade' | 'Empty' | 'SlotOptions';
  key: string;
  slot: Slot;
  index: number;
  slotIndex?: number;
  ship?: Ship;
  upgrade?: Upgrade;
  title?: string;
  slotOptions?: Slot[];
};

type Props = { uid: string; cookies: { [key: string]: string } };

const EditPage: NextPage<Props> = ({ uid, cookies }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector<AppState, UserState>((s) => s.app.user);
  const { t, c } = useLocalized(user.language);
  const jwt = useJWT();

  const { lbx } = router.query;
  const xws = useSquadronXWS(uid);
  const squadron = loadSquadron(xws);
  const collection = useSelector<AppState, any>((s) => s.app.collection);

  const [shipBase, setShipBase] = useState<ShipType>();
  const [grid, setGrid] = useState(cookies['grid'] === 'true');

  const p: { [s: string]: Slot } = {};
  squadron?.ships.forEach((s) => {
    const u = s.ability?.slotOptions?.find(
      (sl) => s.upgrades?.[keyFromSlot(sl)]
    );
    u && (p[s.uid] = u);
  });

  useEffect(() => {
    if (!xws || xws?.uid !== uid) {
      return;
    }

    const newLbx = serialize(xws);
    if (decodeURIComponent(newLbx) !== lbx) {
      console.log('Update url');
      const url = `?lbx=${newLbx}&uid=${uid}`;
      router.push(url, `?lbx=${newLbx}`, { shallow: true });

      // Om vi är inloggade, uppdatera på servern
      // lbx är inte satt när vi först laddar en sparad lista
      if (!user.jwt || !lbx) {
        return;
      }
      console.log('Update server', { newLbx, lbx });
      const run = async () => {
        const res = await requests.setSquadron(xws, user);
        console.log({ res });
      };
      run();
    } else {
    }
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
      title: 'Export XWS',
      onClick: () => copyToClipboard(exportAsXws(squadron)),
    },
    {
      title: 'Export TTS',
      onClick: () => copyToClipboard(exportAsTTS(squadron, t)),
    },
    {
      title: 'Export as text',
      onClick: () => copyToClipboard(exportAsText(squadron, t)),
    },
  ];
  if (jwt) {
    actions.push({
      title: 'Delete squadron',
      className: 'text-red-500',
      onClick: () => dispatch(removeSquadron(uid as string)),
    });
  }

  return (
    <Layout
      loggedIn={Boolean(jwt)}
      xws={xws}
      onChangeFormat={() => dispatch(toggleFormat(squadron.uid))}
      onPrint={() =>
        xws && window.open(`/print?lbx=${serialize(xws)}`, '_ blank')
      }
      grid={grid}
      setGrid={(v) => {
        setGrid(v);
        setCookie(null, 'grid', `${v}`, {});
      }}
      actions={actions}
    >
      <div
        className={`flex flex-1 flex-col grid grid-cols-1 ${
          grid && 'sm:grid-cols-2'
        } gap-x-3 gap-y-3`}
      >
        {squadron.ships.map((s) => {
          const showHardpointPicker =
            s.ability?.slotOptions &&
            !s.ability?.slotOptions.find((sl) => s.upgrades?.[keyFromSlot(sl)]);

          const hardpointOptions = () => [
            ...upgradesForSlot(squadron, s, 'Cannon', t, c, true),
            ...upgradesForSlot(squadron, s, 'Missile', t, c, true),
            ...upgradesForSlot(squadron, s, 'Torpedo', t, c, true),
          ];

          const shipType = shipTypeForXws(
            squadron.faction,
            squadron.format,
            s.xws
          );
          const upgrades = getUpgrades(squadron.format, s);

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
                        p?.xws || '',
                        Boolean(s.pilot.slots.find((s) => s === 'Force Power')),
                        Boolean(s.pilot.slots.find((s) => s === 'Talent'))
                      )
                    );
                  }}
                />

                <div className="mt-1"></div>
              </div>

              <div
                className={`mt-1 grid grid-cols-2 gap-1 lg:grid-cols-${
                  grid ? '2' : '4'
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
                {showHardpointPicker && (
                  <UpgradePopover
                    side={0}
                    slot={'Hardpoint'}
                    // value={}
                    options={hardpointOptions()}
                    onChange={(newValue) => {
                      const slot = newValue?.sides[0].slots[0] || 'Hardpoint';

                      const getSlotIndex = () => {
                        let slotIndex = 0;
                        for (let i = 0; i < s.pilot.slots.length; i++) {
                          if (s.pilot.slots[i] === slot) {
                            if (i === 0) {
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
                          slot,
                          getSlotIndex(),
                          newValue
                        )
                      );
                    }}
                  />
                )}
                {/* {showHardpointPicker &&
                  renderHardpoint(hardpoints[s.uid], squadron, (v) => {
                    hardpoints[s.uid] = v;
                    setHardpoints({ ...hardpoints });
                  })} */}
              </div>

              <button
                className="pointer absolute top-2 right-2 text-red-400 hover:text-red-500"
                onClick={() => dispatch(removeShip(squadron.uid, s.uid))}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <button
                className="pointer absolute bottom-2 right-2 text-gray-400 hover:text-gray-500"
                onClick={() => dispatch(copyShip(squadron.uid, s.uid))}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      <div className="my-3 bg-white rounded-lg shadow px-2 py-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-1">
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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, query }) => {
    let { lbx, uid } = query;

    const appStore: Store<AppState, AnyAction> = store;
    const { getState, dispatch } = appStore;

    if (req) {
      const user: UserState = await getSession(req as NextApiRequest);
      if (user) {
        dispatch(userDidLogin(user));
        const { data } = await requests.syncRequest(user);
        dispatch(importAllSync(data));
      }
    }

    // Om vi inte har den sparad så är det dax att skapa, vi sätter nytt uid då
    if (!getState().app.xws.find((x) => x && x.uid === uid)) {
      if (lbx) {
        // Importera utifrån
        const xws = deserialize(lbx as string, uuid());
        uid = xws.uid;
        dispatch(importSquadron(xws));
      } else {
        // Skapa helt ny
        uid = dispatch(addSquadron('Rebel Alliance', 'Hyperspace', uuid())).uid;
      }
    }

    // @ts-ignore
    const cookies = parseCookies({ req: req as NextApiRequest, res });

    return {
      props: {
        uid,
        cookies,
      },
    };
  }
);

export default EditPage;

import { DuplicateIcon, XIcon } from '@heroicons/react/outline';
import { keyFromSlot } from 'lbn-core/dist/helpers/convert';
import { FactionKey, Ship, ShipType, Slot, Upgrade } from 'lbn-core/dist/types';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Layout } from '../components/layout';
import { Notification } from '../components/notification';
import { PilotPopover } from '../components/popover/pilot';
import { ShipPopover } from '../components/popover/ship';
import { UpgradePopover } from '../components/popover/upgrade';
import { TagComponent } from '../components/tag';
import { copyToClipboard } from '../helpers/clipboard';
import {
  addShip2,
  changePilot2,
  copyShip2,
  removeShip2,
  setTags,
  setUpgrade2,
  toggleFormat,
} from '../helpers/edit';
import {
  deserialize,
  exportAsText,
  exportAsTTS,
  exportAsXws,
  serialize,
} from '../helpers/export';
import { loadShip2, loadUpgrades2 } from '../helpers/loading';
import { shipTypes, upgradesForSlot2, usedXWS } from '../helpers/select';
import { XWS } from '../helpers/types';

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

type Props = {};

const MainPage: NextPage<Props> = () => {
  const router = useRouter();

  // Either we get a squad from url or we create one
  const initialXws: XWS = router.query.lbx
    ? deserialize(router.query.lbx as string)
    : {
        name: 'New Squadron',
        description: '',
        faction: (router.query.faction as FactionKey) || 'rebelalliance',
        format: 'Standard',
        pilots: [],
        points: 0,
        version: '2.0.0',
        vendor: {
          lbn: {
            uid: uuid(),
            wins: 0,
            losses: 0,
            tags: [],
            created: new Date(),
          },
        },
      };

  const [xws, setXws] = useState<XWS>(initialXws);
  const ships = xws?.pilots.map((p) => loadShip2(p, xws.faction, xws.format));

  const [shipBase, setShipBase] = useState<ShipType>();

  const [notificationTitle, setNotificationTitle] = useState<string>();
  const [notificationMessage, setNotificationMessage] = useState<string>();

  const usedXws = usedXWS(ships);

  useEffect(() => {
    if (router.query.lbx) {
      setXws(deserialize(router.query.lbx as string));
    }
  }, [router.query]);

  if (!xws) {
    return null;
  }

  const actions: {
    title: string;
    className?: string;
    onClick: () => void;
  }[] = [
    {
      title: 'Link',
      onClick: () => {
        const lbx = serialize(xws);
        const url = `https://launchbaynext.app/?lbx=${lbx}`;
        copyToClipboard(url);
        setNotificationTitle('Link copied to clipboard');
      },
    },
    {
      title: 'XWS',
      onClick: () => {
        copyToClipboard(exportAsXws(xws));
        setNotificationTitle('XWS data copied to clipboard');
      },
    },
    {
      title: 'TTS',
      onClick: () => {
        copyToClipboard(exportAsTTS(xws));
        setNotificationTitle('TTS data copied to clipboard');
      },
    },
    {
      title: 'As text',
      onClick: () => {
        copyToClipboard(exportAsText(xws));
        setNotificationTitle('Plaint text copied to clipboard');
      },
    },
  ];

  return (
    <Layout
      xws={xws}
      setTags={(t) => setXws(setTags(xws, t))}
      onChangeName={(n) => {
        xws.name = n;
        setXws({ ...xws });
      }}
      onChangeFormat={() => setXws(toggleFormat(xws))}
      onPrint={() =>
        xws && window.open(`/print?lbx=${serialize(xws)}`, '_blank')
      }
      actions={actions}
    >
      <div className="mb-2 text-gray-400 flex flew-wrap items-center">
        {xws.vendor.lbn.tags?.map((tag) => (
          <TagComponent key={tag} label={tag} />
        ))}
      </div>

      <div
        className={`flex flex-1 flex-col grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3`}
      >
        {ships?.map((s, pilotIndex) => {
          const showHardpointPicker =
            s.ability?.slotOptions &&
            !s.ability?.slotOptions.find((sl) => s.upgrades?.[keyFromSlot(sl)]);

          const hardpointOptions = () => [
            ...upgradesForSlot2(s, 'Cannon', xws.format, [], true),
            ...upgradesForSlot2(s, 'Missile', xws.format, [], true),
            ...upgradesForSlot2(s, 'Torpedo', xws.format, [], true),
          ];

          const upgrades = loadUpgrades2(s, xws.format);

          return (
            <div
              key={`${s.xws}_${pilotIndex}`}
              className="bg-white rounded-lg shadow px-2 py-6 md:px-3 md:py-4 relative"
            >
              <div className="divide-y divide-gray-200 md:mr-5">
                <PilotPopover
                  halfWidth
                  value={s.pilot}
                  faction={xws.faction}
                  format={xws.format}
                  usedXws={usedXws}
                  ship={s}
                  onChange={(p) =>
                    setXws(changePilot2(xws, pilotIndex, p?.xws || ''))
                  }
                />

                <div className="mt-1"></div>
              </div>

              <div
                className={`mt-1 grid grid-cols-2 gap-1 lg:grid-cols-2 md:mr-5 mb-0`}
              >
                {upgrades.map((upgrade, upgradeIndex) => (
                  <div key={uuid()}>
                    <UpgradePopover
                      side={0}
                      slot={upgrade.slot}
                      value={upgrade.upgrade}
                      format={xws.format}
                      usedXws={usedXws}
                      options={upgradesForSlot2(
                        s,
                        upgrade.slot,
                        xws.format,
                        ships,
                        true
                      )}
                      onChange={(newValue) => {
                        const getSlotIndex = () => {
                          let slotIndex = 0;
                          for (
                            let i = 0;
                            i < (s.pilot?.slots?.length || 0);
                            i++
                          ) {
                            if (s.pilot?.slots?.[i] === upgrade.slot) {
                              if (i === upgradeIndex) {
                                return slotIndex;
                              }
                              slotIndex += 1;
                            }
                          }
                          return 0;
                        };

                        setXws(
                          setUpgrade2(
                            xws,
                            pilotIndex,
                            keyFromSlot(upgrade.slot),
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
                    format={xws.format}
                    options={hardpointOptions()}
                    onChange={(newValue) => {
                      const slot = newValue?.sides[0].slots[0] || 'Hardpoint';
                      let slotIndex = 0;
                      for (let i = 0; i < (s.pilot?.slots.length || 0); i++) {
                        if (s.pilot?.slots[i] === slot) {
                          if (i === 0) {
                            return slotIndex;
                          }
                          slotIndex += 1;
                        }
                      }
                      setXws(
                        setUpgrade2(
                          xws,
                          pilotIndex,
                          keyFromSlot(slot),
                          slotIndex,
                          newValue
                        )
                      );
                    }}
                  />
                )}
              </div>

              <button
                className="pointer absolute top-2 right-2 text-red-400 hover:text-red-500"
                onClick={() => setXws(removeShip2(xws, pilotIndex))}
              >
                <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                className="posinter absolute bottom-2 right-2 text-gray-400 hover:text-gray-500"
                onClick={() => setXws(copyShip2(xws, pilotIndex))}
              >
                <DuplicateIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="mx-3 sm:mx-0 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
        <div className="shadow rounded-md">
          <ShipPopover
            value={shipBase}
            options={shipTypes(xws)}
            onChange={setShipBase}
          />
        </div>

        {shipBase && (
          <div className="shadow rounded-md">
            <PilotPopover
              ship={shipBase}
              faction={xws.faction}
              format={xws.format}
              onChange={(v) => {
                if (v && shipBase) {
                  setXws(addShip2(xws, shipBase.xws, v.xws));
                  setShipBase(undefined);
                }
              }}
            />
          </div>
        )}
      </div>

      <Notification
        title={notificationTitle}
        message={notificationMessage}
        onClear={() => {
          setNotificationTitle(undefined);
          setNotificationMessage(undefined);
        }}
      />

      <Link href={'/privacy'}>
        <a className="hidden md:block absolute left-1 bottom-1 text-xs font-normal text-gray-500">
          Privacy policy
        </a>
      </Link>
    </Layout>
  );
};

export default MainPage;

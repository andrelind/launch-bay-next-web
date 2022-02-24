import { Transition } from '@tailwindui/react';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import useSwr, { useSWRConfig } from 'swr';
import { colorForFactionKey } from '../helpers/colors';
import { serialize } from '../helpers/export';
import { compare } from '../helpers/misc';
import { pilotName } from '../helpers/names';
import { get, post } from '../helpers/request';
import { SortingType, XWS } from '../helpers/types';
import XwingFont from './fonts/xwing';
import { colorForFormat } from './format';
import { TagComponent } from './tag';

const sortings: SortingType[] = [
  'Alphabetically',
  'Faction',
  'Points',
  'Wins',
  'Created Date',
  'Format',
  'Custom',
];

type Props = {
  show: boolean;
  onClose: () => void;
};

export const SavedSquadronsPanel: FC<Props> = ({ show, onClose }) => {
  const router = useRouter();

  const { mutate } = useSWRConfig();
  const { data: lists } = useSwr('/lists', () => get<XWS[]>('/lists'));

  const [first, setFirst] = useState<SortingType>('Faction');
  const [second, setSecond] = useState<SortingType>('Alphabetically');

  // console.log(sorting);

  return (
    <div
      className={`fixed inset-0 overflow-hidden z-10 ${
        !show && 'pointer-events-none'
      }`}
      onClick={(e) => {
        // @ts-ignore
        e.target.id === 'background' && onClose();
      }}
    >
      <div id="background" className="absolute inset-0 overflow-hidden">
        <section
          className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
          aria-labelledby="slide-over-heading"
        >
          <Transition
            show={show}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="w-screen max-w-md h-screen"
          >
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6 pb-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <h2
                    id="slide-over-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Squadrons
                  </h2>

                  <div className="ml-3 h-7 flex items-center">
                    <button
                      onClick={onClose}
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lbnred"
                    >
                      <span className="sr-only">Close panel</span>
                      {/* <!-- Heroicon name: x --> */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid gap-x-3 gap-y-3 grid-cols-1 sm:grid-cols-2 mt-3">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First sorting
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-lbnred focus:border-lbnred sm:text-sm rounded-md"
                      value={first}
                      onChange={(e) => {
                        const s = sortings[e.target.selectedIndex];
                        setFirst(s);
                      }}
                    >
                      {sortings.map((s) => (
                        <option key={`${s}_first`}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Second sorting
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-lbnred focus:border-lbnred sm:text-sm rounded-md"
                      value={second}
                      onChange={(e) => {
                        const s = sortings[e.target.selectedIndex];
                        setSecond(s);
                      }}
                    >
                      {sortings.map((s) => (
                        <option key={`${s}_second`}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* <div className="mt-6 relative flex-1 px-4 sm:px-6"> */}
              <ul className="divide-y divide-gray-200 overflow-y-auto">
                {lists
                  ?.sort((a, b) => {
                    const f = compare(a, b, first);
                    if (f === 0) {
                      return compare(a, b, second);
                    }
                    return f;
                  })
                  .map((s, i) => {
                    if (!s) {
                      // if (!s || s.ships.length === 0) {
                      return null;
                    }

                    const all = s.pilots.map((p) => p.id);
                    const fullCount = [...new Set(all)].map((u) => ({
                      xws: u,
                      count: all.filter((a) => a === u).length,
                    }));

                    const joinedPilots = fullCount
                      .map((u) => {
                        const pilot = s.pilots.find((p) => p.id === u.xws);
                        if (!pilot) {
                          return '';
                        }

                        const name = pilotName(pilot, s.faction);
                        if (u.count > 1) {
                          return `${u.count}x ${name}`;
                        }
                        return name;
                      })
                      .join(', ');

                    return (
                      <li
                        key={`${s.vendor.lbn.uid}_${i}`}
                        className="px-4 py-3 sm:px-6 sm:py-5 relative hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          {/* <Link href={`/?uid=${s.uid}`}> */}
                          <a
                            className="flex flex-1"
                            onClick={() => {
                              router.push(`/?lbx=${serialize(s)}`);
                              onClose();
                              // router.push(`/?uid=${s.uid}`);
                            }}
                          >
                            <span className="flex-shrink-0 inline-block relative text-center">
                              <XwingFont
                                className="text-lg"
                                icon={s.faction}
                                color={colorForFactionKey(s.faction)}
                              />
                              <div
                                className="text-sm font-medium"
                                style={{ color: colorForFormat(s.format) }}
                              >
                                {s.format.substr(0, 1)}
                              </div>
                            </span>
                            <div className="flex flex-1 flex-col justify-center cursor-pointer">
                              <div className="ml-4 flex flex-col flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate flex flex-1 justify-between">
                                  <span>{s.name}</span>
                                  <span>{s.points}</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                  {joinedPilots}
                                </p>
                              </div>
                              <div className="ml-4">
                                {s.vendor.lbn.tags?.map((tag) => (
                                  <TagComponent key={tag} label={tag} />
                                ))}
                              </div>
                            </div>
                          </a>
                          {/* </Link> */}
                          <div className="ml-2 -mr-2 relative inline-block text-left">
                            <button
                              onClick={async () => {
                                mutate(
                                  '/lists',
                                  lists?.filter(
                                    (l) => l.vendor.lbn.uid !== s.vendor.lbn.uid
                                  ),
                                  false
                                );
                                await post<void>('/lists/remove', [
                                  s.vendor.lbn.uid,
                                ]);
                                mutate('/lists');
                              }}
                              className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lbnred"
                            >
                              <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </Transition>
        </section>
      </div>
    </div>
  );
};

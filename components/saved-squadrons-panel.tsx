import { Transition } from '@tailwindui/react';
import { requests } from 'lbn-core';
import { removeSquadron } from 'lbn-core/dist/actions/squadrons';
import { useLocalized } from 'lbn-core/dist/helpers/i18n';
import { loadSquadron } from 'lbn-core/dist/helpers/unit';
import { UserState } from 'lbn-core/dist/reducers/user';
import { AppState } from 'lbn-core/dist/state';
import { Ship, SquadronXWS } from 'lbn-core/dist/types';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorForFaction } from '../helpers/colors';
import XwingFont from './fonts/xwing';
import { colorForFormat } from './format';

type Props = {
  show: boolean;
  onClose: () => void;
};

export const SavedSquadronsPanel: FC<Props> = ({ show, onClose }) => {
  const { t } = useLocalized();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector<AppState, UserState>((s) => s.app.user);
  const squadronXws = useSelector<AppState, SquadronXWS[]>((s) => s.app.xws);
  const squadrons = squadronXws.map((x) => loadSquadron(x));

  const getUnique = (units: Ship[]) => {
    if (units.length === 0) {
      return undefined;
    }

    const all = units.map((u) => u.pilot.xws);
    const unique = [...new Set(all)];
    const fullCount = unique.map((u) => ({
      xws: u,
      count: all.filter((a) => a === u).length,
    }));

    return fullCount
      .map((u) => {
        const { name } = units.filter(
          (unit) => unit.pilot.xws === u.xws
        )[0].pilot;
        if (u.count > 1) {
          return `${u.count}x ${t(name)}`;
        }
        return t(name);
      })
      .join(', ');
  };

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
            className="w-screen max-w-md"
          >
            <div className="w-screen max-w-md h-screen">
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
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                </div>
                {/* <div className="mt-6 relative flex-1 px-4 sm:px-6"> */}
                <ul className="divide-y divide-gray-200 overflow-y-auto">
                  {squadrons?.map((s, i) => {
                    if (!s || s.ships.length === 0) {
                      return null;
                    }
                    const joinedPilots = getUnique(s.ships) || '';
                    return (
                      <li
                        key={`${s.uid}_${i}`}
                        className="px-6 py-5 relative hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          {/* <Link href={`/?uid=${s.uid}`}> */}
                          <a
                            className="flex flex-1"
                            onClick={() => {
                              router.push(`/?uid=${s.uid}`);
                              onClose();
                            }}
                          >
                            <span className="flex-shrink-0 inline-block relative text-center">
                              <XwingFont
                                className="text-lg"
                                icon={s.faction}
                                color={colorForFaction(s.faction)}
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
                                  <span>{s.cost}</span>
                                </p>
                                <p className="text-xs text-gray-500">
                                  {joinedPilots}
                                </p>
                              </div>
                            </div>
                          </a>
                          {/* </Link> */}
                          <div className="ml-2 relative inline-block text-left">
                            <button
                              onClick={async () => {
                                dispatch(removeSquadron(s.uid));
                                requests.default.deleteSquadron(s.uid, user);
                              }}
                              className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            </div>
          </Transition>
        </section>
      </div>
    </div>
  );
};

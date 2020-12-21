import { Transition } from '@tailwindui/react';
import sources, { SourceKey } from 'lbn-core/dist/assets/sources';
import { factions } from 'lbn-core/dist/helpers/enums';
import { State as CollectionState } from 'lbn-core/dist/reducers/collection';
import { AppState } from 'lbn-core/dist/state';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { colorForFaction } from '../helpers/colors';
import XwingFont from './fonts/xwing';

type Props = {
  show: boolean;
  onClose: () => void;
};

const extraKeys: (
  | 'Epic'
  | 'Core Sets'
  | 'Additional Ships'
  | 'Additional Pilots'
  | 'Additional Upgrades'
)[] = [
  'Epic',
  'Core Sets',
  'Additional Ships',
  'Additional Pilots',
  'Additional Upgrades',
];

const keys: SourceKey[] = [...extraKeys, ...factions];

export const CollectionsPanel: FC<Props> = ({ show, onClose }) => {
  // const { t } = useLocalized();
  // const dispatch = useDispatch();
  // const router = useRouter();
  // const user = useSelector<AppState, UserState>((s) => s.app.user);
  const collection = useSelector<AppState, CollectionState>(
    (s) => s.app.collection
  );
  const [sourceKey, setSourceKey] = useState<SourceKey>('Core Sets');

  const [showDropdown, setShowDropdown] = useState(false);

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
                <div className="px-6 pb-6">
                  <div className="flex items-start justify-between">
                    <h2
                      id="slide-over-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Collection
                    </h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-lbnred">
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="relative inline-block text-left mt-1">
                    <div>
                      <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        {sourceKey}
                        {/* <!-- Heroicon name: chevron-down --> */}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <Transition
                      show={showDropdown}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      className="origin-top-center absolute overflow-hidden left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-10"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {keys.map((f) => {
                        const getColor = () => {
                          switch (f) {
                            case 'Epic':
                            case 'Core Sets':
                            case 'Additional Pilots':
                            case 'Additional Ships':
                            case 'Additional Upgrades':
                              return undefined;
                            default:
                              return colorForFaction(f);
                          }
                        };
                        const c = getColor();

                        return (
                          <a
                            key={f}
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                            role="menuitem"
                            onClick={() => {
                              setSourceKey(f);
                              setShowDropdown(false);
                            }}
                          >
                            {/* <!-- Heroicon name: pencil-alt --> */}
                            {c && (
                              <XwingFont
                                icon={f}
                                className="text-xl w-7"
                                color={c}
                              />
                            )}
                            {f}
                          </a>
                        );
                      })}
                    </Transition>
                  </div>
                </div>

                <div className="border-b border-gray-200">
                  <div className="px-6"></div>
                </div>

                <ul className="divide-y divide-gray-200 overflow-y-auto">
                  {sources[sourceKey].map((s) => {
                    let count = 0;
                    if (sourceKey === 'Additional Ships') {
                      count = collection.ships[s.xws] || 0;
                    } else if (sourceKey === 'Additional Pilots') {
                      count = collection.pilots[s.xws] || 0;
                    } else if (sourceKey === 'Additional Upgrades') {
                      count = collection.upgrades[s.xws] || 0;
                    } else {
                      count = collection.expansions[s.xws] || 0;
                    }
                    return (
                      <li
                        key={`${s.xws}`}
                        className="px-6 py-5 relative hover:bg-gray-50"
                      >
                        <div className="flex justify-between items-center">
                          <a
                            className="-m-1 p-1 flex flex-1"
                            // onClick={() => {
                            //   router.push(`/?uid=${s.uid}`);
                            //   onClose();
                            // }}
                          >
                            <div
                              className="absolute inset-0"
                              aria-hidden="true"
                            ></div>
                            <div className="flex-1 flex items-center min-w-0 relative cursor-pointer">
                              <span className="flex-shrink-0 inline-block relative">
                                {/* <XwingFont
                                  className="text-lg"
                                  icon={s}
                                  color={colorForFaction(s.faction)}
                                /> */}
                              </span>
                              <div className="ml-4 truncate flex flex-col flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {s.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  Wave {s.wave}
                                </p>
                              </div>
                            </div>
                          </a>

                          <div className="ml-2 relative inline-block text-center flex items-center">
                            <button
                              onClick={async () => {
                                // dispatch(removeSquadron(s.uid));
                                // requests.default.deleteSquadron(s.uid, user);
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
                                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </button>
                            <span className="mx-1">{count}</span>
                            <button
                              onClick={async () => {
                                // dispatch(removeSquadron(s.uid));
                                // requests.default.deleteSquadron(s.uid, user);
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
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
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

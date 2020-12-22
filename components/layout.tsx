import { Transition } from '@tailwindui/react';
import { serializer } from 'lbn-core/dist/helpers';
import { factions } from 'lbn-core/dist/helpers/enums';
import { SquadronXWS } from 'lbn-core/dist/types';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { colorForFaction } from '../helpers/colors';
import { CollectionsPanel } from './collection-panel';
import XwingFont from './fonts/xwing';
import FormatComponent from './format';
import { LogoComponent } from './logo';
import { SavedSquadronsPanel } from './saved-squadrons-panel';

type Props = {
  loggedIn: boolean;
  xws: SquadronXWS;
  onChangeFormat: () => void;
  onPrint: () => void;
  grid: boolean;
  setGrid: (c: boolean) => void;
  actions?: { title: string; className?: string; onClick: () => void }[];
};

export const Layout: FC<Props> = ({
  loggedIn,
  xws,
  onChangeFormat,
  onPrint,
  actions,
  grid,
  setGrid,
  children,
}) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  return (
    <div>
      <div className="bg-gray-800 pb-32">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <LogoComponent />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            onClick={() => setShowAdd(!showAdd)}
                            type="button"
                            className={`inline-flex ${
                              showAdd
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            } px-3 py-2 rounded-md text-sm font-medium`}
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            New squadron
                            {/* <!-- Heroicon name: chevron-down --> */}
                            <svg
                              className="-mr-1 ml-2 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>

                        <Transition
                          show={showAdd}
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
                          {factions.map((f) => {
                            const s: SquadronXWS = {
                              uid: uuid(),
                              name: 'New Squadron',
                              format: 'Hyperspace',
                              faction: f,
                              cost: 0,
                              favourite: false,
                              pilots: [],
                            };

                            return (
                              <Link
                                key={f}
                                href={`/?lbx=${serializer.serialize(s)}`}
                              >
                                <a
                                  className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                  role="menuitem"
                                >
                                  {/* <!-- Heroicon name: pencil-alt --> */}
                                  <XwingFont
                                    icon={f}
                                    className="text-xl w-7"
                                    color={
                                      f !== 'First Order' &&
                                      f !== 'Galactic Empire'
                                        ? colorForFaction(f)
                                        : undefined
                                    }
                                  />
                                  {f}
                                </a>
                              </Link>
                            );
                          })}
                        </Transition>
                      </div>

                      {loggedIn && (
                        <button
                          onClick={() => setShowPanel(!showPanel)}
                          type="button"
                          className={
                            showPanel
                              ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                          }
                        >
                          Squadrons
                        </button>
                      )}
                      {loggedIn && (
                        <button
                          onClick={() => setShowCollection(!showCollection)}
                          type="button"
                          className={
                            showCollection
                              ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                          }
                        >
                          Collection
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  {/* <!-- Profile dropdown --> */}
                  <div className="ml-3 relative">
                    <div>
                      <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-solid text-gray-300 hover:text-white"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        {loggedIn && (
                          <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        )}
                        {!loggedIn && (
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
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            ></path>
                          </svg>
                        )}
                      </button>
                    </div>

                    <Transition
                      show={showMenu}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10"
                    >
                      <div className="py-1 rounded-md bg-white shadow-xs">
                        {loggedIn && (
                          <a
                            href="/logout"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Logout
                          </a>
                        )}
                        {!loggedIn && (
                          <a
                            href="/api/auth/facebook"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Login with Facebook
                          </a>
                        )}
                        {!loggedIn && (
                          <a
                            href="/api/auth/google"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Login with Google
                          </a>
                        )}
                      </div>
                    </Transition>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                  >
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg
                      className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                    <svg
                      className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
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
          </div>

          {/* <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      --> */}

          <div
            className={`${
              showMenu ? 'block' : 'hidden'
            } border-b border-gray-700 md:hidden`}
          >
            <div className="px-2 py-3 space-y-1 sm:px-3 grid grid-cols-7">
              {factions.map((f) => {
                const classes =
                  xws.faction === f
                    ? 'block text-center py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                    : 'block text-center py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700';

                const s: SquadronXWS = {
                  uid: uuid(),
                  name: 'New Squadron',
                  format: 'Hyperspace',
                  faction: f,
                  cost: 0,
                  favourite: false,
                  pilots: [],
                };

                return (
                  <Link key={f} href={`/?lbx=${serializer.serialize(s)}`}>
                    <a className={classes}>
                      <XwingFont
                        icon={f}
                        className="text-xl"
                        color={
                          f !== 'First Order' && f !== 'Galactic Empire'
                            ? colorForFaction(f)
                            : undefined
                        }
                      />
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="pt-3 pb-3 border-t border-gray-700">
              <div
                className="mt-3 px-2 space-y-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                {loggedIn && (
                  <a
                    href="/logout"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Logout
                  </a>
                )}
                {!loggedIn && (
                  <a
                    href="/api/auth/facebook"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Login with Facebook
                  </a>
                )}
                {!loggedIn && (
                  <a
                    href="/api/auth/google"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Login with Google
                  </a>
                )}
              </div>
            </div>
          </div>
        </nav>
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <span>
                  <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate flex items-center">
                    <XwingFont
                      icon={xws.faction}
                      color={colorForFaction(xws.faction)}
                    />
                    <span className="ml-1">{xws.name}</span>
                  </h2>
                </span>
                <div className="flex text-sm sm:text-lg font-normal">
                  <FormatComponent
                    format={xws.format}
                    onClick={onChangeFormat}
                  />
                  <h3 className="ml-1 text-gray-500 sm:truncate">
                    {xws.cost} points
                  </h3>
                </div>
              </div>
              <div className="mt-4 flex md:mt-0 md:ml-4">
                <button
                  className="text-gray-500 mr-3 hidden sm:block"
                  onClick={() => setGrid(!grid)}
                >
                  {grid && (
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  )}
                  {!grid && (
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
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
                <span className="shadow-sm rounded-md relative">
                  <button
                    onClick={onPrint}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Print
                  </button>
                </span>
                <span className="ml-3 shadow-sm rounded-md relative">
                  <button
                    onClick={() => setShowActions(!showActions)}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Export
                  </button>

                  <Transition
                    show={showActions}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    className="origin-top-right right-0 absolute mt-2 w-48 rounded-md shadow-lg z-10"
                  >
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      {actions?.map((a) => (
                        <button
                          key={a.title}
                          onClick={() => {
                            a.onClick();
                            setShowActions(false);
                          }}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer ${a.className}`}
                        >
                          {a.title}
                        </button>
                      ))}
                    </div>
                  </Transition>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-0 sm:px-6 lg:px-8">
          {loggedIn && (
            <SavedSquadronsPanel
              show={showPanel}
              onClose={() => setShowPanel(!showPanel)}
            />
          )}
          {loggedIn && (
            <CollectionsPanel
              show={showCollection}
              onClose={() => setShowCollection(!showCollection)}
            />
          )}
          {children}
        </div>
      </main>
    </div>
  );
};

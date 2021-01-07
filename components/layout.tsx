import { Transition } from '@tailwindui/react';
import { serializer } from 'lbn-core/dist/helpers';
import { factions } from 'lbn-core/dist/helpers/enums';
import { SquadronXWS } from 'lbn-core/dist/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React, { FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { colorForFaction } from '../helpers/colors';
import { ACCESS_TOKEN } from '../passport/auth-cookies';
import { CollectionsPanel } from './collection-panel';
import XwingFont from './fonts/xwing';
import FormatComponent from './format';
import { LogoComponent } from './logo';
import { SavedSquadronsPanel } from './saved-squadrons-panel';
import { SearchInput } from './search-input';

type Props = {
  loggedIn: boolean;
  xws: SquadronXWS;
  onChangeName: (name: string) => void;
  onChangeFormat: () => void;
  onPrint: () => void;
  grid: boolean;
  setGrid: (c: boolean) => void;
  actions?: { title: string; className?: string; onClick: () => void }[];
};

export const Layout: FC<Props> = ({
  loggedIn,
  xws,
  onChangeName,
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
  const [name, setName] = useState(xws.name);

  const router = useRouter();

  useEffect(() => {
    setName(xws.name);
  }, [xws]);

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
                          </button>
                        </div>

                        {showAdd && (
                          <div
                            className="fixed inset-0 z-10"
                            aria-hidden="true"
                            onClick={(e) => {
                              // @ts-ignore
                              if (e.target.id === 'background') {
                                setShowAdd(!showAdd);
                              }
                            }}
                          >
                            <div id="background" className="absolute inset-0" />
                          </div>
                        )}

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

                <SearchInput />

                <div className="hidden md:block">
                  {/* <!-- Profile dropdown --> */}
                  <div className="ml-1 relative">
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
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                        )}
                        {!loggedIn && (
                          <span
                            className={
                              showMenu
                                ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                            }
                          >
                            Login
                          </span>
                        )}
                      </button>
                    </div>

                    {showMenu && (
                      <div
                        className="fixed inset-0 z-10"
                        aria-hidden="true"
                        onClick={(e) => {
                          // @ts-ignore
                          if (e.target.id === 'background') {
                            setShowMenu(!showMenu);
                          }
                        }}
                      >
                        <div id="background" className="absolute inset-0" />
                      </div>
                    )}

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
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setCookie(null, ACCESS_TOKEN, '', {
                                path: '/',
                                maxAge: -1,
                              });
                              router.push('/');
                            }}
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
                        {!loggedIn && (
                          <a
                            href="/api/auth/apple"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Login with Apple
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
                <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 flex items-center">
                  <XwingFont
                    icon={xws.faction}
                    color={colorForFaction(xws.faction)}
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="ml-1 px-1 p-0 w-full sm:w-1/3 text-2xl font-bold bg-transparent border-none rounded-md focus:ring-2 focus:ring-lbnred"
                    placeholder="Squadron name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => onChangeName(name)}
                  />
                </h2>

                <div className="flex text-sm sm:text-lg font-normal -mt-1 sm:-mt-2">
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

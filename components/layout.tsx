import { Transition } from "@tailwindui/react";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { colorForFaction } from "../helpers/colors";
import { factions } from "../helpers/enums";
import { useJWT } from "../helpers/hooks";
import { deserialize } from "../helpers/serializer";
import { Faction, Format } from "../types";
import XwingFont from "./fonts/xwing";
import { LogoComponent } from "./logo";

type Props = {
  name: string;
  points: number;
  format: Format;
  onChangeFormat: () => void;
  actions?: { title: string; className?: string; onClick: () => void }[];
};

export const Layout: FC<Props> = ({
  name,
  points,
  format,
  onChangeFormat,
  actions,
  children,
}) => {
  const router = useRouter();
  const jwt = useJWT();
  const [showMenu, setShowMenu] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const getSelectedFaction = () => {
    const lbx = router.query.lbx;
    if (lbx) {
      return deserialize(lbx as string)?.faction;
    } else {
      return router.query.faction as Faction;
    }
  };

  const selectedFaction = getSelectedFaction();

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
                      {factions.map((f) => {
                        const classes =
                          selectedFaction === f
                            ? "px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                            : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700";
                        return (
                          <a
                            key={f}
                            href={`/?faction=${f}`}
                            className={classes}
                          >
                            <XwingFont
                              icon={f}
                              className="text-xl"
                              color={
                                f !== "First Order" && f !== "Galactic Empire"
                                  ? colorForFaction(f)
                                  : undefined
                              }
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                      aria-label="Notifications"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>

                    {/* <!-- Profile dropdown --> */}
                    <div className="ml-3 relative">
                      <div>
                        <button
                          onClick={() => setShowMenu(!showMenu)}
                          className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                          id="user-menu"
                          aria-label="User menu"
                          aria-haspopup="true"
                        >
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </button>
                      </div>
                      {/* <!--
                    Profile dropdown panel, show/hide based on dropdown state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  --> */}
                      <Transition
                        show={showMenu}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                      >
                        <div className="py-1 rounded-md bg-white shadow-xs">
                          {jwt && (
                            <a
                              href="/logout"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Logout
                            </a>
                          )}
                          {!jwt && (
                            <a
                              href="/api/auth/facebook"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Login with Facebook
                            </a>
                          )}
                          {!jwt && (
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
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                  >
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg
                      className="block h-6 w-6"
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
                      className="hidden h-6 w-6"
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
              showMenu ? "block" : "hidden"
            } border-b border-gray-700 md:hidden`}
          >
            <div className="px-2 py-3 space-y-1 sm:px-3 grid grid-cols-7">
              {factions.map((f) => {
                const classes =
                  selectedFaction === f
                    ? "block text-center py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    : "block text-center py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700";
                return (
                  <a key={f} href={`/?faction=${f}`} className={classes}>
                    <XwingFont
                      icon={f}
                      className="text-xl"
                      color={
                        f !== "First Order" && f !== "Galactic Empire"
                          ? colorForFaction(f)
                          : undefined
                      }
                    />
                  </a>
                );
              })}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-medium leading-none text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    tom@example.com
                  </div>
                </div>
              </div>
              <div
                className="mt-3 px-2 space-y-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                {jwt && (
                  <a
                    href="/logout"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Logout
                  </a>
                )}
                {!jwt && (
                  <a
                    href="/api/auth/facebook"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    role="menuitem"
                  >
                    Login with Facebook
                  </a>
                )}
                {!jwt && (
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
                <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
                  {name}
                </h2>
                <h3 className="text-lg font-normal text-gray-500 sm:text-lg sm:truncate">
                  {points} points
                </h3>
              </div>
              <div className="mt-4 flex md:mt-0 md:ml-4">
                <span className="shadow-sm rounded-md">
                  <button
                    onClick={onChangeFormat}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    {format}
                  </button>
                </span>
                <span className="ml-3 shadow-sm rounded-md relative">
                  <button
                    onClick={() => setShowActions(!showActions)}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Actions
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
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

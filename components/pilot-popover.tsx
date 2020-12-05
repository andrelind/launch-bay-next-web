import { Transition } from "@tailwindui/react";
import { red } from "lbn-core/dist/assets/colors";
import { useLocalized } from "lbn-core/dist/helpers/i18n";
import { AppState } from "lbn-core/dist/state";
import { Language, Pilot, Translation } from "lbn-core/dist/types";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  value?: Pilot;
  options: Pilot[];
  onChange: (value?: Pilot) => void;
};

const renderPilot = (
  t: (translation?: Translation | undefined) => string,
  pilot?: Pilot
) => (
  <span className="flex items-center justify-between">
    <div className="flex flex-1 flex-row justify-between items-center text-xs sm:text-sm">
      <div className="flex flex-row items-end">
        <span className="font-medium text-yellow-400 mr-1">
          {pilot?.initiative}
        </span>

        <span className="font-medium mr-1">
          {pilot?.limited !== undefined &&
            pilot?.limited > 0 &&
            `${"•".repeat(pilot?.limited)} `}
          {t(pilot?.name)}
        </span>
        <span className="italic text-gray-400">{t(pilot?.caption)}</span>
        {/* {count !== undefined && (
            <span className="text-gray-400"> ({count})</span>
          )} */}

        {!pilot && <span className="truncate text-gray-500">Select ship</span>}
      </div>
      <span className="font-medium">{pilot?.cost}</span>
    </div>
  </span>
);

export const PilotPopover: FC<Props> = ({ value, options, onChange }) => {
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t } = useLocalized(language);

  const [showMenu, setShowMenu] = useState(false);
  //   const [showDetails, setShowDetails] = useState<ShipType | undefined>();
  const [selected, setSelected] = useState(value);

  return (
    <div className="mt-1 relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        className="relative w-full bg-white hover:shadow-md rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
        // onMouseEnter={() => setShowDetails(selected)}
        // onMouseLeave={() => setShowDetails(undefined)}
      >
        {renderPilot(t, selected)}
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {/* <!-- Heroicon name: selector --> */}
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <Transition
        show={showMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 -bottom-full"
      >
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {selected && (
            <li
              role="option"
              className="text-gray-900 cursor-default select-none relative py-2 px-3 hover:bg-gray-100"
              onClick={() => {
                setSelected(undefined);
                setShowMenu(false);
                onChange(undefined);
              }}
            >
              <span className="font-normal truncate" style={{ color: red }}>
                Remove upgrade
              </span>
            </li>
          )}

          {options.map((option) => (
            <li
              key={option.xws}
              role="option"
              className="text-gray-900 cursor-default select-none relative py-2 px-3 hover:bg-gray-100"
              onClick={() => {
                setSelected(option);
                setShowMenu(false);
                onChange(option);
              }}
              //   onMouseEnter={() => setShowDetails(option)}
              //   onMouseLeave={() => setShowDetails(undefined)}
            >
              {renderPilot(t, option)}
            </li>
          ))}
        </ul>

        {/* <Transition
          show={Boolean(showDetails) && showMenu}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 p-1"
        >
          {showDetails && (
            <ShipTypeComponent shipType={showDetails} minimized={false} />
          )}
        </Transition> */}
      </Transition>

      {/* <Transition
        show={Boolean(showDetails) && !showMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 p-1"
      >
        {showDetails && (
          <ShipTypeComponent shipType={showDetails} minimized={false} />
        )}
      </Transition> */}
    </div>
  );
};

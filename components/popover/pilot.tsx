import { Transition } from '@tailwindui/react';
import { useLocalized } from 'lbn-core/dist/helpers/i18n';
import {
  limitedWarning,
  pilotFormatWarning,
} from 'lbn-core/dist/helpers/unique';
import { pilotOptions } from 'lbn-core/dist/loader';
import { AppState } from 'lbn-core/dist/state';
import {
  Faction,
  Format,
  Language,
  Pilot,
  Ship,
  ShipType,
} from 'lbn-core/dist/types';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { popoverDetailStyle, popoverStyle } from '../../helpers/popover';
import { FormatError } from '../format-error';
import { LimitError } from '../limit-error';
import PilotComponent from '../pilot';
import { SlimPilot } from '../slim/pilot';

type Props = {
  value?: Pilot;
  ship: Ship | ShipType;
  faction: Faction;
  format: Format;
  usedXws: string[];
  onChange: (value?: Pilot) => void;
  halfWidth?: boolean;
  shadow?: boolean;
};

export const PilotPopover: FC<Props> = ({
  value,
  onChange,
  halfWidth,
  ship,
  format,
  faction,
  usedXws,
  shadow,
}) => {
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t } = useLocalized(language);

  const [showMenu, setShowMenu] = useState(false);
  const [showDetails, setShowDetails] = useState<Pilot | undefined>();
  const [selected, setSelected] = useState(value);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const options = pilotOptions(faction, format, ship.xws, t).filter(
    (f) => f.xws !== selected?.xws
  );
  const formatWarning =
    selected && pilotFormatWarning(selected, ship?.size, format);
  const warning =
    selected &&
    limitedWarning(selected?.xws, selected?.limited, usedXws, false);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
          setPos({ x: rect.x, y: rect.y });
          setShowMenu(!showMenu);
        }}
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        className="relative w-full bg-white hover:shadow rounded-md pl-2 pr-5 sm:pl-3 sm:pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-lbnred-500 focus:border-lbnred-500 text-xs sm:text-sm cursor-pointer"
        onMouseEnter={(e) => {
          if (!process.browser || window.innerWidth < 640) {
            return;
          }
          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
          setPos({ x: rect.x, y: rect.y });
          setShowDetails(selected);
        }}
        onMouseLeave={() => !showMenu && setShowDetails(undefined)}
      >
        <SlimPilot pilot={selected} ship={ship} />

        {formatWarning && <FormatError />}
        {warning && <LimitError limit={value?.limited || 0} />}

        <span className="hidden sm:inline-block ml-1 sm:ml-3 absolute inset-y-0 top-2 right-0 pr-2">
          {/* <!-- Heroicon name: selector --> */}
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
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

      {selected && (
        <button
          className="sm:hidden absolute inset-y-0 right-0.5 text-gray-400"
          onClick={(e) => {
            const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
            setPos({ x: rect.x, y: rect.y });
            setShowDetails(selected);
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      )}

      {(showMenu ||
        (showDetails && process.browser && window.innerWidth < 640)) && (
        <div
          className="fixed inset-0 z-10"
          aria-hidden="true"
          onClick={(e) => {
            // @ts-ignore
            if (e.target.id === 'background') {
              setShowMenu(false);
              setShowDetails(undefined);
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
        className={`absolute mt-1 w-full ${
          halfWidth && 'sm:w-1/2'
        } rounded-md bg-white shadow-lg z-10`}
        style={popoverStyle(pos)}
      >
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="relative max-h-56 rounded-md py-1 text-xs sm:text-sm ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {/* {selected && (
            <li
              role="option"
              className="text-gray-900 cursor-default select-none relative py-2 px-1 sm:px-3 hover:bg-gray-100"
              onClick={() => {
                setSelected(undefined);
                setShowMenu(false);
                onChange(undefined);
              }}
            >
              <span
                className="font-normal truncate text-xs sm:text-sm"
                style={{ color: red }}
              >
                Remove pilot
              </span>
            </li>
          )} */}

          {options.map((option) => (
            <li
              key={option.xws}
              role="option"
              className="text-gray-900 cursor-default select-none relative py-2 px-1 sm:px-3 hover:bg-gray-100"
              onClick={() => {
                setSelected(option);
                setShowMenu(false);
                onChange(option);
              }}
              onMouseEnter={() => setShowDetails(option)}
              onMouseLeave={() => setShowDetails(undefined)}
            >
              <SlimPilot pilot={option} />
              {limitedWarning(option.xws, option.limited, usedXws, true) && (
                <LimitError limit={option.limited} />
              )}
            </li>
          ))}
        </ul>

        <Transition
          show={Boolean(showDetails) && showMenu}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="absolute w-full rounded-md bg-white shadow-lg z-10 p-1 hidden sm:block"
          style={popoverDetailStyle(pos)}
        >
          {showDetails && (
            <PilotComponent pilot={showDetails} ship={ship} showBaseCost />
          )}
        </Transition>
      </Transition>

      <Transition
        show={Boolean(showDetails) && !showMenu}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 p-1"
        style={popoverStyle(pos)}
      >
        {showDetails && (
          <PilotComponent pilot={showDetails} ship={ship} showBaseCost />
        )}
      </Transition>
    </div>
  );
};

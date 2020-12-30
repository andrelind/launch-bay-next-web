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
  Translation,
} from 'lbn-core/dist/types';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { popoverDetailStyle, popoverStyle } from '../helpers/popover';
import { FormatError } from './format-error';
import { LimitError } from './limit-error';
import PilotComponent from './pilot';
import { StatsComponent } from './ship-stats';

const renderPilot = (
  t: (translation?: Translation | undefined) => string,
  pilot?: Pilot,
  ship?: Ship | ShipType
) => (
  <span className="flex items-center justify-between text-xs sm:text-sm">
    <div className="flex flex-1 flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <span className="font-medium text-yellow-400 mr-1">
          {pilot?.initiative}
        </span>

        <div className="flex flex-col">
          <span className="font-medium mr-1">
            {pilot?.limited !== undefined &&
              pilot?.limited > 0 &&
              `${'•'.repeat(pilot?.limited)} `}
            {t(pilot?.name)}
          </span>
          <span className="italic text-gray-400 sm:visible">
            {t(pilot?.caption)}
          </span>
        </div>

        {/* {count !== undefined && (
            <span className="text-gray-400"> ({count})</span>
          )} */}

        {!pilot && <span className="truncate text-gray-500">Select pilot</span>}
      </div>
      {ship && (
        <StatsComponent
          stats={ship?.stats}
          force={pilot?.force}
          charges={pilot?.charges}
        />
      )}
      <span className="font-medium">
        {(ship as Ship)?.pointsWithUpgrades || pilot?.cost}
      </span>
    </div>
  </span>
);

type Props = {
  value?: Pilot;
  ship: Ship | ShipType;
  faction: Faction;
  format: Format;
  usedXws: string[];
  onChange: (value?: Pilot) => void;
  halfWidth?: boolean;
};

export const PilotPopover: FC<Props> = ({
  value,
  onChange,
  halfWidth,
  ship,
  format,
  faction,
  usedXws,
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
  const formatWarning = pilotFormatWarning(value, ship?.size, format);
  const warning =
    value && limitedWarning(value?.xws, value?.limited, usedXws, false);

  return (
    <div className="mt-1 relative">
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
        className="relative w-full bg-white hover:shadow-md rounded-md pl-1 sm:pl-3 pr-8 sm:pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-lbnred-500 focus:border-lbnred-500 text-xs sm:text-sm cursor-pointer"
        onMouseEnter={(e) => {
          const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
          setPos({ x: rect.x, y: rect.y });
          setShowDetails(selected);
        }}
        onMouseLeave={() => !showMenu && setShowDetails(undefined)}
      >
        {renderPilot(t, selected, selected && ship)}
        {formatWarning && <FormatError />}
        {warning && <LimitError limit={value?.limited || 0} />}
        <span className="ml-1 sm:ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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

      {showMenu && (
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0"
            onClick={() => {
              setShowMenu(!showMenu);
              setShowDetails(undefined);
            }}
          ></div>
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
              {renderPilot(t, option)}
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
          {showDetails && <PilotComponent pilot={showDetails} ship={ship} />}
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
        {showDetails && <PilotComponent pilot={showDetails} ship={ship} />}
      </Transition>
    </div>
  );
};

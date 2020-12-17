import { Transition } from '@tailwindui/react';
import { red } from 'lbn-core/dist/assets/colors';
import { useLocalized } from 'lbn-core/dist/helpers/i18n';
import { AppState } from 'lbn-core/dist/state';
import {
  Language,
  Slot,
  Translation,
  Upgrade,
  UpgradeSide,
} from 'lbn-core/dist/types';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { popoverDetailStyle, popoverStyle } from '../helpers/popover';
import { XwingFont } from './fonts/xwing';
import StatsComponent from './ship-stats';
import UpgradeComponent from './upgrade';

type Props = {
  slot: Slot;
  value?: Upgrade;
  options: Upgrade[];
  side: number;
  onChange: (value?: Upgrade) => void;
};

const renderUpgrade = (
  t: (translation?: Translation | undefined) => string,
  slot: Slot,
  upgrade?: Upgrade,
  side?: UpgradeSide
) => (
  <span className="flex items-center justify-between text-xs sm:text-sm">
    <div className="flex items-center">
      <XwingFont className={`${!upgrade && 'text-gray-500'}`} icon={slot} />

      {upgrade && (
        <span className="ml-2 word-wrap font-medium">
          {upgrade.limited > 0 && `${'•'.repeat(upgrade.limited)} `}
          {t(side?.title)}
        </span>
      )}
      <StatsComponent charges={side?.charges} force={side?.force} />
      {!upgrade && <span className="ml-3 truncate text-gray-500">{slot}</span>}
    </div>
    <span className="ml-1 pr-1 sm:ml-3 font-medium truncate">
      {upgrade?.finalCost}
    </span>
  </span>
);

export const UpgradePopover: FC<Props> = ({
  slot,
  value,
  options,
  side = 0,
  onChange,
}) => {
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t } = useLocalized(language);

  const [showMenu, setShowMenu] = useState(false);
  const [showDetails, setShowDetails] = useState<Upgrade | undefined>();
  const [selected, setSelected] = useState(value);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  let upgradeSide = selected?.sides[side];
  if (!upgradeSide) {
    upgradeSide = selected?.sides[0];
  }

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
        onMouseLeave={() => {
          !showMenu && setShowDetails(undefined);
        }}
      >
        {renderUpgrade(t, slot, selected, upgradeSide)}
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
        className={`absolute mt-1 w-full rounded-md bg-white shadow-lg z-10`}
        style={popoverStyle(pos)}
      >
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="relative max-h-56 rounded-md py-1 text-xs sm:text-sm ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {selected && (
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
                Remove upgrade
              </span>
            </li>
          )}

          {options.map((upgrade) => (
            <li
              key={upgrade.xws}
              role="option"
              className="text-gray-900 cursor-default select-none relative py-2 px-1 sm:px-3 hover:bg-gray-100"
              onClick={() => {
                setSelected(upgrade);
                setShowMenu(false);
                onChange(upgrade);
              }}
              onMouseEnter={() => setShowDetails(upgrade)}
              onMouseLeave={() => setShowDetails(undefined)}
            >
              {renderUpgrade(t, slot, upgrade, upgrade.sides[side])}
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
            <UpgradeComponent
              upgrade={showDetails}
              side={side}
              showType={true}
              minimized={false}
            />
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
          <UpgradeComponent
            upgrade={showDetails}
            side={side}
            showType={true}
            minimized={false}
          />
        )}
      </Transition>
    </div>
  );
};

import { Pilot, ShipType } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import { colorForFaction } from '../../helpers/colors';
import { TShip } from '../../helpers/loading';
import ShipFont from '../fonts/ships';
import XwingFont from '../fonts/xwing';
import { StatsComponent } from '../ship-stats';

type Props = {
  pilot?: Pilot;
  ship?: TShip | ShipType;
  hideStats?: boolean;
  showFaction?: boolean;
  showBaseCost?: boolean;
};

export const SlimPilot: FC<Props> = ({
  pilot,
  ship,
  hideStats,
  showFaction,
}) => {
  return (
    <li className="flex items-center justify-between text-xs sm:text-sm">
      <div className="flex flex-1 flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          {ship && showFaction && (
            <XwingFont
              icon={ship.faction}
              className="mr-1"
              color={colorForFaction(ship.faction)}
            />
          )}
          <span />
          <div className="flex flex-col">
            <span className="font-medium text-yellow-400 mr-1">
              {pilot?.initiative}
            </span>
            {ship && <ShipFont icon={ship?.xws} />}
          </div>

          <div className="flex flex-col">
            <span className="font-medium mr-1">
              {pilot?.limited !== undefined &&
                pilot?.limited > 0 &&
                `${'•'.repeat(pilot?.limited)} `}
              {pilot?.name}
            </span>
            <span className="pl-1 italic text-gray-400 sm:block text-xs">
              {pilot?.caption}
            </span>
          </div>

          {/* {count !== undefined && (
              <span className="text-gray-400"> ({count})</span>
            )} */}

          {!pilot && (
            <span className="truncate text-gray-500">Select pilot</span>
          )}
        </div>
        {ship && !hideStats && (
          <StatsComponent
            stats={ship?.stats}
            force={pilot?.force}
            charges={pilot?.charges}
          />
        )}

        {Boolean(pilot) && (
          <div className="flex flex-col items-center">
            <span className="font-medium">{pilot?.cost}</span>
            {ship && (
              <span className="font-normal text-xs">
                {`${
                  // @ts-ignore
                  (ship?.pointsWithUpgrades || pilot?.cost || 0) -
                  (pilot?.cost || 0)
                }/${pilot?.loadout}`}
              </span>
            )}
            {!ship && (
              <span className="font-normal text-xs">{pilot?.loadout}</span>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

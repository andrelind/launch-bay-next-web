import { slotKeys } from 'lbn-core/dist/helpers/enums';
import { Ship } from 'lbn-core/dist/types';
import React from 'react';
import { ActionsComponent } from './actions';
import ShipStats from './ship-stats';

type Props = {
  ship: Ship;
  count?: number;
  hideName?: boolean;
  thinName?: boolean;
  showCostWithUpgrades: boolean;
  hideUpgrades: boolean;
  limitWarning?: boolean;
  minimized: boolean;
};

const Unit = ({
  ship,
  count,
  // hideName,
  // thinName,
  // showCostWithUpgrades,
  // hideUpgrades,
  // limitWarning,
  minimized,
}: Props) => {
  const upgrades: string[] = [];
  slotKeys.forEach((key) => {
    const slots = ship.upgrades && ship.upgrades[key];
    if (slots) {
      upgrades.push(...slots.map((u) => u.sides[0].title));
    }
  });

  // let errorText;
  // if (limitWarning) {
  //   errorText = `Only ${ship.pilot.limited} allowed in a squadron`;
  // }

  return (
    <div className="flex flex-1">
      <div className="flex flex-1 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-end items-center">
        <div className="flex flex-1 flex-row justify-between text-sm">
          <div className="flex flex-row items-center">
            <span className="font-medium text-yellow-400 mr-1">
              {ship.pilot.initiative}
            </span>
            <div>
              <div className="font-medium mr-1">
                {ship.pilot.limited > 0 && `${'•'.repeat(ship.pilot.limited)} `}
                {ship.pilot.name}
              </div>
              <div className="italic text-gray-400 text-xs">
                {ship.pilot.caption}
              </div>
              {count !== undefined && (
                <span className="text-gray-400"> ({count})</span>
              )}
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <ShipStats
            initiative={minimized ? undefined : ship.pilot.initiative}
            engagement={ship.pilot.engagement}
            stats={ship.stats}
            force={ship.pilot.force}
            charges={ship.pilot.charges}
          />
        </div>

        <div className="hidden sm:block">
          {ship.pilot?.shipActions && (
            <ActionsComponent actions={ship.pilot.shipActions} />
          )}
          {!ship.pilot?.shipActions && (
            <ActionsComponent actions={ship.actions} />
          )}
        </div>
      </div>
      <div className="font-medium text-sm text-right self-start lg:self-center">
        {ship.pilot.cost} points
      </div>
    </div>
  );
};

export default Unit;

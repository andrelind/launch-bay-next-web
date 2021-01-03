import { useLocalized } from 'lbn-core/dist/helpers/i18n';
import { AppState } from 'lbn-core/dist/state';
import { Language, Pilot, Ship, ShipType } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { colorForFaction } from '../../helpers/colors';
import ShipFont from '../fonts/ships';
import XwingFont from '../fonts/xwing';
import { StatsComponent } from '../ship-stats';

type Props = {
  pilot?: Pilot;
  ship?: Ship | ShipType;
  hideStats?: boolean;
  showFaction?: boolean;
};

export const SlimPilot: FC<Props> = ({
  pilot,
  ship,
  hideStats,
  showFaction,
}) => {
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t } = useLocalized(language);

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
              {t(pilot?.name)}
            </span>
            <span className="pl-1 italic text-gray-400 sm:visible text-xs">
              {t(pilot?.caption)}
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
        <span className="font-medium">
          {(ship as Ship)?.pointsWithUpgrades || pilot?.cost}
        </span>
      </div>
    </li>
  );
};

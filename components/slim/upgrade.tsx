import { Slot, Upgrade } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import { colorForFaction } from '../../helpers/colors';
import { getUpgradeCost } from '../../helpers/cost';
import { XwingFont } from '../fonts/xwing';
import { StatsComponent } from '../ship-stats';

type Props = {
  slot?: Slot;
  upgrade?: Upgrade;
  side?: number;
  showFactions?: boolean;
};

export const SlimUpgrade: FC<Props> = ({
  slot,
  upgrade,
  side,
  showFactions,
}) => {
  const upgradeSide = upgrade?.sides[side || 0];

  const factions = upgrade?.restrictions
    ?.map((r) => r.factions)
    .reduce((a, c) => [...(a || []), ...(c || [])], []);

  return (
    <span className="flex items-center justify-between text-xs sm:text-sm">
      <div className="flex items-center">
        {showFactions &&
          factions?.map((f) => (
            <XwingFont icon={f} className="mr-1" color={colorForFaction(f)} />
          ))}
        {upgradeSide?.slots.map((s, i) => (
          <XwingFont key={`${s}_${i}`} icon={s} />
        ))}
        {!upgradeSide && slot && (
          <XwingFont className="text-gray-500" icon={slot} />
        )}

        {upgrade && (
          <span className="ml-2 word-wrap font-medium">
            {upgrade.limited > 0 && `${'•'.repeat(upgrade.limited)} `}
            {upgradeSide?.title}
          </span>
        )}
        <StatsComponent
          charges={upgradeSide?.charges}
          force={upgradeSide?.force}
        />
        {!upgrade && slot && (
          <span className="ml-2 word-wrap text-gray-500">{slot}</span>
        )}
      </div>
      <span className="ml-1 pr-1 sm:ml-3 font-medium text-right word-wrap">
        {upgrade?.finalCost === -1
          ? getUpgradeCost(upgrade?.cost)
          : upgrade?.finalCost}
      </span>
    </span>
  );
};

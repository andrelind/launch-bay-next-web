import { useLocalized } from 'lbn-core/dist/helpers/i18n';
import { AppState } from 'lbn-core/dist/state';
import { Language, Slot, Upgrade } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getUpgradeCost } from '../../helpers/cost';
import { XwingFont } from '../fonts/xwing';
import { StatsComponent } from '../ship-stats';

type Props = {
  slot?: Slot;
  upgrade?: Upgrade;
  side?: number;
};

export const SlimUpgrade: FC<Props> = ({ slot, upgrade, side }) => {
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t } = useLocalized(language);

  const upgradeSide = upgrade?.sides[side || 0];

  return (
    <span className="flex items-center justify-between text-xs sm:text-sm">
      <div className="flex items-center">
        {upgradeSide?.slots.map((s, i) => (
          <XwingFont key={`${s}_${i}`} icon={s} />
        ))}
        {!upgradeSide && slot && (
          <XwingFont className="text-gray-500" icon={slot} />
        )}

        {upgrade && (
          <span className="ml-2 word-wrap font-medium">
            {upgrade.limited > 0 && `${'•'.repeat(upgrade.limited)} `}
            {t(upgradeSide?.title)}
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

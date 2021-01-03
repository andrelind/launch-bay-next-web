import { useLocalized } from 'lbn-core/dist/helpers/i18n';
import { AppState } from 'lbn-core/dist/state';
import { Language, ShipType } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { colorForFaction } from '../../helpers/colors';
import ShipFont from '../fonts/ships';
import XwingFont from '../fonts/xwing';

type Props = {
  shipType?: ShipType;
  showFaction?: boolean;
};

export const SlimShip: FC<Props> = ({ shipType, showFaction }) => {
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t } = useLocalized(language);

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center text-xs sm:text-sm">
        {shipType && showFaction && (
          <XwingFont
            icon={shipType?.faction}
            className="mr-1"
            color={colorForFaction(shipType.faction)}
          />
        )}
        <ShipFont
          className={`${!shipType && 'text-gray-500'}`}
          icon={shipType?.xws}
        />

        {shipType && (
          <span className="ml-2 truncate font-medium">{t(shipType?.name)}</span>
        )}
        {!shipType && (
          <span className="truncate text-gray-500">Select ship</span>
        )}
      </div>
    </li>
  );
};

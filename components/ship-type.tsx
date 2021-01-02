import { ShipType } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import { AbilityComponent } from './ability';
import ActionsComponent from './actions';
import BaseSize from './base-size';
import { DialComponent } from './dial';
import XwingFont from './fonts/xwing';
import { StatsComponent } from './ship-stats';
import { SlimShip } from './slim/ship';

type Props = {
  shipType: ShipType;
};

export const ShipTypeComponent: FC<Props> = ({ shipType }) => {
  return (
    <div className="flex flex-1 flex-col m-2">
      <SlimShip shipType={shipType} />

      <div className="flex flex-row items-center hidden sm:block">
        <div className="flex flex-1 flex-col sm:flex-row justify-between">
          <StatsComponent stats={shipType?.stats} vertical />
          {shipType && <DialComponent dial={shipType?.dial} />}
          {shipType && (
            <ActionsComponent actions={shipType?.actions} vertical />
          )}
        </div>
      </div>

      {shipType?.ability && <AbilityComponent ability={shipType.ability} />}

      <div className="flex-1 justify-between items-center hidden sm:flex">
        <span>
          {shipType.pilots.length > 0 &&
            shipType.pilots
              .sort((a, b) => a.initiative - b.initiative)[0]
              .slots.map((s, i) => (
                <XwingFont key={`${s}_${i}`} icon={s} className="mr-1" />
              ))}
        </span>
        <BaseSize size={shipType.size} />
      </div>
    </div>
  );
};

export default ShipTypeComponent;

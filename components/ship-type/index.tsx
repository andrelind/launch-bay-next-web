import React from 'react';
import { ShipType } from 'types';

import Ability from '../ability';
import BaseSize from '../base-size';
import Dial from '../dial';
import ShipStats from '../ship-stats';
import { ActionIcons, Block, Count, LeftWrapper, PilotName, ShipIcon, Wrapper } from './styles';

type Props = {
  shipType: ShipType;
  count?: number;
  minimized: boolean;
};

export const ShipTypeComponent = ({ shipType, count, minimized }: Props) => {
  // All this just to get the ship ability...
  const abilities = shipType.pilots
    .map(p => (p.shipAbility ? p.shipAbility.name : undefined))
    .filter(x => x);
  const showShipAbility =
    Array.from(new Set(abilities)).length === 1 &&
    abilities.length === shipType.pilots.length;

  return (
    <Block style={{ flexDirection: minimized ? 'row' : 'column' }}>
      <LeftWrapper>
        <ShipIcon icon={shipType.xws} />
        <PilotName>
          {shipType.name}
          {count !== undefined && <Count> ({count})</Count>}
        </PilotName>
        <BaseSize size={shipType.size} />
      </LeftWrapper>

      <Wrapper>
        <ShipStats stats={shipType.stats} minimized={minimized} />
        {!minimized && <Dial dial={shipType.dial} />}
      </Wrapper>

      {!minimized &&
        showShipAbility &&
        shipType.pilots[0] &&
        shipType.pilots[0].shipAbility && (
          <Ability ability={shipType.pilots[0].shipAbility} />
        )}
      <LeftWrapper>
        {shipType.pilots.length > 0 &&
          shipType.pilots
            .sort((a, b) => a.initiative - b.initiative)[0]
            .slots.map((s, i) => <ActionIcons key={`${s}_${i}`} icon={s} />)}
      </LeftWrapper>
    </Block>
  );
};

export default ShipTypeComponent;

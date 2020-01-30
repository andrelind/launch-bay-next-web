import React from 'react';

import conditionData from '../../assets/data/conditions';
import { slotKeys } from '../../helpers/enums';
import { Ship } from '../../types';
import Ability from '../ability';
import Actions from '../actions';
import BaseSize from '../base-size';
import Dial from '../dial';
import Error from '../error';
import FormattedText from '../formatted-text';
import ShipStats from '../ship-stats';
import { Block, Count, Name, Points, ShipIcon, ShipText, ShipWrapper, StatsWrapper, TopWrapper, Upgrades } from './styles';

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
  hideName,
  thinName,
  showCostWithUpgrades,
  hideUpgrades,
  limitWarning,
  minimized,
}: Props) => {
  const upgrades: string[] = [];
  slotKeys.forEach(key => {
    const slots = ship.upgrades && ship.upgrades[key];
    if (slots) {
      upgrades.push(...slots.map(u => u.name));
    }
  });

  let errorText;
  if (limitWarning) {
    errorText = `Only ${ship.pilot.limited} allowed in a squadron`;
  }

  return (
    <Block>
      <TopWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: minimized ? 'row' : 'column',
            alignItems: minimized ? 'center' : 'flex-start',
          }}
        >
          <div style={{ marginRight: 5 }}>
            <ShipStats
              initiative={minimized ? ship.pilot.initiative : undefined}
              engagement={ship.pilot.engagement}
              minimized={minimized}
            />
          </div>

          {(!hideName || minimized) && (
            <Name thin={thinName}>
              {ship.pilot.limited > 0 && `${'•'.repeat(ship.pilot.limited)} `}
              {ship.pilot.name}
              {count !== undefined && <Count> ({count})</Count>}
            </Name>
          )}
          {!minimized && (
            <ShipWrapper>
              <ShipIcon icon={ship.xws} />
              <ShipText>{ship.name}</ShipText>
            </ShipWrapper>
          )}
        </div>

        <div
          style={{
            alignItems: 'flex-end',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {showCostWithUpgrades && <Points>{ship.pointsWithUpgrades}</Points>}
          {!showCostWithUpgrades && <Points>{ship.pilot.cost}</Points>}
          {!minimized && <BaseSize size={ship.size} />}
        </div>
      </TopWrapper>

      <StatsWrapper minimized={minimized}>
        <ShipStats
          initiative={minimized ? undefined : ship.pilot.initiative}
          engagement={ship.pilot.engagement}
          stats={ship.stats}
          force={ship.pilot.force}
          charges={ship.pilot.charges}
          minimized={minimized}
        />

        {!minimized && <Dial dial={ship.dial} />}

        {ship.pilot && ship.pilot.shipActions && (
          <Actions minimized={minimized} actions={ship.pilot.shipActions} />
        )}
        {ship.pilot && !ship.pilot.shipActions && (
          <Actions minimized={minimized} actions={ship.actions} />
        )}
      </StatsWrapper>

      {!minimized && ship.pilot.ability && (
        <FormattedText text={ship.pilot.ability} />
      )}
      {!minimized && ship.pilot.shipAbility && (
        <Ability ability={ship.pilot.shipAbility} style={{ marginTop: 5 }} />
      )}
      {!minimized &&
        !ship.pilot.ability &&
        !ship.pilot.shipAbility &&
        ship.pilot.text && (
          <FormattedText text={ship.pilot.text} fontStyle="italic" />
        )}

      {!minimized &&
        ship.pilot &&
        ship.pilot.conditions &&
        ship.pilot.conditions.map(c => {
          const condition = conditionData.filter(cc => cc.xws === c)[0];
          return (
            <FormattedText
              key={c}
              text={`<strong>${condition.name}:</strong> ${condition.ability}`}
            />
          );
        })}

      {!hideUpgrades && upgrades.length > 0 && (
        <Upgrades>{upgrades.join(', ')}</Upgrades>
      )}
      {errorText && <Error text={errorText} />}
    </Block>
  );
};

export default Unit;

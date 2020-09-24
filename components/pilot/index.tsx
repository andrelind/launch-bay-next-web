import React from 'react';
import { View } from 'react-native';

import conditionData from '../../assets/data/conditions';
import { Pilot, ShipType } from '../../types';
import Actions from '../actions';
import Dial from '../dial';
import Error from '../error';
import FormattedText from '../formatted-text';
import ShipStats from '../ship-stats';
import {
  Block,
  Count,
  Icon,
  MiddleWrapper,
  Name,
  NameWrapper,
  ShipIcon,
  ShipText,
  ShipWrapper,
  SlotWrapper,
} from './styles';

type Props = {
  pilot: Pilot;
  ship?: ShipType;
  count?: number;
  showDial?: boolean;
  limitWarning?: boolean;
  minimized: boolean;
};

const PilotComponent = ({
  pilot,
  ship,
  count,
  showDial = false,
  limitWarning,
  minimized,
}: Props) => {
  let errorText;
  if (limitWarning) {
    errorText = `Only ${pilot.limited} allowed in a squadron`;
  }

  return (
    <Block>
      <NameWrapper>
        <View style={{ flexDirection: 'row' }}>
          {minimized && (
            <View style={{ marginRight: 5 }}>
              <ShipStats initiative={pilot.initiative} minimized={minimized} />
            </View>
          )}

          <Name>
            {pilot.limited > 0 && `${'•'.repeat(pilot.limited)} `}
            {pilot.name}
            {count !== undefined && <Count> ({count})</Count>}
          </Name>
        </View>
        <Name>{pilot.cost}</Name>
      </NameWrapper>

      {ship && (
        <ShipWrapper>
          <ShipIcon icon={ship.xws} />
          <ShipText>{ship.name}</ShipText>
        </ShipWrapper>
      )}

      {!minimized && (
        <MiddleWrapper>
          {ship && (
            <ShipStats
              stats={ship.stats}
              initiative={pilot.initiative}
              charges={pilot.charges}
              force={pilot.force}
              minimized={false}
            />
          )}
          {ship && showDial && <Dial dial={ship.dial} />}
          {pilot.shipActions && (
            <Actions minimized={minimized} actions={pilot.shipActions} />
          )}
          {!pilot.shipActions && ship && (
            <Actions minimized={minimized} actions={ship.actions} />
          )}
        </MiddleWrapper>
      )}

      {pilot.ability && <FormattedText text={pilot.ability.en} />}
      {!minimized && pilot.text && (
        <FormattedText text={pilot.text.en} fontStyle="italic" />
      )}

      {pilot.conditions &&
        pilot.conditions.map(c => {
          const condition = conditionData.filter(cc => cc.xws === c)[0];
          return (
            <FormattedText
              key={c}
              text={`<strong>${condition.name}:</strong> ${condition.ability}`}
            />
          );
        })}

      <SlotWrapper>
        {pilot.slots.map((slot, i) => (
          <Icon key={`${slot}_${i}`} icon={slot} />
        ))}
      </SlotWrapper>
      {errorText && <Error text={errorText} />}
    </Block>
  );
};

export default PilotComponent;

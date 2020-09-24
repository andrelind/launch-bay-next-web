import React from 'react';

import { purple, red, yellow } from '../../assets/colors';
import conditionData from '../../assets/data/conditions';
import { Upgrade } from '../../types';
import Error from '../error';
import FormattedText from '../formatted-text';
import Grants from '../grants';
import {
  AttackIcon,
  AttackText,
  AttackWrapper,
  Block,
  CenterWrapper,
  ChargeIcon,
  ChargeText,
  Count,
  DiceCount,
  Icon,
  LeftWrapper,
  MultipleSlotIcon,
  MultipleSlotWrapper,
  Name,
  Points,
  RangeText,
  RecurringIcon,
  RightWrapper,
} from './styles';

type Props = {
  upgrade: Upgrade;
  side: number;
  showType: boolean;
  count?: number;
  limitWarning?: boolean;
  minimized: boolean;
};

const UpgradeComponent = ({
  upgrade,
  side,
  showType,
  count,
  limitWarning,
  minimized,
}: Props) => {
  // const restrictedSlots = props.restrictions
  //   ? props.restrictions.filter(p => p.type === 'slot' && p.min_value)
  //   : null;

  // const isAvailable = available > 0;
  // const color = black;

  let errorText;
  if (limitWarning) {
    errorText = `Only ${upgrade.limited} allowed in a squadron`;
  }

  let upgradeSide = upgrade.sides[side || 0];
  if (!upgradeSide) {
    upgradeSide = upgrade.sides[0];
  }
  const { attack, charges, force, device, conditions, grants } = upgradeSide;

  return (
    <Block>
      {showType && (
        <LeftWrapper>
          <Icon icon={upgradeSide.type} />
        </LeftWrapper>
      )}

      <CenterWrapper>
        <MultipleSlotWrapper>
          <Name>
            {upgrade.limited > 0 && `${'•'.repeat(upgrade.limited)} `}
            {upgradeSide.title.en}
            {count !== undefined && <Count> ({count})</Count>}
          </Name>

          {force && (
            <MultipleSlotWrapper style={{ marginLeft: 5 }}>
              <ChargeIcon icon="Force Power" color={purple} />
              {force.recovers === 1 && (
                <RecurringIcon icon="recurring" color={purple} />
              )}
              <ChargeText style={{ color: purple }}>{force.value}</ChargeText>
            </MultipleSlotWrapper>
          )}

          {charges && (
            <MultipleSlotWrapper style={{ marginLeft: 5 }}>
              <ChargeIcon icon="charge" color={yellow} />
              {charges.recovers === 1 && (
                <RecurringIcon icon="recurring" color={yellow} />
              )}
              <ChargeText style={{ color: yellow }}>{charges.value}</ChargeText>
            </MultipleSlotWrapper>
          )}
        </MultipleSlotWrapper>

        {!minimized && upgradeSide.ability && (
          <FormattedText text={upgradeSide.ability.en} />
        )}
        {!minimized && upgradeSide.text && (
          <FormattedText text={upgradeSide.text.en} fontStyle="italic" />
        )}

        {!minimized && device && (
          <FormattedText text={`<strong>Effect:</strong> ${device.effect}`} />
        )}

        {!minimized &&
          conditions &&
          conditions.map(c => {
            const condition = conditionData.filter(cc => cc.xws === c)[0];
            return (
              <FormattedText
                key={c}
                text={`<strong>${condition.name}:</strong> ${condition.ability}`}
              />
            );
          })}

        <MultipleSlotWrapper>
          {upgradeSide.slots.length > 1 &&
            upgradeSide.slots.map((s, i) => (
              <MultipleSlotIcon key={`${s}_${i}`} icon={s} />
            ))}
        </MultipleSlotWrapper>

        {errorText && <Error text={errorText} />}
      </CenterWrapper>

      <RightWrapper>
        <Points>{upgrade.finalCost}</Points>
        {!minimized && attack && attack.ordnance && (
          <AttackIcon icon="ordnance" />
        )}
        {!minimized && attack && (
          <AttackWrapper>
            <AttackText>
              <AttackIcon icon={attack.arc} color={red} />
              <DiceCount>{attack.value}</DiceCount>
            </AttackText>
            <RangeText>
              {attack.minrange !== attack.maxrange &&
                `${attack.minrange}-${attack.maxrange}`}
              {attack.minrange === attack.maxrange && `${attack.minrange}`}
            </RangeText>
          </AttackWrapper>
        )}
        {!minimized && grants && <Grants grants={grants} />}
      </RightWrapper>
    </Block>
  );
};

export default UpgradeComponent;

import React from 'react';

import FormattedText from '../formatted-text';
import { Ability, AbilityText } from './styles';

type Props = {
  ability: { name: string; text: string };
  style?: Object;
};

export const AbilityComponent = ({ ability, style }: Props) => (
  <Ability style={style}>
    {ability.name}:{' '}
    <AbilityText>
      <FormattedText text={ability.text} />
    </AbilityText>
  </Ability>
);

export default AbilityComponent;

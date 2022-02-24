import React from 'react';
import FormattedText from './formatted-text';

type Props = {
  ability: { name: string; text: string };
};

export const AbilityComponent = ({ ability }: Props) => {
  return (
    <div className="text-xs sm:text-sm font-medium mt-1">
      {ability.name}:{' '}
      <span className="font-normal">
        <FormattedText text={ability.text} />
      </span>
    </div>
  );
};

export default AbilityComponent;

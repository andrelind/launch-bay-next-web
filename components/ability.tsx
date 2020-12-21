import { useLocalized } from 'lbn-core/dist/helpers/i18n';
import { Translation } from 'lbn-core/dist/types';
import React from 'react';
import FormattedText from './formatted-text';

type Props = {
  ability: { name: Translation; text: Translation };
};

export const AbilityComponent = ({ ability }: Props) => {
  const { t } = useLocalized();
  return (
    <div className="text-xs sm:text-sm font-medium mt-1">
      {t(ability.name)}:{' '}
      <span className="font-normal">
        <FormattedText text={t(ability.text)} />
      </span>
    </div>
  );
};

export default AbilityComponent;

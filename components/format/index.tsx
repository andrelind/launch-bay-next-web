// @flow
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { Format } from '../../types';
import { Icon, Text, Wrapper } from './styles';

type Props = {
  format: Format;
  onClick?: () => any;
};

export const FormatComponent = ({ format, onClick }: Props) => (
  <Wrapper onClick={onClick}>
    {onClick && <Icon format={format} icon={faSyncAlt} />}
    <Text format={format}>{format}</Text>
  </Wrapper>
);

export default FormatComponent;

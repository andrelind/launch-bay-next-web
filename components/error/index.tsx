import React from 'react';

import { Block, Icon, Text } from './styles';

type Props = {
  text: string;
  textColor?: string;
};

const Error = ({ text, textColor }: Props) => (
  <Block>
    <Icon name="alert-triangle" />
    <Text textColor={textColor}>{text}</Text>
  </Block>
);

export default Error;

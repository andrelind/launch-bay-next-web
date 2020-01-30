import React from 'react';

import { red } from '../../assets/colors';
import { Icon, Name, NameWrapper, TopTitle, TopTitleThin, TopWrapper } from './styles';

export const LogoComponent = () => (
  <TopWrapper>
    <Icon icon={'Coordinate'} color={red} />
    <NameWrapper>
      <Name>{"André Lind's"}</Name>
      <TopTitle>
        Launch Bay <TopTitleThin>NEXT</TopTitleThin>
      </TopTitle>
    </NameWrapper>
  </TopWrapper>
);

export default LogoComponent;

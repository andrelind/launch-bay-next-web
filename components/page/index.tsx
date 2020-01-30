import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { red } from 'assets/colors';
import React from 'react';
import useMedia from 'use-media';

import { Block, BorderedBackground, NavBar } from './styles';

type Props = {
  children?: any;
  onShowMenu: () => void;
};

const Page = ({ children, onShowMenu }: Props) => {
  const isWide = useMedia({ minWidth: 800 });
  return (
    <Block>
      {!isWide && (
        <NavBar>
          <FontAwesomeIcon
            icon={faBars}
            color={red}
            style={{ height: 20, width: 20, padding: 10, cursor: 'pointer' }}
            onClick={onShowMenu}
          />
        </NavBar>
      )}
      <BorderedBackground>{children}</BorderedBackground>
    </Block>
  );
};

export default Page;

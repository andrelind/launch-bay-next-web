import styled from 'styled-components';

import { black } from '../../assets/colors';
import XWing from '../fonts/xwing';

export const Block = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${p => p.theme.backgroundSecondary};
  min-height: 100vh;
`;

export const NavBar = styled.div`
  background-color: ${black};
  border-bottom: ${p => `1px solid ${p.theme.line}`};
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 10px 5px; */
`;

export const BorderedBackground = styled.div`
  margin: 15px;
  padding: 15px;
  border: ${p => `1px solid ${p.theme.line}`};
  border-radius: 4px;
  background-color: ${p => p.theme.background};
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Spacer = styled.div`
  display: flex;
  flex: 1;
`;

export const Icon = styled(XWing)`
  font-size: 25px;
  align-self: center;
  color: ${p => p.theme.unread};
  margin: 0 5px;
`;

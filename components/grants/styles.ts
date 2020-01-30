import { ChevronRight } from 'react-feather';
import styled from 'styled-components';

import XWing from '../fonts/xwing';

export const Block = styled.div`
  align-items: flex-end;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Arrow = styled(ChevronRight)`
  color: ${p => p.theme.textSecondary};
  font-size: 15px;
`;

export const Icon = styled(XWing)`
  font-size: 15px;
  text-align: center;
  margin-top: 2px;
`;

export const Text = styled.span`
  color: ${p => p.theme.text};
  font-weight: bold;
  font-size: 15px;
`;

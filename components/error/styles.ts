import { AlertTriangle } from 'react-feather';
import styled from 'styled-components';

import { red } from '../../assets/colors';

export const Block = styled.div`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 15px;
`;

export const Icon = styled(AlertTriangle)`
  color: ${red};
  font-size: 20px;
`;

type Props = {
  textColor: string | undefined;
  theme?: any;
};

export const Text = styled.span`
  color: ${(p: Props) => p.textColor || p.theme.textSecondary};
  margin-left: 10px;
`;

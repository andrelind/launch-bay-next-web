import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import Xwing from '../components/fonts/xwing';

export const Block = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const TopRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

type Props = {
  isWide: boolean;
  isLast: boolean;
};

export const ShipWrapper = styled.div<Props>`
  display: flex;
  flex: 1;
  flex-direction: ${p => (p.isWide ? 'row' : 'column')};
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid
    ${p => (p.isLast ? 'transparent' : p.theme.backgroundSecondary)};
  margin-bottom: 15px;
`;

export const TopWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const TopFlexer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

export const BottomWrapper = styled.div`
  display: flex;
`;

export const UpgradeWrapper = styled.div`
  margin: 5px 10px;
`;

export const RowStyle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.span`
  color: ${p => p.theme.text};
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DeleteText = styled.span`
  color: red;
  font-weight: 400;
  cursor: pointer;
  margin-top: 10;
`;

export const Icon = styled(Xwing)`
  color: ${p => p.theme.text};
  font-size: 20px;
  margin-right: 5px;
`;

export const FaIcon = styled(FontAwesomeIcon)`
  padding: 5px;
  cursor: pointer;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

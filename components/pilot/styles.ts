import styled from 'styled-components';

import Ships from '../fonts/ships';
import XWing from '../fonts/xwing';

export const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-weight: bold;
  color: ${p => p.theme.text};
`;

export const Count = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.textSecondary};
`;

export const SlotWrapper = styled.div`
  flex-direction: row;
  display: flex;
`;

export const Icon = styled(XWing)`
  color: ${p => p.theme.text};
  font-size: 17px;
  margin-top: 5px;
  margin-right: 5px;
`;

export const ShipWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const ShipIcon = styled(Ships)`
  font-size: 20px;
  margin-top: -3px;
  margin-right: 3px;
  color: ${p => p.theme.text};
`;

export const ShipText = styled.span`
  color: ${p => p.theme.text};
  font-size: 13px;
`;

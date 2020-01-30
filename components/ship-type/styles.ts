import styled from 'styled-components';

import Ships from '../fonts/ships';
import XWing from '../fonts/xwing';

export const Block = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  display: flex;
`;

export const LeftWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  flex: 1;
  display: flex;
`;

export const ShipIcon = styled(Ships).attrs({
  style: { fontSize: 25, marginRight: 3 },
})`
  font-size: 30px;
  margin-right: 3px;
  color: ${p => p.theme.text};
`;

export const Count = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.textSecondary};
`;

export const PilotName = styled.span`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 13px;
  color: ${p => p.theme.text};
`;

export const ActionIcons = styled(XWing)`
  font-size: 20px;
  letter-spacing: 5px;
  color: ${p => p.theme.text};
  margin-top: 3px;
`;

export const Ability = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${p => p.theme.text};
`;

export const AbilityText = styled(Ability)`
  font-weight: 400;
`;

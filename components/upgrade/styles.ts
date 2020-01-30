import styled from 'styled-components';

import { red } from '../../assets/colors';
import XWing from '../fonts/xwing';

export const Block = styled.div`
  flex-direction: row;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  justify-content: center;
  margin-right: 5;
`;

export const CenterWrapper = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 13px;
  color: ${p => p.theme.text};
`;

export const Count = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.textSecondary};
`;

export const Icon = styled(XWing)`
  color: ${p => p.theme.text};
  font-size: 20px;
  margin-right: 5px;
`;

export const MultipleSlotWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const MultipleSlotIcon = styled(XWing)`
  color: ${p => p.theme.textSecondary};
  font-size: 20px;
  margin-right: 5px;
`;

export const RightWrapper = styled.div`
  margin-left: 5;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

export const Points = styled.span`
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 13px;
`;

export const AttackWrapper = styled.div`
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
  margin-top: 2px;
  display: flex;
`;

export const AttackText = styled.span`
  color: ${p => p.theme.text};
  text-align: center;
  font-size: 13px;
`;

export const AttackIcon = styled(XWing)`
  letter-spacing: 2px;
`;

export const DiceCount = styled.span`
  color: ${red};
  font-weight: 600;
`;

export const RangeText = styled.span`
  font-weight: 600;
  color: ${p => p.theme.text};
  font-size: 13px;
  text-align: center;
  margin-top: 1px;
`;

export const ChargeIcon = styled(XWing)`
  letter-spacing: 2;
  text-align: center;
  font-size: 13px;
`;

export const ChargeText = styled.span`
  font-weight: 600;
  font-size: 13px;
  margin-left: 2px;
`;

export const RecurringIcon = styled(XWing)`
  /* position: absolute; */
  /* left: 11px; */
  /* top: -2px; */
`;

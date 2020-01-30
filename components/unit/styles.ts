import styled from 'styled-components';

import Ships from '../fonts/ships';

export const Block = styled.div`
  align-self: stretch;
  flex-grow: 1;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  display: flex;
  align-self: stretch;
`;

type NameProps = {
  thin?: boolean;
  hideName?: boolean;
};

export const Name = styled.span<NameProps>`
  font-weight: ${p => (p.thin ? 400 : 'bold')};
  color: ${p => p.theme.text};
  font-size: 13px;
`;

export const Count = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.textSecondary};
`;

export const ShipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0;
`;

export const ShipIcon = styled(Ships)`
  font-size: 25px;
  margin-top: -3px;
  margin-right: 3px;
  color: ${p => p.theme.text};
`;

export const ShipText = styled.span`
  color: ${p => p.theme.text};
  font-size: 13px;
`;

export const Points = styled.span`
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 13px;
`;

type Props = {
  minimized: boolean;
};

export const StatsWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${p => (p.minimized ? 'column' : 'row')};
  justify-content: space-between;
  align-items: ${p => (p.minimized ? 'flex-start' : 'center')} center;
  margin-bottom: 5px;
`;

export const Upgrades = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 13px;
`;

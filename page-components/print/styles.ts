import styled from 'styled-components';

export const Block = styled.div`
  display: block;
  background-color: white;
`;

export const TitleWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const ShipSummary = styled.div`
  background-color: ${p => p.theme.colors.selection};
  margin: 0 10px;
  padding: 3px 5px;
  border-radius: 6px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.span`
  font-weight: 400;
`;

export const ShipWrapper = styled.div`
  display: block;
  page-break-after: auto;
  page-break-before: auto;
  page-break-inside: avoid;
`;

export const TopWrapper = styled.div`
  margin: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TopFlexer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

export const BottomWrapper = styled.div`
  margin: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const UpgradeWrapper = styled.div`
  margin: 5px 10px;
`;

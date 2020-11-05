import styled from "styled-components";
import { xfade } from "../../components/sidebar/styles";
import XWing from "../fonts/xwing";

export const Block = styled.div`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  display: flex;
  margin: 10px 5px;
  animation: ${xfade} 1s 0s;
  background-color: transparent;
  :hover {
    background-color: #ffffff33;
  }
  padding: 5px 5px;
  border-radius: 4px;
  cursor: pointer;
`;

export const FactionIcon = styled(XWing)`
  font-size: 20px;
  margin-right: 10px;
  width: 20px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RowWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const SquadronName = styled.span`
  color: ${(p) => p.theme.text};
  font-weight: 600;
`;

export const WinLoss = styled.span`
  color: ${(p) => p.theme.textSecondary};
  font-weight: 400;
  font-size: 13px;
`;

export const Points = styled.span`
  color: ${(p) => p.theme.text};
  font-weight: bold;
`;

export const Pilots = styled.span`
  color: ${(p) => p.theme.textSecondary};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FavButton = styled.button`
  margin-left: 5px;
`;

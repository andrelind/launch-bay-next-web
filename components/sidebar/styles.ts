import styled, { keyframes } from "styled-components";
import { buttonBlue } from "../../assets/colors";
import XWing from "../fonts/xwing";

interface Props {
  active?: boolean;
}

export const xfade = keyframes`
  0% {
    opacity:0;
  }
  25% {
    opacity:0;
  }
  92% {
    opacity:1;
  }
`;

export const Block = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${(p) => p.theme.background};
  width: 200px;
`;

export const LogoWrapper = styled.div`
  background-color: ${(p) => p.theme.background};
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: space-between;
`;

export const RouteButton = styled.div`
  color: white;
  height: 40px;
  animation: ${xfade} 1s 0s;
  background-color: ${(p: Props) => (p.active ? "#ffffff33" : "transparent")};
  :hover {
    background-color: #ffffff33;
  }
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 5px 5px;
  border-radius: 4px;
  cursor: pointer;
  flex-direction: row;
  color: ${buttonBlue};
`;

export const RouteText = styled.a`
  width: 70px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Icon = styled(XWing)`
  font-size: 18px;
  align-self: center;
  color: ${(p) => p.theme.unread};
  margin: 0 5px;
`;

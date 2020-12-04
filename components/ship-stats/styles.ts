import styled from "styled-components";
import XWing from "../fonts/xwing";

type Props = {
  minimized?: boolean;
};

export const Block = styled.div`
  display: flex;
  flex-direction: ${(p: Props) => (p.minimized ? "row" : "column")};
  align-items: center;
`;

export const Wrapper = styled.div`
  margin: 2px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const Icon = styled(XWing)`
  font-size: 15px;
  margin-left: ${(p: Props) => (p.minimized ? "5px" : "0")};
`;

export const Text = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-left: ${(p: Props) => (p.minimized ? "2px" : "5px")};
`;

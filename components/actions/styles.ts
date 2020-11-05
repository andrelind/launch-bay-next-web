import styled from "styled-components";
import XWing from "../fonts/xwing";

type Props = {
  minimized: boolean;
};

export const Block = styled.div<Props>`
  align-items: center;
  display: flex;
  flex-direction: ${(p) => (p.minimized ? "row" : "column")};
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Actions = styled(XWing)`
  align-items: center;
  text-align: center;
  font-size: 15px;
  margin-top: 3px;
  width: 25px;
`;

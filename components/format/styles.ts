import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Format } from "../../types";

export const Wrapper = styled.div`
  flex-direction: row;
  align-items: center;
  margin-top: ${(p) => (p.onClick ? "5px" : "0px")};
  display: flex;
  cursor: ${(p) => (p.onClick ? "pointer" : "auto")};
`;

export type TextProps = {
  format: Format;
};

export const Text = styled.span<TextProps>`
  color: ${(p) => {
    switch (p.format) {
      case "Extended":
        return p.theme.colors.red;
      case "Hyperspace":
        return p.theme.colors.blue;
      case "Epic":
        return p.theme.colors.yellow;
    }
  }};
  font-weight: 400;
  font-size: 14px;
`;

export const Icon = styled(FontAwesomeIcon)<TextProps>`
  color: ${(p) => {
    switch (p.format) {
      case "Extended":
        return p.theme.colors.red;
      case "Hyperspace":
        return p.theme.colors.blue;
      case "Epic":
        return p.theme.colors.yellow;
    }
  }};
  margin-right: 3px;
  font-size: 14px;
`;

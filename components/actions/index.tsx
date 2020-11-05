import React from "react";
import { purple, red } from "../../assets/colors";
import { Action, Difficulty } from "../../types";
import { Actions, Block, Wrapper } from "./styles";

type Props = {
  actions: Action[];
  minimized: boolean;
};

export const ActionsComponent = ({ actions, minimized }: Props) => {
  const color = (difficulty: Difficulty) => {
    if (difficulty === "Red") return red;
    if (difficulty === "Purple") return purple;
    return undefined;
  };

  return (
    <Block minimized={minimized}>
      {actions.map((a, index) => (
        <Wrapper key={`${a.type}_${a.difficulty}_${index}`}>
          <Actions icon={a.type} color={color(a.difficulty)} />
          {a.linked && " -> "}
          {a.linked && (
            <Actions
              icon={a.linked.type}
              color={a.linked.difficulty === "Red" ? red : undefined}
            />
          )}
        </Wrapper>
      ))}
    </Block>
  );
};

export default ActionsComponent;

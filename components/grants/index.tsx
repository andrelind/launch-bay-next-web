import {
  blue,
  green,
  pink,
  purple,
  red,
  yellow,
} from "lbn-core/dist/assets/colors";
import { Difficulty, Grant } from "lbn-core/dist/types";
import React from "react";
import { Block, Icon, Text, Wrapper } from "./styles";

type Props = {
  grants: Grant[];
};

const colorForType = (type: string | void) => {
  switch (type) {
    case "attack":
      return red;
    case "agility":
      return green;
    case "hull":
      return yellow;
    case "shields":
      return blue;
    case "energy":
      return pink;
    default:
      break;
  }
};

const colorForDifficulty = (difficulty: Difficulty) => {
  if (difficulty === "Red") return red;
  if (difficulty === "Purple") return purple;
  return undefined;
};

const mod = (grant: Grant) => {
  if (grant.value > 0) {
    return `+${grant.value}`;
  }
  return grant.value;
};

const GrantsComponent = ({ grants }: Props) => {
  return (
    <Block>
      {grants.map((grant, index) => (
        <Wrapper key={`${grant.value}_${index}`}>
          {grant.slot && <Icon icon={grant.slot} />}
          {grant.stat && (
            <Wrapper>
              <Text style={{ color: colorForType(grant.stat) }}>
                {mod(grant)}
              </Text>
              <Icon icon={grant.stat} color={colorForType(grant.stat)} />
            </Wrapper>
          )}
          {grant.action && (
            <Wrapper>
              <Icon
                icon={grant.action.type}
                color={colorForDifficulty(grant.action.difficulty)}
              />
              {grant.action.linked && " -> "}
              {grant.action.linked && (
                <Icon
                  icon={grant.action.linked.type}
                  color={colorForDifficulty(grant.action.linked.difficulty)}
                />
              )}
            </Wrapper>
          )}
        </Wrapper>
      ))}
    </Block>
  );
};

export default GrantsComponent;

import { Translation } from "lbn-core/dist/types";
import React from "react";
import FormattedText from "../formatted-text";
import { Ability, AbilityText } from "./styles";

type Props = {
  ability: { name: Translation; text: Translation };
  style?: Object;
};

export const AbilityComponent = ({ ability, style }: Props) => (
  <Ability style={style}>
    {ability.name.en}:{" "}
    <AbilityText>
      <FormattedText text={ability.text.en} />
    </AbilityText>
  </Ability>
);

export default AbilityComponent;

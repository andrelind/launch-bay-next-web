import React from "react";
import conditionData from "../../assets/data/conditions";
import { Pilot } from "../../types";
import Error from "../error";
import XwingFont from "../fonts/xwing";
import FormattedText from "../formatted-text";
import { Count, SlotWrapper } from "./styles";

type Props = {
  pilot: Pilot;
  count?: number;
  limitWarning?: boolean;
  minimized: boolean;
};

const PilotComponent = ({ pilot, count, limitWarning, minimized }: Props) => {
  let errorText;
  if (limitWarning) {
    errorText = `Only ${pilot.limited} allowed in a squadron`;
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-row justify-between items-center text-sm ">
        <div className="flex flex-row items-end">
          <span className="font-medium text-orange-400 mr-1">
            {pilot.initiative}
          </span>

          <span className="font-medium mr-1">
            {pilot.limited > 0 && `${"•".repeat(pilot.limited)} `}
            {pilot.name.en}
          </span>
          <span className="italic text-gray-400 text-xs">
            {pilot.caption?.en}
          </span>
          {count !== undefined && <Count> ({count})</Count>}
        </div>
        <span className="font-medium">{pilot.cost}</span>
      </div>

      <div className="flex flex-row items-center">
        {pilot.ability && <FormattedText text={pilot.ability.en} />}
        {!minimized && pilot.text && (
          <FormattedText text={pilot.text.en} fontStyle="italic" />
        )}

        {pilot.conditions &&
          pilot.conditions.map((c) => {
            const condition = conditionData.filter((cc) => cc.xws === c)[0];
            return (
              <FormattedText
                key={c}
                text={`<strong>${condition.name}:</strong> ${condition.ability}`}
              />
            );
          })}

        <SlotWrapper>
          {pilot.slots.map((slot, i) => (
            <XwingFont key={`${slot}_${i}`} icon={slot} />
          ))}
        </SlotWrapper>
      </div>
      {errorText && <Error text={errorText} />}
    </div>
  );
};

export default PilotComponent;

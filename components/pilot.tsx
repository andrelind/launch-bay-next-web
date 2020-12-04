import conditionData from "lbn-core/dist/assets/conditions";
import { Pilot } from "lbn-core/dist/types";
import React from "react";
import Error from "./error";
import FormattedText from "./formatted-text";

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
          <span className="font-medium text-yellow-400 mr-1">
            {pilot.initiative}
          </span>

          <span className="font-medium mr-1">
            {pilot.limited > 0 && `${"•".repeat(pilot.limited)} `}
            {pilot.name.en}
          </span>
          <span className="italic text-gray-400 text-xs">
            {pilot.caption?.en}
          </span>
          {count !== undefined && (
            <span className="text-gray-400"> ({count})</span>
          )}
        </div>
        <span className="font-medium">{pilot.cost}</span>
      </div>

      <div className="flex flex-row items-center hidden sm:block">
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
      </div>
      {errorText && <Error text={errorText} />}
    </div>
  );
};

export default PilotComponent;

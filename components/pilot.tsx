import conditionData from "lbn-core/dist/assets/conditions";
import { Pilot, Ship, ShipType } from "lbn-core/dist/types";
import React, { FC } from "react";
import Error from "./error";
import FormattedText from "./formatted-text";
import StatsComponent from "./ship-stats";

type Props = {
  pilot: Pilot;
  ship?: Ship | ShipType;
  count?: number;
  limitWarning?: boolean;
};

const PilotComponent: FC<Props> = ({ pilot, ship, limitWarning }) => {
  let errorText;
  if (limitWarning) {
    errorText = `Only ${pilot.limited} allowed in a squadron`;
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-row items-center hidden sm:block">
        <StatsComponent
          stats={ship?.stats}
          force={pilot.force}
          charges={pilot.charges}
        />
        {pilot.ability && <FormattedText text={pilot.ability.en} />}
        {pilot.text && (
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

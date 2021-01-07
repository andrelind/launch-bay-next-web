import conditionData from 'lbn-core/dist/assets/conditions';
import { Pilot, Ship, ShipType } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import AbilityComponent from './ability';
import ActionsComponent from './actions';
import { DialComponent } from './dial';
import FormattedText from './formatted-text';
import StatsComponent from './ship-stats';
import { SlimPilot } from './slim/pilot';

type Props = {
  pilot: Pilot;
  ship?: Ship | ShipType;
  count?: number;
  limitWarning?: boolean;
  showFaction?: boolean;
  showBaseCost?: boolean;
};

const PilotComponent: FC<Props> = ({
  pilot,
  ship,
  showFaction,
  showBaseCost,
}) => {
  // let errorText;
  // if (limitWarning) {
  //   errorText = `Only ${pilot.limited} allowed in a squadron`;
  // }

  return (
    <div className="flex flex-1 flex-col m-2">
      <SlimPilot
        pilot={pilot}
        ship={ship}
        hideStats
        showFaction={showFaction}
        showBaseCost={showBaseCost}
      />
      <div>
        <div className="flex flex-1 flex-row justify-between">
          <StatsComponent
            stats={ship?.stats}
            force={pilot.force}
            charges={pilot.charges}
            vertical
          />
          {ship && <DialComponent dial={ship?.dial} />}
          {ship && <ActionsComponent actions={ship?.actions} vertical />}
        </div>
        {pilot.ability && <FormattedText text={pilot.ability.en} />}
        {pilot.text && (
          <FormattedText text={pilot.text.en} fontStyle="italic" />
        )}
        {ship?.ability && <AbilityComponent ability={ship.ability} />}

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
      {/* {errorText && <Error text={errorText} />} */}
    </div>
  );
};

export default PilotComponent;

import React from "react";
import { slotKeys } from "../helpers/enums";
import { Ship } from "../types";
import { ActionsComponent } from "./actions";
import ShipStats from "./ship-stats";

type Props = {
  ship: Ship;
  count?: number;
  hideName?: boolean;
  thinName?: boolean;
  showCostWithUpgrades: boolean;
  hideUpgrades: boolean;
  limitWarning?: boolean;
  minimized: boolean;
};

const Unit = ({
  ship,
  count,
  // hideName,
  // thinName,
  // showCostWithUpgrades,
  // hideUpgrades,
  // limitWarning,
  minimized,
}: Props) => {
  const upgrades: string[] = [];
  slotKeys.forEach((key) => {
    const slots = ship.upgrades && ship.upgrades[key];
    if (slots) {
      upgrades.push(...slots.map((u) => u.sides[0].title.en));
    }
  });

  // let errorText;
  // if (limitWarning) {
  //   errorText = `Only ${ship.pilot.limited} allowed in a squadron`;
  // }

  return (
    <div className="flex flex-1 items-center">
      <div className="flex flex-1 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-end">
        <div className="flex flex-1 flex-row justify-between text-sm ">
          <div className="flex flex-row items-center">
            <span className="font-medium text-orange-400 mr-1">
              {ship.pilot.initiative}
            </span>
            <div>
              <div className="font-medium mr-1">
                {ship.pilot.limited > 0 && `${"•".repeat(ship.pilot.limited)} `}
                {ship.pilot.name.en}
              </div>
              <div className="italic text-gray-400 text-xs">
                {ship.pilot.caption?.en}
              </div>
              {count !== undefined && (
                <span className="text-gray-400"> ({count})</span>
              )}
            </div>
          </div>
        </div>

        <ShipStats
          initiative={minimized ? undefined : ship.pilot.initiative}
          engagement={ship.pilot.engagement}
          stats={ship.stats}
          force={ship.pilot.force}
          charges={ship.pilot.charges}
          minimized={minimized}
        />

        {ship.pilot && ship.pilot.shipActions && (
          <ActionsComponent
            minimized={minimized}
            actions={ship.pilot.shipActions}
          />
        )}
        {ship.pilot && !ship.pilot.shipActions && (
          <ActionsComponent minimized={minimized} actions={ship.actions} />
        )}
      </div>
      <div className="font-medium text-sm text-right self-start lg:self-center">
        {ship.pointsWithUpgrades} points
      </div>
    </div>
  );

  // return (
  //   <Block>
  //     <TopWrapper>
  //       <div
  //         style={{
  //           display: 'flex',
  //           flexDirection: minimized ? 'row' : 'column',
  //           alignItems: minimized ? 'center' : 'flex-start',
  //         }}
  //       >
  //         <div style={{ marginRight: 5 }}>
  //           <ShipStats
  //             initiative={minimized ? ship.pilot.initiative : undefined}
  //             engagement={ship.pilot.engagement}
  //             minimized={minimized}
  //           />
  //         </div>

  //         {(!hideName || minimized) && (
  //           <Name thin={thinName}>
  //             {ship.pilot.limited > 0 && `${'•'.repeat(ship.pilot.limited)} `}
  //             {ship.pilot.name.en}
  //             {count !== undefined && <Count> ({count})</Count>}
  //           </Name>
  //         )}
  //         {!minimized && (
  //           <ShipWrapper>
  //             <ShipIcon icon={ship.xws} />
  //             <ShipText>{ship.name.en}</ShipText>
  //           </ShipWrapper>
  //         )}
  //       </div>

  //       <div
  //         style={{
  //           alignItems: 'flex-end',
  //           display: 'flex',
  //           flexDirection: 'column',
  //         }}
  //       >
  //         {showCostWithUpgrades && <Points>{ship.pointsWithUpgrades}</Points>}
  //         {!showCostWithUpgrades && <Points>{ship.pilot.cost}</Points>}
  //         {!minimized && <BaseSize size={ship.size} />}
  //       </div>
  //     </TopWrapper>

  //     <StatsWrapper minimized={minimized}>
  //       <ShipStats
  //         initiative={minimized ? undefined : ship.pilot.initiative}
  //         engagement={ship.pilot.engagement}
  //         stats={ship.stats}
  //         force={ship.pilot.force}
  //         charges={ship.pilot.charges}
  //         minimized={minimized}
  //       />

  //       {!minimized && <Dial dial={ship.dial} />}

  //       {ship.pilot && ship.pilot.shipActions && (
  //         <Actions minimized={minimized} actions={ship.pilot.shipActions} />
  //       )}
  //       {ship.pilot && !ship.pilot.shipActions && (
  //         <Actions minimized={minimized} actions={ship.actions} />
  //       )}
  //     </StatsWrapper>

  //     {!minimized && ship.pilot.ability && (
  //       <FormattedText text={ship.pilot.ability.en} />
  //     )}
  //     {!minimized && ship.ability && (
  //       <Ability ability={ship.ability} style={{ marginTop: 5 }} />
  //     )}
  //     {!minimized &&
  //       !ship.pilot.ability &&
  //       !ship.ability &&
  //       ship.pilot.text && (
  //         <FormattedText text={ship.pilot.text.en} fontStyle="italic" />
  //       )}

  //     {!minimized &&
  //       ship.pilot &&
  //       ship.pilot.conditions &&
  //       ship.pilot.conditions.map(c => {
  //         const condition = conditionData.filter(cc => cc.xws === c)[0];
  //         return (
  //           <FormattedText
  //             key={c}
  //             text={`<strong>${condition.name}:</strong> ${condition.ability}`}
  //           />
  //         );
  //       })}

  //     {!hideUpgrades && upgrades.length > 0 && (
  //       <Upgrades>{upgrades.join(', ')}</Upgrades>
  //     )}
  //     {errorText && <Error text={errorText} />}
  //   </Block>
  // );
};

export default Unit;

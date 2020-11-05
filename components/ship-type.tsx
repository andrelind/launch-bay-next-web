import React, { FC } from "react";
import { ShipType } from "../types";
import Ability from "./ability";
import BaseSize from "./base-size";
import Dial from "./dial";
import ShipFont from "./fonts/ships";
import XwingFont from "./fonts/xwing";
import ShipStats from "./ship-stats";

type Props = {
  shipType: ShipType;
  count?: number;
  minimized: boolean;
};

export const ShipTypeComponent: FC<Props> = ({
  shipType,
  count,
  minimized,
}) => {
  return (
    <div
      className="flex flex-grow flex-col"
      style={{ flexDirection: minimized ? "row" : "column" }}
    >
      <div className="flex flex-1 flex-row items-center">
        <ShipFont icon={shipType.xws} className="mr-1" />

        <span className="flex flex-1 flex-wrap text-sm">
          {shipType.name.en}
          {count !== undefined && (
            <span className="text-sm font-thin text-gray-400"> ({count})</span>
          )}
        </span>
        <BaseSize size={shipType.size} />
      </div>

      <div className="flex flex-1 flex-row justify-between items-center">
        <ShipStats stats={shipType.stats} minimized={minimized} />
        {!minimized && <Dial dial={shipType.dial} />}
      </div>

      {!minimized && shipType.ability && <Ability ability={shipType.ability} />}
      <div className="flex flex-1 flex-row items-center">
        {shipType.pilots.length > 0 &&
          shipType.pilots
            .sort((a, b) => a.initiative - b.initiative)[0]
            .slots.map((s, i) => (
              <XwingFont key={`${s}_${i}`} icon={s} className="mr-1" />
            ))}
      </div>
    </div>
  );
};

export default ShipTypeComponent;

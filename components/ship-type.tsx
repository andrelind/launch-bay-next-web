import React, { FC } from "react";
import { ShipType } from "../types";
import BaseSize from "./base-size";
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
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 lg:grid-cols-4">
      <div className="flex flex-row items-center">
        <ShipFont icon={shipType.xws} className="mr-1" />

        <span className="flex flex-1 flex-wrap text-sm">
          {shipType.name.en}
          {count !== undefined && (
            <span className="text-sm font-thin text-gray-400"> ({count})</span>
          )}
        </span>
      </div>

      <div className="flex flex-row justify-between items-center">
        <ShipStats stats={shipType.stats} minimized={minimized} />
      </div>

      <div className="flex flex-row items-center">
        {shipType.pilots.length > 0 &&
          shipType.pilots
            .sort((a, b) => a.initiative - b.initiative)[0]
            .slots.map((s, i) => (
              <XwingFont key={`${s}_${i}`} icon={s} className="mr-1" />
            ))}
      </div>
      <div className="hidden sm:block">
        <BaseSize size={shipType.size} />
      </div>
    </div>
  );
};

export default ShipTypeComponent;

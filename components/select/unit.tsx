import React from "react";
import Unit from "../unit";

export const UnitSingleValue = ({ data }: any) => (
  <Unit
    hideUpgrades={true}
    showCostWithUpgrades={true}
    ship={data.ship}
    minimized={true}
  />
);

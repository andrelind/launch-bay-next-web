import React from "react";
import { components } from "react-select";
import ShipType from "../ship-type";

export const ShipTypeOption = ({ data, ...rest }: any) => (
  // @ts-ignore
  <components.Option {...rest}>
    <ShipType shipType={data.ship} minimized={true} />
  </components.Option>
);

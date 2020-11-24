import React from "react";
import { components } from "react-select";
import PilotComponent from "../pilot";

export const PilotOption = ({ data, ...rest }: any) => (
  // @ts-ignore
  <components.Option {...rest}>
    <PilotComponent pilot={data.pilot} minimized={true} />
  </components.Option>
);

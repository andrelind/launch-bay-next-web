// @flow
import { blue, red, yellow } from "lbn-core/dist/assets/colors";
import { Format } from "lbn-core/dist/types";
import React from "react";

type Props = {
  format: Format;
  onClick?: () => any;
};

const colorForFormat = (f: Format) => {
  switch (f) {
    case "Extended":
      return red;
    case "Hyperspace":
      return blue;
    case "Epic":
      return yellow;
  }
};

export const FormatComponent = ({ format, onClick }: Props) => {
  const color = colorForFormat(format);
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <span className="" style={{ color }}>
        {format}
      </span>
    </div>
  );
};

export default FormatComponent;

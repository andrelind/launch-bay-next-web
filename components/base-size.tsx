import React from "react";
import { Size } from "../types";
import XWing from "./fonts/xwing";

type Props = {
  size: Size;
};

export const BaseSizeComponent = ({ size }: Props) => {
  switch (size) {
    case "Small":
      return <XWing icon={"baseSmall"} className="text-sm" />;
    case "Medium":
      return <XWing icon={"baseMedium"} />;
    default:
      return <XWing icon={"baseLarge"} />;
  }
};

export default BaseSizeComponent;

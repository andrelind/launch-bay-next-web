import { shipIcons } from "lbn-core/dist/helpers/icon";
import React from "react";

type Props = {
  icon?: string;
  color?: string;
  className?: string;
};

export const ShipFont = ({ icon, color, className }: Props) => (
  <span className={`font-ships text-md ${className}`} style={{ color }}>
    {shipIcons(icon || "")}
  </span>
);

export default ShipFont;

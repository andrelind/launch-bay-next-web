import React from "react";
import { shipIcons } from "../../helpers/icon";

type Props = {
  icon: string;
  color?: string;
  className?: string;
};

export const ShipFont = ({ icon, color, className }: Props) => (
  <span className={`font-ships text-md ${className}`} style={{ color }}>
    {shipIcons(icon)}
  </span>
);

export default ShipFont;

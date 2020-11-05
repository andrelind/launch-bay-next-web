import React from "react";
import iconHelper from "../../helpers/icon";

type Props = {
  icon: string;
  color?: string;
  className?: string;
};

export const XwingFont = ({ icon, color, className }: Props) => (
  <span className={`font-xwing text-md ${className}`} style={{ color }}>
    {iconHelper(icon)}
  </span>
);

export default XwingFont;

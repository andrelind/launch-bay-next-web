import { xwingIcons } from 'lbn-core/dist/helpers/icon';
import React from 'react';

type Props = {
  icon: string;
  color?: string;
  className?: string;
};

export const XwingFont = ({ icon, color, className }: Props) => (
  <span className={`font-xwing text-md ${className}`} style={{ color }}>
    {xwingIcons(icon)}
  </span>
);

export default XwingFont;

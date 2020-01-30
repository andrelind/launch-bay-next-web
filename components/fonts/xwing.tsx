// @flow
import React from 'react';

import { black, buttonBlue, orange, red, scum } from '../../assets/colors';
import { useTheme } from '../../helpers/hooks';
import iconHelper from '../../helpers/icon';
import { XWing } from './styles';

type Props = {
  icon: string;
  style?: React.CSSProperties;
  color?: string;
  className?: any;
};

export const XwingFont = ({ icon, color, style, className }: Props) => {
  const theme = useTheme();

  let finalColor = color || theme.text;

  if (!color) {
    if (icon === 'Galactic Empire' || icon === 'First Order') {
      finalColor = theme.background === 'white' ? black : 'white';
    } else if (icon === 'Galactic Republic') {
      finalColor = red;
    } else if (icon === 'Separatist Alliance') {
      finalColor = buttonBlue;
    } else if (icon === 'Rebel Alliance') {
      finalColor = red;
    } else if (icon === 'Scum and Villainy') {
      finalColor = scum;
    } else if (icon === 'Resistance') {
      finalColor = orange;
    }
  }

  return (
    <XWing className={className} style={{ ...style, color: finalColor }}>
      {iconHelper(icon)}
    </XWing>
  );
};

export default XwingFont;

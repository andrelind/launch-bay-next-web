import React from 'react';

import { useTheme } from '../../helpers/hooks';
import textHelper from '../../helpers/text';
import XwingFont from '../fonts/xwing';

type Props = {
  text: string;
  color?: string;
  fontSize?: number;
  fontStyle?: 'italic' | 'normal';
};

export const FormattedText = ({ text, color, fontSize, fontStyle }: Props) => {
  const theme = useTheme();

  const content = textHelper(text);

  return (
    <span
      style={{
        color: color || theme.text,
        flex: 1,
        fontSize: fontSize || 13,
        fontStyle,
        paddingTop: 5,
      }}
    >
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return item.text;
          case 'strong':
            return (
              <span
                key={item.type + '_' + index}
                style={{ fontWeight: 'bold' }}
              >
                {item.text}
              </span>
            );
          case 'icon': {
            let size = fontSize ? fontSize + 3 : 15;

            return (
              <XwingFont
                key={item.type + '_' + index}
                style={{ fontSize: size }}
                icon={item.text}
              />
            );
          }
        }
      })}
    </span>
  );
};

export default FormattedText;

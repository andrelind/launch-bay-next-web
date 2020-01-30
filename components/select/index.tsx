import color from 'color';
import { useTheme } from 'helpers/hooks';
import { ThemeInterface } from 'page-components/theme';
import React from 'react';
import Select from 'react-select';
import { Props } from 'react-select/src/Select';

import { colorForFaction } from '../../helpers/colors';
import { Faction } from '../../types';

const styles = (theme: ThemeInterface) => ({
  container: styles => ({
    ...styles,
    display: 'flex',
    flex: 1,
  }),
  control: styles => ({
    ...styles,
    backgroundColor: theme.background,
    borderColor: theme.background,
    marginTop: 1,
    marginBottom: 1,
    display: 'flex',
    flex: 1,
  }),
  input: styles => ({ ...styles, color: theme.text }),
  menu: styles => ({
    ...styles,
    zIndex: 999,
    backgroundColor: theme.background,
  }),
  placeholder: styles => ({ ...styles, color: theme.text, marginLeft: 0 }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isDisabled
      ? theme.text
      : isSelected
      ? theme.menuText
      : isFocused
      ? theme.menuText
      : theme.text,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    // display: 'flex',
    // flex: 1,
  }),
  singleValue: styles => ({
    ...styles,
    color: theme.text,
    // display: 'flex',
    // flex: 1,
  }),
});

interface SelectProps extends Props {
  faction?: Faction;
}

export const SelectComponent = ({ faction, ...rest }: SelectProps) => {
  const theme = useTheme();
  return (
    <Select
      menuPlacement="auto"
      {...rest}
      styles={styles(theme)}
      theme={(t: any) => ({
        ...t,
        borderRadius: 4,
        padding: 4,
        colors: {
          ...t.colors,
          primary75: color(colorForFaction(faction || 'Rebel Alliance'))
            .lighten(0.75)
            .string(),
          primary50: color(colorForFaction(faction || 'Rebel Alliance'))
            .lighten(0.5)
            .string(),
          primary25: color(colorForFaction(faction || 'Rebel Alliance'))
            .lighten(0.15)
            .string(),
          primary: color(colorForFaction(faction || 'Rebel Alliance'))
            .lighten(0.25)
            .string(),
        },
      })}
    />
  );
};

export default SelectComponent;

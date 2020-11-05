import color from "color";
import React, { FC } from "react";
import Select from "react-select";
import { Props as SelectProps } from "react-select/src/Select";
import { colorForFaction } from "../../helpers/colors";
import { useTheme } from "../../helpers/hooks";
import { ThemeInterface } from "../../page-components/theme";
import { Faction } from "../../types";

const styles = (theme: ThemeInterface) => ({
  container: (styles: any) => ({
    ...styles,
    display: "flex",
    flex: 1,
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: theme.background,
    borderColor: theme.background,
    marginTop: 1,
    marginBottom: 1,
    display: "flex",
    flex: 1,
  }),
  input: (styles: any) => ({
    ...styles,
    color: theme.text,
    padding: "2px 4px",
  }),
  menu: (styles: any) => ({
    ...styles,
    zIndex: 999,
    backgroundColor: theme.background,
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: theme.text,
    marginLeft: 0,
    padding: "2px 4px",
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: "2px 4px",
  }),
  option: (styles: any, { isDisabled, isFocused, isSelected }: any) => ({
    ...styles,
    color: isDisabled
      ? theme.text
      : isSelected
      ? theme.menuText
      : isFocused
      ? theme.menuText
      : theme.text,
    cursor: isDisabled ? "not-allowed" : "pointer",
    padding: "2px 4px",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: theme.text,
    padding: "2px 4px",
  }),
});

interface Props extends SelectProps {
  faction?: Faction;
}

export const SelectComponent: FC<Props> = ({ faction, ...rest }) => {
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
          primary75: color(colorForFaction(faction || "Rebel Alliance"))
            .lighten(0.75)
            .string(),
          primary50: color(colorForFaction(faction || "Rebel Alliance"))
            .lighten(0.5)
            .string(),
          primary25: color(colorForFaction(faction || "Rebel Alliance"))
            .lighten(0.15)
            .string(),
          primary: color(colorForFaction(faction || "Rebel Alliance"))
            .lighten(0.25)
            .string(),
        },
      })}
    />
  );
};

export default SelectComponent;

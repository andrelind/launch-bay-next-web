import color from "color";
import { colors } from "lbn-core/dist";
import { Faction } from "lbn-core/dist/types";
import React, { FC } from "react";
import Select from "react-select";
import { Props as SelectProps } from "react-select/src/Select";
import { colorForFaction } from "../../helpers/colors";

const styles = () => ({
  container: (styles: any) => ({
    ...styles,
    display: "flex",
    flex: 1,
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "white",
    borderColor: "white",
    marginTop: 1,
    marginBottom: 1,
    display: "flex",
    flex: 1,
  }),
  input: (styles: any) => ({
    ...styles,
    color: colors.black,
    padding: "2px 4px",
  }),
  menu: (styles: any) => ({
    ...styles,
    zIndex: 999,
    backgroundColor: "white",
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: colors.black,
    padding: 0,
    margin: 0,
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    // padding: "2px 4px",
  }),
  option: (styles: any, { isDisabled, isFocused, isSelected }: any) => ({
    ...styles,
    color: isDisabled
      ? colors.black
      : isSelected
      ? "white"
      : isFocused
      ? "white"
      : colors.black,
    cursor: isDisabled ? "not-allowed" : "pointer",
    padding: "2px 4px",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: colors.black,
    padding: "2px 4px",
  }),
});

interface Props extends SelectProps {
  faction?: Faction;
}

export const SelectComponent: FC<Props> = ({ faction, ...rest }) => {
  // const theme = useTheme();
  return (
    <Select
      menuPlacement="auto"
      {...rest}
      styles={styles()}
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

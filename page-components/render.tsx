import { Slot, Squadron } from "lbn-core/dist/types";
import Select from "../components/select";
import {
  HardpointOption,
  HardpointPlaceholder,
  HardpointSingleValue,
} from "../components/select/hardpoint";

export type HardpointValue = {
  label: Slot;
  value: Slot;
};

export const renderHardpoint = (
  value: Slot | null,
  squadron: Squadron,
  onChange: (value: Slot | null) => void
) => {
  return (
    <Select
      components={{
        SingleValue: HardpointSingleValue,
        Option: HardpointOption,
        Placeholder: HardpointPlaceholder,
        IndicatorSeparator: null,
        DropdownIndicator: null,
      }}
      isSearchable={false}
      readOnly
      instanceId={`hardpointPicker`}
      key={`hardpointPicker`}
      placeholder={"Hardpoint"}
      faction={squadron.faction}
      // @ts-ignore
      value={value && { value: value, label: value }}
      isClearable
      // @ts-ignore
      onChange={(newValue?: HardpointValue) =>
        newValue ? onChange(newValue.value) : onChange(null)
      }
      options={["Cannon", "Missile", "Torpedo"].map((s) => ({
        value: s,
        label: s,
      }))}
    />
  );
};

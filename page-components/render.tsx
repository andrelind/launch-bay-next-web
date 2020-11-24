import { useDispatch } from "react-redux";
import { setUpgrade } from "../actions/squadrons";
import Select from "../components/select";
import {
  HardpointOption,
  HardpointPlaceholder,
  HardpointSingleValue,
} from "../components/select/hardpoint";
import {
  UpgradeOption,
  UpgradePlaceholder,
  UpgradeSingleValue,
} from "../components/select/upgrade";
import { Ship, Slot, Squadron, UpgradeSide } from "../types";
import { SlotValue, upgradesForSlot, UpgradeValue } from "./loader";

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

export const renderUpgrade = (
  value: SlotValue,
  squadron: Squadron,
  ship: Ship,
  index: number
) => {
  const dispatch = useDispatch();

  const v = value.upgrade
    ? { label: "", value: "", upgrade: value.upgrade }
    : undefined;

  return (
    <Select
      components={{
        SingleValue: UpgradeSingleValue,
        Option: UpgradeOption,
        Placeholder: UpgradePlaceholder,
        IndicatorSeparator: null,
        DropdownIndicator: null,
      }}
      isSearchable={false}
      readOnly
      instanceId={`selectUpgrade_${index}`}
      key={`${value.slot}_${index}`}
      placeholder={value.slot}
      faction={squadron.faction}
      value={v}
      isClearable
      filterOption={({ data }, input) => {
        const u = (data as UpgradeValue).upgrade;
        const needle = input.toLowerCase();

        const checkSide = (side: UpgradeSide) => {
          if (side.title.en.toLowerCase().indexOf(needle) >= 0) {
            return true;
          } else if (
            side.ability &&
            side.ability.en.toLowerCase().indexOf(needle) >= 0
          ) {
            return true;
          } else if (
            side.text &&
            side.text.en.toLowerCase().indexOf(needle) >= 0
          ) {
            return true;
          }
        };

        if (u.sides[0].title.en.toLowerCase().indexOf(needle) >= 0) {
          return true;
        } else if (checkSide(u.sides[0])) {
          return true;
        } else if (u.sides.length > 1 && checkSide(u.sides[1])) {
          return true;
        }
        return false;
      }}
      // @ts-ignore
      onChange={(newValue?: UpgradeValue) => {
        const getSlotIndex = () => {
          let slotIndex = 0;
          for (let i = 0; i < ship.pilot.slots.length; i++) {
            if (ship.pilot.slots[i] === value.slot) {
              if (i === index) {
                return slotIndex;
              }
              slotIndex += 1;
            }
          }
          return 0;
        };
        dispatch(
          setUpgrade(
            squadron.uid,
            ship.uid,
            value.slot,
            getSlotIndex(),
            newValue ? newValue.upgrade : undefined
          )
        );
      }}
      options={upgradesForSlot(squadron, ship, value.slot)}
    />
  );
};

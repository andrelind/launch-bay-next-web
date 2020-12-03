import { setUpgrade } from "lbn-core/dist/actions/squadrons";
import { useLocalized } from "lbn-core/dist/helpers/i18n";
import { SlotValue, upgradesForSlot } from "lbn-core/dist/loader";
import { AppState } from "lbn-core/dist/state";
import { useDispatch, useSelector } from "react-redux";
import Select from "../components/select";
import {
  HardpointOption,
  HardpointPlaceholder,
  HardpointSingleValue,
} from "../components/select/hardpoint";
import { UpgradePopover } from "../components/upgrade-popover";
import { Language, Ship, Slot, Squadron } from "../types";

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
  const language = useSelector<AppState, Language | undefined>(
    (s) => s.app.user.language
  );
  const { t, c } = useLocalized(language);

  return (
    <UpgradePopover
      side={0}
      slot={value.slot}
      value={value.upgrade}
      options={upgradesForSlot(squadron, ship, value.slot, t, c, true)}
      onChange={(newValue) => {
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
            newValue
          )
        );
      }}
    />
  );
};

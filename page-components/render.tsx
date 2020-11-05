import { useDispatch } from "react-redux";
import { components } from "react-select";
import { setUpgrade } from "../actions/squadrons";
import XwingFont from "../components/fonts/xwing";
import Select from "../components/select";
import UpgradeComponent from "../components/upgrade";
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
  const SingleValue = () => (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-row items-center">
        <div className="flex flex-col justify-center">
          <XwingFont className="mr-1" icon={"Hardpoint"} />
        </div>

        <div className="flex flex-1 flex-col justify-center mx-1">
          <div className="flex flex-row items-center">
            <span className="text-sm ">{"Hardpoint"}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const Option = ({ data, ...rest }: any) => (
    // @ts-ignore
    <components.Option {...rest}>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-row items-center">
          <div className="flex flex-col justify-center">
            <XwingFont className="mr-1" icon={data.label || "Hardpoint"} />
          </div>

          <div className="flex flex-1 flex-col justify-center mx-1">
            <div className="flex flex-row items-center">
              <span className="text-sm font-medium">
                {data.label || "Hardpoint"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </components.Option>
  );

  const Placeholder = (props: any) => (
    // @ts-ignore
    <components.Placeholder {...props}>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-row items-center">
          <div className="flex flex-col justify-center">
            <XwingFont className="mr-1" icon={"Hardpoint"} />
          </div>

          <div className="flex flex-1 flex-col justify-center mx-1">
            <div className="flex flex-row items-center">
              <span className="text-sm ">{"Hardpoint"}</span>
            </div>
          </div>
        </div>
      </div>
    </components.Placeholder>
  );

  return (
    <Select
      components={{
        SingleValue,
        Option,
        Placeholder,
        IndicatorSeparator: null,
        DropdownIndicator: null,
      }}
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
  minimized: boolean,
  index: number
) => {
  const dispatch = useDispatch();

  const v = value.upgrade
    ? { label: "", value: "", upgrade: value.upgrade }
    : undefined;

  const SingleValue = ({ data }: any) => (
    <div className="flex flex-1">
      <UpgradeComponent
        upgrade={data.upgrade}
        showType={true}
        side={0}
        count={undefined}
        minimized={minimized}
      />
    </div>
  );

  const Option = ({ data, ...rest }: any) => (
    // @ts-ignore
    <components.Option {...rest}>
      <div className="flex flex-1" key={data.upgrade.uid}>
        <UpgradeComponent
          upgrade={data.upgrade || ""}
          showType={true}
          side={0}
          count={undefined}
          minimized={minimized}
        />
      </div>
    </components.Option>
  );

  const Placeholder = (props: any) => (
    // @ts-ignore
    <components.Placeholder {...props}>
      <span>
        <XwingFont icon={props.children} className="mr-1" />
        <span className="text-sm mx-1">{props.children}</span>
      </span>
    </components.Placeholder>
  );

  return (
    <Select
      components={{
        SingleValue,
        Option,
        Placeholder,
        IndicatorSeparator: null,
        DropdownIndicator: null,
      }}
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

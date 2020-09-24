import { setUpgrade } from '@actions/squadrons';
import UpgradeComponent from '@components/upgrade';
import { useDispatch } from 'react-redux';
import { components } from 'react-select';

import Select from '../components/select';
import { Ship, Slot, Squadron, UpgradeSide } from '../types';
import { SlotValue, upgradesForSlot, UpgradeValue } from './loader';
import { Icon, RowStyle } from './styles';

export type HardpointValue = {
  label: Slot;
  value: Slot;
};

export const renderHardpoint = (
  value: Slot | void,
  squadron: Squadron,
  onChange: (value: Slot) => void
) => (
  <div style={{ padding: 1, display: 'flex', flex: 1 }}>
    <Select
      components={{ IndicatorSeparator: null }}
      instanceId={`hardpointPicker`}
      key={`hardpointPicker`}
      placeholder={'Hardpoint'}
      faction={squadron.faction}
      value={value && { value: value, label: value }}
      isClearable
      onChange={(newValue?: HardpointValue) =>
        newValue ? onChange(newValue.value) : onChange(null)
      }
      options={['Cannon', 'Missile', 'Torpedo'].map(s => ({
        value: s,
        label: s,
      }))}
    />
  </div>
);

export const renderUpgrade = (
  value: SlotValue,
  squadron: Squadron,
  ship: Ship,
  minimized: boolean,
  index: number
) => {
  const dispatch = useDispatch();

  const v = value.upgrade
    ? { label: '', value: '', upgrade: value.upgrade }
    : undefined;

  const SingleValue = ({ data }: any) => (
    <RowStyle>
      <UpgradeComponent
        upgrade={data.upgrade}
        showType={true}
        side={0}
        count={undefined}
        minimized={minimized}
      />
    </RowStyle>
  );

  const Option = ({ data, ...rest }) => (
    // @ts-ignore
    <components.Option {...rest}>
      <RowStyle key={data.upgrade.uid}>
        <UpgradeComponent
          upgrade={data.upgrade || ''}
          showType={true}
          side={0}
          count={undefined}
          minimized={minimized}
        />
      </RowStyle>
    </components.Option>
  );

  const Placeholder = props => (
    // @ts-ignore
    <components.Placeholder {...props}>
      <div>
        <Icon icon={props.children} />
        <span style={{ marginLeft: 4, fontSize: 13 }}>{props.children}</span>
      </div>
    </components.Placeholder>
  );

  return (
    <div style={{ padding: 1, display: 'flex', flex: 1 }}>
      <Select
        components={{
          SingleValue,
          Option,
          Placeholder,
          IndicatorSeparator: null,
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
    </div>
  );
};

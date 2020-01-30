import { darkgrey } from 'assets/colors';
import Switch from 'react-switch';

type Props = {
  value: boolean;
  onChange: (c: boolean) => void;
};

export const SwitchComponent = ({ value, onChange }: Props) => (
  <Switch
    handleDiameter={20}
    uncheckedIcon={false}
    checkedIcon={false}
    onColor={darkgrey}
    offColor={darkgrey}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={15}
    width={35}
    checked={value}
    onChange={onChange}
  />
);

export default SwitchComponent;

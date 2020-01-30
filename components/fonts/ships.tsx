import React from 'react';

import { shipIcons } from '../../helpers/icon';
import { XWingShip } from './styles';

type Props = {
  icon: string;
  style?: React.CSSProperties;
};

export const ShipFont = ({ icon, style }: Props) => {
  return <XWingShip style={{ ...style }}>{shipIcons(icon)}</XWingShip>;
};

export default ShipFont;

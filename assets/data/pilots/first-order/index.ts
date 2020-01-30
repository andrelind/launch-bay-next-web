import { ShipType } from '../../../../types';
import gozanticlasscruiser from './gozanti-class-cruiser';
import raiderclasscorvette from './raider-class-corvette';
import tiebainterceptor from './tie-ba-interceptor';
import tiefofighter from './tie-fo-fighter';
import tiesffighter from './tie-sf-fighter';
import tievnsilencer from './tie-vn-silencer';
import upsilonclassshuttle from './upsilon-class-command-shuttle';

const ships: { [s: string]: ShipType } = {
  gozanticlasscruiser,
  raiderclasscorvette,
  tiefofighter,
  tiesffighter,
  tievnsilencer,
  upsilonclassshuttle,
  tiebainterceptor,
};

export default ships;

import { ShipType } from '../../../../types';
import belbullab22starfighter from './belbullab-22-starfighter';
import croccruiser from './c-roc-cruiser';
import hyenaclassdroidbomber from './hyena-class-droid-bomber';
import nantexclassstarfighter from './nantex-class-starfighter';
import sithinfiltrator from './sith-infiltrator';
import vultureclassdroidfighter from './vulture-class-droid-fighter';

const ships: { [s: string]: ShipType } = {
  belbullab22starfighter,
  croccruiser,
  hyenaclassdroidbomber,
  nantexclassstarfighter,
  sithinfiltrator,
  vultureclassdroidfighter,
};

export default ships;

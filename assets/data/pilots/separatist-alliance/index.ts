import { ShipType } from '../../../../types';
import belbullab22starfighter from './belbullab-22-starfighter';
import croccruiser from './c-roc-cruiser';
import hyenaclassdroidbomber from './hyena-class-droid-bomber';
import nantexclassstarfighter from './nantex-class-starfighter';
import sithinfiltrator from './sith-infiltrator';
import vultureclassdroidfighter from './vulture-class-droid-fighter';
import droidtrifighter from './droid-tri-fighter';
import firesprayclasspatrolcraft from './firespray-class-patrol-craft';
import hmpdroidgunship from './hmp-droid-gunship';

const ships: { [s: string]: ShipType } = {
  belbullab22starfighter,
  croccruiser,
  hyenaclassdroidbomber,
  nantexclassstarfighter,
  sithinfiltrator,
  vultureclassdroidfighter,
  droidtrifighter,
  firesprayclasspatrolcraft,
  hmpdroidgunship,
};

export default ships;

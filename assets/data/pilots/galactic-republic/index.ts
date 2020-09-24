import { ShipType } from '../../../../types';
import arc170starfighter from './arc-170-starfighter';
import btlbywing from './btl-b-y-wing';
import cr90corelliancorvette from './cr90-corellian-corvette';
import delta7aethersprite from './delta-7-aethersprite';
import nabooroyaln1starfighter from './naboo-royal-n-1-starfighter';
import v19torrentstarfighter from './v-19-torrent-starfighter';
import eta2actis from './eta-2-actis';
import laatigunship from './laat-i-gunship';
import nimbusclassvwing from './nimbus-class-v-wing';

const ships: { [s: string]: ShipType } = {
  arc170starfighter,
  btlbywing,
  cr90corelliancorvette,
  delta7aethersprite,
  nabooroyaln1starfighter,
  v19torrentstarfighter,
  eta2actis,
  laatigunship,
  nimbusclassvwing,
};

export default ships;

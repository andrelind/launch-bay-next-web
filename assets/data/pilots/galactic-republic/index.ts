import { ShipType } from '../../../../types';
import arc170starfighter from './arc-170-starfighter';
import btlbywing from './btl-b-y-wing';
import cr90corelliancorvette from './cr90-corellian-corvette';
import delta7aethersprite from './delta-7-aethersprite';
import nabooroyaln1starfighter from './naboo-royal-n-1-starfighter';
import v19torrentstarfighter from './v-19-torrent-starfighter';

const ships: { [s: string]: ShipType } = {
  arc170starfighter,
  btlbywing,
  cr90corelliancorvette,
  delta7aethersprite,
  nabooroyaln1starfighter,
  v19torrentstarfighter,
};

export default ships;

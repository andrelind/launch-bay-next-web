import { ShipType } from '../../../../types';
import alphaclassstarwing from './alpha-class-star-wing';
import gozanticlasscruiser from './gozanti-class-cruiser';
import lambdaclasst4ashuttle from './lambda-class-t-4a-shuttle';
import raiderclasscorvette from './raider-class-corvette';
import tieadvancedv1 from './tie-advanced-v1';
import tieadvancedx1 from './tie-advanced-x1';
import tieagaggressor from './tie-ag-aggressor';
import tiecapunisher from './tie-ca-punisher';
import tieddefender from './tie-d-defender';
import tieininterceptor from './tie-interceptor';
import tielnfighter from './tie-ln-fighter';
import tiephphantom from './tie-ph-phantom';
import tiereaper from './tie-reaper';
import tiesabomber from './tie-sa-bomber';
import tieskstriker from './tie-sk-striker';
import vt49decimator from './vt-49-decimator';

const ships: { [s: string]: ShipType } = {
  alphaclassstarwing,
  gozanticlasscruiser,
  lambdaclasst4ashuttle,
  raiderclasscorvette,
  tieadvancedv1,
  tieadvancedx1,
  tieagaggressor,
  tiecapunisher,
  tieddefender,
  tieininterceptor,
  tielnfighter,
  tiephphantom,
  tiereaper,
  tiesabomber,
  tieskstriker,
  vt49decimator,
};

export default ships;

// @flow
import { Faction, Source } from '../../../types';
import { t as coreSets } from './core-sets';
import { t as epic } from './epic';
import { t as firstOrder } from './first-order';
import { t as galacticEmpire } from './galactic-empire';
import { t as galacticRepublic } from './galactic-republic';
import { t as rebelAlliance } from './rebel-alliance';
import { t as resistance } from './resistance';
import { t as scumAndVillainy } from './scum-and-villainy';
import { t as separatistAlliance } from './separatist-alliance';

export type SourceKey =
  | Faction
  | 'Core Sets'
  | 'Additional Ships'
  | 'Additional Pilots'
  | 'Additional Upgrades'
  | 'Epic';

const t: { [key in SourceKey]: Source[] } = {
  'Core Sets': coreSets,
  'First Order': firstOrder,
  'Galactic Empire': galacticEmpire,
  'Galactic Republic': galacticRepublic,
  'Rebel Alliance': rebelAlliance,
  Resistance: resistance,
  'Scum and Villainy': scumAndVillainy,
  'Separatist Alliance': separatistAlliance,
  Epic: epic,
  'Additional Pilots': [],
  'Additional Ships': [],
  'Additional Upgrades': [],
};

export default t;

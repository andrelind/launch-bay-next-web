import { Faction, FactionKey } from 'lbn-core/dist/types';

export const keyFromFaction = (faction: Faction) => {
  switch (faction) {
    case 'Rebel Alliance':
      return 'rebelalliance';
    case 'Scum and Villainy':
      return 'scumandvillainy';
    case 'Galactic Empire':
      return 'galacticempire';
    case 'Resistance':
      return 'resistance';
    case 'First Order':
      return 'firstorder';
    case 'Galactic Republic':
      return 'galacticrepublic';
    case 'Separatist Alliance':
      return 'separatistalliance';
  }
};

export const factionFromKey = (key: FactionKey) => {
  switch (key) {
    case 'rebelalliance':
      return 'Rebel Alliance';
    case 'scumandvillainy':
      return 'Scum and Villainy';
    case 'galacticempire':
      return 'Galactic Empire';
    case 'resistance':
      return 'Resistance';
    case 'firstorder':
      return 'First Order';
    case 'galacticrepublic':
      return 'Galactic Republic';
    case 'separatistalliance':
      return 'Separatist Alliance';
  }
};

export const obstacles = [
  'coreasteroid0',
  'coreasteroid1',
  'coreasteroid2',
  'coreasteroid3',
  'coreasteroid4',
  'coreasteroid5',
  'core2asteroid0',
  'core2asteroid1',
  'core2asteroid2',
  'core2asteroid3',
  'core2asteroid4',
  'core2asteroid5',
  'vt49decimatordebris0',
  'vt49decimatordebris1',
  'vt49decimatordebris2',
  'yt2400debris0',
  'yt2400debris1',
  'yt2400debris2',
  'gascloud1',
  'gascloud2',
  'gascloud3',
  'gascloud4',
  'gascloud5',
  'gascloud6',
];

export const keyFromObstacle = (o: string) => {
  return obstacles.indexOf(o.replace('obstacle-', ''));
};
export const obstacleFromKey = (i: number | string) => {
  return 'obstacle-' + obstacles[parseInt(`${i}`)];
};

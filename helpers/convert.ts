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

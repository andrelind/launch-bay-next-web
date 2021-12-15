import { FactionKey, Format, SlotKey } from 'lbn-core/dist/types';

export type PilotXWS = {
  id: string;
  ship: string;
  points: number;
  upgrades: { [key in SlotKey]?: string[] };
};

export type XWS = {
  name: string;
  description: string;
  format: Format;
  faction: FactionKey;
  points: number;
  version: string;
  obstacles?: string[];
  pilots: PilotXWS[];
  vendor: {
    lbn: {
      builder?: string;
      builder_url?: string;
      link?: string;
      uid: string;
      wins: number;
      losses: number;
      tags: string[];
      created: Date;
    };
  };
};

export type CollectionState = {
  expansions: { [s: string]: number };
  setExpansions: (e: { [s: string]: number }) => void;

  pilots: { [s: string]: number };
  setPilots: (e: { [s: string]: number }) => void;

  ships: { [s: string]: number };
  setShips: (e: { [s: string]: number }) => void;

  upgrades: { [s: string]: number };
  setUpgrades: (e: { [s: string]: number }) => void;
};

export type FilterType = FactionKey | Format;
export type SortingType =
  | 'Alphabetically'
  | 'Faction'
  | 'Points'
  | 'Wins'
  | 'Created Date'
  | 'Format'
  | 'Custom';
export type SortDirectionType = 'Ascending' | 'Descending';

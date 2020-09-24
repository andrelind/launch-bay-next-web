export type Action = {
  difficulty: Difficulty;
  type: ActionType;
  linked?: {
    difficulty: Difficulty;
    type: ActionType;
  };
};

export type Language = 'de' | 'en' | 'es' | 'fr' | 'it' | 'pl' | 'pt' | 'zh';

export type Translation = {
  en: string;
  de?: string;
  es?: string;
  fr?: string;
  it?: string;
  pl?: string;
  pt?: string;
  zh?: string;
};

export type ActionType =
  | 'Barrel Roll'
  | 'Boost'
  | 'Calculate'
  | 'Cloak'
  | 'Coordinate'
  | 'Evade'
  | 'Focus'
  | 'Jam'
  | 'Lock'
  | 'Reload'
  | 'Reinforce'
  | 'Rotate Arc'
  | 'SLAM';

export type Arc =
  | 'Front Arc'
  | 'Left Arc'
  | 'Right Arc'
  | 'Rear Arc'
  | 'Single Turret Arc'
  | 'Double Turret Arc'
  | 'Full Front Arc'
  | 'Bullseye Arc';

export type BluePrint = PilotXWS & {
  nick: string;
  faction: Faction;
};

export type Condition = {
  name: string;
  ability: string;
  xws: string;
  image?: string;
};

export type Device = {
  name: string;
  type: 'Bomb' | 'Mine' | 'Obstacle' | 'Remote';
  effect: string;
};

export type Difficulty = 'White' | 'Red' | 'Purple';

export type Faction =
  | 'First Order'
  | 'Galactic Empire'
  | 'Galactic Republic'
  | 'Rebel Alliance'
  | 'Resistance'
  | 'Scum and Villainy'
  | 'Separatist Alliance';

export type FactionKey =
  | 'rebelalliance'
  | 'scumandvillainy'
  | 'galacticempire'
  | 'resistance'
  | 'firstorder'
  | 'galacticrepublic'
  | 'separatistalliance';

export type Format = 'Extended' | 'Hyperspace' | 'Epic';

export type Pilot = {
  name: Translation;
  caption?: Translation;
  xws: string;
  cost: number;
  initiative: number;
  limited: number;
  ability?: Translation;
  text?: Translation;
  image?: Translation;
  artwork?: string;
  slots: Slot[];
  conditions?: string[];
  shipActions?: Action[];
  force?: { value: number; recovers: number; side: Side[] };
  charges?: { value: number; recovers: number };
  sides?: Side[];
  available?: number;
  hyperspace: boolean;
  epic: boolean;
  limitWarning?: boolean;
  ffg?: number;
  alt?: { image: string; source: string }[];
  engagement?: number;
};

export type Restrictions = {
  action?: { type: ActionType; difficulty?: Difficulty };
  arcs?: Arc[];
  baseSizes?: Size[];
  character?: string[];
  chassis?: string[];
  equipped?: Slot[];
  factions?: Faction[];
  sides?: Side[];
  solitary?: boolean;
  initiative?: { min?: number; max?: number };
  stat?: { type: StatType; value: number };
  'non-limited'?: boolean;
};

export type Side = 'dark' | 'light';

export type Size = 'Small' | 'Medium' | 'Large' | 'Huge';

export type Ship = ShipBase & {
  uid: string;
  pointsWithUpgrades: number;
  pilot: Pilot;
  dial: string[];
  upgrades?: {
    [key in SlotKey]?: Upgrade[];
  };
};

export type ShipType = ShipBase & {
  pilots: Pilot[];
};

export type ShipBase = {
  name: Translation;
  xws: string;
  size: Size;
  dial: string[];
  faction: Faction;
  stats: Stat[];
  actions: Action[];
  ability?: {
    name: Translation;
    text: Translation;
    slotOptions?: Slot[];
  };
  available?: number;
  ffg?: number;
  icon?: string | void;
  actionCount?: number;
};

export type Slot =
  | 'Astromech'
  | 'Cannon'
  | 'Cargo'
  | 'Command'
  | 'Configuration'
  | 'Crew'
  | 'Device'
  | 'Force Power'
  | 'Gunner'
  | 'Hardpoint'
  | 'Hyperdrive'
  | 'Illicit'
  | 'Missile'
  | 'Modification'
  | 'Sensor'
  | 'Tactical Relay'
  | 'Talent'
  | 'Team'
  | 'Tech'
  | 'Title'
  | 'Torpedo'
  | 'Turret'
  | 'Wing';

export type SlotKey =
  | 'astromech'
  | 'cannon'
  | 'cargo'
  | 'command'
  | 'configuration'
  | 'crew'
  | 'device'
  | 'forcepower'
  | 'gunner'
  | 'hardpoint'
  | 'hyperdrive'
  | 'illicit'
  | 'missile'
  | 'modification'
  | 'sensor'
  | 'talent'
  | 'tacticalrelay'
  | 'team'
  | 'tech'
  | 'title'
  | 'torpedo'
  | 'turret';

export type Source = {
  ffg: number;
  xws: string;
  name: string;
  wave: number;
  released: boolean;
  contents: {
    ships: { [name: string]: number };
    pilots: { [name: string]: number };
    upgrades: { [name: string]: number };
  };
  sku?: string;
};

export type Stat = {
  type: StatType;
  value: number;
  arc?: Arc;
  recovers?: number;
};

export type StatType = 'agility' | 'attack' | 'hull' | 'shields' | 'energy';

export type Squadron = {
  uid: string;
  name: string;
  cost: number;
  faction: Faction;
  format: Format;
  favourite: boolean;
  wins: number;
  losses: number;
  tags?: string[];
  created: Date;
  ships: Ship[];
  version?: string;
};

export type Grant = {
  value: number;
  slot?: Slot;
  stat?: StatType;
  action?: Action;
  side?: Side;
  arc?: Arc;
  wing?: string[] | boolean; // Either chassis or use same
};

export type GrantTest =
  | { type: 'slot'; value: Slot; amount: number }
  | { type: 'stat'; value: StatType; amount: number }
  | { type: 'action'; value: Action; amount: number }
  | { type: 'attack'; value: Action; arc: Arc; amount: number };

export type UpgradeBase = {
  xws: string;
  limited: number;
  cost: UpgradeCost;
  sides: UpgradeSide[];
  restrictions?: Restrictions[];
  hyperspace: boolean;
  epic: boolean;
};

export type Upgrade = UpgradeBase & {
  finalCost: number;
  available: number;
};

export type UpgradeCostValue = { value: number };
export type UpgradeCostAgility = {
  variable: 'agility';
  values: { [s: number]: number };
};
export type UpgradeCostInitiative = {
  variable: 'initiative';
  values: { [s: number]: number };
};
export type UpgradeCostSize = {
  variable: 'size';
  values: { Small: number; Medium: number; Large: number; Huge: number };
};

export type UpgradeCost =
  | UpgradeCostValue
  | UpgradeCostAgility
  | UpgradeCostSize
  | UpgradeCostInitiative;

export type UpgradeSide = {
  ffg: number;
  title: Translation;
  type: Slot;
  ability?: Translation;
  text?: Translation;
  slots: Slot[];
  actions?: Action[];
  image?: Translation;
  artwork?: string;
  attack?: {
    arc: Arc;
    value: number;
    minrange: number;
    maxrange: number;
    ordnance: boolean;
  };
  grants?: Grant[];
  force?: { value: number; recovers: number; side: Side[] };
  charges?: { value: number; recovers: number };
  conditions?: string[];
  device?: Device;
};

// XWS

export type SquadronXWS = {
  uid: string;
  name: string;
  description?: string;
  cost: number;
  faction: Faction;
  favourite: boolean;
  tags?: string[];
  format: Format;
  wins?: number;
  losses?: number;
  version?: string;
  createdDatestamp?: number;
  pilots: PilotXWS[];
};

export type PilotXWS = {
  uid: string;
  name: string;
  ship: string;
  upgrades?: { [key in SlotKey]?: string[] };
  cost?: number;
  wing?: PilotXWS[];
};

export type UpgradeXWS = {
  astromech?: string[];
  cannon?: string[];
  configuration?: string[];
  crew?: string[];
  device?: string[];
  forcepower?: string[];
  gunner?: string[];
  illicit?: string[];
  missile?: string[];
  modification?: string[];
  sensor?: string[];
  talent?: string[];
  tech?: string[];
  title?: string[];
  torpedo?: string[];
  turret?: string[];
};

// Quick Builds

export type QuickBuildShip = {
  id: string;
  upgrades: UpgradeXWS;
};

export type QuickBuild = {
  threat: number;
  pilots: QuickBuildShip[];
};

// Tournaments

export type Tournament = {
  uid: string;
  name: string;
  date: number;
  format: Format;
  squadron: Squadron;
  placement?: number;
  numberOfPlayers?: number;
  games: Game[];
  version?: string;
};

export type GameType = 'Swiss' | 'Cut' | 'Final';

export type Game = {
  uid: string;
  gameType: GameType;
  bye: boolean;
  win: boolean | undefined;
  round: number;
  score: number | undefined;
  opponent: Opponent;
  notes: string | undefined;
};

export type Opponent = {
  name: string | undefined;
  score: number | undefined;
  squadron: Squadron | undefined;
};

export type PilotChange = {
  xws: string;
  chassis: string;
  faction: Faction;
  prev: {
    cost: number;
    hyperspace: boolean;
  };
  current: {
    cost: number;
    hyperspace: boolean;
  };
};

export type UpgradeChange = {
  xws: string;
  slot: Slot;
  prev: {
    cost: UpgradeCost;
    hyperspace: boolean;
  };
  current: {
    cost: UpgradeCost;
    hyperspace: boolean;
  };
};

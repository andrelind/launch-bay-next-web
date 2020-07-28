import { UpgradeChange } from '../../types';

const t: UpgradeChange[] = [
  {
    xws: 'fifthbrother',
    slot: 'Gunner',
    prev: { cost: { value: 11 }, hyperspace: true },
    current: { cost: { value: 12 }, hyperspace: true },
  },
  {
    xws: 'chopper-crew',
    slot: 'Crew',
    prev: { cost: { value: 1 }, hyperspace: false },
    current: { cost: { value: 1 }, hyperspace: true },
  },
  {
    xws: 'zeborrelios',
    slot: 'Crew',
    prev: { cost: { value: 1 }, hyperspace: false },
    current: { cost: { value: 1 }, hyperspace: true },
  },
  {
    xws: 'kananjarrus',
    slot: 'Crew',
    prev: { cost: { value: 12 }, hyperspace: false },
    current: { cost: { value: 12 }, hyperspace: true },
  },
  {
    xws: 'sabinewren',
    slot: 'Crew',
    prev: { cost: { value: 3 }, hyperspace: false },
    current: { cost: { value: 3 }, hyperspace: true },
  },
  {
    xws: 'bistan',
    slot: 'Gunner',
    prev: { cost: { value: 14 }, hyperspace: false },
    current: { cost: { value: 10 }, hyperspace: false },
  },
  {
    xws: 'ezrabridger',
    slot: 'Gunner',
    prev: { cost: { value: 14 }, hyperspace: false },
    current: { cost: { value: 12 }, hyperspace: false },
  },
  {
    xws: 'hansolo',
    slot: 'Gunner',
    prev: { cost: { value: 14 }, hyperspace: false },
    current: { cost: { value: 12 }, hyperspace: false },
  },
  {
    xws: 'ghost',
    slot: 'Title',
    prev: { cost: { value: 0 }, hyperspace: false },
    current: { cost: { value: 0 }, hyperspace: true },
  },
  {
    xws: 'phantom',
    slot: 'Title',
    prev: { cost: { value: 0 }, hyperspace: false },
    current: { cost: { value: 0 }, hyperspace: true },
  },
  {
    xws: 'bossk',
    slot: 'Gunner',
    prev: { cost: { value: 10 }, hyperspace: false },
    current: { cost: { value: 9 }, hyperspace: true },
  },
  {
    xws: 'houndstooth',
    slot: 'Title',
    prev: { cost: { value: 1 }, hyperspace: false },
    current: { cost: { value: 1 }, hyperspace: true },
  },
  {
    xws: 'landosmillenniumfalcon',
    slot: 'Title',
    prev: { cost: { value: 3 }, hyperspace: false },
    current: { cost: { value: 3 }, hyperspace: true },
  },
  {
    xws: 'marauder',
    slot: 'Title',
    prev: { cost: { value: 6 }, hyperspace: false },
    current: { cost: { value: 6 }, hyperspace: true },
  },
  {
    xws: 'slavei',
    slot: 'Title',
    prev: { cost: { value: 1 }, hyperspace: true },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'specialforcesgunner',
    slot: 'Gunner',
    prev: { cost: { value: 10 }, hyperspace: true },
    current: { cost: { value: 9 }, hyperspace: true },
  },
  {
    xws: 'm9g8',
    slot: 'Astromech',
    prev: { cost: { value: 7 }, hyperspace: false },
    current: { cost: { value: 7 }, hyperspace: true },
  },
  {
    xws: 'bbastromech',
    slot: 'Astromech',
    prev: {
      cost: {
        variable: 'initiative',
        values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
      },
      hyperspace: false,
    },
    current: {
      cost: {
        variable: 'initiative',
        values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
      },
      hyperspace: true,
    },
  },
  {
    xws: 'ferrospherepaint',
    slot: 'Tech',
    prev: { cost: { value: 6 }, hyperspace: true },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'r4p44',
    slot: 'Astromech',
    prev: { cost: { value: 5 }, hyperspace: false },
    current: { cost: { value: 3 }, hyperspace: false },
  },
  {
    xws: 'r4pastromech',
    slot: 'Astromech',
    prev: { cost: { value: 4 }, hyperspace: true },
    current: { cost: { value: 2 }, hyperspace: true },
  },
  {
    xws: 'battlemeditation',
    slot: 'Force Power',
    prev: {
      cost: {
        variable: 'initiative',
        values: { '0': 0, '1': 2, '2': 4, '3': 6, '4': 8, '5': 10, '6': 12 },
      },
      hyperspace: true,
    },
    current: {
      cost: {
        variable: 'initiative',
        values: { '0': 0, '1': 0, '2': 2, '3': 4, '4': 6, '5': 8, '6': 10 },
      },
      hyperspace: true,
    },
  },
  {
    xws: 'seventhfleetgunner',
    slot: 'Gunner',
    prev: { cost: { value: 9 }, hyperspace: false },
    current: { cost: { value: 9 }, hyperspace: true },
  },
  {
    xws: 'synchronizedconsole',
    slot: 'Modification',
    prev: { cost: { value: 1 }, hyperspace: false },
    current: { cost: { value: 1 }, hyperspace: true },
  },
  {
    xws: 'kraken',
    slot: 'Tactical Relay',
    prev: { cost: { value: 10 }, hyperspace: true },
    current: { cost: { value: 11 }, hyperspace: true },
  },
  {
    xws: 'ta175',
    slot: 'Tactical Relay',
    prev: { cost: { value: 9 }, hyperspace: true },
    current: { cost: { value: 11 }, hyperspace: true },
  },
  {
    xws: 'ensnare',
    slot: 'Talent',
    prev: {
      cost: {
        variable: 'initiative',
        values: { '1': 12, '2': 12, '3': 12, '4': 14, '5': 21, '6': 28 },
      },
      hyperspace: false,
    },
    current: {
      cost: {
        variable: 'initiative',
        values: { '0': 21, '1': 21, '2': 21, '3': 24, '4': 28 },
      },
      hyperspace: false,
    },
  },
  {
    xws: 'soullessone',
    slot: 'Title',
    prev: { cost: { value: 6 }, hyperspace: false },
    current: { cost: { value: 6 }, hyperspace: true },
  },
  {
    xws: 'seasonednavigator',
    slot: 'Crew',
    prev: {
      cost: {
        variable: 'initiative',
        values: {
          '0': 2,
          '1': 3,
          '2': 4,
          '3': 5,
          '4': 6,
          '5': 7,
          '6': 8,
          '7': 8,
          '8': 9,
        },
      },
      hyperspace: false,
    },
    current: {
      cost: {
        variable: 'initiative',
        values: { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 },
      },
      hyperspace: false,
    },
  },
  {
    xws: 'precognitivereflexes',
    slot: 'Force Power',
    prev: {
      cost: {
        variable: 'initiative',
        values: { '1': 3, '2': 3, '3': 4, '4': 7, '5': 10, '6': 13 },
      },
      hyperspace: false,
    },
    current: {
      cost: {
        variable: 'initiative',
        values: { '0': 3, '1': 3, '2': 3, '3': 4, '4': 7, '5': 10, '6': 13 },
      },
      hyperspace: false,
    },
  },
  {
    xws: 'agilegunner',
    slot: 'Gunner',
    prev: { cost: { value: 8 }, hyperspace: true },
    current: {
      cost: {
        variable: 'size',
        values: { Small: 7, Medium: 6, Large: 5, Huge: 200 },
      },
      hyperspace: true,
    },
  },
  {
    xws: 'veteranturretgunner',
    slot: 'Gunner',
    prev: { cost: { value: 10 }, hyperspace: false },
    current: {
      cost: {
        variable: 'size',
        values: { Small: 12, Medium: 9, Large: 7, Huge: 200 },
      },
      hyperspace: false,
    },
  },
  {
    xws: 'inertialdampeners',
    slot: 'Illicit',
    prev: {
      cost: {
        variable: 'initiative',
        values: {
          '0': 0,
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5,
          '6': 6,
          '7': 7,
          '8': 8,
        },
      },
      hyperspace: true,
    },
    current: {
      cost: {
        variable: 'initiative',
        values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
      },
      hyperspace: true,
    },
  },
  {
    xws: 'clustermissiles',
    slot: 'Missile',
    prev: { cost: { value: 5 }, hyperspace: false },
    current: { cost: { value: 4 }, hyperspace: false },
  },
  {
    xws: 'ionmissiles',
    slot: 'Missile',
    prev: { cost: { value: 4 }, hyperspace: true },
    current: { cost: { value: 3 }, hyperspace: true },
  },
  {
    xws: 'protonrockets',
    slot: 'Missile',
    prev: { cost: { value: 7 }, hyperspace: false },
    current: { cost: { value: 6 }, hyperspace: false },
  },
  {
    xws: 'diamondboronmissiles',
    slot: 'Missile',
    prev: { cost: { value: 6 }, hyperspace: false },
    current: { cost: { value: 6 }, hyperspace: true },
  },
  {
    xws: 'connernets',
    slot: 'Device',
    prev: { cost: { value: 6 }, hyperspace: false },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'ionbombs',
    slot: 'Device',
    prev: { cost: { value: 6 }, hyperspace: true },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'electroprotonbomb',
    slot: 'Device',
    prev: { cost: { value: 12 }, hyperspace: false },
    current: { cost: { value: 11 }, hyperspace: false },
  },
  {
    xws: 'passivesensors',
    slot: 'Sensor',
    prev: { cost: { value: 3 }, hyperspace: true },
    current: {
      cost: {
        variable: 'initiative',
        values: { '0': 2, '1': 2, '2': 2, '3': 2, '4': 2, '5': 4, '6': 6 },
      },
      hyperspace: true,
    },
  },
  {
    xws: 'crackshot',
    slot: 'Talent',
    prev: { cost: { value: 1 }, hyperspace: false },
    current: { cost: { value: 2 }, hyperspace: false },
  },
  {
    xws: 'marksmanship',
    slot: 'Talent',
    prev: { cost: { value: 1 }, hyperspace: false },
    current: { cost: { value: 1 }, hyperspace: true },
  },
  {
    xws: 'saturationsalvo',
    slot: 'Talent',
    prev: { cost: { value: 5 }, hyperspace: false },
    current: { cost: { value: 4 }, hyperspace: false },
  },
  {
    xws: 'snapshot',
    slot: 'Talent',
    prev: {
      cost: {
        variable: 'size',
        values: { Small: 7, Medium: 8, Large: 9, Huge: 200 },
      },
      hyperspace: true,
    },
    current: {
      cost: {
        variable: 'size',
        values: { Small: 8, Medium: 9, Large: 10, Huge: 200 },
      },
      hyperspace: true,
    },
  },
  {
    xws: 'targetingsynchronizer',
    slot: 'Tech',
    prev: { cost: { value: 6 }, hyperspace: false },
    current: { cost: { value: 4 }, hyperspace: true },
  },
  {
    xws: 'advprotontorpedoes',
    slot: 'Torpedo',
    prev: { cost: { value: 6 }, hyperspace: true },
    current: { cost: { value: 5 }, hyperspace: true },
  },
  {
    xws: 'iontorpedoes',
    slot: 'Torpedo',
    prev: { cost: { value: 6 }, hyperspace: false },
    current: { cost: { value: 5 }, hyperspace: false },
  },
  {
    xws: 'plasmatorpedoes',
    slot: 'Torpedo',
    prev: { cost: { value: 9 }, hyperspace: true },
    current: { cost: { value: 8 }, hyperspace: true },
  },
  {
    xws: 'dorsalturret',
    slot: 'Turret',
    prev: { cost: { value: 3 }, hyperspace: false },
    current: { cost: { value: 2 }, hyperspace: true },
  },
];

export default t;

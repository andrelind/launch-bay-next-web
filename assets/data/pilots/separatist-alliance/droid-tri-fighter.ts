import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'Droid Tri-Fighter' },
  xws: 'droidtrifighter',
  size: 'Small',
  dial: [
    '1ER',
    '1TW',
    '1YW',
    '1RR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TB',
    '3BW',
    '3FB',
    '3NW',
    '3YB',
    '3KR',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Evade' },
    },
    {
      difficulty: 'White',
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: { en: 'Networked Calculations' },
    text: {
      en:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
    },
  },
  pilots: [
    {
      name: { en: 'DIS-T81' },
      initiative: 4,
      limited: 1,
      xws: 'dist81',
      hyperspace: false,
      epic: false,
      slots: [],
      cost: 200,
      caption: { en: 'Clever Circuits' },
      ability: {
        en:
          "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship in the enemy ship's firing arc to change 1 [Focus] result to an [Evade] or [Hit] result.",
      },
    },
    {
      xws: 'tri_ll5',
      name: { en: 'Tri_LL5' },
      caption: { en: '???' },
      cost: 200,
      initiative: 5,
      limited: 1,
      ability: {
        en: "During the System Pha... spend your lock on a... that ship's...",
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'tri_lll3',
      name: { en: 'Tri_LLL3' },
      caption: { en: '???' },
      cost: 200,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'Setup: After placing forces... the Fearful Prey condi... 1 enemy ship.',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'tri_l3',
      name: { en: 'Tri_L3' },
      caption: { en: '???' },
      cost: 200,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'At the start of the En... you may acquire a lo... range 1-3 that...',
      },
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'tri_3',
      name: { en: 'Tri_3' },
      cost: 200,
      initiative: 3,
      limited: 1,
      slots: [],
      hyperspace: false,
      epic: false,
    },
    {
      xws: 'tri_1',
      name: { en: 'Tri_1' },
      cost: 200,
      initiative: 1,
      limited: 1,
      slots: [],
      hyperspace: false,
      epic: false,
    },
  ],
};

export default t;

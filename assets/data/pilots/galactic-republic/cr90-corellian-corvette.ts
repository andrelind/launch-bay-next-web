import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'CR90 Corellian Corvette' },
  xws: 'cr90corelliancorvette',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1FW',
    '1NB',
    '2BW',
    '2FB',
    '2NW',
    '3BR',
    '3FB',
    '3NR',
    '4FW',
    '5FR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Left Arc', type: 'attack', value: 4 },
    { arc: 'Right Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 18 },
    { type: 'shields', value: 7, recovers: 2 },
    { type: 'energy', value: 7, recovers: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: { en: 'Broadside Batteries' },
    text: {
      en: 'You can acquire locks and perform primary attacks at range 1-4.',
    },
  },
  pilots: [
    {
      name: { en: 'Republic Judiciary' },
      text: {
        en:
          'The Galactic Republic uses small, swift warships such as the CR90 corvette to respond rapidly to Separatist incursions across the galaxy.',
      },
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 146,
      xws: 'republicjudiciary',
      slots: [
        'Command',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Team',
        'Cargo',
      ],
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

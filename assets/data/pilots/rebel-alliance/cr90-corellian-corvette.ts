import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'CR90 Corellian Corvette' },
  xws: 'cr90corelliancorvette',
  size: 'Huge',
  dial: [
    '0BR',
    '0NR',
    '1BW',
    '1FW',
    '1NW',
    '2BB',
    '2FB',
    '2NB',
    '3BR',
    '3FB',
    '3NR',
    '4FR',
    '5FR',
  ],
  faction: 'Rebel Alliance',
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
      name: { en: 'Alderaanian Guard' },
      text: {
        en:
          'A craft used since before the Clone Wars, the CR90 corvette is favored by the Royal House of Alderaan for its versatility.',
      },
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 146,
      xws: 'alderaanianguard',
      slots: [
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Team',
        'Cargo',
        'Title',
        'Gunner',
        'Command',
      ],
      hyperspace: false,
      epic: true,
      ffg: 706,
    },
  ],
};

export default t;

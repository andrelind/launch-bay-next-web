import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'CR90 Corellian Corvette',
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
  pilots: [
    {
      name: 'Alderaanian Guard',
      text:
        'A craft used since before the Clone Wars, the CR90 corvette is favored by the Royal House of Alderaan for its versatility.',
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 146,
      xws: 'alderaanianguard',
      shipAbility: {
        name: 'Broadside Batteries',
        text: 'You can acquire locks and perform primary attacks at range 1-4.',
      },
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
        'Title',
      ],
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

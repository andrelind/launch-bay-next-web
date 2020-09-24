import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'Gozanti-class Cruiser' },
  xws: 'gozanticlasscruiser',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1FB',
    '1NW',
    '2BR',
    '2FB',
    '2NR',
    '3FB',
    '4FR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 11 },
    { type: 'shields', value: 5, recovers: 1 },
    { type: 'energy', value: 3, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: { en: 'Docking Clamps' },
    text: { en: 'You can dock up to 4 small ships.' },
  },
  pilots: [
    {
      name: { en: 'Outer Rim Garrison' },
      text: {
        en:
          'Capable of carrying four TIE fighters and operating independently for long periods of time, the Gozanti-class cruiser is a common sight in the skies of downtrodden worlds across the Outer Rim.',
      },
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 60,
      xws: 'outerrimgarrison',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Cargo',
        'Cargo',
        'Title',
      ],
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

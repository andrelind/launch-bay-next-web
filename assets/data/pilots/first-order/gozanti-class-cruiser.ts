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
  faction: 'First Order',
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
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: { en: 'Docking Clamps' },
    text: { en: 'You can dock up to 4 small ships.' },
  },
  pilots: [
    {
      name: { en: 'First Order Sympathizers' },
      text: {
        en:
          "The First Order's swift rise to power rests upon ruthless innovation. However, sympathizers often repurpose Imperial designs, like the venerable Gozanti-class cruiser, in surveillance and patrol operations.",
      },
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 60,
      xws: 'firstordersympathizers',
      slots: [
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
        'Gunner',
        'Command',
      ],
      hyperspace: false,
      epic: true,
      ffg: 712,
    },
  ],
};

export default t;

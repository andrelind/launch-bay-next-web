import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'GR-75 Medium Transport',
  xws: 'gr75mediumtransport',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1FB',
    '1NB',
    '2BW',
    '2FW',
    '2NW',
    '3FR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 3, recovers: 1 },
    { type: 'energy', value: 4, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
  ],
  pilots: [
    {
      name: 'Echo Base Evacuees',
      text:
        'A craft used since before the Clone Wars, the CR90 corvette is favored by the Royal House of Alderaan for its versatility.',
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 55,
      xws: 'echobaseevacuees',
      shipAbility: {
        name: 'Resupply Craft',
        text:
          'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
      },
      slots: [
        'Command',
        'Hardpoint',
        'Turret',
        'Crew',
        'Crew',
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

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'GR-75 Medium Transport' },
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
  ability: {
    name: { en: 'Resupply Craft' },
    text: {
      en:
        'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
    },
  },
  pilots: [
    {
      name: { en: 'Echo Base Evacuees' },
      text: {
        en:
          "The GR-75 medium transport acquitted itself well at battles such as the evacuation of Hoth, where several of these ships were pivotal to the Rebel forces' escape.",
      },
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 55,
      xws: 'echobaseevacuees',
      slots: [
        'Turret',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
        'Title',
        'Command',
      ],
      hyperspace: false,
      epic: true,
      ffg: 709,
    },
  ],
};

export default t;

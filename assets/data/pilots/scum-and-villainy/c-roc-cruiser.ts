import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'C-ROC Cruiser',
  xws: 'croccruiser',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1FB',
    '1NW',
    '2BW',
    '2FB',
    '2NW',
    '3BR',
    '3FW',
    '3NR',
    '4FR',
    '5FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 4, recovers: 2 },
    { type: 'energy', value: 4, recovers: 2 },
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
      name: 'Syndicate Smugglers',
      text:
        'Vessels like the C-ROC Cruiser allow criminal operations across the Outer Rim to move massive amounts of illicit materials, or project power to bully small colonies into compliance.',
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 58,
      xws: 'syndicatesmugglers',
      shipAbility: {
        name: 'Overdrive Burners',
        text:
          'While you defend, if your revealed maneuver is speed 3-5, roll 1 additional defense die.',
      },
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Device',
        'Illicit',
        'Title',
        'Configuration',
      ],
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

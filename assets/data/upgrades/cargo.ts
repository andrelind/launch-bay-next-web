import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Adaptive Shields',
    limited: 0,
    xws: 'adaptiveshields',
    sides: [
      {
        title: 'Adaptive Shields',
        type: 'Cargo',
        ability:
          'While another friendly ship at range 0-1 defends, if it is a smaller size than you, you may spend 1 shield or 2 [Energy] to cancel 1 [Hit] or [Critical Hit] result.',
        slots: ['Cargo'],
        ffg: -1,
      },
    ],
    cost: { value: 10 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Boosted Scanners',
    limited: 0,
    xws: 'boostedscanners',
    sides: [
      {
        title: 'Boosted Scanners',
        type: 'Cargo',
        ability:
          'While you lock, coordinate, or jam, you may spend up to 3 [Energy] to increase the range at which you can choose an object by 1 per [Energy] spent this way, to a maximum of range 5.',
        slots: ['Cargo'],
        ffg: -1,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Optimized Power Core',
    limited: 0,
    xws: 'optimizedpowercore',
    sides: [
      {
        title: 'Optimized Power Core',
        type: 'Cargo',
        ability: 'After you execute a blue maneuver, recover 1 [Energy].',
        slots: ['Cargo'],
        ffg: -1,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Tibanna Reserves',
    limited: 0,
    xws: 'tibannareserves',
    sides: [
      {
        title: 'Tibanna Reserves',
        type: 'Cargo',
        ability: 'Action: Spend 1 [Charge] to recover 2 [Energy].',
        charges: { value: 3, recovers: 0 },
        slots: ['Cargo'],
        ffg: -1,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
];

export default t;

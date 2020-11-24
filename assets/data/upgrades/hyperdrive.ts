import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    xws: 'syliure31hyperdrive',
    limited: 0,
    cost: { value: 0 },
    sides: [
      {
        title: { en: 'Syliure-31 Hyperdrive' },
        type: 'Hyperdrive',
        ability: {
          en:
            'Setup: You can be placed anywhere in the play area beyond range 1 of obstacles, beyond range 3 of enemy ships, and beyond range 3 of the enemy table edge.',
        },
        slots: ['Hyperdrive'],
        ffg: 850,
      },
    ],
    hyperspace: false,
    epic: false,
    restrictions: [{}],
  },
];

export default t;

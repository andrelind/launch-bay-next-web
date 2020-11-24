import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'ioncannonbattery',
    sides: [
      {
        title: { en: 'Ion Cannon Battery' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  . If this attack hits, the defender suffers 1  [Critical Hit] damage, and all [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 4,
          minrange: 2,
          maxrange: 4,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 737,
      },
      {
        ffg: 736,
        title: { en: 'Ion Cannon Battery (Offline)' },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline After you engage, you may spend 2 to flip this card.',
        },
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ordnancetubes',
    sides: [
      {
        title: { en: 'Ordnance Tubes' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. You can perform [Torpedo] and [Missile] attacks only as bonus attacks. You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Full Front Arc]. Bonus Attack: Perform a [Torpedo] attack. Bonus Attack: Perform a [Missile] attack.',
        },
        slots: ['Hardpoint'],
        ffg: 741,
      },
      {
        ffg: 740,
        title: { en: 'Ordnance Tubes (Offline)' },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en:
            'Offline You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Bullseye Arc]. Action: Spend 2 to flip this card.',
        },
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'pointdefensebattery',
    sides: [
      {
        title: { en: 'Point-Defense Battery' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1  . Bonus Attack: Spend 1  . Bonus Attack: Spend 1  . Bonus Attack: Spend 1  .',
        },
        attack: {
          arc: 'Double Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 743,
      },
      {
        ffg: 742,
        title: { en: 'Point-Defense Battery (Offline)' },
        type: 'Hardpoint',
        slots: [],
        ability: {
          en: 'Offline After you engage, you may spend 2 to flip this card.',
        },
      },
    ],
    cost: { value: 9 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'targetingbattery',
    sides: [
      {
        title: { en: 'Targeting Battery' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. After you perform this attack, you may acquire a lock on the defender.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 2,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 739,
      },
      {
        title: { en: 'Targeting Battery (Offline)' },
        type: 'Hardpoint',
        ability: {
          en:
            'Offline: After you engage, you may spend 2 [Energy] to flip this card.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 738,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'turbolaserbattery',
    sides: [
      {
        title: { en: 'Turbolaser Battery' },
        type: 'Hardpoint',
        ability: {
          en:
            'Setup: Equip this side faceup. Bonus Attack([Lock]): Spend 3 [Energy]. If this attack hits, add 3 [Hit] results.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 745,
      },
      {
        title: { en: 'Turbolaser Battery (Offline)' },
        type: 'Hardpoint',
        ability: {
          en: 'Offline: After you engage, you may spend 2 ( to flip this card.',
        },
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Hardpoint'],
        ffg: 744,
      },
    ],
    cost: { value: 13 },
    restrictions: [{ stat: { type: 'energy', value: 5 } }],
    hyperspace: false,
    epic: true,
  },
];

export default t;

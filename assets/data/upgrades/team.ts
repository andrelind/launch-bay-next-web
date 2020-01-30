import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Bombardment Specialists',
    limited: 0,
    xws: 'bombardmentspecialists',
    sides: [
      {
        title: 'Bombardment Specialists',
        type: 'Team',
        ability:
          'While you perform an attack, you may spend 1 calculate token to increase or decrease the range requirement by 1, to a limit of 0-5.',
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: -1,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Comms Team',
    limited: 0,
    xws: 'commsteam',
    sides: [
      {
        title: 'Comms Team',
        type: 'Team',
        ability:
          'After you perform a [Coordinate] action, you may spend up to 2 [Energy] to coordinate that many additional ships at range 0-1 of the ship you coordinated.',
        grants: [
          {
            action: {
              type: 'Coordinate',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Jam',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: -1,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Damage Control Team',
    limited: 0,
    xws: 'damagecontrolteam',
    sides: [
      {
        title: 'Damage Control Team',
        type: 'Team',
        ability:
          'Before you engage, you may spend 1 or more [Energy] to flip that many of your Offline upgrade cards. Action: Spend 1 or more [Energy] to repair that many of your faceup Ship damage cards.',
        grants: [
          {
            action: {
              type: 'Reinforce',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: -1,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Gunnery Specialists',
    limited: 0,
    xws: 'gunneryspecialists',
    sides: [
      {
        title: 'Gunnery Specialists',
        type: 'Team',
        ability:
          'While you perform a primary or [Hardpoint] attack, you may spend 1 or more [Energy] to reroll that many attack dice.',
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: -1,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'IG-RM Droids',
    limited: 0,
    xws: 'igrmdroids',
    sides: [
      {
        title: 'IG-RM Droids',
        type: 'Team',
        ability:
          'While you perform an attack, if you are calculating, you may change 1 [Hit] result to a [Critical Hit] result.',
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        slots: ['Team'],
        ffg: -1,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Ordnance Team',
    limited: 0,
    xws: 'ordnanceteam',
    sides: [
      {
        title: 'Ordnance Team',
        type: 'Team',
        ability:
          'While you perform a [Reload] action, you may spend up to 3 [Energy] to reload that many additional [Charge] on your equipped [Missile]/[Torpedo] upgrades.\n\nAfter you perform a [Reload] action, you may spend 1 [Energy] to remove 1 disarm token.',
        grants: [
          {
            action: {
              type: 'Reload',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: -1,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Sensor Experts',
    limited: 0,
    xws: 'sensorexperts',
    sides: [
      {
        title: 'Sensor Experts',
        type: 'Team',
        ability:
          'You can maintain up to 3 locks on different objects. After you perform a [Lock] action, you may spend up to 2 [Energy] to acquire a lock on that many other objects at range 0-1 of the object you locked, ignoring range restrictions.',
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        slots: ['Team'],
        ffg: -1,
      },
    ],
    cost: { value: 10 },
    hyperspace: false,
    epic: true,
  },
];

export default t;

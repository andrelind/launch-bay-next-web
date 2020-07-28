import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Integrated S-foils',
    limited: 0,
    xws: 'integratedsfoils',
    sides: [
      {
        title: 'Integrated S-foils (Closed)',
        type: 'Configuration',
        ability:
          'While you perform a primary attack, if the defender is not in your [Bullseye Arc], roll 1 fewer attack die.\n\nBefore you activate, you may flip this card. ',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { difficulty: 'Red', type: 'Barrel Roll' },
            },
            value: 1,
          },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e3b44142faf0f13e541bf674a6c06dbc.png',
        ffg: 486,
      },
      {
        title: 'Integrated S-foils (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49372b4efb974ff673a1b79441186fd5.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/bf5e7b98158570f9d4fc259b5553f4ca.jpg',
        ffg: 487,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t70xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Os-1 Arsenal Loadout',
    limited: 0,
    xws: 'os1arsenalloadout',
    sides: [
      {
        title: 'Os-1 Arsenal Loadout',
        type: 'Configuration',
        ability:
          'While you have exactly 1 disarm token, you can still perform [Torpedo] and [Missile] attacks against targets you have locked. If you do, you cannot spend your lock during the attack. Add [Torpedo] and [Missile] slots.',
        slots: ['Configuration'],
        grants: [
          { slot: 'Torpedo', value: 1 },
          { slot: 'Missile', value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_125.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_125.jpg',
        ffg: 350,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Pivot Wing',
    limited: 0,
    xws: 'pivotwing',
    sides: [
      {
        title: 'Pivot Wing (Closed)',
        type: 'Configuration',
        ability:
          'While you defend, roll 1 fewer defense die. After you execute a (0 [Stationary]) maneuver, you may rotate your ship 90˚ or 180˚. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107b.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_107b.jpg',
        ffg: 332,
      },
      {
        title: 'Pivot Wing (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_107.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_107.jpg',
        ffg: 331,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['ut60duwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Servomotor S-foils',
    limited: 0,
    xws: 'servomotorsfoils',
    sides: [
      {
        title: 'Servomotor S-foils (Closed)',
        type: 'Configuration',
        ability:
          'While you perform a primary attack, roll 1 fewer attack die. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Boost', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { difficulty: 'Red', type: 'Boost' },
            },
            value: 1,
          },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108b.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_108b.jpg',
        ffg: 334,
      },
      {
        title: 'Servomotor S-foils (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_108.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_108.jpg',
        ffg: 333,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t65xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Xg-1 Assault Configuration',
    limited: 0,
    xws: 'xg1assaultconfiguration',
    sides: [
      {
        title: 'Xg-1 Assault Configuration',
        type: 'Configuration',
        ability:
          'While you have exactly 1 disarm token, you can still perform [Cannon] attacks. While you perform a [Cannon] attack while disarmed, roll a maximum of 3 attack dice. Add [Cannon] slot.',
        slots: ['Configuration'],
        grants: [{ slot: 'Cannon', value: 1 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_126.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_126.jpg',
        ffg: 351,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Grappling Struts',
    limited: 0,
    xws: 'grapplingstruts',
    sides: [
      {
        title: 'Grappling Struts (Closed)',
        type: 'Configuration',
        ability:
          'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
        slots: ['Configuration'],
        ffg: 555,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ca74271f47c42b390ca0ba0b389144a5.png',
      },
      {
        title: 'Grappling Struts (Open)',
        type: 'Configuration',
        ability:
          'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90˚ in that direction. After you execute a maneuver, flip this card.',
        slots: ['Configuration'],
        ffg: 535,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/be82da17cfd39003fda380bead210eb9.png',
      },
    ],
    restrictions: [{ chassis: ['vultureclassdroidfighter'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    name: 'Delta-7B',
    limited: 0,
    xws: 'delta7b',
    sides: [
      {
        title: 'Delta-7B',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { stat: 'agility', value: -1 },
          { stat: 'shields', value: 2 },
          { stat: 'attack', arc: 'Front Arc', value: 1 },
        ],
        text:
          "The Delta-7B was designed as a heavier variant of the Delta-7 Aethersprite-class Interceptor, identifiable by the repositioned astromech slot. Many Jedi Generals favor this craft's greater firepower and durability.",
        ffg: 548,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/515903e04a0d06a9200860698326896d.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 14, '1': 15, '2': 16, '3': 15, '4': 18, '5': 21, '6': 24 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Calibrated Laser Targeting',
    limited: 0,
    xws: 'calibratedlasertargeting',
    sides: [
      {
        title: 'Calibrated Laser Targeting',
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], add 1 [Focus] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f3e06326ab525e07f9a85363b6d69580.png',
        ffg: 549,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Landing Struts',
    limited: 0,
    xws: 'landingstruts',
    sides: [
      {
        title: 'Landing Struts (Closed)',
        type: 'Configuration',
        ability:
          'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
        ffg: 594,
      },
      {
        title: 'Landing Struts (Open)',
        type: 'Configuration',
        ability:
          'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a (2 [Straight]) and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
        slots: ['Configuration'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/aba79159308e850b635f6c43721ccdee.png',
        ffg: 595,
      },
    ],
    restrictions: [{ chassis: ['hyenaclassdroidbomber'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    name: 'Corsair Refit',
    limited: 0,
    xws: 'corsairrefit',
    sides: [
      {
        title: 'Corsair Refit',
        type: 'Configuration',
        ability:
          'Bonus Attack: Spend 1 [Energy] to perform a [Cannon], [Turret], or [Missile] attack.',
        slots: ['Configuration'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { slot: 'Turret', value: 1 },
          { slot: 'Missile', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c23a0130bad7330c0abb6218745910aa.png',
        ffg: 594,
      },
    ],
    restrictions: [{ chassis: ['croccruiser'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 15 },
  },
  {
    name: 'Stabilized S-Foils',
    limited: 0,
    xws: 'stabilizedsfoils',
    sides: [
      {
        title: 'Stabilized S-foils (Open)',
        type: 'Configuration',
        ability:
          'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 645,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/f03c2baf5b0a095e28948f03468cc5d2.png',
      },
      {
        title: 'Stabilized S-foils (Closed)',
        type: 'Configuration',
        ability:
          'Before you activate, if you are not critically damaged, you may flip this card.',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Evade', difficulty: 'Red' },
            },
            value: 1,
          },
          { action: { type: 'Reload', difficulty: 'Red' }, value: 1 },
        ],
        ffg: 646,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/77f37d94be3977d6d573219dd6462c2b.png',
      },
    ],
    restrictions: [{ chassis: ['asf01bwing'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 2 },
  },
];

export default t;

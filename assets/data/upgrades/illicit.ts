import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Cloaking Device',
    limited: 1,
    xws: 'cloakingdevice',
    sides: [
      {
        title: 'Cloaking Device',
        type: 'Illicit',
        ability:
          'Action: Spend 1 [Charge] to perform a [Cloak] action. At the start of the Planning Phase, roll 1 attack die. On a [Focus] result, decloak or discard your cloak token.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_57.png',
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_57.jpg',
        ffg: 286,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Contraband Cybernetics',
    limited: 0,
    xws: 'contrabandcybernetics',
    sides: [
      {
        title: 'Contraband Cybernetics',
        type: 'Illicit',
        ability:
          'Before you activate, you may spend 1 [Charge]. If you do, until the end of the round, you can perform actions and execute red maneuvers, even while stressed.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_58.png',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_58.jpg',
        ffg: 287,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    name: "Deadman's Switch",
    limited: 0,
    xws: 'deadmansswitch',
    sides: [
      {
        title: "Deadman's Switch",
        type: 'Illicit',
        ability:
          'After you are destroyed, each other ship at range 0-1 suffers 1 [Hit] damage.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_59.png',
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_59.jpg',
        ffg: 288,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Feedback Array',
    limited: 0,
    xws: 'feedbackarray',
    sides: [
      {
        title: 'Feedback Array',
        type: 'Illicit',
        ability:
          'Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 [Hit] damage.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_60.png',
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_60.jpg',
        ffg: 289,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Inertial Dampeners',
    limited: 0,
    xws: 'inertialdampeners',
    sides: [
      {
        title: 'Inertial Dampeners',
        type: 'Illicit',
        ability:
          'Before you would execute a maneuver, you may spend 1 shield. If you do, execute a white (0 [Stationary]) instead of the maneuver you revealed, then gain 1 stress token.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_61.png',
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_61.jpg',
        ffg: 290,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
    },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Rigged Cargo Chute',
    limited: 0,
    xws: 'riggedcargochute',
    sides: [
      {
        title: 'Rigged Cargo Chute',
        type: 'Illicit',
        ability:
          'Action: Spend 1 [Charge]. Drop 1 loose cargo using the (1 [Straight]) template.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_62.png',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Loose Cargo',
          type: 'Obstacle',
          effect: 'Loose cargo is a debris cloud.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_62.jpg',
        ffg: 291,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Coaxium Hyperfuel',
    limited: 0,
    xws: 'coaxiumhyperfuel',
    sides: [
      {
        title: 'Coaxium Hyperfuel',
        type: 'Illicit',
        ability:
          'You can perform the [Slam] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [Slam] action.',
        slots: ['Illicit'],
        ffg: 650,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1622f5d9e279b54d4610820f5dd31a95.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ action: { type: 'SLAM' } }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Quick-Release Locks',
    limited: 0,
    xws: 'quickreleaselocks',
    sides: [
      {
        title: 'Quick-Release Locks',
        type: 'Illicit',
        ability:
          "During the System Phase, you may spend 1 [Charge] to place 1 cargo crate drift in your [Rear Arc] at range 0. It cannot overlap a ship this way. This card's [Charge] cannot be recovered.",
        charges: { value: 2, recovers: 0 },
        slots: ['Illicit'],
        ffg: -1,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: "Saboteur's Map",
    limited: 1,
    xws: 'saboteursmap',
    sides: [
      {
        title: "Saboteur's Map",
        type: 'Illicit',
        ability:
          'At the end of Setup, you may spend up to 1 [Charge] from each of your equipped <strong>Mine</strong> upgrades to place the corresponding device in the play area beyond range 2 of any enemy ship or other device.',
        charges: { value: 2, recovers: 0 },
        slots: ['Illicit'],
        ffg: -1,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Scanner Baffler',
    limited: 1,
    xws: 'scannerbaffler',
    sides: [
      {
        title: 'Scanner Baffler',
        type: 'Illicit',
        ability:
          'At the end of Setup, you may choose up to six other friendly, standard ships in your deployment area at range 0-1. If you do, place those ships anywhere at range 0-1.',
        slots: ['Illicit'],
        ffg: -1,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
];

export default t;

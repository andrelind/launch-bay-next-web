import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: '"Chopper"',
    limited: 1,
    xws: 'chopper',
    sides: [
      {
        title: '"Chopper"',
        type: 'Astromech',
        ability:
          'Action: Spend 1 non-recurring [Charge] from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring [Charge] on an equipped upgrade.',
        slots: ['Astromech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_99.png',
        ffg: 323,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: '"Genius"',
    limited: 1,
    xws: 'genius',
    sides: [
      {
        title: '"Genius"',
        type: 'Astromech',
        ability:
          'After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_143.png',
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_143.jpg',
        ffg: 368,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'R2 Astromech',
    limited: 0,
    xws: 'r2astromech',
    sides: [
      {
        title: 'R2 Astromech',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_53.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_53.jpg',
        ffg: 282,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 5, '2': 7, '3': 9 } },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R2-D2',
    limited: 1,
    xws: 'r2d2',
    sides: [
      {
        title: 'R2-D2',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_100.png',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_100.jpg',
        ffg: 324,
      },
    ],
    cost: { variable: 'agility', values: { '0': 4, '1': 6, '2': 8, '3': 10 } },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R3 Astromech',
    limited: 0,
    xws: 'r3astromech',
    sides: [
      {
        title: 'R3 Astromech',
        type: 'Astromech',
        ability:
          'You can maintain up to 2 locks. Each lock must be on a different object. After you perform a [Lock] action, you may acquire a lock.',
        slots: ['Astromech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_54.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_54.jpg',
        ffg: 283,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R4 Astromech',
    limited: 0,
    xws: 'r4astromech',
    sides: [
      {
        title: 'R4 Astromech',
        type: 'Astromech',
        ability:
          'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
        slots: ['Astromech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_55.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_55.jpg',
        ffg: 284,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R5 Astromech',
    limited: 0,
    xws: 'r5astromech',
    sides: [
      {
        title: 'R5 Astromech',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_56.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_56.jpg',
        ffg: 285,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R5-D8',
    limited: 1,
    xws: 'r5d8',
    sides: [
      {
        title: 'R5-D8',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_101.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_101.jpg',
        ffg: 325,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R5-P8',
    limited: 1,
    xws: 'r5p8',
    sides: [
      {
        title: 'R5-P8',
        type: 'Astromech',
        ability:
          'While you perform an attack against a defender in your [Front Arc], you may spend 1 [Charge] to reroll 1 attack die. If the rerolled result is a [Critical Hit] result, suffer 1 [Critical Hit] damage.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_144.png',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_144.jpg',
        ffg: 369,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R5-TK',
    limited: 1,
    xws: 'r5tk',
    sides: [
      {
        title: 'R5-TK',
        type: 'Astromech',
        ability: 'You can perform attacks against friendly ships.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_145.png',
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_145.jpg',
        ffg: 370,
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'R5-X3',
    limited: 1,
    xws: 'r5x3',
    sides: [
      {
        title: 'R5-X3',
        type: 'Astromech',
        charges: { value: 2, recovers: 0 },
        ability:
          'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/aed4536536b67bae316b260ed151c22a.png',
        slots: ['Astromech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/7361f88154703f61221bc2a775f4a9b6.jpg',
        ffg: 483,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'R2-HA',
    limited: 1,
    xws: 'r2ha',
    sides: [
      {
        title: 'R2-HA',
        type: 'Astromech',
        ability:
          'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b3e6d35ca6b6fd297312248ddf4e69a7.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/d72ab7fa7cd398d614466a98076a2e6b.jpg',
        slots: ['Astromech'],
        ffg: 482,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'BB-8',
    limited: 1,
    xws: 'bb8',
    sides: [
      {
        title: 'BB-8',
        type: 'Astromech',
        ability:
          'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] or [Boost] action.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/37297ef7839800afd543de5d1a363561.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/e8a75e0e143a5857ac3931d56ccde86c.jpg',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 479,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 },
    },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'BB Astromech',
    limited: 0,
    xws: 'bbastromech',
    sides: [
      {
        title: 'BB Astromech',
        type: 'Astromech',
        ability:
          'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/010399f4054469aed3b04acba08d41b0.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/a2e3aaf77e8690a37e76ef4ae2087180.jpg',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        ffg: 480,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
    },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'M9-G8',
    limited: 1,
    xws: 'm9g8',
    sides: [
      {
        title: 'M9-G8',
        type: 'Astromech',
        ability:
          'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cd67f33e8aa52d2aeb07f432125a8c73.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/f810d46699343a134003deea0f423131.jpg',
        slots: ['Astromech'],
        ffg: 481,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'R4-P Astromech',
    xws: 'r4pastromech',
    limited: 0,
    sides: [
      {
        title: 'R4-P Astromech',
        type: 'Astromech',
        ability:
          'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/26f6dd68ba6bb37fa5315f45a6237c88.png',
        ffg: 546,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
  },
  {
    name: 'R4-P17',
    xws: 'r4p17',
    limited: 1,
    sides: [
      {
        title: 'R4-P17',
        type: 'Astromech',
        ability:
          'After you fully execute a red maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/80c71951bb28b45b9ffdc84c9e7e69f8.png',
        ffg: 547,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 5 },
  },
  {
    name: 'R4-P44',
    xws: 'r4p44',
    limited: 1,
    sides: [
      {
        title: 'R4-P44',
        type: 'Astromech',
        ability:
          'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
        slots: ['Astromech'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/749fa54f44bc3327349aa3f8b1742a67.png',
        ffg: 551,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 5 },
  },
  {
    name: 'R2-C4',
    limited: 1,
    xws: 'r2c4',
    sides: [
      {
        title: 'R2-C4',
        type: 'Astromech',
        ability:
          'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/8fce75228aa2c4eaaf3e9666c4da8caf.png',
        slots: ['Astromech'],
        ffg: 589,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 5 },
  },
  {
    name: 'R2-A6',
    limited: 1,
    xws: 'r2a6',
    sides: [
      {
        title: 'R2-A6',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may set your dial to a maneuver of the same bearing of a speed 1 higher or lower.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1d90c6b2f87d17c061e07a92373310b4.png',
        slots: ['Astromech'],
        ffg: 588,
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 6 },
  },
  {
    name: 'C1-10P',
    limited: 1,
    xws: 'c110p',
    sides: [
      {
        title: 'C1-10P',
        type: 'Astromech',
        ability:
          '<strong>Setup</strong>: Equip this side faceup. \n\nAfter you execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed.\n\nDuring the End Phase, if this card has 0 active [Charge], flip it. ',
        slots: ['Astromech'],
        ffg: 618,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/cde74a191d82775eacf2e273e855ef5f.png',
      },
      {
        title: 'C1-10P (Erratic)',
        type: 'Astromech',
        ability:
          'After you execute a maneuver, you <strong>must</strong> choose a ship at range 0-1. It gains 1 jam token.',
        slots: ['Astromech'],
        ffg: 617,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/6150404202e627187f39b6092cdf702c.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
    cost: { value: 7 },
  },
  {
    name: 'R1-J5',
    limited: 1,
    xws: 'r1j5',
    sides: [
      {
        title: 'R1-J5',
        type: 'Astromech',
        ability:
          'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed.\n\nAfter you repair a damage card with the <strong>Ship</strong> trait, you may spend 1 [Charge] to repair that card again.',
        charges: { value: 3, recovers: 0 },
        slots: ['Astromech'],
        ffg: 644,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/07ef542a7250abbf79d27526f17ac879.png',
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 6 },
  },
];

export default t;

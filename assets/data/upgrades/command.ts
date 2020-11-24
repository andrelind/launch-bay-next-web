import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'admiralozzel',
    sides: [
      {
        title: { en: 'Admiral Ozzel' },
        type: 'Command',
        ability: {
          en:
            'While a friendly large or huge ship at range 0-3 executes a maneuver, it may suffer 1 [Hit] damage to execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
        },
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
    epic: true,
  },
  {
    limited: 1,
    xws: 'agentoftheempire',
    sides: [
      {
        type: 'Command',
        title: { en: 'Agent of the Empire' },
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 TIE/ln fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        },
        grants: [{ wing: ['tielnfighter'], value: 5 }],
        slots: ['Command'],
        ffg: 732,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['tieadvancedx1', 'tieadvancedv1'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'azmorigan',
    sides: [
      {
        title: { en: 'Azmorigan' },
        type: 'Command',
        ability: {
          en:
            'During the End Phase, you may chooses up to 2 friendly ships at range 0-1. If you do, each of these ships does not remove 1 calculate or evade token.',
        },
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { baseSizes: ['Huge'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'captainneeda',
    sides: [
      {
        title: { en: 'Captain Needa' },
        type: 'Command',
        ability: {
          en:
            'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
        },
        charges: { value: 4, recovers: 0 },
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    restrictions: [{ factions: ['Galactic Empire'] }, { baseSizes: ['Huge'] }],
    epic: true,
  },
  {
    limited: 1,
    xws: 'carlistrieekan',
    sides: [
      {
        type: 'Command',
        title: { en: 'Carlist Rieekan' },
        ability: {
          en:
            'After a friendly ship at range 0-2 is destroyed, you may choose a friendly ship at range 0-2. If you do, it may perform a red [Evade] action.',
        },
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'firstorderelite',
    sides: [
      {
        type: 'Command',
        title: { en: 'First Order Elite' },
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2 or 3 TIE/fo fighters or TIE/sf fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        },
        grants: [{ wing: ['tiefofighter', 'tiesffighter'], value: 3 }],
        slots: ['Command'],
        ffg: 733,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['First Order'] },
      { chassis: ['tiesffighter', 'tievnsilencer'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'jandodonna',
    sides: [
      {
        type: 'Command',
        title: { en: 'Jan Dodonna' },
        ability: {
          en:
            'Friendly ships at range 0-3 can spend your focus and evade tokens.',
        },
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'raymusantilles',
    sides: [
      {
        type: 'Command',
        title: { en: 'Raymus Antilles' },
        ability: {
          en:
            'After you are destroyed, each friendly ship at range 0-1 gains 1 focus token. After you are destroyed, you are not removed until the end of the End Phase.',
        },
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }, { baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'stalwartcaptain',
    sides: [
      {
        type: 'Command',
        title: { en: 'Stalwart Captain' },
        ability: {
          en:
            'After you are destroyed, you are not removed until the end of the End Phase.',
        },
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'strategiccommander',
    sides: [
      {
        type: 'Command',
        title: { en: 'Strategic Commander' },
        ability: {
          en:
            'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
        },
        charges: { value: 3, recovers: 0 },
        slots: ['Command', 'Crew'],
        ffg: -1,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'veteranwingleader',
    sides: [
      {
        type: 'Command',
        title: { en: 'Veteran Wing Leader' },
        ability: {
          en:
            'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 other ships of your ship type. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        },
        grants: [{ wing: true, value: 5 }],
        slots: ['Command'],
        ffg: 734,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 2,
    xws: 'dreadnoughthunter',
    sides: [
      {
        type: 'Command',
        title: { en: 'Dreadnought Hunter' },
        ability: {
          en:
            'While you perform an attack against a huge ship, if the attack deals a faceup damage card to the defender and the defender is in your [Bullseye Arc], you may apply the Precision Shot effect even if you are not in the specified arc.',
        },
        slots: ['Command'],
        ffg: 735,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Small'] }, { initiative: { min: 4 } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'jedicommander',
    hyperspace: false,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'While your wingmates execute purple maneuvers, they treat those maneuvers as red, instead. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        },
        title: { en: 'Jedi Commander' },
        type: 'Command',
        slots: ['Command'],
        ffg: 834,
      },
    ],
    cost: { value: 5 },
  },
];

export default t;

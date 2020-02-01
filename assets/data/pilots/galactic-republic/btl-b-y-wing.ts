import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'BTL-B Y-wing',
  xws: 'btlbywing',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  pilots: [
    {
      name: 'Shadow Squadron Veteran',
      initiative: 3,
      limited: 0,
      xws: 'shadowsquadronveteran',
      text:
        'Shadow Squadron has served since the early days of the Clone Wars, winning victories at Kadavo and against the flagship of Grievous, Malevolence.',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/fe59b8b8bd7ca5d4104030b50a30a299.png',
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 32,
      ffg: 602,
    },
    {
      name: 'Anakin Skywalker',
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker-btlbywing',
      ability:
        'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      force: { value: 3, recovers: 1, side: ['light'] },
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Force Power',
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 60,
      ffg: 596,
      caption: 'Hero of the Republic',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/c7c979a7d90961d2e3afe377a71285df.png',
    },
    {
      name: 'R2-D2',
      xws: 'r2d2',
      initiative: 2,
      limited: 1,
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Rear Arc], gain 1 calculate token.',
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Reload' },
      ],
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Gunner',
        'Crew',
        'Device',
        'Modification',
      ],
      cost: 35,
      ffg: 600,
      caption: 'Bucket of Bolts',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/b37b960f2e79ab5eb905bc3593de8961.png',
    },
    {
      name: '"Odd Ball"',
      xws: 'oddball-btlbywing',
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      caption: 'CC-2237',
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 44,
      ffg: 597,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/3b260355bd12266e08ff25ec16d278fe.png',
    },
    {
      name: '"Matchstick"',
      xws: 'matchstick',
      initiative: 4,
      limited: 1,
      ability:
        'While you perform a primary or [Single Turret Arc] attack, you may reroll 1 attack die for each red token you have.',
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 43,
      ffg: 598,
      caption: 'Shadow Two',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/6aa658fe4082ed67500d2ac92c7731a0.png',
    },
    {
      name: '"Broadside"',
      xws: 'broadside',
      initiative: 3,
      limited: 1,
      ability:
        'While you perform a [Single Turret Arc] attack, if your [Single Turret Arc] indicator is in your [Left Arc] or [Right Arc], you may change 1 blank result to a [Focus] result.',
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 36,
      ffg: 599,
      caption: 'Shadow Three',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/1f0842573067d73acd7bb7589707ec4e.png',
    },
    {
      name: '"Goji"',
      xws: 'goji',
      initiative: 2,
      limited: 1,
      ability:
        'While a friendly ship at range 0-3 defends, it may roll 1 additional defense die for each friendly bomb or mine at range 0-1 of it.',
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      hyperspace: false,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 32,
      ffg: 601,
      caption: 'Payload Specialist',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/8ac74252d260a910a7990e6e806aa612.png',
    },
    {
      name: 'Red Squadron Bomber',
      xws: 'redsquadronbomber',
      initiative: 2,
      limited: 0,
      shipAbility: {
        name: 'Plated Hull',
        text:
          'While you defend, if you are not critically damaged, change 1 [Critical Hit] result to a [Hit] result.',
      },
      text:
        'At the battle of Geonosis, Red Squadron provided vital cover to the LAAT gunships deployed to secure the surface.',
      hyperspace: true,
      epic: true,
      slots: [
        'Turret',
        'Torpedo',
        'Gunner',
        'Astromech',
        'Device',
        'Modification',
      ],
      cost: 30,
      ffg: 603,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/692a1f1d4b5f5370dad7cacf2f19d699.png',
    },
  ],
  ffg: 68,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_BTL-B_Ywing.png',
};

export default t;

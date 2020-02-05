import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Andrasta',
    limited: 1,
    xws: 'andrasta',
    sides: [
      {
        title: 'Andrasta',
        type: 'Title',
        ability: 'Add [Device] slot.',
        slots: ['Title'],
        grants: [
          { slot: 'Device', value: 1 },
          { action: { type: 'Reload', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_146.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_146.jpg',
        ffg: 371,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Black One',
    limited: 1,
    xws: 'blackone',
    sides: [
      {
        title: 'Black One',
        type: 'Title',
        ability:
          'After you perform a [Slam] action, lose 1 [Charge]. Then you may gain 1 ion token to remove 1 disarm token. If your [Charge] is inactive, you cannot perform the [Slam] action.',
        slots: ['Title'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3e9870bff7f61acc12970c254eaeca89.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/b617cc192e2ffb8368de79d69e1e7956.jpg',
        ffg: 484,
        grants: [{ action: { type: 'SLAM', difficulty: 'White' }, value: 1 }],
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['t70xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Dauntless',
    limited: 1,
    xws: 'dauntless',
    sides: [
      {
        title: 'Dauntless',
        type: 'Title',
        ability:
          'After you partially execute a maneuver, you may perform 1 white action, treating that action as red.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_123.png',
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_123.jpg',
        ffg: 349,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['vt49decimator'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Ghost',
    limited: 1,
    xws: 'ghost',
    sides: [
      {
        title: 'Ghost',
        type: 'Title',
        ability:
          'You can dock 1 attack shuttle or Sheathipede-class shuttle. Your docked ships can deploy only from your rear guides.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_102.png',
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_102.jpg',
        ffg: 326,
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['vcx100lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Havoc',
    limited: 1,
    xws: 'havoc',
    sides: [
      {
        title: 'Havoc',
        type: 'Title',
        ability: 'Remove [Crew] slot. Add [Sensor] and [Astromech] slots.',
        slots: ['Title'],
        grants: [
          { slot: 'Sensor', value: 1 },
          { slot: 'Astromech', value: 1 },
          { slot: 'Crew', value: -1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_147.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_147.jpg',
        ffg: 372,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['scurrgh6bomber'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: "Hound's Tooth",
    limited: 1,
    xws: 'houndstooth',
    sides: [
      {
        title: "Hound's Tooth",
        type: 'Title',
        ability: '1 Z-95-AF4 headhunter can dock with you.',
        slots: ['Title'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_148.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_148.jpg',
        ffg: 373,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['yv666lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'IG-2000',
    limited: 0,
    xws: 'ig2000',
    sides: [
      {
        title: 'IG-2000',
        type: 'Title',
        ability:
          'You have the pilot ability of each other friendly ship with the IG-2000 upgrade.',
        slots: ['Title'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_149.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_149.jpg',
        ffg: 374,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['aggressorassaultfighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: "Lando's Millennium Falcon",
    limited: 1,
    xws: 'landosmillenniumfalcon',
    sides: [
      {
        title: "Lando's Millennium Falcon",
        type: 'Title',
        ability:
          '1 Escape Craft may dock with you. While you have an escape craft docked, you may spend its shields as if they were on your ship card. While you perform a primary attack against a stressed ship, roll 1 additional attack die.',
        slots: ['Title'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_164.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_164.jpg',
        ffg: 390,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['customizedyt1300lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Marauder',
    limited: 1,
    xws: 'marauder',
    sides: [
      {
        title: 'Marauder',
        type: 'Title',
        ability:
          'While you perform a primary [Rear Arc] attack, you may reroll 1 attack die. Add [Gunner] slot.',
        slots: ['Title'],
        grants: [{ slot: 'Gunner', value: 1 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_150.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_150.jpg',
        ffg: 375,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Millennium Falcon',
    limited: 1,
    xws: 'millenniumfalcon',
    sides: [
      {
        title: 'Millennium Falcon',
        type: 'Title',
        ability:
          'While you defend, if you are evading, you may reroll 1 defense die.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_103.png',
        slots: ['Title'],
        grants: [{ action: { type: 'Evade', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_103.jpg',
        ffg: 327,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['modifiedyt1300lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Mist Hunter',
    limited: 1,
    xws: 'misthunter',
    sides: [
      {
        title: 'Mist Hunter',
        type: 'Title',
        ability: 'Add [Cannon] slot.',
        slots: ['Title'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_151.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_151.jpg',
        ffg: 376,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['g1astarfighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Moldy Crow',
    limited: 1,
    xws: 'moldycrow',
    sides: [
      {
        title: 'Moldy Crow',
        type: 'Title',
        ability:
          'Gain a [Front Arc] primary weapon with a value of "3." During the End Phase, do not remove up to 2 focus tokens.',
        slots: ['Title'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_104.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_104.jpg',
        ffg: 328,
      },
    ],
    cost: { value: 18 },
    restrictions: [
      { factions: ['Rebel Alliance', 'Scum and Villainy'] },
      { chassis: ['hwk290lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Outrider',
    limited: 1,
    xws: 'outrider',
    sides: [
      {
        title: 'Outrider',
        type: 'Title',
        ability:
          'While you perform an obstructed attack, the defender rolls 1 fewer defense die. After you fully execute a maneuver, if you moved through or overlapped an obstacle, you may remove 1 of your red or orange tokens.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_105.png',
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_105.jpg',
        ffg: 329,
      },
    ],
    cost: { value: 14 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['yt2400lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Phantom',
    limited: 1,
    xws: 'phantom',
    sides: [
      {
        title: 'Phantom',
        type: 'Title',
        ability: 'You can dock at range 0-1.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_106.png',
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_106.jpg',
        ffg: 330,
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['attackshuttle', 'sheathipedeclassshuttle'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Punishing One',
    limited: 1,
    xws: 'punishingone',
    sides: [
      {
        title: 'Punishing One',
        type: 'Title',
        ability:
          'While you perform a primary attack, if the defender is in your [Front Arc], roll 1 additional attack die. Remove [Crew] slot. Add [Astromech] slot.',
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: -1 },
          { slot: 'Astromech', value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_152.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_152.jpg',
        ffg: 377,
      },
    ],
    cost: { value: 5 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['jumpmaster5000'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'ST-321',
    limited: 1,
    xws: 'st321',
    sides: [
      {
        title: 'ST-321',
        type: 'Title',
        ability:
          'After you perform a [Coordinate] action, you may choose an enemy ship at range 0-3 of the ship you coordinated. If you do, acquire a lock on that enemy ship, ignoring range restrictions.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_124.png',
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_124.jpg',
        ffg: 391,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['lambdaclasst4ashuttle'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Shadow Caster',
    limited: 1,
    xws: 'shadowcaster',
    sides: [
      {
        title: 'Shadow Caster',
        type: 'Title',
        ability:
          'After you perform an attack that hits, if the defender is in your [Single Turret Arc] and your [Front Arc], the defender gains 1 tractor token.',
        slots: ['Title'],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_153.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_153.jpg',
        ffg: 378,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['lancerclasspursuitcraft'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Slave I',
    limited: 1,
    xws: 'slavei',
    sides: [
      {
        title: 'Slave I',
        type: 'Title',
        ability:
          'After you reveal a turn ([Turn Left] or [Turn Right]) or bank ([Bank Left] or [Bank Right]) maneuver, you may set your dial to the maneuver of the same speed and bearing in the other direction. Add [Torpedo] slot.',
        slots: ['Title'],
        grants: [{ slot: 'Torpedo', value: 1 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_154.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_154.jpg',
        ffg: 379,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Virago',
    limited: 1,
    xws: 'virago',
    sides: [
      {
        title: 'Virago',
        type: 'Title',
        ability:
          'During the End Phase, you may spend 1 [Charge] to perform a red [Boost] action. Add [Modification] slot.',
        slots: ['Title'],
        charges: { value: 2, recovers: 0 },
        grants: [
          { slot: 'Modification', value: 1 },
          { stat: 'shields', value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_155.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_155.jpg',
        ffg: 380,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ chassis: ['starviperclassattackplatform'] }],
    hyperspace: false,
    epic: true,
  },
  {
    name: "Rey's Millennium Falcon",
    limited: 1,
    xws: 'reysmillenniumfalcon',
    sides: [
      {
        title: "Rey's Millennium Falcon",
        type: 'Title',
        ability:
          "If you have 2 or fewer stress tokens, you can execute red Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuvers and perform [Boost] and [Rotate Arc] actions even while stressed.",
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/23627443c7f5e7447c306ea7c6242634.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/905ee2a41b7d3b6d1f76294b4cd3e99e.jpg',
        slots: ['Title'],
        ffg: 485,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Resistance'] },
      { chassis: ['scavengedyt1300'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Soulless One',
    limited: 1,
    xws: 'soullessone',
    sides: [
      {
        title: 'Soulless One',
        type: 'Title',
        ability:
          'While you defend, if the attacker is outside your firing arc, you may reroll 1 defense die.',
        slots: ['Title'],
        grants: [{ stat: 'hull', value: 2 }],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/36b33e7330846570087096cb55fba140.png',
        ffg: 533,
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['belbullab22starfighter'] },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 6 },
  },
  {
    name: 'Scimitar',
    limited: 1,
    xws: 'scimitar',
    sides: [
      {
        title: 'Scimitar',
        type: 'Title',
        ability:
          'Setup: After the Place Forces step, you may cloak. After you decloak, you may choose an enemy ship in your [Bullseye Arc]. If you do, it gains 1 jam token.',
        slots: ['Title'],
        grants: [
          { action: { type: 'Cloak', difficulty: 'Red' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/73d545fd02afd29fa8aa9e9015e7be6e.png',
        ffg: 542,
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['sithinfiltrator'] },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
  },
  {
    name: 'Assailer',
    limited: 1,
    xws: 'assailer',
    sides: [
      {
        title: 'Assailer',
        type: 'Title',
        ability:
          'While you defend, if the attack range is 1, you may roll 1 additional defense die.',
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
        ],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 7 },
  },
  {
    name: 'Blood Crow',
    limited: 1,
    xws: 'bloodcrow',
    sides: [
      {
        title: 'Blood Crow',
        type: 'Title',
        ability:
          'While you perform an attack at attack range 1-2, you may add 1 [Focus] result.',
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 5 },
  },
  {
    name: 'Bright Hope',
    limited: 1,
    xws: 'brighthope',
    sides: [
      {
        title: 'Bright Hope',
        type: 'Title',
        ability:
          'You can reinforce only your [Full front arc].\n\nWhile you defend, if you are reinforced and the attacker is in your [Full front arc], you may roll 1 additional defense die.',
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 5 },
  },
  {
    name: "Dodonna's Pride",
    limited: 1,
    xws: 'dodonnaspride',
    sides: [
      {
        title: "Dodonna's Pride",
        type: 'Title',
        slots: ['Title'],
        ability: 'Add [Team] and [Cargo] slots.',
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'shields', value: -2 },
          {
            action: {
              type: 'Evade',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: -1,
      },
    ],
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 8 },
  },
  {
    name: 'Impetuous',
    limited: 1,
    xws: 'impetuous',
    sides: [
      {
        title: 'Impetuous',
        type: 'Title',
        ability:
          'After you perform an attack, if the defender was destroyed, you may perform a [Focus] or [Lock] action.',
        grants: [
          { slot: 'Crew', value: 1 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 2 },
        ],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 4 },
  },
  {
    name: 'Instigator',
    limited: 1,
    xws: 'instigator',
    sides: [
      {
        title: 'Instigator',
        type: 'Title',
        ability:
          'While you perform an attack, if the defender has an orange or red token, you may reroll up to 2 attack dice.',
        grants: [{ slot: 'Team', value: 1 }],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    name: 'Corvus',
    limited: 1,
    xws: 'corvus',
    sides: [
      {
        title: 'Corvus',
        type: 'Title',
        ability:
          'You can dock up to 2 small ships.\n\nAfter you perform a [Calculate] action, gain 1 calculate token.',
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 3 },
  },
  {
    name: 'Insatiable Worrt',
    limited: 1,
    xws: 'insatiableworrt',
    sides: [
      {
        title: 'Insatiable Worrt',
        type: 'Title',
        ability:
          'Add [Cargo] slot. During the End Phase, you may recover 1 additional [Shield] or [Energy].',
        slots: ['Title'],
        grants: [
          { slot: 'Cargo', value: 1 },
          { stat: 'hull', value: 3 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: -1 },
        ],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 7 },
  },
  {
    name: 'Liberator',
    limited: 1,
    xws: 'liberator',
    sides: [
      {
        title: 'Liberator',
        type: 'Title',
        ability:
          'You can dock up to 2 small ships. After a ship deploys from you, it may perform a [Focus] or [Barrel Roll] action.',
        slots: ['Title'],
        grants: [{ stat: 'energy', value: 1 }],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 5 },
  },
  {
    name: 'Luminous',
    limited: 1,
    xws: 'luminous',
    sides: [
      {
        title: 'Luminous',
        type: 'Title',
        ability:
          'At the end of setup, you are placed in the play area at range 0-2 of a friendly ship.',
        slots: ['Title'],
        grants: [
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 12 },
  },
  {
    name: 'Merchant One',
    limited: 1,
    xws: 'merchantone',
    sides: [
      {
        title: 'Merchant One',
        type: 'Title',
        ability:
          'Add [Turret], [Team], and [Cargo] slots. Bonus Attack: Perform a [Turret] attack.',
        slots: ['Title'],
        grants: [
          { slot: 'Turret', value: 1 },
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 8 },
  },
  {
    name: 'Broken Horn',
    limited: 1,
    xws: 'brokenhorn',
    sides: [
      {
        title: 'Broken Horn',
        type: 'Title',
        ability:
          'If you are damaged, reduce the difficulty of your speed 3-5 maneuvers.',
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Illicit', value: 1 },
        ],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 4 },
  },
  {
    name: 'Quantum Storm',
    limited: 1,
    xws: 'quantumstorm',
    sides: [
      {
        title: 'Quantum Storm',
        type: 'Title',
        ability:
          'After you fully execute a white maneuver, recover 1 [Energy].',
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'energy', value: 1 },
        ],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 3 },
  },
  {
    name: 'Suppressor',
    limited: 1,
    xws: 'suppressor',
    sides: [
      {
        title: 'Suppressor',
        type: 'Title',
        ability:
          'After you coordinate a friendly ship, you may spend 1 [Energy] to jam an enemy ship at range 0-2 of that ship, ignoring range restrictions.',
        grants: [{ slot: 'Sensor', value: 1 }],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 6 },
  },
  {
    name: "Jaina's Light",
    limited: 1,
    xws: 'jainaslight',
    sides: [
      {
        title: "Jaina's Light",
        type: 'Title',
        ability:
          'While a friendly ship at range 0-2 defends, if the attack is obstructed by an obstacle, you may spend 1 [Energy]. If you do, the defender rolls 1 additional defense die.',
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    name: 'Tantive IV',
    limited: 1,
    xws: 'tantiveiv',
    sides: [
      {
        title: 'Tantive IV',
        type: 'Title',
        ability:
          'While you defend, if the attacker is in your [Rear Arc], you may roll 1 additional defense die.',
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Crew', value: 1 },
        ],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    name: 'Thunderstrike',
    limited: 1,
    xws: 'thunderstrike',
    sides: [
      {
        title: 'Thunderstrike',
        type: 'Title',
        ability:
          'While you perform a bonus attack, if you have not attacked the defender this round, you may reroll 1 attack die.',
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -3 },
          { stat: 'hull', value: 3 },
        ],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 4 },
  },
  {
    name: 'Vector',
    limited: 1,
    xws: 'vector',
    sides: [
      {
        title: 'Vector',
        type: 'Title',
        ability:
          'After a ship deploys from you, it may perform a [Evade] or [Boost] action.',
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 8 },
  },
  {
    name: 'Requiem',
    limited: 1,
    xws: 'requiem',
    sides: [
      {
        title: 'Requiem',
        type: 'Title',
        ability:
          'After a ship deploys from you, it may acquire a lock on one ship you are locking, ignoring range restrictions.',
        slots: ['Title'],
        ffg: -1,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 7 },
  },
  {
    name: "Kaz's Fireball",
    limited: 1,
    xws: 'kazsfireball',
    sides: [
      {
        title: "Kaz's Fireball",
        type: 'Title',
        ability:
          'Before you resolve <strong>Explosion with Wings</strong>, you may search the damage deck and choose a damage card. You are dealt that card. Then shuffle the deck.',
        slots: ['Title'],
        ffg: 655,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/793a1b659936801101622a5fc0a71e73.png',
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['fireball'] }],
    cost: { value: 2 },
  },
];

export default t;

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Nantex-class Starfighter',
  xws: 'nantexclassstarfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
  ],
  pilots: [
    {
      name: 'Stalgasin Hive Guard',
      initiative: 3,
      limited: 0,
      xws: 'stalgasinhiveguard',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text:
          'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      hyperspace: true,
      epic: true,
      text:
        'Designed for the unique physiology of Geonosian pilots, Nantex-class starfighters are capable of maneuvers that would rip most ships—and pilots—apart.',
      slots: ['Talent'],
      cost: 34,
      ffg: 609,
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/e97a0ae22847e0b71d920a0df9dfcfab.png',
    },
    {
      name: 'Sun Fac',
      initiative: 6,
      limited: 1,
      xws: 'sunfac',
      ability:
        'While you perform a primary attack, if the defender is tractored, roll 1 additional attack die.',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text:
          'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 54,
      ffg: 604,
      caption: "Archduke's Enforcer",
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/42265df53c90026a58ac96b0acd3c1f8.png',
    },
    {
      name: 'Berwer Kret',
      xws: 'berwerkret',
      initiative: 5,
      limited: 1,
      ability:
        'After you perform an attack that hits, each friendly ship with [Calculate] on its action bar and a lock on the defender may perform a red [Calculate] action.',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text:
          'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 40,
      ffg: 605,
      caption: 'Hive Guard Captain',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/f1c76ce6ff266c23099686392efef565.png',
    },
    {
      name: 'Chertek',
      xws: 'chertek',
      initiative: 4,
      limited: 1,
      ability:
        'While you perform a primary attack, if the defender is tractored, you may reroll up to 2 attack dice.',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text:
          'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 39,
      ffg: 606,
      caption: 'Opportunistic Ace',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/07504533be45d13cb82d71ea11d234f7.png',
    },
    {
      name: 'Gorgol',
      xws: 'gorgol',
      initiative: 2,
      limited: 1,
      ability:
        'During the System Phase, you may gain 1 disarm token and choose a friendly ship at range 1-2. If you do, it gains 1 tractor token, then repairs 1 of its faceup Ship trait damage cards.',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text:
          'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Modification'],
      cost: 36,
      ffg: 607,
      caption: 'Handy Engineer',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d2d0764f83a2740f407082e934986ff2.png',
    },
    {
      name: 'Petranaki Arena Ace',
      cost: 38,
      ffg: 608,
      initiative: 4,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/5c32b5d481ad922be7a0ec4a3743d1d6.jpg',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d2d62b6070fdf59b58db79aadb845d54.png',
      shipAbility: {
        name: 'Pinpoint Tractor Array',
        text:
          'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      },
      text:
        'The Petranaki Arena is a massive edifice on Geonosis that was a key site in the first battle of the Clone Wars.',
      hyperspace: true,
      epic: true,
      limited: 0,
      slots: ['Talent', 'Talent'],
      xws: 'petranakiarenaace',
    },
  ],
  ffg: 67,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Nantex_Class_Starfighter.png',
};

export default t;

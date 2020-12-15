import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Scurrg H-6 bomber',
    de: 'Scurrg-H-6-Bomber',
    fr: 'Bombardier Scurrg H-6',
    es: 'Bombardero Scurrg H-6',
  },
  xws: 'scurrgh6bomber',
  ffg: 4,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Scurrg.png',
  pilots: [
    {
      name: { en: 'Captain Nym', fr: 'Capitaine Nym', es: 'Capitán Nym' },
      caption: {
        en: 'Captain of the Lok Revenants',
        de: 'Captain der Lok-Piraten',
        fr: 'Capitaine des Revenants de Lok',
        es: 'Capitán de los Aparecidos de Lok',
      },
      initiative: 5,
      limited: 1,
      cost: 47,
      xws: 'captainnym',
      ability: {
        en:
          'Before a friendly bomb or mine would detonate, you may spend 1 [Charge] to prevent it from detonating. While you defend against an attack obstructed by a bomb or mine, roll 1 additional defense die.',
        de:
          'Bevor eine befreundete Bombe oder Mine detonieren würde, darfst du 1 [Charge] ausgeben, um die Detonation zu verhindern. Solange du gegen einen Angriff verteidigst, der durch eine Bombe oder Mine versperrt ist, wirf 1 zusätzlichen Verteidigungswürfel.',
        fr:
          "Avant qu'une bombe ou mine alliée n'explose, vous pouvez dépenser 1 [Charge] pour empêcher son explosion. Tant que vous défendez contre une attaque gênée par une bombe ou une mine, lancez 1 dé de défense supplémentaire.",
        es:
          'Antes de que una bomba o mina aliada vaya a detonar, puedes gastar 1 [Charge] para evitar su detonación. Mientras te defiendes contra un ataque que está obstruido por una bomba o mina, tira 1 dado de defensa adicional.',
      },
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_204.jpg',
      ffg: 204,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Lok Revenant',
        de: 'Lok-Pirat',
        fr: 'Revenant de Lok',
        es: 'Aparecido de Lok',
      },
      initiative: 2,
      limited: 0,
      cost: 45,
      xws: 'lokrevenant',
      text: {
        en:
          'The Nubian Design Collective crafted the Scurrg H-6 Bomber with combat versatility in mind, arming it with powerful shields and a bristling array of destructive weaponry.',
        de:
          'Das Nubianische Entwicklungskollektiv konstruierte den Scurrg-H-6-Bomber als vielseitige Jagdmaschine, ausgestattet mit Hochleistungsschilden und einem tödlichen Waffenarsenal.',
        fr:
          "Le Collectif de Conception Nubien créa le Bombardier Scurrg H-6 en songeant avant tout à sa polyvalence au combat, l'équipant de puissants boucliers et d'un large éventail d'armes destructrices.",
        es:
          'El Colectivo de Diseño de Nubia enfatizó la versatilidad en combate al crear el bombardero Scurrg H-6, dotándolo de potentes escudos y un variado arsenal de armas destructoras.',
      },
      slots: [
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_206.jpg',
      ffg: 206,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Sol Sixxa' },
      caption: {
        en: 'Cunning Commander',
        de: 'Kluger Kommandeur',
        es: 'Comandante astuto',
      },
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'solsixxa',
      ability: {
        en:
          'If you would drop a device using a (1 [Straight]) template, you may drop it using any other speed 1 template instead.',
        de:
          'Falls du ein Gerät unter Verwendung der (1 [Straight])-Schablone abwerfen würdest, darfst du es stattdessen unter Verwendung einer beliebigen anderen Schablone mit Geschwindigkeit 1 abwerfen.',
        fr:
          "Si vous êtes censé larguer un engin en utilisant un gabarit (1 [Straight]), vous pouvez le larguer en utilisant n'importe quel autre gabarit de vitess﻿e 1 à la place.",
        es:
          'Si vas a soltar un dispositivo utilizando una plantilla (1 [Straight]), en vez de eso puedes soltarla utilizando cualquier otra plantilla de velocidad 1.',
      },
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_205.jpg',
      ffg: 205,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

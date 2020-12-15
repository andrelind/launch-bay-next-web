import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'MG-100 StarFortress',
    de: 'MG-100-SternenFestung',
    fr: 'Forteresse Stellaire MG-100',
    es: 'MG-100 Fortaleza Estelar',
  },
  xws: 'mg100starfortress',
  ffg: 55,
  size: 'Large',
  dial: [
    '0OR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BR',
    '3FW',
    '3NR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_StarFortress.png',
  pilots: [
    {
      name: {
        en: 'Cobalt Squadron Bomber',
        de: 'Bomber der\n Kobalt-Staffel',
        fr: "Bombardier de l'Escadron Cobalt",
        es: 'Bombardero del Escuadrón Cobalto',
      },
      initiative: 1,
      limited: 0,
      xws: 'cobaltsquadronbomber',
      text: {
        en:
          'Whether the ordnance silos of their StarFortresses are loaded with proton bombs or relief supplies, the heroic crews of Cobalt Squadron dedicate their lives to making a difference in the galaxy.',
        de:
          'Egal ob sie Protonenbomben oder Hilfsgüter in den Abwurfsilos ihrer SternenFestungen geladen haben, die Helden der Kobalt-Staffel sind stets bereit, ihr Leben zu riskieren, um die Galaxis zu einem besseren Ort zu machen.',
        fr:
          "Peu importe que les silos d'artillerie de leurs forteresses stellaires soient chargés de bombes à protons ou de matériel de première nécessité, les valeureux équipages de l'Escadron Cobalt consacrent leur vie à changer la face de la galaxie.",
        es:
          'Ya estén los silos de munición de sus Fortalezas Estelares cargados con bombas de protones o suministros básicos para emergencias, las heroicas tripulaciones del Escuadrón Cobalto dedican sus vidas a cambiar la galaxia para mejor.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/514351d5c41a8341ea5da5673269d917.jpg',
      cost: 51,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 434,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Cat' },
      caption: { en: 'Cobalt Wasp', de: 'Kobalt-Wespe', es: 'Avispa Cobalto' },
      initiative: 1,
      limited: 1,
      xws: 'cat',
      ability: {
        en:
          'While you perform a primary attack, if the defender is at range 0-1 of at least 1 friendly device, roll 1 additional die.',
        fr:
          "Tant que vous effectuez une attaque principale, si le défenseur est à portée 0-1 d'au moins un engin allié, lancez 1 dé supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, tira 1 dado adicional si el defensor está situado a alcance 0-1 de al menos 1 dispositivo aliado.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d927ccf08a9444340378449fe71e9f70.jpg',
      cost: 52,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 433,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Vennie' },
      caption: {
        en: 'Crimson Cutter',
        de: 'Karmin-Schnitter',
        es: 'Cizalla Carmesí',
      },
      initiative: 2,
      limited: 1,
      xws: 'vennie',
      ability: {
        en:
          "While you defend, if the attacker is in a friendly ship's [Single Turret Arc], you may add 1 [Focus] result to your roll.",
        de:
          'Solange du verteidigst, falls der Angreifer im [Single Turret Arc] eines befreundeten Schiffes ist, darfst du 1 [Focus]-Ergebnis zu deinen Würfelergebnissen hinzufügen.',
        fr:
          "Tant que vous défendez, si l'attaquant est dans le [Single Turret Arc] d'un vaisseau allié, vous pouvez ajouter 1 résultat [Focus] à votre lancer.",
        es:
          'Mientras te defiendes, si el atacante está situado en el [Single Turret Arc] de alguna nave aliada, puedes añadir 1 resultado [Focus] a tu tirada.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/511b878f719e9fa59a50cdf980d10ead.jpg',
      cost: 54,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 448,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Ben Teene' },
      caption: {
        en: 'Crimson Bolide',
        de: 'Karmin-Bolide',
        es: 'Bólido Carmesí',
      },
      initiative: 3,
      limited: 1,
      xws: 'benteene',
      ability: {
        en:
          'After you perform an attack, if the defender is in your [Single Turret Arc], assign the Rattled condition to the defender.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger in deinem [Single Turret Arc] ist, ordne dem Verteidiger den Zustand Aus der Fassung zu.',
        fr:
          "Après avoir effectué une attaque, si le défenseur est dans votre [Single Turret Arc], assignez-lui l'état Ébranlé.",
        es:
          'Después de que efectúes un ataque, si el defensor está situado en tu [Single Turret Arc], asígnale el estado Estremecido.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/74ca7444aec38cb0034b67b04f6aaa76.jpg',
      cost: 54,
      conditions: ['rattled'],
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 432,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Edon Kappehl' },
      caption: {
        en: 'Crimson Hailstorm',
        de: 'Karmin-Hagelsturm',
        es: 'Granizada Carmesí',
      },
      initiative: 3,
      limited: 1,
      xws: 'edonkappehl',
      ability: {
        en:
          'After you fully execute a blue or white maneuver, if you have not dropped or launched a device this round, you may drop 1 device.',
        de:
          'Nachdem du ein blaues oder weißes Manöver vollständig ausgeführt hast, falls du in dieser Runde noch kein Gerät abgeworfen oder gestartet hast, darfst du 1 Gerät abwerfen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre bleue ou blanche, si vous n'avez pas largué ou lancé d'engin à ce round, vous pouvez larguer 1 engin.",
        es:
          'Después de que ejecutes completamente una maniobra azul o blanca, si no has soltado ni lanzado ningún dispositivo en esta ronda, puedes soltar 1 dispositivo.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/bbac51ca4ba44f26d90a53b6c5db5e2c.jpg',
      cost: 56,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 447,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Finch Dallow' },
      caption: {
        en: 'Cobalt Hammer',
        de: 'Kobalt-Hammer',
        es: 'Martillo Cobalto',
      },
      initiative: 4,
      limited: 1,
      xws: 'finchdallow',
      ability: {
        en:
          'Before you would drop a bomb, you may place it in the play area touching you instead.',
        de:
          'Bevor du eine Bombe abwerfen würdest, darfst du sie stattdessen so auf der Spielfläche platzieren, dass sie dich berührt.',
        fr:
          'Avant que vous ne larguiez une bombe, vous pouvez la placer dans la zone de jeu au contact de votre vaisseau à la place.',
        es:
          'Antes de que vayas a soltar una bomba, en vez de eso puedes colocarla en la zona de juego de manera que esté en contacto contigo.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/dafd2937accc362f766ca0da3308ccbc.jpg',
      cost: 56,
      slots: [
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      ffg: 431,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Paige Tico' },
      caption: { en: 'Hero', de: 'Heldin', fr: 'Héroïne', es: 'Heroína' },
      initiative: 5,
      limited: 1,
      xws: 'paigetico',
      ability: {
        en:
          'After you drop a device, you may spend 1 [Charge] to drop an additional device.',
        de:
          'Nachdem du ein Gerät abgeworfen hast, darfst du 1 [Charge] ausgeben, um ein zusätzliches Gerät abzuwerfen.',
        fr:
          'Après avoir largué un engin, vous pouvez dépenser 1 [Charge] pour larguer un engin supplémentaire.',
        es:
          'Después de que sueltes un dispositivo, puedes gastar 1 [Charge] para soltar un dispositivo adicional.',
      },
      cost: 56,
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Sensor',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
        'Gunner',
        'Tech',
      ],
      hyperspace: false,
      epic: true,
      ffg: 640,
    },
  ],
};

export default t;

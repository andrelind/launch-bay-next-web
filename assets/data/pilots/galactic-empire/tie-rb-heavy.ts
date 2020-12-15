import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/rb Heavy',
    de: 'Schwerer TIE/RB',
    es: 'TIE/rb Pesado',
    fr: 'TIE/rb Lourd',
  },
  xws: 'tierbheavy',
  size: 'Medium',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Calculate' },
      type: 'Rotate Arc',
    },
  ],
  ability: {
    name: { en: 'Rotating Cannons' },
    text: {
      en:
        'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].  You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
    },
  },
  pilots: [
    {
      xws: 'caridaacademycadet',
      name: {
        en: 'Carida Academy Cadet',
        de: 'Kadett der \nCarida-Akademie',
        es: 'Cadete de la Academia de Carida',
        fr: "Cadet de l'Académie Carida",
      },
      cost: 34,
      initiative: 1,
      limited: 0,
      slots: [
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      hyperspace: true,
      epic: true,
      ffg: 696,
      text: {
        en:
          'At Carida Academy, Imperial Navy cadets are taught to be ruthless and loyal, prioritizing victory over the lives of their comrades.',
        de:
          'An der Carida-Akademie wird Kadetten der Imperialen Flotte Rücksichtslosigkeit und Loyalität gelehrt. Sie lernen auch, den Sieg über das Leben ihrer Kameraden zu stellen.',
        es:
          'En la Academia de Carida, se enseña a los cadetes de la Armada Imperial a ser despiadados y leales, poniendo la victoria por encima de las vidas de sus camaradas.',
        fr:
          "À l'académie militaire de Carida, les cadets de la Marine Impériale sont entraînés à être impitoyables et loyaux, privilégiant la victoire à la survie de leurs propres camarades.",
      },
    },
    {
      xws: 'onyxsquadronsentry',
      name: {
        en: 'Onyx Squadron Sentry',
        de: 'Wache der Onyx-Staffel',
        es: 'Centinela del Escuadrón Ónice',
        fr: "Sentinelle de l'Escadron Onyx",
      },
      cost: 36,
      initiative: 3,
      limited: 0,
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      hyperspace: true,
      epic: true,
      ffg: 695,
      text: {
        en:
          'The TIE/rb heavy, sometimes called the "brute," is designed for operational flexibility. Its heavy armor and capacity to house an integrated MGK-300 droid co-pilot make it an excellent patrol craft.',
        de:
          'Der Schwere TIE/RB wurde für einen möglichst flexiblen Einsatz entwickelt. Seine schwere Panzerung und die Möglichkeit, einen MGK-300-Droiden als Co-Piloten zu integrieren, macht ihn zu einem exzellenten Patrouillenschiff.',
        es:
          'El TIE/rb pesado, denominado a veces "la bestia", está diseñado para la flexibilidad operativa. Su grueso blindaje y capacidad para albergar un copiloto droide MGK-300 integrado lo convierten en una excelente nave de patrulla.',
        fr:
          'Le TIE/rb lourd, parfois surnommé la « brute », est conçu pour la polyvalence opérationnelle. Sa coque renforcée et sa capacité à accueillir un copilote droïde MGK-300 en font un excellent appareil de patrouille.',
      },
    },
    {
      xws: 'rampage',
      name: { en: '"Rampage"', de: '„Rampage"', es: '"Desbocado"' },
      caption: {
        en: 'Implacable Pursuer',
        de: 'Unerbittlicher Verfolger',
        es: 'Perseguidor implacable',
        fr: 'Poursuivant Implacable',
      },
      cost: 39,
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'After you execute a speed 3-4 maneuver, you may choose a ship in your [Single Turret Arc] at range 0-1. That ship gains 1 strain token, or 2 strain tokens if you are damaged.',
        de:
          'Nachdem du ein Manöver mit Geschwindig­keit 3-4 ausgeführt hast, darfst du ein Schiff in deinem [Single Turret Arc] in Reichweite 0-1 wählen. Falls du das tust, erhält jenes Schiff 1 Anstrengungs­marker oder 2 Anstrengungs­marker, falls du beschädigt bist. Drehgeschütz: Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc] oder [Rear Arc] rotieren. Du musst die [Front Arc]-Voraussetzung deiner ausgerüsteten [Cannon]-Aufwertungen behandeln, als wäre sie [Single Turret Arc].',
        es:
          'Después de que ejecutes una maniobra de velocidad 3-4, puedes elegir una nave que tengas en tu [Single Turret Arc] a alcance 0-1. Si lo haces, esa nave recibe 1 ficha de Sobresfuerzo, o 2 fichas de Sobresfuerzo si estás dañado.',
        fr:
          'Après avoir exécuté une manœuvre à vitesse 3-4, vous pouvez choisir un vaisseau situé dans votre [Single Turret Arc] à portée 0-1. Dans ce cas, ce vaisseau gagne 1 marqueur de contrainte, ou 2 marqueurs de contrainte si vous êtes endommagé.',
      },
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      hyperspace: false,
      epic: true,
      ffg: 693,
    },
    {
      name: { en: 'Lyttan Dree' },
      caption: { en: 'Onyx 2', es: 'Ónice 2' },
      initiative: 3,
      limited: 1,
      xws: 'lyttandree',
      ability: {
        en:
          "While a friendly ship at range 0-2 performs an attack, if you are in the defender's [Left Arc] or [Right Arc], the attacker may reroll 1 attack die.",
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 einen Angriff durchführt, falls du im [Left Arc]- oder [Right Arc] des Verteidigers bist, darf der Angreifer 1 Angriffswürfel neu werfen. Drehgeschütz: Du kannst deinen [Single Turret Arc]-Anzeiger nur auf deinen [Front Arc] oder [Rear Arc] rotieren. Du musst die [Front Arc]-Voraussetzung deiner ausgerüsteten [Cannon]-Aufwertungen behandeln, als wäre sie [Single Turret Arc].',
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 efectúa un ataque, si estás situado en el [Left Arc] o [Right Arc] del defensor, el atacante puede volver a tirar 1 dado de ataque.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 effectue une attaque, si vous êtes dans le [Left Arc] ou [Right Arc] du défenseur, l'attaquant peut relancer 1 dé d'attaque.",
      },
      hyperspace: false,
      epic: true,
      slots: [
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      cost: 37,
      ffg: 694,
    },
  ],
};

export default t;

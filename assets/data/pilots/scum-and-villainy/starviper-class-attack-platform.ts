import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'StarViper-class Attack Platform',
    de: 'Angriffsplattform der SternenViper-Klasse',
    fr: "Plateforme d'Attaque de Classe StarViper",
    es: 'Plataforma de ataque clase Víbora Estelar',
  },
  xws: 'starviperclassattackplatform',
  ffg: 3,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3BW',
    '3FB',
    '3NW',
    '3PR',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  ability: {
    name: {
      en: 'Microthrusters',
      de: 'Mikrodüsen',
      fr: 'Micropropulseurs',
      es: 'Micropropulsores',
      pl: 'Mikroregulacja ciągu',
      zh: 'Microthrusters',
      it: 'Micropropulsori',
      pt: 'Micropropulsores',
    },
    text: {
      en:
        'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      de:
        'Solange du eine Fassrolle durchführst, musst du die [Bank Left]- oder [Bank Right]-Schablone anstatt der [Straight]-Schablone verwenden.',
      fr:
        'tant que vous effectuez un tonneau, vous devez utiliser le gabarit [Bank Left] ou [Bank Right] à la place du gabarit [Straight].',
      es:
        'Mientras realizas un tonel volado, debes utilizar la plantilla [Bank Left] o [Bank Right] en vez de la plantilla [Straight].',
      it:
        'Mentre effettui un avvitamento, devi usare il modello [Bank Left] o [Bank Right] invece del modello [Straight].',
      pl:
        'Gdy wykonujesz beczkę, musisz użyć wzornika [Bank Left] albo [Bank Right] zamiast wzornika [Straight].',
      pt:
        'Quando realizaruma pirueta, você deve usar ogabarito [Bank Left] ou [Bank Right] em vez do gabarito [Straight].',
      zh:
        'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_StarViper.png',
  pilots: [
    {
      name: {
        en: 'Black Sun Assassin',
        de: 'Attentäter der',
        fr: 'Assassin du Soleil Noir',
        es: 'Asesino del Sol Negro',
      },
      initiative: 3,
      limited: 0,
      cost: 48,
      xws: 'blacksunassassin',
      text: {
        en:
          'Although assassinations can be handled with a shot in the dark or a dire substance added to a drink, a flaming shuttle tumbling from the sky sends a special kind of message.',
        de:
          'Ein Attentat kann mit einem Schuss im Dunkeln oder mit einem vergifteten Getränk verübt werden. Aussagekräftiger ist jedoch eine brennende Raumfähre, die hilflos vom Himmel trudelt.',
        fr:
          "Abattre sa cible au coin d'une ruelle sombre ou ajouter une goutte de poison à une boisson sont des méthodes courantes d'assassinat, mais une navette en feu s'écrasant au sol fait passer un tout autre message.",
        es:
          'Aunque los asesinatos se pueden ejecutar mediante un disparo en la oscuridad o añadiendo alguna sustancia letal a una bebida, la visión de una lanzadera cayendo del cielo envuelta en llamas envía un tipo de mensaje muy distinto.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_181.jpg',
      ffg: 181,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Black Sun Enforcer',
        de: 'Vollstrecker der',
        fr: 'Homme de Main du Soleil Noir',
        es: 'Ejecutor del Sol Negro',
      },
      initiative: 2,
      limited: 0,
      cost: 45,
      xws: 'blacksunenforcer',
      text: {
        en:
          'Prince Xizor himself collaborated with MandalMotors to design the StarViper-class attack platform, one of the most formidable starfighters in the galaxy.',
        de:
          'Prinz Xizor persönlich entwickelte die Angriffsplattform der SternenViper-Klasse in Zusammenarbeit mit MandalMotors und schuf so einen der vorzüglichsten Sternenjäger der Galaxis.',
        fr:
          "Le prince Xizor en personne collabora avec MandalMotors pour concevoir la plateforme d'attaque de classe StarViper, l'un des plus redoutables chasseurs de la galaxie.",
        es:
          'El mismísimo príncipe Xizor colaboró con Motores Mandal en el diseño de la plataforma de ataque clase Víbora Estelar, uno de los cazas estelares más formidables de la galaxia.',
      },
      slots: ['Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_182.jpg',
      ffg: 182,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Dalan Oberos' },
      caption: {
        en: 'Elite Bounty Hunter',
        de: 'Elite-Kopfgeldjäger',
        fr: "Chasseur de Primes d'Élite",
        es: 'Cazarrecompensas de élite',
      },
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'dalanoberos-starviperclassattackplatform',
      ability: {
        en:
          'After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90˚.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, darfst du 1 Stressmarker erhalten, um dein Schiff um 90° zu drehen.',
        fr:
          'Après avoir entièrement exécuté une manœuvre, vous pouvez gagner 1 marqueur de stress pour pivoter votre vaisseau de 90°.',
        es:
          'Después de que ejecutes completamente una maniobra, puedes recibir 1 ficha de Tensión para girar tu nave 90˚ sobre sí misma.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_179.jpg',
      ffg: 179,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Guri' },
      caption: {
        en: "Prince Xizor's Bodyguard",
        de: 'Prinz Xizors Leibwächterin',
        fr: 'Garde du Corps du Prince Xizor',
        es: 'Guardaespaldas del príncipe Xizor',
      },
      initiative: 5,
      limited: 1,
      cost: 64,
      xws: 'guri',
      ability: {
        en:
          'At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.',
        de:
          'Zu Beginn der Kampfphase, falls mindestens 1 feindliches Schiff in Reichweite 0-1 ist, darfst du 1 Fokusmarker erhalten.',
        fr:
          "Au début de la phase d'engagement, s'il y a au moins 1 vaisseau ennemi à portée 0-1, vous pouvez gagner 1 marqueur de concentration.",
        es:
          'Al comienzo de la fase de Enfrentamiento, si tienes al menos 1 nave enemiga a alcance 0-1, puedes recibir 1 ficha de Concentración.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_178.jpg',
      ffg: 178,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Prince Xizor', de: 'Prinz Xizor', es: 'Príncipe Xizor' },
      caption: {
        en: 'Black Sun Kingpin',
        de: 'Boss der Schwarzen Sonne',
        fr: 'Parrain du Soleil Noir',
        es: 'Amo del Sol Negro',
      },
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'princexizor',
      ability: {
        en:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 [Hit] or [Critical Hit] damage. If it does, cancel 1 matching result.',
        de:
          'Solange du verteidigst, nach dem Schritt „Ergebnisse neutralisieren", darf ein anderes befreundetes Schiff in Reichweite 0-1 und im Angriffswinkel 1 [Hit]- oder [Critical Hit]-Schaden erleiden. Falls es das tut, negiere 1 passendes Ergebnis.',
        fr:
          "Tant que vous défendez, après l'étape « Neutraliser les résultats », un autre vaisseau allié à portée 0-1 et dans l'arc de l'attaque peut subir 1 dégât [Hit] ou [Critical Hit]. Dans ce cas, annulez 1 dégât correspondant.",
        es:
          'Mientras te defiendes, después del paso de "Neutralizar los resultados", otra nave aliada que tengas a alcance 0-1 y en el arco de ataque puede sufrir 1 de daño [Hit] o [Critical Hit]. Si lo haces, anula 1 resultado equivalente.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_180.jpg',
      ffg: 180,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

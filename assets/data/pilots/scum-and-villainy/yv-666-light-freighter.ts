import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'YV-666 Light Freighter',
    de: 'Leichter YV-666-Frachter',
    fr: 'Cargo léger YV-666',
    es: 'Carguero ligero YV-666',
  },
  xws: 'yv666lightfreighter',
  ffg: 24,
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_YV-666.png',
  pilots: [
    {
      name: { en: 'Bossk' },
      caption: {
        en: 'Fearsome Hunter',
        de: 'Gefürchteter Jäger',
        fr: 'Traqueur Effrayant',
        es: 'Cazador temible',
      },
      initiative: 4,
      limited: 1,
      cost: 60,
      xws: 'bossk',
      ability: {
        en:
          'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
        de:
          'Solange du einen Primärangriff durchführst, nach dem Schritt „Ergebnisse neutralisieren", darfst du 1 [Critical Hit]-Ergebnis ausgeben, um 2 [Hit]-Ergebnisse hinzuzufügen.',
        fr:
          "Tant que vous effectuez une attaque principale, après l'étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat [Critical Hit] pour ajouter 2 résultats [Hit].",
        es:
          'Mientras efectúas un ataque principal, después del paso de "Neutralizar los resultados", puedes gastar 1 resultado [Critical Hit] para añadir 2 resultados [Hit].',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/f7/65/f765febe-2e28-4f9f-8ee0-1dbc4c013ef3/op067_bossk.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_210.jpg',
      ffg: 210,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Latts Razzi' },
      caption: {
        en: 'Martial Artist',
        de: 'Kampfkünstlerin',
        fr: 'Artiste Martial',
        es: 'Artista marcial',
      },
      initiative: 3,
      limited: 1,
      cost: 56,
      xws: 'lattsrazzi',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose a ship at range 1 and spend a lock you have on that ship. If you do, that ship gains 1 tractor token.',
        de:
          'Zu Beginn der Kampfphase darfst du ein Schiff in Reichweite 1 wählen und eine Zielerfassung, die du auf jenem Schiff hast, ausgeben. Falls du das tust, erhält jenes Schiff 1 Fangstrahlmarker.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir un vaisseau à portée 1 et dépenser un marqueur de verrouillage que vous avez sur ce vaisseau. Dans ce cas, ce vaisseau gagne 1 marqueur de rayon tracteur.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que tengas a alcance 1 y gastar un Blanco fijado que tengas sobre esa nave. Si lo haces, esa nave recibe 1 ficha de Campo de tracción.',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_212.jpg',
      ffg: 212,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Moralo Eval' },
      caption: {
        en: 'Criminal Mastermind',
        de: 'Kriminelles Superhirn',
        fr: 'Génie Criminel',
        es: 'Genio del crimen',
      },
      initiative: 4,
      limited: 1,
      cost: 66,
      xws: 'moraloeval',
      ability: {
        en:
          'If you would flee, you may spend 1 [Charge]. If you do, place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of the edge of the play area that you fled from.',
        de:
          'Falls du fliehen würdest, darfst du 1 [Charge] ausgeben. Falls du das tust, platziere dich selbst stattdessen in der Reserve. Zu Beginn der nächsten Planungsphase platziere dich selbst innerhalb von Reichweite 1 des Spielflächenrandes, über den du geflohen bist.',
        fr:
          'Si vous êtes censé fuir, vous pouvez dépenser 1 [Charge]. Dans ce cas, mettez-vous en réserve à la place. Au début de la prochaine phase de préparation, placez-vous intégralement à portée 1 du bord de la zone de jeu par lequel vous auriez dû fuir.',
        es:
          'Si vas a huir del campo de batalla, puedes gastar 1 [Charge]. Si lo haces, colócate en reserva en vez de huir. Al comienzo de la siguiente fase de Planificación, colócate en la zona de juego dentro de alcance 1 del borde de la zona de juego por el que has huido.',
      },
      charges: { value: 2, recovers: 0 },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_211.jpg',
      ffg: 211,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Trandoshan Slaver',
        de: 'Trandoshanischer Sklavenjäger',
        fr: 'Esclavagiste Trandosien',
        es: 'Esclavista trandoshano',
      },
      initiative: 2,
      limited: 0,
      cost: 51,
      xws: 'trandoshanslaver',
      text: {
        en:
          'The spacious triple-decker design of the YV-666 makes it popular among bounty hunters and slavers, who often retrofit an entire deck for prisoner transport.',
        de:
          'Sein geräumiges Trippeldecker-Design macht den YV-666 zu einem beliebten Schiff für Sklavenhändler und Kopfgeldjäger, die oft ein ganzes Deck für Gefangenentransporte umrüsten.',
        fr:
          "Le spacieux YV-666 est très populaire auprès des chasseurs de primes et des esclavagistes avec ses trois ponts, dont l'un était souvent aménagé pour le transport de prisonniers.",
        es:
          'El espacioso diseño de triple cubierta del YV-666 lo convierte en un vehículo muy popular entre cazarrecompensas y esclavistas, quienes suelen modificar una de las cubiertas para dedicarla por entero al transporte de prisioneros.',
      },
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_213.jpg',
      ffg: 213,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

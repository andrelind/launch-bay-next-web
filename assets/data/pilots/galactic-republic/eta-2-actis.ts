import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'Eta-2 Actis', de: 'Eta-2-Actis', fr: 'Actis Eta-2' },
  xws: 'eta2actis',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2EP',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RP',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Bullseye Arc', value: 3 },
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'Purple' },
    { type: 'Barrel Roll', difficulty: 'White' },
    { type: 'Boost', difficulty: 'White' },
  ],
  ability: {
    name: { en: 'Intuitive Controls' },
    text: {
      en:
        'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
    },
  },
  pilots: [
    {
      name: { en: 'Shaak Ti' },
      xws: 'shaakti',
      initiative: 4,
      limited: 1,
      caption: {
        en: 'Compassionate Mentor',
        de: 'Mitfühlende Mentorin',
        es: 'Mentora compasiva',
        fr: 'Mentor Compatissant',
      },
      hyperspace: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability: {
        en:
          'At the start of the End Phase, you may spend any number of [Force] to choose that many friendly ships at range 0-2. Each chosen ship does not remove 1 focus or evade token during this End Phase.',
        de:
          'Zu Beginn der Endphase darfst du beliebig viele [Force] ausgeben, um ebenso viele\nbefreundete Schiffe in Reichweite 0-2 zu wählen. Jedes gewählte Schiff entfernt während dieser Endphase 1 Fokus- oder\nAusweichmarker nicht.',
        es:
          'Al comienzo de la fase Final, puedes gastar cualquier cantidad de [Force] para elegir esa misma cantidad de naves aliadas que tengas a alcance 0-2. Cada nave elegida no retira 1 ficha de Concentración o de Evasión durante esta fase Final.',
        fr:
          "Au début de la phase de dénouement, vous pouvez dépenser n'importe quel nombre de [Force] pour choisir autant de vaisseaux alliés à portée 0-2. Chaque vaisseau choisi ne retire pas 1 marqueur de concentration ou d'évasion lors de cette phase de dénouement.",
      },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      cost: 44,
      epic: false,
      ffg: 784,
    },
    {
      name: {
        en: 'Jedi General',
        de: 'Jedi-General',
        es: 'General jedi',
        fr: 'Général Jedi',
      },
      xws: 'jedigeneral',
      initiative: 4,
      limited: 0,
      text: {
        en:
          'As the Clone Wars take their toll on the ranks of the Jedi Order, those that remain must assume even greater responsibilities in the Grand Army of the Republic.',
        de:
          'Aufgrund der enorm hohen Opferzahlen, welche die Klonkriege in den Reihen des Jedi-Ordens fordern, müssen die Überlebenden noch größere Verantwortung in der Großen Armee der Republik übernehmen.',
        es:
          'A medida que las Guerras Clon se cobran su precio en las filas de la Orden Jedi, los supervivientes deben asumir cada vez mayores responsabilidades en el Gran Ejército de la República.',
        fr:
          "Alors que la Guerre des Clones fait des ravages dans les rangs de l'Ordre Jedi, ceux qui restent assument de plus grandes responsabilités dans la Grande Armée de la République.",
      },
      hyperspace: false,
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: ['Cannon', 'Astromech', 'Modification', 'Force Power'],
      cost: 41,
      epic: false,
      ffg: 786,
    },
    {
      name: { en: 'Yoda' },
      xws: 'yoda',
      initiative: 3,
      limited: 1,
      caption: {
        en: 'Grand Master',
        de: 'Großmeister',
        es: 'Gran maestro',
        fr: 'Grand Maître',
      },
      hyperspace: true,
      force: { value: 3, recovers: 1, side: ['light'] },
      ability: {
        en:
          'After another friendly ship at range 0-3 spends 1 or more [Force], you may spend 1 [Force]. If you do, that ship recovers 1 [Force].',
        de:
          'Nachdem ein anderes befreundetes Schiff in Reichweite 0-3 1 oder mehrere [Force] ausgegeben hat, darfst du 1 [Force] ausgeben. Falls du das tust, stellt jenes Schiff 1 [Force] wieder her.',
        es:
          'Después de que otra nave aliada que tengas a alcance 0-3 gaste 1 o más [Force], puedes gastar 1 [Force]. Si lo haces, esa nave recupera 1 [Force].',
        fr:
          "Après qu'un autre vaisseau allié à portée 0-3 a dépensé au moins 1 [Force], vous pouvez dépenser 1 [Force]. Dans ce cas, cet autre vaisseau allié récupère 1 [Force].",
      },
      slots: [
        'Cannon',
        'Astromech',
        'Modification',
        'Force Power',
        'Force Power',
      ],
      cost: 48,
      epic: false,
      ffg: 785,
    },
    {
      xws: 'anakinskywalker-eta2actis',
      ffg: 781,
      name: { en: 'Anakin Skywalker' },
      cost: 56,
      limited: 1,
      initiative: 6,
      caption: {
        en: 'Hero of Coruscant',
        de: 'Held von Coruscant',
        es: 'Héroe de Coruscant',
        fr: 'Héros de Coruscant',
      },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      hyperspace: true,
      force: { value: 3, recovers: 1, side: ['light', 'dark'] },
      epic: true,
      ability: {
        en:
          'After you or a friendly Obi-Wan Kenobi ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship removes 1 red token of your choice.',
        de:
          'Nachdem du oder ein befreundetes Obi-Wan Kenobi-Schiff in Reichweite 0-3 ein\nManöver ausgeführt hat, falls in Reichweite 0-1 jenes Schiffes mehr feindliche Schiffe als andere befreundete Schiffe sind, darfst du 1 [Force] ausgeben. Falls du das tust, entfernt jenes Schiff 1 roten Marker deiner Wahl.',
        es:
          'Después de que tú o una nave Obi-Wan Kenobi que tengas a alcance 0-3 ejecutéis una maniobra, si hay más naves enemigas que otras naves aliadas a alcance 0-1 de esa nave, puedes gastar 1 [Force]. Si lo haces, esa nave retira 1 ficha roja de tu elección.',
        fr:
          "Après que vous, ou un vaisseau Obi-Wan Kenobi allié à portée 0-3, avez exécuté une manœuvre, s'il y a plus de vaisseaux ennemis que d'autres vaisseaux alliés à portée 0-1 du vaisseau ayant exécuté la manœuvre, vous pouvez dépenser 1 [Force]. Dans ce cas, le vaisseau ayant exécuté la manœuvre retire 1 marqueur rouge de votre choix.",
      },
    },
    {
      xws: 'obiwankenobi-eta2actis',
      ffg: 782,
      name: { en: 'Obi-Wan Kenobi' },
      cost: 49,
      limited: 1,
      initiative: 5,
      caption: {
        en: 'Guardian of Democracy',
        de: 'Wächter der Demokratie',
        es: 'Guardián de la democracia',
        fr: 'Gardien de la Démocratie',
      },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'After you or a friendly Anakin Skywalker ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
        de:
          'Nachdem du oder ein befreundetes Anakin Skywalker-Schiff in Reichweite 0-3\nein Manöver ausgeführt hat, falls in Reichweite 0-1 jenes Schiffes mehr feindliche Schiffe als andere befreundete Schiffe sind, darfst du 1 [Force] ausgeben. Falls du das tust, erhält jenes Schiff 1 Fokusmarker.',
        es:
          'Después de que tú o una nave Anakin Skywalker aliada que tengas a alcance 0-3 ejecutéis una maniobra, si hay más naves enemigas que otras naves aliadas a alcance 0-1 de esa nave, puedes gastar 1 [Force]. Si lo haces, esa nave recibe 1 ficha de Concentración.',
        fr:
          "Après que vous, ou un vaisseau Anakin Skywalker allié à portée 0-3, avez exécuté une manœuvre, s'il y a plus de vaisseaux ennemis que d'autres vaisseaux alliés à portée 0-1 du vaisseau ayant exécuté la manœuvre, vous pouvez dépenser 1 [Force]. Dans ce cas, le vaisseau ayant exécuté la manœuvre gagne 1 marqueur de concentration.",
      },
    },
    {
      xws: 'aaylasecura',
      ffg: 783,
      name: { en: 'Aayla Secura' },
      cost: 51,
      limited: 1,
      initiative: 5,
      caption: {
        en: 'Confident Warrior',
        de: 'Selbstbewusste Kämpferin',
        es: 'Guerrera segura de sí misma',
        fr: 'Guerrière Confiante',
      },
      slots: ['Talent', 'Cannon', 'Astromech', 'Modification', 'Force Power'],
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While an enemy ship in your [Front Arc] at range 0-1 performs an attack, the defender may change 1 blank result to a [Focus] result.',
        de:
          'Solange ein feindliches Schiff, das in Reichweite 0-1 in deinem [Front Arc] ist, einen Angriff durchführt, darf der Verteidiger 1 Leerseiten-Ergebnis in ein [Focus] -Ergebnis ändern.',
        es:
          'Mientras una nave enemiga que tienes en tu [Front Arc] a alcance 0-1 efectúa un ataque, el defensor puede cambiar 1 resultado de cara vacía por un resultado [Focus].',
        fr:
          "Tant qu'un vaisseau ennemi dans votre [Front Arc] à portée 0-1 effectue une attaque, le défenseur peut changer 1 résultat vierge en un résultat [Focus].",
      },
    },
  ],
};

export default t;

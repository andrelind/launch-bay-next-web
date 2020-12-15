import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Aggressor Assault Fighter',
    de: 'Aggressor-Angriffsjäger',
    fr: "Chasseur d'Assaut Aggressor",
    es: 'Caza de asalto Agresor',
  },
  xws: 'aggressorassaultfighter',
  ffg: 21,
  size: 'Medium',
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
    '3BB',
    '3FB',
    '3NB',
    '3PR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Advanced Droid Brain',
      de: 'Hochentwickeltes Droidengehirn',
      fr: 'Cerveau Droïde Avancé',
      es: 'Cerebro droide avanzado',
      it: 'Cervello Droide Evoluto',
      pl: 'Zaawansowany mózg droida',
      pt: 'Cérebro Droide Avançado',
      zh: 'Advanced Droid Brain',
    },
    text: {
      en: 'After you perform a [Calculate] action, gain 1 calculate token.',
      de:
        'Nachdem du eine [Calculate]-Aktion durchgeführt hast, erhalte 1 Berechnungsmarker.',
      fr:
        'après avoir effectué une action [Calculate], gagnez 1 marqueur de calcul.',
      es:
        'Después de que efectúes una acción [Calculate], recibes 1 ficha de Cálculos.',
      it:
        "Dopo che hai effettuato un'azione [Calculate], ottieni 1 segnalino calcolo.",
      pl: 'Gdy wykonasz akcję [Calculate], otrzymujesz 1 żeton obliczeń.',
      pt: 'Após realizar uma ação [Calculate], receba 1 ficha de cálculo.',
      zh: 'After you perform a [Calculate] action, gain 1 calculate token.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_IG-2000.png',
  pilots: [
    {
      name: { en: 'IG-88A' },
      caption: {
        en: 'Aggressive Automaton',
        de: 'Aggressiver Automat',
        fr: 'Robot Agressif',
        es: 'Autómata agresivo',
      },
      initiative: 4,
      limited: 1,
      cost: 66,
      xws: 'ig88a',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 friendly ship with [Calculate] on its action bar at range 1-3. If you do, transfer 1 of your calculate tokens to it.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 befreundetes Schiff mit [Calculate] in seiner Aufwertungsleiste in Reichweite 1-3 wählen. Falls du das tust, transferiere 1 deiner Berechnungsmarker auf es.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau allié à portée 1-3 avec [Calculate] dans sa barre d'action. Dans ce cas, transférez-lui 1 de vos marqueurs de calcul.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave aliada que tengas a alcance 1-3 y en cuya barra de acciones figure [Calculate]. Si lo haces, transfiere 1 de tus fichas de Cálculos a esa nave.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_197.jpg',
      ffg: 197,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'IG-88B' },
      caption: {
        en: 'Brutal Battledroid',
        de: 'Brutaler Bot',
        fr: 'Droïde de Combat Brutal',
        es: 'Droide de combate brutal',
      },
      initiative: 4,
      limited: 1,
      cost: 62,
      xws: 'ig88b',
      ability: {
        en:
          'After you perform an attack that misses, you may perform a bonus [Cannon] attack.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, der verfehlt hat, darfst du einen Bonus-[Cannon]-Angriff durchführen.',
        fr:
          'Après avoir effectué une attaque ratée, vous pouvez effectuer une attaque bonus [Cannon].',
        es:
          'Después de que efectúes un ataque que falle, puedes efectuar un ataque [Cannon] adicional.',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/26/e9/26e959b8-34a2-4d0d-93b1-2efad56cd573/op067_ig-88d.png',
          source: 'Coruscant Invitational 2018',
        },
      ],
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_198.jpg',
      ffg: 198,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'IG-88C' },
      caption: {
        en: 'Conniving Contraption',
        de: 'Cleverer Computer',
        fr: 'Machine Trop Indulgente',
        es: 'Máquina confabuladora',
      },
      initiative: 4,
      limited: 1,
      cost: 63,
      xws: 'ig88c',
      ability: {
        en:
          'After you perform a [Boost] action, you may perform an [Evade] action.',
        de:
          'Nachdem du eine [Boost]-Aktion durchgeführt hast, darfst du eine [Evade]-Aktion durchführen.',
        fr:
          'Après avoir effectué une action [Boost], vous pouvez effectuer une action [Evade].',
        es:
          'Después de que efectúes una acción [Boost], puedes efectuar una acción [Evade].',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_199.jpg',
      ffg: 199,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'IG-88D' },
      caption: {
        en: 'Deadly Device',
        de: 'Destruktiver Droide',
        fr: 'Dispositif Mortel',
        es: 'Artilugio mortífero',
      },
      initiative: 4,
      limited: 1,
      cost: 62,
      xws: 'ig88d',
      ability: {
        en:
          "While you execute a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver, you may use another template of the same speed instead: either the turn ([Turn Left] or [Turn Right]) of the same direction or the straight ([Straight]) template.",
        de:
          "Solange du einen Segnor-Looping ([Segnor's Loop Left] oder [Segnor's Loop Right])ausführst, darfst du stattdessen eine andere Schablone derselben Geschwindigkeit verwenden: entweder die Wende ([Turn Left] oder [Turn Right]) mit gleicher Orientierung oder die Gerade ([Straight]).",
        fr:
          "Tant que vous exécutez une manœuvre Boucle de Segnor ([Segnor's Loop Left] ou [Segnor's Loop Right]), vous pouvez utiliser un autre gabarit de même vitesse à la place : soit le gabarit de virage ([Turn Left] ou [Turn Right]) de même direction, soit le gabarit de ligne droite ([Straight]).",
        es:
          "Mientras ejecutas una maniobra de giro de Segnor ([Segnor's Loop Left] o [Segnor's Loop Right]), puedes ejecutarla utilizando otra plantilla con la misma velocidad, ya sea una plantilla de giro ([Turn Left] o [Turn Right]) con la misma dirección o la plantilla de movimiento recto ([Straight]).",
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_200.jpg',
      ffg: 200,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

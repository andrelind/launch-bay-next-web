import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Aggressor Assault Fighter',
    de: 'Aggressor-Angriffsjäger',
    fr: "Chasseur d'Assaut Aggressor",
    it: "Caccia d'Assalto Aggressor",
    pl: 'Myśliwiec szturmowy Aggressor',
    pt: 'Caça de Assalto Aggressor',
    zh: 'Aggressor Assault Fighter',
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
      name: {
        en: 'IG-88A',
        de: 'IG-88A',
        fr: 'IG-88A',
        es: 'IG-88A',
        it: 'IG-88A',
        pl: 'IG-88A',
        pt: 'IG-88A',
        zh: 'IG-88A',
      },
      caption: {
        en: 'Aggressive Automaton',
        de: 'Aggressiver Automat',
        fr: 'Robot Agressif',
        es: 'Autómata agresivo',
        it: 'Automa Aggressivo',
        pl: 'Agresywny automat',
        pt: 'Autômato Agressivo',
        zh: 'Aggressive Automaton',
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
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave amica a gittata 1-3 con [Calculate] nella sua barra delle azioni. Se lo fai, trasferisci 1 tuo segnalino calcolo a quella nave.",
        pl:
          'Na początku fazy walki możesz wskazać 1 przyjazny statek, który jest w zasięgu 1-3 i ma [Calculate] na pasku akcji. Jeżeli tak zrobisz, przenieś na wskazany statek 1 z twoich żetonów obliczeń.',
        pt:
          'No início da Fase de Engajamento,você pode escolher 1 nave amiga emalcance 1-3 que tenha [Calculate] na barra de ações. Se fizer isso, transfira 1 desuas fichas de cálculo para ela.',
        zh:
          'At the start of the Engagement Phase, you may choose 1 friendly ship with [Calculate] on its action bar at range 1-3. If you do, transfer 1 of your calculate tokens to it.',
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
      name: {
        en: 'IG-88B',
        de: 'IG-88B',
        fr: 'IG-88B',
        es: 'IG-88B',
        it: 'IG-88B',
        pl: 'IG-88B',
        pt: 'IG-88B',
        zh: 'IG-88B',
      },
      caption: {
        en: 'Brutal Battledroid',
        de: 'Brutaler Bot',
        fr: 'Droïde de Combat Brutal',
        es: 'Droide de combate brutal',
        it: 'Bot Brutale',
        pl: 'Okrutny droid bojowy',
        pt: 'Droide de Batalha Brutal',
        zh: 'Brutal Battledroid',
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
        it:
          'Dopo che hai effettuato un attacco che ha mancato, puoi effettuare 1 attacco [Cannon] bonus.',
        pl:
          'Gdy wykonasz atak, który chybił, możesz wykonać dodatkowy atak [Cannon].',
        pt:
          'Após realizar um ataque que errou, você pode realizar um ataque [Cannon] bônus.',
        zh:
          'After you perform an attack that misses, you may perform a bonus [Cannon] attack.',
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
      name: {
        en: 'IG-88C',
        de: 'IG-88C',
        fr: 'IG-88C',
        es: 'IG-88C',
        it: 'IG-88C',
        pl: 'IG-88C',
        pt: 'IG-88C',
        zh: 'IG-88C',
      },
      caption: {
        en: 'Conniving Contraption',
        de: 'Cleverer Computer',
        fr: 'Machine Trop Indulgente',
        es: 'Máquina confabuladora',
        it: 'Costrutto Calcolatore',
        pl: 'Podstępna maszyna',
        pt: 'Engenhoca Calculista',
        zh: 'Conniving Contraption',
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
        it:
          "Dopo che hai effettuato un'azione [Boost], puoi effettuare 1 azione [Evade].",
        pl: 'Gdy wykonasz akcję [Boost], możesz wykonać akcję [Evade].',
        pt:
          'Após realizar uma ação [Boost],você pode realizar uma ação [Evade].',
        zh:
          'After you perform a [Boost] action, you may perform an [Evade] action.',
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
      name: {
        en: 'IG-88D',
        de: 'IG-88D',
        fr: 'IG-88D',
        es: 'IG-88D',
        it: 'IG-88D',
        pl: 'IG-88D',
        pt: 'IG-88D',
        zh: 'IG-88D',
      },
      caption: {
        en: 'Deadly Device',
        de: 'Destruktiver Droide',
        fr: 'Dispositif Mortel',
        es: 'Artilugio mortífero',
        it: 'Droide Devastante',
        pl: 'Zabójcze urządzenie',
        pt: 'Dispositivo Letal',
        zh: 'Deadly Device',
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
        it:
          "Mentre esegui una manovra loop di Segnor ([Segnor's Loop Left] o [Segnor's Loop Right]), puoi invece usare il modello curva ([Turn Left] o [Turn Right]) con la stessa direzione e velocità oppure il modello dritta ([Straight]) con la stessa velocità.",
        pl:
          "Gdy wykonujesz pętlę Segnora ([Segnor's Loop Left] albo [Segnor's Loop Right]), zamiast standardowego wzronika możesz użyć wzornika zwrotu ([Turn Left] albo [Turn Right]) o tej samej prędkości i kierunku albo wzornika na wprost ([Straight]) o tej samej prędkości.",
        pt:
          "Quando executar uma manobra Loop de Segnor ([Segnor's Loop Left] ou [Segnor's Loop Right]), você pode usar, em vez desses, outro gabarito de mesma velocidade de: curva acentuada ([Turn Left] ou [Turn Right]) para a mesma direção ou linha reta ([Straight]).",
        zh:
          "While you execute a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver, you may use another template of the same speed instead: either the turn ([Turn Left] or [Turn Right]) of the same direction or the straight ([Straight]) template.",
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

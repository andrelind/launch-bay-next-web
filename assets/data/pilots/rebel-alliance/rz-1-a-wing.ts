import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'RZ-1 A-wing',
    de: 'RZ-1-A-Flügler',
    fr: 'A-wing RZ-1',
    it: 'Ala-A RZ-1',
    pl: 'A-wing RZ-1',
    pt: 'A-wing RZ-1',
    zh: 'RZ-1 A-wing',
    es: 'RZ-1 Ala-A',
  },
  xws: 'rz1awing',
  ffg: 35,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Vectored Thrusters',
      de: 'Schwenkbare Schubdüsen',
      es: 'Propulsores vectoriales',
      pl: 'Sterowanie wektorem ciągu',
      zh: 'Vectored Thrusters',
      pt: 'Propulsores Vetorizados',
      fr: 'Propulseurs Vectoriels',
      it: 'Propulsori Vettoriali',
    },
    text: {
      en: 'After you perform an action, you may perform a red [Boost] action.',
      de:
        'Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Boost]-Aktion durchführen.',
      es:
        'Después de que realices una acción, puedes realizar una acción [Boost] roja.',
      fr:
        'Après avoir effectué une action, vous pouvez effectuer une action [Boost] rouge.',
      it:
        "Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Boost] rossa.",
      pl: 'Gdy wykonasz akcję, możesz wykonać czerwoną akcję [Boost].',
      pt:
        'Após realizar uma ação, você poderealizar uma ação [Boost] vermelha.',
      zh: 'After you perform an action, you may perform a red [Boost] action.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_A-wing.png',
  pilots: [
    {
      name: {
        en: 'Arvel Crynyd',
        de: 'Arvel Crynyd',
        fr: 'Arvel Crynyd',
        es: 'Arvel Crynyd',
        it: 'Arvel Crynyd',
        pl: 'Arvel Crynyd',
        pt: 'Arvel Crynyd',
        zh: 'Arvel Crynyd',
      },
      caption: {
        en: 'Green Leader',
        de: 'Grün Eins',
        fr: 'Green Leader',
        es: 'Jefe Verde',
        it: 'Capo Verde',
        pl: 'Dowódca Zielonych',
        pt: 'Líder Verde',
        zh: 'Green Leader',
      },
      initiative: 3,
      limited: 1,
      cost: 32,
      xws: 'arvelcrynyd',
      ability: {
        en:
          'You can perform primary attacks at range 0. If you would fail a [Boost] action by overlapping another ship, resolve it as though you were partially executing a maneuver instead.',
        de:
          'Du kannst Primärangriffe in Reichweite 0 durchführen. Falls du durch Überschneidung mit einem anderen Schiff an einer [Boost]-Aktion scheitern würdest, handle sie stattdessen so ab, als würdest du ein Manöver teilweise ausführen.',
        fr:
          'Vous pouvez effectuer des attaques principales à portée 0. Si vous deviez échouer à une action [Boost] qui vous amènerait à chevaucher un autre vaisseau, résolvez-la comme si vous exécutiez partiellement une manœuvre à la place. Propulseurs Vectoriels : après avoir effectué une action, vous pouvez effectuer une action [Boost] rouge.',
        es:
          'Eres capaz de efectuar ataques principales a alcance 0. Si una acción [Boost] tuya va a fracasar debido a que te solapas con otra nave, en vez de eso resuélvela como si estuvieras ejecutando parcialmente una maniobra.',
        it:
          "Puoi effettuare attacchi primari a gittata 0. Se stai per fallire un'azione [Boost] a causa della sovrapposizione a un'altra nave, risolvila invece come se stessi effettuando parzialmente una manovra. Propulsori Vettoriali: Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Boost] rossa.",
        pl:
          'Możesz wykonywać ataki podstawowe w zasięgu 0. Gdy akcja [Boost] miałaby ci się nie udać z powodu nachodzenia na inny statek, rozpatrz ją tak, jakbyś zamiast tego wykonywał manewr częściowy.',
        pt:
          'Você consegue realizar ataquesprimários em alcance 0. Se você for falhar em uma ação [Boost] porque sobrepôs outra nave, em vez disso, resolva-a como se estivesse executando parcialmente uma manobra. Propulsores Vetorizados: Após realizaruma ação, você pode realizar uma ação[Boost] vermelha.',
        zh:
          'You can perform primary attacks at range 0. If you would fail a [Boost] action by overlapping another ship, resolve it as though you were partially executing a maneuver instead.',
      },
      slots: ['Talent', 'Talent', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_20.jpg',
      ffg: 20,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Green Squadron Pilot',
        de: 'Pilot der grünen Staffel',
        fr: "Pilote de l'Escadron Vert",
        es: 'Piloto del Escuadrón Verde',
        it: 'Pilota della Squadriglia Verde',
        pl: 'Pilot Eskadry Zielonych',
        pt: 'Piloto do Esq. Verde',
        zh: 'Green Squadron Pilot',
      },
      initiative: 3,
      limited: 0,
      cost: 30,
      xws: 'greensquadronpilot',
      text: {
        en:
          'Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.',
        de:
          'Aufgrund seiner empfindlichen Steuerung und extremen Wendigkeit war das Cockpit des A-Flüglers nur für besonders begabte Piloten bestimmt.',
        fr:
          "À cause de ses commandes sensibles et de son extrême manœuvrabilité, seuls les meilleurs pilotes﻿ osent prendre place dans le cockpit d'un A-wing.",
        es:
          'Debido a la sensibilidad de sus mandos y su elevada capacidad de maniobra, sólo los mejores pilotos se sientan en la carlinga de un Ala-A.',
        it:
          "Grazie ai suoi comandi sensibili e alla sua alta manovrabilità, l'abitacolo di un Ala-A era un luogo riservato soltanto ai piloti più dotati.",
        pl:
          'Niezwykle czułe stery i wysoka zwrotność sprawiają, że z pilotowaniem A-wingów radzą sobie tylko najbardziej utalentowani piloci.',
        pt:
          'Devido aos seus controles sensitivos e alta manobrabilidade, somente os pilotos mais talentosos ocupavam a cabine de uma A-wing.',
        zh:
          'Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.',
      },
      slots: ['Talent', 'Talent', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_21.jpg',
      ffg: 21,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Jake Farrell',
        de: 'Jake Farrell',
        fr: 'Jake Farrell',
        es: 'Jake Farrell',
        it: 'Jake Farrell',
        pl: 'Jake Farrell',
        pt: 'Jake Farrell',
        zh: 'Jake Farrell',
      },
      caption: {
        en: 'Sage Instructor',
        de: 'Kluger Ausbilder',
        fr: 'Instructeur Avisé',
        es: 'Instructor sagaz',
        it: 'Istruttore Esperto',
        pl: 'Doświadczony instruktor',
        pt: 'Instrutor Judicioso',
        zh: 'Sage Instructor',
      },
      initiative: 4,
      limited: 1,
      cost: 34,
      xws: 'jakefarrell',
      ability: {
        en:
          'After you perform a [Barrel Roll] or [Boost] action, you may choose a friendly ship at range 0-1. That ship may perform a [Focus] action.',
        de:
          'Nachdem du eine [Barrel Roll]- oder [Boost]-Aktion durchgeführt hast, darfst du ein befreundetes Schiff in Reichweite 0-1 wählen. Jenes Schiff darf eine [Focus]-Aktion durchführen.',
        fr:
          'Après avoir effectué une action [Barrel Roll] ou [Boost], vous pouvez choisir un vaisseau allié à portée 0-1. Ce vaisseau peut effectuer une action [Focus]. Propulseurs Vectoriels : après avoir effectué une action, vous pouvez effectuer une action [Boost] rouge.',
        es:
          'Después de que realices una acción [Barrel Roll] o [Boost], puedes elegir una nave aliada que tengas a alcance 0-1. Esa nave puede realizar una acción [Focus].',
        it:
          "Dopo che hai effettuato un'azione [Barrel Roll] o [Boost], puoi scegliere 1 nave amica a gittata 0-1. Quella nave può effettuare 1 azione [Focus]. Propulsori Vettoriali: Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Boost] rossa.",
        pl:
          'Gdy wykonasz akcję [Barrel Roll] albo [Boost], możesz wskazać przyjazny statek w zasięgu 0-1. Wskazany statek może wykonać akcję [Focus].',
        pt:
          'Após realizar uma ação [Barrel Roll] ou [Boost],você pode escolher uma nave amigaem alcance 0-1. A nave escolhidapode realizar uma ação [Focus]. Propulsores Vetorizados:Após realizar uma ação, você poderealizar uma ação [Boost] vermelha.',
        zh:
          'After you perform a [Barrel Roll] or [Boost] action, you may choose a friendly ship at range 0-1. That ship may perform a [Focus] action.',
      },
      slots: ['Talent', 'Talent', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_19.jpg',
      ffg: 19,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Phoenix Squadron Pilot',
        de: 'Pilot der Phönix-Staffel',
        fr: "Pilote de l'Escadron Phœnix",
        es: 'Piloto del Escuadrón Fénix',
        it: 'Pilota della Squadriglia Phoenix',
        pl: 'Pilot Eskadry Feniksów',
        pt: 'Piloto do Esq. Fênix',
        zh: 'Phoenix Squadron Pilot',
      },
      initiative: 1,
      limited: 0,
      cost: 28,
      xws: 'phoenixsquadronpilot',
      text: {
        en:
          'Led by Commander Jun Sato, the brave but inexperienced pilots of Phoenix Squadron face staggering odds in their battle against the Galactic Empire.',
        de:
          'Unter der Führung von Commander Jun Sato stellen sich die tapferen, aber unerfahrenen Piloten der Phönix-Staffel dem aussichtslosen Kampf gegen das Galaktische Imperium.',
        fr:
          "Dirigés par le commandant Jun Sato et malgré leur manque d'expérience, les courageux pilotes de l'Escadron Phœnix firent face à des défis complexes dans leur lutte contre l'Empire Galactique.",
        es:
          'Bajo el mando del comandante Jun Sato, los valerosos pero inexpertos pilotos del Escuadrón Fénix se enfrentan al Imperio Galáctico teniéndolo todo en su contra.',
        it:
          "Guidati dal comandante Jun Sato, i coraggiosi ma inesperti piloti della Squadriglia Phoenix devono affrontare avversità soverchianti nella loro lotta contro l'Impero Galattico.",
        pl:
          'Dzielni, ale niedoświadczeni piloci Eskadry Feniksa, dowodzeni przez komandora Juna Sato, mierzą się podczas starć z Galaktycznym Imperium z niezliczonymi przeciwnościami.',
        pt:
          'Liderados pelo Comandante Jun Sato, os bravos porém inexperientes pilotos do Esquadrão Fênix enfrentam situações impressionantes em suas batalhas contra o Império Galático.',
        zh:
          'Led by Commander Jun Sato, the brave but inexperienced pilots of Phoenix Squadron face staggering odds in their battle against the Galactic Empire.',
      },
      slots: ['Talent', 'Missile'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_22.jpg',
      ffg: 22,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ag Aggressor',
    de: 'TIE/ag-Aggressor',
    fr: 'TIE/ag Aggressor',
    it: 'TIE/ag Aggressor',
    pl: 'TIE/ag Aggressor',
    pt: 'TIE/ag Aggressor',
    zh: 'TIE/ag Aggressor',
    es: 'TIE/ag Agresor',
  },
  xws: 'tieagaggressor',
  ffg: 29,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEAggressor.png',
  pilots: [
    {
      name: {
        en: '"Double Edge"',
        de: '„Doppelklinge"',
        fr: '"Double Edge"',
        es: '"Doble Filo"',
        it: '"Double Edge"',
        pl: '„Obosieczne ostrze"',
        pt: '"Double Edge"',
        zh: '"Double Edge"',
      },
      caption: {
        en: 'Contingency Planner',
        de: 'Notfallplaner',
        fr: 'Contingency Planner',
        es: 'Planificador de contingencias',
        it: 'Pianificatore di Contingenze',
        pl: 'Planista awaryjny',
        pt: 'Planejador de Contingência',
        zh: 'Contingency Planner',
      },
      initiative: 2,
      limited: 1,
      cost: 28,
      xws: 'doubleedge',
      ability: {
        en:
          'After you perform a [Turret] or [Missile] attack that misses, you may perform a bonus attack using a different weapon.',
        de:
          'Nachdem du einen [Turret]- oder [Missile]-Angriff durchgeführt hast, der verfehlt hat, darfst du unter Verwendung einer anderen Waffe einen Bonusangriff durchführen.',
        fr:
          'Après avoir effectué une attaque [Turret] ou [Missile] ratée, vous pouvez effectuer une attaque bonus en utilisant une arme différente.',
        es:
          'Después de que efectúes un ataque [Turret] o [Missile] que falle, puedes realizar un ataque adicional utilizando un arma diferente.',
        it:
          "Dopo che hai effettuato un attacco [Turret] o [Missile] che ha mancato,puoi effettuare 1 attacco bonus usando un'arma diversa.",
        pl:
          'Gdy wykonasz atak [Turret] albo [Missile], który chybił, możesz wykonać dodatkowy atak przy pomocy innej broni.',
        pt:
          'Após realizar um ataque [Turret] ou [Missile]que errou, você pode realizar um ataque bônus usando uma arma diferente.',
        zh:
          'After you perform a [Turret] or [Missile] attack that misses, you may perform a bonus attack using a different weapon.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_128.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ad3d83c91eb82639bc6841d1377562ef.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7c0573a813bccb01b56eb3e39fdbf77e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b7812eea20d7469b176e5f661bb515a4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/d3119f342347bd9a7919d38499834f56.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/2b50e2e1bfe43acd304fc84175915c1a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/3a9b410e3b5356ef7b6d6eeec1ae94b9.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_128.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_128.jpg',
      ffg: 128,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Lieutenant Kestal',
        de: 'Lieutenant Kestal',
        fr: 'Lieutenant Kestal',
        es: 'Teniente Kestal',
        it: 'Tenente Kestal',
        pl: 'Porucznik Kestal',
        pt: 'Tenente Kestal',
        zh: 'Lieutenant Kestal',
      },
      caption: {
        en: 'Innate Deadeye',
        de: 'Geborener Meisterschütze',
        fr: "Tireur d'Élite Inné",
        es: 'Artillero nato',
        it: 'Cecchino Nato',
        pl: 'Urodzony strzelec',
        pt: 'Pontaria Cirúrgica Nata',
        zh: 'Innate Deadeye',
      },
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'lieutenantkestal',
      ability: {
        en:
          "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/[Focus] results.",
        de:
          'Solange du einen Angriff durchführst, nachdem der Verteidiger Verteidigungswürfel geworfen hat, darfst du 1 Fokusmarker ausgeben, um alle Leerseiten/[Focus]-Ergebnisse des Verteidigers zu negieren.',
        fr:
          'Tant que vous effectuez une attaque, après que le défenseur a lancé les dés de défense, vous pouvez dépenser 1 marqueur de concentration pour annuler tous les résultats Vierge/[Focus] du défenseur.',
        es:
          'Mientras efectúas un ataque, después de que el defensor tire los dados de defensa, puedes gastar 1 ficha de Concentración para anular todos los resultados de cara vacía/[Focus] del defensor.',
        it:
          'Mentre effettui un attacco, dopo che il difensore ha tirato i dadi di difesa, puoi spendere 1 segnalino concentrazione per annullare tutti i risultati vuoto/[Focus] del difensore.',
        pl:
          'Gdy wykonujesz atak, po rzucie obrońcy możesz wydać 1 żeton skupienia, aby anulować wszystkie puste/[Focus] wyniki obrońcy.',
        pt:
          'Quando realizar um ataque, após o defensor rolar os dados de defesa, você pode gastar 1 ficha de focopara cancelar todos os resultadosem branco/[Focus] do defensor.',
        zh:
          "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/[Focus] results.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_127.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/4332ae47f0b71317819cb4ac8d0cd7b8.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8fe6518390c0aa10662637680cc8d173.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/a14ea90c1ea08bdbec9b7f520850768e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/5686f03e3e5ea46a5d7260d9108ca8cc.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/02883e29f0d61f94fde2a655fe17f518.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/ba9f2f2070e0a98d952aa8e11665ee79.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_127.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_127.jpg',
      ffg: 127,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Onyx Squadron Scout',
        de: 'Aufklärer der Onyx-Staffel',
        fr: "Éclaireur de l'Escadron Onyx",
        es: 'Explorador del Escuadrón Ónice',
        it: 'Esploratore della Squadriglia Onyx',
        pl: 'Zwiadowca Eskadry Onyksowych',
        pt: 'Batedor do Esq. Ônix',
        zh: 'Onyx Squadron Scout',
      },
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'onyxsquadronscout',
      text: {
        en:
          'Designed for extended engagements, the TIE/ag is flown primarily by elite pilots trained to leverage both its unique weapons loadout and its maneuverability to full effect.',
        de:
          'Der für den Langzeiteinsatz konzipierte TIE/ag wird in erster Linie von Elitepiloten geflogen, die das Potential des schwer bewaffneten und wendigen Jägers voll ausschöpfen können.',
        fr:
          "Conçu pour les engagements de longue haleine, le TIE/ag est habituellement confié aux pilotes d'élite entraînés pour tirer le meilleur parti de son armement et de sa manœuvrabilité.",
        es:
          'Diseñado para enfrentamientos prolongados, el TIE/ag se asigna casi siempre a pilotos de élite entrenados para saber aprovechar al máximo tanto su particular complemento de armas como su maniobrabilidad.',
        it:
          'Il TIE/ag, concepito per ingaggi prolungati, è comandato soprattutto da quei piloti scelti e addestrati per sfruttare al meglio sia i suoi armamenti unici che la sua manovrabilità.',
        pl:
          'TIE/ag zaprojektowano z myślą o dłuższych starciach. Za sterami maszyn tego typu zasiadają zwykle najlepsi z najlepszych pilotów, bo tylko oni potrafią w pełni wykorzystać unikalne uzbrojenie i niezwykłą zwrotność.',
        pt:
          'Projetada para batalhas duradouras,a TIE/ag é pilotada principalmente por pilotos de elite treinados para dominartanto seu armamento exclusivo quantosua agilidade com eficiência total.',
        zh:
          'Designed for extended engagements, the TIE/ag is flown primarily by elite pilots trained to leverage both its unique weapons loadout and its maneuverability to full effect.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_129.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/9f869e9414aba11bde178e326ad7a210.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/face4846930dccb58d715763b7462d08.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/933e992652a757d42594250a18e0a3a8.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f57be2b11c7090e63d2a03e3111c4026.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c77212598b5de2db7e8405f7cd971b26.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/b65ca998e80ee0e8ba4c6aa558a74588.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_129.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_129.jpg',
      ffg: 129,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Sienar Specialist',
        de: 'Experte von Sienar',
        fr: 'Spécialiste Sienar',
        es: 'Especialista de Sienar',
        it: 'Specialista della Sienar',
        pl: 'Specjalista Sienar',
        pt: 'Especialista Sienar',
        zh: 'Sienar Specialist',
      },
      initiative: 2,
      limited: 0,
      cost: 26,
      xws: 'sienarspecialist',
      text: {
        en:
          'During the development of the TIE aggressor, Sienar Fleet Systems valued performance and versatility over raw cost efficiency.',
        de:
          'Bei der Entwicklung des TIE-Aggressors setzte Sienar Flottensysteme mehr auf Vielseitigkeit und Leistung als auf reine Kosteneffizienz.',
        fr:
          "Lors du développement du TIE Aggressor, Sienar Fleet Systems accorda d'avantage d'importance aux performances et à la polyvalence qu'à la maîtrise des coûts.",
        es:
          'Durante el desarrollo del TIE Agresor, Sistemas de Flota Sienar antepuso las prestaciones y la versatilidad a la mera eficiencia en costes.',
        it:
          'Durante lo sviluppo del TIE Aggressor, la Sienar Fleet Systems diede la precedenza alle sue prestazioni e alla sua versatilità, anziché alla cruda efficienza in costo.',
        pl:
          'Podczas projektowania myśliwca TIE Aggressor inżynierowie Sienar Fleet Systems skupili się na osiągach i wszechstronności, nie licząc się z kosztami.',
        pt:
          'Durante o desenvolvimento da TIE aggressor, a Sienar Fleet Systemsvalorizou mais a sua performance e versatilidade do que o custo-benefício.',
        zh:
          'During the development of the TIE aggressor, Sienar Fleet Systems valued performance and versatility over raw cost efficiency.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_130.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/da3e614bbf97778bcc3e0c4f4266548d.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/b6a542a48607a1e2bb75c1625da407e1.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/dfc71d1427de6a8ad3f9cc389d959c6d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/d6c7b37f2010d3f7150ef7ee37f3f56b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/a87856f1ac93390b115b33f3fea5f587.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/09b2d2456f7e14fc7ea24df10accef8b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_130.png',
      },
      slots: ['Turret', 'Missile', 'Missile', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_130.jpg',
      ffg: 130,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

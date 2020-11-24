import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Delta-7 Aethersprite',
    de: 'Delta-7 Aethersprite',
    fr: 'Aethersprite Delta-7',
    it: 'Delta-7 Classe Aethersprite',
    pl: 'Delta-7 Aethersprite',
    pt: 'Delta-7 Aethersprite',
    zh: 'Delta-7 Aethersprite',
    es: 'Delta-7 Duende del Éter',
  },
  xws: 'delta7aethersprite',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
    '5FW',
    '5KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Purple', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Fine-tuned Controls',
      de: 'Präzisionssteuerung',
      fr: 'Commandes Réactives',
      es: 'Controles ultrasensibles',
      it: 'Comandi Reattivi',
      pl: 'Dostrojone systemy sterownicze',
      pt: 'Fine-tuned Controls',
      zh: 'Fine-tuned Controls',
    },
    text: {
      en:
        'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      de:
        'Nachdem du ein Manöver vollständig ausgeführt hast, darfst du 1 [Force] ausgeben, um eine [Boost]- oder [Barrel Roll]-Aktion durchzuführen.',
      fr:
        'après avoir entièrement exécuté une manœuvre, vous pouvez dépenser 1 [Force] pour effectuer une action [Boost] ou [Barrel Roll].',
      es:
        'Después de que ejecutes completamente una maniobra, puedes gastar 1 [Force] para realizar una acción [Boost] o [Barrel Roll].',
      it:
        'Dopo che hai eseguito completamente una manovra, puoi spendere 1 [Force] per effettuare 1 azione [Boost] or [Barrel Roll].',
      pl:
        'Gdy wykonasz pełny manewr, możesz wydać 1 [Force], aby wykonać akcję [Boost] albo [Barrel Roll].',
      pt:
        'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      zh:
        'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Jedi Knight',
        de: 'Jedi-Ritter',
        fr: 'Chevalier Jedi',
        es: 'Caballero jedi',
        it: 'Cavaliere Jedi',
        pl: 'Rycerz Jedi',
        pt: 'Jedi Knight',
        zh: 'Jedi Knight',
      },
      initiative: 3,
      limited: 0,
      xws: 'jediknight',
      text: {
        en:
          'When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.',
        de:
          'Nach Ausbruch der Klonkriege gelobten die Jedi-Ritter die Republik zu bewahren und übernahmen das Kommando über eine Legion von Klontruppen, die sie seither in die Schlacht führen.',
        fr:
          'Lorsque la Guerre des Clones débuta, les chevaliers Jedi rallièrent la cause de la sauvegarde de la République, prenant le commandement de légions composées de soldats clones et les menant au combat.',
        es:
          'Cuando las Guerras Clon dieron comienzo, los caballeros jedi se sumaron a la causa por la preservación de la República tomando el mando de legiones de soldados clon y liderándolos en batalla..',
        it:
          'Quando le Guerre dei Cloni ebbero inizio, i Cavalieri Jedi accorsero alla difesa della Repubblica, assumendo il comando di legioni di cloni soldato e guidandole in battaglia.',
        pl:
          'Gdy rozpoczęły się Wojny Klonów, rycerze Jedi wystąpili zbrojnie, aby bronić Republiki i stanęli na czele legionów żołnierzy-klonów, prowadząc ich w boju.',
        pt:
          'When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.',
        zh:
          'When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      hyperspace: true,
      epic: true,
      cost: 37,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 515,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d3bf6f2f5482c2b68a4d3d02cd758a68.jpg',
    },
    {
      name: {
        en: 'Obi-Wan Kenobi',
        de: 'Obi-Wan Kenobi',
        fr: 'Obi-Wan Kenobi',
        es: 'Obi-Wan Kenobi',
        it: 'Obi-Wan Kenobi',
        pl: 'Obi-Wan Kenobi',
        pt: 'Obi-Wan Kenobi',
        zh: 'Obi-Wan Kenobi',
      },
      caption: {
        en: 'Guardian of the Republic',
        de: 'Wächter der Republik',
        fr: 'Gardien de la République',
        es: 'Guardián de la República',
        it: 'Guardiano della Repubblica',
        pl: 'Strażnik Republiki',
        pt: 'Guardian of the Republic',
        zh: 'Guardian of the Republic',
      },
      initiative: 5,
      limited: 1,
      xws: 'obiwankenobi',
      ability: {
        en:
          'After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 0-2 einen Fokusmarker ausgegeben hat, darfst du 1 [Force] ausgeben. Falls du das tust, erhält jenes Schiff 1 Fokusmarker.',
        fr:
          "Après qu'un vaisseau allié à portée 0-2 a dépensé un marqueur de concentration, vous pouvez dépenser 1 [Force]. Dans ce cas, ce vaisseau allié gagne 1 marqueur de concentration.",
        es:
          'Después de que una nave aliada que tengas a alcance 0-2 gaste una ficha de Concentración, puedes gastar 1 [Force]. Si lo haces, esa nave recibe 1 ficha de Concentración.',
        it:
          'Dopo che una nave amica a gittata 0-2 ha speso un segnalino concentrazione, puoi spendere 1 [Force]. Se lo fai, quella nave ottiene 1 segnalino concentrazione.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-2 wyda żeton skupienia, możesz wydać 1 [Force]. Jeżeli tak zrobisz, tamten statek otrzymuje 1 żeton skupienia.',
        pt:
          'After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
        zh:
          'After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 49,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 511,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f449693ccfd6529244ea7765eed2f83f.jpg',
    },
    {
      name: {
        en: 'Plo Koon',
        de: 'Plo Koon',
        fr: 'Plo Koon',
        es: 'Plo Koon',
        it: 'Plo Koon',
        pl: 'Plo Koon',
        pt: 'Plo Koon',
        zh: 'Plo Koon',
      },
      caption: {
        en: 'Serene Mentor',
        de: 'Besonnener Mentor',
        fr: 'Mentor Serein',
        es: 'Mentor sereno',
        it: 'Mentore Sereno',
        pl: 'Spokojny mentor',
        pt: 'Serene Mentor',
        zh: 'Serene Mentor',
      },
      initiative: 5,
      limited: 1,
      xws: 'plokoon',
      ability: {
        en:
          'At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 [Force] ausgeben und ein anderes befreundetes Schiff in Reichweite 0-2 wählen. Falls du das tust, darfst du 1 grünen Marker auf es transferieren oder 1 orangefarbenen Marker von ihm auf dich transferieren.',
        fr:
          "Au début de la phase d'engagement, vous pouvez dépenser 1 [Force] et choisir un autre vaisseau allié à portée 0-2. Dans ce cas, vous pouvez transférer 1 marqueur vert à ce vaisseau ou transférer 1 marqueur orange de ce vaisseau au vôtre.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 [Force] y elegir otra nave aliada que tengas a alcance 0-2. Si lo haces, puedes transferir 1 ficha verde a esa nave o transferir una ficha naranja de esa nave a ti mismo.',
        it:
          "All'inizio della Fase di Ingaggio, puoi spendere 1 [Force] e scegliere 1 altra nave amica a gittata 0-2. Se lo fai, puoi trasferire 1 segnalino verde su quella nave oppure trasferire 1 segnalino arancione da quella nave su di te.",
        pl:
          'Na początku fazy walki możesz wydać 1 [Force] i wskazać inny przyjazny statek w zasięgu 0-2. Jeżeli tak zrobisz, możesz przenieść 1 zielony żeton z ciebie na wskazany statek albo przenieść 1 pomarańczowy ze wskazanego statku na ciebie.',
        pt:
          'At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.',
        zh:
          'At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 45,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 513,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/a4f58c67ecedcb9fcfa6ee45613c002e.jpg',
    },
    {
      name: {
        en: 'Saesee Tiin',
        de: 'Saesee Tiin',
        fr: 'Saesee Tiin',
        es: 'Saesee Tiin',
        it: 'Saesee Tiin',
        pl: 'Saesee Tiin',
        pt: 'Saesee Tiin',
        zh: 'Saesee Tiin',
      },
      caption: {
        en: 'Prophetic Pilot',
        de: 'Prophetischer Pilot',
        fr: 'Pilote Prophétique',
        es: 'Piloto profético',
        it: 'Pilota Profetico',
        pl: 'Proroczy pilot',
        pt: 'Prophetic Pilot',
        zh: 'Prophetic Pilot',
      },
      initiative: 4,
      limited: 1,
      xws: 'saeseetiin',
      ability: {
        en:
          'After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 0-2 sein Rad aufgedeckt hat, darfst du 1 [Force] ausgeben. Falls du das tust, stelle sein Rad auf ein anderes Manöver derselben Geschwindigkeit und Schwierigkeit ein.',
        fr:
          "Après qu'un vaisseau allié à portée 0-2 a révélé son cadran, vous pouvez dépenser 1 [Force]. Dans ce cas, réglez son cadran sur une autre manœuvre de même vitesse et de même difficulté.",
        es:
          'Después de que una nave aliada que tengas a alcance 0-2 revele su selector, puedes gastar 1 [Force]. Si lo haces, establece en su selector otra maniobra que tenga la misma velocidad y dificultad que la original.',
        it:
          "Dopo che una nave amica a gittata 0-2 ha rivelato il suo indicatore, puoi spendere 1 [Force]. Se lo fai, seleziona un'altra manovra della stessa velocità e difficoltà sul suo indicatore.",
        pl:
          'Gdy przyjazny statek w zasięgu 0-2 odsłoni swoją tarczę manewrów, możesz wydać 1 [Force]. Jeżeli tak zrobisz, ustaw na jego tarczy inny manewr o takiej samej prędkości i trudności.',
        pt:
          'After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.',
        zh:
          'After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 42,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 514,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/e36d5e616e0b0135b0faa1c9f46992a1.jpg',
    },
    {
      name: {
        en: 'Mace Windu',
        de: 'Mace Windu',
        fr: 'Mace Windu',
        es: 'Mace Windu',
        it: 'Mace Windu',
        pl: 'Mace Windu',
        pt: 'Mace Windu',
        zh: 'Mace Windu',
      },
      caption: {
        en: 'Harsh Traditionalist',
        de: 'Strenger Traditionalist',
        fr: 'Traditionnaliste Convaincu',
        es: 'Tradicionalista severo',
        it: 'Tradizionalista Severo',
        pl: 'Surowy tradycjonalista',
        pt: 'Harsh Traditionalist',
        zh: 'Harsh Traditionalist',
      },
      initiative: 4,
      limited: 1,
      xws: 'macewindu',
      ability: {
        en: 'After you fully execute a red maneuver, recover 1 [Force].',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt hast, stelle 1 [Force] wieder her.',
        fr:
          'Après avoir entièrement exécuté une manœuvre rouge, récupérez 1 [Force].',
        es:
          'Después de que ejecutes completamente una maniobra roja, recuperas 1 [Force].',
        it:
          'Dopo che hai eseguito completamente una manovra rossa, recupera 1 [Force].',
        pl: 'Gdy wykonasz pełny czerwony manewr, odzyskujesz 1 [Force].',
        pt: 'After you fully execute a red maneuver, recover 1 [Force].',
        zh: 'After you fully execute a red maneuver, recover 1 [Force].',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 46,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 512,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/ba6c851af3b8f650d8dcb865a05636f2.jpg',
    },
    {
      name: {
        en: 'Anakin Skywalker',
        de: 'Anakin Skywalker',
        fr: 'Anakin Skywalker',
        es: 'Anakin Skywalker',
        it: 'Anakin Skywalker',
        pl: 'Anakin Skywalker',
        pt: 'Anakin Skywalker',
        zh: 'Anakin Skywalker',
      },
      caption: {
        en: 'Hero of the Republic',
        de: 'Held der Republik',
        fr: 'Héros de la République',
        es: 'Héroe de la República',
        it: 'Eroe della Repubblica',
        pl: 'Bohater Republiki',
        pt: 'Hero of the Republic',
        zh: 'Hero of the Republic',
      },
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker',
      ability: {
        en:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, falls ein feindliches Schiff in deinem [Front Arc] in Reichweite 0-1 oder in deinem [Bullseye Arc] ist, darfst du 1 [Force] ausgeben, um 1 Stressmarker zu entfernen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre, s'il y a un vaisseau ennemi dans votre [Front Arc] à portée 0-1 ou dans votre [Bullseye Arc], vous pouvez dépenser 1 [Force] pour retirer 1 marqueur de stress.",
        es:
          'Después de que ejecutes completamente una maniobra, si tienes alguna nave enemiga en tu [Front Arc] at range a alcance 0-1 o en tu [Bullseye Arc], puedes gastar 1 [Force] para retirar 1 ficha de Tensión.',
        it:
          'Dopo che hai eseguito completamente una manovra, se ci sono navi nemiche nel tuo [Front Arc] a gittata 0-1 o nel tuo [Bullseye Arc], puoi spendere 1 [Force] per rimuovere 1 segnalino tensione.',
        pl:
          'Gdy wykonasz pełny manewr, jeśli w twojej [Front Arc] w zasięgu 0-1 albo w twoim [Bullseye Arc], jest wrogi statek, możesz wydać 1 [Force], aby usunąć 1 żeton stresu.',
        pt:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
        zh:
          'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 61,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 507,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/dc121e1b285f30e4708bda6c0594b55f.jpg',
    },
    {
      name: {
        en: 'Ahsoka Tano',
        de: 'Ahsoka Tano',
        fr: 'Ahsoka Tano',
        es: 'Ahsoka Tano',
        it: 'Ahsoka Tano',
        pl: 'Ahsoka Tano',
        pt: 'Ahsoka Tano',
        zh: 'Ahsoka Tano',
      },
      caption: {
        en: '"Snips"',
        de: 'Snips"',
        fr: '« Chipie »',
        es: '"Chulita"',
        it: '"Furbetta"',
        pl: '„Smark"',
        pt: '"Snips"',
        zh: '"Snips"',
      },
      initiative: 3,
      limited: 1,
      xws: 'ahsokatano',
      ability: {
        en:
          'After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, darfst du ein befreundetes Schiff in Reichweite 0-1 wählen und 1 [Force] ausgeben. Jenes Schiff darf eine Aktion durchführen, auch falls es gestresst ist.',
        fr:
          "Après avoir entièrement exécuté une manœuvre, vous pouvez choisir un vaisseau allié à portée 0-1 et dépenser 1 [Force]. Ce vaisseau peut effectuer une action, même s'il est stressé.",
        es:
          'Después de que ejecutes completamente una maniobra, puedes elegir una nave aliada que tengas a alcance 0-1 y gastar 1 [Force]. Esa nave puede realizar una acción, incluso aunque esté bajo tensión.',
        it:
          'Dopo che hai eseguito completamente una manovra, puoi scegliere 1 nave amica a gittata 0-1 e spendere 1 [Force]. Se lo fai, quella nave può effettuare 1 azione, anche mentre è in tensione.',
        pl:
          'Gdy wykonasz pełny manewr, możesz wskazać przyjazny statek w zasięgu 0-1 i wydać 1 [Force]. Wskazany statek może wykonać akcję, nawet jeżeli posiada żeton stresu.',
        pt:
          'After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.',
        zh:
          'After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 43,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 510,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/0fc229b9b79c9f6c750a587614729293.jpg',
    },
    {
      name: {
        en: 'Barriss Offee',
        de: 'Barriss Offee',
        fr: 'Barriss Offee',
        es: 'Barriss Offee',
        it: 'Barriss Offee',
        pl: 'Barriss Offee',
        pt: 'Barriss Offee',
        zh: 'Barriss Offee',
      },
      caption: {
        en: 'Conflicted Padawan',
        de: 'Innerlich zerrissener Padawan',
        fr: 'Padawan Tourmentée',
        es: 'Padawan turbada',
        it: 'Padawan Combattuta',
        pl: 'Niespokojna padawan',
        pt: 'Conflicted Padawan',
        zh: 'Conflicted Padawan',
      },
      initiative: 4,
      limited: 1,
      xws: 'barrissoffee',
      ability: {
        en:
          'While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 einen Angriff durchführt, falls der Verteidiger in seinem [Bullseye Arc] ist, darfst du 1 [Force] ausgeben, um 1 [Focus]-Ergebnis in ein [Hit]-Ergebnis oder 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis zu ändern.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 effectue une attaque, si le défenseur est dans son [Bullseye Arc], vous pouvez dépenser 1 [Force] pour changer 1 résultat [Focus] en un résultat [Hit] ou 1 résultat [Hit] en un résultat [Critical Hit].",
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 efectúa un ataque, si el defensor está situado en el [Bullseye Arc] del atacante, puedes gastar 1 [Force] para cambiar 1 resultado [Focus] por un resultado [Hit] o 1 resultado [Hit] por un resultado [Critical Hit].',
        it:
          'Mentre una nave amica a gittata 0-2 effettua un attacco, se il difensore è nel suo [Bullseye Arc], puoi spendere 1 [Force] per cambiare 1 risultato [Focus] in 1 risultato [Hit] oppure 1 risultato [Hit] in 1 risultato [Critical Hit].',
        pl:
          'Gdy przyjazny statek w zasięgu 0-2 wykonuje atak i obrońca znajduje się w jego [Bullseye Arc], możesz wydać 1 [Force], aby zmienić 1 wynik [Focus] na wynik [Hit] albo 1 wynik [Hit] na wynik [Critical Hit].',
        pt:
          'While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.',
        zh:
          'While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 38,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 509,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/6eb248dfda52dc29a8aa4fda7e414eab.jpg',
    },
    {
      name: {
        en: 'Luminara Unduli',
        de: 'Luminara Unduli',
        fr: 'Luminara Unduli',
        es: 'Luminara Unduli',
        it: 'Luminara Unduli',
        pl: 'Luminara Unduli',
        pt: 'Luminara Unduli',
        zh: 'Luminara Unduli',
      },
      caption: {
        en: 'Wise Protector',
        de: 'Weise Beschützerin',
        fr: 'Protectrice Réfléchie',
        es: 'Protectora sabia',
        it: 'Saggia Protettrice',
        pl: 'Mądra protektorka',
        pt: 'Wise Protector',
        zh: 'Wise Protector',
      },
      initiative: 4,
      limited: 1,
      xws: 'luminaraunduli',
      ability: {
        en:
          "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 verteidigt, falls es nicht im [Bullseye Arc] des Angreifers ist, darfst du 1 [Force] ausgeben. Falls du das tust, ändere 1 [Critical Hit]-Ergebnis in ein [Hit]-Ergebnis oder 1[Hit]-Ergebnis in ein [Focus]-Ergebnis.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 défend, s'il n'est pas dans l'[Bullseye Arc] de l'attaquant, vous pouvez dépenser 1 [Force]. Dans ce cas, changez 1 résultat [Critical Hit] en un résultat [Hit] ou 1 résultat [Hit] en un résultat [Focus].",
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 se defiende, si esa nave no está en el [Bullseye Arc] del atacante, puedes gastar 1 [Force]. Si lo haces, cambia 1 resultado [Critical Hit] por un resultado [Hit] o 1 resultado [Hit] por un resultado [Focus].',
        it:
          "Mentre una nave amica a gittata 0-2 difende, se non è nel [Bullseye Arc] dell'attaccante, puoi spendere 1 [Force]. Se lo fai, cambia 1 risultato [Critical Hit] in 1 risultato [Hit] oppure 1 risultato [Hit] in 1 risultato [Focus].",
        pl:
          'Gdy przyjazny statek w zasięgu 0-2 się broni i nie znajduje się w [Bullseye Arc] atakującego, możesz wydać 1 [Force]. Jeżeli tak zrobisz, zmień 1 wynik [Critical Hit] na wynik [Hit] albo 1 wynik [Hit] na wynik [Focus].',
        pt:
          "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
        zh:
          "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      hyperspace: false,
      epic: true,
      cost: 42,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      ffg: 508,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/22519908330c72696863815565a2beda.jpg',
    },
  ],
  ffg: 61,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Delta-7.png',
};

export default t;

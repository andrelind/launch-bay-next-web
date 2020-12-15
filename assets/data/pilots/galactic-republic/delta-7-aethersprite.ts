import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Delta-7 Aethersprite',
    fr: 'Aethersprite Delta-7',
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
      name: { en: 'Obi-Wan Kenobi' },
      caption: {
        en: 'Guardian of the Republic',
        de: 'Wächter der Republik',
        fr: 'Gardien de la République',
        es: 'Guardián de la República',
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
      name: { en: 'Plo Koon' },
      caption: {
        en: 'Serene Mentor',
        de: 'Besonnener Mentor',
        fr: 'Mentor Serein',
        es: 'Mentor sereno',
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
      name: { en: 'Saesee Tiin' },
      caption: {
        en: 'Prophetic Pilot',
        de: 'Prophetischer Pilot',
        fr: 'Pilote Prophétique',
        es: 'Piloto profético',
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
      name: { en: 'Mace Windu' },
      caption: {
        en: 'Harsh Traditionalist',
        de: 'Strenger Traditionalist',
        fr: 'Traditionnaliste Convaincu',
        es: 'Tradicionalista severo',
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
      name: { en: 'Anakin Skywalker' },
      caption: {
        en: 'Hero of the Republic',
        de: 'Held der Republik',
        fr: 'Héros de la République',
        es: 'Héroe de la República',
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
      name: { en: 'Ahsoka Tano' },
      caption: {
        en: '"Snips"',
        de: 'Snips"',
        fr: '« Chipie »',
        es: '"Chulita"',
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
      name: { en: 'Barriss Offee' },
      caption: {
        en: 'Conflicted Padawan',
        de: 'Innerlich zerrissener Padawan',
        fr: 'Padawan Tourmentée',
        es: 'Padawan turbada',
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
      name: { en: 'Luminara Unduli' },
      caption: {
        en: 'Wise Protector',
        de: 'Weise Beschützerin',
        fr: 'Protectrice Réfléchie',
        es: 'Protectora sabia',
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

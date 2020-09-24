import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Sith Infiltrator',
    de: 'Sith-Infiltrator',
    fr: 'Infiltrateur Sith',
    it: 'Infiltratore Sith',
    pl: 'Infiltrator Sithów',
    pt: 'Sith Infiltrator',
    zh: 'Sith Infiltrator',
    es: 'Infiltrador sith',
  },
  xws: 'sithinfiltrator',
  size: 'Large',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  pilots: [
    {
      name: {
        en: 'Darth Maul',
        de: 'Darth Maul',
        fr: 'Dark Maul',
        es: 'Darth Maul',
        it: 'Darth Maul',
        pl: 'Darth Maul',
        pt: 'Darth Maul',
        zh: 'Darth Maul',
      },
      caption: {
        en: 'Sith Assassin',
        de: "Sidious' Schüler",
        fr: 'Assassin Sith',
        es: 'Asesino sith',
        it: 'Assassino Sith',
        pl: 'Sith zabójca',
        pt: 'Sith Assassin',
        zh: 'Sith Assassin',
      },
      initiative: 5,
      limited: 1,
      xws: 'darthmaul',
      force: { value: 3, recovers: 1, side: ['dark'] },
      ability: {
        en:
          'After you perform an attack, you may spend 2 [Force] to perform a bonus primary attack against a different target. If your attack missed, you may perform that bonus primary attack against the same target instead.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, darfst du 2 [Force] ausgeben, um einen Bonus-Primärangriff gegen ein anderes Ziel durchzuführen. Falls dein Angriff verfehlt hat, darfst du jenen Bonus- Primärangriff stattdessen gegen dasselbe Ziel durchführen.',
        fr:
          'Après avoir effectué une attaque, vous pouvez dépenser 2 [Force] pour effectuer une attaque principale bonus contre une cible différente. Si votre attaque était ratée, vous pouvez effectuer cette attaque principale bonus contre la même cible à la place.',
        es:
          'Después de que efectúes un ataque, puedes gastar 2 [Force] para efectuar un ataque principal adicional contra un objetivo diferente. Si tu primer ataque falló, puedes optar por efectuar este ataque principal adicional contra ese mismo objetivo.',
        it:
          "Dopo che hai effettuato un attacco, puoi spendere 2 [Force] per effettuare 1 attacco primario bonus contro un bersaglio diverso. Se il tuo attacco ha mancato, puoi invece effettuare quell'attacco primario bonus contro lo stesso bersaglio.",
        pl:
          'Gdy wykonasz atak, możesz wydać 2 [Force], aby wykonać dodatkowy atak podstawowy przeciwko innemu celowi. Jeżeli twój atak chybił, zamiast tego możesz wykonać ten dodatkowy atak podstawowy przeciwko temu samemu celowi.',
        pt:
          'After you perform an attack, you may spend 2 [Force] to perform a bonus primary attack against a different target. If your attack missed, you may perform that bonus primary attack against the same target instead.',
        zh:
          'After you perform an attack, you may spend 2 [Force] to perform a bonus primary attack against a different target. If your attack missed, you may perform that bonus primary attack against the same target instead.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/95428161db7de4adcea6fa8bcbf9de2f.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d1e0e0cab3bb23db55b85ad2f48a665f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/d2e4bbb77b8a52f7e4da36970e959365.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/14fc458034a7da81186bacd18c24c0d9.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/e98415f740f6618c1608306d1c6c56d9.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/84beb427182c1f7a655c2badf264133c.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/95428161db7de4adcea6fa8bcbf9de2f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/95428161db7de4adcea6fa8bcbf9de2f.png',
      },
      hyperspace: true,
      epic: true,
      cost: 65,
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Force Power',
        'Tactical Relay',
      ],
      ffg: 503,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/04b1c1fea3735eb844455dd3278346d0.jpg',
    },
    {
      name: {
        en: 'Count Dooku',
        de: 'Count Dooku',
        fr: 'Comte Dooku',
        es: 'Count Dooku',
        it: 'Counte Dooku',
        pl: 'Hrabia Dooku',
        pt: 'Count Dooku',
        zh: 'Count Dooku',
      },
      caption: {
        en: 'Darth Tyranus',
        de: 'Darth Tyranus',
        fr: 'Dark Tyranus',
        es: 'Darth Tyranus',
        it: 'Darth Tyranus',
        pl: 'Darth Tyranus',
        pt: 'Darth Tyranus',
        zh: 'Darth Tyranus',
      },
      initiative: 3,
      limited: 1,
      xws: 'countdooku',
      force: { value: 3, recovers: 1, side: ['dark'] },
      ability: {
        en:
          'After you defend, if the attacker is in your firing arc, you may spend 1 [Force] to remove 1 of your blue or red tokens. After you perform an attack that hits, you may spend 1 [Force] to perform an action.',
        de:
          'Nachdem du verteidigt hast, falls der Angreifer in deinem Feuerwinkel ist, darfst du 1 [Force] ausgeben, um 1 deiner blauen oder roten Marker zu entfernen. Nachdem du einen Angriff durchgeführt hast, der getroffen hat, darfst du 1 [Force] ausgeben, um eine Aktion durchzuführen.',
        fr:
          "Après avoir défendu, si l'attaquant est dans votre arc de tir, vous pouvez dépenser 1 [Force] pour retirer 1 de vos marqueurs bleus ou rouges. Après avoir effectué une attaque qui touche, vous pouvez dépenser 1 [Force] pour effectuer une action.",
        es:
          'Después de que te defiendas, si el atacante está situado en tu arco de fuego, puedes gastar 1 [Force] para retirar 1 de tus fichas azules o rojas. Después de que efectúes un ataque que impacte, puedes gastar 1 [Force] para realizar una acción.',
        it:
          "Dopo che hai difeso, se l'attaccante è nel tuo arco di fuoco, puoi spendere 1 [Force] per rimuovere 1 tuo segnalino blu o rosso. Dopo che hai effettuato un attacco che ha colpito, puoi spendere 1 [Force] per effettuare 1 azione.",
        pl:
          'Gdy zakończysz obronę, jeśli atakujący cię statek znajduje się w twojej strefie rażenia, możesz wydać 1 [Force], aby usunąć 1 ze swoich niebieskich albo czerwonych żetonów. Gdy wykonasz atak, który trafił, możesz wydać 1 [Force], aby wykonać akcję.',
        pt:
          'After you defend, if the attacker is in your firing arc, you may spend 1 [Force] to remove 1 of your blue or red tokens. After you perform an attack that hits, you may spend 1 [Force] to perform an action.',
        zh:
          'After you defend, if the attacker is in your firing arc, you may spend 1 [Force] to remove 1 of your blue or red tokens. After you perform an attack that hits, you may spend 1 [Force] to perform an action.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/88959087710ec5a80a16dd93573f149d.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/49876e76d41814b9d0b7e7682c3c5004.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f7145e2c49d51e6b39ca88898a05534e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/055eb78bce16620cfa296f1fa163d38c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/fa3a3cdbf3a57d467c0bae06d95f0f2d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/38abcf8d95b03667efca2cb859bed647.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/88959087710ec5a80a16dd93573f149d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/88959087710ec5a80a16dd93573f149d.png',
      },
      hyperspace: true,
      epic: true,
      cost: 63,
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Force Power',
        'Tactical Relay',
      ],
      ffg: 504,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/65eabe68c7d1ae072442d8c8808414db.jpg',
    },
    {
      name: {
        en: 'Dark Courier',
        de: 'Dunkler Bote',
        fr: 'Messager Noir',
        es: 'Mensajero oscuro',
        it: 'Corriere Oscuro',
        pl: 'Mroczny kurier',
        pt: 'Dark Courier',
        zh: 'Dark Courier',
      },
      initiative: 2,
      limited: 0,
      xws: 'darkcourier',
      text: {
        en:
          'The vessel called the Scimitar was heavily modified, equipped with stealth technologies and advanced surveillance devices for infiltration and assassination missions.',
        de:
          'Die Scimitar war ein stark modifiziertes Raumschiff, ausgestattet mit Tarntechnologie und modernen Überwachungsgeräten für Infiltrations und Personenbeseitigungseinsätze.',
        fr:
          "Le Scimitar est un appareil lourdement modifié, équipé de technologies furtives et de dispositifs de surveillance avancés, afin de mener des missions d'infiltration et d'assassinat.",
        es:
          'La nave que recibía el nombre de Cimitarra contaba con todo tipo de modificaciones y había sido equipada con tecnologías de sigilo y avanzados dispositivos de vigilancia para misiones de infiltración y asesinato.',
        it:
          'Il vascello chiamato Scimitar era pesantemente modificato, dotato di tecnologie schermanti e congegni avanzati di sorveglianza ideali per le missioni di infiltrazione e di assassinio.',
        pl:
          'Statek o nazwie Sejmitar posiada liczne modyfikacje i jest wyposażony w technologię maskowania, a także zaawansowane urządzenia zwiadowcze, które sprawiają, że idealnie nadaje się do misji rozpoznawczych oraz likwidacji kluczowych celów.',
        pt:
          'The vessel called the Scimitar was heavily modified, equipped with stealth technologies and advanced surveillance devices for infiltration and assassination missions.',
        zh:
          'The vessel called the Scimitar was heavily modified, equipped with stealth technologies and advanced surveillance devices for infiltration and assassination missions.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/132f1957b904c890b94bf3aaf2a944ce.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/40b59a592571b5683cf50b9b806ce52e.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0442487a12e31753af3e8addce7c1a5c.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b7e446fbcbd96906ada451126ba55019.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/2040cbe29cc6b7d8e7ca871cf86eb522.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/d0c21867ab80fa322947e84508893604.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/132f1957b904c890b94bf3aaf2a944ce.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/132f1957b904c890b94bf3aaf2a944ce.png',
      },
      hyperspace: false,
      epic: true,
      cost: 51,
      slots: [
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Tactical Relay',
      ],
      ffg: 506,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8b9c158df033daab2ea6acecd29c5c0d.jpg',
    },
    {
      name: {
        en: '0-66',
        de: '0-66',
        fr: '0-66',
        es: '0-66',
        it: '0-66',
        pl: '0-66',
        pt: '0-66',
        zh: '0-66',
      },
      xws: '066',
      cost: 49,
      slots: [
        'Talent',
        'Cannon',
        'Torpedo',
        'Crew',
        'Crew',
        'Device',
        'Modification',
        'Title',
        'Tactical Relay',
      ],
      ffg: 505,
      caption: {
        en: 'Sinister Automaton',
        de: 'Niederträchtiger Roboter',
        fr: 'Automate Sinistre',
        es: 'Autómata siniestro',
        it: 'Automa Sinistro',
        pl: 'Złowrogi automat',
        pt: 'Sinister Automaton',
        zh: 'Sinister Automaton',
      },
      initiative: 3,
      limited: 1,
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c0a65aa29f085d517d907bc7799e4146.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9edd9bb6846e77723d8f0381bb7909aa.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f58f50f306988fe3a4cfde10438c7358.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/4de0ca7f88be4f71d012dd9c58b0e719.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/cc65451b3788f9795588ab2cf14dcd97.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/a97c01d170bc4dd6739aba947b51e31d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/61e42cea70f6e3ce3f13047a3efd96c5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9edd9bb6846e77723d8f0381bb7909aa.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/9edd9bb6846e77723d8f0381bb7909aa.png',
      },
      ability: {
        en:
          'After you defend, you may spend 1 calculate token to perform an action.',
        de:
          'Nachdem du verteidigt hast, darfst du 1 Berechnungsmarker ausgeben, um eine Aktion durchzuführen.',
        fr:
          'Après avoir défendu, vous pouvez dépenser 1 marqueur de calcul pour effectuer une action.',
        es:
          'Después de que te defiendas, puedes gastar 1 ficha de Cálculos para realizar una acción.',
        it:
          'Dopo che hai difeso, puoi spendere 1 segnalino calcolo per effettuare 1 azione.',
        pl:
          'Gdy zakończysz obronę, możesz wydać 1 żeton obliczeń, aby wykonać akcję.',
        pt:
          'After you defend, you may spend 1 calculate token to perform an action.',
        zh:
          'After you defend, you may spend 1 calculate token to perform an action.',
      },
      hyperspace: true,
      epic: true,
    },
  ],
  ffg: 60,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_SithInfiltrator.png',
};

export default t;

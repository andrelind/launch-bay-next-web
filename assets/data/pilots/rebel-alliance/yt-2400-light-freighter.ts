import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'YT-2400 Light Freighter',
    de: 'Leichter YT-2400-Frachter',
    fr: 'Cargo léger YT-2400',
    it: 'Mercantile Leggero YT-2400',
    pl: 'Lekki frachtowiec YT-2400',
    pt: 'Cargueiro Leve YT-2400',
    zh: 'YT-2400 Light Freighter',
    es: 'Carguero ligero YT-2400',
  },
  xws: 'yt2400lightfreighter',
  ffg: 5,
  size: 'Large',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  ability: {
    name: {
      en: 'Sensor Blindspot',
      de: 'Toter Winkel',
      es: 'Punto ciego en los sensores',
      it: 'Punto Cieco dei Sensori',
      pl: 'Martwy punkt czujników',
      pt: 'Ponto Cego nos Sensores',
      zh: 'Sensor Blindspot',
      fr: 'Angle Mort des Senseurs',
    },
    text: {
      en:
        'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
      de:
        'Solange du einen Primärangriff in Reichweite 0-1 durchführst, wende den Bonus für Reichweite 0-1 nicht an und wirf 1 Angriffswürfel weniger.',
      es:
        'Mientras efectúas un ataque principal a alcance de ataque 0-1, no apliques el modificador por alcance 0-1 y tira 1 dado de ataque menos.',
      fr:
        "Tant que vous effectuez une attaque principale à portée d'attaque 0-1, n'appliquez pas le bonus de portée 0-1 et lancez 1 dé d'attaque en moins.",
      it:
        'Mentre effettui un attacco primario a gittata di attacco 0-1, non applicare il bonus di gittata 0-1 e tira 1 dado di attacco in meno.',
      pl:
        'Gdy wykonujesz atak podstawowy w zasięgu ataku 0-1, nie stosujesz premii za zasięg 0-1 i rzucasz 1 kością ataku mniej.',
      pt:
        'Quando você realizar um ataque primário com alcance de ataque 0-1, não aplique o bônus de alcance 0-1 e role 1 dado de ataque a menos.',
      zh:
        'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_YT-2400.png',
  pilots: [
    {
      name: {
        en: '"Leebo"',
        de: '„Leebo"',
        fr: '"Leebo"',
        es: '"Leebo"',
        it: '"Leebo"',
        pl: '„Leebo"',
        pt: '"Leebo"',
        zh: '"Leebo"',
      },
      caption: {
        en: 'Dry-Witted Droid',
        de: 'Droide mit trockenem Humor',
        fr: 'Dry-Witted Droid',
        es: 'Droide sarcástico',
        it: 'Droide Sarcastico',
        pl: 'Sarkastyczny droid',
        pt: 'Droide Zombeteiro',
        zh: 'Dry-Witted Droid',
      },
      initiative: 3,
      limited: 1,
      cost: 76,
      xws: 'leebo',
      ability: {
        en:
          'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
        de:
          'Nachdem du verteidigt oder einen Angriff durchgeführt hast, falls du einen Berechnungsmarker ausgegeben hast, erhalte 1 Berechnungsmarker.',
        fr:
          "Après avoir défendu ou effectué une attaque, si vous avez dépensé un marqueur de calcul, gagnez 1 marqueur de calcul. Angle Mort des Senseurs : tant que vous effectuez une attaque principale à portée d'attaque 0-1, n'appliquez pas le bonus de portée 0-1 et lancez 1 dé d'attaque en moins.",
        es:
          'Después de que te defiendas o efectúes un ataque, si gastaste una ficha de Cálculos, recibes 1 ficha de Cálculos.',
        it:
          'Dopo che hai difeso o effettuato un attacco, se hai speso segnalini calcolo, ottieni 1 segnalino calcolo.',
        pl:
          'Gdy zakończysz obronę albo atak, jeżeli wydałeś żeton obliczeń, otrzymujesz 1 żeton obliczeń.',
        pt:
          'Após defender ou realizar um ataque,se você gastou uma ficha de cálculo,receba 1 ficha de cálculo.',
        zh:
          'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_78.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/9edce09de88d2e130917f9f243c0e17e.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/e6d5db74fc5c6cba23635ee990cc6cbf.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/932c4c6217154871c38896ba510dc8c2.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/53aef3c046d7f7322cf0b24d7ed63fb8.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/51e9d919a0cc2197dd43c91d9ebff6f9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/167ab281d0570b46b275a951b391e4c1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_78.png',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_78.jpg',
      ffg: 78,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Dash Rendar',
        de: 'Dash Rendar',
        fr: 'Dash Rendar',
        es: 'Dash Rendar',
        it: 'Dash Rendar',
        pl: 'Dash Rendar',
        pt: 'Dash Rendar',
        zh: 'Dash Rendar',
      },
      caption: {
        en: 'Hotshot Mercenary',
        de: 'Erstklassiger Söldner',
        fr: 'Mercenaire Hors Pair',
        es: 'Hábil mercenario',
        it: 'Mercenario Testa Calda',
        pl: 'Narwany najemnik',
        pt: 'Mercenário Excepcional',
        zh: 'Hotshot Mercenary',
      },
      initiative: 5,
      limited: 1,
      cost: 85,
      xws: 'dashrendar',
      ability: {
        en: 'While you move, you ignore obstacles.',
        de: 'Solange du dich bewegst, ignorierst du Hindernisse.',
        fr:
          "Tant que vous vous déplacez, ignorez les obstacles. Angle Mort des Senseurs : tant que vous effectuez une attaque principale à portée d'attaque 0-1, n'appliquez pas le bonus de portée 0-1 et lancez 1 dé d'attaque en moins.",
        es: 'Mientras te mueves, ignoras los obstáculos.',
        it: 'Mentre muovi, ignora gli ostacoli.',
        pl: 'Gdy wykonujesz ruch, ignorujesz przeszkody.',
        pt: 'Quando você se mover, ignore obstáculos.',
        zh: 'While you move, you ignore obstacles.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_77.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/06756e380b1a26d4760f125d12aecd6f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f0befecffb0c2984a14bbfa1b2c6e11d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/22a53aa2a5769d2431d2b88c94e4db5a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/3eaa80d0a51d40b79b653bc5e5ee7803.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/71b113bdd19aec694239621ce350fcd4.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/5543ee68dd718714c34109fc84835bc7.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_77.png',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_77.jpg',
      ffg: 77,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Wild Space Fringer',
        de: 'Grenzgänger aus dem Wilden Raum',
        fr: "Frontalier de l'Espace Sauvage",
        es: 'Fronterizo del Espacio Salvaje',
        it: 'Navigante dello Spazio Inesplorato',
        pl: 'Pogranicznik z Dzikiej Przestrzeni',
        pt: 'Marginal do Espaço Selvagem',
        zh: 'Wild Space Fringer',
      },
      initiative: 1,
      limited: 0,
      cost: 72,
      xws: 'wildspacefringer',
      text: {
        en:
          'Although stock YT-2400 light freighters have plenty of room for cargo, that space is often annexed to support modified weapon systems and oversized engines.',
        de:
          'Serienmäßig bietet der YT-2400 reichlich Laderaum. Allerdings opfern die meisten Besitzer einen Teil davon, um Platz für modifizierte Waffensysteme und extragroße Triebwerke zu schaffen.',
        fr:
          "Certes, le cargo léger YT-2400 possédait une soute de bonne taille, mais celle-ci était souvent encombrée de systèmes d'armement modifiés et de moteurs énormes.",
        es:
          'Aunque un carguero ligero YT-2400 recién salido de fábrica dispone de mucho espacio para la carga, a menudo se aprovecha ese espacio para instalar sistemas modificados de armamento y motores sobredimensionados.',
        it:
          "Anche se i normali mercantili leggeri YT-2400 sono dotati di spazio in abbondanza per la merce, quello spazio viene spesso dedicato all'installazione di armamenti modificati e motori sovradimensionati.",
        pl:
          'Choć w standardowej wersji frachtowce YT-2400 mają mnóstwo przestrzeni ładunkowej, bardzo często jest ona wykorzystywana na zmodyfikowane systemy uzbrojenia i większe silniki.',
        pt:
          'Apesar de os cargueiros leves YT-2400 de fábrica possuírem um grande espaço de carga, esse espaço geralmente é ocupado por sistemas bélicos modificados e motores turbinados.',
        zh:
          'Although stock YT-2400 light freighters have plenty of room for cargo, that space is often annexed to support modified weapon systems and oversized engines.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_79.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f0009de20a5c02318e4b84b62f8451d6.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a5eb13ec57a2185bbcf91e2c8d909723.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/96e5caefe98ee84572c795ddb71cb03a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1c8fef5832c6bdfbb0353ee0341b007b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f5c2f7c69b085a977bce7422f6254c54.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/440ecc9e5ea0dea8033792a6c66daea0.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_79.png',
      },
      slots: ['Missile', 'Crew', 'Illicit', 'Modification', 'Title', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_79.jpg',
      ffg: 79,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

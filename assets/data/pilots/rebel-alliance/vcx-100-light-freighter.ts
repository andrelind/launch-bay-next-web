import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'VCX-100 Light Freighter',
    de: 'Leichter VCX-100-Frachter',
    fr: 'Cargo léger VCX-100',
    it: 'Mercantile Leggero VCX-100',
    pl: 'Lekki frachtowiec VCX-100',
    pt: 'Cargueiro Leve VCX-100',
    zh: 'VCX-100 Light Freighter',
    es: 'Carguero ligero VCX-100',
  },
  xws: 'vcx100lightfreighter',
  ffg: 23,
  size: 'Large',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 10 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
  ],
  ability: {
    name: {
      en: 'Tail Gun',
      de: 'Heckgeschütz',
      es: 'Cañón de cola',
      it: 'Cannone Caudale',
      pl: 'Działko ogonowe',
      pt: 'Arma de Cauda',
      zh: 'Tail Gun',
      fr: 'Artillerie de Poupe',
    },
    text: {
      en:
        "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
      de:
        'Solange du ein angedocktes Schiff hast, hast du eine [Rear Arc]-Primärwaffe mit einem Angriffswert in Höhe des Angriffswertes der [Front Arc]-Primärwaffe deines angedockten Schiffes.',
      es:
        'Mientras tienes una nave acoplada, posees un armamento principal [Rear Arc] con un valor de Ataque igual al del armamento principal [Front Arc] de tu nave acoplada.',
      fr:
        "Tant que vous avez un vaisseau arrimé, vous bénéficiez d'une arme principale [Rear Arc] avec une valeur d'attaque égale à celle de l'attaque principale [Front Arc] du vaisseau arrimé.",
      it:
        "Mentre possiedi una nave attraccata, possiedi un'arma primaria [Rear Arc] con un valore di attacco pari al valore di attacco dell'arma primaria [Front Arc] della tua nave attraccata.",
      pl:
        'Gdy jest do ciebie zadokowany statek, dysponujesz bronią podstawową [Rear Arc], której wartość ataku jest równa wartości podstawowego ataku [Front Arc] zadokowanego do ciebie statku.',
      pt:
        'Quando tiver uma nave acoplada, você tem uma arma primária [Rear Arc] com um valor de ataque igual ao valor de ataque primário da nave acoplada [Front Arc].',
      zh:
        "While you have a docked ship, you have a primary [Rear Arc] weapon with an attack value equal to your docked ship's primary [Front Arc] attack value.",
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Ghost.png',
  pilots: [
    {
      name: {
        en: '"Chopper"',
        de: '„Chopper"',
        fr: '"Chopper"',
        es: '"Chopper"',
        it: '"Chopper"',
        pl: '„Chopper"',
        pt: 'Chopper"',
        zh: '"Chopper"',
      },
      caption: {
        en: 'Spectre-3',
        de: 'Spectre-3',
        fr: 'Spectre-3',
        es: 'Espectro-3',
        it: 'Spectre-3',
        pl: 'Widmo-3',
        pt: 'Espectro-3',
        zh: 'Spectre-3',
      },
      initiative: 2,
      limited: 1,
      cost: 67,
      xws: 'chopper',
      ability: {
        en:
          'At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.',
        de:
          'Zu Beginn der Kampfphase erhält jedes feindliche Schiff in Reichweite 0 2 Störsignalmarker.',
        fr:
          "Au début de la phase d'engagement, chaque vaisseau ennemi à portée 0 gagne 2 marqueurs de brouillage. Artillerie de Poupe : tant que vous avez un vaisseau arrimé, vous bénéficiez d'une arme principale [Rear Arc] avec une valeur d'attaque égale à celle de l'attaque principale [Front Arc] du vaisseau arrimé.",
        es:
          'Al comienzo de la fase de Enfrentamiento, toda nave enemiga que tengas a alcance 0 recibe 2 fichas de Interferencia.',
        it:
          "All'inizio della Fase di Ingaggio, ogni nave nemica a gittata 0 ottiene 2 segnalini disturbo.",
        pl:
          'Na początku fazy walki każdy wrogi statek w zasięgu 0 otrzymuje 2 żetony zakłócania.',
        pt:
          'No início da Fase de Engajamento,cada nave inimiga em alcance 0recebe 2 fichas de interferência.',
        zh:
          'At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Reinforce' },
      ],
      slots: [
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_75.jpg',
      ffg: 75,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Hera Syndulla',
        de: 'Hera Syndulla',
        fr: 'Hera Syndulla',
        es: 'Hera Syndulla',
        it: 'Hera Syndulla',
        pl: 'Hera Syndulla',
        pt: 'Hera Syndulla',
        zh: 'Hera Syndulla',
      },
      caption: {
        en: 'Spectre-2',
        de: 'Spectre-2',
        fr: 'Spectre-2',
        es: 'Espectro-2',
        it: 'Spectre-2',
        pl: 'Widmo-2',
        pt: 'Espectro-2',
        zh: 'Spectre-2',
      },
      initiative: 5,
      limited: 1,
      cost: 72,
      xws: 'herasyndulla-vcx100lightfreighter',
      ability: {
        en:
          'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
        de:
          'Nachdem du ein rotes oder blaues Manöver aufgedeckt hast, darfst du dein Rad auf ein anderes Manöver derselben Schwierigkeit einstellen.',
        fr:
          "Après avoir révélé une manœuvre bleue ou rouge, vous pouvez régler votre cadran sur une autre manœuvre de même difficulté. Artillerie de Poupe : tant que vous avez un vaisseau arrimé, vous bénéficiez d'une arme principale [Rear Arc] avec une valeur d'attaque égale à celle de l'attaque principale [Front Arc] du vaisseau arrimé.",
        es:
          'Después de que reveles una maniobra de color rojo o azul, puedes establecer en tu selector otra maniobra con esa misma dificultad.',
        it:
          "Dopo che hai rivelato una manovra rossa o blu, puoi regolare il tuo indicatore su un'altra manovra della stessa difficoltà.",
        pl:
          'Po odsłonięciu czerwonego albo niebieskiego manewru, możesz ustawić na tarczy inny manewr o tej samej trudności.',
        pt:
          'Após revelar uma manobra vermelha ou azul, você pode rotacionar seu disco para outra manobra de mesma dificuldade.',
        zh:
          'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_73.jpg',
      ffg: 73,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Kanan Jarrus',
        de: 'Kanan Jarrus',
        fr: 'Kanan Jarrus',
        es: 'Kanan Jarrus',
        it: 'Kanan Jarrus',
        pl: 'Kanan Jarrus',
        pt: 'Kanan Jarrus',
        zh: 'Kanan Jarrus',
      },
      caption: {
        en: 'Spectre-1',
        de: 'Spectre-1',
        fr: 'Spectre-1',
        es: 'Espectro-1',
        it: 'Spectre-1',
        pl: 'Widmo-1',
        pt: 'Espectro-1',
        zh: 'Spectre-1',
      },
      initiative: 3,
      limited: 1,
      cost: 76,
      xws: 'kananjarrus',
      ability: {
        en:
          'While a friendly ship in your firing arc defends, you may spend 1 [Force]. If you do, the attacker rolls 1 fewer attack die.',
        de:
          'Solange ein befreundetes Schiff in deinem Feuerwinkel verteidigt, darfst du 1 [Force] ausgeben. Falls du das tust, wirft der Angreifer 1 Angriffswürfel weniger.',
        fr:
          "Tant qu'un vaisseau allié situé dans votre arc de tir défend, vous pouvez dépenser 1 [Force]. Dans ce cas, l'attaquant lance 1 dé d'attaque en moins. Artillerie de Poupe : tant que vous avez un vaisseau arrimé, vous bénéficiez d'une arme principale [Rear Arc] avec une valeur d'attaque égale à celle de l'attaque principale [Front Arc] du vaisseau arrimé.",
        es:
          'Mientras una nave aliada situada en tu arco de fuego se defiende, puedes gastar 1 [Force]. Si lo haces, el atacante tira 1 dado de ataque menos.',
        it:
          "Mentre una nave amica nel tuo arco di fuoco difende, puoi spendere 1 [Force]. Se lo fai, l'attaccante tira 1 dado di attacco in meno.",
        pl:
          'Gdy przyjazny statek w twojej strefie rażenia się broni, możesz wydać 1 [Force]. Jeżeli tak zrobisz, atakujący rzuca 1 kością ataku mniej.',
        pt:
          'Quando uma nave amiga em seu arcode tiro defender, você pode gastar 1 [Force].Se você fizer isso, o atacante rola 1 dadode ataque a menos.',
        zh:
          'While a friendly ship in your firing arc defends, you may spend 1 [Force]. If you do, the attacker rolls 1 fewer attack die.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: [
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Modification',
        'Title',
        'Gunner',
        'Force Power',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_74.jpg',
      ffg: 74,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Lothal Rebel',
        de: 'Rebell von Lothal',
        fr: 'Rebelle de Lothal',
        es: 'Rebelde de Lothal',
        it: 'Ribelle di Lothal',
        pl: 'Rebeliant z Lothal',
        pt: 'Rebelde de Lothal',
        zh: 'Lothal Rebel',
      },
      initiative: 2,
      limited: 0,
      cost: 67,
      xws: 'lothalrebel',
      text: {
        en:
          'Another successful Corellian Engineering Corporation freighter design, the VCX-100 is larger than the ubiquitous YT-series, boasting more living space and customizability.',
        de:
          'Der VCX-100 ist ein weiteres Erfolgsmodell der Corellianischen Ingenieursgesellschaft, geräumiger und mit mehr Ausstattungsoptionen als die beliebte YT-Serie.',
        fr:
          'Autre réussite commerciale de la Corporation Technique Corellienne, le cargo VCX-100 est plus gros que les légendaires appareils de la série YT, et propose un espace de vie plus volumineux et de meilleures possibilités de personnalisation.',
        es:
          'Otro exitoso diseño de carguero de la Corporación de Ingeniería Corelliana, el VCX-100 es más grande que la ubicua serie YT, por lo que dispone de más espacio para la tripulación y la instalación de mejoras personalizadas.',
        it:
          'Il VCX-100, un altro modello di grande successo della Corellian Engineering Corporation, è più grande della diffusissima serie YT e offre spazi interni più ampi e maggiori opzioni di personalizzazione.',
        pl:
          'Kolejny udany frachtowiec Corellian Engineering Corporation. VCX-100, jest większy niż wszechobecne modele serii YT, ma większy przedział dla załogi i daje większe pole do modyfikacji.',
        pt:
          'Mais um projeto de sucesso de cargueiroda Corellian Engineering Corporation,o VCX-100 é maior que a popular série YT, dispondo de mais espaço interno e maior capacidade de personalização.',
        zh:
          'Another successful Corellian Engineering Corporation freighter design, the VCX-100 is larger than the ubiquitous YT-series, boasting more living space and customizability.',
      },
      slots: [
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_76.jpg',
      ffg: 76,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Alexsandr Kallus',
        de: 'Alexsandr Kallus',
        fr: 'Alexsandr Kallus',
        es: 'Alexsandr Kallus',
        it: 'Alexsandr Kallus',
        pl: 'Alexsandr Kallus',
        pt: 'Alexsandr Kallus',
        zh: 'Alexsandr Kallus',
      },
      xws: 'alexsandrkallus',
      initiative: 4,
      limited: 1,
      caption: {
        en: 'Fulcrum',
        de: 'Fulcrum',
        fr: 'Fulcrum',
        es: 'Fulcrum',
        it: 'Fulcrum',
        pl: 'Fulcrum',
        pt: 'Fulcrum',
        zh: 'Fulcrum',
      },
      hyperspace: true,
      epic: true,
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Torpedo',
        'Crew',
        'Crew',
        'Modification',
        'Title',
        'Gunner',
      ],
      ability: {
        en:
          'While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.',
        de:
          'Solange du verteidigst, falls der Angreifer irgendwelche Angriffswürfel modifiziert hat, darfst du 1 zusätzlichen Verteidigungswürfel werfen.',
        fr:
          "Tant que vous défendez, si l'attaquant a modifié n'importe quel dé d'attaque, vous pouvez lancer 1 dé de défense supplémentaire.",
        es:
          'Mientras te defiendes, si el atacante ha modificado algún dado de ataque, puedes tirar 1 dado de defensa adicional.',
        it:
          'While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.',
        pl:
          'While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.',
        pt:
          'While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.',
        zh:
          'While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.',
      },
      cost: 68,
      ffg: 631,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/af4c16c8955bddf75d5eb7723c7a5f2d.jpg',
    },
  ],
};

export default t;

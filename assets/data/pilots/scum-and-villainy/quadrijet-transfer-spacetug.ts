import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Quadrijet Transfer Spacetug',
    de: 'Quadrijet-Transferschlepper',
    fr: 'Remorqueur Spatial de Transfert Quadrimoteur',
    it: 'Rimorchiatore Spaziale Quadrijet',
    pl: 'Holownik transferowy Quadrijet',
    pt: 'Rebocador Orbital Quadrijet',
    zh: 'Quadrijet Transfer Spacetug',
    es: 'Remolcador espacial cuatrimotor',
  },
  xws: 'quadrijettransferspacetug',
  ffg: 9,
  size: 'Small',
  dial: [
    '1AR',
    '1DR',
    '1TW',
    '1BW',
    '1FW',
    '1NW',
    '1YW',
    '2SR',
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
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: {
      en: 'Spacetug Tractor Array',
      de: 'Schlepperstrahl',
      fr: 'Dispositif Tracteur de Remorqueur Spatial',
      es: 'Campos de tracción de remolque',
      it: 'Apparato Traente da Rimorchiatore',
      pl: 'Wiązka ściągająca holownika Akcja',
      pt: 'Feixe de Rebocamento Espacial',
      zh: 'Spacetug Tractor Array',
    },
    text: {
      en:
        'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      de:
        'Aktion: Wähle ein Schiff in deinem [Front Arc] in Reichweite 1. Jenes Schiff erhält 1 Fangstrahlmarker oder 2 Fangstrahlmarker, falls es in deinem [Bullseye Arc] in Reichweite 1 ist.',
      fr:
        "Action : choisissez un vaisseau dans votre [Front Arc] à portée 1. Il gagne 1 marqueur de rayon tracteur, ou 2 marqueurs de rayon tracteur s'il est dans votre [Bullseye Arc] à portée 1.",
      es:
        'Acción: Elige una nave que tengas en tu [Front Arc] a alcance 1. Esa nave recibe 1 ficha de Campo de tracción, o 2 fichas de Campo de tracción si está situada en tu [Bullseye Arc] a alcance 1.',
      it:
        'Azione: Scegli 1 nave nel tuo [Front Arc] a gittata 1. Quella nave ottiene 1 segnalino raggio traente, oppure 2 segnalini raggio traente se è nel tuo [Bullseye Arc] a gittata 1.',
      pl:
        'wskaż statek w swojej [Front Arc] w zasięgu 1. Wskazany statek otrzymuje 1 żeton wiązki ściągającej albo 2 żetony wiązki ściągającej, jeżeli znajduje się w twojej [Bullseye Arc] w zasięgu 1.',
      pt:
        'Ação: Escolha uma nave em seu [Front Arc]em alcance 1. A nave escolhida recebe1 ficha de tração, ou 2 fichas de traçãose estiver em seu [Bullseye Arc] em alcance 1.',
      zh:
        'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Quadjumper.png',
  pilots: [
    {
      name: {
        en: 'Constable Zuvio',
        de: 'Constable Zuvio',
        fr: 'Officier Zuvio',
        es: 'Alguacil Zuvio',
        it: 'Conestabile Zuvio',
        pl: 'Konstabl Zuvio',
        pt: 'Oficial da Lei Zuvio',
        zh: 'Constable Zuvio',
      },
      caption: {
        en: 'Missing Sheriff of Niima Outpost',
        de: 'Verschollener Sheriff des Niima-Außenpostens',
        fr: "Shérif Porté Disparu de l'Avant-Poste Niima",
        es: 'Sheriff ausente del puesto Niima',
        it: 'Sceriffo Scomparso di Niima',
        pl: 'Zaginiony szeryf z przyczółku Niima',
        pt: 'Xerife Desaparecido da Base de Niima',
        zh: 'Missing Sherriff of Niima Outpost',
      },
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'constablezuvio',
      ability: {
        en:
          'If you would drop a device, you may launch it using a (1 [Straight]) template instead.',
        de:
          'Falls du ein Gerät abwerfen würdest, darfst du es stattdessen unter Verwendung der (1 [Straight])-Schablone starten.',
        fr:
          'Si vous êtes censé larguer un engin, vous pouvez le lancer en utilisant un gabarit (1 [Straight]) à la place.',
        es:
          'Si vas a soltar un dispositivo, en vez de eso puedes lanzarlo utilizando una plantilla (1 [Straight]).',
        it:
          'Se stai per sganciare un congegno, puoi invece lanciarlo usando il modello (1 [Straight]).',
        pl:
          'Gdy masz zrzucić urządzenie, możesz zamiast tego wystrzelić je, korzystając z wzornika (1 [Straight]).',
        pt:
          'Se for soltar um dispositivo, você pode, em vez disso, lançá-lo usando um gabarito (1 [Straight]).',
        zh:
          'If you would drop a device, you may launch it using a (1 [Straight]) template instead.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_161.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/ba870350fea3f9a94898a0d34e2e4cc9.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/1af2dd0efc2eb1720dbc7b87ea6a12bc.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/1410d6fc3bdec56bf07429e056e14fd6.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/acad1d5a259043d749d99d7d0a226424.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/508e0337c68ed9ab7a4da38be5acdb3b.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/a6bcd3674845f582cda7c219e2de66f2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_161.png',
      },
      slots: ['Talent', 'Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_161.jpg',
      ffg: 161,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Jakku Gunrunner',
        de: 'Waffenschmuggler von Jakku',
        fr: "Trafiquant d'Armes de Jakku",
        es: 'Traficante de armas de Jakku',
        it: "Mercante d'Armidi Jakku",
        pl: 'Szmugler broni z Jakku',
        pt: 'Contrabandistade Armas de Jakku',
        zh: 'Jakku Gunrunner',
      },
      initiative: 1,
      limited: 0,
      cost: 29,
      xws: 'jakkugunrunner',
      text: {
        en:
          'The Quadrijet transfer spacetug, commonly called a "Quadjumper," is nimble in space and atmosphere alike, making it popular among both smugglers and explorers.',
        de:
          'Der Quadrijet-Transferschlepper, im Volksmund „Quadjumper" genannt, ist gleichermaßen behände in Weltall und Atmosphäre, was ihn zu einem beliebten Schmuggler- und Entdeckerschiff macht.',
        fr:
          "Le Remorqueur Spatial de Transfert Quadrimoteur, surnommé « Quad jumper », était aussi manœuvrable sous atmosphère que dans l'espace, ce qui le rendait extrêmement populaire auprès des contrebandiers et des explorateurs.",
        es:
          'El remolcador espacial cuatrimotor para transferencia de carga, conocido popularmente como "saltador quad", es tan ágil en el espacio como en la atmósfera, lo que lo hace popular entre contrabandistas y exploradores por igual.',
        it:
          'Il Rimorchiatore Spaziale Quadrijet, comunemente chiamato "Quadjumper", è un vascello agile sia nello spazio che in atmosfera, qualità che lo rende popolare sia presso i contrabbandieri che gli esploratori.',
        pl:
          'Holownik transferowy Quadrijet, znany potocznie jako „Quadjumper" radzi sobie zarówno w przestrzeni kosmicznej, jak i w atmosferze, przez co jest niezwykle popularny wśród przemytników i odkrywców.',
        pt:
          'O rebocador orbital Quadrijet, comumentechamado de "Quadjumper", é ágil tanto noespaço quanto na atmosfera, o que o tornou popular entre contrabandistas e exploradores.',
        zh:
          'The Quadrijet transfer spacetug, commonly called a "Quadjumper," is nimble in space and atmosphere alike, making it popular among both smugglers and explorers.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_164.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/beea79960fb9183bae19754a68b893f6.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0d89149474197a9dc8e5299b69c57311.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/89874aa77288bdc1c2867a59e31b0687.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/b6bdfca453ddae1bd4b81797d84c59c5.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/7505e5fe7ee2e90288802f1277fa7515.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/9d782830d4b89c57fe05d78571af2d28.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_164.png',
      },
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_164.jpg',
      ffg: 164,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Sarco Plank',
        de: 'Sarco Plank',
        fr: 'Sarco Plank',
        es: 'Sarco Plank',
        it: 'Sarco Plank',
        pl: 'Sarco Plank',
        pt: 'Sarco Plank',
        zh: 'Sarco Plank',
      },
      caption: {
        en: 'The Scavenger',
        de: 'Der Schrottsammler',
        fr: 'Le Récupérateur',
        es: 'El carroñero',
        it: 'Il Riciclatore',
        pl: 'Złomiarz',
        pt: 'Catador de Sucata',
        zh: 'The Scavenger',
      },
      initiative: 2,
      limited: 1,
      cost: 29,
      xws: 'sarcoplank',
      ability: {
        en:
          'While you defend, you may treat your agility value as equal to the speed of the maneuver you executed this round.',
        de:
          'Solange du verteidigst, darfst du deinen Wendigkeitswert so behandeln, als würde er der Geschwindigkeit des Manövers entsprechen, das du in dieser Runde ausgeführt hast.',
        fr:
          "Tant que vous défendez, vous pouvez considérer que votre valeur d'agilité est égale à la vitesse de la manœuvre que vous exécutez à ce round.",
        es:
          'Mientras te defiendes, puedes considerar tu valor de Agilidad como si fuera igual a la velocidad de la maniobra que has ejecutado en esta ronda.',
        it:
          'Mentre difendi, puoi considerare il tuo valore di agilità come se fosse pari alla velocità della manovra che hai eseguito in questo round.',
        pl:
          'Gdy się bronisz, możesz traktować wartość swojej zwrotności jako równą prędkości manewru, który wykonałeś w tej rundzie.',
        pt:
          'Quando você defender, você podetratar seu valor de agilidade como sefosse igual à velocidade da manobraque você executou nesta rodada.',
        zh:
          'While you defend, you may treat your agility value as equal to the speed of the maneuver you executed this round.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_162.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f8b812fc08b19ac8ddff90226c642b8f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/68f4342e084b88f3b9121f162d024e62.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8cd7ebc94c5247399cd732052aa322f4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/7ab634a9b7fd6aded0e30f8361667eca.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3ad73ebb76ae5949e52cd42f5a449f04.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/71623c591f1437bc6ec80240f02596c7.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_162.png',
      },
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_162.jpg',
      ffg: 162,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Unkar Plutt',
        de: 'Unkar Plutt',
        fr: 'Unkar Plutt',
        es: 'Unkar Plutt',
        it: 'Unkar Plutt',
        pl: 'Unkar Plutt',
        pt: 'Unkar Plutt',
        zh: 'Unkar Plutt',
      },
      caption: {
        en: 'Miserly Portion Master',
        de: 'Geiziger Rationsmeister',
        fr: 'Maître des Portions Misérables',
        es: 'Chatarrero tacaño',
        it: 'Avaro Dispensatore di Porzioni',
        pl: 'Skąpy Zarządca',
        pt: 'Senhor da Comida Racionada',
        zh: 'Miserly Portion Master',
      },
      initiative: 2,
      limited: 1,
      cost: 29,
      xws: 'unkarplutt',
      ability: {
        en:
          'At the start of the Engagement Phase, if there are one or more other ships at range 0, you and each other ship at range 0 gain 1 tractor token.',
        de:
          'Zu Beginn der Kampfphase, falls 1 oder mehrere andere Schiffe in Reichweite 0 sind, erhalten du und jedes andere Schiff in Reichweite 0 je 1 Fangstrahlmarker.',
        fr:
          "Au début de la phase d'engagement, si un ou plusieurs autres vaisseaux sont à portée 0, vous et chaque autre vaisseau à portée 0 gagnez 1 marqueur de rayon tracteur.",
        es:
          'Al comienzo de la fase de Enfrentamiento, si tienes una o más naves a alcance 0, tú y toda otra nave que tengas a alcance 0 recibís 1 ficha de Campo de tracción.',
        it:
          "All'inizio della Fase di Ingaggio, se ci sono altre navi a gittata 0, tu e ogni altra nave a gittata 0 ottenete 1 segnalino raggio traente.",
        pl:
          'Na początku fazy walki, jeżeli w zasięgu 0 znajduje się co najmniej jeden statek, ty i każdy statek w zasięgu 0 otrzymujecie po 1 żetonie wiązki ściągającej.',
        pt:
          'No início da Fase de Engajamento, se houver uma ou mais naves em alcance 0, você e cada outra nave em alcance 0 recebem 1 ficha de tração.',
        zh:
          'At the start of the Engagement Phase, if there are one or more other ships at range 0, you and each other ship at range 0 gain 1 tractor token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_163.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c42e72929ce2d11efa91bddf56a6e278.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0f965ddf7322b54d336afd563eb87155.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/479dfa598f467099722c4f3794344ae8.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/09f0867b576a85fe7402898e16e1d3a1.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/72bdf8b2ab1bfc537f55ebc0b4427a42.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/8bee2f322e759ac032b70338663b3863.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_163.png',
      },
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_163.jpg',
      ffg: 163,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

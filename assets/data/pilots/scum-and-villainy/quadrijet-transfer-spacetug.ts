import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Quadrijet Transfer Spacetug',
    de: 'Quadrijet-Transferschlepper',
    fr: 'Remorqueur Spatial de Transfert Quadrimoteur',
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
        fr: 'Officier Zuvio',
        es: 'Alguacil Zuvio',
      },
      caption: {
        en: 'Missing Sheriff of Niima Outpost',
        de: 'Verschollener Sheriff des Niima-Außenpostens',
        fr: "Shérif Porté Disparu de l'Avant-Poste Niima",
        es: 'Sheriff ausente del puesto Niima',
      },
      initiative: 4,
      limited: 1,
      cost: 29,
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
      },
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_164.jpg',
      ffg: 164,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Sarco Plank' },
      caption: {
        en: 'The Scavenger',
        de: 'Der Schrottsammler',
        fr: 'Le Récupérateur',
        es: 'El carroñero',
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
      },
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_162.jpg',
      ffg: 162,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Unkar Plutt' },
      caption: {
        en: 'Miserly Portion Master',
        de: 'Geiziger Rationsmeister',
        fr: 'Maître des Portions Misérables',
        es: 'Chatarrero tacaño',
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

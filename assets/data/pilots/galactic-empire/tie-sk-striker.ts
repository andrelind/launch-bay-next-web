import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'TIE/sk Striker', de: 'TIE/sk-Stürmer', es: 'Fustigador TIE/sk' },
  xws: 'tieskstriker',
  ffg: 16,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '1KR',
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
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: {
      en: 'Adaptive Ailerons',
      de: 'Adaptive Querruder',
      fr: 'Ailerons Adaptables',
      es: 'Alerones adaptativos',
      pl: 'Lotki adaptacyjne',
      zh: 'Adaptive Ailerons',
      it: 'Alettoni ad Assetto Variabile',
      pt: 'Ailerons Adaptáveis',
    },
    text: {
      en:
        'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
      de:
        'Bevor du dein Rad aufdeckst, falls du nicht gestresst bist, musst du ein weißes (1 [Bank Left])-, (1 [Straight])- oder (1 [Bank Right])-Manöver ausführen.',
      fr:
        "avant de révéler votre cadran, si vous n'êtes pas stressé, vous devez exécuter une manœuvre blanche (1 [Bank Left]), (1 [Straight]) ou (1 [Bank Right]).",
      es:
        'Antes de que reveles tu selector, si no estás bajo tensión, debes ejecutar una maniobra blanca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
      it:
        'Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
      pl:
        'Zanim odsłonisz swoją tarczę manewrów, jeśli nie posiadasz żetonu stresu, musisz wykonać biały manewr (1 [Bank Left]), (1 [Straight]) albo (1 [Bank Right]).',
      pt:
        'Antes de revelarseu disco, se não estiver estressado,você deve executar uma manobra([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
      zh:
        'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEStriker.png',
  pilots: [
    {
      name: { en: '"Countdown"', de: '„Countdown"', es: '"Cuenta Atrás"' },
      caption: {
        en: 'Death Defier',
        de: 'Stärker als der Tod',
        fr: 'Trompe-la-Mort',
        es: 'Amante del riesgo',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'countdown',
      ability: {
        en:
          'While you defend, after the Neutralize Results step, if you are not stressed, you may suffer 1 [Hit] damage and gain 1 stress token. If you do, cancel all dice results.',
        de:
          'Solange du verteidigst, nach dem Schritt „Ergebnisse neutralisieren", falls du nicht gestresst bist, darfst du 1 [Hit]-Schaden erleiden und 1 Stressmarker erhalten. Falls du das tust, negiere alle Würfelergebnisse.',
        fr:
          "Tant que vous défendez, après l'étape « Neutraliser les résultats », si vous n'êtes pas stressé, vous pouvez subit 1 dégât [Hit] et gagner 1 marqueur de stress. Dans ce cas, annulez tous les résultats des dés.",
        es:
          'Mientras te defiendes, después del paso de "Neutralizar los resultados", puedes sufrir 1 de daño [Hit] y recibir 1 ficha de Tensión. Si lo haces, anula todos los resultados de los dados.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_118.jpg',
      ffg: 118,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: '"Duchess"', de: '„Herzogin"', es: '"Duquesa"' },
      caption: {
        en: 'Urbane Ace',
        de: 'Kultiviertes Fliegerass',
        fr: 'As Urbain',
        es: 'As urbano',
      },
      initiative: 5,
      limited: 1,
      cost: 44,
      xws: 'duchess',
      ability: {
        en:
          'You may choose not to use your Adaptive Ailerons. You may use your Adaptive Ailerons even while stressed.',
        de:
          'Du darfst wählen, Adaptive Querruder nicht zu verwenden. Du darfst Adaptive Querruder verwenden, auch solange du gestresst bist.',
        fr:
          'Vous pouvez choisir de ne pas utiliser vos Ailerons Adaptables. Vous pouvez utiliser vos Ailerons Adaptables même si vous êtes stressé.',
        es:
          'Puedes elegir no utilizar tus alerones adaptativos. Puedes utilizar tus alerones adaptativos incluso aunque estés bajo tensión.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_117.jpg',
      ffg: 117,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: '"Pure Sabacc"', de: '„Voller Sabacc"', es: '"Sabacc Puro"' },
      caption: {
        en: 'Confident Gambler',
        de: 'Selbstbewusster Glücksspieler',
        fr: 'Parieur Confiant',
        es: 'Apostador confiado',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'puresabacc',
      ability: {
        en:
          'While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die.',
        de:
          'Solange du einen Angriff durchführst, falls du 1 oder weniger Schadenskarten hast, darfst du 1 zusätzlichen Angriffswürfel werfen.',
        fr:
          "Tant que vous effectuez une attaque, si vous avez 1 carte de dégât ou moins, vous pouvez lancer 1 dé d'attaque supplémentaire. Ailerons Adaptables : avant de révéler votre cadran, si vous n'êtes pas stressé, vous devez exécuter une manœuvre blanche (1 [Bank Left]), (1 [Straight]) ou (1 [Bank Right]).",
        es:
          'Mientras efectúas un ataque, si tienes 1 o menos cartas de Daño, puedes tirar 1 dado de ataque adicional.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_119.jpg',
      ffg: 119,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Black Squadron Scout',
        de: 'Aufklärer der schwarzen Staffel',
        fr: "Éclaireur de l'Escadron Noir",
        es: 'Explorador del Escuadrón Negro',
      },
      initiative: 3,
      limited: 0,
      cost: 33,
      xws: 'blacksquadronscout',
      text: {
        en:
          'These heavily armed atmospheric craft employ their specialized moveable wings to gain additional speed and maneuverability.',
        de:
          'Schwenkbare Tragflächen verleihen dem schwerbewaffneten Atmosphärenflieger zusätzliche Geschwindigkeit und Manövrierbarkeit.',
        fr:
          'Ce vaisseau atmosphérique lourdement armé se sert de ses ailes mobiles pour gagner en vitesse et manœuvrabilité.',
        es:
          'Estas naves atmosféricas fuertemente armadas obtienen una mayor velocidad y maniobrabilidad gracias a sus alas móviles especialmente diseñadas.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_120.jpg',
      ffg: 120,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Planetary Sentinel',
        de: 'Planetarer Wachposten',
        fr: 'Sentinelle Planétaire',
        es: 'Centinela Planetario',
      },
      initiative: 1,
      limited: 0,
      cost: 31,
      xws: 'planetarysentinel',
      text: {
        en:
          'To protect its many military installations, the Empire requires a swift and vigilant defense force.',
        de:
          'Zum Schutz seiner vielen militärischen Einrichtungen benötigt das Imperium eine mobile und wachsame Verteidigungsstreitmacht.',
        fr:
          "Pour protéger ses installations militaires, l'Empire a besoin d'une force de défense rapide et vigilante.",
        es:
          'Para proteger sus muchas instalaciones militares, el Imperio precisa de una fuerza de defensa rápida y vigilante.',
      },
      slots: ['Device', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_121.jpg',
      ffg: 121,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: '"Vagabond"', de: '„Vagabond"', es: '"Vagabundo"' },
      caption: {
        en: 'Destitute Demolitionist',
        de: 'Verarmter Sprengstoffexperte',
        fr: 'Démolisseur Désavoué',
        es: 'Arrasador arruinado',
      },
      initiative: 2,
      limited: 1,
      cost: 34,
      xws: 'vagabond',
      ability: {
        en:
          'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
        de:
          'Nachdem du unter Verwendung deiner Schiffsfähigkeit Adaptive Querruder ein Manöver vollständig ausgeführt hast, falls du nicht gestresst bist, darfst du 1 Gerät abwer-fen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre en utilisant vos Ailerons Adaptables, si vous n'êtes pas stressé, vous pouvez larguer 1 engin.",
        es:
          'Después de que ejecutes completamente una maniobra utilizando tus Alerones adaptativos, si no estás bajo tensión, puedes soltar 1 dispositivo.',
      },
      slots: ['Talent', 'Device', 'Modification', 'Gunner'],
      hyperspace: false,
      epic: true,
      ffg: 633,
    },
  ],
};

export default t;

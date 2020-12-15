import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'advancedoptics',
    sides: [
      {
        title: {
          en: 'Advanced Optics',
          de: 'Verbesserte Optik',
          fr: 'Optiques Avancées',
          es: 'Sensores ópticos avanzados',
        },
        type: 'Tech',
        ability: {
          en:
            'While you perform an attack, you may spend 1 focus token to change 1 of your blank results to a [Hit] result.',
          de:
            'Solange du einen Angriff durchführst, darfst du 1 Fokusmarker ausgeben, um 1 deiner Leerseiten-Ergebnisse in ein [Hit]-Ergebnis zu ändern.',
          es:
            'Mientras efectúas un ataque, puedes gastar 1 ficha de Concentración para cambiar 1 de tus resultados de cara vacía por un resultado [Hit].',
          fr:
            'Tant que vous effectuez une attaque, vous pouvez dépenser 1 marqueur de concentration pour changer 1 de vos résultats vierges en un résultat [Hit].',
        },
        slots: ['Tech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/e19aa7cd99df250715c17386135cd140.jpg',
        ffg: 460,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ferrospherepaint',
    sides: [
      {
        title: {
          en: 'Ferrosphere Paint',
          de: 'Ferrosphärenfarbe',
          fr: 'Peinture Ferrosphère',
          es: 'Pintura ferrosférica',
        },
        type: 'Tech',
        ability: {
          en:
            "After an enemy ship locks you, if you are not in that ship's [Bullseye Arc], that ship gains 1 stress token.",
          de:
            'Nachdem ein feindliches Schiff dich als Ziel erfasst hat, falls du nicht im [Bullseye Arc] jenes Schiffes bist, erhält jenes Schiff 1 Stressmarker.',
          es:
            'Después de que una nave enemiga te fije como blanco, si no estás situado en el [Bullseye Arc] de esa nave, ésta recibe 1 ficha de Tensión.',
          fr:
            "Après qu'un vaisseau ennemi vous a verrouillé, si vous n'êtes pas dans son [Bullseye Arc], il gagne 1 marqueur de stress.",
        },
        slots: ['Tech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/55ff3d199702695f23631d85a25bbae6.jpg',
        ffg: 488,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'hyperspacetrackingdata',
    sides: [
      {
        title: {
          en: 'Hyperspace Tracking Data',
          de: 'Hyperraum-Ortungsdaten',
          fr: 'Données de Pistage Hyperspatial',
          es: 'Datos de rastreo hiperespacial',
        },
        type: 'Tech',
        ability: {
          en:
            'Setup: Before placing forces, you may choose a number between 0 and 6. Treat your initiative as the chosen value during Setup. After Setup, assign 1 focus or evade token to each friendly ship at range 0-2.',
          de:
            'Aufbau: Bevor die Streitkräfte platziert werden, darfst du eine Zahl zwischen 0 und 6 wählen. Behandle deine Initiative, als hätte sie den Wert, den du während des Aufbaus gewählt hast. Ordne nach dem Aufbau jedem befreundeten Schiff in Reichweite 0-2 1 Fokus- oder Ausweichmarker zu.',
          es:
            'Preparación: Antes de desplegar las fuerzas, puedes elegir un número entre 0 y 6. Durante la preparación de la partida, tu valor de Iniciativa se considera igual al número que has elegido. Después de la preparación de la partida, asigna 1 ficha de Concentración o Evasión a cada nave aliada que tengas a alcance 0-2.',
          fr:
            "Mise en place : avant de placer les forces, vous pouvez choisir un nombre entre 0 et 6. Pendant la mise en place, considérez que votre initiative est égale au nombre choisi. Après la Mise en place, assignez 1 marqueur de concentration ou d'évasion à chaque vaisseau allié à portée 0-2.",
        },
        slots: ['Tech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/fa5c01453d7aa2e2f1f100593e79669d.jpg',
        ffg: 461,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['First Order'] }, { baseSizes: ['Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'primedthrusters',
    sides: [
      {
        title: {
          en: 'Primed Thrusters',
          de: 'Verbesserte Schubdüsen',
          fr: 'Propulseurs Survitaminés',
          es: 'Propulsores sobrealimentados',
        },
        type: 'Tech',
        ability: {
          en:
            'While you have 2 or fewer stress tokens, you can perform [Barrel Roll] and [Boost] actions even while stressed.',
          de:
            'Solange du 2 oder weniger Stressmarker hast, kannst du [Barrel Roll]- und [Boost]-Aktionen durchführen, auch solange du gestresst bist.',
          es:
            'Mientras tengas 2 o menos fichas de Tensión, puedes realizar acciones [Barrel Roll] y [Boost] incluso aunque estés bajo tensión.',
          fr:
            'Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez effectuer les actions [Barrel Roll] et [Boost] même si vous êtes stressé.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/3789dd873db0d0c74293531bef49e16e.jpg',
        slots: ['Tech'],
        ffg: 463,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 5, '2': 6, '3': 7, '4': 8, '5': 9, '6': 10 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'targetingsynchronizer',
    sides: [
      {
        title: {
          en: 'Targeting Synchronizer',
          de: 'Zielsynchronisiersystem',
          fr: 'Synchroniseur Télémétrique',
          es: 'Sincronizador de disparos',
        },
        type: 'Tech',
        ability: {
          en:
            'While a friendly ship at range 1-2 performs an attack against a target you have locked, that ship ignores the [Lock] attack requirement.',
          de:
            'Solange ein befreundetes Schiff in Reichweite 1-2 einen Angriff gegen ein Ziel durchführt, das du als Ziel erfasst hast, ignoriert jenes Schiff die [Lock]-Angriffsvoraussetzung.',
          es:
            'Mientras una nave aliada que tienes a alcance 1-2 efectúa un ataque contra un objetivo que tienes fijado como blanco, esa nave aliada ignora el requisito de ataque [Lock].',
          fr:
            "Tant qu'un vaisseau allié à portée 1-2 effectue une attaque contre une cible que vous avez verrouillée, ce vaisseau allié ignore le prérequis d'attaque [Lock].",
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/1597042d794000fb34d1eee30cc10f35.jpg',
        slots: ['Tech'],
        ffg: 464,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'patternanalyzer',
    sides: [
      {
        title: {
          en: 'Pattern Analyzer',
          de: 'Mustererkennung',
          fr: 'Analyseur de Modèles',
          es: 'Analizador de patrones',
        },
        type: 'Tech',
        ability: {
          en:
            'While you fully execute a red maneuver, before the Check Difficulty step, you may perform 1 action.',
          de:
            'Solange du ein rotes Manöver vollständig ausführst, vor dem Schritt „Schwierigkeit überprüfen", darfst du 1 Aktion durchführen.',
          es:
            'Mientras ejecutas completamente una maniobra roja, antes del paso de "Comprobar la dificultad", puedes realizar 1 acción.',
          fr:
            "Tant que vous exécutez entièrement une manœuvre rouge, avant l'étape « Vérifier la difficulté », vous pouvez effectuer 1 action.",
        },
        slots: ['Tech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/811e07d55f95e53fef3182020d8cbf6e.jpg',
        ffg: 462,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'biohexacryptcodes',
    sides: [
      {
        title: {
          en: 'Biohexacrypt Codes',
          de: 'Bio-Hexakryptcode',
          fr: 'Codes bio-hexacrypt',
          es: 'Códigos biohexaencriptados',
        },
        type: 'Tech',
        ability: {
          en:
            'While you coordinate or jam, if you have a lock on a ship, you may spend that lock to choose that ship, ignoring range restrictions.',
          de:
            'Solange du koordinierst oder ein Störsignal sendest, falls du ein Schiff als Ziel erfasst hast, darfst du jene Zielerfassung ausgeben, um jenes Schiff zu wählen, wobei du die Reichweitenbeschränkung ignorierst.',
          es:
            'Mientras realizas una coordinación o interferencia, si tienes alguna nave fijada como blanco, puedes gastar ese Blanco fijado para elegir dicha nave, ignorando las restricciones de alcance.',
          fr:
            'Tant que vous coordonnez ou brouillez, si vous avez un verrouillage sur un vaisseau, vous pouvez dépenser ce verrouillage pour choisir ce vaisseau, en ignorant toutes les restrictions de portées.',
        },
        slots: ['Tech'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/14c54aef2e36ac34564194e4785c98ce.jpg',
        ffg: 491,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['First Order'] }, { action: { type: 'Lock' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'deuteriumpowercells',
    sides: [
      {
        title: {
          en: 'Deuterium Power Cells',
          de: 'Deuterium-Energiezellen',
          fr: 'Cellules Énergétiques au Deutérium',
          es: 'Células energéticas de deuterio',
        },
        type: 'Tech',
        ability: {
          en:
            'During the System Phase, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield. Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 [Charge] to gain 1 stress token instead.',
          de:
            'Während der Systemphase darfst du 1 [Charge] ausgeben und 1 Entwaffnet-Marker erhalten, um 1 wiederherzustellen. Bevor du 1 Marker außer Zielerfassung erhalten würdest, falls du nicht gestresst bist, darfst du 1 [Charge] ausgeben, um stattdessen 1 Stressmarker zu erhalten.',
          es:
            'Durante la fase de Sistemas, puedes gastar 1 [Charge] y recibir 1 ficha de Desarme para recuperar 1 . Antes de que vayas a recibir 1 ficha que no sea de Blanco fijado, si no estás bajo tensión, puedes gastar 1 [Charge] para en vez de eso recibir 1 ficha de Tensión.',
          fr:
            "Pendant la phase de système, vous pouvez dépenser 1 [Charge] et gagner 1 marqueur de désarmement pour récupérer 1 . Avant que vous ne gagniez 1 marqueur autre qu'un marqueur de verrouillage, si vous n'êtes pas stressé, vous pouvez dépenser 1 [Charge] pour gagner 1 marqueur de stress à la place.",
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Tech', 'Modification'],
        ffg: 654,
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['First Order'] }],
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'automatedtargetpriority',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        title: {
          en: 'Automated Target Priority',
          de: 'Automatisches Zielsystem',
          fr: 'Ciblage Prioritaire Automatisé',
          es: 'Priorización de blancos automatizada',
        },
        type: 'Tech',
        ability: {
          en:
            'While you perform an attack, you must choose a defender at the closest valid attack range. After you perform an attack that missed, place 1 calculate token on this card.  Before you engage, you may remove 1 calculate token from this card to gain a matching token.',
          de:
            'Solange du einen Angriff durchführst, musst du einen Verteidiger in der kürzesten gültigen Angriffsreichweite wählen. Nachdem du einen Angriff durchgeführt hast, der verfehlt hat, platziere 1 Berechnungs­marker auf dieser Karte.  Bevor du kämpfst, darfst du 1 Berechnungsmarker von dieser Karte entfernen, um einen passenden Marker zu erhalten.',
          fr:
            "Tant que vous effectuez une attaque, vous devez choisir un défenseur à la plus courte portée d'attaque valide. Après avoir effectué une attaque qui a raté, placez 1 marqueur de calcul sur cette carte. Avant de vous engager, vous pouvez retirer 1 marqueur de calcul de cette carte pour gagner le marqueur correspondant.",
          es:
            'Mientras efectúas un ataque, debes elegir un defensor que esté situado en el alcance de ataque válido más cercano. Después de que efectúes un ataque que falle, coloca 1 ficha de Cálculos sobre esta carta.  Antes de que intervengas, puedes retirar 1 ficha de Cálculos de esta carta para recibir una ficha equivalente.',
        },
        slots: ['Tech'],
        ffg: 671,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ initiative: { max: 3 } }],
  },
  {
    xws: 'sensorbuoysuite',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        title: {
          en: 'Sensor Buoy Suite',
          de: 'Sensorbojen',
          fr: 'Balises Dérivantes de Détection',
          es: 'Conjunto de boyas de sensores',
        },
        type: 'Tech',
        ability: {
          en:
            'Setup: Before placing forces, place 2 sensor buoy remotes beyond range 2 of any edge. Before you engage, you may acquire a lock on a ship at range 0-1 of a friendly sensor buoy, ignoring range restrictions.',
          de:
            'Aufbau: Bevor die Streitkräfte platziert werden, platziere 2 Sensorbojen-­Remotes jenseits von Reichweite 2 zu den Spielflächenrändern. Bevor du kämpfst, darfst du ein Schiff in Reichweite 0-1 zu einer befreundeten Sensorboje als Ziel erfassen, wobei du Reichweitenbeschränkungen ignorierst.',
          fr:
            "Mise en Place : avant de placer les forces, placez 2 engins distants Balise Dérivante de Détection au-delà de la portée 2 de n'importe quel bord. Avant de vous engager, vous pouvez verrouiller un vaisseau à portée 0-1 de n'importe quelle balise dérivante de détection alliée, en ignorant les restrictions de portée.",
          es:
            'Preparación: Antes de desplegar las fuerzas, coloca 2 remotos de Boya de sensores más allá de alcance 2 de todo borde. Antes de que intervengas, puedes obtener un Blanco fijado sobre una nave que esté situada a alcance 0-1 de una Boya de sensores aliada, ignorando las restricciones de alcance.',
        },
        slots: ['Tech'],
        ffg: 672,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['First Order'] },
      { baseSizes: ['Medium', 'Large'] },
    ],
  },
];

export default t;

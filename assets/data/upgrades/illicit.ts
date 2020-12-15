import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'cloakingdevice',
    sides: [
      {
        title: {
          en: 'Cloaking Device',
          de: 'Tarngerät',
          fr: "Appareil d'Occultation",
          es: 'Dispositivo de camuflaje',
        },
        type: 'Illicit',
        ability: {
          en:
            'Action: Spend 1 [Charge] to perform a [Cloak] action. At the start of the Planning Phase, roll 1 attack die. On a [Focus] result, decloak or discard your cloak token.',
          de:
            'Aktion: Gib 1 [Charge] aus, um eine [Cloak]-Aktion durchzuführen. Zu Beginn der Planungsphase wirf 1 Angriffswürfel. Bei einem [Focus]-Ergebnis, enttarne dich oder lege deinen Tarnungsmarker ab.',
          es:
            'Acción: Gasta 1 [Charge] para realizar una acción [Cloak]. Al comienzo de la fase de Planificación, tira 1 dado de ataque, Si sacas un resultado [Focus], desactiva el camuflaje o descarta tu ficha de Camuflaje.',
          fr:
            "Action : dépensez 1 [Charge] pour effectuer une action [Cloak]. Au début de la phase de préparation, lancez 1 dé d'attaque. Sur un résultat [Focus], désoccultez-vous ou défaussez votre marqueur d'occultation.",
        },
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_57.jpg',
        ffg: 286,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'contrabandcybernetics',
    sides: [
      {
        title: {
          en: 'Contraband Cybernetics',
          de: 'Illegale Kybernetik',
          fr: 'Cybernétique de Contrebande',
          es: 'Ciberimplantes ilícitos',
        },
        type: 'Illicit',
        ability: {
          en:
            'Before you activate, you may spend 1 [Charge]. If you do, until the end of the round, you can perform actions and execute red maneuvers, even while stressed.',
          de:
            'Bevor du aktiviert wirst, darfst du 1 [Charge] ausgeben. Falls du das tust, kannst du bis zum Ende der Runde Aktionen durchführen und rote Manöver ausführen, auch solange du gestresst bist.',
          es:
            'Antes de que te actives, puedes gastar 1 ficha [Charge]. Si lo haces, hasta el final de la ronda, eres capaz de realizar acciones y ejecutar maniobras rojas, incluso aunque estés bajo tensión.',
          fr:
            "Avant votre activation, vous pouvez dépenser 1 [Charge]. Dans ce cas, jusqu'à la fin du round, vous pouvez effectuer des actions et exécuter des manœuvres rouges, même si vous êtes stressé.",
        },
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_58.jpg',
        ffg: 287,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'deadmansswitch',
    sides: [
      {
        title: {
          en: "Deadman's Switch",
          de: 'Totmannschalter',
          fr: 'Salve Automatique',
          es: 'Dispositivo de represalia',
        },
        type: 'Illicit',
        ability: {
          en:
            'After you are destroyed, each other ship at range 0-1 suffers 1 [Hit] damage.',
          de:
            'Nachdem du zerstört worden bist, erleidet jedes andere Schiff in Reichweite 0-1 1 [Hit]-Schaden.',
          es:
            'Después de que seas destruido, toda otra nave que tienes a alcance 0-1 sufre 1 de daño [Hit].',
          fr:
            'Après que vous avez été détruit, chaque autre vaisseau à portée 0-1 subit 1 dégât [Hit].',
        },
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_59.jpg',
        ffg: 288,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'feedbackarray',
    sides: [
      {
        title: {
          en: 'Feedback Array',
          de: 'Rückkopplungsfeld',
          fr: 'Dispositif de Retour',
          es: 'Transmisor de sobrecargas',
        },
        type: 'Illicit',
        ability: {
          en:
            'Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 [Hit] damage.',
          de:
            'Bevor du kämpfst, darfst du 1 Ionenmarker und 1 Entwaffnet-Marker erhalten. Falls du das tust, erleidet jedes Schiff in Reichweite 0 1 [Hit]-Schaden.',
          es:
            'Antes de que intervengas, puedes recibir 1 ficha de Iones y 1 ficha de Desarme. Si lo haces, toda nave que tengas a alcance 0 sufre 1 de daño [Hit].',
          fr:
            'Avant de vous engager, vous pouvez gagner 1 marqueur ionique et 1 marqueur de désarmement. Dans ce cas, chaque vaisseau à portée 0 subit 1 dégât [Hit].',
        },
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_60.jpg',
        ffg: 289,
      },
    ],
    cost: { value: 3 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'inertialdampeners',
    sides: [
      {
        title: {
          en: 'Inertial Dampeners',
          de: 'Trägheitsdämpfer',
          fr: 'Amortisseurs Inertiels',
          es: 'Amortiguadores de inercia',
        },
        type: 'Illicit',
        ability: {
          en:
            'Before you would execute a maneuver, you may spend 1 shield. If you do, execute a white (0 [Stationary]) instead of the maneuver you revealed, then gain 1 stress token.',
          de:
            'Bevor du ein Manöver ausführen würdest, darfst du 1 Schild ausgeben. Falls du das tust, führe anstatt des Manövers, das du aufgedeckt hast, ein weißes (0 [Stationary])-Manöver aus, dann erhalte 1 Stressmarker.',
          es:
            'Antes de que vayas a ejecutar una maniobra, puedes gastar 1 escudo. Si lo haces, ejecutas una maniobra (0 [Stationary]) blanca en vez de la maniobra que has revelado, y luego recibes 1 ficha de Tensión.',
          fr:
            "Avant d'exécuter une manœuvre, vous pouvez dépenser 1 bouclier. Dans ce cas, exécutez une manœuvre (0 [Stationary]) blanche à la place de celle que vous avez révélée, puis gagnez 1 marqueur de stress.",
        },
        slots: ['Illicit'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_61.jpg',
        ffg: 290,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6 },
    },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'riggedcargochute',
    sides: [
      {
        title: {
          en: 'Rigged Cargo Chute',
          de: 'Manipulierte Frachtrampe',
          fr: 'Largage de Cargaison',
          es: 'Tolva de evacuación de carga',
        },
        type: 'Illicit',
        ability: {
          en:
            'Action: Spend 1 [Charge]. Drop 1 loose cargo using the (1 [Straight]) template.',
          de:
            'Aktion: Gib 1 [Charge] aus. Wirf unter Verwendung der (1 [Straight])-Schablone 1 freie Fracht ab.',
          es:
            'Acción: Gasta 1 [Charge]. Suelta 1 Cargamento expulsado utilizando la plantilla (1 [Straight]).',
          fr:
            'Action : dépensez 1 [Charge]. Larguez 1 cargaison égarée en utilisant le gabarit (1 [Straight]).',
        },
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Loose Cargo',
          type: 'Obstacle',
          effect: 'Loose cargo is a debris cloud.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_62.jpg',
        ffg: 291,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'coaxiumhyperfuel',
    sides: [
      {
        title: {
          en: 'Coaxium Hyperfuel',
          de: 'Coaxium-Hypertreibstoff',
          fr: 'Hypercarburant Coaxium',
          es: 'Hipercombustible coaxium',
        },
        type: 'Illicit',
        ability: {
          en:
            'You can perform the [Slam] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [Slam] action.',
          de:
            'Du kannst die [Slam]-Aktion durchführen, auch solange du gestresst bist. Falls du das tust, erleidest du 1 [Critical Hit]-Schaden, es sei denn, du legst 1 deiner Schadenskarten offen. Nachdem du ein Manöver teilweise ausgeführt hast, darfst du 1 deiner Schadenskarten offenlegen oder 1 [Critical Hit]-Schaden erleiden, um eine [Slam]-Aktion durchzuführen.',
          es:
            'Eres capaz de realizar la acción [Slam] incluso aunque estés bajo tensión. Si la realizas, sufres 1 de daño [Critical Hit] a menos que expongas 1 de tus cartas de Daño. Después de que ejecutes parcialmente una maniobra, puedes exponer 1 de tus cartas de Daño o sufrir 1 de daño [Critical Hit] para realizar una acción [Slam].',
          fr:
            "Vous pouvez effectuer l'action [Slam], même si vous êtes stressé. Dans ce cas, vous subissez 1 dégât [Critical Hit] à moins que vous n'exposiez 1 de vos cartes de dégât. Après avoir partiellement exécuté une manœuvre, vous pouvez exposer 1 de vos cartes de dégât ou subir 1 dégât [Critical Hit] pour effectuer une action [Slam].",
        },
        slots: ['Illicit'],
        ffg: 650,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'SLAM' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'quickreleaselocks',
    sides: [
      {
        title: {
          en: 'Quick-Release Locks',
          de: 'Schnellspannverschluss',
          es: 'Enganches de apertura rápida',
          fr: 'Verrous à Libération Rapide',
        },
        type: 'Illicit',
        ability: {
          en:
            "During the System Phase, you may spend 1 [Charge] to drop 1 cargo crate drift in your [Rear Arc] at range 0. It cannot overlap a ship this way.. This card's [Charge] cannot be recovered.",
          de:
            'Während der Systemphase darfst du 1 [Charge] ausgeben, um 1 Treibgut in deinem[Rear Arc]in Reichweite 0 zu platzieren. Es darf kein Schiff überschneiden. Die [Charge] dieser Karte können nicht wiederhergestellt werden.',
          es:
            'Durante la fase de Sistemas, puedes gastar 1 [Charge] para colocar 1 Cargamento a la deriva en tu [Rear Arc] a alcance 0, sin que pueda quedar solapado con una nave de esta manera. Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour placer 1 dérive de cargaison dans votre [Rear Arc] à portée 0. Le marqueur de dérive de cargaison ne peut pas chevaucher de vaisseau de cette manière. Les [Charge] de cette carte ne peuvent pas être récupérées.',
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Illicit'],
        ffg: 753,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'saboteursmap',
    sides: [
      {
        title: {
          en: "Saboteur's Map",
          de: 'Karte des Saboteurs',
          es: 'Mapa de saboteador',
          fr: 'Carte du Saboteur',
        },
        type: 'Illicit',
        ability: {
          en:
            'At the end of Setup, you may spend up to 1 [Charge] from each of your equipped Mine upgrades to place the corresponding device in the play area beyond range 2 of any enemy ship, strategic marker, or other device.',
          de:
            'Am Ende des Aufbaus darfst du bis zu 1 [Charge] von jeder deiner ausgerüsteten Mine-Aufwertungen ausgeben, um das entsprechende Gerät auf der Spielfläche jenseits von Reichweite 2 zu feindlichen Schiffen oder anderen Geräten zu platzieren.',
          es:
            'Al final de la Preparación, puedes gastar hasta 1 [Charge] de cada una de tus mejoras de Mina equipadas para colocar el correspondiente dispositivo en la zona de juego más allá de alcance 2 de toda nave enemiga y todo otro dispositivo.',
          fr:
            "À la fin de la Mise en place, vous pouvez dépenser jusqu'à 1 [Charge] de chacune de vos améliorations Mine équipées pour placer l'engin correspondant dans la zone de jeu au-delà de la portée 2 de tout vaisseau ennemi ou autre engin.",
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Illicit'],
        ffg: 754,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'scannerbaffler',
    sides: [
      {
        title: {
          en: 'Scanner Baffler',
          de: 'Scanner-Manipulator',
          es: 'Interferidor de sensores',
          fr: 'Scanner Cloisonné',
        },
        type: 'Illicit',
        ability: {
          en:
            'At the end of Setup, you may choose any number of other friendly, non-huge ships in your deployment area at range 0-1. If you do, place those ships anywhere in the same deployment area.',
          de:
            'Am Ende des Aufbaus darfst du bis zu 6 andere befreundete Standardschiffe in deiner Aufstellungszone in Reichweite 0-1 wählen. Falls du das tust, platziere diese Schiffe irgendwo in Reichweite 0-1.',
          es:
            'Al final de la Preparación, puedes elegir hasta 6 otras naves normales aliadas que tengas en tu zona de despliegue a alcance 0-1. Si lo haces, coloca esas naves en cualquier sitio que tengas a alcance 0-1.',
          fr:
            "À la fin de la Mise en place, vous pouvez choisir jusqu'à 6 autres vaisseaux standards alliés dans votre zone de déploiement à portée 0-1. Dans ce cas, placez ces vaisseaux n'importe où à portée 0-1.",
        },
        slots: ['Illicit'],
        ffg: 755,
      },
    ],
    cost: { value: 8 },
    restrictions: [{ baseSizes: ['Huge'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'falsetranspondercodes',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'After you acquire a lock on an object or an object acquires a lock on you, if you have 1 active [Charge], lose 1 [Charge] and jam that object, ignoring range restrictions.',
        },
        title: { en: 'False Transponder Codes' },
        type: 'Illicit',
        slots: ['Illicit'],
        ffg: 877,
      },
    ],
    cost: { value: 2 },
  },
];

export default t;

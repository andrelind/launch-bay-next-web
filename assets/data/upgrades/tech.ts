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
          it: 'Sensori Ottici Avanzati',
          pl: 'Zaawansowana optyka',
          pt: 'Advanced Optics',
          zh: 'Advanced Optics',
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
          it:
            'Mentre effettui un attacco, puoi spendere 1 segnalino concentrazione per cambiare 1 tuo risultato vuoto in 1 risultato [Hit].',
          pl:
            'Gdy wykonujesz atak, możesz wydać 1 żeton skupienia, aby zmienić 1 z twoich pustych wyników na wynik [Hit].',
          pt:
            'While you perform an attack, you may spend 1 focus token to change 1 of your blank results to a [Hit] result.',
          zh:
            'While you perform an attack, you may spend 1 focus token to change 1 of your blank results to a [Hit] result.',
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
          it: 'Verniciatura in Ferrosfera',
          pl: 'Farba ferrosferyczna',
          pt: 'Ferrosphere Paint',
          zh: 'Ferrosphere Paint',
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
          it:
            'Dopo che una nave nemica ti ha acquisito come bersaglio, se non sei nel suo [Bullseye Arc], quella nave ottiene 1 segnalino tensione.',
          pl:
            'Gdy wrogi statek cię namierzy, ale nie znajdujesz się w jego [Bullseye Arc], ten wrogi statek otrzymuje 1 żeton stresu.',
          pt:
            "After an enemy ship locks you, if you are not in that ship's [Bullseye Arc], that ship gains 1 stress token.",
          zh:
            "After an enemy ship locks you, if you are not in that ship's [Bullseye Arc], that ship gains 1 stress token.",
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
          it: 'Tracciatore di Dati Iperspaziali',
          pl: 'Dane śledzenia w hiperprzestrzeni',
          pt: 'Hyperspace Tracking Data',
          zh: 'Hyperspace Tracking Data',
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
          it:
            'Preparazione: Prima del passo "Collocare le Forze", puoi scegliere un numero tra 0 e 6. Durante la preparazione, considera il tuo valore di iniziativa come se fosse pari al valore scelto. Dopo la preparazione, assegna 1 segnalino concentrazione o schivata a ogni nave amica a gittata 0-2.',
          pl:
            'Przygotowanie gry: Przed rozmieszczeniem sił możesz zadeklarować liczbę od 0 do 6. Zadeklarowana liczba to twoja inicjatywa podczas przygotowania gry. Po przygotowaniu gry przypisz 1 żeton skupienia albo uników każdemu przyjaznemu statkowi w zasięgu 0-2.',
          pt:
            'Setup: Before placing forces, you may choose a number between 0 and 6. Treat your initiative as the chosen value during Setup. After Setup, assign 1 focus or evade token to each friendly ship at range 0-2.',
          zh:
            'Setup: Before placing forces, you may choose a number between 0 and 6. Treat your initiative as the chosen value during Setup. After Setup, assign 1 focus or evade token to each friendly ship at range 0-2.',
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
          it: 'Propulsori Ottimizzati',
          pl: 'Podrasowane silniki manewrowe',
          pt: 'Primed Thrusters',
          zh: 'Primed Thrusters',
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
          it:
            'Mentre possiedi 2 o meno segnalini tensione, puoi effettuare le azioni [Barrel Roll] e [Boost] anche mentre sei in tensione.',
          pl:
            'Gdy masz 2 albo mniej żetonów stresu, wolno ci wykonywać akcje [Barrel Roll] oraz [Boost] nawet wtedy, gdy posiadasz żeton stresu.',
          pt:
            'While you have 2 or fewer stress tokens, you can perform [Barrel Roll] and [Boost] actions even while stressed.',
          zh:
            'While you have 2 or fewer stress tokens, you can perform [Barrel Roll] and [Boost] actions even while stressed.',
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
          it: "Sincronizzatore d'Attacco",
          pl: 'Synchronizator namierzania',
          pt: 'Targeting Synchronizer',
          zh: 'Targeting Synchronizer',
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
          it:
            'Mentre una nave amica a gittata 1-2 effettua un attacco contro un bersaglio che hai acquisito come bersaglio, quella nave ignora il requisito di attacco [Lock].',
          pl:
            'Gdy przyjazny statek w zasięgu 1-2 wykonuje atak przeciwko namierzonemu przez ciebie celowi, ignoruje wymóg dotyczący ataku [Lock].',
          pt:
            'While a friendly ship at range 1-2 performs an attack against a target you have locked, that ship ignores the [Lock] attack requirement.',
          zh:
            'While a friendly ship at range 1-2 performs an attack against a target you have locked, that ship ignores the [Lock] attack requirement.',
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
          it: 'Matrice di Analisi',
          pl: 'Analizator schematów',
          pt: 'Pattern Analyzer',
          zh: 'Pattern Analyzer',
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
          it:
            'Mentre esegui completamente una manovra rossa, prima del passo "Controllare la Difficoltà",puoi effettuare 1 azione.',
          pl:
            'Gdy wykonujesz pełny czerwony manewr, przed etapem sprawdzenia trudności możesz wykonać 1 akcję.',
          pt:
            'While you fully execute a red maneuver, before the Check Difficulty step, you may perform 1 action.',
          zh:
            'While you fully execute a red maneuver, before the Check Difficulty step, you may perform 1 action.',
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
          it: 'Codici Bioesacriptati',
          pl: 'Kody bioheksakryptologiczne',
          pt: 'Biohexacrypt Codes',
          zh: 'Biohexacrypt Codes',
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
          it:
            'Mentre coordini o disturbi, se hai acquisito una nave come bersaglio, puoi spendere quel bersaglio acquisito per scegliere quella nave, ignorando le restrizioni di gittata.',
          pl:
            'Gdy wykonujesz koordynację albo zakłócanie, możesz wybrać namierzony przez ciebie statek, ignorując ograniczenia zasięgu, jeżeli wydasz z niego twoje namierzenie.',
          pt:
            'While you coordinate or jam, if you have a lock on a ship, you may spend that lock to choose that ship, ignoring range restrictions.',
          zh:
            'While you coordinate or jam, if you have a lock on a ship, you may spend that lock to choose that ship, ignoring range restrictions.',
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
          it: 'Deuterium Power Cells',
          pl: 'Deuterium Power Cells',
          pt: 'Deuterium Power Cells',
          zh: 'Deuterium Power Cells',
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
          it:
            'During the System Phase, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield. Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 [Charge] to gain 1 stress token instead.',
          pl:
            'During the System Phase, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield. Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 [Charge] to gain 1 stress token instead.',
          pt:
            'During the System Phase, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield. Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 [Charge] to gain 1 stress token instead.',
          zh:
            'During the System Phase, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield. Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 [Charge] to gain 1 stress token instead.',
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
          it: 'Automated Target Priority',
          pl: 'Automated Target Priority',
          pt: 'Automated Target Priority',
          zh: 'Automated Target Priority',
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
          it:
            'While you perform an attack, you must choose a defender at the closest valid attack range. After you perform an attack that missed, place 1 calculate token on this card.  Before you engage, you may remove 1 calculate token from this card to gain a matching token.',
          pl:
            'While you perform an attack, you must choose a defender at the closest valid attack range. After you perform an attack that missed, place 1 calculate token on this card.  Before you engage, you may remove 1 calculate token from this card to gain a matching token.',
          pt:
            'While you perform an attack, you must choose a defender at the closest valid attack range. After you perform an attack that missed, place 1 calculate token on this card.  Before you engage, you may remove 1 calculate token from this card to gain a matching token.',
          zh:
            'While you perform an attack, you must choose a defender at the closest valid attack range. After you perform an attack that missed, place 1 calculate token on this card.  Before you engage, you may remove 1 calculate token from this card to gain a matching token.',
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
          it: 'Sensor Buoy Suite',
          pl: 'Sensor Buoy Suite',
          pt: 'Sensor Buoy Suite',
          zh: 'Sensor Buoy Suite',
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
          it:
            'Setup: Before placing forces, place 2 sensor buoy remotes beyond range 2 of any edge. Before you engage, you may acquire a lock on a ship at range 0-1 of a friendly sensor buoy, ignoring range restrictions.',
          pl:
            'Setup: Before placing forces, place 2 sensor buoy remotes beyond range 2 of any edge. Before you engage, you may acquire a lock on a ship at range 0-1 of a friendly sensor buoy, ignoring range restrictions.',
          pt:
            'Setup: Before placing forces, place 2 sensor buoy remotes beyond range 2 of any edge. Before you engage, you may acquire a lock on a ship at range 0-1 of a friendly sensor buoy, ignoring range restrictions.',
          zh:
            'Setup: Before placing forces, place 2 sensor buoy remotes beyond range 2 of any edge. Before you engage, you may acquire a lock on a ship at range 0-1 of a friendly sensor buoy, ignoring range restrictions.',
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

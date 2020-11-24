import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'StarViper-class Attack Platform',
    de: 'Angriffsplattform der SternenViper-Klasse',
    fr: "Plateforme d'Attaque de Classe StarViper",
    it: "Piattaforma d'Attacco Classe StarViper",
    pl: 'Platforma szturmowa klasy Starviper',
    pt: 'Plataforma de Ataque classe StarViper',
    zh: 'StarViper-class Attack Platform',
    es: 'Plataforma de ataque clase Víbora Estelar',
  },
  xws: 'starviperclassattackplatform',
  ffg: 3,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3BW',
    '3FB',
    '3NW',
    '3PR',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  ability: {
    name: {
      en: 'Microthrusters',
      de: 'Mikrodüsen',
      fr: 'Micropropulseurs',
      es: 'Micropropulsores',
      pl: 'Mikroregulacja ciągu',
      zh: 'Microthrusters',
      it: 'Micropropulsori',
      pt: 'Micropropulsores',
    },
    text: {
      en:
        'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      de:
        'Solange du eine Fassrolle durchführst, musst du die [Bank Left]- oder [Bank Right]-Schablone anstatt der [Straight]-Schablone verwenden.',
      fr:
        'tant que vous effectuez un tonneau, vous devez utiliser le gabarit [Bank Left] ou [Bank Right] à la place du gabarit [Straight].',
      es:
        'Mientras realizas un tonel volado, debes utilizar la plantilla [Bank Left] o [Bank Right] en vez de la plantilla [Straight].',
      it:
        'Mentre effettui un avvitamento, devi usare il modello [Bank Left] o [Bank Right] invece del modello [Straight].',
      pl:
        'Gdy wykonujesz beczkę, musisz użyć wzornika [Bank Left] albo [Bank Right] zamiast wzornika [Straight].',
      pt:
        'Quando realizaruma pirueta, você deve usar ogabarito [Bank Left] ou [Bank Right] em vez do gabarito [Straight].',
      zh:
        'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_StarViper.png',
  pilots: [
    {
      name: {
        en: 'Black Sun Assassin',
        de: 'Attentäter der',
        fr: 'Assassin du Soleil Noir',
        es: 'Asesino del Sol Negro',
        it: 'Assassino del Sole Nero',
        pl: 'Zabójca Czarnego Słońca',
        pt: 'Assassino do Sol Negro',
        zh: 'Black Sun Assassin',
      },
      initiative: 3,
      limited: 0,
      cost: 48,
      xws: 'blacksunassassin',
      text: {
        en:
          'Although assassinations can be handled with a shot in the dark or a dire substance added to a drink, a flaming shuttle tumbling from the sky sends a special kind of message.',
        de:
          'Ein Attentat kann mit einem Schuss im Dunkeln oder mit einem vergifteten Getränk verübt werden. Aussagekräftiger ist jedoch eine brennende Raumfähre, die hilflos vom Himmel trudelt.',
        fr:
          "Abattre sa cible au coin d'une ruelle sombre ou ajouter une goutte de poison à une boisson sont des méthodes courantes d'assassinat, mais une navette en feu s'écrasant au sol fait passer un tout autre message.",
        es:
          'Aunque los asesinatos se pueden ejecutar mediante un disparo en la oscuridad o añadiendo alguna sustancia letal a una bebida, la visión de una lanzadera cayendo del cielo envuelta en llamas envía un tipo de mensaje muy distinto.',
        it:
          "Anche se un delitto può essere commesso con uno sparo nel buio o con l'aggiunta di una sostanza letale in una bevanda, una navetta in fiamme che precipita dal cielo trasmette un messaggio ben preciso.",
        pl:
          'Choć zabójstwa łatwiej dokonać pojedynczym strzałem z ciemności albo trucizną dodaną do napoju, to jednak płonący wrak promu spadający z nieba stanowi jednoznaczne przesłanie.',
        pt:
          'Apesar de assassinatos serem normalmente executados com um tiro certeiro ou com uma substância colocada em uma bebida, uma nave em chamas caindo do céu manda um outro tipo bem especial de mensagem.',
        zh:
          'Although assassinations can be handled with a shot in the dark or a dire substance added to a drink, a flaming shuttle tumbling from the sky sends a special kind of message.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_181.jpg',
      ffg: 181,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Black Sun Enforcer',
        de: 'Vollstrecker der',
        fr: 'Homme de Main du Soleil Noir',
        es: 'Ejecutor del Sol Negro',
        it: 'Esecutoredel Sole Nero',
        pl: 'Egzekutor Czarnego Słońca',
        pt: 'Executor do Sol Negro',
        zh: 'Black Sun Enforcer',
      },
      initiative: 2,
      limited: 0,
      cost: 45,
      xws: 'blacksunenforcer',
      text: {
        en:
          'Prince Xizor himself collaborated with MandalMotors to design the StarViper-class attack platform, one of the most formidable starfighters in the galaxy.',
        de:
          'Prinz Xizor persönlich entwickelte die Angriffsplattform der SternenViper-Klasse in Zusammenarbeit mit MandalMotors und schuf so einen der vorzüglichsten Sternenjäger der Galaxis.',
        fr:
          "Le prince Xizor en personne collabora avec MandalMotors pour concevoir la plateforme d'attaque de classe StarViper, l'un des plus redoutables chasseurs de la galaxie.",
        es:
          'El mismísimo príncipe Xizor colaboró con Motores Mandal en el diseño de la plataforma de ataque clase Víbora Estelar, uno de los cazas estelares más formidables de la galaxia.',
        it:
          "Il principe Xizor in persona collaborò con la MandalMotors per progettare la Piattaforma d'Attacco Classe StarViper, uno dei più formidabili astrocaccia della galassia.",
        pl:
          'Przy projektowaniu platformy szturmowej klasy Starviper z inżynierami MandalMotors współpracował sam Książę Xizor, dzięki czemu powstał jeden z najgroźniejszych myśliwców w galaktyce.',
        pt:
          'O príncipe Xizor em pessoa colaboroucom a MandalMotors para desenvolver o projeto da plataforma de ataque classe StarViper, um dos caças estelares mais formidáveis da galáxia.',
        zh:
          'Prince Xizor himself collaborated with MandalMotors to design the StarViper-class attack platform, one of the most formidable starfighters in the galaxy.',
      },
      slots: ['Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_182.jpg',
      ffg: 182,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Dalan Oberos',
        de: 'Dalan Oberos',
        fr: 'Dalan Oberos',
        es: 'Dalan Oberos',
        it: 'Dalan Oberos',
        pl: 'Dalan Oberos',
        pt: 'Dalan Oberos',
        zh: 'Dalan Oberos',
      },
      caption: {
        en: 'Elite Bounty Hunter',
        de: 'Elite-Kopfgeldjäger',
        fr: "Chasseur de Primes d'Élite",
        es: 'Cazarrecompensas de élite',
        it: "Cacciatore di Taglie d'Elite",
        pl: 'Elitarny łowca nagród',
        pt: 'Caçador de Recompensas de Elite',
        zh: 'Elite Bounty Hunter',
      },
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'dalanoberos-starviperclassattackplatform',
      ability: {
        en:
          'After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90˚.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, darfst du 1 Stressmarker erhalten, um dein Schiff um 90° zu drehen.',
        fr:
          'Après avoir entièrement exécuté une manœuvre, vous pouvez gagner 1 marqueur de stress pour pivoter votre vaisseau de 90°.',
        es:
          'Después de que ejecutes completamente una maniobra, puedes recibir 1 ficha de Tensión para girar tu nave 90˚ sobre sí misma.',
        it:
          'Dopo che hai eseguito completamente una manovra, puoi ottenere 1 segnalino tensione per ruotare la tua nave di 90°. Micropropulsori: Mentre effettui un avvitamento, devi usare il modello [Bank Left] o [Bank Right] invece del modello [Straight].',
        pl:
          'Gdy wykonasz pełny manewr, możesz otrzymać 1 żeton stresu, aby obrócić statek o 90 stopni.',
        pt:
          'Após executar completamenteuma manobra, você pode receber 1 ficha de estresse para rotacionar sua nave em 90˚. Micropropulsores: Quando realizar uma pirueta, vocêdeve usar o gabarito [Bank Left] ou [Bank Right]em vez do gabarito [Straight].',
        zh:
          'After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90˚.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_179.jpg',
      ffg: 179,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Guri',
        de: 'Guri',
        fr: 'Guri',
        es: 'Guri',
        it: 'Guri',
        pl: 'Guri',
        pt: 'Guri',
        zh: 'Guri',
      },
      caption: {
        en: "Prince Xizor's Bodyguard",
        de: 'Prinz Xizors Leibwächterin',
        fr: 'Garde du Corps du Prince Xizor',
        es: 'Guardaespaldas del príncipe Xizor',
        it: 'Guardia del Corpo del Principe Xizor',
        pl: 'Ochroniarz księcia Xizora',
        pt: 'Guarda-costas do Príncipe Xizor',
        zh: "Prince Xizor's Bodyguard",
      },
      initiative: 5,
      limited: 1,
      cost: 64,
      xws: 'guri',
      ability: {
        en:
          'At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.',
        de:
          'Zu Beginn der Kampfphase, falls mindestens 1 feindliches Schiff in Reichweite 0-1 ist, darfst du 1 Fokusmarker erhalten.',
        fr:
          "Au début de la phase d'engagement, s'il y a au moins 1 vaisseau ennemi à portée 0-1, vous pouvez gagner 1 marqueur de concentration.",
        es:
          'Al comienzo de la fase de Enfrentamiento, si tienes al menos 1 nave enemiga a alcance 0-1, puedes recibir 1 ficha de Concentración.',
        it:
          "All'inizio della Fase di Ingaggio, se ci sono navi nemiche a gittata 0-1, puoi ottenere 1 segnalino concentrazione. Micropropulsori: Mentre effettui un avvitamento, devi usare il modello [Bank Left] o [Bank Right] invece del modello [Straight].",
        pl:
          'Na początku fazy walki, jeżeli w zasięgu 0-1 znajduje się co najmniej 1 wrogi statek, możesz otrzymać 1 żeton skupienia.',
        pt:
          'No início da Fase de Engajamento,se houver ao menos uma nave inimiga em alcance 0-1, você pode receber1 ficha de foco. Micropropulsores: Quando realizar uma pirueta, você deve usar o gabarito [Bank Left] ou [Bank Right] em vez do gabarito [Straight].',
        zh:
          'At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_178.jpg',
      ffg: 178,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Prince Xizor',
        de: 'Prinz Xizor',
        fr: 'Prince Xizor',
        es: 'Príncipe Xizor',
        it: 'Principe Xizor',
        pl: 'Książe Xizor',
        pt: 'Príncipe Xizor',
        zh: 'Prince Xizor',
      },
      caption: {
        en: 'Black Sun Kingpin',
        de: 'Boss der Schwarzen Sonne',
        fr: 'Parrain du Soleil Noir',
        es: 'Amo del Sol Negro',
        it: 'Signore del Crimine del Sole Nero',
        pl: 'Herszt Czarnego Słońca',
        pt: 'Chefe do Sol Negro',
        zh: 'Black Sun Kingpin',
      },
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'princexizor',
      ability: {
        en:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 [Hit] or [Critical Hit] damage. If it does, cancel 1 matching result.',
        de:
          'Solange du verteidigst, nach dem Schritt „Ergebnisse neutralisieren", darf ein anderes befreundetes Schiff in Reichweite 0-1 und im Angriffswinkel 1 [Hit]- oder [Critical Hit]-Schaden erleiden. Falls es das tut, negiere 1 passendes Ergebnis.',
        fr:
          "Tant que vous défendez, après l'étape « Neutraliser les résultats », un autre vaisseau allié à portée 0-1 et dans l'arc de l'attaque peut subir 1 dégât [Hit] ou [Critical Hit]. Dans ce cas, annulez 1 dégât correspondant.",
        es:
          'Mientras te defiendes, después del paso de "Neutralizar los resultados", otra nave aliada que tengas a alcance 0-1 y en el arco de ataque puede sufrir 1 de daño [Hit] o [Critical Hit]. Si lo haces, anula 1 resultado equivalente.',
        it:
          'Mentre difendi, dopo il passo "Neutralizzare i Risultati", 1 altra nave amica a gittata 0-1 e nell\'arco di attacco può subire 1 danno [Hit] o [Critical Hit]. Se lo fa, annulla 1 risultato corrispondente. Micropropulsori: Mentre effettui un avvitamento, devi usare il modello [Bank Left] o [Bank Right] invece del modello [Straight].',
        pl:
          'Gdy się bronisz, po etapie neutralizacji wyników, inny przyjazny statek w twojej strefie rażenia i zasięgu 0-1 może przyjąć 1 uszkodzenie [Hit] albo [Critical Hit]. Jeżeli tak zrobisz, anuluj 1 analogiczny wynik.',
        pt:
          'Quando você defender, após a etapa Neutralizar Resultados, outra nave amiga em alcance 0-1 e no arco de ataque pode sofrer 1 dano [Hit] ou [Critical Hit]. Se ela fizer isso, cancele 1 resultado correspondente. Micropropulsores: Quando realizaruma pirueta, você deve usar ogabarito [Bank Left] ou [Bank Right] em vez do gabarito [Straight].',
        zh:
          'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 [Hit] or [Critical Hit] damage. If it does, cancel 1 matching result.',
      },
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_180.jpg',
      ffg: 180,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

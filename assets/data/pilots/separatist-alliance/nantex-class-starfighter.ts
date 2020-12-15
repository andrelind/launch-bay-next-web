import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Nantex-class Starfighter',
    de: 'Sternenjäger der Nantex-Klasse',
    fr: 'Chasseur de Classe Nantex',
    es: 'Caza estelar clase Nantex',
  },
  xws: 'nantexclassstarfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
  ],
  ability: {
    name: {
      en: 'Pinpoint Tractor Array',
      de: 'Fangstrahl-Zielsystem',
      fr: 'Dispositif Tracteur de Précision',
      es: 'Campos de tracción de alta precisión',
      it: 'Pinpoint Tractor Array',
      pl: 'Precyzyjna wiązka ściągająca',
      pt: 'Pinpoint Tractor Array',
      zh: 'Pinpoint Tractor Array',
    },
    text: {
      en:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      de:
        'Du kannst deinen [Single Turret Arc] nicht auf deinen [Rear Arc]rotieren. Nachdem du ein Manöver ausgeführt hast, darfst du 1 Fangstrahlmarker erhalten, um eine [Rotate Arc] -Aktion durchzuführen.',
      fr:
        'vous ne pouvez pas faire pivoter votre [Single Turret Arc] vers votre [Rear Arc]. Après avoir exécuté une manœuvre, vous pouvez gagner 1 marqueur de rayon tracteur pour effectuer une action [Rotate Arc].',
      es:
        'No puedes reorientar tu [Single Turret Arc] hacia tu [Rear Arc]. Después de que ejecutes una maniobra, puedes recibir 1 ficha de Campo de tracción para realizar una acción [Rotate Arc].',
      it:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      pl:
        'Nie możesz obracać swojego wskaźnika [Single Turret Arc] na twoją [Rear Arc]. Gdy wykonasz manewr, możesz otrzymać 1 żeton wiązki ściągającej, aby wykonać akcję [Rotate Arc].',
      pt:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
      zh:
        'You cannot rotate your [Single Turret Arc] to your [Rear Arc]. After you execute a maneuver, you may gain 1 tractor token to perform a [Rotate Arc] action.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Stalgasin Hive Guard',
        de: 'Schwarmgarde der Stalgasin-Kolonie',
        fr: 'Garde de la Ruche Stalgasin',
        es: 'Guardia de la Colmena Stalgasin',
      },
      initiative: 3,
      limited: 0,
      xws: 'stalgasinhiveguard',
      hyperspace: false,
      epic: true,
      text: {
        en:
          'Designed for the unique physiology of Geonosian pilots, Nantex-class starfighters are capable of maneuvers that would rip most ships—and pilots—apart.',
        de:
          'Speziell auf die physiologischen Besonderheiten der Geonosianer angepasst, kann der Sternenjäger der Nantex-Klasse Manöver fliegen, welche die meisten anderen Schiffe - und ihre Piloten - auseinanderreißen würden.',
        fr:
          'Conçu pour la physiologie spécifique des pilotes Géonosiens, les chasseurs de classe Nantex sont capables de manœuvres qui briseraient la plupart des vaisseaux et des pilotes.',
        es:
          'Diseñados para la particular fisiología de los pilotos geonosianos, los cazas estelares de clase Nantex son capaces de efectuar maniobras que harían pedazos a la mayoría de naves y pilotos.',
      },
      slots: ['Talent'],
      cost: 33,
      ffg: 609,
    },
    {
      name: { en: 'Sun Fac' },
      initiative: 6,
      limited: 1,
      xws: 'sunfac',
      ability: {
        en:
          'While you perform a primary attack, if the defender is tractored, roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls der Verteidiger gefangen ist, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale, si le défenseur est tracté, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si el defensor está atrapado en un campo de tracción, tiras 1 dado de ataque adicional.',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 45,
      ffg: 604,
      caption: {
        en: "Archduke's Enforcer",
        de: 'Vollstrecker des Erzherzogs',
        fr: "Homme de Main de l'Archiduc",
        es: 'Lugarteniente del Archiduque',
      },
    },
    {
      name: { en: 'Berwer Kret' },
      xws: 'berwerkret',
      initiative: 5,
      limited: 1,
      ability: {
        en:
          'After you perform an attack that hits, each friendly ship with [Calculate] on its action bar and a lock on the defender may perform a red [Calculate] action.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, der getroffen hat, darf jedes befreundete Schiff mit [Calculate] in seiner Aktionsleiste, das den Verteidiger als Ziel erfasst hat, eine rote [Calculate] -Aktion durchführen.',
        fr:
          "Après que vous avez effectué une attaque qui touche, chaque vaisseau allié avec [Calculate] dans sa barre d'action et un verrouillage sur le défenseur peut effectuer une action [Calculate] rouge.",
        es:
          'Después de que efectúes un ataque que impacte, toda nave aliada con [Calculate] en su barra de acciones y un Blanco fijado sobre el defensor puede realizar una acción [Calculate] roja.',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 37,
      ffg: 605,
      caption: {
        en: 'Hive Guard Captain',
        de: 'Captain der Schwarmgarde',
        fr: 'Capitaine de la Garde de la Ruche',
        es: 'Capitán de la guardia de la colmena',
      },
    },
    {
      name: { en: 'Chertek' },
      xws: 'chertek',
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'While you perform a primary attack, if the defender is tractored, you may reroll up to 2 attack dice.',
        de:
          'Solange du einen Primärangriff durchführst, falls der Verteidiger gefangen ist, darfst du bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, si le défenseur est tracté, vous pouvez relancer jusqu'à 2 dés d'attaque.",
        es:
          'Mientras efectúas un ataque principal, si el defensor está atrapado en un campo de tracción, puedes volver a tirar hasta 2 dados de ataque.',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Talent'],
      cost: 36,
      ffg: 606,
      caption: {
        en: 'Opportunistic Ace',
        de: 'Opportunistisches Fliegerass',
        fr: 'As Opportuniste',
        es: 'As oportunista',
      },
    },
    {
      name: { en: 'Gorgol' },
      xws: 'gorgol',
      initiative: 2,
      limited: 1,
      ability: {
        en:
          'During the System Phase, you may gain 1 disarm token and choose a friendly ship at range 1-2. If you do, it gains 1 tractor token, then repairs 1 of its faceup Ship trait damage cards.',
        de:
          'Während der Systemphase darfst du 1 Entwaffnet-Marker erhalten und ein befreundetes Schiff in Reichweite 1-2 wählen. Falls du das tust, erhält es 1 Fangstrahlmarker, dann repariert es 1 seiner offenen Schiff -Schadenskarten.',
        fr:
          'Pendant la phase de système, vous pouvez gagner 1 marqueur de désarmement et choisir un vaisseau allié à porté 1-2. Dans ce cas, il gagne 1 marqueur de rayon tracteur, puis il répare 1 de ses cartes de dégât face visible Vaisseau.',
        es:
          'Durante la fase de Sistemas, puedes recibir 1 ficha de Desarme y elegir una nave aliada que tengas a alcance 1-2. Si lo haces, esa nave recibe 1 ficha de Campo de tracción, y luego repara 1 de de sus cartas de Daño con el atributo Nave .',
      },
      hyperspace: true,
      epic: true,
      slots: ['Talent', 'Modification'],
      cost: 32,
      ffg: 607,
      caption: {
        en: 'Handy Engineer',
        de: 'Geschickter Ingenieur',
        fr: 'Ingénieur Habile',
        es: 'Ingeniero mañoso',
      },
    },
    {
      name: {
        en: 'Petranaki Arena Ace',
        de: 'Ass der Petranaki-Arena',
        fr: "As de l'Arène Petranaki",
        es: 'As del coliseo Petranaki',
      },
      cost: 35,
      ffg: 608,
      initiative: 4,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/5c32b5d481ad922be7a0ec4a3743d1d6.jpg',
      text: {
        en:
          'The Petranaki Arena is a massive edifice on Geonosis that was a key site in the first battle of the Clone Wars.',
        de:
          'Die Petranaki-Arena ist ein gewaltiges Bauwerk auf dem Planeten Geonosis und der Ort, an dem die erste Schlacht der Klonkriege geschlagen wurde.',
        fr:
          "L'Arène de Petranaki est un gigantesque édifice de Géonosis qui a été le lieu principal de la première bataille de la Guerre des Clones.",
        es:
          'El coliseo Petranaki es un edificio gigantesco de Geonosis que fue un lugar clave en la primera batalla de las Guerras Clon.',
      },
      hyperspace: false,
      epic: true,
      limited: 0,
      slots: ['Talent', 'Talent'],
      xws: 'petranakiarenaace',
    },
  ],
  ffg: 67,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Nantex_Class_Starfighter.png',
};

export default t;

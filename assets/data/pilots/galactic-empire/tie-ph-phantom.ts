import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ph Phantom',
    de: 'TIE/ph-Phantom',
    fr: 'TIE/ph Fantôme',
    es: 'TIE/ph Fantasma',
  },
  xws: 'tiephphantom',
  ffg: 27,
  size: 'Small',
  dial: [
    '1TW',
    '1BW',
    '1NW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Cloak' },
  ],
  ability: {
    name: {
      en: 'Stygium Array',
      de: 'Stygium-Gitter',
      fr: 'Réseau de Stygium',
      es: 'Matriz de estigio',
      it: 'Apparato di Stygium',
      pl: 'Matryca ze stygium',
      pt: 'Matriz de Stygium',
      zh: 'Stygium Array',
    },
    text: {
      en:
        'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      de:
        'Nachdem du dich enttarnt hast, darfst du eine [Evade]-Aktion durchführen. Zu Beginn der Endphase darfst du 1 Ausweichmarker ausgeben, um 1 Tarnungsmarker zu erhalten.',
      fr:
        "après vous être désocculté, vous pouvez effectuer une action [Evade]. Au début de la phase de dénouement, vous pouvez dépenser 1 marqueur d'évasion pour gagner 1 marqueur d'occultation.",
      es:
        'Después de que desactives el camuflaje, puedes realizar una acción [Evade]. Al comienzo de la fase Final, puedes gastar 1 ficha de Evasión para recibir 1 ficha de Camuflaje.',
      it:
        "Dopo che ti sei deoccultato, puoi effettuare 1 azione [Evade]. All'inizio della Fase Finale, puoi spendere 1 segnalino schivata per ottenere 1 segnalino occultamento.",
      pl:
        'Gdy wyłączysz maskowanie, możesz wykonać akcję [Evade]. Na początku fazy końcowej możesz wydać 1 żeton uniku, aby otrzymać 1 żeton maskowania.',
      pt:
        'Após descamuflar,você pode realizar uma ação [Evade]. No início da Fase Final, você pode gastar 1 ficha de desvio para receber 1 ficha de camuflagem.',
      zh:
        'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEPhantom.png',
  pilots: [
    {
      name: { en: '"Echo"', de: '„Echo"', es: '"Eco"' },
      caption: {
        en: 'Slippery Trickster',
        de: 'Aalglatter Schelm',
        fr: 'Illusionniste Insaisissable',
        es: 'Embaucadora artera',
      },
      initiative: 4,
      limited: 1,
      cost: 51,
      xws: 'echo',
      ability: {
        en:
          'While you decloak, you must use the (2 [Bank Left]) or (2 [Bank Right]) template instead of the (2 [Straight]) template.',
        de:
          'Solange du dich enttarnst, musst du die (2 [Bank Left])- oder (2 [Bank Right])-Schablone anstatt der (2 [Straight])-Schablone verwenden.',
        fr:
          'Lorsque vous vous désoccultez, vous devez utiliser le gabarit (2 [Bank Left]) ou (2 [Bank Right]) à la place du gabarit (2 [Straight]).',
        es:
          'Mientras desactivas el camuflaje, debes utilizar la plantilla (2 [Bank Left]) o (2 [Bank Right]) en vez de la plantilla (2 [Straight]).',
      },
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_132.jpg',
      ffg: 132,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: '"Whisper"', de: '„Geflüster"', es: '"Susurro"' },
      caption: {
        en: 'Soft-Spoken Slayer',
        de: 'Mörder der leisen Töne',
        fr: 'Tueur à la Voix Suave',
        es: 'Asesino afable',
      },
      initiative: 5,
      limited: 1,
      cost: 60,
      xws: 'whisper',
      ability: {
        en: 'After you perform an attack that hits, gain 1 evade token.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, der getroffen hat, erhalte 1 Ausweichmarker.',
        fr:
          "Après avoir effectué une attaque qui touche, gagnez 1 marqueur d'évasion.",
        es:
          'Después de que efectúes un ataque que impacte, recibes 1 ficha de Evasión.',
      },
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_131.jpg',
      ffg: 131,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Imdaar Test Pilot',
        de: 'Testpilot von Imdaar',
        fr: "Pilote d'Essai Imdaar",
        es: 'Piloto de pruebas de Imdaar',
      },
      initiative: 3,
      limited: 0,
      cost: 43,
      xws: 'imdaartestpilot',
      text: {
        en:
          'The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom achieves what many thought was impossible: a small starfighter equipped with an advanced cloaking device.',
        de:
          'In einem geheimen Forschungsprojekt auf dem Mond Imdaar Alpha wurde entwickelt, was viele für unmöglich gehalten hatten: der TIE-Phantom, ein kleiner Sternenjäger mit Tarnvorrichtung.',
        fr:
          "Conçu dans un centre de recherches secret sur Imdaar Alpha, le TIE Fantôme concrétise ce qui semblait impossible : un petit chasseur furtif équipé d'un système d'occultation avancé.",
        es:
          'EL TIE Fantasma, producto de las investigaciones llevadas a cabo en unas instalaciones secretas de Imdaar Alfa, es algo que muchos creían imposible: un caza estelar de dimensiones reducidas equipado con un avanzado dispositivo de camuflaje.',
      },
      slots: ['Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_134.jpg',
      ffg: 134,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Sigma Squadron Ace',
        de: 'Fliegerass der Sigma-Staffel',
        fr: "As de l'Escadron Sigma",
        es: 'As del Escuadrón Sigma',
      },
      initiative: 4,
      limited: 0,
      cost: 48,
      xws: 'sigmasquadronace',
      text: {
        en:
          'Featuring a hyperdrive and shields, the TIE phantom is also equipped with five laser cannons, giving it substantial firepower for an Imperial fighter.',
        de:
          'Der TIE-Phantom ist nicht nur mit Schilden und einem Hyperantrieb, sondern auch mit fünf Laserkanonen ausgestattet, was ihn zu einem der schlagkräftigsten Jäger des Imperiums macht.',
        fr:
          "Équipé d'un hyperdrive et de boucliers, le TIE Fantôme dispose également de cinq canons laser qui lui confèrent une puissance de feu inouïe pour un chasseur Impérial.",
        es:
          'Provisto de hiperimpulsor y escudos deflectores, el TIE Fantasma también está equipado con cinco cañones láser, lo que le proporciona una potencia de fuego impresionante para un caza imperial.',
      },
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_133.jpg',
      ffg: 133,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

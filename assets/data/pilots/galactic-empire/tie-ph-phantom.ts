import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ph Phantom',
    de: 'TIE/ph-Phantom',
    fr: 'TIE/ph Fantôme',
    it: 'TIE/ph Phantom',
    pl: 'TIE/ph Phantom',
    pt: 'TIE/ph Phantom',
    zh: 'TIE/ph Phantom',
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
      name: {
        en: '"Echo"',
        de: '„Echo"',
        fr: '"Echo"',
        es: '"Eco"',
        it: '"Echo"',
        pl: '„Echo"',
        pt: '"Echo"',
        zh: '"Echo"',
      },
      caption: {
        en: 'Slippery Trickster',
        de: 'Aalglatter Schelm',
        fr: 'Illusionniste Insaisissable',
        es: 'Embaucadora artera',
        it: 'Ingannatrice Sfuggente',
        pl: 'Przebiegła szelma',
        pt: 'Trapaceiro Escorregadio',
        zh: 'Slippery Trickster',
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
        it:
          'Mentre ti deocculti, devi usare il modello (2 [Bank Left]) o (2 [Bank Right]) invece del modello (2 [Straight]).',
        pl:
          'Gdy wyłączasz maskowanie, musisz użyć wzornika (2 [Bank Left]) albo (2 [Bank Right]) zamiast (2 [Straight]).',
        pt:
          'Quando descamuflar, você deveusar o gabarito (2 [Bank Left]) ou (2 [Bank Right]) emvez do gabarito (2 [Straight]).',
        zh:
          'While you decloak, you must use the (2 [Bank Left]) or (2 [Bank Right]) template instead of the (2 [Straight]) template.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_132.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/e9254c524502e876d016303f6ca5bc14.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/4e13e5dc38b03eeb45b8d4d15b1b4f03.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/4ad9674f9e506c6984e6083bee16b8b4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/aa25e2ee63f5f2399562a04f0920244a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/ffce1d15caeac42135e74b6e55dfc9e5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/092624bd4c9cc85c02d997233d5cc1f2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_132.png',
      },
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_132.jpg',
      ffg: 132,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Whisper"',
        de: '„Geflüster"',
        fr: '"Whisper"',
        es: '"Susurro"',
        it: '"Whisper"',
        pl: '„Szept"',
        pt: '"Whisper"',
        zh: '"Whisper"',
      },
      caption: {
        en: 'Soft-Spoken Slayer',
        de: 'Mörder der leisen Töne',
        fr: 'Tueur à la Voix Suave',
        es: 'Asesino afable',
        it: 'Mite Assassina',
        pl: 'Milczący morderca',
        pt: 'Assassino de Voz Doce',
        zh: 'Soft-Spoken Slayer',
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
        it:
          'Dopo che hai effettuato un attacco che ha colpito, ottieni 1 segnalino schivata.',
        pl: 'Gdy wykonasz atak, który trafił, zyskujesz 1 żeton uniku.',
        pt:
          'Após você realizar um ataque queacertou, receba 1 ficha de desvio.',
        zh: 'After you perform an attack that hits, gain 1 evade token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_131.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/82dbc98a8c89631b0447f6c866875f13.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/ebf11a860c43b839ed7aaa3f144f8286.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/77141bc1513f949ea716fb3af346bbfd.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/00bc8952ecb77de9c2966cfa4a164b09.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/ce2de23cc6951ad6a835b7f94febf4e6.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/2c6644c529fecadbfa30a9a7aefc728e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_131.png',
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
        it: 'Pilota Collaudatoredi Imdaar',
        pl: 'Oblatywacz z Imdaar',
        pt: 'Pil. de Testes de Imdaar',
        zh: 'Imdaar Test Pilot',
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
        it:
          'Il TIE Phantom, il risultato primario della struttura di ricerca segreta chiamata Imdaar Alfa, è ciò che molti consideravano impossibile: un piccolo astrocaccia dotato di un evoluto dispositivo di occultamento.',
        pl:
          'TIE Phantom jest efektem prac w ukrytej bazie na Imdaar Alpha. Inżynierom udało się dokonać czegoś, co wydawało się niemożliwe - stworzyć myśliwiec z zaawansowanym urządzeniem maskującym.',
        pt:
          'Sendo o principal resultado de uma base de pesquisa escondida em Imdaar Alfa, a TIE phantom alcançou algo que muitos julgavam impossível: um pequeno caça estelar equipado com um dispositivo de camuflagem avançado.',
        zh:
          'The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom achieves what many thought was impossible: a small starfighter equipped with an advanced cloaking device.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_134.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/dcdf953d4e05f4db2d1271b5509f218f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/153f8cdbcbc232e11e6204a9e6b6978b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/be3faff907fdc949e41412dc99254acf.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/d831076d4943466a7304e857fb27072e.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/6045e753653fc8a53ae6e428d1fbdf7b.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/d44dba7b1165194101065125137aea93.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_134.png',
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
        it: 'Asso dellaSquadriglia Sigma',
        pl: 'As Eskadry Sigma',
        pt: 'Ás do Esquadrão Sigma',
        zh: 'Sigma Squadron Ace',
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
        it:
          'Il TIE Phantom, dotato di iperguida e di scudi, vanta anche cinque cannoni laser che gli forniscono una potenza di fuoco notevole per un caccia Imperiale.',
        pl:
          'TIE Phantom poza osłonami i hipernapędem jest także wyposażony w pięć działek laserowych, co stanowi znaczącą siłę ognia jak na myśliwiec Imperium.',
        pt:
          'Dispondo de um hiperpropulsor e escudos, a TIE phantom também é equipada com cinco canhõesde laser, garantindo poder de fogo considerávelpara um caça Imperial.',
        zh:
          'Featuring a hyperdrive and shields, the TIE phantom is also equipped with five laser cannons, giving it substantial firepower for an Imperial fighter.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_133.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/68c3119ee87144b3262e91a08fecda08.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/63ce3f559f43c16fc97f0cf92cca4544.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b992855555fa8116b253206c72bb274a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/abdb28c1fb274b5269de416cf75f197e.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/a725a65affefe61988a3f851669937bb.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/bda2a5a475e861217ed8a7b59f50209b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_133.png',
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

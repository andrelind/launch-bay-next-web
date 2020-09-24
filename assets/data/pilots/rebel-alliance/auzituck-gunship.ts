import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Auzituck Gunship',
    de: 'Auzituck-Kanonenboot',
    fr: 'Canonnière Auzituck',
    it: 'Cannoniera Auzituck',
    pl: 'Kanonierka Auzituck',
    pt: 'Nave de Ataque Auzituck',
    zh: 'Auzituck Gunship',
    es: 'Cañonera Auzituck',
  },
  xws: 'auzituckgunship',
  ffg: 6,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Auzituck.png',
  pilots: [
    {
      name: {
        en: 'Kashyyyk Defender',
        de: 'Verteidiger von Kashyyyk',
        fr: 'Défenseur de Kashyyyk',
        es: 'Defensor de Kashyyyk',
        it: 'Difensore di Kashyyyk',
        pl: 'Obrońca Kashyyyk',
        pt: 'Defensor Kashyyyk',
        zh: 'Kashyyyk Defender',
      },
      initiative: 1,
      limited: 0,
      cost: 42,
      xws: 'kashyyykdefender',
      text: {
        en:
          'Equipped with three wide-range Sureggi twin laser cannons, the Auzituck gunship acts as a powerful deterrent to slaver operations in the Kashyyyk system.',
        de:
          'Mit seinen drei weitreichenden Sureggi-Zwillingslaserkanonen soll das Auzituck-Kanonenboot Sklavenjäger im Kashyyyk-System abschrecken.',
        fr:
          'Équipée de trois canons laser jumelés Sureggi longue portée, la canonnière Auzituck donnait du fil à retordre aux esclavagistes dans le système de Kashyyyk.',
        es:
          'Equipada con tres cañones láser dobles Sureggi de amplio alcance, la cañonera Auzituck sirve como un potente elemento disuasorio ante las actividades esclavistas en el sistema Kashyyyk.',
        it:
          'Dotata di tre cannoni laser binati Sureggi ad ampio raggio, la cannoniera Auzituck costituiva un potente deterrente per le operazioni degli schiavisti nel sistema Kashyyyk.',
        pl:
          'Atutem kanonierek Auzituck jest szerokie pole rażenia zapewniane przez trzy podwójnie sprzężone działa laserowe typu Sureggi. Statki te skutecznie odstraszają z systemu Kashyyyk łowców niewolników.',
        pt:
          'Equipada com três canhões laser paralelosSureggi de longo alcance, a Nave de Ataque Auzituck age como um poderoso dissuasor das operações escravagistas do sistema Kashyyyk.',
        zh:
          'Equipped with three wide-range Sureggi twin laser cannons, the Auzituck gunship acts as a powerful deterrent to slaver operations in the Kashyyyk system.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_33.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c74566c2100215f45a8129e5162bf5f1.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/6a785dcb7b97d3d064abedf380fdf8ad.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/e626d5320128d29ede9cc0845874c526.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/8adad9e772fd3645c78a2a781a999c92.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3f85b376fa1c6f3b9d3859f8bf853208.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7224c481b26a15ae86f46c55cddbc3e7.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_33.png',
      },
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_33.jpg',
      ffg: 33,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Lowhhrick',
        de: 'Lowhhrick',
        fr: 'Lowhhrick',
        es: 'Lowhhrick',
        it: 'Lowhhrick',
        pl: 'Lowhhrick',
        pt: 'Lowhhrick',
        zh: 'Lowhhrick',
      },
      caption: {
        en: 'Escaped Gladiator',
        de: 'Entflohener Gladiator',
        fr: 'Gladiateur Rescapé',
        es: 'Gladiador fugado',
        it: 'Gladiatore in Fuga',
        pl: 'Zbiegły gladiator',
        pt: 'Gladiador Fugitivo',
        zh: 'Escaped Gladiator',
      },
      initiative: 3,
      limited: 1,
      cost: 51,
      xws: 'lowhhrick',
      ability: {
        en:
          'After a friendly ship at range 0-1 becomes the defender, you may spend 1 reinforce token. If you do, that ship gains 1 evade token.',
        de:
          'Solange du einen Primärangriff durchführst, falls du beschädigt bist, darfst du 1 zusätzlichen Angriffswürfel werfen.',
        fr:
          "Après qu'un vaisseau allié à portée 0-1 est devenu le défenseur, vous pouvez dépenser 1 marqueur de renforcement. Dans ce cas, le vaisseau défenseur gagne 1 marqueur d'évasion.",
        es:
          'Después de que una nave aliada que tengas a alcance 0-1 se convierta en el defensor, puedes gastar 1 ficha de Refuerzo. Si lo haces, esa nave recibe 1 ficha de Evasión.',
        it:
          'Dopo che una nave amica a gittata 0-1 è diventata il difensore, puoi spendere 1 segnalino rinforzo. Se lo fai, quella nave ottiene 1 segnalino schivata.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-1 zostanie wskazany jako obrońca, możesz wydać 1 żeton wzmocnienia. Jeżeli tak zrobisz, wskazany statek otrzymuje 1 żeton uników.',
        pt:
          'Após uma nave amiga em alcance 0-1se tornar defensora, você pode gastar1 ficha de reforço. Se você fizer isso,a nave que se tornou defensorarecebe 1 ficha de desvio.',
        zh:
          'After a friendly ship at range 0-1 becomes the defender, you may spend 1 reinforce token. If you do, that ship gains 1 evade token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_32.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/cc967259d668c9cfd66b4fe5f161d351.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a9d7a7051b352fca24eeea45ebae6f7c.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ca7bb2baf5c7e809dd9a1e29ddd546c2.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f4e298e3ec42fde39bdaa8897074ac84.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/acada735474be4fdee712587c2950c61.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/bf2a3c9e41756a57bc3aa0744ecf792e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_32.png',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_32.jpg',
      ffg: 32,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Wullffwarro',
        de: 'Wullffwarro',
        fr: 'Wullffwarro',
        es: 'Wullffwarro',
        it: 'Wullffwarro',
        pl: 'Wullffwarro',
        pt: 'Wullffwarro',
        zh: 'Wullffwarro',
      },
      caption: {
        en: 'Wookiee Chief',
        de: 'Wookiee-Häuptling',
        fr: 'Chef Wookie',
        es: 'Caudillo wookiee',
        it: 'Capotribù Wookiee',
        pl: 'Wódz Wookiech',
        pt: 'Chefe Wookiee',
        zh: 'Wookiee Chief',
      },
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'wullffwarro',
      ability: {
        en:
          'While you perform a primary attack, if you are damaged, you may roll 1 additional attack die.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 0-1 zum Verteidiger geworden ist, darfst du 1 Verstärkungsmarker ausgeben. Falls du das tust, erhält jenes Schiff 1 Ausweichmarker.',
        fr:
          "Tant que vous effectuez une attaque principale, si vous êtes endommagé, vous pouvez lancer 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si estás dañado, puedes tirar 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco primario, se sei danneggiato, puoi tirare 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy i jesteś uszkodzony, możesz rzucić 1 dodatkową kością ataku.',
        pt:
          'Quando realizar um ataque primário,se estiver danificado, você pode rolar1 dado de ataque adicional.',
        zh:
          'While you perform a primary attack, if you are damaged, you may roll 1 additional attack die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_31.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5ed10d8c67a08bb02853d6c5b8f19589.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c503f766f6664dd5452761d774a19916.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b41a7e07fd1a9d446a957c59460d1216.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/451b0b09094e2c7756c5b44287f6f901.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/ca057142e3e704a18fd01cecf0194d2a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/563b02e7237984b9fa8a6393d2c4a938.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_31.png',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_31.jpg',
      ffg: 31,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

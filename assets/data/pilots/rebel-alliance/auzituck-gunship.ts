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
      cost: 44,
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
      cost: 50,
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
      cost: 53,
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

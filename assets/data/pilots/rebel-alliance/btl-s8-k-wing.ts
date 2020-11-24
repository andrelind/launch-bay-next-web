import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-S8 K-wing',
    de: 'BTL-S8-K-Flügler',
    fr: 'K-wing BTL-S8',
    it: 'Ala-K BTL-S8',
    pl: 'K-wing BTL-S8',
    pt: 'K-wing BTL-S8',
    zh: 'BTL-S8 K-wing',
    es: 'BTL-S8 Ala-K',
  },
  xws: 'btls8kwing',
  ffg: 30,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FW',
    '3NW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_K-wing.png',
  pilots: [
    {
      name: {
        en: 'Esege Tuketu',
        de: 'Esege Tuketu',
        fr: 'Esege Tuketu',
        es: 'Esege Tuketu',
        it: 'Esege Tuketu',
        pl: 'Esege Tuketu',
        pt: 'Esege Tuketu',
        zh: 'Esege Tuketu',
      },
      caption: {
        en: 'Selfless Hero',
        de: 'Selbstloser Held',
        fr: 'Héros Altruiste',
        es: 'Héroe abnegado',
        it: 'Eroe Altruista',
        pl: 'Bezinteresowny bohater',
        pt: 'Herói Altruísta',
        zh: 'Selfless Hero',
      },
      initiative: 3,
      limited: 1,
      cost: 44,
      xws: 'esegetuketu',
      ability: {
        en:
          'While a friendly ship at range 0-2 defends or performs an attack, it may spend your focus tokens as if that ship has them.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-2 verteidigt oder einen Angriff durchführt, darf es deine Fokusmarker ausgeben, als ob jenes Schiff sie hätte.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-2 défend ou effectue une attaque, il peut dépenser vos marqueurs de concentration comme s'ils étaient à lui.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-2 se defiende o efectúa un ataque, esa nave puede gastar tus fichas de Concentración como si fueran suyas.',
        it:
          'Mentre una nave amica a gittata 0-2 difende o effettua un attacco, può spendere i tuoi segnalini concentrazione come se fossero i suoi.',
        pl:
          'Gdy przyjazny statek w zasięgu 0-2 broni się albo wykonuje atak, może wydawać twoje żetony skupienia, jak gdyby były jego.',
        pt:
          'Quando uma nave amiga em alcance0-2 defender ou realizar um ataque,ela pode gastar as suas fichas defoco como se fossem dela.',
        zh:
          'While a friendly ship at range 0-2 defends or performs an attack, it may spend your focus tokens as if that ship has them.',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_63.jpg',
      ffg: 63,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Miranda Doni',
        de: 'Miranda Doni',
        fr: 'Miranda Doni',
        es: 'Miranda Doni',
        it: 'Miranda Doni',
        pl: 'Miranda Doni',
        pt: 'Miranda Doni',
        zh: 'Miranda Doni',
      },
      caption: {
        en: 'Heavy Hitter',
        de: 'Schweres Geschütz',
        fr: 'Poids Lourd',
        es: 'Peso pesado',
        it: 'Pesantemente Armata',
        pl: 'Ciężkie wsparcie',
        pt: 'Atacante Pesado',
        zh: 'Heavy Hitter',
      },
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'mirandadoni',
      ability: {
        en:
          'While you perform a primary attack, you may either spend 1 shield to roll 1 additional attack die or, if you are not shielded, you may roll 1 fewer attack die to recover 1 shield.',
        de:
          'Solange du einen Primärangriff durchführst, darfst du entweder 1 Schild ausgeben, um 1 zusätzlichen Angriffswürfel zu werfen, oder, falls du keine Schilde hast, du darfst 1 Angriffswürfel weniger werfen, um 1 Schild wiederherzustellen.',
        fr:
          "Tant que vous effectuez une attaque principale, vous pouvez soit dépenser 1 bouclier pour lancer 1 dé d'attaque supplémentaire, soit, si vous n'êtes pas protégé, vous pouvez lancer 1 dé d'attaque en moins pour récupérer 1 bouclier.",
        es:
          'Mientras efectúas un ataque principal, puedes optar por gastar 1 escudo para tirar 1 dado de ataque adicional o, si no estás protegido por escudos, puedes tirar 1 dado de ataque menos para recuperar 1 escudo.',
        it:
          'Mentre effettui un attacco primario, puoi spendere 1 scudo per ripetere il tiro di 1 dado di attacco oppure, se non possiedi scudi attivi, puoi tirare 1 dado di attacco in meno per recuperare 1 scudo.',
        pl:
          'Gdy wykonujesz atak podstawowy, możesz wydać 1 osłonę, aby rzucić 1 dodatkową kością ataku albo, jeżeli nie masz aktywnych osłon, rzucić 1 kością ataku mniej, aby odzyskać 1 osłonę.',
        pt:
          'Quando realizar um ataque primário, você pode gastar 1 escudo para rolar 1 dado de ataque adicional ou, se não tiver escudos, você pode rolar 1 dado de ataque a menos para recuperar 1 escudo.',
        zh:
          'While you perform a primary attack, you may either spend 1 shield to roll 1 additional attack die or, if you are not shielded, you may roll 1 fewer attack die to recover 1 shield.',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_62.jpg',
      ffg: 62,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Warden Squadron Pilot',
        de: 'Pilot der Beschützer-Staffel',
        fr: "Pilote de l'Escadron Warden",
        es: 'Piloto del Escuadrón Custodio',
        it: 'Pilota della Squadriglia Warden',
        pl: 'Pilot Eskadry Strażników',
        pt: 'Piloto do Esq. Protetor',
        zh: 'Warden Squadron Pilot',
      },
      initiative: 2,
      limited: 0,
      cost: 38,
      xws: 'wardensquadronpilot',
      text: {
        en:
          "Koensayr Manufacturing's K-wing boasts an advanced SubLight Acceleration Motor and an unprecedented 18 hard points, granting it unrivaled speed and firepower.",
        de:
          'Der K-Flügler von Koensayr zeichnet sich durch einen topmodernen Sublicht-Antriebsmotor (kurz: SLAM) sowie beispiellose achtzehn Waffenaufhängungen aus. Was Geschwindigkeit und Feuerkraft anbelangt, steht er außer Konkurrenz.',
        fr:
          "Le K-wing de Koensayr Manufacturing peut s'enorgueillir de son moteur à accélération subluminique avancé et de dix-huit points d'emport, ce qui lui confère une vitesse et une puissance de feu inégalées.",
        es:
          'El Ala-K de Koensayr está provisto de un avanzado motor de aceleración sublumínica y dieciocho ensamblajes, cualidades inéditas que le confieren una velocidad y potencia de fuego inigualables.',
        it:
          "L'Ala-K della Koensayr Manufacturing vantava un evoluto Motore ad Accelerazione Subluce (SLAM) e montava ben 18 innesti armati, un'attrezzatura che gli forniva velocità e potenza di fuoco ineguagliate.",
        pl:
          'Produkowany przez Koensayr Manufacturing K-Wing ma zaawansowany napęd podświetlny (SubLight Acceleration Motor) i 18 punktów podczepienia, dzięki czemu dysponuje niezrównaną prędkością i siłą ognia.',
        pt:
          'A K-wing fabricada pela Koensayr Manufacturing dispunha de um avançado Motor de Aceleração Sub-Luz (SLAM) e incríveis 18 pontos de encaixe, garantindo velocidade e poder de fogo sem igual.',
        zh:
          "Koensayr Manufacturing's K-wing boasts an advanced SubLight Acceleration Motor and an unprecedented 18 hard points, granting it unrivaled speed and firepower.",
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_64.jpg',
      ffg: 64,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

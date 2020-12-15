import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-S8 K-wing',
    de: 'BTL-S8-K-Flügler',
    fr: 'K-wing BTL-S8',
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
      name: { en: 'Esege Tuketu' },
      caption: {
        en: 'Selfless Hero',
        de: 'Selbstloser Held',
        fr: 'Héros Altruiste',
        es: 'Héroe abnegado',
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
      name: { en: 'Miranda Doni' },
      caption: {
        en: 'Heavy Hitter',
        de: 'Schweres Geschütz',
        fr: 'Poids Lourd',
        es: 'Peso pesado',
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

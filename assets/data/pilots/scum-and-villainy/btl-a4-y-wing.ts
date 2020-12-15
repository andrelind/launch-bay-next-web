import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-A4 Y-wing',
    de: 'BTL-A4-Y-Flügler',
    fr: 'Y-wing BTL-A4',
    es: 'BTL-A4 Ala-Y',
  },
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Y-wing.png',
  pilots: [
    {
      name: {
        en: 'Crymorah Goon',
        de: 'Verbrecher der Crymorah',
        fr: 'Sbire du Crymorah',
        es: 'Matón del Crymorah',
      },
      initiative: 1,
      limited: 0,
      cost: 30,
      xws: 'crymorahgoon',
      text: {
        en:
          "Though far from nimble, the Y-wing's heavy hull, substantial shielding, and turret-mounted cannons make it an excellent patrol craft.",
        de:
          'Mit seinen schweren Hüllenplatten, starken Schilden und schlagkräftigen Geschützen ist der Y-Flügler zwar alles andere als behände, dafür eignet er sich hervorragend als Patrouillenschiff.',
        fr:
          "Bien qu'il ne soit pas toujours très maniable, le Y-wing bénéficie d'une solide coque, de boucliers substantiels et de canons montés sur une tourelle qui en font un excellent appareil de patrouille.",
        es:
          'A pesar de su limitada maniobrabilidad, su pesado blindaje, potentes escudos y torreta artillada hacen del Ala-Y una excelente nave de patrulla.',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_168.jpg',
      ffg: 168,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Drea Renthal' },
      caption: {
        en: 'Pirate Lord',
        de: 'Piratenfürstin',
        fr: 'Seigneur Pirate',
        es: 'Reina pirata',
      },
      initiative: 4,
      limited: 1,
      cost: 46,
      xws: 'drearenthal',
      ability: {
        en:
          'While a friendly non-limited ship performs an attack, if the defender is in your firing arc, the attacker may reroll 1 attack die.',
        de:
          'Solange ein befreundetes nicht-limitiertes Schiff einen Angriff durchführt, falls der Verteidiger in deinem Feuerwinkel ist, darf der Angreifer 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié non-limité effectue une attaque, si le défenseur est dans votre arc de tir, l'attaquant peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que no sea limitada efectúa un ataque, si el defensor está situado en tu arco de fuego, el atacante puede volver a tirar 1 dado de ataque.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_166.jpg',
      ffg: 166,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Hired Gun',
        de: 'Söldner',
        fr: 'Soudard',
        es: 'Piloto de fortuna',
      },
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'hiredgun',
      text: {
        en:
          'Just the mention of Imperial credits can bring a host of less-than-trustworthy individuals to your side.',
        de:
          'Wer mit imperialen Credits winkt, kann auf eine große, wenn auch nicht sonderlich vertrauenswürdige Helferschar zählen.',
        fr:
          "La simple évocation de crédits Impériaux peut attirer toutes sortes d'individus totalement amoraux dans votre camp.",
        es:
          'La mera mención de créditos imperiales basta para poner a tu servicio a un gran número de individuos no excesivamente dignos de confianza.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_167.jpg',
      ffg: 167,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Kavil' },
      caption: {
        en: 'Callous Corsair',
        de: 'Abgebrühter Korsar',
        fr: 'Corsaire Sans Pitié',
        es: 'Corsario desalmado',
      },
      initiative: 5,
      limited: 1,
      cost: 43,
      xws: 'kavil',
      ability: {
        en:
          'While you perform a non-[Front Arc] attack, roll 1 additional attack die.',
        de:
          'Solange du einen Nicht-[Front Arc]-Angriff durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque non-[Front Arc], lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque que no sea [Front Arc], tira 1 dado de ataque adicional.',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_165.jpg',
      ffg: 165,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

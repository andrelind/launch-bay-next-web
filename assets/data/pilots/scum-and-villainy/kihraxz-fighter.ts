import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Kihraxz Fighter',
    de: 'Kihraxz-Jäger',
    fr: 'Chasseur Kihraxz',
    es: 'Caza Kihraxz',
  },
  xws: 'kihraxzfighter',
  ffg: 7,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2ER',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Kihraxz.png',
  pilots: [
    {
      name: {
        en: 'Black Sun Ace',
        de: 'Fliegerass der Schwarzen Sonne',
        fr: 'As du Soleil Noir',
        es: 'As del Sol negro',
      },
      initiative: 3,
      limited: 0,
      cost: 38,
      xws: 'blacksunace',
      text: {
        en:
          'The Kihraxz assault fighter was developed specifically for the Black Sun crime syndicate, whose highly paid ace pilots demanded a nimble, powerful ship to match their skills.',
        de:
          'Der Kihraxz-Angriffsjäger wurde eigens für das Verbrechersyndikat Schwarze Sonne entwickelt, dessen hochbezahlte Fliegerasse ein leistungsstarkes, wendiges Schiff verlangten, das ihren Fähigkeiten entsprach.',
        fr:
          "Le chasseur d'assaut Kihraxz fut développé expressément pour l'organisation criminelle du Soleil Noir, dont les as, très généreusement payés, exigeaient des appareils agiles et puissants, à la hauteur de leur talent.",
        es:
          'El caza de asalto Kihraxz fue desarrollado expresamente para el sindicato criminal del Sol Negro, cuyos cotizadísimos ases estelares exigían naves ágiles y potentes que estuvieran a la altura de sus habilidades.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_195.jpg',
      ffg: 195,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Captain Jostero', es: 'Capitán Jostero' },
      caption: {
        en: 'Aggressive Opportunist',
        de: 'Aggressiver Opportunist',
        fr: 'Opportuniste Agressif',
        es: 'Oportunista agresivo',
      },
      initiative: 3,
      limited: 1,
      cost: 41,
      xws: 'captainjostero',
      ability: {
        en:
          'After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against that ship.',
        de:
          'Nachdem ein feindliches Schiff Schaden erlitten hat, falls es nicht verteidigt, darfst du einen Bonusangriff gegen jenes Schiff durchführen.',
        fr:
          "Après qu'un vaisseau ennemi a subi des dégâts, s'il n'est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
        es:
          'Después de que una nave enemiga sufra daño, si esa nave no está defendiéndose, puedes efectuar un ataque adicional contra esa nave.',
      },
      slots: ['Missile', 'Illicit', 'Illicit', 'Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_194.jpg',
      ffg: 194,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Cartel Marauder',
        de: 'Kartell-Marodeur',
        fr: 'Marauder du Cartel',
        es: 'Salteador del Cártel',
      },
      initiative: 2,
      limited: 0,
      cost: 37,
      xws: 'cartelmarauder',
      text: {
        en:
          "The versatile Kihraxz was modeled after Incom's popular X-wing starfighter, but an array of after-market modification kits ensure a wide variety of designs.",
        de:
          'Der vielseitige Kihraxz ist dem beliebten X-Flügler von Incom nachempfunden und verfügt über eine Reihe von Modifikationspaketen, mit denen er für verschiedenste Aufgabenbereiche angepasst werden kann.',
        fr:
          "Le polyvalent Kihraxz fut inspiré du très populaire chasseur X-wing d'Incom, mais toutes sortes d'options permettaient de le personnaliser à loisir.",
        es:
          'El diseño del caza Kihraxz está basado en el del popular caza estelar Ala-X de Incom, pero los numerosos accesorios y modificaciones disponibles para su personalización propician una amplia diversidad de modelos.',
      },
      slots: ['Missile', 'Illicit', 'Illicit', 'Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_196.jpg',
      ffg: 196,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Graz' },
      caption: {
        en: 'The Hunter',
        de: 'Der Jäger',
        fr: 'Le Chasseur',
        es: 'El cazador',
      },
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'graz',
      ability: {
        en:
          'While you defend, if you are behind the attacker, roll 1 additional defense die. While you perform an attack, if you are behind the defender, roll 1 additional attack die.',
        de:
          'Solange du verteidigst, falls du hinter dem Angreifer bist, wirf 1 zusätzlichen Verteidigungswürfel. Solange du einen Angriff durchführst, falls du hinter dem Angreifer bist, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous défendez, si vous êtes derrière l'attaquant, lancez 1 dé de défense supplémentaire. Tant que vous effectuez une attaque, si vous êtes derrière le défenseur, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras te defiendes, si estás detrás del atacante, tira 1 dado de defensa adicional. Mientras efectúas un ataque, si estás detrás del defensor, tira 1 dado de ataque adicional.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_192.jpg',
      ffg: 192,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Talonbane Cobra' },
      caption: {
        en: 'Scourge of Tansarii Point',
        de: 'Der Schrecken von Tansarii Point',
        fr: 'Fléau de Tansarii Point',
        es: 'Azote de Punto Tansarii',
      },
      initiative: 5,
      limited: 1,
      cost: 48,
      xws: 'talonbanecobra',
      ability: {
        en:
          'While you defend at attack range 3 or perform an attack at attack range 1, roll 1 additional die.',
        de:
          'Solange du in Angriffsreichweite 3 verteidigst oder in Angriffsreichweite 1 einen Angriff durchführst, wirf 1 zusätzlichen Würfel.',
        fr:
          "Tant que vous défendez à portée d'attaque 3 ou effectuez une attaque à portée d'attaque 1, lancez 1 dé supplémentaire.",
        es:
          'Mientras te defiendes a alcance de ataque 3 o efectúas un ataque a alcance de ataque 1, tira 1 dado adicional.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_191.jpg',
      ffg: 191,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Viktor Hel' },
      caption: {
        en: 'Storied Bounty Hunter',
        de: 'Berühmter Kopfgeldjäger',
        fr: 'Chasseur de Primes Légendaire',
        es: 'Cazarrecompensas célebre',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'viktorhel',
      ability: {
        en:
          'After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.',
        de:
          'Nachdem du verteidigt hast, falls du nicht genau 2 Verteidigungswürfel geworfen hast, erhält der Angreifer 1 Stressmarker.',
        fr:
          "Après avoir défendu, si vous n'avez pas lancé exactement 2 dés de défense, l'attaquant gagne 1 marqueur de stress.",
        es:
          'Después de que te defiendas, si no has tirado exactamente 2 dados de defensa, el atacante recibe 1 ficha de Tensión.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_193.jpg',
      ffg: 193,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

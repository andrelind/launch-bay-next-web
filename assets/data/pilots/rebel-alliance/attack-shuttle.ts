import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Attack Shuttle',
    de: 'Jagdshuttle',
    fr: "Navette d'Attaque",
    es: 'Lanzadera de ataque',
  },
  xws: 'attackshuttle',
  ffg: 32,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
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
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  ability: {
    name: {
      en: 'Locked and Loaded',
      de: 'Geladen und entsichert',
      es: 'Armas preparadas',
      pl: 'Gotowy do akcji',
      zh: 'Locked and Loaded',
    },
    text: {
      en:
        'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
      de:
        'Solange du angedockt bist, nachdem dein Trägerschiff einen [Front Arc]-Primärangriff oder [Turret]-Angriff durchgeführt hat, darf es einen Bonus-[Rear Arc]-Primärangriff durchführen.',
      es:
        'Mientras estás acoplado, después de que tu nave nodriza efectúe un ataque principal [Front Arc] o [Turret], puede efectuar un ataque principal [Rear Arc] adicional.',
      pl:
        'Jeżeli statek, do którego jesteś zadokowany, wykona atak podstawowy [Front Arc] albo [Turret], może po nim wykonać dodatkowy atak podstawowy [Rear Arc].',
      zh:
        'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_AttackShuttle.png',
  pilots: [
    {
      name: { en: '"Zeb" Orrelios', de: '„Zeb" Orrelios' },
      caption: { en: 'Spectre-4', es: 'Espectro-4' },
      initiative: 2,
      limited: 1,
      cost: 32,
      xws: 'zeborrelios',
      ability: {
        en:
          'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
        de:
          'Solange du verteidigst, werden [Critical Hit]-Ergebnisse neutralisiert, bevor [Hit]-Ergebnisse neutralisiert werden.',
        fr:
          'Tant que vous défendez, les résultats [Critical Hit] sont neutralisés avant les résultats [Hit]. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.',
        es:
          'Mientras te defiendes, los resultados [Critical Hit] se neutralizan antes que los resultados [Hit].',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_37.jpg',
      ffg: 37,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Ezra Bridger' },
      caption: { en: 'Spectre-6', es: 'Espectro-6' },
      initiative: 3,
      limited: 1,
      cost: 40,
      xws: 'ezrabridger',
      ability: {
        en:
          'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls du gestresst bist, darfst du 1 [Force] ausgeben, um bis zu 2 deiner [Focus]-Ergebnisse in [Evade]- oder [Hit]-Ergebnisse zu ändern.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez dépenser 1 [Force] pour changer jusqu'à 2 de vos résultats [Focus] en résultats [Evade] ou [Hit]. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.",
        es:
          'Mientras te defiendes o efectúas un ataque, si estás bajo tensión, puedes gastar 1 [Force] para cambiar hasta 2 de tus resultados [Focus] por resultados [Evade] o [Hit].',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Turret', 'Crew', 'Modification', 'Title', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_36.jpg',
      ffg: 36,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Hera Syndulla' },
      caption: { en: 'Spectre-2', es: 'Espectro-2' },
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'herasyndulla',
      ability: {
        en:
          'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
        de:
          'Nachdem du ein rotes oder blaues Manöver aufgedeckt hast, darfst du dein Rad auf ein anderes Manöver derselben Schwierigkeit einstellen.',
        fr:
          'Après avoir révélé une manœuvre bleue ou rouge, vous pouvez régler votre cadran sur une autre manœuvre de même difficulté. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.',
        es:
          'Después de que reveles una maniobra de color rojo o azul, puedes establecer en tu selector otra maniobra con esa misma dificultad.',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_34.jpg',
      ffg: 34,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Sabine Wren' },
      caption: { en: 'Spectre-5', es: 'Espectro-5' },
      initiative: 3,
      limited: 1,
      cost: 41,
      xws: 'sabinewren',
      ability: {
        en:
          'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
        de:
          'Bevor du aktiviert wirst, darfst du eine [Barrel Roll]- oder [Boost]-Aktion durchführen.',
        fr:
          'Avant votre activation, vous pouvez effectuer une action [Barrel Roll] ou [Boost]. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.',
        es:
          'Antes de que te actives, puedes realizar una maniobra [Barrel Roll] o [Boost].',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_35.jpg',
      ffg: 35,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

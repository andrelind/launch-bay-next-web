import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Lancer-class Pursuit Craft',
    de: 'Jagdschiff der Lanzen-Klasse',
    fr: 'Appareil de Poursuite de Classe Lancer',
    es: 'Nave de persecución clase Lancero',
  },
  xws: 'lancerclasspursuitcraft',
  ffg: 42,
  size: 'Large',
  dial: [
    '1BW',
    '1FW',
    '1NW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TB',
    '3BB',
    '3FB',
    '3NB',
    '3YB',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_ShadowCaster.png',
  pilots: [
    {
      name: { en: 'Asajj Ventress' },
      caption: {
        en: 'Force of Her Own',
        de: 'Eine Macht für sich',
        fr: 'Sa Force à Elle',
        es: 'Ejército de un solo individuo',
      },
      initiative: 4,
      limited: 1,
      cost: 68,
      xws: 'asajjventress',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 enemy ship in your [Single Turret Arc] at range 0-2 and spend 1 [Force]. If you do, that ship gains 1 stress token unless it removes 1 green token.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 feindliches Schiff in deinem [Single Turret Arc] in Reichweite 0-2 wählen und 1 [Force] ausgeben. Falls du das tust, erhält jenes Schiff 1 Stressmarker, es sei denn, es entfernt 1 grünen Marker.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau ennemi dans votre [Single Turret Arc] à portée 0-2 et dépenser 1 [Force]. Dans ce cas, ce vaisseau gagne 1 marqueur de stress sauf s'il retire 1 marqueur vert.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave enemiga que esté situada en tu [Single Turret Arc] a alcance 0-2 y gastar 1 ficha [Force]. Si lo haces, esa nave recibe 1 ficha de Tensión a menos que retire 1 ficha verde.',
      },
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: [
        'Crew',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
        'Force Power',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_219.jpg',
      ffg: 219,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Ketsu Onyo' },
      caption: {
        en: 'Black Sun Contractor',
        de: 'Kopfgeldjägerin der Schwarzen Sonne',
        fr: 'Entrepreneur du Soleil Noir',
        es: 'Agente del Sol Negro',
      },
      initiative: 5,
      limited: 1,
      cost: 66,
      xws: 'ketsuonyo',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 ship in both your [Front Arc] and [Single Turret Arc] at range 0-1. If you do, that ship gains 1 tractor token.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Schiff wählen, das sowohl in deinem [Front Arc] als auch in deinem [Single Turret Arc] und in Reichweite 0-1 ist. Falls du das tust, erhält jenes Schiff 1 Fangstrahlmarker.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau à portée 0-1 qui est à la fois dans votre [Front Arc] et dans votre [Single Turret Arc]. Dans ce cas, ce vaisseau gagne 1 marqueur de rayon tracteur.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que esté situada tanto en tu [Front Arc] como en tu [Single Turret Arc] y tengas a alcance 0-1. Si lo haces, esa nave recibe 1 ficha de Campo de tracción.',
      },
      slots: ['Talent', 'Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_218.jpg',
      ffg: 218,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Sabine Wren' },
      caption: {
        en: 'Artistic Saboteur',
        de: 'Künstlerisch begabte Saboteurin',
        fr: 'Saboteuse Artistique',
        es: 'Saboteadora artística',
      },
      initiative: 3,
      limited: 1,
      cost: 58,
      xws: 'sabinewren-lancerclasspursuitcraft',
      ability: {
        en:
          'While you defend, if the attacker is in your [Single Turret Arc] at range 0-2, you may add 1 [Focus] result to your dice results.',
        de:
          'Solange du verteidigst, falls der Angreifer in deinem [Single Turret Arc] in Reichweite 0-2 ist, darfst du 1 [Focus]-Ergebnis zu deinen Würfelergebnissen hinzufügen.',
        fr:
          "Tant que vous défendez, si l'attaquant est dans votre [Single Turret Arc] à portée 0-2, vous pouvez ajouter 1 résultat [Focus] aux résultat de vos dés.",
        es:
          'Mientras te defiendes, si el atacante está situado en tu [Single Turret Arc] a alcance 0-2, puedes añadir 1 resultado [Focus] a tus resultados de dados.',
      },
      slots: ['Talent', 'Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_220.jpg',
      ffg: 220,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Shadowport Hunter',
        de: 'Schattenhafen-Jäger',
        fr: 'Chasseur des Ports Fantômes',
        es: 'Cazador de puerto clandestino',
      },
      initiative: 2,
      limited: 0,
      cost: 54,
      xws: 'shadowporthunter',
      text: {
        en:
          'Crime syndicates augment the lethal skills of their loyal contractors with the best technology available, like the fast and formidable Lancer-class pursuit craft.',
        de:
          'Verbrechersyndikate fördern die mörderischen Talente ihrer treuen Geschäftspartner, indem sie sie mit der besten Technologie auf dem Markt ausstatten, beispielsweise mit dem schnellen und vorzüglichen Jagdschiff der Lanzen-Klasse.',
        fr:
          'Les organisations criminelles confient à leurs agents loyaux des vaisseaux disposant de la meilleure technologie possible, comme le véloce et redoutable Appareil de Poursuite de Classe Lancer, afin de renforcer leurs aptitudes létales.',
        es:
          'Los sindicatos criminales complementan las letales habilidades de sus agentes más leales proporcionándoles la mejor tecnología disponible, como la rápida y formidable nave de persecución clase Lancero.',
      },
      slots: ['Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_221.jpg',
      ffg: 221,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

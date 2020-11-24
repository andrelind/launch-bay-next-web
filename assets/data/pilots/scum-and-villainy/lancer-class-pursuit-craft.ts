import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Lancer-class Pursuit Craft',
    de: 'Jagdschiff der Lanzen-Klasse',
    fr: 'Appareil de Poursuite de Classe Lancer',
    it: 'Inseguitore Classe Lancer',
    pl: 'Statek pościgowy klasy Lancer',
    pt: 'Nave de Perseguição classe Lancer',
    zh: 'Lancer-class Pursuit Craft',
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
      name: {
        en: 'Asajj Ventress',
        de: 'Asajj Ventress',
        fr: 'Asajj Ventress',
        es: 'Asajj Ventress',
        it: 'Asajj Ventress',
        pl: 'Asajj Ventress',
        pt: 'Asajj Ventress',
        zh: 'Asajj Ventress',
      },
      caption: {
        en: 'Force of Her Own',
        de: 'Eine Macht für sich',
        fr: 'Sa Force à Elle',
        es: 'Ejército de un solo individuo',
        it: 'Solitaria della Forza',
        pl: 'Jednoosobowa armia',
        pt: 'Força Própria',
        zh: 'Force of Her Own',
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
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave nemica nel tuo [Single Turret Arc] a gittata 0-2 e spendere 1 [Force]. Se lo fai, quella nave ottiene 1 segnalino tensione a meno che non rimuova 1 segnalino verde.",
        pl:
          'Na początku fazy walki możesz wskazać 1 wrogi statek w twoim [Single Turret Arc] w zasięgu 0-2 i wydać 1 [Force]. Jeżeli tak zrobisz, wskazany statek otrzymuje 1 żeton stresu, chyba że usunie 1 zielony żeton.',
        pt:
          'No início da Fase de Engajamento, você pode escolher 1 nave inimiga em seu [Single Turret Arc] em alcance 0-2 e gastar 1 ￼. Se você fizer isso, a nave escolhida recebe 1 ficha de estresse, a menos que ela remova1 ficha verde.',
        zh:
          'At the start of the Engagement Phase, you may choose 1 enemy ship in your [Single Turret Arc] at range 0-2 and spend 1 [Force]. If you do, that ship gains 1 stress token unless it removes 1 green token.',
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
      name: {
        en: 'Ketsu Onyo',
        de: 'Ketsu Onyo',
        fr: 'Ketsu Onyo',
        es: 'Ketsu Onyo',
        it: 'Ketsu Onyo',
        pl: 'Ketsu Onyo',
        pt: 'Ketsu Onyo',
        zh: 'Ketsu Onyo',
      },
      caption: {
        en: 'Black Sun Contractor',
        de: 'Kopfgeldjägerin der Schwarzen Sonne',
        fr: 'Entrepreneur du Soleil Noir',
        es: 'Agente del Sol Negro',
        it: 'Professionista del Sole Nero',
        pl: 'Podwykonawca Czarnego Słońca',
        pt: 'Contratada do Sol Negro',
        zh: 'Black Sun Contractor',
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
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave in entrambi i tuoi [Front Arc] e [Single Turret Arc] a gittata 0-1. Se lo fai, quella nave ottiene 1 segnalino raggio traente.",
        pl:
          'Na początku fazy walki możesz wskazać 1 statek w zasięgu 0-1, który znajduje się jednoczesnie w twojej [Front Arc] i [Single Turret Arc]. Jeżeli tak zrobisz, wskazany statek otrzymuje 1 żeton wiązki ściągającej.',
        pt:
          'No início da Fase de Engajamento,você pode escolher 1 nave que esteja tanto em seu [Front Arc] quanto em seu [Single Turret Arc] em alcance 0-1. Se você fizer isso, a nave escolhida recebe 1 ficha de tração.',
        zh:
          'At the start of the Engagement Phase, you may choose 1 ship in both your [Front Arc] and [Single Turret Arc] at range 0-1. If you do, it gains 1 tractor token.',
      },
      slots: ['Talent', 'Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_218.jpg',
      ffg: 218,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Sabine Wren',
        de: 'Sabine Wren',
        fr: 'Sabine Wren',
        es: 'Sabine Wren',
        it: 'Sabine Wren',
        pl: 'Sabine Wren',
        pt: 'Sabine Wren',
        zh: 'Sabine Wren',
      },
      caption: {
        en: 'Artistic Saboteur',
        de: 'Künstlerisch begabte Saboteurin',
        fr: 'Saboteuse Artistique',
        es: 'Saboteadora artística',
        it: 'Artista del Sabotaggio',
        pl: 'Wprawny sabotażysta',
        pt: 'Sabotadora Artística',
        zh: 'Artistic Saboteur',
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
        it:
          "Mentre difendi, se l'attaccante è nel tuo [Single Turret Arc] a gittata 0-2, puoi aggiungere 1 risultato [Focus] ai risultati dei tuoi dadi.",
        pl:
          'Gdy się bronisz i atakujący jest w twojej [Single Turret Arc] w zasięgu 0-2, możesz dodać do wyników swoich rzutów 1 wynik [Focus].',
        pt:
          'Quando defender, se o atacante estiver em seu [Single Turret Arc] em alcance 0-2, você pode adicionar 1 resultado [Focus] aos resultados de seus dados.',
        zh:
          'While you defend, if the attacker is in your [Single Turret Arc] at range 0-2, you may add 1 [Focus] result to your dice results.',
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
        it: 'Cacciatore dei Porti Ombra',
        pl: 'Łowca z Przystani Cienia',
        pt: 'Caçador de Shadowport',
        zh: 'Shadowport Hunter',
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
        it:
          'I consorzi criminali potenziano le letali abilità dei loro professionisti più fedeli con le migliori tecnologie disponibili, come il veloce e formidabile Inseguitore Classe Lancer.',
        pl:
          'Syndykaty przestępcze wzmacniają zabójcze umiejętności swych lojalnych pracowników za pomocą najnowocześniejszej technologii, takich jak imponujące statki pościgowe klasy Lancer.',
        pt:
          'As organizações criminosas potencializam as habilidades mortais de seus leais contratados com as melhores tecnologias disponíveis, como a veloz e formidável nave de perseguição classe Lancer.',
        zh:
          'Crime syndicates augment the lethal skills of their loyal contractors with the best technology available, like the fast and formidable Lancer-class pursuit craft.',
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

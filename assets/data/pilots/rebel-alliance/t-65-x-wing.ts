import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'T-65 X-wing',
    de: 'T-65-X-Flügler',
    fr: 'X-wing T-65',
    es: 'T-65 Ala-X',
  },
  xws: 't65xwing',
  ffg: 33,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_X-wing-T65.png',
  pilots: [
    {
      name: { en: 'Biggs Darklighter' },
      caption: {
        en: 'Red Three',
        de: 'Rot Drei',
        fr: 'Red Trois',
        es: 'Rojo Tres',
      },
      initiative: 3,
      limited: 1,
      cost: 47,
      xws: 'biggsdarklighter',
      ability: {
        en:
          'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Hit] or [Critical Hit] damage to cancel 1 matching result.',
        de:
          'Solange ein anderes befreundetes Schiff in Reichweite 0-1 verteidigt, vor dem Schritt „Ergebnisse neutralisieren", falls du im Angriffswinkel bist, darfst du 1 [Hit]- oder [Critical Hit]-Schaden erleiden, um 1 passendes Ergebnis zu negieren.',
        fr:
          "Tant qu'un autre vaisseau allié à portée 0-1 défend, avant l'étape « Neutraliser les résultats », si vous êtes dans l'arc de l'attaque, vous pouvez subir 1 dégât [Hit] ou [Critical Hit] pour annuler 1 dégât correspondant.",
        es:
          'Mientras otra nave aliada que tienes a alcance 0-1 se defiende, antes del paso de "Neutralizar los resultados", si estás en el arco de ataque, puedes sufrir 1 de daño [Hit] o [Critical Hit] para anular 1 resultado equivalente.',
      },
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_7.jpg',
      ffg: 7,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Blue Squadron Escort',
        de: 'Eskorte der blauen Staffel',
        fr: "Escorte de l'Escadron Bleu",
        es: 'Escolta del Escuadrón Azul',
      },
      initiative: 2,
      limited: 0,
      cost: 38,
      xws: 'bluesquadronescort',
      text: {
        en:
          'Designed by Incom Corporation, the T-65 X-wing quickly proved to be one of the most effective and versatile military vehicles in the galaxy and a boon to the Rebellion.',
        de:
          'Der T-65-X-Flügler aus dem Hause Incom erwies sich schnell als eine der effektivsten und vielseitigsten Jagdmaschinen der Galaxis - und als wahrer Segen für die Rebellion.',
        fr:
          "Conçu par Incom Corporation, le X-wing T-65 compta rapidement parmi les appareils militaires les plus efficaces de la galaxie et fut d'un réel secours pour la Rébellion.",
        es:
          'Diseñado por la Corporación Incom, el caza T-65 Ala-X no tardó en convertirse en uno de los vehículos militares más efectivos y versátiles de la galaxia y una gran baza para la Rebelión.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_11.jpg',
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/9c/1a/9c1ad7ef-dfb1-427c-b700-747d857f53fc/op066-blue-squadron-pilot.png',
          source: 'X-Wing Second Edition Launch Party',
        },
      ],
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      ffg: 11,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Cavern Angels Zealot',
        de: 'Fanatiker der Sturmengel',
        fr: 'Extrémiste Anges des Cavernes',
        es: 'Fanático de los Ángeles Cavernarios',
      },
      initiative: 1,
      limited: 0,
      cost: 38,
      xws: 'cavernangelszealot',
      text: {
        en:
          "Unlike most Rebel cells, Saw Gerrera's partisans are willing to use extreme methods to undermine the Galactic Empire's objectives in brutal battles that raged from Geonosis to Jedha.",
        de:
          'Anders als die meisten Widerstandszellen sind Saw Gerreras Partisanen bereit, bis zum Äußersten zu gehen, um die Pläne des Imperiums zu durchkreuzen. Von Geonosis bis Jedha liefern sie sich blutige Auseinandersetzungen mit der imperialen Obrigkeit.',
        fr:
          "Contrairement à la plupart des cellules Rebelles, les Partisans de Saw Gerrera utilisèrent des méthodes jugées trop radicales pour lutter contre l'Empire Galactique, au cours des sanglants combats qui ravagèrent Géonosis et Jedha.",
        es:
          'A diferencia de la mayoría de las células rebeldes, los partisanos de Saw Gerrera estaban dispuestos a utilizar métodos extremos para frustrar los planes del Imperio Galáctico, y así lo hicieron en brutales batallas que asolaron desde Geonosis a Jedha.',
      },
      slots: [
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_12.jpg',
      ffg: 12,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Edrio Two Tubes',
        fr: 'Edrio Deux-Tubes',
        es: 'Edrio Dos Tubos',
      },
      caption: {
        en: 'Cavern Angels Veteran',
        de: 'Veteran der Sturmengel',
        fr: 'Vétéran Anges des Cavernes',
        es: 'Veterano de los Ángeles Cavernarios',
      },
      initiative: 2,
      limited: 1,
      cost: 42,
      xws: 'edriotwotubes',
      ability: {
        en:
          'Before you activate, if you are focused, you may perform an action.',
        de:
          'Bevor du aktiviert wirst, falls du fokussiert bist, darfst du eine Aktion durchführen.',
        fr:
          'Avant votre activation, si vous êtes concentré, vous pouvez effectuer une action.',
        es:
          'Antes de que te actives, si estás concentrado, puedes realizar una acción.',
      },
      slots: [
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_9.jpg',
      ffg: 9,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Garven Dreis' },
      caption: { en: 'Red Leader', de: 'Rot Eins', es: 'Jefe Rojo' },
      initiative: 4,
      limited: 1,
      cost: 46,
      xws: 'garvendreis-t65xwing',
      ability: {
        en:
          'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
        de:
          'Nachdem du einen Fokusmarker ausgegeben hast, darfst du 1 befreundetes Schiff in Reichweite 1-3 wählen. Jenes Schiff erhält 1 Fokusmarker.',
        fr:
          'Après voir dépensé un marqueur de concentration, vous pouvez choisir 1 vaisseau allié à portée 1-3. Ce vaisseau gagne 1 marqueur de concentration.',
        es:
          'Después de que gastes una ficha de Concentración, puedes elegir 1 nave aliada que tengas a alcance 1-3. Esa nave recibe 1 ficha de Concentración.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_4.jpg',
      ffg: 4,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Jek Porkins' },
      caption: { en: 'Red Six', de: 'Rot Sechs', es: 'Rojo Seis' },
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'jekporkins',
      ability: {
        en:
          'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
        de:
          'Nachdem du einen Stressmarker bekommen hast, darfst du 1 Angriffswürfel werfen, um ihn zu entfernen. Bei einem [Hit]-Ergebnis erleide 1 [Hit]-Schaden.',
        fr:
          "Après avoir reçu un marqueur de stress, vous pouvez lancer 1 dé d'attaque pour le retirer. Sur un résultat [Hit], subissez 1 dégât [Hit].",
        es:
          'Después de que recibas una ficha de Tensión, puedes tirar 1 dado de ataque para retirarla. Si sacas [Hit], sufres 1 de daño [Hit].',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_5.jpg',
      ffg: 5,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Kullbee Sperado' },
      caption: {
        en: 'Enigmatic Gunslinger',
        de: 'Geheimnisvoller Revolverheld',
        fr: 'Guérillero Énigmatique',
        es: 'Pistolero enigmático',
      },
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'kullbeesperado',
      ability: {
        en:
          'After you perform a [Barrel Roll] or [Boost] action, you may flip your equipped [Configuration] upgrade card.',
        de:
          'Nachdem du eine [Barrel Roll]- oder [Boost]-Aktion durchgeführt hast, darfst du deine ausgerüstete [Configuration]-Aufwertungskarte umdrehen.',
        fr:
          "Après avoir effectué une action [Barrel Roll] ou [Boost], vous pouvez retourner votre carte d'amélioration [Configuration] équipée.",
        es:
          'Después de de que realices una acción [Barrel Roll] o [Boost], puedes darle la vuelta a la carta de Mejora [Configuration] que tengas equipada en tu nave.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_6.jpg',
      ffg: 6,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Leevan Tenza' },
      caption: {
        en: 'Rebel Alliance Defector',
        de: 'Überläufer der Allianz',
        fr: "Transfuge de l'Alliance Rebelle",
        es: 'Desertor de la Alianza Rebelde',
      },
      initiative: 3,
      limited: 1,
      cost: 43,
      xws: 'leevantenza',
      ability: {
        en:
          'After you perform a [Barrel Roll] or [Boost] action, you may perform a red [Evade] action.',
        de:
          'Nachdem du eine [Barrel Roll]- oder [Boost]-Aktion durchgeführt hast, darfst du eine rote [Evade]-Aktion durchführen.',
        fr:
          'Après avoir effectué une action [Barrel Roll] ou [Boost], vous pouvez effectuer une action [Evade] rogue.',
        es:
          'Después de que realices una acción [Barrel Roll] o [Boost], puedes realizar una acción [Evade] roja.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_8.jpg',
      ffg: 8,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Luke Skywalker' },
      caption: {
        en: 'Red Five',
        de: 'Rot Fünf',
        fr: 'Red Cinq',
        es: 'Rojo Cinco',
      },
      initiative: 5,
      limited: 1,
      cost: 61,
      xws: 'lukeskywalker',
      ability: {
        en:
          'After you become the defender (before dice are rolled), you may recover 1 [Force].',
        de:
          'Nachdem du zum Verteidiger geworden bist (bevor Würfel geworfen werden), darfst du 1 [Force] wiederherstellen.',
        fr:
          'Après être devenu le défenseur (avant que les dés ne soient lancés), vous pouvez récupérer 1 [Force].',
        es:
          'Después de que te conviertas en el defensor (antes de las tiradas de dados), puedes recuperar 1 [Force].',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/5b/aa/5baa3742-b7b2-47d7-9bec-07f02fafaf1c/op066-luke-skywalker.png',
          source: 'X-Wing Second Edition Launch Party',
        },
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/ab/5d/ab5d5131-0043-4b74-9549-5e959aaaf47a/op086-luke-skywalker.png',
          source: 'Gen Con Indy 2018',
        },
      ],
      slots: [
        'Torpedo',
        'Astromech',
        'Modification',
        'Force Power',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_2.jpg',
      ffg: 2,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Red Squadron Veteran',
        de: 'Veteran der roten Staffel',
        fr: "Vétéran de l'Escadron Rouge",
        es: 'Veterano del Escuadrón Rojo',
      },
      initiative: 3,
      limited: 0,
      cost: 40,
      xws: 'redsquadronveteran',
      text: {
        en:
          'Created as an elite starfighter squad, Red Squadron includes some of the best pilots in the Rebel Alliance.',
        de:
          'Die rote Staffel wurde als Elite-Jägerverband gegründet und zählt einige der besten Piloten der Allianz zu ihren Mitgliedern.',
        fr:
          "Conçu comme une unité d'élite pour les combats spatiaux, l'Escadron Rouge comprend certains des meilleurs pilotes de l'Alliance Rebelle.",
        es:
          'El Escuadrón Rojo fue creado como una unidad de cazas estelares de élite, y está compuesto por algunos de los mejores pilotos de la Alianza Rebelde.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_10.jpg',
      ffg: 10,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Thane Kyrell' },
      caption: {
        en: 'Corona Four',
        de: 'Corona Vier',
        fr: 'Corona Quatre',
        es: 'Corona Cuatro',
      },
      initiative: 5,
      limited: 1,
      cost: 47,
      xws: 'thanekyrell',
      ability: {
        en:
          "While you perform an attack, you may spend 1 [Focus], [Hit], or [Critical Hit] result to look at the defender's facedown damage cards, choose 1, and expose it.",
        de:
          'Solange du einen Angriff durchführst, darfst du 1 [Focus]-, [Hit]- oder [Critical Hit]-Ergebnis ausgeben, um dir die verdeckten Schadenskarten des Verteidigers anzusehen, 1 zu wählen und sie offenzulegen.',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez dépense 1 résultat [Focus], [Hit] ou [Critical Hit] pour regarder les cartes de dégât face cachée du défenseur, en choisir 1 et l'exposer.",
        es:
          'Mientras efectúas un ataque, puedes gastar 1 resultado [Focus], [Hit] o [Critical Hit] para mirar las cartas de Daño boca abajo del defensor, elegir 1 de ellas y exponerla.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_3.jpg',
      ffg: 3,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Wedge Antilles' },
      caption: {
        en: 'Red Two',
        de: 'Rot Zwei',
        fr: 'Red Deux',
        es: 'Rojo Dos',
      },
      initiative: 6,
      limited: 1,
      cost: 54,
      xws: 'wedgeantilles',
      ability: {
        en:
          'While you perform an attack, the defender rolls 1 fewer defense die.',
        de:
          'Solange du einen Angriff durchführst, wirft der Verteidiger 1 Verteidigungswürfel weniger.',
        fr:
          'Tant que vous effectuez une attaque, le défenseur lance 1 dé de défense en moins.',
        es:
          'Mientras efectúas un ataque, el defensor tira 1 dado de defensa menos.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_1.jpg',
      ffg: 1,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

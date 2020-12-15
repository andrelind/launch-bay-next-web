import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'ARC-170 Starfighter',
    de: 'ARC-170-Sternenjäger',
    fr: 'Chasseur ARC-170',
    es: 'Caza estelar ARC-170',
  },
  xws: 'arc170starfighter',
  ffg: 31,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Arc-170.png',
  pilots: [
    {
      name: { en: 'Garven Dreis' },
      caption: { en: 'Red Leader', de: 'Rot Eins', es: 'Jefe Rojo' },
      initiative: 4,
      limited: 1,
      cost: 49,
      xws: 'garvendreis',
      ability: {
        en:
          'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
        de:
          'Nachdem du einen Fokusmarker ausgegeben hast, darfst du 1 befreundetes Schiff in Reichweite 1-3 wählen. Jenes Schiff erhält 1 Fokusmarker.',
        fr:
          'Après avoir dépensé un marqueur de concentration, vous pouvez choisir 1 vaisseau allié à portée 1-3. Ce vaisseau allié gagne 1 marqueur de concentration.',
        es:
          'Después de que gastes una ficha de Concentración, puedes elegir 1 nave aliada que tengas a alcance 1-3. Esa nave recibe 1 ficha de Concentración.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_66.jpg',
      ffg: 66,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Ibtisam' },
      caption: {
        en: 'Survivor of Endor',
        de: 'Überlebende von Endor',
        fr: "Survivant d'Endor",
        es: 'Superviviente de Endor',
      },
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'ibtisam',
      ability: {
        en:
          'After you fully execute a maneuver, if you are stressed, you may roll 1 attack die. On a [Hit] or [Critical Hit] result, remove 1 stress token.',
        de:
          'Nachdem du ein Manöver vollständig ausgeführt hast, falls du gestresst bist, darfst du 1 Angriffswürfel werfen. Bei einem [Hit]- oder [Critical Hit]-Ergebnis entferne 1 Stressmarker.',
        fr:
          "Après avoir entièrement exécuté une manœuvre, si vous êtes stressé, vous pouvez lancer 1 dé d'attaque. Sur un résultat [Hit] ou [Critical Hit], retirez 1 marqueur de stress.",
        es:
          'Después de que ejecutes completamente una maniobra, si estás bajo tensión, puedes tirar 1 dado de ataque. Si sacas un resultado [Hit] o [Critical Hit], retiras 1 ficha de Tensión.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_68.jpg',
      ffg: 68,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Norra Wexley' },
      caption: {
        en: 'Gold Nine',
        de: 'Gold Neun',
        fr: 'Gold Neuf',
        es: 'Oro Nueve',
      },
      initiative: 5,
      limited: 1,
      cost: 55,
      xws: 'norrawexley',
      ability: {
        en:
          'While you defend, if there is an enemy ship at range 0-1, you may add 1 [Evade] result to your dice results.',
        de:
          'Solange du verteidigst, falls ein feindliches Schiff in Reichweite 0-1 ist, füge 1 [Evade]-Ergebnis zu deinen Würfelergebnissen hinzu.',
        fr:
          'Tant que vous défendez, si un vaisseau ennemi est à portée 0-1, vous pouvez ajouter 1 résultat [Evade] aux résultats de vos dés.',
        es:
          'Mientras te defiendes, si tienes al menos una nave enemiga a alcance 0-1, puedes añadir 1 resultado [Evade] a tus resultados de dados.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_65.jpg',
      ffg: 65,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Shara Bey' },
      caption: {
        en: 'Green Four',
        de: 'Grün Vier',
        fr: 'Green Quatre',
        es: 'Verde Cuatro',
      },
      initiative: 4,
      limited: 1,
      cost: 50,
      xws: 'sharabey',
      ability: {
        en:
          'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, darfst du 1 Zielerfassung, die du auf dem feindlichen Schiff hast, ausgeben, um 1 [Focus]-Ergebnis zu deinen Würfelergebnissen hinzuzufügen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque principale, vous pouvez dépenser 1 marqueur de verrouillage que vous avez sur le vaisseau ennemi pour ajouter 1 résultat [Focus] aux résultats de vos dés.',
        es:
          'Mientras te defiendes o efectúas un ataque principal, puedes gastar 1 Blanco fijado que tengas sobre la nave enemiga para añadir 1 resultado [Focus] a tus resultados de dados.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_67.jpg',
      ffg: 67,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

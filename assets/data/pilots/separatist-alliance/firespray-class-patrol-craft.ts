import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Firespray-class Patrol Craft',
    de: 'Patrouillenboot der Firespray-Klasse',
    es: 'Patrullera clase Firespray',
    fr: 'Patrouilleur de Classe Firespray',
  },
  xws: 'firesprayclasspatrolcraft',
  size: 'Medium',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3BW',
    '3FB',
    '3NW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_FIrespray.png',
  pilots: [
    {
      name: { en: 'Jango Fett' },
      caption: {
        en: 'Simple Man',
        de: 'Einfacher Mann',
        es: 'Un hombre humilde',
        fr: 'Un Homme Simple',
      },
      initiative: 6,
      limited: 1,
      xws: 'jangofett',
      ability: {
        en:
          "While you defend or perform a primary attack, if the difficulty of your revealed maneuver is less than that of the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls die Schwierigkeit deines aufgedeckten Manövers geringer ist als die des aufgedeckten Manövers des feindlichen Schiffes, darfst du 1 der [Focus]-Ergebnisse des feindlichen Schiffes in ein Leerseiten-Ergebnis ändern.',
        es:
          'Mientras te defiendes o efectúas un ataque principal, si la dificultad de tu maniobra revelada es menor que la de la nave enemiga, puedes cambiar 1 de los resultados [Focus] de la nave enemiga por un resultado de cara vacía.',
        fr:
          'Tant que vous défendez ou effectuez une attaque principale, si la difficulté de votre manœuvre révélée est inférieure à celle du vaisseau ennemi, vous pouvez changer 1 des résultats [Focus] du vaisseau ennemi en un résultat vierge.',
      },
      hyperspace: true,
      epic: false,
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      cost: 79,
      ffg: 800,
    },
    {
      xws: 'zamwesell',
      name: { en: 'Zam Wesell' },
      caption: {
        en: 'Just a Job',
        de: 'Nur ein Job',
        es: 'Sólo es un trabajo',
        fr: 'Juste un Boulot',
      },
      cost: 76,
      initiative: 5,
      limited: 1,
      ability: {
        en:
          "Setup: Lose 2 [Charge]. During the System Phase, you may assign 1 of your secret conditions to yourself facedown: You Should Thank Me You'd Better Mean Business",
        de:
          'Aufbau: Du verlierst 2 [Charge]. Während der Systemphase darfst du dir selbst 1 deiner geheimen Zustände verdeckt zuordnen: Du solltest mir danken Wehe, du meinst es nicht ernst',
        es:
          'Preparación: Pierdes 2 [Charge]. Durante la fase de Sistemas, puedes asignarte a ti mismo 1 de tus Estados secretos boca abajo: Deberías agradecérmelo Más vale que vayas en serio',
        fr:
          'Mise en Place : perdez 2 [Charge]. Pendant la phase de système, vous pouvez vous assigner, face cachée, 1 de vos états secrets : Vous Devriez Me Remercier Vous Devriez Faire des Affaires',
      },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      hyperspace: true,
      epic: false,
      ffg: 801,
    },
    {
      name: {
        en: 'Separatist Racketeer',
        de: 'Erpresser der Separatisten',
        es: 'Extorsionador separatista',
        fr: 'Maître-Chanteur Séparatiste',
      },
      xws: 'separatistracketeer',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'Emboldened by the bitter stalemate of the Outer Rim Sieges, mercenary groups across the galaxy take the opportunity to profit from the ongoing war.',
        de:
          'Söldnergruppen sind die Einzigen, die als Profiteure aus dem zermürbenden Stillstand der Belagerungen im Outer Rim hervorgehen. In der gesamten Galaxis machen sie Geschäfte mit dem andauernden Krieg.',
        es:
          'Envalentonados por el porfiado estancamiento de los Asedios del Borde Exterior, por toda la galaxia han surgido grupos de mercenarios deseosos de lucrarse con la guerra en curso.',
        fr:
          "Poussés par les nombreuses impasses causées par les Sièges de la Bordure Extérieure, des groupes de mercenaires saisissent à travers la galaxie l'opportunité de faire des bénéfices grâce à la guerre en cours.",
      },
      hyperspace: false,
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      cost: 64,
      epic: false,
      ffg: 803,
    },
    {
      xws: 'bobafett-separatistalliance',
      ffg: 802,
      name: { en: 'Boba Fett' },
      cost: 70,
      limited: 1,
      initiative: 3,
      caption: {
        en: 'Survivor',
        de: 'Überlebender',
        es: 'Superviviente',
        fr: 'Survivant',
      },
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While you defend, if there are no other friendly ships at range 0-2, you may change 1 of your blank results to a [Focus] result.',
        de:
          'Solange du verteidigst, falls keine anderen befreundeten Schiffe in Reichweite 0-2 sind, darfst du 1 deiner Leerseiten-­Ergebnisse in ein [Focus] -Ergebnis ändern.',
        es:
          'Mientras te defiendes, si no tienes ninguna otra nave aliada a alcance 0-2, puedes cambiar 1 de tus resultados de cara vacía por un resultado [Focus].',
        fr:
          "Tant que vous défendez, s'il n'y a aucun autre vaisseau allié à portée 0-2, vous pouvez changer 1 de vos résultats vierges en un résultat [Focus].",
      },
    },
  ],
};

export default t;

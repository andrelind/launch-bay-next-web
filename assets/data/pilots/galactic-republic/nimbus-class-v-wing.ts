import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Nimbus-class V-wing',
    de: 'V-Flügler der Nimbus-Klasse',
    es: 'Ala-V clase Nimbo',
    fr: 'V-wing de Classe Nimbus',
  },
  xws: 'nimbusclassvwing',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1NR',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Barrel Roll', difficulty: 'Red' },
    {
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Lock' },
      difficulty: 'White',
    },
  ],
  ability: {
    name: { en: 'Twin Ion Engines' },
    text: { en: 'Ignore the "TIE" ship restriction on upgrade cards.' },
  },
  pilots: [
    {
      name: { en: 'Wilhuff Tarkin' },
      caption: {
        en: 'Aspiring Admiral',
        de: 'Angehender Admiral',
        es: 'Almirante ambicioso',
        fr: 'Aspirant Amiral ',
      },
      initiative: 3,
      limited: 1,
      xws: 'wilhufftarkin',
      ability: {
        en:
          'During the System Phase, you may choose an object that you have locked at range 1-3. Another friendly ship at range 1-3 may acquire a lock on that object.',
        de:
          'Während der Systemphase darfst du ein Objekt in Reichweite 1-3 wählen, das du als Ziel erfasst hast. Ein anderes befreundetes Schiff in Reichweite 1-3 darf jenes Objekt als Ziel erfassen.',
        es:
          'Durante la fase de Sistemas, puedes elegir un objeto que tengas fijado como blanco a alcance 1-3. Otra nave aliada que tengas a alcance 1-3 puede obtener un Blanco fijado sobre ese objeto.',
        fr:
          'Pendant la phase de système, vous pouvez choisir un objet que vous avez verrouillé, situé à portée 1-3. Un autre vaisseau allié à portée 1-3 peut verrouiller cet objet.',
      },
      hyperspace: false,
      epic: false,
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 34,
      ffg: 791,
    },
    {
      name: { en: '"Contrail"', de: '„Contrail"' },
      xws: 'contrail',
      initiative: 5,
      limited: 1,
      caption: { en: 'CT-4981' },
      hyperspace: false,
      ability: {
        en:
          "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls dein aufgedecktes Manöver dieselbe Flugrichtung wie das des feindlichen Schiffes hat, darfst du 1 der [Focus]-Ergebnisse des feindlichen Schiffes in ein Leerseiten-Ergebnis ändern.',
        es:
          'Mientras te defiendes o efectúas un ataque, si la dirección de tu maniobra revelada es la misma que la de la nave enemiga, puedes cambiar 1 de los resultados [Focus] de la nave enemiga por un resultado de cara vacía.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, si la direction de votre manœuvre révélée est la même que celle du vaisseau ennemi, vous pouvez changer 1 des résultats [Focus] du vaisseau ennemi en un résultat vierge.',
      },
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 33,
      epic: false,
      ffg: 789,
    },
    {
      name: { en: '"Klick"', de: '„Klick"' },
      xws: 'klick',
      initiative: 4,
      limited: 1,
      caption: { en: 'GC-1000' },
      hyperspace: false,
      ability: {
        en:
          'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
        de:
          'Solange ein Schiff in Reichweite 1-3, das du als Ziel erfasst hast, verteidigt oder einen Angriff durchführt, darfst du 1 [Charge] ausgeben, um das Anwenden von Reichweitenbonussen zu verhindern.',
        es:
          'Mientras una nave que tienes fijada como blanco a alcance 1-3 se defiende o efectúa un ataque, puedes gastar 1 [Charge] para impedir que los modificadores por alcance sean aplicados.',
        fr:
          "Tant qu'un vaisseau que vous avez verrouillé, situé à portée 1-3, défend ou effectue une attaque, vous pouvez dépenser 1 [Charge] pour empêcher l'application des bonus de portée.",
      },
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 32,
      epic: false,
      ffg: 790,
    },
    {
      name: {
        en: 'Shadow Squadron Escort',
        de: 'Eskorte der \nSchatten-Staffel',
        es: 'Escolta del Escuadrón Sombra',
        fr: "Escorte de l'Escadron Shadow",
      },
      xws: 'shadowsquadronescort',
      initiative: 3,
      limited: 0,
      text: {
        en:
          "In the waning months of the Clone Wars, elite clone formations carry out missions critical to the future of the Republic; such as the protection of Supreme Chancellor Palpatine's personal shuttle.",
        de:
          'In den letzten Monaten der Klonkriege führen Klon-Eliteeinheiten Missionen aus, die essenziell für die Zukunft der Republik sind. So schützen sie auch das persönliche Schiff des Obersten Kanzlers Palpatine.',
        es:
          'En los últimos meses de las Guerras Clon, formaciones de pilotos clon de élite desempeñaron misiones críticas para el futuro de la República, como la protección de la lanzadera personal del canciller supremo Palpatine.',
        fr:
          "Lors des derniers mois de la Guerre des Clones, les formations des clones d'élite effectuèrent des missions capitales pour l'avenir de la République ; comme assurer la protection de la navette personnelle du Chancelier Suprême Palpatine.",
      },
      hyperspace: true,
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 29,
      epic: false,
      ffg: 792,
    },
    {
      name: {
        en: 'Loyalist Volunteer',
        de: 'Freiwilliger der \nLoyalisten',
        es: 'Voluntario lealista',
        fr: 'Volontaire Loyaliste',
      },
      xws: 'loyalistvolunteer',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'The Kuat Systems Engineering Alpha-3 Nimbus-class V-wing is the vessel of choice for clone and non-clone starfighter pilots alike. The techniques pioneered to mass-produce its precision ion engines will later be crucial in the development of the TIE series by Sienar Fleet Systems.',
        de:
          'Der Alpha-3-V-Flügler der Nimbus-Klasse von Kuat-Systemtechnik ist als Sternenjäger für jeden Piloten, egal ob geklont oder nicht, die erste Wahl. Die Fertigungstechnik, die zur Massenproduktion seines Ionenantriebs eingesetzt wird, wird später noch essenziell für die Entwicklung der TIE-Serie von Sienar-Flottensysteme sein.',
        es:
          'El Ala-V Alfa-3 clase Nimbo de Ingeniería de Sistemas Kuat es la nave preferida de los pilotos de cazas estelares, sean clones o no. Las técnicas ideadas para la producción en serie de sus motores iónicos de precisión serán más adelante cruciales para el desarrollo de la serie TIE de Sisttemas de Flota Sienar.',
        fr:
          'Le V-wing Alpha-3 de classe Nimbus assemblé par Kuat Systems Engineering est un vaisseau de choix aussi bien pour les pilotes clones que pour les pilotes non-clones. Les techniques de pointe pour produire en masse ses moteurs ioniques de précision seront plus tard essentielles dans le développement des séries TIE par Sienar Fleet Systems.',
      },
      hyperspace: true,
      slots: ['Astromech', 'Modification', 'Configuration'],
      cost: 27,
      epic: false,
      ffg: 793,
    },
    {
      xws: 'oddball-nimbusclassvwing',
      ffg: 788,
      name: { en: '"Odd Ball"', de: '„Odd Ball"' },
      cost: 32,
      limited: 1,
      initiative: 5,
      caption: { en: 'CC-2237' },
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      hyperspace: false,
      epic: true,
      ability: {
        en:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt oder eine rote Aktion durchgeführt hast, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, darfst du es als Ziel erfassen.',
        es:
          'Después de que ejecutes completamente una maniobra roja o realices una acción roja, si hay una nave enemiga en tu [Bullseye Arc], puedes obtener un Blanco fijado sobre esa nave.',
        fr:
          "Après avoir entièrement exécuté une manœuvre rouge ou effectué une action rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], vous pouvez verrouiller ce vaisseau.",
      },
    },
  ],
};

export default t;

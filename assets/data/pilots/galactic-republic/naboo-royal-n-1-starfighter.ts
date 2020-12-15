import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Naboo Royal N-1 Starfighter',
    de: 'Königlicher N-1-Sternenjäger von Naboo',
    fr: 'Chasseur Royal Naboo N-1',
    es: 'Bombardero droide clase Hiena',
  },
  xws: 'nabooroyaln1starfighter',
  size: 'Small',
  dial: [
    '1BW',
    '1FW',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3RR',
    '4FW',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Full Throttle',
      de: 'Vollgas',
      fr: 'Plein Gaz',
      es: 'Aceleración máxima',
      it: 'A Tutta Velocità',
      pl: 'Pełny ciąg',
      pt: 'Full Throttle',
      zh: 'Full Throttle',
    },
    text: {
      en:
        'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      de:
        'Nachdem du ein Manöver mit Geschwindigkeit 3-5 vollständig ausgeführt hast, darfst du eine [Evade] -Aktion durchführen.',
      fr:
        'après avoir entièrement exécuté une manœuvre à vitesse 3-5, vous pouvez effectuer une action [Evade].',
      es:
        'Después de que ejecutes completamente una maniobra de velocidad 3-5, puedes realizar una acción [Evade] .',
      it:
        'Dopo aver eseguito completamente una manovra a velocità 3-5, puoi effettuare 1 azione [Evade].',
      pl:
        'Gdy wykonasz pełny manewr o prędkości 3-5, możesz wykonać akcję [Evade].',
      pt:
        'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      zh:
        'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
    },
  },
  pilots: [
    {
      name: { en: 'Anakin Skywalker' },
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'Before you reveal your maneuver, you may spend 1 [Force] to barrel roll (this is not an action).',
        de:
          'Bevor du dein Manöver aufdeckst, darfst du 1 [Force] ausgeben, um eine Fassrolle zu fliegen (dies ist keine Aktion).',
        fr:
          "Avant de révéler votre manœuvre, vous pouvez dépenser 1 [Force] pour effectuer un tonneau (ce n'est pas une action).",
        es:
          'Antes de que reveles tu maniobra, puedes gastar 1 [Force] para llevar a cabo un tonel volado (esto no es una acción).',
      },
      xws: 'anakinskywalker-nabooroyaln1starfighter',
      hyperspace: true,
      epic: true,
      cost: 41,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      force: { value: 1, recovers: 1, side: ['light'] },
      ffg: 558,
      caption: {
        en: 'Hero of Naboo',
        de: 'Held von Naboo',
        fr: 'Héros de Naboo',
        es: 'Héroe de Naboo',
      },
    },
    {
      name: { en: 'Ric Olié' },
      xws: 'ricolie',
      initiative: 5,
      limited: 1,
      ability: {
        en:
          "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's, roll 1 additional die.",
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls die Geschwindigkeit deines aufgedeckten Manövers höher als die des feindlichen Schiffes ist, wirf 1 zusätzlichen Würfel.',
        fr:
          'Tant que vous défendez ou effectuez une attaque principale, si la vitesse de votre manœuvre révélée est plus élevée que celle du vaisseau ennemi, lancez 1 dé supplémentaire.',
        es:
          'Mientras te defiendes o efectúas un ataque principal, si la velocidad de tu maniobra revelada es superior a la de la nave enemiga, tira 1 dado adicional.',
      },
      caption: {
        en: 'Bravo Leader',
        de: 'Bravo Eins',
        fr: 'Leader Bravo',
        es: 'Jefe Bravo',
      },
      hyperspace: true,
      epic: true,
      cost: 45,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 557,
    },
    {
      name: { en: 'Padmé Amidala' },
      xws: 'padmeamidala',
      initiative: 4,
      limited: 1,
      caption: {
        en: 'Aggressive Negotiator',
        de: 'Aggressive Verhandlungsführerin',
        fr: 'Négociatrice Agressive',
        es: 'Negociadora agresiva',
      },
      hyperspace: true,
      epic: true,
      ability: {
        en:
          'While an enemy ship in your [Front Arc] defends or performs an attack, that ship can modify only 1 [Focus] result (other results can still be modified).',
        de:
          'Solange ein feindliches Schiff in deinem [Front Arc] verteidigt oder einen Angriff durchführt, kann jenes Schiff nur 1 [Focus] -Ergebnis modifizieren (andere Ergebnisse können weiterhin modifiziert werden).',
        fr:
          "Tant qu'un vaisseau ennemi dans votre [Front Arc] défend ou effectue une attaque, ce vaisseau ennemi ne peut modifier que 1 seul résultat [Focus] (les autres résultats peuvent toujours être modifiés).",
        es:
          'Mientras una nave enemiga en tu [Front Arc] se defiende o efectúa un ataque, esa nave sólo puede modificar 1 resultado [Focus] (los otros resultados siguen pudiendo ser modificados).',
      },
      cost: 44,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 559,
    },
    {
      name: { en: 'Dineé Ellberger' },
      xws: 'dineeellberger',
      initiative: 3,
      limited: 1,
      ability: {
        en:
          "While you defend or perform an attack, if the speed of your revealed maneuver is the same as the enemy ship's, that ship's dice cannot be modified.",
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls dein aufgedecktes Manöver dieselbe Geschwindigkeit hat wie das des feindlichen Schiffes, können die Würfel jenes Schiffes nicht modifiziert werden.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, si la vitesse de votre manœuvre révélée est identique à celle du vaisseau ennemi, les dés de ce vaisseau ennemi ne peuvent pas être modifiés.',
        es:
          'Mientras te defiendes o efectúas un ataque, si la velocidad de tu maniobra revelada es la misma que la de la nave enemiga, los dados de esa nave no pueden ser modificados.',
      },
      hyperspace: true,
      epic: true,
      cost: 38,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 560,
      caption: {
        en: 'Bravo Five',
        de: 'Bravo Fünf',
        fr: 'Bravo Cinq',
        es: 'Bravo Cinco',
      },
    },
    {
      name: {
        en: 'Bravo Flight Officer',
        de: 'Flugoffizier der Bravo-Staffel',
        fr: "Officier de l'Escadron Bravo",
        es: 'Oficial de la Escuadrilla Bravo',
      },
      xws: 'bravoflightofficer',
      initiative: 2,
      limited: 0,
      text: {
        en:
          'The volunteer pilots of the Royal Naboo Security Force are dedicated to protecting the people and ideals of their homeworld, and trust their Queen to send them into battle only when all other options have failed.',
        de:
          'Die freiwilligen Piloten der Königlichen Sicherheitskräfte von Naboo haben sich dem Schutz des Volkes und der Ideale ihrer Heimatwelt verschrieben und vertrauen darauf, dass ihre Königin sie nur als letzten Ausweg ins Gefecht schicken wird.',
        fr:
          'Les pilotes volontaires des Forces Royales de Sécurité de Naboo sont déterminés à protéger le peuple et les idéaux de leur monde natal, et font confiance à leur Reine pour les envoyer au combat seulement quand toutes les autres options ont échoué.',
        es:
          'Los pilotos voluntarios de la Fuerza de Seguridad Real de Naboo están entregados a la protección de la gente y los ideales de su mundo natal, y están plenamente convencidos de que su Reina sólo los envía a combatir cuando todas las demás opciones han fracasado.',
      },
      hyperspace: false,
      epic: true,
      cost: 33,
      slots: ['Sensor', 'Torpedo', 'Astromech'],
      ffg: 562,
    },
    {
      name: {
        en: 'Naboo Handmaiden',
        de: 'Zofe von Naboo',
        fr: 'Servante de Naboo',
        es: 'Doncella de Naboo',
      },
      xws: 'naboohandmaiden',
      initiative: 1,
      limited: 2,
      ability: {
        en:
          'Setup: After placing forces, assign the Decoyed condition to 1 friendly ship other than Naboo Handmaiden.',
        de:
          'Aufbau:Nachdem die Streitkräfte platziert worden sind, ordne 1 anderem befreundeten Schiff als Zofe von Nabooden Zustand Durch ein Double geschütztzu.',
        fr:
          "Mise en Place : après avoir placé les forces, assignez l'état Dupé à 1 vaisseau allié autre que Servante de Naboo.",
        es:
          'Preparación: Después de desplegar las fuerzas, asigna el Estado Custodiado a 1 nave aliada que no sea una Doncella de Naboo.',
      },
      conditions: ['decoyed'],
      hyperspace: true,
      epic: true,
      cost: 42,
      slots: ['Sensor', 'Torpedo', 'Astromech'],
      ffg: 561,
      caption: {
        en: 'Regal Ruse',
        de: 'Double der Königin',
        fr: 'Stratagème Royal',
        es: 'Ardid regio',
      },
    },
  ],
  ffg: 63,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Royal_Naboo_N-1_Starfighter.png',
};

export default t;

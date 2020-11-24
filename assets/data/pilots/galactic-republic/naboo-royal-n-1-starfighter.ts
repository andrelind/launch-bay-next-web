import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Naboo Royal N-1 Starfighter',
    de: 'Königlicher N-1-Sternenjäger von Naboo',
    fr: 'Chasseur Royal Naboo N-1',
    it: 'Astrocaccia Reale Naboo N-1',
    pl: 'Myśliwiec N-1 Korpusu Królewskiego Naboo',
    pt: 'Naboo Royal N-1 Starfighter',
    zh: 'Naboo Royal N-1 Starfighter',
    es: 'Caza estelar real N-1 de Naboo',
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
      name: {
        en: 'Anakin Skywalker',
        de: 'Anakin Skywalker',
        fr: 'Anakin Skywalker',
        es: 'Anakin Skywalker',
        it: 'Anakin Skywalker',
        pl: 'Anakin Skywalker',
        pt: 'Anakin Skywalker',
        zh: 'Anakin Skywalker',
      },
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
        it:
          "Prima di rivelare la tua manovra, puoi spendere 1 [Force] per effettuare un avvitamento (questa non è considerata un'azione).",
        pl:
          'Zanim odsłonisz swój manewr, możesz wydać 1 [Force], aby wykonać beczkę (to nie jest akcja).',
        pt:
          'Before you reveal your maneuver, you may spend 1 [Force] to barrel roll (this is not an action).',
        zh:
          'Before you reveal your maneuver, you may spend 1 [Force] to barrel roll (this is not an action).',
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
        it: 'Eroe di Naboo',
        pl: 'Bohater Naboo',
        pt: 'Hero of Naboo',
        zh: 'Hero of Naboo',
      },
    },
    {
      name: {
        en: 'Ric Olié',
        de: 'Ric Olié',
        fr: 'Ric Olié',
        es: 'Ric Olié',
        it: 'Ric Olié',
        pl: 'Ric Olié',
        pt: 'Ric Olié',
        zh: 'Ric Olié',
      },
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
        it:
          'Mentre difendi o effettui un attacco primario, se la velocità della tua manovra rivelata è superiore a quella della nave nemica, tira 1 dado aggiuntivo.',
        pl:
          'Gdy się bronisz albo wykonujesz atak podstawowy, jeżeli prędkość twojego odsłoniętego manewru jest większa niż prędkość wrogiego statku, z którym walczysz, rzucasz 1 dodatkową kością.',
        pt:
          "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's, roll 1 additional die.",
        zh:
          "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's, roll 1 additional die.",
      },
      caption: {
        en: 'Bravo Leader',
        de: 'Bravo Eins',
        fr: 'Leader Bravo',
        es: 'Jefe Bravo',
        it: 'Capo Bravo',
        pl: 'Dowódca Bravo',
        pt: 'Bravo Leader',
        zh: 'Bravo Leader',
      },
      hyperspace: true,
      epic: true,
      cost: 45,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 557,
    },
    {
      name: {
        en: 'Padmé Amidala',
        de: 'Padmé Amidala',
        fr: 'Padmé Amidala',
        es: 'Padmé Amidala',
        it: 'Padmé Amidala',
        pl: 'Padmé Amidala',
        pt: 'Padmé Amidala',
        zh: 'Padmé Amidala',
      },
      xws: 'padmeamidala',
      initiative: 4,
      limited: 1,
      caption: {
        en: 'Aggressive Negotiator',
        de: 'Aggressive Verhandlungsführerin',
        fr: 'Négociatrice Agressive',
        es: 'Negociadora agresiva',
        it: 'Combattiva Negoziatrice',
        pl: 'Bezkompromisowa negocjator',
        pt: 'Aggressive Negotiator',
        zh: 'Aggressive Negotiator',
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
        it:
          'Mentre una nave nemica nel tuo [Front Arc] difende o effettua un attacco, quella nave può modificare 1 solo risultato [Focus] (gli altri risultati possono comunque essere modificati).',
        pl:
          'Gdy wrogi statek w twojej [Front Arc] broni się albo wykonuje atak, wolno mu zmodyfikować tylko 1 wynik [Focus] (inne rodzaje wyników mogą być modyfikowane).',
        pt:
          'While an enemy ship in your [Front Arc] defends or performs an attack, that ship can modify only 1 [Focus] result (other results can still be modified).',
        zh:
          'While an enemy ship in your [Front Arc] defends or performs an attack, that ship can modify only 1 [Focus] result (other results can still be modified).',
      },
      cost: 44,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ffg: 559,
    },
    {
      name: {
        en: 'Dineé Ellberger',
        de: 'Dineé Ellberger',
        fr: 'Dineé Ellberger',
        es: 'Dineé Ellberger',
        it: 'Dineé Ellberger',
        pl: 'Dineé Ellberger',
        pt: 'Dineé Ellberger',
        zh: 'Dineé Ellberger',
      },
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
        it:
          'Mentre difendi o effettui un attacco, se la velocità della tua manovra rivelata è pari a quella della nave nemica, i dadi di quella nave non possono essere modificati.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, a prędkość twojego odsłoniętego manewru jest taka sama jak prędkość wrogiego statku, z którym walczysz, jego kości nie mogą być modyfikowane.',
        pt:
          "While you defend or perform an attack, if the speed of your revealed maneuver is the same as the enemy ship's, that ship's dice cannot be modified.",
        zh:
          "While you defend or perform an attack, if the speed of your revealed maneuver is the same as the enemy ship's, that ship's dice cannot be modified.",
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
        it: 'Bravo Cinque',
        pl: 'Bravo Pięć',
        pt: 'Bravo Five',
        zh: 'Bravo Five',
      },
    },
    {
      name: {
        en: 'Bravo Flight Officer',
        de: 'Flugoffizier der Bravo-Staffel',
        fr: "Officier de l'Escadron Bravo",
        es: 'Oficial de la Escuadrilla Bravo',
        it: 'Ufficiale della Squadriglia Bravo',
        pl: 'Oficer Eskadry Bravo',
        pt: 'Bravo Flight Officer',
        zh: 'Bravo Flight Officer',
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
        it:
          "I piloti volontari della Forza di Sicurezza Reale di Naboo hanno il compito di proteggere il popolo e gli ideali del loro mondo d'origine e sanno che la loro Regina li invierà in battaglia solo quando tutte le altre opzioni saranno fallite.",
        pl:
          'Piloci Królewskich Sił Bezpieczeństwa Naboo to w większości ochotnicy, którzy poświęcili się ochronie swoich rodaków i ideałów rodzimej planety. Całkowicie ufają swojej Królowej i wiedzą, że zostaną wysłani do walki tylko wtedy, gdy inne sposoby zawiodą.',
        pt:
          'The volunteer pilots of the Royal Naboo Security Force are dedicated to protecting the people and ideals of their homeworld, and trust their Queen to send them into battle only when all other options have failed.',
        zh:
          'The volunteer pilots of the Royal Naboo Security Force are dedicated to protecting the people and ideals of their homeworld, and trust their Queen to send them into battle only when all other options have failed.',
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
        it: 'Ancella di Naboo',
        pl: 'Służka z Naboo',
        pt: 'Naboo Handmaiden',
        zh: 'Naboo Handmaiden',
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
        it:
          'Preparazione: Dopo il passo "Collocare le Forze", assegna la condizione Sosia a 1 nave amica che non sia l\'Ancella di Naboo.',
        pl:
          'Przygotowanie gry: Po rozmieszczeniu sił przypisz stan Odwrócenie uwagi do 1 przyjaznego statku innego niż Służka z Naboo.',
        pt:
          'Setup: After placing forces, assign the Decoyed condition to 1 friendly ship other than Naboo Handmaiden.',
        zh:
          'Setup: After placing forces, assign the Decoyed condition to 1 friendly ship other than Naboo Handmaiden.',
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
        it: 'Stratagemma Reale',
        pl: 'Królewski podstęp',
        pt: 'Regal Ruse',
        zh: 'Regal Ruse',
      },
    },
  ],
  ffg: 63,
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Royal_Naboo_N-1_Starfighter.png',
};

export default t;

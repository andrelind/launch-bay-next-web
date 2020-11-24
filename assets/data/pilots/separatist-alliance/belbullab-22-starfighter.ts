import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Belbullab-22 Starfighter',
    de: 'Belbullab-22-Sternenjäger',
    fr: 'Chasseur Belbullab-22',
    it: 'Astrocaccia Belbullab-22',
    pl: 'Myśliwiec gwiezdny Belbullab-22',
    pt: 'Belbullab-22 Starfighter',
    zh: 'Belbullab-22 Starfighter',
    es: 'Caza estelar Belbullab-22',
  },
  xws: 'belbullab22starfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BW',
    '1NW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3PR',
    '4FW',
    '5FW',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { type: 'attack', value: 3, arc: 'Front Arc' },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  pilots: [
    {
      name: {
        en: 'General Grievous',
        de: 'General Grievous',
        fr: 'Général Grievous',
        es: 'General Grievous',
        it: 'Generale Grievous',
        pl: 'Generał Grievous',
        pt: 'General Grievous',
        zh: 'General Grievous',
      },
      caption: {
        en: 'Ambitious Cyborg',
        de: 'Ambitionierter Cyborg',
        fr: 'Cyborg Ambitieux',
        es: 'Cíborg ambicioso',
        it: 'Cyborg Ambizioso',
        pl: 'Ambitny cyborg',
        pt: 'Ambitious Cyborg',
        zh: 'Ambitious Cyborg',
      },
      initiative: 4,
      limited: 1,
      xws: 'generalgrievous',
      ability: {
        en:
          "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
        de:
          'Solange du einen Primärangriff durchführst, falls du nicht im Feuerwinkel des Verteidigers bist, darfst du bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, si vous n'est pas dans l'arc de tir du défenseur, vous pouvez relancer jusqu'à 2 dés d'attaque.",
        es:
          'Mientras efectúas un ataque principal, si no estás situado en el arco de fuego del defensor, puedes volver a tirar hasta 2 dados de ataque.',
        it:
          "Mentre effettui un attacco primario, se non sei nell'arco di fuoco del difensore, puoi ripetere il tiro di un massimo di 2 dadi di attacco.",
        pl:
          'Gdy wykonujesz atak podstawowy i nie znajdujesz się w strefie rażenia obrońcy, możesz przerzucić maksymalnie 2 ze swoich kości ataku.',
        pt:
          "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
        zh:
          "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
      },
      hyperspace: true,
      epic: true,
      cost: 44,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      ffg: 492,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3e4dee70764ead7ebe581246a0d4b85d.jpg',
    },
    {
      name: {
        en: 'Wat Tambor',
        de: 'Wat Tambor',
        fr: 'Wat Tambor',
        es: 'Wat Tambor',
        it: 'Wat Tambor',
        pl: 'Wat Tambor',
        pt: 'Wat Tambor',
        zh: 'Wat Tambor',
      },
      caption: {
        en: 'Techno Union Foreman',
        de: 'Vorsitzender der Techno-Union',
        fr: 'Contremaître du Techno-Syndicat',
        es: 'Capataz de la Tecno Unión',
        it: 'Portavoce della Tecno Unione',
        pl: 'Prezes Unii Technokratycznej',
        pt: 'Techno Union Foreman',
        zh: 'Techno Union Foreman',
      },
      initiative: 3,
      limited: 1,
      xws: 'wattambor',
      ability: {
        en:
          'While you perform a primary attack, you may reroll 1 attack die for each calculating friendly ship at range 1 of the defender.',
        de:
          'Solange du einen Primärangriff durchführst, darfst du für jedes berechnende befreundete Schiff in Reichweite 1 des Verteidigers 1 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, vous pouvez relancer 1 dé d'attaque pour chaque vaisseau allié calculateur à portée 1 du défenseur.",
        es:
          'Mientras efectúas un ataque principal, puedes volver a tirar 1 dado de ataque por cada nave aliada calculando que esté situada a alcance 1 del defensor.',
        it:
          'Mentre effettui un attacco primario, puoi ripetere il tiro di 1 dado di attacco per ogni nave calcolante amica a gittata 1 dal difensore.',
        pl:
          'Gdy wykonujesz atak podstawowy, możesz przerzucić 1 kostkę ataku za każdy przyjazny statek posiadający żeton obliczeń i znajdujący się w zasięgu 1 od obrońcy.',
        pt:
          'While you perform a primary attack, you may reroll 1 attack die for each calculating friendly ship at range 1 of the defender.',
        zh:
          'While you perform a primary attack, you may reroll 1 attack die for each calculating friendly ship at range 1 of the defender.',
      },
      hyperspace: true,
      epic: true,
      cost: 42,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      ffg: 493,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/95127fa6d286fe64f3070e742dc64a7c.jpg',
    },
    {
      name: {
        en: 'Feethan Ottraw Autopilot',
        de: 'Autopilot von Feethan Ottraw',
        fr: 'Pilote Automatique Feethan Ottraw',
        es: 'Piloto automático de Feethan Ottraw',
        it: 'Pilota Automatico della Feethan Ottraw',
        pl: 'Autopilot Feethan Ottraw',
        pt: 'Feethan Ottraw Autopilot',
        zh: 'Feethan Ottraw Autopilot',
      },
      limited: 0,
      initiative: 1,
      xws: 'feethanottrawautopilot',
      text: {
        en:
          'Unlike the more disposable fighters it also built for the Separatists, Feethan Ottraw Scalable Assemblies designed the Belbullab-22 with a solid mix of firepower, durability, and speed.',
        de:
          'Feethan Ottraw Fertigbau beliefert die Separatisten nicht nur mit günstigen Wegwerfjägern, sondern entwickelte auch den Belbullab-22, der mit einer soliden Mischung aus Feuerkraft, Robustheit und Schubkraft aufwarten kann.',
        fr:
          'Contrairement aux chasseurs de conception fragile mais facilement remplaçables construits pour les Séparatistes, Feethan Ottraw Scalable Assemblies a également conçu le Belbullab-22, un appareil qui allie puissance de feu, résistance et vitesse.',
        es:
          'A diferencia de otros cazas más sacrificables que también fabrica para las fuerzas separatistas, Ensamblados Escalables Feethan Ottraw diseñó el Belbullab-22 con una sólida combinación de potencia de fuego, resistencia y versatilidad.',
        it:
          'A differenza di altri caccia più sacrificabili costruiti per i Separatisti, il Belbullab-22 fu dotato dalla Feethan Ottraw Scalable Assemblies di una solida combinazione di potenza di fuoco, resistenza e velocità.',
        pl:
          'W przeciwieństwie do większości myśliwców produkowanych masowo dla Separatystów, statek Belbullab-22, produkowany przez Feethan Uttraw Scalable Assemblies, słynie z doskonale zrównoważonych atrybutów: siły ognia, wytrzymałości i prędkości.',
        pt:
          'Unlike the more disposable fighters it also built for the Separatists, Feethan Ottraw Scalable Assemblies designed the Belbullab-22 with a solid mix of firepower, durability, and speed.',
        zh:
          'Unlike the more disposable fighters it also built for the Separatists, Feethan Ottraw Scalable Assemblies designed the Belbullab-22 with a solid mix of firepower, durability, and speed.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      hyperspace: false,
      epic: true,
      cost: 35,
      slots: ['Modification', 'Title', 'Tactical Relay'],
      ffg: 496,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/91052cb8f4ba464f5ac4572a725f757b.jpg',
    },
    {
      name: {
        en: 'Captain Sear',
        de: 'Captain Sear',
        fr: 'Capitaine Sear',
        es: 'Capitán Sear',
        it: 'Captaino Sear',
        pl: 'Kapitan Sear',
        pt: 'Captain Sear',
        zh: 'Captain Sear',
      },
      caption: {
        en: 'Kage Infiltrator',
        de: 'Kage-Infiltrator',
        fr: 'Infiltrateur Kage',
        es: 'Infiltrador kage',
        it: 'Infiltratore Kage',
        pl: 'Infiltrator Kage',
        pt: 'Kage Infiltrator',
        zh: 'Kage Infiltrator',
      },
      limited: 1,
      initiative: 2,
      xws: 'captainsear',
      ability: {
        en:
          'While a friendly ship at range 0-3 performs a primary attack, if the defender is in its [Bullseye Arc], before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 [Evade] result.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-3 einen Primärangriff durchführt, falls der Verteidiger in seinem [Bullseye Arc] ist, darf das befreundete Schiff vor dem Schritt „Ergebnisse neutralisieren" 1 Berechnungsmarker ausgeben, um 1 [Evade]-Ergebnis zu negieren.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-3 effectue une attaque principale, si le défenseur est dans son [Bullseye Arc], avant l'étape « Neutraliser les résultats », le vaisseau allié peut dépenser 1 marqueur de calcul pour annuler 1 résultat [Evade].",
        es:
          'Mientras una nave aliada que tienes a alcance 0-3 efectúa un ataque principal, si el defensor está situado en el [Bullseye Arc] del atacante, antes del paso de "Neutralizar los resultados", la nave aliada puede gastar 1 ficha de Cálculos para anular 1 resultado [Evade].',
        it:
          'Mentre una nave amica a gittata 0-3 effettua un attacco primario, se il difensore è nel suo [Bullseye Arc], prima del passo "Neutralizzare i Risultati", la nave amica può spendere 1 segnalino calcolo per annullare 1 risultato [Evade].',
        pl:
          'Gdy przyjazny statek w zasięgu 0-3 wykonuje atak podstawowy, jeśli obrońca jest w jego [Bullseye Arc], przed etapem neutralizacji wyników ten przyjazny statek może wydać 1 żeton obliczeń, aby anulować 1 wynik [Evade].',
        pt:
          'While a friendly ship at range 0-3 performs a primary attack, if the defender is in its [Bullseye Arc], before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 [Evade] result.',
        zh:
          'While a friendly ship at range 0-3 performs a primary attack, if the defender is in its [Bullseye Arc], before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 [Evade] result.',
      },
      hyperspace: true,
      epic: true,
      cost: 45,
      slots: ['Modification', 'Title', 'Tactical Relay'],
      ffg: 494,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/91a7a38482d28f21b2620d058800a8fe.jpg',
    },
    {
      name: {
        en: 'Skakoan Ace',
        de: 'Skakoanisches Fliegerass',
        fr: 'As Skakoan',
        es: 'As skakoano',
        it: 'Asso Skakoano',
        pl: 'Skakoański as',
        pt: 'Skakoan Ace',
        zh: 'Skakoan Ace',
      },
      xws: 'skakoanace',
      cost: 38,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      ffg: 495,
      initiative: 3,
      limited: 0,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/af0e63b7754ef598f1f36ed9a6c4b4ee.jpg',
      text: {
        en:
          'With its powerful engines, devastating triple laser cannons, and high customizability, the Belbullab-22 is the chosen craft of several elite Separatist Alliance pilots, including the infamous General Grievous.',
        de:
          'Mit seinen leistungsstarken Triebwerken, verheerenden Drillingslasern und vielen Anpassungsmöglichkeiten ist der Belbullab-22 der bevorzugte Jäger der Elitepiloten der Separatisten. Auch der berüchtigte General Grievous nennt einen solchen Sternenjäger sein Eigen.',
        fr:
          "Doté de propulseurs puissants, armé de triples canons laser dévastateurs et modifiable à volonté, le chasseur Belbullab-22 a été adopté par de nombreux pilotes d'élite de l'Alliance Séparatiste, dont le tristement célèbre Général Grievous.",
        es:
          'Con sus potentes motores, devastadores cañones láser triples y amplio nivel de personalización, el Belbullab-22 es la nave favorita de varios pilotos de élite de la Alianza Separatista, entre ellos el infame general Grievous.',
        it:
          "Grazie ai suoi potenti motori, ai devastanti cannoni laser tripli e alle numerose opzioni di personalizzazione, il Belbullab-22 è il vascello preferito dai piloti scelti dell'Alleanza Separatista, incluso il famigerato Generale Grievous.",
        pl:
          'Mocne silniki, potężne, potrójne działa laserowe i spore możliwości wprowadzania modyfikacji sprawiają, że statki Belbullab-22 cieszą się ogromną popularnością wśród wielu elitarnych pilotów Sojuszu Separatystów. Takim statkiem lata także niesławny generał Grievous.',
        pt:
          'With its powerful engines, devastating triple laser cannons, and high customizability, the Belbullab-22 is the chosen craft of several elite Separatist Alliance pilots, including the infamous General Grievous.',
        zh:
          'With its powerful engines, devastating triple laser cannons, and high customizability, the Belbullab-22 is the chosen craft of several elite Separatist Alliance pilots, including the infamous General Grievous.',
      },
      hyperspace: false,
      epic: true,
    },
  ],
  ffg: 58,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Belbullab-22.png',
};

export default t;

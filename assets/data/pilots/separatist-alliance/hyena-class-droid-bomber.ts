import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Hyena-class Droid Bomber',
    de: 'Droiden-Bomber der Hyena-Klasse',
    fr: 'Bombardier Droïde de Classe Hyena',
    es: 'Transporte de la Resistencia',
  },
  xws: 'hyenaclassdroidbomber',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1FW',
    '1NR',
    '1YW',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '2KR',
    '3TW',
    '3FB',
    '3YW',
    '4FW',
    '5FR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Lock' },
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: {
      en: 'Networked Calculations',
      de: 'Vernetzte Berechnungssysteme',
      fr: 'Calculs en Réseau',
      es: 'Procesado de cálculos en red',
      it: 'Calcolo Distribuito',
      pl: 'Sieć obliczeniowa',
      pt: 'Networked Calculations',
      zh: 'Networked Calculations',
    },
    text: {
      en:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      de:
        'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Berechnungsmarker von einem befreundeten Schiff in Reichweite 0-1 ausgeben, um 1 [Focus]-Ergebnis in ein [Evade] oder [Hit]-Ergebnis zu ändern.',
      fr:
        "tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de calcul d'un vaisseau allié à portée 0-1 pour changer 1 résultat [Focus] en un résultat [Evade] ou [Hit].",
      es:
        'Mientras te defiendes o efectúas un ataque, puedes gastar 1 ficha de Cálculos de una nave aliada que tengas a alcance 0-1 para cambiar 1 resultado [Focus] por un resultado [Evade] o [Hit].',
      it:
        'Mentre difendi o effettui un attacco, puoi spendere 1 segnalino calcolo da una nave amica a gittata 0-1 per cambiare 1 risultato [Focus] in 1 risultato [Evade] o [Hit].',
      pl:
        'Gdy się bronisz albo wykonujesz atak, możesz wydać 1 żeton obliczeń z przyjaznego statku w zasięgu 0-1, aby zmienić 1 wynik [Focus] na wynik [Evade] albo [Hit].',
      pt:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      zh:
        'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Techno Union Bomber',
        de: 'Bomber der Techno-Union',
        fr: 'Bombardier du Techno-Syndicat',
        es: 'Bombardero de la Tecno Unión',
      },
      initiative: 1,
      limited: 0,
      xws: 'technounionbomber',
      text: {
        en:
          'Baktoid Armor Workshop developed the Hyena as a strike craft compatible with Trade Federation Vulture swarm tactics.',
        de:
          'Baktoid Rüstungswerke entwickelte die Hyäne als einen mit den Schwarmtaktiken der Vultures kompatiblen Offensivbomber.',
        fr:
          "Les Armureries Baktoid ont développé le Hyena comme un vaisseau d'assaut compatible avec les tactiques de nuée des chasseurs Vulture de la Fédération du Commerce.",
        es:
          'Armeros Baktoides concibió el Hiena como un vehículo de ataque compatible con las tácticas de enjambre utilizadas por los Buitre.',
      },
      hyperspace: false,
      epic: true,
      cost: 25,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 568,
    },
    {
      name: {
        en: 'Bombardment Drone',
        de: 'Bombendrohne',
        fr: 'Drone de Bombardement',
        es: 'Dron de bombardeo',
      },
      caption: {
        en: 'Time on Target',
        de: 'Synchroner Beschuss',
        fr: "Tir d'Écrasement",
        es: 'Momento de impacto sincronizado',
      },
      limited: 3,
      initiative: 3,
      xws: 'bombardmentdrone',
      ability: {
        en:
          'If you would drop a device, you may launch that device instead, using the same template.',
        de:
          'Falls du ein Gerät abwerfen würdest, darfst du jenes Gerät stattdessen unter Verwendung derselben Schablone starten.',
        fr:
          'Si vous êtes censé larguer un engin, vous pouvez le lancer à la place, en utilisant le même gabarit.',
        es:
          'Si vas a soltar un dispositivo, puedes lanzar ese dispositivo en vez de soltarlo, utilizando la misma plantilla.',
      },
      hyperspace: true,
      epic: true,
      cost: 29,
      slots: ['Sensor', 'Device', 'Device', 'Modification', 'Configuration'],
      ffg: 565,
    },
    {
      name: { en: 'DBS-404' },
      xws: 'dbs404',
      initiative: 4,
      limited: 1,
      ability: {
        en:
          'You can perform primary attacks at range 0. While you perform an attack at attack range 0-1, you must roll 1 additional die. After the attack hits, suffer 1 [Critical Hit] damage.',
        de:
          'Du kannst Primärangriffe in Reichweite 0 durchführen. Solange du einen Angriff in Angriffsreichweite 0-1 durchführst, musst du 1 zusätzlichen Würfel werfen. Nachdem der Angriff getroffen hat, erleide 1 [Critical Hit]-Schaden.',
        fr:
          "Vous pouvez effectuer des attaques principales à portée 0. Tant que vous effectuez une attaque à portée d'attaque 0-1, vous devez lancer 1 dé supplémentaire. Après que l'attaque a touché, subissez 1 dégât [Critical Hit].",
        es:
          'Puedes efectuar ataques principales a alcance 0. Mientras efectúas un ataque a alcance de ataque 0-1, debes tirar 1 dado adicional. Después de que el ataque impacte, sufres 1 de daño [Critical Hit].',
      },
      hyperspace: true,
      epic: true,
      cost: 30,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 563,
      caption: {
        en: 'Preservation Protocol Not Found',
        de: 'Keine Selbsterhaltungsprotokolle',
        fr: 'Protocole de Survie Introuvable',
        es: 'Protocolo de preservación ausente',
      },
    },
    {
      name: {
        en: 'Baktoid Prototype',
        de: 'Prototyp von Baktoid',
        fr: 'Prototype Baktoid',
        es: 'Prototipo baktoide',
      },
      caption: {
        en: 'Function over Form',
        de: 'Nicht schön, aber funktionell',
        fr: 'La Fonction Prévaut sur la Forme',
        es: 'La función por encima de la forma',
      },
      xws: 'baktoidprototype',
      initiative: 1,
      limited: 2,
      ability: {
        en:
          'While you perform a special attack, if a friendly ship with the Networked Calculations ship ability has a lock on the defender, you may ignore the [Focus], [Calculate], or [Lock] requirement of that attack.',
        de:
          'Solange du einen Spezialangriff durchführst, falls ein befreundetes Schiff mit der Schiffsfähigkeit Vernetzte Berechnungssysteme den Verteidiger als Ziel erfasst hat, darfst du die [Focus], [Calculate], oder [Lock]-Voraussetzung jenes Angriffs ignorieren.',
        fr:
          'Tant que vous effectuez une attaque spéciale, si un vaisseau allié avec la capacité de vaisseau Calculs en Réseau a un verrouillage sur le défenseur, vous pouvez ignorer les prérequis [Focus], [Calculate] ou [Lock] de cette attaque.',
        es:
          'Mientras efectúas un ataque especial, si una nave aliada con la capacidad de nave Procesado de cálculos en red tiene un Blanco fijado sobre el defensor, puedes ignorar el requisito [Focus], [Calculate], o [Lock] de ese ataque.',
      },
      hyperspace: true,
      epic: true,
      cost: 28,
      slots: ['Sensor', 'Missile', 'Missile', 'Modification', 'Configuration'],
      ffg: 566,
    },
    {
      name: {
        en: 'Separatist Bomber',
        de: 'Separatistenbomber',
        fr: 'Bombardier Séparatiste',
        es: 'Bombardero separatista',
      },
      xws: 'separatistbomber',
      initiative: 3,
      limited: 0,
      text: {
        en:
          'The droid armies of the Separatists are callous to the plight of civilians and make no effort to limit collateral damage.',
        de:
          'Die Droidenarmeen der Separatisten empfinden kein Mitleid und vermeiden daher keine Kollateralschäden an der Zivilbevölkerung.',
        fr:
          'Les armées droïdes des Séparatistes sont insensibles à la détresse des civils et ne font aucun effort pour limiter les dommages collatéraux.',
        es:
          'Los ejércitos de droides de la Alianza Separatista son insensibles al sufrimiento de los civiles y no hacen ningún esfuerzo por limitar los daños colaterales.',
      },
      hyperspace: false,
      epic: true,
      cost: 28,
      slots: ['Torpedo', 'Missile', 'Device', 'Modification', 'Configuration'],
      ffg: 567,
    },
    {
      name: { en: 'DBS-32C' },
      xws: 'dbs32c',
      caption: {
        en: 'Droid Control Signal Relay',
        de: 'Droiden-Kontrollsignalgeber',
        fr: 'Relais de Signaux de Contrôle Droïde',
        es: 'Retransmisor de señales de control de droides',
      },
      limited: 1,
      initiative: 3,
      ability: {
        en:
          'At the start of the Engagement Phase, you may spend 1 calculate token to perform a [Coordinate] action. You cannot coordinate ships that do not have the Networked Calculations ship ability.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Berechnungsmarker ausgeben, um eine [Coordinate]-Aktion durchzuführen. Du kannst keine Schiffe koordinieren, die die Schiffs­fähigkeit Vernetzte Berechnungssysteme nicht haben.',
        fr:
          "Au début de la phase d'engagement, vous pouvez dépenser 1 marqueur de calcul pour effectuer une action [Coordinate]. Vous ne pouvez pas coordonner des vaisseaux qui n'ont pas la capacité de vaisseau Calculs en Réseau.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 ficha de Cálculos para realizar una acción [Coordinate]. No puedes coordinar naves que no tengan la capacidad de nave Procesado de cálculos en red.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
        { difficulty: 'Red', type: 'Jam' },
      ],
      hyperspace: true,
      epic: true,
      cost: 40,
      slots: ['Sensor', 'Modification', 'Configuration', 'Tactical Relay'],
      ffg: 564,
    },
  ],
  ffg: 66,
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Hyena.png',
};

export default t;

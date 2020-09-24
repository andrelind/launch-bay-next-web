import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'HMP Droid Gunship',
    de: 'SRP-Droidenkanonenboot',
    fr: 'Canonnière Droïde PML',
    it: 'HMP Droid Gunship',
    pl: 'HMP Droid Gunship',
    pt: 'HMP Droid Gunship',
    zh: 'HMP Droid Gunship',
    es: 'Cañonera droide HMP',
  },
  xws: 'hmpdroidgunship',
  size: 'Small',
  dial: [
    '0OR',
    '1BR',
    '1FB',
    '1NR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TW',
    '3BR',
    '3FW',
    '3NR',
    '3YW',
    '4FR',
    '5FR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      type: 'Reload',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  ability: {
    name: { en: 'Networked Aim' },
    text: {
      en:
        'You cannot spend your locks to reroll attack dice.  While you perform an attack, you may reroll a number of attack dice up to the number of friendly locks on the defender.',
    },
  },
  pilots: [
    {
      name: {
        en: 'Separatist Predator',
        de: 'Jäger der Separatisten',
        fr: 'Prédateur Séparatiste',
        it: 'Separatist Predator',
        pl: 'Separatist Predator',
        pt: 'Separatist Predator',
        zh: 'Separatist Predator',
        es: 'Depredador separatista',
      },
      initiative: 3,
      limited: 0,
      xws: 'separatistpredator',
      text: {
        en:
          'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
        de:
          'Mit Artillerie ausgestattet und durch Strahlenschilde geschützt können Droidenkanonenboote gleichermaßen die Infanterieformationen der Republik und Sternenjäger zerstören.',
        fr:
          "Dotée d'artillerie et protégée par des boucliers, une canonnière droïde peut faire autant de ravages contre les formations d'infanterie que contre les chasseurs de la République.",
        it:
          'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
        pl:
          'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
        pt:
          'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
        zh:
          'Armed with ordnance and protected by ray shields, a droid gunship can devastate Republic infantry formations and starfighters with equal proficiency.',
        es:
          'Cargada de municiones explosivas y protegida por escudos de rayos, una cañonera droide es capaz de arrasar con igual eficiencia formaciones de infantería y cazas estelares de la República.',
      },
      hyperspace: true,
      epic: false,
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      cost: 36,
      ffg: 667,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d8cba72d59f876f9849a4ef42740bf40.png',
      },
    },
    {
      xws: 'dgs286',
      name: {
        en: 'DGS-286',
        de: 'DKB-286',
        fr: 'DGS-286',
        it: 'DGS-286',
        pl: 'DGS-286',
        pt: 'DGS-286',
        zh: 'DGS-286',
        es: 'DGS-286',
      },
      caption: {
        en: 'Ambush Protocols',
        de: 'Hinterhaltsprotokolle',
        fr: "Protocoles d'Embuscade",
        it: 'Ambush Protocols',
        pl: 'Ambush Protocols',
        pt: 'Ambush Protocols',
        zh: 'Ambush Protocols',
        es: 'Protocolos de emboscada',
      },
      cost: 42,
      initiative: 3,
      limited: 1,
      ability: {
        en:
          'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
        de:
          'Bevor du kämpfst, darfst du ein anderes befreundetes Schiff in Reichweite 0-1 wählen. Jenes Schiff transferiert 1 Berechnungsmarker auf dich.',
        fr:
          'Avant de vous engager, vous pouvez choisir un autre vaisseau allié à portée 0-1. Ce vaisseau vous transfère 1 marqueur de calcul.',
        it:
          'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
        pl:
          'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
        pt:
          'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
        zh:
          'Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.',
        es:
          'Antes de que intervengas, puedes elegir otra nave aliada que tengas a alcance 0-1. Esa nave transfiere 1 ficha de Cálculos a la tuya.',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: false,
      ffg: 664,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/b0d0b99b3b18b330f2c37221fb2696f9.png',
      },
    },
    {
      xws: 'onderonoppressor',
      name: {
        en: 'Onderon Oppressor',
        de: 'Unterdrücker \nvon Onderon',
        fr: "Oppresseur d'Onderon",
        it: 'Onderon Oppressor',
        pl: 'Onderon Oppressor',
        pt: 'Onderon Oppressor',
        zh: 'Onderon Oppressor',
        es: 'Opresor de Onderon',
      },
      caption: {
        en: 'Atmospheric Attack Module',
        de: 'Atmosphärisches Angriffsmodul',
        fr: "Module d'Attaque Atmosphérique",
        it: 'Atmospheric Attack Module',
        pl: 'Atmospheric Attack Module',
        pt: 'Atmospheric Attack Module',
        zh: 'Atmospheric Attack Module',
        es: 'Módulo de ataque atmosférico',
      },
      cost: 40,
      initiative: 3,
      limited: 2,
      ability: {
        en:
          'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
        de:
          'Nachdem du eine Fassrolle oder einen Slip ausgeführt hast, falls du gestresst bist, erhältst du 1 Berechnungsmarker.',
        fr:
          'Après avoir exécuté un tonneau ou un dérapage, si vous êtes stressé, gagnez 1 marqueur de calcul.',
        it:
          'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
        pl:
          'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
        pt:
          'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
        zh:
          'After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.',
        es:
          'Después de que realices un tonel volado o un deslizamiento, si estás bajo tensión, recibes 1 ficha de Cálculos.',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: false,
      ffg: 665,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/41b07fdfd2fc8af5d662796905266c6a.png',
      },
    },
    {
      xws: 'geonosianprototype',
      name: {
        en: 'Geonosian Prototype',
        de: 'Prototyp der Geonosianer',
        fr: 'Prototype Géonosien',
        it: 'Geonosian Prototype',
        pl: 'Geonosian Prototype',
        pt: 'Geonosian Prototype',
        zh: 'Geonosian Prototype',
        es: 'Prototipo geonosiano',
      },
      caption: {
        en: 'Devastation Protocols',
        de: 'Zerstörungsprotokolle',
        fr: 'Protocoles de Dévastation',
        it: 'Devastation Protocols',
        pl: 'Devastation Protocols',
        pt: 'Devastation Protocols',
        zh: 'Devastation Protocols',
        es: 'Protocolos de devastación',
      },
      cost: 35,
      initiative: 2,
      limited: 2,
      ability: {
        en:
          'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
        de:
          'Solange du einen [Missile]- oder [Cannon]-Angriff durchführst, darfst du 1 Fangstrahl­marker vom Verteidiger entfernen, um bis zu 2 Angriffswürfel neu zu werfen.',
        fr:
          "Tant que vous effectuez une attaque [Missile] ou [Cannon], vous pouvez retirer 1 marqueur de rayon tracteur du défenseur pour relancer jusqu'à 2 dés d'attaque.",
        it:
          'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
        pl:
          'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
        pt:
          'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
        zh:
          'While you perform a [Missile] or [Cannon] attack, you may remove 1 tractor token from the defender to reroll up to 2 attack dice.',
        es:
          'Mientras efectúas un ataque [Missile] o [Cannon], puedes retirar 1 ficha de Campo de tracción del defensor para volver a tirar hasta 2 dados de ataque.',
      },
      slots: [
        'Cannon',
        'Cannon',
        'Missile',
        'Missile',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: false,
      ffg: 668,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/1352254ba28a6191adfdea1273cedb8d.png',
      },
    },
    {
      xws: 'dgs047',
      name: {
        en: 'DGS-047',
        de: 'DKB-047',
        fr: 'DGS-047',
        it: 'DGS-047',
        pl: 'DGS-047',
        pt: 'DGS-047',
        zh: 'DGS-047',
        es: 'DGS-047',
      },
      caption: {
        en: 'Adaptive Intelligence',
        de: 'Adaptive Intelligenz',
        fr: 'Intelligence Adaptative',
        it: 'Adaptive Intelligence',
        pl: 'Adaptive Intelligence',
        pt: 'Adaptive Intelligence',
        zh: 'Adaptive Intelligence',
        es: 'Intelecto adaptativo',
      },
      cost: 35,
      initiative: 1,
      limited: 1,
      ability: {
        en:
          'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger in deinem [Front Arc]ist, darfst du ihn als Ziel erfassen. Dann, falls der Verteidiger in deinem [Bullseye Arc] ist, erhält er 1 Anstrengungsmarker.',
        fr:
          'Après que vous avez effectué une attaque, si le défenseur est dans votre [Front Arc], vous pouvez le verrouiller. Puis, si le défenseur est dans votre [Bullseye Arc], il gagne 1 marqueur de contrainte.',
        it:
          'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
        pl:
          'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
        pt:
          'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
        zh:
          'After you perform an attack, if the defender is in your [Front Arc], you may acquire a lock on it. Then, if the defender is in your [Bullseye Arc], it gains 1 strain token.',
        es:
          'Después de que efectúes un ataque, si el defensor está en tu [Front Arc], puedes obtener un Blanco fijado sobre él. Luego, si el defensor está en tu [Bullseye Arc], recibe 1 ficha de Sobresfuerzo.',
      },
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: false,
      ffg: 666,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/49791d2bcd4e67bc66e97c83f17dad24.png',
      },
    },
    {
      xws: 'baktoiddrone',
      name: {
        en: 'Baktoid Drone',
        de: 'Baktoid-Drohne',
        fr: 'Drone Baktoid',
        it: 'Baktoid Drone',
        pl: 'Baktoid Drone',
        pt: 'Baktoid Drone',
        zh: 'Baktoid Drone',
        es: 'Dron baktoide',
      },
      cost: 34,
      initiative: 1,
      limited: 0,
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Modification',
        'Configuration',
        'Tactical Relay',
      ],
      hyperspace: true,
      epic: false,
      ffg: 669,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/3af13c610ba1544ae93383b2c8b10f90.png',
      },
      text: {
        en:
          'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
        de:
          'Das Droidenkanonenboot war gegen Ende des Krieges eine Entwicklung der Konföderation unabhängiger Systeme. Es verwendet spezielle Repulsoren, um Ziele schnell bombardieren und Droiden präzise abwerfen zu können.',
        fr:
          'Développé tardivement pour la Confédération des Systèmes Indépendants, la canonnière droïde utilise des répulseurs spéciaux pour attaquer avec agilité ses cibles et larguer avec précision des droïdes de combat.',
        it:
          'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
        pl:
          'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
        pt:
          'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
        zh:
          'A late-war development for the Confederacy of Independent Systems, the droid gunship uses specialized repulsors to nimbly strafe targets and precisely drop battle droids.',
        es:
          'Invención bélica tardía de la Confederación de Sistemas Independientes, la cañonera droide emplea repulsores especializados para efectuar veloces pasadas de bombardeo y desembarcar droides de combate justo en el lugar preciso.',
      },
    },
  ],
};

export default t;

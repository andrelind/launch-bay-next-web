import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Fireball',
    de: 'Fireball',
    fr: 'Fireball',
    it: 'Fireball',
    pl: 'Fireball',
    pt: 'Fireball',
    zh: 'Fireball',
    es: 'Bola de Fuego',
  },
  xws: 'fireball',
  ffg: 70,
  size: 'Small',
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
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 0 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'SLAM' },
  ],
  ability: {
    name: {
      en: 'Explosion with Wings',
      de: 'Explosion mit Flügeln',
      fr: 'Explosion En Vol',
      es: 'Explosión con alas',
      it: 'Explosion with Wings',
      pl: 'Explosion with Wings',
      pt: 'Explosion with Wings',
      zh: 'Explosion with Wings',
    },
    text: {
      en:
        'Setup: You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token.',
      de:
        'Aufbau: Dir wird 1 verdeckte Schadenskarte zugeteilt. Nachdem du eine [Slam]-Aktion durchgeführt hast, darfst du 1 Schadenskarte offenlegen, um 1 Entwaffnet-Marker zu entfernen.',
      fr:
        'Mise en Place : 1 carte de dégât face cachée vous est attribuée. Après avoir effectué une action [Slam], vous pouvez exposer 1 carte de dégât pour retirer 1 marqueur de désarmement.',
      es:
        'Preparación: Se te inflige 1 carta de Daño boca abajo. Después de que realices una acción [Slam], puedes exponer 1 carta de Daño para retirar 1 ficha de Desarme.',
      it:
        'Setup: You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token.',
      pl:
        'Setup: You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token.',
      pt:
        'Setup: You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token.',
      zh:
        'Setup: You are dealt 1 facedown damage card. After you perform a [Slam] action, you may expose 1 damage card to remove 1 disarm token.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Fireball.png',
  pilots: [
    {
      name: {
        en: 'Colossus Station Mechanic',
        de: 'Mechaniker der Colossus-Station',
        fr: 'Mécanicien de la Station Colossus',
        es: 'Mecánico de la estación Coloso',
        it: 'Colossus Station Mechanic',
        pl: 'Colossus Station Mechanic',
        pt: 'Colossus Station Mechanic',
        zh: 'Colossus Station Mechanic',
      },
      initiative: 2,
      limited: 0,
      xws: 'colossusstationmechanic',
      cost: 26,
      slots: [
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      hyperspace: true,
      epic: true,
      ffg: 623,
      text: {
        en:
          'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
        de:
          'So manche Pilotenkarriere begann in der Bodencrew eines Rennteams, wo talentierte, ehrgeizige Mechaniker rund um die Uhr daran arbeiten, die zusammengeschusterten Rennschiffe ihres Teams am Himmel entlegener Welten wie Castilon zu halten.',
        fr:
          "Certains pilotes ambitieux et talentueux commencent leur carrière en tant qu'équipier au sol, travaillant sans relâche pour permettre à des vaisseaux rafistolés de voler dans les cieux de mondes éloignés comme Castilon.",
        es:
          'Algunos pilotos con tanto talento como ambición se inician en el mundo de la competición como miembros del personal de tierra, trabajando sin descanso para mantener en el aire naves de diseño improvisado en planetas lejados como Castilon.',
        it:
          'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
        pl:
          'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
        pt:
          'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
        zh:
          'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
      },
    },
    {
      name: {
        en: 'Jarek Yeager',
        de: 'Jarek Yeager',
        fr: 'Jarek Yeager',
        es: 'Jarek Yeager',
        it: 'Jarek Yeager',
        pl: 'Jarek Yeager',
        pt: 'Jarek Yeager',
        zh: 'Jarek Yeager',
      },
      caption: {
        en: 'Too Old for This',
        de: 'Zu alt für sowas',
        fr: 'Trop Vieux pour Ça',
        es: 'Demasiado viejo para esto',
        it: 'Too Old for This',
        pl: 'Too Old for This',
        pt: 'Too Old for This',
        zh: 'Too Old for This',
      },
      initiative: 5,
      limited: 1,
      xws: 'jarekyeager',
      ability: {
        en:
          'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
        de:
          'Solange du 2 oder weniger Stressmarker hast, falls du beschädigt bist, kannst du rote Basismanöver ausführen, auch solange du gestresst bist; falls du kritisch beschädigt bist, kannst du rote Expertenmanöver ausführen, auch solange du gestresst bist.',
        fr:
          'Tant que vous avez 2 marqueurs de stress ou moins, si vous êtes endommagé, vous pouvez exécuter des manœuvres basiques rouges, même si vous êtes stressé ; si vous êtes critiquement endommagé, vous pouvez exécuter des manœuvres avancées rouges, même si vous êtes stressé.',
        es:
          'Mientras tengas 2 o menos fichas de Tensión, si estás dañado, eres capaz de ejecutar maniobras básicas rojas incluso aunque estés bajo tensión; si estás dañado críticamente, eres capaz de ejecutar maniobras avanzadas rojas incluso aunque estés bajo tensión.',
        it:
          'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
        pl:
          'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
        pt:
          'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
        zh:
          'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
      },
      cost: 32,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      hyperspace: false,
      epic: true,
      ffg: 620,
    },
    {
      name: {
        en: 'Kazuda Xiono',
        de: 'Kazuda Xiono',
        fr: 'Kazuda Xiono',
        es: 'Kazuda Xiono',
        it: 'Kazuda Xiono',
        pl: 'Kazuda Xiono',
        pt: 'Kazuda Xiono',
        zh: 'Kazuda Xiono',
      },
      caption: {
        en: 'Best Pilot in the Galaxy',
        de: 'Bester Pilot der Galaxis',
        fr: 'Le Meilleur Pilote de la Galaxie',
        es: 'El mejor piloto de la galaxia',
        it: 'Best Pilot in the Galaxy',
        pl: 'Best Pilot in the Galaxy',
        pt: 'Best Pilot in the Galaxy',
        zh: 'Best Pilot in the Galaxy',
      },
      initiative: 4,
      limited: 1,
      xws: 'kazudaxiono',
      ability: {
        en:
          "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
        de:
          'Solange du verteidigst oder einen Primärangriff durchführst, falls die Initiative des feindlichen Schiffes höher als die Anzahl deiner Schadenskarten ist, darfst du 1 zusätzlichen Würfel werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque principale, si l'initiative du vaisseau ennemi est plus élevée que le nombre de cartes de dégât que vous avez, vous pouvez lancer 1 dé supplémentaire.",
        es:
          'Mientras te defiendes o efectúas un ataque principal, si la Iniciativa de la nave enemiga es mayor que la cantidad de cartas de Daño que tienes, puedes tirar 1 dado adicional.',
        it:
          "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
        pl:
          "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
        pt:
          "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
        zh:
          "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
      },
      cost: 39,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      hyperspace: false,
      epic: true,
      ffg: 621,
    },
    {
      name: {
        en: 'R1-J5',
        de: 'R1-J5',
        fr: 'R1-J5',
        es: 'R1-J5',
        it: 'R1-J5',
        pl: 'R1-J5',
        pt: 'R1-J5',
        zh: 'R1-J5',
      },
      caption: {
        en: 'Bucket',
        de: 'Bucket',
        fr: 'Bucket',
        es: 'Cubo',
        it: 'Bucket',
        pl: 'Bucket',
        pt: 'Bucket',
        zh: 'Bucket',
      },
      initiative: 1,
      limited: 1,
      xws: 'r1j5',
      ability: {
        en:
          'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
        de:
          'Bevor du 1 deiner Schadenskarten offenlegst, darfst du dir deine verdeckten Schadenskarten ansehen, 1 wählen und stattdessen jene Karte offenlegen.',
        fr:
          "Avant d'exposer 1 de vos cartes de dégât, vous pouvez regarder vos cartes de dégât face cachée, en choisir 1 et l'exposer à la place.",
        es:
          'Antes de que expongas 1 de tus cartas de Daño, en vez de eso puedes mirar tus cartas de Daño boca abajo, elegir 1 de ellas y exponerla.',
        it:
          'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
        pl:
          'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
        pt:
          'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
        zh:
          'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'SLAM' },
      ],
      cost: 28,
      slots: [
        'Missile',
        'Crew',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      hyperspace: false,
      epic: true,
      ffg: 622,
    },
  ],
};

export default t;

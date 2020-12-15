import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'ARC-170 Starfighter',
    de: 'ARC-170-Sternenjäger',
    fr: 'Chasseur ARC-170',
    es: 'Caza estelar ARC-170',
  },
  xws: 'arc170starfighter',
  size: 'Medium',
  ffg: 31,
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
  faction: 'Galactic Republic',
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
  pilots: [
    {
      name: { en: '"Sinker"', de: '„Sinker"' },
      caption: {
        en: 'Wolfpack Veteran',
        de: 'Veteran des Wolfsrudels',
        fr: 'Vétéran de la Meute',
        es: 'Veterano del Escuadrón Manada',
      },
      initiative: 3,
      limited: 1,
      xws: 'sinker',
      ability: {
        en:
          'While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 1-2 in deinem [Left Arc] oder [Right Arc] einen Primärangriff durchführt, darf es 1 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 1-2 situé dans votre [Left Arc] ou [Right Arc] effectue une attaque principale, il peut relancer 1 dé d'attaque.",
        es:
          'Mientras una nave aliada que tienes a alcance 1-2 en tu [Left Arc] or [Right Arc] efectúa un ataque principal, esa nave puede volver a tirar 1 dado de ataque.',
      },
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      hyperspace: false,
      epic: true,
      cost: 54,
      ffg: 526,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/04b3e18c19a0843f89353949c9ffcb77.jpg',
    },
    {
      name: { en: '"Jag"', de: '„Jag"' },
      xws: 'jag',
      cost: 48,
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      ffg: 525,
      caption: { en: 'CT-55/11-9009' },
      initiative: 3,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/124b11dde89cf986fcd8bc8e89094cf5.jpg',
      ability: {
        en:
          'After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 1-2 in deinem [Left Arc] oder [Right Arc] verteidigt hat, darfst du den Angreifer als Ziel erfassen.',
        fr:
          "Après qu'un vaisseau allié à portée 1-2 situé dans votre [Left Arc] ou [Right Arc] a défendu, vous pouvez verrouiller l'attaquant.",
        es:
          'Después de que una nave aliada que tengas a alcance 1-2 en tu [Left Arc] o [Right Arc] se defienda, puedes obtener un Blanco fijado sobre el atacante.',
      },
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: '"Odd Ball"', de: '„Odd Ball"' },
      xws: 'oddball-arc170starfighter',
      cost: 48,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      ffg: 523,
      caption: { en: 'CC-2237' },
      initiative: 5,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/597ace7e901187c88d9ff75bb34a1301.jpg',
      ability: {
        en:
          'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
        de:
          'Nachdem du ein rotes Manöver vollständig ausgeführt oder eine rote Aktion durchgeführt hast, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, darfst du jenes Schiff als Ziel erfassen.',
        fr:
          "Après avoir entièrement exécuté une manœuvre rouge ou effectué une action rouge, s'il y a un vaisseau ennemi dans votre [Bullseye Arc], vous pouvez verrouiller ce vaisseau.",
        es:
          'Después de que ejecutes completamente una maniobra roja o realices una acción roja, si hay una nave enemiga en tu [Bullseye Arc], puedes obtener un Blanco fijado sobre esa nave.',
      },
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: '"Wolffe"', de: '„Wolffe"' },
      xws: 'wolffe',
      cost: 49,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      ffg: 524,
      caption: { en: 'CC-3636' },
      initiative: 4,
      limited: 1,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/933ef28f6a8fda0c5741bd6a9a5f308d.jpg',
      charges: { value: 1, recovers: 0 },
      ability: {
        en:
          'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
        de:
          'Solange du einen [Front Arc]-Primärangriff durchführst, darfst du 1 [Charge] ausgeben, um 1 Angriffswürfel neu zu werfen. Solange du einen [Rear Arc]-Primärangriff durchführst, darfst du 1 [Charge] wiederherstellen, um 1 zusätzlichen Angriffswürfel zu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale [Front Arc], vous pouvez dépenser 1 [Charge] pour relancer 1 dé d'attaque. Tant que vous effectuez une attaque principale [Rear Arc], vous pouvez récupérer 1 [Charge] pour lancer 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal [Front Arc], puedes gastar 1 [Charge] para volver a tirar 1 dado de ataque. Mientras efectúas un ataque principal [Rear Arc], puedes recuperar 1 [Charge] para tirar 1 dado de ataque adicional.',
      },
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '104th Battalion Pilot',
        de: 'Pilot des 104. Bataillons',
        fr: 'Pilote du 104ème Bataillon',
        es: 'Piloto del Batallón 104',
      },
      xws: '104thbattalionpilot',
      cost: 42,
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      ffg: 528,
      initiative: 2,
      limited: 0,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/5081daee997a2a55de474dad2e8e4a07.jpg',
      text: {
        en:
          "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
        de:
          'Der ARC-170 ist ein überragender schwerer Begleitjäger, ausgestattet mit Bug- und Heckgeschützen, Sprengkörpern sowie einem Astromechdroiden zur Navigation. Wo auch immer diese mächtigen Schiffe zum Einsatz kommen, stärken sie die Präsenz der Republikanischen Flotte.',
        fr:
          "L'ARC-170 a été conçu en tant que chasseur d'escorte lourd, armé de canons laser à l'avant et à l'arrière, d'artillerie et d'un astromech de navigation. Les escadrons de ces redoutables chasseurs renforcent les forces de la Marine Républicaine au cours des batailles dans lesquelles ils sont déployés.",
        es:
          'El ARC-170 se diseñó como un caza pesado de escolta de altas prestaciones provisto de una potente combinación de láseres frontales y posteriores, cabezas de guerra y un droide astromecánico para tareas de navegación. Los escuadrones de estas impresionantes naves afianzaban la presencia de la Armada de la República en toda batalla en la que intervinieran.',
      },
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Squad Seven Veteran',
        de: 'Veteran von Trupp Sieben',
        fr: "Vétéran de l'Escadron Sept",
        es: 'Veterano del Escuadrón Siete',
      },
      xws: 'squadsevenveteran',
      cost: 44,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      ffg: 527,
      initiative: 3,
      limited: 0,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3c9cad4a6c8cdb6a7749a76e1b42ec23.jpg',
      text: {
        en:
          'Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.',
        de:
          'Klontrupp Sieben ist eine Spezialeinheit der Doppelbogen-Flotte, die unter dem Kommando legendärer Jedi-Generäle wie Plo Koon und Obi-Wan Kenobi in den Schlachten von Coruscant und Cato Neimoidia großen Ruhm erlangte.',
        fr:
          "Le Vol Clone Sept en tant qu'unité de la flotte Open Circle a servi auprès de généraux Jedi légendaires comme Plo Koon ou Obi-Wan Kenobi et a obtenu ses titres de gloire au cours des batailles de Coruscant et de Cato Neimoidia.",
        es:
          'La Escuadrilla Clon Siete forma parte de la Flota del Círculo Abierto bajo el mando de generales jedi legendarios como Plo Koon y Obi-Wan Kenobi, y sirvió con distinción en las batallas de Coruscant y Cato Neimoidia.',
      },
      hyperspace: true,
      epic: true,
    },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Arc-170.png',
};

export default t;

import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'andrasta',
    sides: [
      {
        title: { en: 'Andrasta' },
        type: 'Title',
        ability: {
          en: 'Add [Device] slot.',
          de: 'Füge den [Device]-Slot hinzu.',
          es: 'Añádete un espacio [Device].',
          fr: 'Ajoutez un emplacement [Device].',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Device', value: 1 },
          { action: { type: 'Reload', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_146.jpg',
        ffg: 371,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'blackone',
    sides: [
      {
        title: { en: 'Black One', de: 'Schwarz Eins', es: 'Negro Uno' },
        type: 'Title',
        ability: {
          en:
            'After you perform a [Slam] action, lose 1 [Charge]. Then you may gain 1 ion token to remove 1 disarm token. If your [Charge] is inactive, you cannot perform the [Slam] action.',
          de:
            'Nachdem du eine [Slam]-Aktion durchgeführt hast, verliere 1 [Charge]. Dann darfst du 1 Ionenmarker erhalten, um 1 Entwaffnet-Marker zu entfernen. Falls deine [Charge] inaktiv ist, kannst du die [Slam]-Aktion nicht durchführen.',
          es:
            'Después de que realices una acción [Slam], pierdes 1 [Charge]. Luego puedes recibir 1 ficha de Iones para retirar 1 ficha de Desarme. Si tu [Charge] está inactiva, no puedes realizar la acción [Slam].',
          fr:
            "Après avoir effectué une action [Slam], perdez 1 [Charge]. Puis vous pouvez gagner 1 marqueur ionique pour retirer 1 marqueur de désarmement. Si votre [Charge] est inactive, vous ne pouvez pas effectuer l'action [Slam].",
        },
        slots: ['Title'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/b617cc192e2ffb8368de79d69e1e7956.jpg',
        ffg: 484,
        grants: [{ action: { type: 'SLAM', difficulty: 'White' }, value: 1 }],
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['t70xwing'] }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'dauntless',
    sides: [
      {
        title: { en: 'Dauntless', es: 'Intrépido' },
        type: 'Title',
        ability: {
          en:
            'After you partially execute a maneuver, you may perform 1 white action, treating that action as red.',
          de:
            'Nachdem du ein Manöver teilweise ausgeführt hast, darfst du 1 weiße Aktion durchführen, wobei du jene Aktion behandelst, als wäre sie rot.',
          es:
            'Después de que ejecutes parcialmente una maniobra, puedes realizar 1 acción blanca, considerando esa acción como si fuera roja.',
          fr:
            'Après avoir partiellement exécuté une manœuvre, vous pouvez effectuer 1 action blanche, en la considérant comme rouge.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_123.jpg',
        ffg: 349,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['vt49decimator'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'ghost',
    sides: [
      {
        title: { en: 'Ghost', es: 'Espíritu' },
        type: 'Title',
        ability: {
          en:
            'You can dock 1 attack shuttle or Sheathipede-class shuttle. Your docked ships can deploy only from your rear guides.',
          de:
            'Du kannst 1 Jagdshuttle oder eine Raumfähre der Sheathipede-Klasse andocken lassen. Deine angedockten Schiffe können nur von deinen hinteren Stoppern aus abgesetzt werden.',
          es:
            'Puedes acoplar 1 lanzadera de ataque o 1 lanzadera clase Sheathipede. Tus naves acopladas sólo pueden desplegarse desde tus salientes traseros.',
          fr:
            "1 navette d'attaque ou de classe Sheathipede peut s'arrimer à vous. Les vaisseaux arrimés ne peuvent être déployés que par vos glissières arrière.",
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_102.jpg',
        ffg: 326,
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['vcx100lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'havoc',
    sides: [
      {
        title: { en: 'Havoc', es: 'Estrago' },
        type: 'Title',
        ability: {
          en: 'Remove [Crew] slot. Add [Sensor] and [Astromech] slots.',
          de:
            'Entferne den [Crew]-Slot. Füge [Sensor]- und [Astromech]-Slots hinzu.',
          es:
            'Elimínate el espacio [Crew]. Añádete los espacios [Sensor] y [Astromech].',
          fr:
            'Retirez un emplacement [Crew].Ajoutez un emplacement [Sensor] et un emplacement [Astromech].',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Sensor', value: 1 },
          { slot: 'Astromech', value: 1 },
          { slot: 'Crew', value: -1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_147.jpg',
        ffg: 372,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['scurrgh6bomber'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'houndstooth',
    sides: [
      {
        title: { en: "Hound's Tooth", de: 'Reißzahn', es: 'Diente de Perro' },
        type: 'Title',
        ability: {
          en: '1 Z-95-AF4 headhunter can dock with you.',
          de: 'An dir kann 1 Z-95-AF4-Kopfjäger andocken.',
          es: '1 Z-95-AF4 Cazacabezas puede acoplarse contigo.',
          fr: "1 Chasseur de Têtes Z-95-AF4 peut s'arrimer à vous.",
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_148.jpg',
        ffg: 373,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['yv666lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ig2000',
    sides: [
      {
        title: { en: 'IG-2000' },
        type: 'Title',
        ability: {
          en:
            'You have the pilot ability of each other friendly ship with the IG-2000 upgrade.',
          de:
            'Du hast die Pilotenfähigkeit jedes anderen befreundeten Schiffes mit der Aufwertung IG-2000.',
          es:
            'Posees la capacidad especial de piloto de cada otra nave aliada que tenga la mejora IG-2000.',
          fr:
            "Vous avez la capacité de pilote de chaque autre vaisseau allié qui possède l'amélioration IG-2000.",
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_149.jpg',
        ffg: 374,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['aggressorassaultfighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'landosmillenniumfalcon',
    sides: [
      {
        title: {
          en: "Lando's Millennium Falcon",
          de: 'Landos Millennium Falke',
          fr: 'Faucon Millenium de Lando',
          es: 'Halcón Milenario de Lando',
        },
        type: 'Title',
        ability: {
          en:
            '1 Escape Craft may dock with you. While you have an escape craft docked, you may treat its shields as if they were on your ship card. While you perform a primary attack against a stressed ship, roll 1 additional attack die.',
          de:
            '1 Rettungskapsel darf bei dir andocken. Solange ein Rettungskapsel bei dir angedockt ist, darfst du seine Schilde ausgeben, als wären sie auf deiner Schiffskarte. Solange du einen Primärangriff gegen ein gestresstes Schiff durchführst, wirfst du 1 zusätzlichen Angriffswürfel.',
          es:
            '1 Nave de escape puede acoplarse contigo. Mientras tienes 1 Nave de escape acoplada, puedes gastar sus escudos como si estuvieran en tu carta de Nave. Mientras efectúas un ataque principal contra una nave bajo tensión, tira 1 dado de ataque adicional.',
          fr:
            "1 Vaisseau de secours peut s'arrimer à vous. Tant que vous avez un Vaisseau de secours arrimé, vous pouvez dépenser ses boucliers comme s'ils étaient sur votre carte de vaisseau. Tant que vous effectuez une attaque principale contre un vaisseau stressé, lancez 1 dé d'attaque supplémentaire.",
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_164.jpg',
        ffg: 390,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['customizedyt1300lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'marauder',
    sides: [
      {
        title: { en: 'Marauder', de: 'Marodeur', es: 'Merodeador' },
        type: 'Title',
        ability: {
          en:
            'While you perform a primary [Rear Arc] attack, you may reroll 1 attack die. Add [Gunner] slot.',
          de:
            'Solange du einen [Rear Arc]-Primärangriff durchführst, darfst du 1 Angriffswürfel neu werfen. Füge den [Gunner]-Slot hinzu.',
          es:
            'Mientras efectúas un ataque principal [Rear Arc], puedes volver a tirar 1 dado de ataque. Añádete un espacio [Gunner].',
          fr:
            "Tant que vous effectuez une attaque principale [Rear Arc], vous pouvez relancer 1 dé d'attaque. Ajoutez un emplacement [Gunner].",
        },
        slots: ['Title'],
        grants: [{ slot: 'Gunner', value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_150.jpg',
        ffg: 375,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'millenniumfalcon',
    sides: [
      {
        title: {
          en: 'Millennium Falcon',
          de: 'Millennium Falke',
          fr: 'Faucon Millenium',
          es: 'Halcón Milenario',
        },
        type: 'Title',
        ability: {
          en:
            'While you defend, if you are evading, you may reroll 1 defense die.',
          de:
            'Solange du verteidigst, falls du ausweichst, darfst du 1 Verteidigungswürfel neu werfen.',
          es:
            'Mientras te defiendes, si estás evadiéndote, puedes volver a tirar 1 dado de defensa.',
          fr:
            "Tant que vous défendez, si vous avez un marqueur d'évasion, vous pouvez relancer 1 dé de défense.",
        },
        slots: ['Title'],
        grants: [{ action: { type: 'Evade', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_103.jpg',
        ffg: 327,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['modifiedyt1300lightfreighter'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'misthunter',
    sides: [
      {
        title: {
          en: 'Mist Hunter',
          de: 'Nebeljäger',
          es: 'Cazador de la Niebla',
        },
        type: 'Title',
        ability: {
          en: 'Add [Cannon] slot.',
          de: 'Füge den [Cannon]-Slot hinzu.',
          es: 'Añádete el espacio [Cannon].',
          fr: 'Ajoutez un emplacement [Cannon].',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_151.jpg',
        ffg: 376,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['g1astarfighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'moldycrow',
    sides: [
      {
        title: { en: 'Moldy Crow', es: 'Cuervo Oxidado' },
        type: 'Title',
        ability: {
          en:
            'Gain a [Front Arc] primary weapon with a value of "3." During the End Phase, do not remove up to 2 focus tokens.',
          de:
            'Erhalte eine [Front Arc]-Primärwaffe mit einem Wert von 3. Während der Endphase, entferne bis zu 2 Fokusmarker nicht.',
          es:
            'Adquieres un armamento principal [Front Arc] cuyo valor de Ataque es 3. Durante la fase Final, no retires hasta 2 de tus fichas de Concentración.',
          fr:
            "Gagnez une arme principale [Front Arc] avec une valeur de « 3 ». Pendant la phase de dénouement, ne retirez pas jusqu'à 2 marqueurs de concentration.",
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_104.jpg',
        ffg: 328,
      },
    ],
    cost: { value: 16 },
    restrictions: [
      { factions: ['Rebel Alliance', 'Scum and Villainy'] },
      { chassis: ['hwk290lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'outrider',
    sides: [
      {
        title: { en: 'Outrider', es: 'Jinete del Espacio' },
        type: 'Title',
        ability: {
          en:
            'While you perform an obstructed attack, the defender rolls 1 fewer defense die. After you fully execute a maneuver, if you moved through or overlapped an obstacle, you may remove 1 of your red or orange tokens.',
          de:
            'Solange du einen versperrten Angriff durchführst, wirft der Verteidiger 1 Verteidigungswürfel weniger. Nachdem du ein Manöver vollständig ausgeführt hast, falls du dich durch ein Hindernis hindurchbewegt oder dich mit ihm überschnitten hast, darfst du 1 deiner roten oder orangefarbenen Marker entfernen.',
          es:
            'Mientras efectúas un ataque que está obstruido, el defensor tira 1 dado de defensa menos. Después de que ejecutes completamente una maniobra, si te has movido a través de un obstáculo o te has solapado con uno, puedes retirar 1 de tus fichas de color rojo o naranja.',
          fr:
            'Tant que vous effectuez une attaque qui est gênée, le défenseur lance 1 dé de défense en moins. Après avoir entièrement exécuté une manœuvre, si vous avez traversé ou chevauché un obstacle, vous pouvez retirer 1 de vos marqueurs rouges ou orange.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_105.jpg',
        ffg: 329,
      },
    ],
    cost: { value: 14 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['yt2400lightfreighter'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'phantom',
    sides: [
      {
        title: { en: 'Phantom', es: 'Fantasma' },
        type: 'Title',
        ability: {
          en: 'You can dock at range 0-1.',
          de: 'Du kannst in Reichweite 0-1 andocken.',
          es: 'Puedes acoplarte a alcance 0-1.',
          fr: 'Vous pouvez vous arrimer à portée 0-1.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_106.jpg',
        ffg: 330,
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['attackshuttle', 'sheathipedeclassshuttle'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'punishingone',
    sides: [
      {
        title: {
          en: 'Punishing One',
          de: 'Vollstrecker Eins',
          es: 'Castigadora',
        },
        type: 'Title',
        ability: {
          en:
            'While you perform a primary attack, if the defender is in your [Front Arc], roll 1 additional attack die. Remove [Crew] slot. Add [Astromech] slot.',
          de:
            'Solange du einen Primärangriff durchführst, falls der Verteidiger in deinem [Front Arc] ist, wirf 1 zusätzlichen Angriffswürfel. Entferne den [Crew]-Slot. Füge den [Astromech]-Slot hinzu.',
          es:
            'Mientas efectúas un ataque principal, si el defensor está situado en tu [Front Arc], tira 1 dado de ataque adicional. Elimínate el espacio [Crew]. Añádete el espacio [Astromech].',
          fr:
            "Tant que vous effectuez une attaque principale, si le défenseur est dans votre [Front Arc], lancez 1 dé d'attaque supplémentaire. Retirez un emplacement [Crew]. Ajoutez un emplacement [Astromech].",
        },
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: -1 },
          { slot: 'Astromech', value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_152.jpg',
        ffg: 377,
      },
    ],
    cost: { value: 5 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['jumpmaster5000'] },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'st321',
    sides: [
      {
        title: { en: 'ST-321' },
        type: 'Title',
        ability: {
          en:
            'After you perform a [Coordinate] action, you may choose an enemy ship at range 0-3 of the ship you coordinated. If you do, acquire a lock on that enemy ship, ignoring range restrictions.',
          de:
            'Nachdem du eine [Coordinate]-Aktion durchgeführt hast, darfst du ein feindliches Schiff in Reichweite 0-3 des von dir koordinierten Schiffes wählen. Falls du das tust, erfasse jenes feindliche Schiff als Ziel, wobei du die Reichweitenbeschränkung ignorierst.',
          es:
            'Después de que realices una acción [Coordinate], puedes elegir una nave enemiga que esté situada a alcance 0-3 de la nave que has coordinado. Si lo haces, obtienes un Blanco fijado sobre esa nave enemiga, ignorando las restricciones por alcance.',
          fr:
            'Après avoir effectué une action [Coordinate], vous pouvez choisir un vaisseau ennemi à portée 0-3 du vaisseau coordonné. Dans ce cas, verrouillez ce vaisseau ennemi, en ignorant toute restriction de portée.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_124.jpg',
        ffg: 391,
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['lambdaclasst4ashuttle'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'shadowcaster',
    sides: [
      {
        title: { en: 'Shadow Caster', es: 'Sombra Alargada' },
        type: 'Title',
        ability: {
          en:
            'After you perform an attack that hits, if the defender is in your [Single Turret Arc] and your [Front Arc], the defender gains 1 tractor token.',
          de:
            'Nachdem du einen Angriff durchgeführt hast, der getroffen hat, falls der Verteidiger in deinem [Single Turret Arc] und in deinem [Front Arc] ist, erhält der Verteidiger 1 Fangstrahlmarker.',
          es:
            'Después de que efectúes un ataque que impacte, si el defensor está situado en tu [Single Turret Arc] y tu [Front Arc], el defensor recibe 1 ficha de Campo de tracción.',
          fr:
            'Après avoir effectué une attaque qui touche, si le défenseur est dans votre [Single Turret Arc] et votre [Front Arc], il gagne 1 marqueur de rayon tracteur.',
        },
        slots: ['Title'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_153.jpg',
        ffg: 378,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['lancerclasspursuitcraft'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'slavei',
    sides: [
      {
        title: { en: 'Slave I', de: 'Sklave I', es: 'Esclavo I' },
        type: 'Title',
        ability: {
          en:
            'After you reveal a turn ([Turn Left] or [Turn Right]) or bank ([Bank Left] or [Bank Right]) maneuver, you may set your dial to the maneuver of the same speed and bearing in the other direction. Add [Torpedo] slot.',
          de:
            'Nachdem du ein Wende­­manöver ([Turn Left] oder [Turn Right]) oder Drehmanöver ([Bank Left] oder [Bank Right]) aufgedeckt hast, darfst du dein Rad auf das Manöver derselben Geschwindigkeit und Flugrichtung in der anderen Orientierung einstellen. Füge den [Torpedo]-Slot hinzu.',
          es:
            'Después de que reveles una maniobra de giro ([Turn Left] o [Turn Right]) o de inclinación ([Bank Left] o [Bank Right]), puedes establecer en tu selector la maniobra con la misma velocidad y dirección que la actual y el sentido opuesto. Añádete un espacio [Torpedo].',
          fr:
            "Après avoir révélé une manœuvre de virage ([Turn Left] or [Turn Right]) ou de virage sur l'aile ([Bank Left] or [Bank Right]), vous pouvez régler votre cadran sur la manœuvre de même vitesse mais de direction opposée. Ajoutez un emplacement [Torpedo].",
        },
        slots: ['Title'],
        grants: [{ slot: 'Torpedo', value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_154.jpg',
        ffg: 379,
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'virago',
    sides: [
      {
        title: { en: 'Virago' },
        type: 'Title',
        ability: {
          en:
            'During the End Phase, you may spend 1 [Charge] to perform a red [Boost] action. Add [Modification] slot.',
          de:
            'Während der Endphase darfst du 1 [Charge] ausgeben, um eine rote [Boost]-Aktion durchzuführen. Füge den [Modification]-Slot hinzu.',
          es:
            'Durante la fase Final, puedes gastar 1 [Charge] para realizar 1 acción [Boost] roja. Añádete el espacio [Modification].',
          fr:
            'Pendant la phase de dénouement, vous pouvez dépenser 1 [Charge] pour effectuer une action [Boost] rouge. Ajoutez un emplacement [Modification].',
        },
        slots: ['Title'],
        charges: { value: 2, recovers: 0 },
        grants: [
          { slot: 'Modification', value: 1 },
          { stat: 'shields', value: 1 },
        ],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_155.jpg',
        ffg: 380,
      },
    ],
    cost: { value: 7 },
    restrictions: [{ chassis: ['starviperclassattackplatform'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'reysmillenniumfalcon',
    sides: [
      {
        title: {
          en: "Rey's Millennium Falcon",
          de: 'Reys Millennium Falke',
          es: 'Halcón Milenario de Rey',
        },
        type: 'Title',
        ability: {
          en:
            "If you have 2 or fewer stress tokens, you can execute red Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuvers and perform [Boost] and [Rotate Arc] actions even while stressed.",
          de:
            "Falls du 2 oder weniger Stressmarker hast, kannst du rote Segnor-Looping-Manöver ([Segnor's Loop Left] oder [Segnor's Loop Right]) ausführen und [Boost]- und [Rotate Arc]-Aktionen durchführen, auch solange du gestresst bist.",
          es:
            "Si tienes 2 o menos fichas de Tensión, puedes ejecutar maniobras de giro de Segnor ([Segnor's Loop Left] o [Segnor's Loop Right]) rojas y realizar acciones [Boost] y [Rotate Arc] incluso aunque estés bajo tensión.",
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/905ee2a41b7d3b6d1f76294b4cd3e99e.jpg',
        slots: ['Title'],
        ffg: 485,
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Resistance'] },
      { chassis: ['scavengedyt1300'] },
    ],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'soullessone',
    sides: [
      {
        title: { en: 'Soulless One', de: 'Seelenlose', es: 'Desalmado' },
        type: 'Title',
        ability: {
          en:
            'While you defend, if the attacker is outside your firing arc, you may reroll 1 defense die.',
          de:
            'Solange du verteidigst, falls der Angreifer außerhalb deines Feuerwinkels ist, darfst du 1 Verteidigungswürfel neu werfen.',
          es:
            'Mientras te defiendes, si el atacante está situado fuera de tu arco de fuego, puedes volver a tirar 1 dado de defensa.',
          fr:
            "Tant que vous défendez, si l'attaquant est hors de votre arc de tir, vous pouvez relancer 1 dé de défense.",
        },
        slots: ['Title'],
        grants: [{ stat: 'hull', value: 2 }],
        ffg: 533,
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['belbullab22starfighter'] },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'scimitar',
    sides: [
      {
        title: { en: 'Scimitar', es: 'Cimitarra' },
        type: 'Title',
        ability: {
          en:
            'Setup: After the Place Forces step, you may cloak. After you decloak, you may choose an enemy ship in your [Bullseye Arc]. If you do, it gains 1 jam token.',
          de:
            'Aufbau: Nach dem Schritt „Streitkräfte platzieren" darfst du dich tarnen. Nachdem du dich enttarnt hast, darfst du ein feindliches Schiff in deinem [Bullseye Arc] wählen. Falls du das tust, erhält es 1 Störsignalmarker.',
          es:
            'Preparación: Después del paso de "Desplegar las fuerzas", puedes camuflarte. Después de que desactives el camuflaje, puedes elegir una nave enemiga situada en tu [Bullseye Arc]. Si lo haces, esa nave recibe 1 ficha de Interferencia.',
          fr:
            "Mise en Place : après l'étape « Placer les forces », vous pouvez vous occulter. Après vous être désocculté, vous pouvez choisir un vaisseau ennemi dans votre [Bullseye Arc]. Dans ce cas, il gagne 1 marqueur de brouillage.",
        },
        slots: ['Title'],
        grants: [
          { action: { type: 'Cloak', difficulty: 'Red' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        ffg: 542,
      },
    ],
    restrictions: [
      { factions: ['Separatist Alliance'] },
      { chassis: ['sithinfiltrator'] },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'assailer',
    sides: [
      {
        title: { en: 'Assailer', de: 'Sturmbringer' },
        type: 'Title',
        ability: {
          en:
            'Add [Gunner] slot. While you defend, if the attack range is 1, you may roll 1 additional defense die.',
          de:
            'Füge den [Gunner]-\nSlot hinzu. Solange du verteidigst, falls die Angriffs-reichweite 1 ist, darfst du 1 zusätzlichen Verteidi-gungs würfel werfen.',
          es:
            'Añádete el espacio [Gunner]. Mientras te defiendes, si el alcance de ataque es 1, puedes tirar 1 dado de defensa adicional.',
          fr:
            "Ajoutez un emplacement [Gunner]. Tant que vous défendez, si la portée d'attaque est 1, vous pouvez lancer 1 dé de défense supplémentaire.",
        },
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
        ],
        slots: ['Title'],
        ffg: 769,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 7 },
  },
  {
    limited: 1,
    xws: 'bloodcrow',
    sides: [
      {
        title: { en: 'Blood Crow', es: 'Cuervo de Sangre' },
        type: 'Title',
        ability: {
          en:
            'Add [Gunner] slot. While you perform an attack at attack range 1-2, you may add 1 [Focus] result.',
          de:
            'Füge den [Gunner]-\nSlot hinzu. Solange du einen Angriff in Angriffsreichweite 1-2 durchführst, darfst du 1 [Focus]-Ergebnis hinzufügen.',
          es:
            'SangreAñádete el espacio [Gunner]. Mientras efectúas un ataque a alcance de ataque 1-2, puedes añadir 1 resultado [Focus].',
          fr:
            "Ajoutez un emplacement [Gunner]. Tant que vous effectuez une attaque à portée d'attaque 1-2, vous pouvez ajouter 1 résultat [Focus].",
        },
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        slots: ['Title'],
        ffg: 773,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'brighthope',
    sides: [
      {
        title: { en: 'Bright Hope' },
        type: 'Title',
        ability: {
          en:
            'You can reinforce only your [Full Front Arc]. While you defend, if you are reinforced and the attacker is in your [Full Front Arc], you may roll 1 additional defense die.',
          de:
            'Du kannst nur deinen [Full Front Arc] verstärken. Solange du verteidigst, falls du verstärkt bist und der Angreifer in deinem [Full Front Arc] ist, darfst du 1 zusätzlichen Verteidigungs würfel werfen.',
          es:
            'Sólo puedes reforzar tu [Full Front Arc]. Mientras te defiendes, si estás reforzado y el atacante está en tu [Full Front Arc], puedes tirar 1 dado de defensa adicional.',
          fr:
            "Vous ne pouvez renforcer que votre [Full Front Arc]. Tant que vous défendez, si vous êtes renforcé et que l'attaquant est dans votre [Full Front Arc], vous pouvez lancer 1 dé de défense supplémentaire.",
        },
        slots: ['Title'],
        ffg: 766,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'dodonnaspride',
    sides: [
      {
        title: {
          en: "Dodonna's Pride",
          de: 'Dodonnas Stolz',
          es: 'Orgullo de Dodonna',
        },
        type: 'Title',
        slots: ['Title'],
        ability: {
          en: 'Add and slots.',
          de: 'Füge -und -Slots hinzu.',
          es: 'Añádete los espacios y .',
          fr: 'Ajoutez un emplacement et un emplacement .',
        },
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'shields', value: -2 },
          {
            action: {
              type: 'Evade',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        ffg: 761,
      },
    ],
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'impetuous',
    sides: [
      {
        title: { en: 'Impetuous', de: 'Ungestüm', es: 'Impetuoso' },
        type: 'Title',
        ability: {
          en:
            'Add [Crew] slot. After you perform an attack, if the defender was destroyed, you may perform a [Focus] or [Lock] action.',
          de:
            'Füge den [Crew]-Slot hinzu. Nachdem du einen Angriff durchgeführt hast, falls der Verteidiger zerstört worden ist, darfst du eine [Focus] - oder [Lock] -Aktion durchführen.',
          es:
            'Añádete el espacio [Crew]. Después de que efectúes un ataque, si el defensor ha sido destruido, puedes realizar una acción [Focus] o [Lock].',
          fr:
            'Ajoutez un emplacement [Crew]. Après que vous avez effectué une attaque, si le défenseur a été détruit, vous pouvez effectuer une action [Focus] or [Lock].',
        },
        grants: [
          { slot: 'Crew', value: 1 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 2 },
        ],
        slots: ['Title'],
        ffg: 771,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'instigator',
    sides: [
      {
        title: { en: 'Instigator', es: 'Instigador' },
        type: 'Title',
        ability: {
          en:
            'Add slot. While you perform an attack, if the defender has an orange or red token, you may reroll up to 2 attack dice.',
          de:
            'Füge den -Slot hinzu. Solange du einen Angriff durchführst, falls der Verteidiger einen orange-farbenen oder roten Marker hat, darfst du bis zu 2 Angriffswürfel neu werfen.',
          es:
            'Añádete el espacio . Mientras efectúas un ataque, si el defensor tiene alguna ficha naranja o roja, puedes volver a tirar hasta 2 dados de ataque.',
          fr:
            "Ajoutez un emplacement . Tant que vous effectuez une attaque, si le défenseur a un marqueur orange ou rouge, vous pouvez relancer jusqu'à 2 dés d'attaque.",
        },
        grants: [{ slot: 'Team', value: 1 }],
        slots: ['Title'],
        ffg: 772,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'corvus',
    sides: [
      {
        title: { en: 'Corvus' },
        type: 'Title',
        ability: {
          en:
            'You can dock up to 2 small ships. After you perform a [Calculate] action, gain 1 calculate token.',
          de:
            'CorvusDu kannst bis zu 2 kleine Schiffe andocken. Nachdem du eine [Calculate] -Aktion durchgeführt hast, erhältst du 1 Berechnungsmarker.',
          es:
            'Puedes acoplar contigo hasta 2 naves pequeñas. Después de que realices una acción [Calculate] , recibes 1 ficha de Cálculos.',
          fr:
            "Vous pouvez arrimer jusqu'à 2 petits vaisseaux. Après avoir effectué une action [Calculate], gagnez 1 marqueur de calcul.",
        },
        slots: ['Title'],
        ffg: 770,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['raiderclasscorvette'] },
    ],
    cost: { value: 3 },
  },
  {
    limited: 1,
    xws: 'insatiableworrt',
    sides: [
      {
        title: {
          en: 'Insatiable Worrt',
          de: 'Gefräßiger Worrt',
          es: 'Worrt Insaciable',
        },
        type: 'Title',
        ability: {
          en:
            'Add slot. During the End Phase, you may recover 1 additional shield or 1 additional .',
          de:
            'Füge den -Slot hinzu. Während der Endphase darfst du 1 zusätzlichen additional schilde oder wiederherstellen.',
          es:
            'Añádete el espacio . Durante la fase Final, puedes recupera 1 escudo or adicional.',
          fr:
            'Ajoutez un emplacement . Pendant la phase de dénouement, vous pouvez récupérer 1 bouclier ou 2 supplémentaire.',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Cargo', value: 1 },
          { stat: 'hull', value: 3 },
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: -1 },
        ],
        ffg: 779,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 7 },
  },
  {
    limited: 1,
    xws: 'liberator',
    sides: [
      {
        title: { en: 'Liberator', es: 'Libertador' },
        type: 'Title',
        ability: {
          en:
            'You can dock up to 2 small ships. After a ship deploys from you, it may perform a [Focus] or [Barrel Roll] action.',
          de:
            'Du kannst bis zu 2 kleine Schiffe andocken. Nachdem ein Schiff von dir abgesetzt worden ist, darf es eine [Focus] - oder [Barrel Roll] -Aktion durchführen.',
          es:
            'Puedes acoplar contigo hasta 2 naves pequeñas. Después de que una nave se despliegue desde la tuya, esa nave puede realizar una acción [Focus] o [Barrel Roll].',
          fr:
            "Vous pouvez arrimer jusqu'à 2 petits vaisseaux. Après qu'un vaisseau s'est déployé depuis vous, il peut effectuer une action [Focus] ou [Barrel Roll].",
        },
        slots: ['Title'],
        grants: [{ stat: 'energy', value: 1 }],
        ffg: 763,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 5 },
  },
  {
    limited: 1,
    xws: 'luminous',
    sides: [
      {
        title: { en: 'Luminous', es: 'Luminoso' },
        type: 'Title',
        ability: {
          en:
            'Setup: You are placed in reserve. At the end of setup, you are placed in the play area at range 0-2 of a friendly ship.',
          de:
            'Aufbau: Beginne in der Reserve. Am Ende des Aufbaus wirst du auf der Spielfläche in Reichweite 0-2 eines befreundeten Schiffes platziert.',
          es:
            'Preparación: Empiezas en reserva. Al final de la preparación, colócate a alcance 0-2 de una nave aliada.',
          fr:
            "Mise en Place : débutez en réserve. À la fin de la Mise en place, placez-vous dans la zone de jeu à portée 0-2 d'un vaisseau allié.",
        },
        slots: ['Title'],
        grants: [
          { stat: 'shields', value: -1 },
          { stat: 'energy', value: 2 },
        ],
        ffg: 767,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 12 },
  },
  {
    limited: 1,
    xws: 'merchantone',
    sides: [
      {
        title: { en: 'Merchant One', de: 'Händler Eins', es: 'Mercader Uno' },
        type: 'Title',
        ability: {
          en:
            'Add [Turret], , and slots. Bonus Attack: Perform a [Turret] attack.',
          de:
            'Füge [Turret]-, -, und -Slots hinzu. Bonusangriff: Führe einen [Turret]-Angriff durch.',
          es:
            'Añádete los espacios [Turret], , y . Ataque adicional: Efectúa un ataque [Turret].',
          fr:
            'Ajoutez un emplacement [Turret], un emplacement , et un emplacement . Attaque Bonus : effectuez une attaque [Turret].',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Turret', value: 1 },
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        ffg: 778,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'brokenhorn',
    sides: [
      {
        title: { en: 'Broken Horn' },
        type: 'Title',
        ability: {
          en:
            'Add [Crew] and [Illicit] slots. If you are damaged, reduce the difficulty of your speed 3-5 maneuvers.',
          de:
            'Füge [Crew]- und [Illicit]-Slots hinzu. Falls du beschädigt bist, verringere die Schwierigkeit deiner Manöver mit Geschwindigkeit 3-5.',
          es:
            'Añádete los espacios [Crew] y [Illicit]. Si estás dañado, reduce la dificultad de tus maniobras de velocidad 3-5.',
          fr:
            'Ajoutez un emplacement [Crew] et un emplacement [Illicit]. Si vous êtes endommagé, diminuez la difficulté de vos manoeuvres ayant une vitesse 3-5.',
        },
        slots: ['Title'],
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Illicit', value: 1 },
        ],
        ffg: 777,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Scum and Villainy'] },
      { chassis: ['croccruiser'] },
    ],
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'quantumstorm',
    sides: [
      {
        title: { en: 'Quantum Storm', es: 'Tormenta Cuántica' },
        type: 'Title',
        ability: {
          en:
            'Add and slots. After you fully execute a white maneuver, recover 1 .',
          de:
            'Füge - und -Slots hinzu. Nachdem du ein weißes Manöver voll - ständig ausgeführt hast, stelle 1 wieder her.',
          es:
            'Añádete los espacios y . Después de que ejecutes completamente una maniobra blanca, recuperas 1 .',
          fr:
            'Ajoutez un emplacement et un emplacement . Après avoir entièrement exécuté une manoeuvre blanche, récupérez 1 .',
        },
        grants: [
          { slot: 'Team', value: 1 },
          { slot: 'Cargo', value: 1 },
          { stat: 'energy', value: 1 },
        ],
        slots: ['Title'],
        ffg: 768,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['gr75mediumtransport'] },
    ],
    cost: { value: 3 },
  },
  {
    limited: 1,
    xws: 'suppressor',
    sides: [
      {
        title: { en: 'Suppressor', es: 'Supresor' },
        type: 'Title',
        ability: {
          en:
            'Add [Sensor] slot. After you coordinate a friendly ship, you may spend 1 to jam an enemy ship at range 0-2 of that ship, ignoring range restrictions.',
          de:
            'Füge den [Sensor]-Slot hinzu. Nachdem du ein befreundetes Schiff koordiniert hast, darfst du 1 ausgeben, um einem feindlichen Schiff in Reichweite 0-2 jenes Schiffes ein Störsignal zu senden, wobei du Reich weiten-beschränkungen ignorierst.',
          es:
            'Añádete el espacio [Sensor]. Después de que coordines una nave aliada, puedes gastar 1 para interferir una nave enemiga que esté situada a alcance 0-2 de esa nave aliada, ignorando las restricciones de alcance.',
          fr:
            'Ajoutez un emplacement [Sensor]. Après avoir coordonné un vaisseau allié, vous pouvez dépenser 1 pour brouiller un vaisseau ennemi à portée 0-2 de ce vaisseau, en ignorant les restrictions de portée.',
        },
        grants: [{ slot: 'Sensor', value: 1 }],
        slots: ['Title'],
        ffg: 775,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'jainaslight',
    sides: [
      {
        title: { en: "Jaina's Light", de: 'Jainas Licht', es: 'Luz de Jaina' },
        type: 'Title',
        ability: {
          en:
            'While a friendly ship at range 0-2 defends, if the attack is obstructed by an obstacle, you may spend 1 . If you do, the defender rolls 1 additional defense die.',
          de:
            'Solange ein befreundetes Schiff in Reichweite 0-2 verteidigt, falls der Angriff durch ein Hindernis versperrt wird, darfst du 1 ausgeben. Falls du das tust, wirft der Verteidiger 1 zusätzlichen Verteidigungswürfel.',
          es:
            'Mientras una nave aliada que tienes a alcance 0-2 se defiende, si el ataque está obstruido por un obstáculo, puedes gastar 1 . Si lo haces, el defensor tira 1 dado de defensa adicional.',
          fr:
            "Tant qu'un vaisseau allié à portée 0-2 défend, si l'attaque est gênée par un obstacle, vous pouvez dépenser 1 . Dans ce cas, le défenseur lance 1 dé de défense supplémentaire.",
        },
        slots: ['Title'],
        ffg: 762,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'tantiveiv',
    sides: [
      {
        title: { en: 'Tantive IV' },
        type: 'Title',
        ability: {
          en:
            'Add 2 [Crew] slots. While you defend, if the attacker is in your [Rear Arc], you may roll 1 additional defense die.',
          de:
            'Füge 2 [Crew]-Slots hinzu. Solange du verteidigst, falls der Angreifer in deinem[Rear Arc] ist, darfst du 1 zusätzlichen Verteidigungswürfel werfen.',
          es:
            'Añádete 2 espacios [Crew]. Mientras te defiendes, si el atacante está en tu [Rear Arc], puedes tirar 1 dado de defensa adicional.',
          fr:
            "Ajoutez 2 emplacements [Crew]. Tant que vous défendez, si l'attaquant est dans votre [Rear Arc], vous pouvez lancer 1 dé de défense supplémentaire.",
        },
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Crew', value: 1 },
        ],
        slots: ['Title'],
        ffg: 764,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 6 },
  },
  {
    limited: 1,
    xws: 'thunderstrike',
    sides: [
      {
        title: { en: 'Thunderstrike', de: 'Donnerschlag', es: 'Trueno' },
        type: 'Title',
        ability: {
          en:
            'Add [Gunner] slot. While you perform a bonus attack, if you have not attacked the defender this round, you may reroll 1 attack die.',
          de:
            'Füge den [Gunner] -Slot hinzu. Solange du einen Bonusangriff durch führst, falls du den Verteidiger in dieser Runde nicht angegriffen hast, darfst du 1 Angriffs - würfel neu werfen.',
          es:
            'Añádete el espacio [Gunner]. Mientras efectúas un ataque adicional, si no has atacado al defensor en esta ronda, puedes volver a tirar 1 dado de ataque.',
          fr:
            "Ajoutez un emplacement [Gunner]. Tant que vous effectuez une attaque bonus, si vous n'avez pas attaqué le défenseur à ce round, vous pouvez relancer 1 dé d'attaque.",
        },
        grants: [
          { slot: 'Gunner', value: 1 },
          { stat: 'shields', value: -3 },
          { stat: 'hull', value: 3 },
        ],
        slots: ['Title'],
        ffg: 765,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Rebel Alliance'] },
      { chassis: ['cr90corelliancorvette'] },
    ],
    cost: { value: 4 },
  },
  {
    limited: 1,
    xws: 'vector',
    sides: [
      {
        title: { en: 'Vector' },
        type: 'Title',
        ability: {
          en:
            'Add [Crew] and slots. After a ship deploys from you, it may perform a [Evade] or [Boost] action.',
          de:
            'Füge [Crew]- und -Slots hinzu. Nachdem ein Schiff von dir abgesetzt worden ist, darf es eine [Evade]- oder [Boost]-Aktion durchführen.',
          es:
            'Añádete los espacios [Crew] y . Después de que una nave se despliegue desde la tuya, esa nave puede realizar una acción [Evade] o [Boost].',
          fr:
            "Ajoutez un emplacement [Crew] et un emplacement . Après qu'un vaisseau s'est déployé depuis vous, il peut effectuer une action [Evade] ou [Boost].",
        },
        grants: [
          { slot: 'Crew', value: 1 },
          { slot: 'Cargo', value: 1 },
        ],
        slots: ['Title'],
        ffg: 776,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 8 },
  },
  {
    limited: 1,
    xws: 'requiem',
    sides: [
      {
        title: { en: 'Requiem', es: 'Réquiem' },
        type: 'Title',
        ability: {
          en:
            'After a ship deploys from you, it may acquire a lock on one ship you are locking, ignoring range restrictions.',
          de:
            'Nachdem ein Schiff von dir abgesetzt worden ist, darf es ein Schiff, das du als Ziel erfasst hast, als Ziel erfassen, wobei es Reichweitenbeschränkungen ignoriert.',
          es:
            'Después de que una nave se despliegue desde la tuya, esa nave puede obtener un Blanco fijado sobre una nave que tengas fijada como blanco, ignorando las restricciones de alcance.',
          fr:
            "Après qu'un vaisseau s'est déployé depuis vous, il peut verrouiller un vaisseau que vous verrouillez déjà, en ignorant les restrictions de portée.",
        },
        slots: ['Title'],
        ffg: 774,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [
      { factions: ['Galactic Empire'] },
      { chassis: ['gozanticlasscruiser'] },
    ],
    cost: { value: 7 },
  },
  {
    limited: 1,
    xws: 'kazsfireball',
    sides: [
      {
        title: {
          en: "Kaz's Fireball",
          de: "Kaz' Fireball",
          fr: 'Fireball de Kaz',
          es: 'Bola de Fuego de Kaz',
        },
        type: 'Title',
        ability: {
          en:
            'Setup: When you resolve Explosion with Wings, you may search the damage deck and choose a damage card with the Ship trait; you are dealt that card instead. Then, shuffle the damage deck. You can perform actions on damage cards even while ionized.',
          de:
            'Aufbau: Sobald du Explosion mit Flügeln abhandelst, darfst du den Schadensstapel durchsuchen und eine Schadenskarte mit dem Merkmal Schiff wählen; dir wird stattdessen jene Karte zugeteilt. Dann mische den Schadensstapel. Du kannst Aktionen auf Schadenskarten durchführen, auch solange du ionisiert bist.',
          es:
            'Preparación: Cuendo resuelvas Explosion con alas, puedes buscar en el mazo de Daño y elegir una carta de Daño con el atributo Nave; esa será la carta que se te inflija. Luego, vuelve a barajar el mazo de Daño. Eres capaz de realizar acciones que figuren en cartas de Daño incluso aunque estés ionizado.',
          fr:
            'Mise en Place : lorsque vous résolvez Explosion en Vol, vous pouvez chercher et choisir dans le paquet de dégâts une carte de dégât avec le trait Vaisseau ; cette carte vous est attribuée à la place. Puis mélangez le paquet de dégâts. Vous pouvez effectuer des actions des cartes de dégât, même si vous êtes ionisé.',
        },
        slots: ['Title'],
        ffg: 655,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }, { chassis: ['fireball'] }],
    cost: { value: 2 },
  },
  {
    limited: 1,
    xws: 'slavei-swz82',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            "While you perform a [Front Arc] attack, if you are in the defender's full rear arc, you may change 1 [Hit] result to a [Critical Hit] result. Add [Gunner] slot.",
          de:
            'Solange du einen [Front Arc]-Angriff durchführst, falls du im des Verteidigers bist, darfst du 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis zu ändern. Füge den [Gunner]-Slot hinzu.',
          es:
            'Mientras efectúas un ataque [Front Arc] , si estás situado en el del defensor, puedes cambiar 1 resultado [Hit] por un resultado [Critical Hit]. Añádete un espacio [Gunner].',
          fr:
            'Tant que vous effectuez une attaque [Front Arc], si vous êtes dans le du défenseur, vous pouvez changer 1 résultat [Hit] en un résultat [Critical Hit]. Ajoutez un emplacement [Gunner].',
        },
        title: { en: 'Slave I', de: 'Sklave I', es: 'Esclavo I' },
        grants: [{ slot: 'Gunner', value: 1 }],
        type: 'Title',
        slots: ['Title'],
        ffg: 869,
      },
    ],
    restrictions: [
      { factions: ['Scum and Villainy', 'Separatist Alliance'] },
      { chassis: ['firesprayclasspatrolcraft'] },
    ],
    cost: { value: 3 },
  },
];

export default t;

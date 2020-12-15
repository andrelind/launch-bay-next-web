import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'M3-A Interceptor',
    de: 'M3-A-Abfangjäger',
    fr: 'Intercepteur M3-A',
    es: 'Interceptor M3-A',
  },
  xws: 'm3ainterceptor',
  ffg: 44,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FB',
    '3NW',
    '3KR',
    '4FW',
    '5FW',
    '5KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: {
      en: 'Weapon Hardpoint',
      de: 'Waffenaufhängung',
      fr: "Emplacement d'Arme",
      es: 'Emplazamiento para armas',
      it: 'Innesto Armato',
      pl: 'Punkt podczepienia',
      pt: 'Encaixe de Arma',
      zh: 'Weapon Hardpoint',
    },
    text: {
      en: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      de:
        'Du kannst 1 [Cannon]-, [Torpedo]- oder [Missile]-Aufwertung ausrüsten.',
      fr:
        'vous pouvez vous équiper de 1 amélioration [Cannon], [Torpedo] ou [Missile].',
      es: 'Puedes equiparte con una mejora [Cannon], [Torpedo] o [Missile].',
      it: 'Puoi dotarti di 1 miglioria [Cannon], [Torpedo] o [Missile].',
      pl:
        'Możesz się wyposażyć w 1 rozwinięcie [Cannon], [Torpedo] albo [Missile].',
      pt: 'Você consegue equipar 1 melhoria [Cannon], [Torpedo], ou [Missile].',
      zh: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
    },
    slotOptions: ['Cannon', 'Torpedo', 'Missile'],
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Scyk.png',
  pilots: [
    {
      name: {
        en: 'Cartel Spacer',
        de: 'Raumfahrer des Kartells',
        fr: 'Astropilote du Cartel',
        es: 'Agente del Cártel',
      },
      initiative: 1,
      limited: 0,
      cost: 25,
      xws: 'cartelspacer',
      text: {
        en:
          'MandalMotors\' M3-A "Scyk" Interceptor is purchased in large quantities by the Hutt Cartel and the Car\'das smugglers due to its low cost and customizability.',
        de:
          'Der M3-A-„Scyk"-Abfangjäger von MandalMotors wurde in großer Stückzahl vom Hutt-Kartell und den Car\'das-Schmugglern angeschafft. Grund dafür waren der günstige Einstiegspreis und die vielen Ausstattungsoptionen des Jägers.',
        fr:
          "L'Intercepteur « Scyk » M3-A de MandalMotors est acheté en grande quantité par le Cartel Hutt et les contrebandiers Car'das en raison de son prix bas et de ses nombreuses possibilités de personnalisation.",
        es:
          'El Cártel Hutt y los contrabandistas Car\'das compran un gran número de interceptores M3-A "Scyk" de Motores Mandal debido a su bajo coste y alto grado de personalización.',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_190.jpg',
      ffg: 190,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Genesis Red' },
      caption: {
        en: 'Tansarii Point Crime Lord',
        de: 'Verbrecherboss von Tansarii Point',
        fr: 'Seigneur du Crime de Tansarii Point',
        es: 'Señor del crimen de Punto Tansarii',
      },
      initiative: 4,
      limited: 1,
      cost: 31,
      xws: 'genesisred',
      ability: {
        en:
          'After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.',
        de:
          'Nachdem du ein Ziel erfasst hast, musst du alle deine Fokus- und Ausweichmarker entfernen. Dann erhalte dieselbe Anzahl an Fokus- und Ausweichmarkern, die das erfasste Schiff hat.',
        fr:
          "Après avoir verrouillé une cible, vous devez retirer tous vos marqueurs de concentration et d'évasion. Puis, gagnez autant de marqueurs de concentration et d'évasion qu'a le vaisseau verrouillé.",
        es:
          'Después de que obtengas un Blanco fijado, debes retirar todas tus fichas de Concentración y Evasión. Luego, recibes la misma cantidad de fichas de Concentración y Evasión que posee la nave que tienes fijada como blanco.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_184.jpg',
      ffg: 184,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Inaldra' },
      caption: {
        en: 'Tansarii Point Boss',
        de: 'Stationsleiterin von Tansarii Point',
        fr: 'Boss de Tansarii Point',
        es: 'Jefa de Punto Tansarii',
      },
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'inaldra',
      ability: {
        en:
          'While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 [Hit]-Schaden erleiden, um beliebig viele deiner Würfel neu zu werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, vous pouvez subir 1 dégât [Hit] pour relancer n'importe quel nombre de vos dés.",
        es:
          'Mientras te defiendes o efectúas un ataque, puedes sufrir 1 de daño [Hit] para volver a tirar cualquier cantidad de tus dados.',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_187.jpg',
      ffg: 187,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: "Laetin A'shera" },
      caption: {
        en: "Car'das Enforcer",
        de: "Vollstrecker der Car'das-Schmuggler",
        fr: "Exécuteur de Car'das",
        es: "Sicario de los Car'das",
      },
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'laetinashera',
      ability: {
        en:
          'After you defend or perform an attack, if the attack missed, gain 1 evade token.',
        de:
          'Nachdem du verteidigt oder einen Angriff durchgeführt hast, falls der Angriff verfehlt hat, erhalte 1 Ausweichmarker.',
        fr:
          "Après avoir défendu ou effectué une attaque, si l'attaque est ratée, gagnez 1 marqueur d'évasion.",
        es:
          'Después de que te defiendas o efectúes un ataque, si el ataque ha fallado, recibes 1 ficha de Evasión.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_185.jpg',
      ffg: 185,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Quinn Jast' },
      caption: {
        en: 'Fortune Seeker',
        de: 'Glücksritter',
        fr: 'Chercheur de Fortune',
        es: 'Buscador de fortuna',
      },
      initiative: 3,
      limited: 1,
      cost: 31,
      xws: 'quinnjast',
      ability: {
        en:
          'At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Entwaffnet-Marker erhalten, um 1 [Charge] von 1 deiner ausgerüsteten Aufwertungen wiederherzustellen.',
        fr:
          "Au début de la phase d'engagement, vous pouvez gagner 1 marqueur de désarmement pour récupérer 1 [Charge] sur 1 de vos améliorations équipées.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes recibir 1 ficha de Desarme para recuperar 1 [Charge] sobre 1 de tus mejoras equipadas.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_186.jpg',
      ffg: 186,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Serissu' },
      caption: {
        en: 'Flight Instructor',
        de: 'Fluglehrerin',
        fr: 'Instructeur de Vol',
        es: 'Instructora de vuelo',
      },
      initiative: 5,
      limited: 1,
      cost: 40,
      xws: 'serissu',
      ability: {
        en:
          'While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-1 verteidigt, darf es 1 seiner Würfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-1 défend, il peut relancer 1 de ses dés.",
        es:
          'Mientras una nave aliada que tienes a alcance 0-1 se defiende, esa nave puede volver a tirar 1 de sus dados.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_183.jpg',
      ffg: 183,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Sunny Bounder' },
      caption: {
        en: 'Incurable Optimist',
        de: 'Ewige Optimistin',
        fr: 'Optimiste Incurable',
        es: 'Optimista incurable',
      },
      initiative: 1,
      limited: 1,
      cost: 27,
      xws: 'sunnybounder',
      ability: {
        en:
          'While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, nachdem du deine Würfel geworfen oder neu geworfen hast, falls du auf jedem deiner Würfel dasselbe Ergebnis hast, darfst du 1 passendes Ergebnis hinzufügen.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, après avoir lancé ou relancé vos dés, si vous obtenez le même résultat sur chacun de vos dés, vous pouvez ajouter 1 résultat correspondant.',
        es:
          'Mientras te defiendes o efectúas un ataque, después de que tires o vuelvas a tirar tus dados, si tienes el mismo resultado en cada uno de tus dados, puedes añadir 1 resultado igual.',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_188.jpg',
      ffg: 188,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Tansarii Point Veteran',
        de: 'Veteran von Tansarii',
        fr: 'Vétéran de Tansarii Point',
        es: 'Veterano de Punto Tansarii',
      },
      initiative: 3,
      limited: 0,
      cost: 29,
      xws: 'tansariipointveteran',
      text: {
        en:
          "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
        de:
          "Mit dem Abschuss von Talonbane Cobra, einem Spitzenpiloten der Schwarzen Sonne, entschieden die Car'das-Schmuggler die Schlacht um Tansarii Point für sich. Bis heute sind die Veteranen dieses Scharmützels im ganzen Sektor hochangesehen.",
        fr:
          "La défaite de l'as du Soleil Noir, Talonbane Cobra, abattu par des contrebandiers Car'das, changea le cours de la bataille de la station Tansarii Point. Les survivants de cet affrontement sont respectés dans tout le secteur.",
        es:
          "La derrota de Talonbane Cobra, el as del Sol negro, a manos de los contrabandistas Car'das cambió el curso de la batalla de la estación Punto Tansarii. A los supervivientes de ese enfrentamiento se les respeta en todo el sector.",
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_189.jpg',
      ffg: 189,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'G4R-G0R V/M' },
      xws: 'g4rgorvm',
      initiative: 0,
      limited: 1,
      caption: {
        en: 'Tilted Droid',
        de: 'Schräger Droide',
        es: 'Droide desquiciado',
        fr: 'Droïde Tilté',
      },
      hyperspace: true,
      slots: ['Modification'],
      ability: {
        en:
          'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
        de:
          'Nachdem du verteidigt hast, erleidet jedes andere Schiff in Reichweite 0 1 [Critical Hit]-Schaden.',
        es:
          'Después de que te defiendas, toda otra nave que tengas a alcance 0 sufre 1 de daño [Critical Hit].',
        fr:
          'Après que vous avez défendu, chaque autre vaisseau à portée 0 subit 1 dégât [Critical Hit].',
      },
      cost: 28,
      ffg: 636,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/f1d43e799b5f829b40c091a2274e570f.jpg',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
      ],
      epic: false,
    },
  ],
};

export default t;

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/sa Bomber',
    de: 'TIE/sa-Bomber',
    fr: 'Bombardier TIE/sa',
    es: 'Bombardero TIE/sa',
  },
  xws: 'tiesabomber',
  ffg: 19,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '5KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Barrel Roll',
    },
    { difficulty: 'Red', type: 'Reload' },
  ],
  ability: {
    name: {
      en: 'Nimble Bomber',
      de: 'Wendiger Bomber',
      fr: 'Bombardier Agile',
      es: 'Bombardero ágil',
      it: 'Bombardiere Agile',
      pl: 'Zwrotny bombowiec',
      pt: 'Bombardeiro Ágil',
      zh: 'Nimble Bomber',
    },
    text: {
      en:
        'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
      de:
        'Falls du unter Verwendung einer [Straight]-Schablone ein Gerät abwerfen würdest, darfst du stattdessen eine [Bank Left]- oder [Bank Right]-Schablone derselben Geschwindigkeit verwenden.',
      fr:
        'si vous devez utiliser un gabarit [Straight] pour larguer un engin, vous pouvez utiliser un gabarit [Bank Left] ou [Bank Right] de même vitesse à la place.',
      es:
        'Si vas a soltar un dispositivo utilizando una plantilla [Straight], en vez de esa plantilla puedes utilizar una plantilla [Bank Left] o [Bank Right] con la misma velocidad.',
      it:
        'Se stai per sganciare un congegno usando un modello [Straight], puoi invece usare un modello [Bank Left] o [Bank Right] con la stessa velocità.',
      pl:
        'Jeżeli masz zrzucić urządzenie przy pomocy wzornika [Straight], możesz zamiast tego skorzystać z wzornika [Bank Left] albo [Bank Right] o tej samej prędkości.',
      pt:
        'Se for soltar um dispositivo usando um gabarito [Straight], você pode, em vez disso, usar um gabarito[Bank Left] ou [Bank Right] de mesma velocidade.',
      zh:
        'If you would drop a device using a [Straight] template, you may use a [Bank Left] or [Bank Right] template of the same speed instead.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEBomber.png',
  pilots: [
    {
      name: { en: '"Deathfire"', de: '„Todesfeuer"', es: '"Muerte Ígnea"' },
      caption: {
        en: 'Unflinching Diehard',
        de: 'Unverwüstlich und unerschrocken',
        fr: 'Fanatique Inébranlable',
        es: 'Desafiante hasta el final',
      },
      initiative: 2,
      limited: 1,
      cost: 32,
      xws: 'deathfire',
      ability: {
        en:
          'After you are destroyed, before you are removed, you may perform an attack and drop or launch 1 device.',
        de:
          'Nachdem du zerstört worden bist, bevor du entfernt wirst, darfst du einen Angriff durchführen und 1 Gerät abwerfen oder starten.',
        fr:
          'Après avoir été détruit et avant de retirer votre figurine, vous pouvez effectuer une attaque et larguer ou lancer 1 engin.',
        es:
          'Después de que seas destruido, antes de ser retirado de la zona de juego, puedes efectuar un ataque y soltar o lanzar 1 dispositivo.',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_110.jpg',
      ffg: 110,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Captain Jonus', es: 'Capitán Jonus' },
      caption: {
        en: 'Disciplined Instructor',
        de: 'Disziplinierter Ausbilder',
        fr: 'Instructeur Rigoureux',
        es: 'Instructor disciplinado',
      },
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'captainjonus',
      ability: {
        en:
          'While a friendly ship at range 0-1 performs a [Torpedo] or [Missile] attack, that ship may reroll up to 2 attack dice.',
        de:
          'Solange ein befreundetes Schiff in Reichweite 0-1 einen [Torpedo]- oder [Missile]-Angriff durchführt, darf jenes Schiff bis zu 2 Angriffswürfel neu werfen.',
        fr:
          "Tant qu'un vaisseau allié à portée 0-1 effectue une attaque [Torpedo] ou [Missile], il peut relancer jusqu'à 2 dés d'attaque.",
        es:
          'Mientras una nave aliada que tienes a alcance 0−1 efectúa un ataque [Torpedo] o [Missile], esa nave puede volver a tirar hasta 2 dados de ataque.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_108.jpg',
      ffg: 108,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Gamma Squadron Ace',
        de: 'Fliegerass der Gamma-Staffel',
        fr: "As de l'Escadron Gamma",
        es: 'As del Escuadrón Gamma',
      },
      initiative: 3,
      limited: 0,
      cost: 30,
      xws: 'gammasquadronace',
      text: {
        en:
          "Though it sacrifices a degree of speed and maneuverability compared to a TIE/ln, the TIE bomber's increased payload can carry enough firepower to destroy virtually any enemy target.",
        de:
          'Der TIE-Bomber ist zwar nicht so schnell und wendig wie ein TIE/ln, dafür besitzt er genügend Feuerkraft, um praktisch jedes feindliche Ziel auszulöschen.',
        fr:
          "Bien qu'il ne soit pas aussi maniable et rapide qu'un TIE/ln, le Bombardier TIE a une puissance de feu suffisante pour détruire à peu près n'importe quelle cible.",
        es:
          'Aunque no son tan veloces ni maniobrables como el modelo TIE/ln, el compartimento de munición incorporado a los bombarderos TIE les permite acarrear suficiente potencia de fuego para destruir prácticamente cualquier objetivo enemigo.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_111.jpg',
      ffg: 111,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Major Rhymer', es: 'Mayor Rhymer' },
      caption: {
        en: 'Scimitar Leader',
        de: 'Scimitar Eins',
        fr: 'Leader Cimeterre',
        es: 'Jefe Cimitarra',
      },
      initiative: 4,
      limited: 1,
      cost: 37,
      xws: 'majorrhymer',
      ability: {
        en:
          'While you perform a [Torpedo] or [Missile] attack, you may increase or decrease the range requirement by 1, to a limit of 0-3.',
        de:
          'Solange du einen [Torpedo]- oder [Missile]-Angriff durchführst, darfst du die Reichweitenbedingung um 1 erhöhen oder verringern, bis zu einem Limit von 0-3.',
        fr:
          'Tant que vous effectuez une attaque [Torpedo] ou [Missile], vous pouvez augmenter ou réduire de 1 le prérequis de portée, dans une limite de 0-3.',
        es:
          'Mientras efectúas un ataque [Torpedo] o [Missile], puedes incrementar o reducir en 1 el requisito de alcance, hasta un límite de 0−3.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_109.jpg',
      ffg: 109,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Scimitar Squadron Pilot',
        de: 'Pilot der Scimitar-Staffel',
        es: 'Piloto del Escuadrón Cimitarra',
      },
      initiative: 2,
      limited: 0,
      cost: 27,
      xws: 'scimitarsquadronpilot',
      text: {
        en:
          'The TIE/sa is exceptionally nimble for a bomber, allowing it to pinpoint its target while avoiding excessive collateral damage to the surrounding area.',
        de:
          'Der TIE/sa ist außergewöhnlich wendig für einen Bomber und kann sein Ziel mit absoluter Präzision anvisieren, um den Kollateralschaden zu minimieren.',
        fr:
          "Le TIE/sa est particulièrement précis pour un bombardier, lui permettant des frappes ciblées tout en évitant d'infliger des dommages collatéraux excessifs à la zone environnante.",
        es:
          'El TIE/sa es excepcionalmente ágil para tratarse de un bombardero, lo que le permite localizar y destruir un blanco minimizando los daños colaterales en la zona circundante.',
      },
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_112.jpg',
      ffg: 112,
      hyperspace: false,
      epic: true,
    },
    {
      name: { en: 'Tomax Bren' },
      caption: {
        en: 'Brash Maverick',
        de: 'Ungestümer Einzelkämpfer',
        fr: 'Franc-Tireur Impétueux',
        es: 'Inconformista impetuoso',
      },
      initiative: 5,
      limited: 1,
      cost: 35,
      xws: 'tomaxbren',
      ability: {
        en:
          'After you perform a [Reload] action, you may recover 1 [Charge] token on 1 of your equipped [Talent] upgrade cards.',
        de:
          'Nachdem du eine [Reload]-Aktion durchgeführt hast, darfst du 1 [Charge] von 1 deiner ausgerüsteten [Talent]-Aufwertungskarten wiederherstellen.',
        fr:
          "Après avoir effectué une action [Reload], vous pouvez récupérer 1 marqueur [Charge] sur 1 de vos cartes d'amélioration [Talent] équipée.",
        es:
          'Después de que efectúes una acción [Reload], puedes recuperar 1 ficha [Charge] que esté sobre 1 de tus cartas de Mejora [Talent] equipadas.',
      },
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_107.jpg',
      ffg: 107,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: { en: 'TIE Reaper', de: 'TIE-Schnitter', es: 'Segador TIE' },
  xws: 'tiereaper',
  ffg: 43,
  size: 'Medium',
  dial: [
    '0OR',
    '1LR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1PR',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BW',
    '3FB',
    '3NW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: {
      en: 'Adaptive Ailerons',
      fr: 'Ailerons Adaptables',
      es: 'Alerones adaptativos',
      pl: 'Lotki adaptacyjne',
      zh: 'Adaptive Ailerons',
      de: 'Adaptive Querruder',
      it: 'Alettoni ad Assetto Variabile',
      pt: 'Ailerons Adaptáveis',
    },
    text: {
      en:
        'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
      de:
        'Bevor du dein Rad aufdeckst, falls du nicht gestresst bist, musst du ein weißes (1 [Bank Left])-, (1 [Straight])- oder (1 [Bank Right])-Manöver ausführen.',
      fr:
        "avant de révéler votre cadran, si vous n'êtes pas stressé, vous devez exécuter une manœuvre blanche (1 [Bank Left]), (1 [Straight]), ou (1 [Bank Right]).",
      es:
        'Antes de revelar tu selector, si no estás bajo tensión, debes ejecutar una maniobra (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]) blanca.',
      it:
        'Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
      pl:
        'Zanim odsłonisz swoją tarczę manewrów, jeśli nie posiadasz żetonu stresu, musisz wykonać biały manewr (1 [Bank Left]), (1 [Straight]) albo (1 [Bank Right]).',
      pt:
        'Antes de revelarseu disco, se não estiver estressado,você deve executar uma manobra([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
      zh:
        'Before you reveal your dial, if you are not stressed, you must execute a white (1 [Bank Left]), (1 [Straight]), or (1 [Bank Right]) maneuver.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEReaper.png',
  pilots: [
    {
      name: { en: '"Vizier"', de: '„Wesir"', es: '"Visir"' },
      caption: {
        en: 'Ruthless Tactician',
        de: 'Gnadenloser Taktiker',
        fr: 'Tacticien Implacable',
        es: 'Estratega despiadado',
      },
      initiative: 2,
      limited: 1,
      cost: 45,
      xws: 'vizier',
      ability: {
        en:
          'After you fully execute a speed 1 maneuver using your Adaptive Ailerons ship ability, you may perform a [Coordinate] action. If you do, skip your Perform Action step.',
        de:
          'Nachdem du unter Verwendung deiner Schiffsfähigkeit Adaptive Querruder ein Manöver mit Geschwindigkeit 1 vollständig ausgeführt hast, darfst du eine [Coordinate]-Aktion durchführen. Falls du das tust, überspringe deinen Schritt „Aktion durchführen". Adaptive Querruder: Bevor du dein Rad aufdeckst, falls du nicht gestresst bist, musst du ein weißes (1 [Bank Left])-, (1 [Straight])- oder (1 [Bank Right])-Manöver ausführen.',
        fr:
          'Après avoir entièrement exécuté une manœuvre à vitesse 1 en utilisant votre capacité Ailerons Adaptables, vous pouvez effectuer une action [Coordinate]. Dans ce cas, sautez votre étape "Effectuer une action".',
        es:
          'Después de que ejecutes completamente una maniobra de velocidad 1 utilizando la capacidad Alerones adaptativos de tu nave, puedes realizar una acción [Coordinate]. Si lo haces, omite tu paso de "Realizar una acción".',
      },
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_115.jpg',
      ffg: 115,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Captain Feroph',
        fr: 'Capitaine Feroph',
        es: 'Capitán Feroph',
      },
      caption: {
        en: 'Imperial Courier',
        de: 'Imperial Kurier',
        fr: 'Messager Impérial',
        es: 'Mensajero imperial',
      },
      initiative: 3,
      limited: 1,
      cost: 47,
      xws: 'captainferoph',
      ability: {
        en:
          'While you defend, if the attacker does not have any green tokens, you may change 1 of your blank or [Focus] results to an [Evade] result.',
        de:
          'Solange du verteidigst, falls der Angreifer keine grünen Marker hat, darfst du 1 deiner Leerseiten- oder [Focus]-Ergebnisse in ein [Evade]-Ergebnis ändern. Adaptive Querruder: Bevor du dein Rad aufdeckst, falls du nicht gestresst bist, musst du ein weißes (1 [Bank Left])-, (1 [Straight])- oder (1 [Bank Right])-Manöver ausführen.',
        fr:
          "Tant que vous défendez, si l'attaquant n'a aucun marqueur vert, vous pouvez changer 1 de vos résultats Vierge ou [Focus] en un résultat [Evade].",
        es:
          'Mientras te defiendes, si el atacante no tiene ninguna ficha verde, puedes cambiar 1 de tus resultados [Focus] o de cara vacía por un resultado [Evade].',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_114.jpg',
      ffg: 114,
      hyperspace: true,
      epic: true,
    },
    {
      name: { en: 'Major Vermeil' },
      caption: {
        en: 'Veteran of Scarif',
        de: 'Veteran von Scarif',
        fr: 'Vétéran de Scarif',
        es: 'Veterano de Scarif',
      },
      initiative: 4,
      limited: 1,
      cost: 49,
      xws: 'majorvermeil',
      ability: {
        en:
          'While you perform an attack, if the defender does not have any green tokens, you may change 1 of your blank or [Focus] results to a [Hit] result.',
        de:
          'Solange du einen Angriff durchführst, falls der Verteidiger keine grünen Marker hat, darfst du 1 deiner Leerseiten- oder [Focus]-Ergebnisse in ein [Hit]-Ergebnis ändern. Adaptive Querruder: Bevor du dein Rad aufdeckst, falls du nicht gestresst bist, musst du ein weißes (1 [Bank Left])-, (1 [Straight])- oder (1 [Bank Right])-Manöver ausführen.',
        fr:
          "Tant que vous effectuez une attaque, si le défenseur n'a aucun marqueur vert, vous pouvez changer 1 de vos résultats Vierge ou [Focus] en un résultat [Hit].",
        es:
          'Mientras efectúas un ataque, si el defensor no tiene ninguna ficha verde, puedes cambiar 1 de tus resultados [Focus] o de cara vacía por un resultado \n[Hit].',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_113.jpg',
      ffg: 113,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Scarif Base Pilot',
        de: 'Pilot der Scarif-Basis',
        fr: 'Pilote de la Base de Scarif',
        es: 'Piloto de la base de Scarif',
      },
      initiative: 1,
      limited: 0,
      cost: 39,
      xws: 'scarifbasepilot',
      text: {
        en:
          "The TIE reaper was designed to ferry elite troops to flashpoints on the battlefield, notably carrying Director Krennic's dreaded death troopers at the Battle of Scarif.",
        de:
          'Der TIE-Schnitter war für den Transport von Elitetruppen in besonders hart umkämpfte Gefechtszonen konzipiert. Berühmt wurde er in der Schlacht von Scarif, wo er Direktor Krennics gefürchtete Todestruppen transportierte.',
        fr:
          "Le TIE Reaper fut conçu pour déposer des troupes d'élite sur les points chauds des champs de bataille, comme les terrifiants Death Troopers du Directeur Krennic lors de la Bataille de Scarif.",
        es:
          'El Segador TIE fue diseñado para transportar tropas de élite hasta los lugares más cruentos del campo de batalla, tal como hizo con los temidos soldados de la muerte del director Krennic durante la famosa batalla de Scarif.',
      },
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/d3/22/d3220543-7735-44fc-80a8-90507ca363c8/g18x2-scarif-base-pilot-2.png',
          source: 'Season Two 2018',
        },
      ],
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_116.jpg',
      ffg: 116,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE Reaper',
    de: 'TIE-Schnitter',
    fr: 'TIE Reaper',
    it: 'TIE Reaper',
    pl: 'TIE Reaper',
    pt: 'TIE Reaper',
    zh: 'TIE Reaper',
    es: 'Segador TIE',
  },
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
      name: {
        en: '"Vizier"',
        de: '„Wesir"',
        fr: '"Vizier"',
        es: '"Visir"',
        it: '"Vizier"',
        pl: '„Wezyr"',
        pt: '"Vizier"',
        zh: '"Vizier"',
      },
      caption: {
        en: 'Ruthless Tactician',
        de: 'Gnadenloser Taktiker',
        fr: 'Tacticien Implacable',
        es: 'Estratega despiadado',
        it: 'Tattico Spietato',
        pl: 'Bezwzględny taktyk',
        pt: 'Estrategista Inexorável',
        zh: 'Ruthless Tactician',
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
        it:
          'Dopo che hai eseguito completamente una manovra a velocità 1 usando la tua capacità di nave Alettoni ad Assetto Variabile, puoi effettuare 1 azione [Coordinate]. Se lo fai, salta il tuo passo "Effettuare l\'Azione". Alettoni ad Assetto Variabile: Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
        pl:
          'Gdy wykonasz pełny manewr o prędkości 1, korzystając ze zdolności Lotki adaptacyjne, możesz wykonać akcję [Coordinate]. Jeżeli tak zrobisz, pomijasz twój etap wykonywania akcji.',
        pt:
          'Após executar completamente uma manobra de velocidade 1 usando sua habilidade de nave Ailerons Adaptáveis, você pode realizar uma ação [Coordinate]. Se você fizer isso, pule o passo Realizar Ação. Ailerons Adaptáveis: Antes de revelarseu disco, se não estiver estressado,você deve executar uma manobra([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
        zh:
          'After you fully execute a speed 1 maneuver using your Adaptive Ailerons ship ability, you may perform a [Coordinate] action. If you do, skip your Perform Action step.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_115.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/4da69dbae42d3f8b9c69358285ec9732.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/566f90854cbebdb13c0ac305f990f43e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/c3b51d5568cd73c7dc8e17a3a83d15eb.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/89f8b7c0858ace1b9044e570383cd7f2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/5f7b5bbaf8f252bfa85b271c42daeb90.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/883c7284a57376fa8ae26f723ae50be2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_115.png',
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
        de: 'Captain Feroph',
        fr: 'Capitaine Feroph',
        es: 'Capitán Feroph',
        it: 'Capitano Feroph',
        pl: 'Kapitan Feroph',
        pt: 'Capitão Feroph',
        zh: 'Captain Feroph',
      },
      caption: {
        en: 'Imperial Courier',
        de: 'Imperial Kurier',
        fr: 'Messager Impérial',
        es: 'Mensajero imperial',
        it: 'Corriere Imperiale',
        pl: 'Imperialny kurier',
        pt: 'Emissário Imperial',
        zh: 'Imperial Courier',
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
        it:
          "Mentre difendi, se l'attaccante non possiede segnalini verdi, puoi cambiare 1 tuo risultato [Focus]/vuoto in 1 risultato [Evade]. Alettoni ad Assetto Variabile: Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).",
        pl:
          'Gdy się bronisz, a atakujący nie ma zielonych żetonów, możesz zmienić 1 z twoich pustych albo [Focus] wyników na wynik [Evade].',
        pt:
          'Quando defender, se o atacante não tiver fichas verdes, você pode mudar 1 de seus resultados em branco ou [Focus] para um resultado [Evade]. Ailerons Adaptáveis: Antes de revelarseu disco, se não estiver estressado,você deve executar uma manobra([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
        zh:
          'While you defend, if the attacker does not have any green tokens, you may change 1 of your blank or [Focus] results to an [Evade] result.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_114.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/681e43535b623f2c6ba892ab2ad8e602.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/efb0ec377cb99b0f75064301d76acd79.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/131e8486b101f31427e21e90e31d3382.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/46fbfe60f0b1eed61f5ad86a391e5151.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/7a379a65922f7917a49501d558910128.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7d8863541fd730f7cfa7403632b2e35d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_114.png',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_114.jpg',
      ffg: 114,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Major Vermeil',
        de: 'Major Vermeil',
        fr: 'Major Vermeil',
        es: 'Major Vermeil',
        it: 'Maggiore Vermeil',
        pl: 'Major Vermeil',
        pt: 'Major Vermeil',
        zh: 'Major Vermeil',
      },
      caption: {
        en: 'Veteran of Scarif',
        de: 'Veteran von Scarif',
        fr: 'Vétéran de Scarif',
        es: 'Veterano de Scarif',
        it: 'Veterano di Scarif',
        pl: 'Weteran ze Scarif',
        pt: 'Veterano de Scarif',
        zh: 'Veteran of Scarif',
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
        it:
          'Mentre effettui un attacco, se il difensore non possiede segnalini verdi, puoi cambiare 1 tuo risultato [Focus]/vuoto in 1 risultato [Hit]. Alettoni ad Assetto Variabile: Prima di rivelare il tuo indicatore, se non sei in tensione, devi eseguire una manovra bianca (1 [Bank Left]), (1 [Straight]) o (1 [Bank Right]).',
        pl:
          'Gdy wykonujesz atak, a obrońca nie ma zielonych żetonów, możesz zmienić 1 z twoich pustych albo [Focus] wyników na wynik [Hit].',
        pt:
          'Quando realizar um ataque, se o defensor não tiver fichas verdes, você pode mudar 1 de seus resultados em branco ou [Focus] para um resultado [Hit]. Ailerons Adaptáveis: Antes de revelarseu disco, se não estiver estressado,você deve executar uma manobra([Bank Left] 1], ([Straight] 1] ou ([Bank Right] 1] branca.',
        zh:
          'While you perform an attack, if the defender does not have any green tokens, you may change 1 of your blank or [Focus] results to a [Hit] result.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_113.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/eab22205f688b2be0ea63ed2db9a9033.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/ca00c5e3a74ee43df060b9fa54779bcc.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/06a73a39592581ea46a6bceb5bc23a26.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/9b4cb11f888ab7f51f7a8d00c03d6e1a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c7f669105366cd9fa3df3ad6d3d5bd4f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/126f107d86221ef162a9f4448339fb44.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_113.png',
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
        it: 'Pilota della Base di Scarif',
        pl: 'Pilot z bazy na Scarif',
        pt: 'Piloto da Base de Scarif',
        zh: 'Scarif Base Pilot',
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
        it:
          'Il TIE Reaper era concepito per trasportare le truppe scelte nei punti più caldi delle battaglie ed era noto per aver trasportato i temibili assaltatori della morte del Direttore Krennic alla Battaglia di Scarif.',
        pl:
          'TIE Reaper został zaprojektowany do przewożenia elitarnych jednostek w newralgiczne miejsca na polu bitwy. Podczas Bitwy o Scariff z takich maszyn korzystali przerażający szturmowcy śmierci Dyrektora Krennica.',
        pt:
          'A TIE reaper foi desenvolvida para transportar tropas de elite até focos de conflito no campo de batalha, e deslocou notavelmente os temidos death troopers do Diretor Krennic durante a Batalha de Scarif.',
        zh:
          "The TIE reaper was designed to ferry elite troops to flashpoints on the battlefield, notably carrying Director Krennic's dreaded death troopers at the Battle of Scarif.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_116.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/2da41ec69c999f408dc6e02811690a0f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/82927e61b8ed981f75edf84ee2d66610.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/710c78b648cefaea1972ffc57afa24f5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/60792763935bd790f4b2f10d7e28020f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/33f6c1755e427e712b0e073cb6d1a280.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/4f70d8951ccf9e3eaa8becb81127e56a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_116.png',
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

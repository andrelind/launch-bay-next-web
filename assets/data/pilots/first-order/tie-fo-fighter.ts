import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/fo Fighter',
    de: 'TIE/eo-Jäger',
    fr: 'Chasseur TIE/fo',
    it: 'Caccia TIE/fo',
    pl: 'Myśliwiec TIE/fo',
    pt: 'TIE/fo Fighter',
    zh: 'TIE/fo Fighter',
    es: 'Caza TIE/fo',
  },
  xws: 'tiefofighter',
  ffg: 49,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2LR',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'First Order',
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
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEfo.png',
  pilots: [
    {
      name: {
        en: '"Midnight"',
        de: '„Midnight"',
        fr: '"Midnight"',
        es: '"Medianoche"',
        it: '"Midnight"',
        pl: '„Północ"',
        pt: '"Midnight"',
        zh: '"Midnight"',
      },
      caption: {
        en: 'Omega Leader',
        de: 'Omega Eins',
        fr: 'Leader Omega',
        es: 'Jefe Omega',
        it: 'Capo Omega',
        pl: 'Dowódca Omegi',
        pt: 'Omega Leader',
        zh: 'Omega Leader',
      },
      initiative: 6,
      limited: 1,
      cost: 42,
      xws: 'midnight',
      ability: {
        en:
          "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls du das feindliche Schiff als Ziel erfasst hast, können die Würfel jenes Schiffes nicht modifiziert werden.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, si vous avez un verrouillage sur le vaisseau ennemi, les dés de ce vaisseau ennemi ne peuvent pas être modifiés.',
        es:
          'Mientras te defiendes o efectúas un ataque, si tienes a la nave enemiga fijada como blanco, los dados de esa nave no se pueden modificar.',
        it:
          'Mentre difendi o effettui un attacco, se hai acquisito la nave nemica come bersaglio, i dadi di quella nave non possono essere modificati.',
        pl:
          'Gdy się bronisz albo wykonujesz atak i masz namierzenie na statku wroga, z którym prowadzisz starcie, jego kości nie mogą być modyfikowane.',
        pt:
          "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
        zh:
          "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c6a43d25d22d4112dd7e968cab4eb3d5.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      ffg: 397,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Commander Malarus',
        de: 'Commander Malarus',
        fr: 'Commander Malarus',
        es: 'Comandante Malarus',
        it: 'Comandante Malarus',
        pl: 'Komandor Malarus',
        pt: 'Commander Malarus',
        zh: 'Commander Malarus',
      },
      caption: {
        en: 'First Order Enforcer',
        de: 'Vollstreckerin der Ersten Ordnung',
        fr: 'Exécuteur du Premier Ordre',
        es: 'Ejecutora de la Primera Orden',
        it: 'Esecutore del Primo Ordine',
        pl: 'Egzekutor Najwyższego Porządku',
        pt: 'First Order Enforcer',
        zh: 'First Order Enforcer',
      },
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'commandermalarus',
      ability: {
        en:
          'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 [Charge] ausgeben und 1 Stressmarker erhalten. Falls du das tust, darfst du bis zum Ende der Runde, solange du verteidigst oder einen Angriff durchführst, alle deine [Focus]-Ergebnisse in [Evade]- oder [Hit]-Ergebnisse ändern.',
        fr:
          "Au début de la phase d'engagement, vous pouvez dépenser 1 [Charge] et gagner 1 marqueur de stress. Dans ce cas, jusqu'à la fin du round, tant que vous défendez ou effectuez une attaque, vous pouvez changer tous vos résultats [Focus] en résultats [Evade] ou [Hit]",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 [Charge] y recibir 1 ficha de Tensión. Si lo haces, hasta el final de la ronda, mientras te defiendes o efectúas un ataque, puedes cambiar todos tus resultados [Focus] por resultados [Evade] o [Hit].',
        it:
          "All'inizio della Fase di Impegno, puoi spendere 1 [Charge] e ottenere 1 segnalino tensione. Se lo fai, fino alla fine del round, mentre difendi o effettui un attacco, puoi cambiare tutti i tuoi risultati [Focus] in risultati [Evade] o [Hit].",
        pl:
          'Na początku fazy walki możesz wydać 1 [Charge] i otrzymać 1 żeton stresu. Jeżeli tak zrobisz, do końca rundy, gdy będziesz się bronić albo wykonywać atak, będziesz mógł zmieniać wszystkie twoje wyniki [Focus] na wyniki [Evade] albo [Hit].',
        pt:
          'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.',
        zh:
          'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d9cfa6aacc29d55a47aaa0d9f75d362e.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      charges: { value: 2, recovers: 0 },
      ffg: 452,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Scorch"',
        de: '„Scorch"',
        fr: '"Scorch"',
        es: '"Quemadura"',
        it: '"Scorch"',
        pl: '„Wypalacz"',
        pt: '"Scorch"',
        zh: '"Scorch"',
      },
      caption: {
        en: 'Zeta Leader',
        de: 'Zeta Eins',
        fr: 'Leader Zeta',
        es: 'Jefe Zeta',
        it: 'Capo Zeta',
        pl: 'Dowódca Zety',
        pt: 'Zeta Leader',
        zh: 'Zeta Leader',
      },
      initiative: 4,
      limited: 1,
      cost: 33,
      xws: 'scorch',
      ability: {
        en:
          'While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten, um 1 zusätzlichen Angriffswürfel zu werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour lancer 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si no estás bajo tensión, puedes recibir 1 ficha de Tensión para tirar 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco primario, se non sei in tensione, puoi ottenere 1 segnalino tensione per tirare 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy i nie posiadasz żetonu stresu, możesz otrzymać 1 żeton stresu, aby rzucać 1 dodatkową kością ataku.',
        pt:
          'While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.',
        zh:
          'While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/dd225b2dab46b921e622dca6d799591f.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      ffg: 398,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Static"',
        de: '„Static"',
        fr: '"Static"',
        es: '"Estática"',
        it: '"Static"',
        pl: '„Szum"',
        pt: '"Static"',
        zh: '"Static"',
      },
      caption: {
        en: 'Omega Ace',
        de: 'Ass Omega',
        fr: 'As Omega',
        es: 'As Omega',
        it: 'Asso Omega',
        pl: 'As Omegi',
        pt: 'Omega Ace',
        zh: 'Omega Ace',
      },
      initiative: 4,
      limited: 1,
      cost: 33,
      xws: 'static',
      ability: {
        en:
          'While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.',
        de:
          'Solange du einen Primärangriff durchführst, darfst du deine Zielerfassung auf dem Verteidiger und einen Fokusmarker ausgeben, um alle deine Ergebnisse in [Critical Hit]-Ergebnisse zu ändern.',
        fr:
          'Tant que vous effectuez une attaque principale, vous pouvez dépenser votre verrouillage sur le défenseur et un marqueur de concentration pour changer tous vos résultats en résultats [Critical Hit].',
        es:
          'Mientras efectúas un ataque principal, puedes gastar tu Blanco fijado sobre el defensor y una ficha de Concentración para cambiar todos tus resultados por resultados 󲁨.',
        it:
          'Mentre effettui un attacco primario, puoi spendere il tuo bersaglio acquisito sul difensore e 1 segnalino concentrazione per cambiare tutti i tuoi risultati in risultati [Critical Hit].',
        pl:
          'Gdy wykonujesz atak podstawowy, możesz wydać żeton skupienia oraz swoje namierzenie z obrońcy, aby zmienić wszystkie swoje wyniki na [Critical Hit].',
        pt:
          'While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.',
        zh:
          'While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/30e0837d4877df289c220ea0ae174078.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      ffg: 399,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Longshot"',
        de: '„Longshot"',
        fr: '"Longshot"',
        es: '"Tiro Aventurado"',
        it: '"Longshot"',
        pl: '„Ryzykant"',
        pt: '"Longshot"',
        zh: '"Longshot"',
      },
      caption: {
        en: 'Zeta Ace',
        de: 'Ass Zeta',
        fr: 'As Zeta',
        es: 'As Zeta',
        it: 'Asso Zeta',
        pl: 'As Zety',
        pt: 'Zeta Ace',
        zh: 'Zeta Ace',
      },
      initiative: 3,
      limited: 1,
      cost: 31,
      xws: 'longshot',
      ability: {
        en:
          'While you perform a primary attack at attack range 3, roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff in Angriffsreichweite 3 durchführst, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous effectuez une attaque principale à portée d'attaque 3, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal a alcance de ataque 3, tira 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco primario a gittata di attacco 3, tira 1 dado di attacco aggiuntivo',
        pl:
          'Gdy wykonujesz atak podstawowy w zasięgu 3, rzucasz 1 dodatkową kością ataku.',
        pt:
          'While you perform a primary attack at attack range 3, roll 1 additional attack die.',
        zh:
          'While you perform a primary attack at attack range 3, roll 1 additional attack die.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/31ad38b2fc0d39f37ad82e1c70f62135.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      ffg: 400,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Omega Squadron Ace',
        de: 'Fliegerass\nder Omega-Staffel',
        fr: "As de l'Escadron Omega",
        es: 'As del Escuadrón Omega',
        it: 'Asso della\nSquadriglia Omega',
        pl: 'As Eskadry Omega',
        pt: 'Omega Squadron Ace',
        zh: 'Omega Squadron Ace',
      },
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'omegasquadronace',
      text: {
        en:
          'Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.',
        de:
          'Nur die fähigsten und loyalsten Piloten der Ersten Ordnung dienen in den geheimen Staffeln, die im Schatten des Kalten Krieges verdeckte Operationen gegen die Neue Republik durchführen.',
        fr:
          "Seuls les pilotes qui ont fait la démonstration de leur talent et d'un dévouement sans faille peuvent accéder aux postes privilégiés des escadrons du Premier Ordre et mener des missions secrètes contre la Nouvelle République.",
        es:
          'Sólo los pilotos que han demostrado una habilidad excepcional acompañada de una dedicación inquebrantable son recompensados con uno de los prestigiosos puestos en los escuadrones de la Primera Orden que actuaron en secreto contra la Nueva República durante la Guerra Fría.',
        it:
          "Soltanto i piloti che hanno dimostrato un'abilità straordinaria e una dedizione incrollabile vengono ricompensati con un'ambita posizione nelle squadriglie del Primo Ordine, che agiscono in segreto contro la Nuova Repubblica durante la Guerra Fredda",
        pl:
          'Tylko piloci, którzy wykazali się nieprzeciętnymi umiejętnościami i niezłomnym oddaniem, byli awansowani na wysokie stanowiska w eskadrach Najwyższego Porządku prowadzących tajne operacje przeciwko Nowej Republice podczas Zimnej Wojny.',
        pt:
          'Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.',
        zh:
          'Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/4e5010f7b60902288dac36bf646dcde9.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      ffg: 403,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Muse"',
        de: '„Muse"',
        fr: '"Muse"',
        es: '"Musa"',
        it: '"Muse"',
        pl: '„Muza"',
        pt: '"Muse"',
        zh: '"Muse"',
      },
      caption: {
        en: 'Epsilon Leader',
        de: 'Epsilon Eins',
        fr: 'Leader Epsilon',
        es: 'Jefe Épsilon',
        it: 'Capo Epsilon',
        pl: 'Dowódca Epsilonu',
        pt: 'Epsilon Leader',
        zh: 'Epsilon Leader',
      },
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'muse',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
        de:
          'Zu Beginn der Kampfphase darfst du ein befreundetes Schiff in Reichweite 0-1 wählen. Falls du das tust, entfernt jenes Schiff 1 Stressmarker.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir un vaisseau allié à portée 0-1. Dans ce cas, ce vaisseau allié retire 1 marqueur de stress.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir una nave aliada que tengas a alcance 0-1. Si lo haces, esa nave retira 1 ficha de Tensión.',
        it:
          "All'inizio della Fase di Impegno, puoi scegliere 1 nave amica a gittata 0-1. Se lo fai, quella nave rimuove 1 segnalino tensione.",
        pl:
          'Na początku fazy walki możesz wskazać 1 przyjazny statek w zasięgu 0-1. Jeżeli tak zrobisz, wskazany statek usuwa 1 żeton stresu.',
        pt:
          'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
        zh:
          'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d3f8b9baf0bbd8a7d2b785a616dacbcf.jpg',
      slots: ['Talent', 'Modification', 'Tech'],
      ffg: 401,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'TN-3465',
        de: 'TN-3465',
        fr: 'TN-3465',
        es: 'TN-3465',
        it: 'TN-3465',
        pl: 'TN-3465',
        pt: 'TN-3465',
        zh: 'TN-3465',
      },
      caption: {
        en: 'Loose End',
        de: 'Ungelöstes Problem',
        fr: 'Électron Libre',
        es: 'Cabo suelto',
        it: 'Questioni in Sospeso',
        pl: 'Niedokończona sprawa',
        pt: 'Loose End',
        zh: 'Loose End',
      },
      initiative: 2,
      limited: 1,
      cost: 28,
      xws: 'tn3465',
      ability: {
        en:
          "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
        de:
          'Solange ein anderes befreundetes Schiff einen Angriff durchführt, falls du in Reichweite 0-1 des Verteidigers bist, darfst du 1 [Critical Hit]-Schaden erleiden, um 1 der Ergebnisse des Angreifers in ein [Critical Hit]-Ergebnis zu ändern.',
        fr:
          "Tant qu'un autre vaisseau allié effectue une attaque, si vous êtes à portée 0-1 du défenseur, vous pouvez subir 1 dégât [Critical Hit] pour changer 1 des résultats de l'attaquant en un résultat [Critical Hit].",
        es:
          'Mientras otra nave aliada efectúa un ataque, si estás a alcance 0-1 del defensor, puedes sufrir 1 de daño [Critical Hit] para cambiar 1 de los resultados del atacante por un resultado [Critical Hit].',
        it:
          "Mentre un'altra nave amica effettua un attacco, se sei a gittata 0-1 dal difensore, puoi subire 1 danno [Critical Hit] per cambiare 1 risultato dell'attaccante in 1 risultato [Critical Hit].",
        pl:
          'Gdy inny przyjazny statek wykonuje atak, a ty znajdujesz się w zasięgu 0-1 od obrońcy, możesz przyjąć 1 uszkodzenie [Critical Hit], aby zmienić 1 z wyników atakującego na wynik [Critical Hit].',
        pt:
          "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
        zh:
          "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/9fce0e75539a225e9ff1536e466c3c13.jpg',
      slots: ['Modification', 'Tech'],
      ffg: 453,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Zeta Squadron Pilot',
        de: 'Pilot der Zeta-Staffel',
        fr: "Pilote de l'Escadron Zeta",
        es: 'Piloto del Escuadrón Zeta',
        it: 'Pilota della\nSquadriglia Zeta',
        pl: 'Pilot Eskadry Zeta',
        pt: 'Zeta Squadron Pilot',
        zh: 'Zeta Squadron Pilot',
      },
      initiative: 2,
      limited: 0,
      cost: 26,
      xws: 'zetasquadronpilot',
      text: {
        en:
          "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
        de:
          'Frei von den Hürden der galaktischen Bürokratie kann die Erste Ordnung Technologien, die ursprünglich für den imperialen TIE-Turbojäger entwickelt wurden, in Massen produzieren lassen. Das Ergebnis ist der TIE/eo, dessen Piloten eine deutlich höhere Lebenserwartung genießen als ihre Vorgänger zu Zeiten des Imperiums.',
        fr:
          "Libérées des lourdeurs administratives de la bureaucratie galactique, les technologies qui furent développées par l'Empire pour le programme TIE Advanced peuvent désormais être produites en série sur les chasseurs du Premier Ordre. Les taux de survie des pilotes de TIE/fo sont par conséquent plus élevés que ceux de leurs prédécesseurs de l'Empire Galactique.",
        es:
          'Sin las trabas de una engorrosa burocracia galáctica, las tecnologías que fueron investigadas originalmente en el programa de TIE avanzado del Imperio se producen ahora en masa para los cazas estelares de la Primera Orden. Como resultado, los pilotos de TIE/fo disfrutan de unos índices de supervivencia superiores a los de sus predecesores en el Imperio Galáctico.',
        it:
          "Senza il fardello di un'ingombrante burocrazia galattica, le tecnologie sperimentate in origine per il programma dei TIE Advanced dell'Impero vengono ora prodotte in massa per gli astrocaccia del Primo Ordine. Di conseguenza, i piloti dei Caccia TIE/fo beneficiano di un tasso di sopravvivenza più elevato rispetto ai loro predecessori nell'Impero Galattico.",
        pl:
          'Uwolniona z ograniczeń galaktycznej biurokracji technologia opracowana na potrzeby Imperium podczas programu TIE Advanced jest teraz wykorzystywana do masowej produkcji myśliwców Najwyższego Porządku.',
        pt:
          "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
        zh:
          "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/d20d6cc2a052afc783d535c802874d23.jpg',
      slots: ['Modification', 'Tech'],
      ffg: 404,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Epsilon Squadron Cadet',
        de: 'Kadett \nder Epsilon-Staffel',
        fr: "Cadet de l'Escadron Epsilon",
        es: 'Cadete del Escuadrón Épsilon',
        it: 'Cadetto della Squadriglia Epsilon',
        pl: 'Kadet Eskadry Epsilon',
        pt: 'Epsilon Squadron Cadet',
        zh: 'Epsilon Squadron Cadet',
      },
      initiative: 1,
      limited: 0,
      cost: 25,
      xws: 'epsilonsquadroncadet',
      text: {
        en:
          "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
        de:
          'Viele Piloten der Ersten Ordnung werden von Kindesbeinen an auf einem Sternenzerstörer der Resurgent-Klasse ausgebildet und haben noch nie in ihrem Leben einen Fuß auf eine Planetenoberfläche gesetzt.',
        fr:
          "Formés depuis le plus jeune âge au cœur des Star Destroyers de classe Resurgent, de nombreux pilotes de TIE du Premier Ordre n'ont jamais foulé le sol d'une planète..",
        es:
          'Entrenados desde su infancia a bordo de destructores estelares clase Resurgente en pleno espacio profundo, muchos de los pilotos de cazas TIE de la Primera Orden nunca han llegado a pisar la superficie de un planeta.',
        it:
          "Addestrati fin dall'infanzia a bordo degli Star Destroyer Classe Resurgent nello spazio profondo, molti piloti di TIE del Primo Ordine non hanno mai messo piede sulla superficie di un pianeta.",
        pl:
          'Wielu pilotów TIE Najwyższego Porządku było szkolonych od najmłodszych lat na pokładach niszczycieli gwiezdnych klasy Resurgent i nigdy nie stanęli na powierzchni żadnej planety.',
        pt:
          "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
        zh:
          "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/610cb198e4cda75aab0207841c6e4a87.jpg',
      slots: ['Modification', 'Tech'],
      ffg: 405,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Lieutenant Rivas',
        de: 'Lieutenant Rivas',
        fr: 'Lieutenant Rivas',
        es: 'Teniente Rivas',
        it: 'Tenente Rivas',
        pl: 'Porucznik Rivas',
        pt: 'Lieutenant Rivas',
        zh: 'Lieutenant Rivas',
      },
      caption: {
        en: 'Inconvenient Witness',
        de: 'Lästiger Zeuge',
        fr: 'Témoin Gênant',
        es: 'Testigo inconveniente',
        it: 'Testimone Sconveniente',
        pl: 'Niewygodny świadek',
        pt: 'Inconvenient Witness',
        zh: 'Inconvenient Witness',
      },
      initiative: 1,
      limited: 1,
      cost: 27,
      xws: 'lieutenantrivas',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/66f969d008fc995bd940bf1ab647109f.jpg',
      ability: {
        en:
          'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
        de:
          'Nachdem ein Schiff in Reichweite 1-2 einen roten oder orangefarbenen Marker erhalten hat, falls du jenes Schiff nicht als Ziel erfasst hast, darfst du jenes Schiff als Ziel erfassen.',
        fr:
          "Après qu'un vaisseau à portée 1-2 a gagné un marqueur rouge ou orange, si vous n'avez pas de verrouillage sur ce vaisseau, vous pouvez le verrouiller.",
        es:
          'Después de que una nave que tengas a alcance 1-2 reciba una ficha roja o naranja, si no tienes a esa nave fijada como blanco, puedes obtener un Blanco fijado sobre esa nave.',
        it:
          'Dopo che una nave a gittata 1-2 ha ottenuto un segnalino rosso o arancione, se non hai acquisito quella nave come bersaglio, puoi acquisirla come bersaglio.',
        pl:
          'Gdy statek w zasięgu 1-2 otrzymuje czerwony albo pomarańczowy żeton, a ty nie namierzasz tego statku, możesz go namierzyć.',
        pt:
          'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
        zh:
          'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
      },
      slots: ['Modification', 'Tech'],
      ffg: 454,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: '"Null"',
        de: '„Null"',
        fr: '"Null"',
        es: '"Nulo"',
        it: '"Null"',
        pl: '„Pustka"',
        pt: '"Null"',
        zh: '"Null"',
      },
      caption: {
        en: 'Epsilon Ace',
        de: 'Ass Epsilon',
        fr: 'As Epsilon',
        es: 'As Épsilon',
        it: 'Asso Epsilon',
        pl: 'As Epsilonu',
        pt: 'Epsilon Ace',
        zh: 'Epsilon Ace',
      },
      initiative: 0,
      limited: 1,
      cost: 30,
      xws: 'null',
      ability: {
        en: 'While you are not damaged, treat your initiative value as 7.',
        de:
          'Solange du nicht beschädigt bist, behandle deinen Initiativwert, als wäre er 7.',
        fr:
          "Tant que vous n'êtes pas endommagé, considérez que votre valeur d'initiative est 7.",
        es:
          'Mientras no estés dañado, tu valor de Iniciativa se considera que es 7.',
        it:
          'Mentre non sei danneggiato, considera il tuo valore di iniziativa come se fosse pari a 7.',
        pl:
          'Gdy nie masz uszkodzeń, traktuj swoją inicjatywę jak gdyby miała wartość 7.',
        pt: 'While you are not damaged, treat your initiative value as 7.',
        zh: 'While you are not damaged, treat your initiative value as 7.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/eb788d9622d096c6d96c96cf20dc1939.jpg',
      slots: ['Modification', 'Tech'],
      ffg: 402,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;

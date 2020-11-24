import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'HWK-290 Light Freighter',
    de: 'Leichter HWK-290-Frachter',
    fr: 'Cargo léger HWK-290',
    it: 'Mercantile Leggero HWK-290',
    pl: 'Lekki frachtowiec HWK-290',
    pt: 'Cargueiro Leve HWK-290',
    zh: 'HWK-290 Light Freighter',
    es: 'Carguero ligero HWK-290',
  },
  xws: 'hwk290lightfreighter',
  ffg: 34,
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '4FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Rotate Arc' },
      type: 'Lock',
    },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_HWK-290.png',
  pilots: [
    {
      name: {
        en: 'Jan Ors',
        de: 'Jan Ors',
        fr: 'Jan Ors',
        es: 'Jan Ors',
        it: 'Jan Ors',
        pl: 'Jan Ors',
        pt: 'Jan Ors',
        zh: 'Jan Ors',
      },
      caption: {
        en: 'Espionage Expert',
        de: 'Spionageexpertin',
        fr: 'Experte en Espionnage',
        es: 'Experta en espionaje',
        it: 'Esperta di Spionaggio',
        pl: 'Ekspert wywiadu',
        pt: 'Perita em Espionagem',
        zh: 'Espionage Expert',
      },
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'janors',
      ability: {
        en:
          'While a friendly ship in your firing arc performs a primary attack, if you are not stressed, you may gain 1 stress token. If you do, that ship may roll 1 additional attack die.',
        de:
          'Solange ein befreundetes Schiff in deinem Feuerwinkel einen Primärangriff durchführt, falls du nicht gestresst bist, darfst du 1 Stressmarker erhalten. Falls du das tust, darf jenes Schiff 1 zusätzlichen Angriffswürfel werfen.',
        fr:
          "Tant qu'un vaisseau allié situé dans votre arc de tir effectue une attaque principale, si vous n'êtes pas stressé, vous pouvez gagner 1 marqueur de stress. Dans ce cas, ce vaisseau peut lancer 1 dé d'attaque supplémentaire.",
        es:
          'Mientras una nave aliada situada en tu arco de fuego efectúa un ataque principal, si no estás bajo tensión, puedes recibir 1 ficha de Tensión. Si lo haces, esa nave aliada puede tirar 1 dado de ataque adicional.',
        it:
          'Mentre una nave amica nel tuo arco di fuoco effettua un attacco primario, se non sei in tensione, puoi ottenere 1 segnalino tensione. Se lo fai, quella nave può tirare 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy przyjazny statek w twojej strefie rażenia wykonuje atak podstawowy i nie posiadasz żetonu stresu, możesz otrzymać 1 żeton stresu. Jeżeli tak zrobisz, atakujący statek rzuca 1 kością ataku więcej.',
        pt:
          'Quando uma nave amiga emseu arco de tiro realizar um ataque primário, se você não estiver estressado, você tem a opçãode receber 1 ficha de estresse.Se você fizer isso, a nave amiga pode rolar 1 dado de ataque adicional.',
        zh:
          'While a friendly ship in your firing arc performs a primary attack, if you are not stressed, you may gain 1 stress token. If you do, that ship may roll 1 additional attack die.',
      },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_42.jpg',
      ffg: 42,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Kyle Katarn',
        de: 'Kyle Katarn',
        fr: 'Kyle Katarn',
        es: 'Kyle Katarn',
        it: 'Kyle Katarn',
        pl: 'Kyle Katarn',
        pt: 'Kyle Katarn',
        zh: 'Kyle Katarn',
      },
      caption: {
        en: 'Relentless Operative',
        de: 'Unbeugsamer Agent',
        fr: 'Agent Implacable',
        es: 'Operativo incansable',
        it: 'Agente Implacabile',
        pl: 'Niestrudzony agent',
        pt: 'Agente Implacável',
        zh: 'Relentless Operative',
      },
      initiative: 3,
      limited: 1,
      cost: 31,
      xws: 'kylekatarn',
      ability: {
        en:
          'At the start of the Engagement Phase, you may transfer 1 of your focus tokens to a friendly ship in your firing arc.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 deiner Fokusmarker auf ein befreundetes Schiff in deinem Feuerwinkel transferieren.',
        fr:
          "Au début de la phase d'engagement, vous pouvez transférer 1 de vos marqueurs de concentration à un vaisseau allié situé dans votre arc de tir.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes transferir 1 de tus fichas de Concentración a una nave aliada situada en tu arco de fuego.',
        it:
          "All'inizio della Fase di Ingaggio, puoi trasferire 1 tuo segnalino concentrazione su una nave amica nel tuo arco di fuoco.",
        pl:
          'Na początku fazy walki możesz przenieść 1 ze swoich żetonów skupienia na inny przyjazny statek w twojej strefie rażenia.',
        pt:
          'No início da Fase de Engajamento, você pode transferir 1 de suas fichas de foco para uma nave amiga em seu arco de tiro.',
        zh:
          'At the start of the Engagement Phase, you may transfer 1 of your focus tokens to a friendly ship in your firing arc.',
      },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_43.jpg',
      ffg: 43,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Rebel Scout',
        de: 'Rebellen-Aufklärer',
        fr: 'Éclaireur Rebelle',
        es: 'Explorador rebelde',
        it: 'Esploratore Ribelle',
        pl: 'Rebeliancki zwiadowca',
        pt: 'Batedor Rebelde',
        zh: 'Rebel Scout',
      },
      initiative: 2,
      limited: 0,
      cost: 29,
      xws: 'rebelscout',
      text: {
        en:
          'Designed to look like a bird in flight by the Corellian Engineering Corporation, "hawk" series ships are exemplary transport craft. Swift and rugged, the HWK-290 is often employed by Rebel agents as a mobile base of operations.',
        de:
          'Ein Vogel mit ausgebreiteten Schwingen diente der Corellianischen Ingenieursgesellschaft als Vorbild für das Design der „Hawk"-Serie, einer Reihe von erstklassigen Transportschiffen. Der flinke und robuste HWK-290 wird oft von Rebellenagenten als mobile Operationsbasis eingesetzt.',
        fr:
          "Conçue par la Corporation Technique Corellienne et inspirée d'un oiseau en vol, la série « hawk » a produit d'excellents cargos légers. Rapide et résistant, le HWK-290 est souvent utilisé par les agents Rebelles en tant que base mobile d'opérations.",
        es:
          'Diseñadas por la Corporación de Ingeniería Corelliana para que se parecieran a un pájaro en vuelo, las naves de la serie HWK son unos magníficos transportes. La velocidad y robustez del HWK-290 hacen que suela ser empleado por agentes rebeldes como base móvil de operaciones.',
        it:
          "Progettate dalla Corellian Engineering Corporation per assomigliare a un uccello in volo, le navi della serie Hawk sono vascelli da trasporto esemplari. L'HWK-290, rapido e resistente, è spesso usato dagli agenti Ribelli come base operativa mobile.",
        pl:
          'Zaprojektowany na podobieństwo drapieżnego ptaka w locie statek Corellian Engineering Corporation „Jastrząb" to wyjątkowy transportowiec. Szybkie i wytrzymałe HWK-290 często służą rebelianckim agentom jako mobilne bazy.',
        pt:
          'Projetadas pela Corellian Engineering Corporation para se parecerem com pássaros em voo, as naves da série "hawk" são naves de transporte exemplares. Rápidas e robustas, a HWK-290 é comumente empregada por agentes Rebeldes como base de operações móvel.',
        zh:
          'Designed to look like a bird in flight by the Corellian Engineering Corporation, "hawk" series ships are exemplary transport craft. Swift and rugged, the HWK-290 is often employed by Rebel agents as a mobile base of operations.',
      },
      slots: ['Crew', 'Device', 'Modification', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_45.jpg',
      ffg: 45,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Roark Garnet',
        de: 'Roark Garnet',
        fr: 'Roark Garnet',
        es: 'Roark Garnet',
        it: 'Roark Garnet',
        pl: 'Roark Garnet',
        pt: 'Roark Garnet',
        zh: 'Roark Garnet',
      },
      caption: {
        en: 'Good-Hearted Smuggler',
        de: 'Gutherziger Schmuggler',
        fr: 'Contrebandier au Grand Cœur',
        es: 'Contrabandista de buen corazón',
        it: 'Contrabbandiere di Buon Cuore',
        pl: 'Dobroduszny przemytnik',
        pt: 'Contrabandista de Bom Coração',
        zh: 'Good-Hearted Smuggler',
      },
      initiative: 4,
      limited: 1,
      cost: 38,
      xws: 'roarkgarnet',
      ability: {
        en:
          'At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, it engages at initiative 7 instead of its standard initiative value this phase.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Schiff in deinem Feuerwinkel wählen. Falls du das tust, kämpft es in dieser Phase bei Initiative 7 anstatt bei seiner normalen Initiative.',
        fr:
          "Au début de la phase d'engagement, vous pouvez choisir 1 vaisseau situé dans votre arc de tir. Dans ce cas, pendant cette phase, il s'engage à l'initiative 7 au lieu de le faire à sa valeur d'initiative standard.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes elegir 1 nave que esté situada en tu arco de fuego. Si lo haces, en esta fase esa nave interviene con Iniciativa 7 en vez de su valor de Iniciativa normal.',
        it:
          "All'inizio della Fase di Ingaggio, puoi scegliere 1 nave nel tuo arco di fuoco. Se lo fai, quella nave ingaggia a iniziativa 7 invece che al suo valore di iniziativa standard in questa fase.",
        pl:
          'Na początku fazy walki możesz wskazać 1 statek w swojej strefie rażenia. Jeżeli tak zrobisz, wskazany statek walczy w tej fazie z inicjatywą 7 zamiast swojej normalnej inicjatywy.',
        pt:
          'No início da Fase de Engajamento, você pode escolher 1 nave em seu arco de tiro. Se você fizer isso,ela engaja nesta fase utilizandoum valor de iniciativa 7, em vezdo valor de iniciativa normal dela.',
        zh:
          'At the start of the Engagement Phase, you may choose 1 ship in your firing arc. If you do, it engages at initiative 7 instead of its standard initiative value this phase.',
      },
      slots: [
        'Talent',
        'Crew',
        'Device',
        'Modification',
        'Modification',
        'Title',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_44.jpg',
      ffg: 44,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

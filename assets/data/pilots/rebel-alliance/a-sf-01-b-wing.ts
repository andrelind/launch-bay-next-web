import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'A/SF-01 B-wing',
    de: 'A/SF-01-B-Flügler',
    fr: 'B-wing A/SF-01',
    it: 'Ala-B A/SF-01',
    pl: 'A/SF-01 B-wing',
    pt: 'B-wing A/SF-01',
    zh: 'A/SF-01B-wing',
    es: 'A/SF-01 Ala-B',
  },
  xws: 'asf01bwing',
  ffg: 17,
  size: 'Small',
  dial: [
    '1ER',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1RR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2KR',
    '3BR',
    '3FB',
    '3NR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Barrel Roll' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_B-wing.png',
  pilots: [
    {
      name: {
        en: 'Blade Squadron Veteran',
        de: 'Veteran der Klingen-Staffel',
        fr: "Vétéran de l'Escadron Blade",
        es: 'Veterano del Escuadrón Cuchilla',
        it: 'Veterano della Squadriglia Blade',
        pl: 'Weteran Eskadry Ostrzy',
        pt: 'Veterano do Esq. Lâmina',
        zh: 'Blade Squadron Veteran',
      },
      initiative: 3,
      limited: 0,
      cost: 42,
      xws: 'bladesquadronveteran',
      text: {
        en:
          "A unique gyrostabilization system surrounds the B-wing's cockpit, ensuring that the pilot always remains stationary during flight.",
        de:
          'Das Cockpit des B-Flüglers ist in einen einzigartigen Gyrostabilisator eingebunden, der den Piloten während des gesamten Fluges in aufrechter Position hält.',
        fr:
          'Un système de stabilisation gyroscopique unique enveloppe le cockpit du B-wing et assure la stabilité du pilote.',
        es:
          'El Ala-B dispone de un sistema único de giroestabilización que rota alrededor de la carlinga para mantener al piloto siempre en la misma posición durante el vuelo.',
        it:
          "Uno speciale sistema giroscopico stabilizzante circonda l'abitacolo dell'Ala-B, assicurandosi che il pilota rimanga sempre stazionario durante i combattimenti.",
        pl:
          'Kokpit B-winga umieszczony jest w unikalnym systemie żyrostabilizatorów, dzięki czemu pilot zawsze jest nieruchomy podczas walki.',
        pt:
          'Um sistema de estabilização giroscópica único foi projetado em volta da cabine da B-wing, garantindo que o piloto permaneça estacionário durante o voo.',
        zh:
          "A unique gyrostabilization system surrounds the B-wing's cockpit, ensuring that the pilot always remains stationary during flight.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_25.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/9e471478b8c20023a827005511469705.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8a5517deef99972d5c4ab4b3441ece6f.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5c258d7932531ee06157f5fe40aff18e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/9ff254c0f31078fb0e742e977e3c1f4f.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/9bcf2dd0a9fe632eb7642444803dbbc9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/4bede5e306ad5b89fb0bb406b8990618.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_25.png',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_25.jpg',
      ffg: 25,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Blue Squadron Pilot',
        de: 'Pilot der blauen Staffel',
        fr: "Pilote de l'Escadron Bleu",
        es: 'Piloto del Escuadrón Azul',
        it: 'Pilota della Squadriglia Blu',
        pl: 'Pilot Eskadry Niebieskich',
        pt: 'Piloto do Esq. Azul',
        zh: 'Blue Squadron Pilot',
      },
      initiative: 2,
      limited: 0,
      cost: 41,
      xws: 'bluesquadronpilot',
      text: {
        en:
          "Due to its heavy weapons array and resilient shielding, the B-wing has solidified itself as the Rebel Alliance's most innovative assault fighter.",
        de:
          'Seine schweren Waffensysteme und unverwüstlichen Schilde machen den B-Flügler zu einer der innovativsten Jagdmaschinen der Allianz.',
        fr:
          "Grâce à son impressionnant panel d'armes lourdes et à ses boucliers très résistants, le B-wing s'est imposé comme le plus redoutable chasseur d'assaut de l'Alliance Rebelle.",
        es:
          'Gracias a sus sistemas de armamento pesado y sus resistentes escudos deflectores, el Ala-B se ha consolidado como uno de los cazas de asalto más innovadores de la Alianza Rebelde.',
        it:
          "Grazie al suo arsenale di armi pesanti e alla sua resistente schermatura, l'Ala-B si è consolidato come il caccia d'assalto più innovativo dell'Alleanza Ribelle.",
        pl:
          'Bogaty arsenał uzbrojenia i silne osłony sprawiają, że B-wing jest najnowocześniejszym myśliwcem szturmowym Sojuszu Rebeliantów.',
        pt:
          'Devido ao seu conjunto de armaspesadas e escudo resiliente, a B-wingse consolidou como o caça de assaltomais inovador da Aliança Rebelde.',
        zh:
          "Due to its heavy weapons array and resilient shielding, the B-wing has solidified itself as the Rebel Alliance's most innovative assault fighter.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_26.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/e802c0bcbf78b243a6fd5711dd4a880f.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/fc834bbfc330123dc2f690fa08ad0fbd.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/f6c0c524842fb26f649e152356a1b9d4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/dae7875d489c6a49aee66918156b47a3.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3172ca45f1b59f4ebe0ae1dd2208d208.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/3d1125606971226073062e20733a982a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_26.png',
      },
      slots: [
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/a4/a6/a4a6943b-6af3-4d33-9a04-bff98190d3ee/g18x3-blue-squadron-pilot-2.png',
          source: 'Season Three 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_26.jpg',
      ffg: 26,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Braylen Stramm',
        de: 'Braylen Stramm',
        fr: 'Braylen Stramm',
        es: 'Braylen Stramm',
        it: 'Braylen Stramm',
        pl: 'Braylen Stramm',
        pt: 'Braylen Stramm',
        zh: 'Braylen Stramm',
      },
      caption: {
        en: 'Blade Leader',
        de: 'Klinge Eins',
        fr: 'Leader Blade',
        es: 'Jefe Cuchilla',
        it: 'Capo Blade',
        pl: 'Dowódca Ostrzy',
        pt: 'Líder Lâmina',
        zh: 'Blade Leader',
      },
      initiative: 4,
      limited: 1,
      cost: 52,
      xws: 'braylenstramm',
      ability: {
        en:
          'While you defend or perform an attack, if you are stressed, you may reroll up to 2 of your dice.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls du gestresst bist, darfst du bis zu 2 deiner Würfel neu werfen.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez relancer jusqu'à 2 de vos dés.",
        es:
          'Mientras te defiendes o efectúas un ataque, si estás bajo tensión, puedes volver a tirar hasta 2 de tus dados.',
        it:
          'Mentre difendi o effettui un attacco, se sei in tensione, puoi ripetere il tiro di 2 tuoi dadi.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, jeżeli posiadasz żeton stresu, możesz przerzucić maksymalnie 2 ze swoich kości.',
        pt:
          'Quando defender ou realizar um ataque, se estiver estressado, você tem a opção de rerrolar até 2 de seus dados.',
        zh:
          'While you defend or perform an attack, if you are stressed, you may reroll up to 2 of your dice.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_23.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5e803262ad2ea4813a5e6af7de2af19c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7ff04a0469d8abb6cf04aaefcbb67910.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/0ec966219c9dd082f26c6dc5824a4d75.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/dd872dc52c9e935921332a75fbc69c91.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/534bf2221c8bc348ef31ab9ba7348f5d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/d2fed48bb219b9c28e7c73858d1a5b15.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_23.png',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_23.jpg',
      ffg: 23,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Ten Numb',
        de: 'Ten Numb',
        fr: 'Ten Numb',
        es: 'Ten Numb',
        it: 'Ten Numb',
        pl: 'Ten Numb',
        pt: 'Ten Numb',
        zh: 'Ten Numb',
      },
      caption: {
        en: 'Blue Five',
        de: 'Blau Fünf',
        fr: 'Blue Cinq',
        es: 'Azul Cinco',
        it: 'Blu Cinque',
        pl: 'Niebieski Pięć',
        pt: 'Azul Cinco',
        zh: 'Blue Five',
      },
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'tennumb',
      ability: {
        en:
          'While you defend or perform an attack, you may spend 1 stress token to change all of your [Focus] results to [Evade] or [Hit] results.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, darfst du 1 Stressmarker ausgeben, um alle deine [Focus]-Ergebnisse in [Evade]- oder [Hit]-Ergebnisse zu ändern.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de stress pour changer tous vos résultats [Focus] en résultats [Evade] ou [Hit].',
        es:
          'Mientras te defiendes o efectúas un ataque, puedes gastar 1 ficha de Tensión para cambiar todos tus resultados [Focus] por resultados [Evade] o [Hit].',
        it:
          'Mentre difendi o effettui un attacco, puoi spendere 1 segnalino tensione per cambiare tutti i tuoi risultati [Focus] in risultati [Evade] o [Hit].',
        pl:
          'Gdy się bronisz albo wykonujesz atak, możesz wydać 1 żeton stresu, aby zmienić wszystkie swoje wyniki [Focus] na [Evade] albo [Hit].',
        pt:
          'Quando defender ou realizar um ataque, você pode gastar 1 fichade estresse para mudar todosos seus resultados [Focus] para resultados [Evade] ou [Hit].',
        zh:
          'While you defend or perform an attack, you may spend 1 stress token to change all of your [Focus] results to [Evade] or [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_24.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/3a28c3846eda385b363bf72399319f4a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8a1228a407c291a5da5c0790c67b2f9d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/ba2deb0181f1532eb91bff8f96e1eb27.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/badd8352e412eda725f06a7662566a4b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/3d0e77bb3b4fe74d5d9eb5a192638727.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/e25316119e6bbaa0488608bcb07b2893.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_24.png',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_24.jpg',
      ffg: 24,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Gina Moonsong',
        de: 'Gina Moonsong',
        fr: 'Gina Moonsong',
        es: 'Gina Moonsong',
        it: 'Gina Moonsong',
        pl: 'Gina Moonsong',
        pt: 'Gina Moonsong',
        zh: 'Gina Moonsong',
      },
      caption: {
        en: 'Insubordinate Ace',
        de: 'Ungehorsames Fliegerass',
        fr: 'As Insubordonnée',
        es: 'As insubordinado',
        it: 'Insubordinate Ace',
        pl: 'Insubordinate Ace',
        pt: 'Insubordinate Ace',
        zh: 'Insubordinate Ace',
      },
      initiative: 5,
      limited: 1,
      cost: 50,
      xws: 'ginamoonsong',
      ability: {
        en:
          'At the start of the Engagement Phase, you must transfer 1 of your stress tokens to another friendly ship at range 0-2.',
        de:
          'Zu Beginn der Kampfphase musst du 1 deiner Stress-marker auf ein anderes befreundetes Schiff in Reichweite 0-2 transferie-ren.',
        fr:
          "Au début de la phase d'engagement, vous devez transférer 1 de vos marqueurs de stress à un autre vaisseau allié à portée 0-2.",
        es:
          'Al comienzo de la fase de Enfrentamiento, debes transferir 1 de tus fichas de Tensión a otra nave aliada que tengas a alcance 0-2.',
        it:
          'At the start of the Engagement Phase, you must transfer 1 of your stress tokens to another friendly ship at range 0-2.',
        pl:
          'At the start of the Engagement Phase, you must transfer 1 of your stress tokens to another friendly ship at range 0-2.',
        pt:
          'At the start of the Engagement Phase, you must transfer 1 of your stress tokens to another friendly ship at range 0-2.',
        zh:
          'At the start of the Engagement Phase, you must transfer 1 of your stress tokens to another friendly ship at range 0-2.',
      },
      slots: [
        'Talent',
        'Sensor',
        'Cannon',
        'Cannon',
        'Torpedo',
        'Modification',
        'Configuration',
      ],
      hyperspace: true,
      epic: true,
      ffg: 628,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0fcceeaf64f96b4870146ffbec529dc2.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/546883a9a5550f7b8867a86c9eef571c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/185ac9bc58850dddc41dffeeaa9b8bba.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/e9332d3430de4f8e845f1078c355c248.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0fcceeaf64f96b4870146ffbec529dc2.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0fcceeaf64f96b4870146ffbec529dc2.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0fcceeaf64f96b4870146ffbec529dc2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0fcceeaf64f96b4870146ffbec529dc2.png',
      },
    },
  ],
};

export default t;

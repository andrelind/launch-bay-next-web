import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/in Interceptor',
    de: 'TIE-Abfangjäger',
    fr: 'Intercepteur TIE/in',
    it: 'Intercettore TIE/in',
    pl: 'TIE Interceptor',
    pt: 'TIE Interceptor',
    zh: 'TIE Interceptor',
    es: 'Interceptor TIE/in',
  },
  xws: 'tieininterceptor',
  ffg: 41,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Autothrusters',
      de: 'Automatische Schubdüsen',
      fr: 'Autopropulseurs',
      es: 'Propulsores automatizados',
      it: 'Propulsori Automatici',
      pl: 'Regulator ciągu',
      pt: 'Autopropulsores',
      zh: 'Autothrusters',
    },
    text: {
      en:
        'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      de:
        'Nachdem du eine Aktion durchgeführt hast, darfst du eine rote [Barrel Roll]-Aktion oder eine rote [Boost]-Aktion durchführen.',
      fr:
        'après avoir effectué une action, vous pouvez effectuer une action [Barrel Roll] rouge ou [Boost] rouge.',
      es:
        'Después de que realices una acción, puedes realizar una acción [Barrel Roll] roja o [Boost] roja.',
      it:
        "Dopo che hai effettuato un'azione, puoi effettuare 1 azione [Barrel Roll] o [Boost] rossa.",
      pl:
        'Gdy wykonasz akcję, możesz wykonać czerwoną akcję [Barrel Roll] albo czerwoną akcję [Boost].',
      pt:
        'Após realizaruma ação, você pode realizaruma ação [Barrel Roll] ou [Boost] vermelha.',
      zh:
        'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEInterceptor.png',
  pilots: [
    {
      name: {
        en: 'Alpha Squadron Pilot',
        de: 'Pilot der Alpha-Staffel',
        fr: "Pilote de l'Escadron Alpha",
        es: 'Piloto del Escuadrón Alfa',
        it: 'Pilota dellaSquadriglia Alfa',
        pl: 'Pilot Eskadry Alfa',
        pt: 'Piloto do Esq. Alfa',
        zh: 'Alpha Squadron Pilot',
      },
      initiative: 1,
      limited: 0,
      cost: 31,
      xws: 'alphasquadronpilot',
      text: {
        en:
          'Sienar Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, a dramatic increase in firepower over its predecessors.',
        de:
          'Sienar Flottensysteme konzipierte den TIE-Abfangjäger mit vier Laserkanonen an den Tragflächenspitzen. Dadurch ist er seinen Vorgängermodellen waffentechnisch weit überlegen.',
        fr:
          "Sienar Fleet Systems a doté les ailes de l'intercepteur TIE de quatre canons laser qui lui confèrent une puissance de feu bien supérieure à celle des précédents modèles.",
        es:
          'El diseño de Sistemas de Flota Sienar para el interceptor TIE incluye cuatro cañones láser montados en las alas, con lo que supera ampliamente en potencia de fuego a sus predecesores.',
        it:
          "L'Intercettore TIE, progettato dalla Sienar Fleet Systems, era dotato di quattro cannoni laser montati sulle ali che gli conferivano una potenza di fuoco superiore a quella di tutti i suoi predecessori.",
        pl:
          'Inżynierowie Sienar Fleet Systems zaprojektowali myśliwiec TIE Interceptor z czterema zamontowanymi w skrzydłach działkami laserowymi, dzięki czemu ma znacznie większą siłę ognia od wcześniejszych modeli.',
        pt:
          'A Sienar Fleet Systems projetou a TIE interceptor com quatro canhões lasers em suas asas, um aumento drástico em seu poder de fogo se comparado com seus antecessores.',
        zh:
          'Sienar Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, a dramatic increase in firepower over its predecessors.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_106.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/2fb71fe970eb3807b8f83fed249e3103.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8f57ea54ffa45998b3455c743b592d1e.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/13867c9945cadbdff0962b04a0383289.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/1ef45842848f7341cfa4a723f36b87ce.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/55dd86c33a4e966ededd3b2973fb5cd9.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/a595ab71c92754cc09b46670c202199c.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_106.png',
      },
      slots: ['Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_106.jpg',
      ffg: 106,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Saber Squadron Ace',
        de: 'Fliegerass der Saber-Staffel',
        fr: "As de l'Escadron Sabre",
        es: 'As del Escuadrón Sable',
        it: 'Asso dellaSquadriglia Saber',
        pl: 'As Eskadry Szabli',
        pt: 'Ás do Esq. Sabre',
        zh: 'Saber Squadron Ace',
      },
      initiative: 4,
      limited: 0,
      cost: 36,
      xws: 'sabersquadronace',
      text: {
        en:
          "Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire's best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.",
        de:
          'Angeführt von Baron Soontir Fel, gehören die Piloten der Saber-Staffel zur absoluten Elite des Imperiums. Ihre TIE-Abfangjäger werden mit blutroten Streifen markiert, um Piloten mit mindestens zehn bestätigten Abschüssen zu kennzeichnen.',
        fr:
          "Dirigés par le Baron Fel Soontir, les pilotes de l'escadron Sabre sont parmi les meilleurs de l'Empire. Leurs Intercepteurs TIE sont marqués avec des bandes rouges pour désigner les pilotes ayant au moins dix victoires confirmées.",
        es:
          'Los pilotos del Escuadrón Sable liderado por el barón Soontir Fel se cuentan entre los mejores del Imperio. Sus interceptores TIE están decorados con las franjas rojas que señalan a los pilotos con al menos diez bajas confirmadas en combate.',
        it:
          "I piloti della Squadriglia Saber, guidati dal barone Soontir Fel, sono tra i migliori dell'Impero. I loro Intercettori TIE sono contrassegnati con una striscia rossa, conferita ai piloti che possono vantare almeno dieci abbattimenti confermati.",
        pl:
          'Piloci Eskadry Szabli pod komendą Barona Soontira Fela należą do elity Imperium. Ich myśliwce TIE Interceptor mają czerwone pasy, które oznaczają, że pilot ma co najmniej dziesięć potwierdzonych zestrzeleń.',
        pt:
          'Liderados pelo Barão Soontir Fel, os pilotos do Esquadrão Sabre estão entre os melhores pilotos do Império. Suas TIE interceptors são marcadas com listras vermelhas para identificar pilotos com pelo menos dez abates confirmados.',
        zh:
          "Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire's best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_105.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/2e17a4982bd8e407094a6de3f2e0ec76.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/6c7c5f1e6287fda01e925549e5979eab.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/4018e46afbfac88d6facd039b3979bf5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/bf76b2a78ef10466fe4d04cf0c090f1e.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f39cb59b2ca4e88c8927c4a50f91a908.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/760483ea75a742f192b890e3d07eaead.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_105.png',
      },
      slots: ['Talent', 'Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_105.jpg',
      ffg: 105,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Soontir Fel',
        de: 'Soontir Fel',
        fr: 'Soontir Fel',
        es: 'Soontir Fel',
        it: 'Soontir Fel',
        pl: 'Soontir Fel',
        pt: 'Soontir Fel',
        zh: 'Soontir Fel',
      },
      caption: {
        en: 'Ace of Legend',
        de: 'Legendäres Fliegerass',
        fr: 'As Légendaire',
        es: 'As legendario',
        it: 'Asso Leggendario',
        pl: 'Legendarny as',
        pt: 'Ás Lendário',
        zh: 'Ace of Legend',
      },
      initiative: 6,
      limited: 1,
      cost: 54,
      xws: 'soontirfel',
      ability: {
        en:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain 1 focus token.',
        de:
          'Zu Beginn der Kampfphase, falls ein feindliches Schiff in deinem [Bullseye Arc] ist, erhalte 1 Fokusmarker.',
        fr:
          "Au début de la phase d'engagement, si un vaisseau ennemi est dans votre [Bullseye Arc], gagnez 1 marqueur de concentration.",
        es:
          'Al comienzo de la fase de Enfrentamiento, si hay alguna nave enemiga situada en tu [Bullseye Arc], recibes 1 ficha de Concentración.',
        it:
          "All'inizio della Fase di Ingaggio, se ci sono navi nemiche nel tuo [Bullseye Arc], ottieni 1 segnalino concentrazione.",
        pl:
          'Jeżeli na początku fazy walki w twojej [Bullseye Arc] znajduje się wrogi statek, otrzymujesz 1 żeton skupienia.',
        pt:
          'No início da Fase de Engajamento,se houver uma nave inimiga emseu [Bullseye Arc], receba 1 ficha de foco.',
        zh:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain 1 focus token.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_103.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/4fd7336681eaf13bcae9c70eb6f1c589.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a21a2fed1fe86caf1c3b7013e7a8edd4.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/98efdd5f7150f134d9e8d88136380cca.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/7ee1a2203f7c423d2b3bcb2def056753.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/632b962c2be7aa767f9b68486383aeea.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/0d7ba52f64c83d1dbb966fc96dd8d9c7.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_103.png',
      },
      slots: ['Talent', 'Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_103.jpg',
      ffg: 103,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Turr Phennir',
        de: 'Turr Phennir',
        fr: 'Turr Phennir',
        es: 'Turr Phennir',
        it: 'Turr Phennir',
        pl: 'Turr Phennir',
        pt: 'Turr Phennir',
        zh: 'Turr Phennir',
      },
      caption: {
        en: 'Ambitious Ace',
        de: 'Ambitioniertes Fliegerass',
        fr: 'As Ambitieux',
        es: 'As ambicioso',
        it: 'Asso Ambizioso',
        pl: 'Ambitny as',
        pt: 'Ás Ambicioso',
        zh: 'Ambitious Ace',
      },
      initiative: 4,
      limited: 1,
      cost: 42,
      xws: 'turrphennir',
      ability: {
        en:
          'After you perform an attack, you may perform a [Barrel Roll] or [Boost] action, even if you are stressed.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, darfst du eine [Barrel Roll]- oder [Boost]-Aktion durchführen, auch falls du gestresst bist.',
        fr:
          'Après avoir effectué une attaque, vous pouvez effectuer une action [Barrel Roll] ou [Boost], même si vous êtes stressé.',
        es:
          'Después de que efectúes un ataque, puedes realizar una acción [Barrel Roll] o [Boost], incluso aunque estés bajo tensión.',
        it:
          'Dopo aver effettuato un attacco, puoi effettuare 1 azione [Barrel Roll] o [Boost] anche se sei in tensione.',
        pl:
          'Gdy wykonasz atak, możesz wykonać akcję [Barrel Roll] albo [Boost], nawet jeżeli posiadasz żeton stresu.',
        pt:
          'Após realizar um ataque, você poderealizar uma ação [Barrel Roll] ou [Boost],mesmo se estiver estressado.',
        zh:
          'After you perform an attack, you may perform a [Barrel Roll] or [Boost] action, even if you are stressed.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_104.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/1cd8dfcea5745fd7cb998d0e64128913.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/484f77533608523f3006a168f312e9d2.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/bfc8bcf3f9afc992e831bc91debdb68c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/908c2142fa57787b752d6288541146e3.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/0b0730419ad73c52da7174fdece3446d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/dd8dae1c72ee4ff8494dcfbc8df5255f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_104.png',
      },
      slots: ['Talent', 'Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_104.jpg',
      ffg: 104,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;

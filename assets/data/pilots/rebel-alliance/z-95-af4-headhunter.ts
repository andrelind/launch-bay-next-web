import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Z-95-AF4 Headhunter',
    de: 'Z-95-AF4-Kopfjäger',
    fr: 'Chasseur de Têtes Z-95-AF4',
    it: 'Headhunter Z-95-AF4',
    pl: 'Z-95-AF4 Łowca Głów',
    pt: 'Z-95-AF4 Headhunter',
    zh: 'Z-95-AF4 Headhunter',
    es: 'Z-95-AF4 Cazacabezas',
  },
  xws: 'z95af4headhunter',
  ffg: 38,
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
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Z-95.png',
  pilots: [
    {
      name: {
        en: 'Airen Cracken',
        de: 'Airen Cracken',
        fr: 'Airen Cracken',
        es: 'Airen Cracken',
        it: 'Airen Cracken',
        pl: 'Airen Cracken',
        pt: 'Airen Cracken',
        zh: 'Airen Cracken',
      },
      caption: {
        en: 'Intelligence Chief',
        de: 'Geheimdienstchef',
        fr: 'Chef des Renseignements',
        es: 'Jefe de inteligencia',
        it: 'Capo dei Servizi Segreti',
        pl: 'Szef wywiadu',
        pt: 'Chefe de Inteligência',
        zh: 'Intelligence Chief',
      },
      initiative: 5,
      limited: 1,
      cost: 36,
      xws: 'airencracken',
      ability: {
        en:
          'After you perform an attack, you may choose 1 friendly ship at range 1. That ship may perform an action, treating it as red.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, darfst du 1 befreundetes Schiff in Reichweite 1 wählen. Jenes Schiff darf eine Aktion durchführen, die es als rot behandelt.',
        fr:
          'Après avoir effectué une attaque, vous pouvez choisir 1 vaisseau allié à portée 1. Ce vaisseau peut effectuer une action, en la considérant comme rouge.',
        es:
          'Después de que efectúes un ataque, puedes elegir 1 nave aliada que tengas a alcance 1. Esa nave puede realizar una acción, considerándola de color rojo.',
        it:
          'Dopo che hai effettuato un attacco, puoi scegliere 1 nave amica a gittata 1. Quella nave può effettuare 1 azione, considerandola come se fosse rossa.',
        pl:
          'Gdy wykonasz atak, możesz wskazać 1 przyjazny statek w zasięgu 1. Wskazany statek może wykonać dodatkową akcję, traktując ją, jak gdyby była czerwona.',
        pt:
          'Após realizar um ataque, você pode escolher 1 nave amiga em alcance 1. A nave escolhida pode realizar uma ação, tratando-a como uma ação vermelha.',
        zh:
          'After you perform an attack, you may choose 1 friendly ship at range 1. That ship may perform an action, treating it as red.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_27.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5ea8c825cd513c724c16c460ce1cc5b2.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/b4bed350256a3ec3913d1a77a70d9fe6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/718a8cadf6136b46f346d5b830b9ce34.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/5de954c57f9c27cff69571690043d70b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/5597e668f916acdac9adc461c9c21c3f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/5e97554a3090e450c60bc5766cd19715.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_27.png',
      },
      slots: ['Talent', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_27.jpg',
      ffg: 27,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Bandit Squadron Pilot',
        de: 'Pilot der Banditen-Staffel',
        fr: "Pilote de l'Escadron Bandit",
        es: 'Piloto del Escuadrón Bandido',
        it: 'Pilota della Squadriglia Bandit',
        pl: 'Pilot Eskadry Bandytów',
        pt: 'Piloto do Esq. Bandido',
        zh: 'Bandit Squadron Pilot',
      },
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'banditsquadronpilot',
      text: {
        en:
          "The Z-95 Headhunter was the primary inspiration for Incom Corporation's exemplary T-65 X-wing starfighter. Though it is considered outdated by modern standards, it remains a versatile and potent snub fighter.",
        de:
          'Der Z-95-Kopfjäger ist ein direkter Vorläufer von Incoms Vorzeigemodell, dem T-65-X-Flügler. Obwohl er nach modernen Standards als veraltet gilt, ist er nach wie vor ein vielseitiger und schlagkräftiger Sternjäger.',
        fr:
          "Le Chasseur de Têtes Z-95 a été la principale source d'inspiration d'Incom Corporation pour la conception du X-wing T-65. Bien que considéré comme obsolète, le Chasseur de Têtes Z-95 reste un appareil léger polyvalent et robuste.",
        es:
          'El Z-95 Cazacabezas fue la principal inspiración para el espléndido caza estelar T-65 Ala-X de la Corporación Incom. Aunque el Z-95 se considera anticuado para los estándares modernos, sigue siendo un caza de combate versátil y potente.',
        it:
          "L'Headhunter Z-95 funse da principale ispiratore per l'astrocaccia Ala-X T-65 della Incom Corporation. Anche se considerato datato per i parametri moderni, rimane un caccia monoposto versatile e potente.",
        pl:
          'Z-95 Łowca Głów stanowił główną inspirację dla projektu myśliwca gwiezdnego Incom Corporation X-wing T-65. Choć jest już nieco przestarzały, to jednak wciąż bardzo wszechstronny i skuteczny myśliwiec.',
        pt:
          'A Z-95 Headhunter foi a principal inspiraçãoda Incom Corporation para criar o caça estelar X-wing T-65. Apesar de ser considerada ultrapassada para os padrões modernos, ela continua sendo um caça versátil e potente.',
        zh:
          "The Z-95 Headhunter was the primary inspiration for Incom Corporation's exemplary T-65 X-wing starfighter. Though it is considered outdated by modern standards, it remains a versatile and potent snub fighter.",
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_30.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/fdfa9f18d82f5d4533acf44a8973d658.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a142f581436d85dcda31ca32dec78b19.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/9f68ab4933d9108c56d3af009147d20c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/cb0be3985f29bf6dcf64c3c949ea0e75.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/144723daa36a1884481530b255990a3f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/0d26609d9077b5f00b9968e5d13b7771.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_30.png',
      },
      slots: ['Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_30.jpg',
      ffg: 30,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Lieutenant Blount',
        de: 'Lieutenant Blount',
        fr: 'Lieutenant Blount',
        es: 'Teniente Blount',
        it: 'Tenente Blount',
        pl: 'Porucznik Blount',
        pt: 'Tenente Blount',
        zh: 'Lieutenant Blount',
      },
      caption: {
        en: 'Team Player',
        de: 'Teamspieler',
        fr: 'Coéquipier',
        es: 'Trabajador en equipo',
        it: 'Anima della Squadra',
        pl: 'Gracz zespołowy',
        pt: 'Espírito de Equipe',
        zh: 'Team Player',
      },
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'lieutenantblount',
      ability: {
        en:
          'While you perform a primary attack, if there is at least 1 other friendly ship at range 0-1 of the defender, you may roll 1 additional attack die.',
        de:
          'Solange du einen Primärangriff durchführst, falls mindestens 1 anderes befreundetes Schiff in Reichweite 0-1 des Verteidigers ist, darfst du 1 zusätzlichen Angriffswürfel werfen.',
        fr:
          "Tant que vous effectuez une attaque principale, si au moins 1 autre vaisseau allié est à portée 0-1 du défenseur, vous pouvez lancer 1 dé d'attaque supplémentaire.",
        es:
          'Mientras efectúas un ataque principal, si hay al menos 1 otra nave aliada situada a alcance 0-1 del defensor, puedes tirar 1 dado de ataque adicional.',
        it:
          'Mentre effettui un attacco primario, se ci sono altre navi amiche a gittata 0-1 dal difensore, puoi tirare 1 dado di attacco aggiuntivo.',
        pl:
          'Gdy wykonujesz atak podstawowy i w zasięgu 0-1 od obrońcy znajduje się przynajmniej 1 inny przyjazny statek, możesz rzucić 1 dodatkową kością ataku.',
        pt:
          'Quando realizar um ataque primário,se houver ao menos 1 outra nave amiga em alcance 0-1 de um defensor, você pode rolar 1 dado de ataque adicional.',
        zh:
          'While you perform a primary attack, if there is at least 1 other friendly ship at range 0-1 of the defender, you may roll 1 additional attack die.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_28.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/324df28df39972633cc4dee01d7caa3a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8b4c4a248fe7c3141a155c843dcd5265.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/42d173c066e197923d55a5abccc8c69c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/7e55a79951166c84a60a19e8a920fbae.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/b33399d580bb09a4352ae46d73ddd7b2.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/bb40ccc3b4eada3a08579f2a1ed5e80b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_28.png',
      },
      slots: ['Talent', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_28.jpg',
      ffg: 28,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Tala Squadron Pilot',
        de: 'Pilot der Tala-Staffel',
        fr: "Pilote de l'Escadron Tala",
        es: 'Piloto del Escuadrón Tala',
        it: 'Pilota dellaSquadriglia Tala',
        pl: 'Pilot Eskadry Tala',
        pt: 'Piloto do Esq. Tala',
        zh: 'Tala Squadron Pilot',
      },
      initiative: 2,
      limited: 0,
      cost: 24,
      xws: 'talasquadronpilot',
      text: {
        en:
          'The AF4 series is the latest in a long line of Headhunter designs. Cheap and relatively durable, it is a favorite among independent outfits like the Rebellion.',
        de:
          'Die AF4-Serie ist das jüngste Modell der bewährten Kopfjäger-Produktreihe, die mit ihrem günstigen Preis und ihrer robusten Bauweise zu den Favoriten vieler unabhängiger Organisationen wie der Rebellion gehört.',
        fr:
          "L'AF4 est la toute dernière génération du modèle Chasseur de Têtes. Robuste et bon marché, il est très populaire auprès des organisations indépendantes comme la Rébellion.",
        es:
          'La serie AF4 es la última en una larga serie de diseños de Cazacabezas. Barata y relativamente duradera, es muy apreciada por organizaciones independientes como la Alianza Rebelde.',
        it:
          "La serie AF4 è l'ultima di una lunga linea di modelli Headhunter. Questo caccia economico e relativamente resistente è uno dei veicoli preferiti dalle organizzazioni indipendenti come la Ribellione.",
        pl:
          'AF4 to najnowszy model w długiej serii typu Łowca Głów. Jest tani i stosunkowo wytrzymały, co sprawia, że cieszy się sporą popularnością w niezależnych formacjach, a także w Rebelii.',
        pt:
          'A série AF4 é o modelo mais recentede uma longa lista de projetos Headhunter.Barata e relativamente durável, ela éuma das naves favoritas entre grupos independentes como a Rebelião.',
        zh:
          'The AF4 series is the latest in a long line of Headhunter designs. Cheap and relatively durable, it is a favorite among independent outfits like the Rebellion.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_29.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/70ee8295184d10e83c6ef90ec6cbd73c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8dc7499ee7b897638bfe68878178bc6c.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/28978b9d43082b59c4d223c361f2342f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/f1347c900f94a7b468411e891e6957cb.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/dc920bf99abb7d0e58bcee20dd31358f.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/daf876242f45cfdb757d69462324fef2.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_29.png',
      },
      slots: ['Talent', 'Missile', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_29.jpg',
      ffg: 29,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

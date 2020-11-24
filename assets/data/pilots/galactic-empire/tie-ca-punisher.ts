import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ca Punisher',
    de: 'TIE/ca-Vergelter',
    fr: 'TIE/ca Punisher',
    it: 'TIE/ca Punisher',
    pl: 'TIE/ca Punisher',
    pt: 'TIE/ca Punisher',
    zh: 'TIE/ca Punisher',
    es: 'Castigador TIE/ca',
  },
  xws: 'tiecapunisher',
  ffg: 20,
  size: 'Medium',
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
    '3FW',
    '3NW',
    '3YR',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Lock' },
      type: 'Boost',
    },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEPunisher.png',
  pilots: [
    {
      name: {
        en: '"Deathrain"',
        de: '„Todesregen"',
        fr: '"Deathrain"',
        es: '"Lluvia de Muerte"',
        it: '"Deathrain"',
        pl: '„Deathrain"',
        pt: '"Deathrain"',
        zh: '"Deathrain"',
      },
      caption: {
        en: 'Dexterous Bombardier',
        de: 'Geschickter Bombenschütze',
        fr: 'Bombardier Adroit',
        es: 'Bombardero avezado',
        it: 'Bombardiere Provetto',
        pl: 'Zręczny bombardier',
        pt: 'Bombardeador Treinado',
        zh: 'Dexterous Bombardier',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'deathrain',
      ability: {
        en: 'After you drop or launch a device, you may perform an action.',
        de:
          'Nachdem du ein Gerät abgeworfen oder gestartet hast, darfst du eine Aktion durchführen.',
        fr:
          'Après avoir largué ou lancé un engin, vous pouvez effectuer une action.',
        es:
          'Después de que sueltes o lances un dispositivo, puedes realizar una acción.',
        it:
          'Dopo che hai sganciato o lanciato un congegno, puoi effettuare 1 azione.',
        pl: 'Gdy zrzucisz albo wystrzelisz urządzenie, możesz wykonać akcję.',
        pt: 'Após soltar ou lançarum dispositivo, você poderealizar uma ação.',
        zh: 'After you drop or launch a device, you may perform an action.',
      },
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_140.jpg',
      ffg: 140,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: '"Redline"',
        de: '„Rote Linie"',
        fr: '"Redline"',
        es: '"Velocidad Terminal"',
        it: '"Redline"',
        pl: '„Redline"',
        pt: '"Redline"',
        zh: '"Redline"',
      },
      caption: {
        en: 'Adrenaline Junkie',
        de: 'Adrenalinjunkie',
        fr: "Drogué à l'Adrénaline",
        es: 'Adicto a la adrenalina',
        it: 'Maniaco Adrenalinico',
        pl: 'Uzależniony od adrenaliny',
        pt: 'Viciado em Adrenalina',
        zh: 'Adrenaline Junkie',
      },
      initiative: 5,
      limited: 1,
      cost: 51,
      xws: 'redline',
      ability: {
        en:
          'You can maintain up to 2 locks. After you perform an action, you may acquire a lock.',
        de:
          'Du kannst bis zu 2 Zielerfassungen aufrechterhalten. Nachdem du eine Aktion durchgeführt hast, darfst du ein Ziel erfassen.',
        fr:
          "Vous pouvez maintenir jusqu'à 2 cibles verrouillées. Après avoir effectué une action, vous pouvez verrouiller une cible.",
        es:
          'Puedes mantener hasta 2 Blancos fijados. Después de que realices una acción, puedes obtener un Blanco fijado.',
        it:
          "Puoi mantenere fino a 2 bersagli acquisiti. Dopo che hai effettuato un'azione, puoi acquisire un bersaglio.",
        pl:
          'Możesz utrzymywać maksymalnie 2 namierzenia. Gdy wykonasz akcję, możesz wykonać namierzenie.',
        pt:
          'Você consegue ter até 2 mirastravadas simultaneamente. Após realizar uma ação, vocêpode travar uma mira.',
        zh:
          'You can maintain up to 2 locks. After you perform an action, you may acquire a lock.',
      },
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_139.jpg',
      ffg: 139,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Cutlass Squadron Pilot',
        de: 'Pilot der Entermesser-Staffel',
        fr: "Pilote de l'Escadron Cutlass",
        es: 'Piloto del Escuadrón Alfanje',
        it: 'Pilota dellaSquadriglia Cutlass',
        pl: 'Pilot Eskadry Kordelasów',
        pt: 'Piloto do Esq. Espada',
        zh: 'Cutlass Squadron Pilot',
      },
      initiative: 2,
      limited: 0,
      cost: 35,
      xws: 'cutlasssquadronpilot',
      text: {
        en:
          "The TIE punisher's design builds upon the success of the TIE bomber, adding shielding, a second bomb chute, and three additional ordnance pods, each equipped with a twin ion engine.",
        de:
          'Das Konzept des TIE-Vergelters basiert auf dem erfolgreichen TIE-Bomber und ergänzt ihn um Schilde, einen zweiten Bombenabwurfschacht sowie drei weitere Munitionskapseln, die jeweils mit einem Zwillings-Ionenantrieb ausgerüstet sind.',
        fr:
          "Le TIE Punisher a été conçu après le bombardier TIE, qui connut un grand succès. Il est pourvu de boucliers, d'une seconde trappe de largage et de trois nacelles d'artillerie supplémentaires, toutes équipées de moteurs ioniques jumelés.",
        es:
          'El diseño del Castigador TIE se basa en el éxito del bombardero TIE, incorporando escudos deflectores, un segundo juego de compuertas para lanzar bombas y tres compartimentos de munición adicionales, cada uno de ellos equipado con un motor iónico doble.',
        it:
          'Il progetto del TIE Punisher porta il successo del Bombardiere TIE allo stadio successivo, dotandolo di scudi, di una seconda riserva di bombe e di tre innesti di armamenti aggiuntivi, ognuno dotato di un motore ionico gemello a parte.',
        pl:
          'TIE Punisher powstał na kanwie sukcesu TIE Bombera. Dodano osłony, kolejną rampę bombową oraz trzy dodatkowe gondole, każda z dodatkowym podwójnym silnikiem jonowym.',
        pt:
          'O projeto da TIE punisher se desenvolveu em torno do sucesso da TIE bomber, com a adição de escudo, um segundo lançador de bombas e outros três módulos bélicos, cada um equipado com um motor iônico gêmeo.',
        zh:
          "The TIE punisher's design builds upon the success of the TIE bomber, adding shielding, a second bomb chute, and three additional ordnance pods, each equipped with a twin ion engine.",
      },
      slots: [
        'Sensor',
        'Torpedo',
        'Missile',
        'Missile',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_141.jpg',
      ffg: 141,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

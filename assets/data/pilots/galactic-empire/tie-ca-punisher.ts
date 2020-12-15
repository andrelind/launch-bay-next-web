import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ca Punisher',
    de: 'TIE/ca-Vergelter',
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
      name: { en: '"Deathrain"', de: '„Todesregen"', es: '"Lluvia de Muerte"' },
      caption: {
        en: 'Dexterous Bombardier',
        de: 'Geschickter Bombenschütze',
        fr: 'Bombardier Adroit',
        es: 'Bombardero avezado',
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
      name: { en: '"Redline"', de: '„Rote Linie"', es: '"Velocidad Terminal"' },
      caption: {
        en: 'Adrenaline Junkie',
        de: 'Adrenalinjunkie',
        fr: "Drogué à l'Adrénaline",
        es: 'Adicto a la adrenalina',
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

import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Bomblet Generator',
    limited: 0,
    xws: 'bombletgenerator',
    sides: [
      {
        title: 'Bomblet Generator',
        type: 'Device',
        ability:
          '<strong>Bomb</strong> During the System Phase, you may spend 1 [Charge] to drop a Bomblet with the (1 [Straight]) templete. At the start of the Activation Phase, you may spend 1 shield to recover 2 [Charge].',
        slots: ['Device', 'Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Bomblet',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0-1 rolls 2 attack dice. Each ship suffers 1 [Hit] damage for each [Hit]/[Critical Hit] result.',
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_63.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_63.jpg',
        ffg: 392,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Conner Nets',
    limited: 0,
    xws: 'connernets',
    sides: [
      {
        title: 'Conner Nets',
        type: 'Device',
        ability:
          "<strong>Mine</strong> During the System Phase, you may spend 1 [Charge] to drop a Conner Net using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        slots: ['Device'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Conner Net',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates. When this device detonates, the ship suffers 1 [Hit] damage and gains 3 ion tokens.',
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_64.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_64.jpg',
        ffg: 393,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Proton Bombs',
    limited: 0,
    xws: 'protonbombs',
    sides: [
      {
        title: 'Proton Bombs',
        type: 'Device',
        ability:
          '<strong>Bomb</strong> During the System Phase, you may spend 1 [Charge] to drop a Proton Bomb using the (1 [Straight]) template.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_65.png',
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Proton Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0-1 suffers 1 [Critical Hit] damage.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_65.jpg',
        ffg: 394,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Proximity Mines',
    limited: 0,
    xws: 'proximitymines',
    sides: [
      {
        title: 'Proximity Mines',
        type: 'Device',
        ability:
          "<strong>Mine</strong> During the System Phase, you may spend 1 [Charge] to drop a Proximity Mine using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Proximity Mine',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates.\n\nWhen this device detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit] damage plus 1 [Hit] / [Critical Hit] damage for each matching result.',
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_66.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_66.jpg',
        ffg: 395,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Seismic Charges',
    limited: 0,
    xws: 'seismiccharges',
    sides: [
      {
        title: 'Seismic Charges',
        type: 'Device',
        ability:
          '<strong>Bomb</strong> During the System Phase, you may spend 1 [Charge] to drop a Seismic Charge with the (1 [Straight]) template.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_67.png',
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Seismic Charge',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, choose 1 obstacle at range 0-1. Each ship at range 0-1 of the obstacle suffers 1 [Hit] damage. Then remove that obstacle.',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_67.jpg',
        ffg: 396,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'DRK-1 Probe Droids',
    limited: 1,
    xws: 'drk1probedroids',
    sides: [
      {
        title: 'DRK-1 Probe Droids',
        type: 'Device',
        ability:
          "During the End Phase, you may spend 1 [Charge] to drop or launch 1 DRK-1 probe droid using a speed 3 template. This card's [Charge] cannot be recovered.",
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/44556cd042e536b41e7e89850e13081a.png',
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'DRK-1 Probe Droid',
          type: 'Remote',
          effect:
            'While a friendly ship locks an object or jams an enemy ship, it may measure range from you. After an enemy ship overlaps you, that ship rolls 1 attack die. On a [Focus] result, you suffer 1 [Hit] damage. System Phase: At your initiative, you may relocate using a 2 [Bank Left], 2 [Straight], or 2 [Bank Right] template.',
        },
        ffg: 541,
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Electro-Proton Bomb',
    limited: 1,
    xws: 'electroprotonbomb',
    sides: [
      {
        title: 'Electro-Proton Bomb',
        type: 'Device',
        ability:
          "Bomb During the System Phase, you may spend 1 [Charge] to drop an Electro-Proton Bomb with the (1 [Straight]) template. Then place 1 fuse marker on that device. This card's [Charge] cannot be recovered.",
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/0f76484cc390fc97d1fe2f863d75944b.png',
        slots: ['Device', 'Modification'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Electro-Proton Bomb',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0-2 rolls 4 attack dice. Each ship loses 1 shield for each blank result, gains 1 ion token for each [Focus]/[Hit] result, and gains 1 disarm token for each [Crit] result.',
        },
        ffg: 591,
      },
    ],
    hyperspace: false,
    epic: true,
    restrictions: [{ action: { type: 'Reload' } }],
    cost: { value: 11 },
  },
  {
    name: 'Cluster Mines',
    limited: 0,
    xws: 'clustermines',
    sides: [
      {
        title: 'Cluster Mines',
        type: 'Device',
        charges: { value: 1, recovers: 0 },
        ability:
          "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        slots: ['Device'],
        device: {
          name: 'Cluster Mines',
          type: 'Mine',
          effect:
            'A Cluster Mine Set consists of 3 individual Cluster Mine devices. \n\nWhen a Cluster Mines set is placed, the center Cluster Mine is placed as normal, then two additional Cluster Mines are placed in the recesses as shown. After a ship overlaps or moves through any individual Cluster Mine, it detonates. Other Cluster Mines in the set that were not overlapped or moved through do not detonate.\n\nWhen each of these devices detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit]/[Critical Hit] damage for each matching result.',
        },
        ffg: 648,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c27f0dcda78915239450bedf5b931d86.png',
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 8 },
  },
  {
    name: 'Ion Bombs',
    limited: 0,
    xws: 'ionbombs',
    sides: [
      {
        title: 'Ion Bombs',
        type: 'Device',
        charges: { value: 2, recovers: 0 },
        ability:
          'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
        slots: ['Device'],
        ffg: 649,
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e4c43791c16aea639f2e811c16d1dbcf.png',
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 5 },
  },
];

export default t;

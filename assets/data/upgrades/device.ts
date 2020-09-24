import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'bombletgenerator',
    sides: [
      {
        title: {
          en: 'Bomblet Generator',
          de: 'Streubombengenerator',
          fr: 'Générateur de Sous-Munitions',
          es: 'Generador de minibombas',
          it: 'Generatore di Bombe a Frammentazione',
          pl: 'Wytwornica bomb kasetowych',
          pt: 'Gerador de Bombas Fragmentadas',
          zh: 'Bomblet Generator',
        },
        type: 'Device',
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop a Bomblet with the (1 [Straight]) template. At the start of the Activation Phase, you may spend 1 shield to recover 2 [Charge].',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Streubombe abzuwerfen. Zu Beginn der Aktivierungsphase darfst du 1 Schild ausgeben, um 2 [Charge] wiederherzustellen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Minibomba utilizando la plantilla (1 [Straight]). Al comienzo de la fase de Activación, puedes gastar 1 escudo para recuperar 2 [Charge].',
          fr:
            "Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une sous-munition avec le gabarit (1 [Straight]). Au début de la phase d'activation, vous pouvez dépenser 1 bouclier pour récupérer 2 [Charge].",
          it:
            "Bomba Durante la Fase di Sistema, puoi spendere 1 [Charge] per sganciare 1 bomba a frammentazione usando il modello (1 [Straight]). All'inizio della Fase di Attivazione, puoi spendere 1 scudo per recuperare 2 [Charge].",
          pl:
            'Bomba W fazie systemowej możesz wydać 1 [Charge], aby zrzucić bombę kasetową, korzystając z wzornika (1 [Straight]). Na początku fazy aktywacji możesz wydać 1 osłonę, aby odzyskać 2 [Charge].',
          pt:
            'Bomba Durante a Fase de Sistema,você pode gastar 1 [Charge] para soltar uma Bomba Fragmentada com o gabarito (1 [Straight]). No início da Fase de Ativação, você pode gastar 1 escudopara recuperar 2 [Charge].',
          zh:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop a Bomblet with the (1 [Straight]) template. At the start of the Activation Phase, you may spend 1 shield to recover 2 [Charge].',
        },
        slots: ['Device', 'Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Bomblet',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates. When this device detonates, each ship at range 0-1 rolls 2 attack dice. Each ship suffers 1 [Hit] damage for each [Hit]/[Critical Hit] result.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_63.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/a66af8f1f76acb1f7df1622df69bd609.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_63.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/38a171158644ed85a3a0ecb3c12a36e2.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/6a739beb21479a79c76943397dbaf41b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/9bc91360ee0f1485c4b347424009053d.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/2b1d19149df747bb55c657f4d9764bc7.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_63.png',
        },
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
    limited: 0,
    xws: 'connernets',
    sides: [
      {
        title: {
          en: 'Conner Nets',
          de: 'Connernetz',
          fr: 'Filet Conner',
          es: 'Redes Conner',
          it: 'Reti Conner',
          pl: 'Sieć Connera',
          pt: 'Rede Conner',
          zh: 'Conner Nets',
        },
        type: 'Device',
        ability: {
          en:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Conner Net using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
          de:
            'Mine Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone ein Connernetz abzuwerfen. Die [Charge] dieser Karte kann nicht wiederhergestellt werden.',
          es:
            'Mina Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Red Conner utilizando la plantilla (1 [Straight]). Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Mine Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer un filet Conner en utilisant le gabarit (1 [Straight]). La [Charge] de cette carte ne peut pas être récupérée.',
          it:
            'Mina Durante la Fase di Sistema, puoi spendere 1 [Charge] per sganciare 1 rete conner usando il modello (1 [Straight]). Le [Charge] di questa carta non possono essere recuperate.',
          pl:
            'Mina W fazie systemowej możesz wydać 1 [Charge], aby zrzucić sieć Connera, korzystając z wzornika (1 [Straight]). Nie można odzyskać [Charge] tej karty.',
          pt:
            'Mina Durante a Fase de Sistema, você pode gastar 1 [Charge] para soltar uma Rede Conner com o gabarito (1 [Straight]). A [Charge] dessa carta nãopode ser recuperada.',
          zh:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Conner Net using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        },
        slots: ['Device'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Conner Net',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates. When this device detonates, the ship suffers 1 [Hit] damage and gains 3 ion tokens.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_64.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/9935578f6ab0f4421b7409506b33178b.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_64.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/c374d75f365d1625a55d1ffa56c13308.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/4ada880c05d6dab2e828401b124bf201.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/b5c616405681d6f63a4d299e3c06a6fb.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/f75a0319f4aba9e6a974131925fcf55d.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_64.png',
        },
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
    limited: 0,
    xws: 'protonbombs',
    sides: [
      {
        title: {
          en: 'Proton Bombs',
          de: 'Protonenbomben',
          fr: 'Bombe à Protons',
          es: 'Bombas de protones',
          it: 'Bombe Protoniche',
          pl: 'Bomby protonowe',
          pt: 'Bombas de Prótons',
          zh: '质子榴弹',
        },
        type: 'Device',
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop a Proton Bomb using the (1 [Straight]) template.',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Protonenbombe abzuwerfen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Bomba de protones utilizando la plantilla (1 [Straight]).',
          fr:
            'Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une bombe à protons en utilisant le gabarit (1 [Straight]).',
          it:
            'Bomba Durante la Fase di Sistema, puoi spendere 1 [Charge] per sganciare 1 bomba protonica usando il modello (1 [Straight]).',
          pl:
            'Bomba W fazie systemowej możesz wydać 1 [Charge], aby zrzucić bombę protonową, korzystając z wzornika (1 [Straight]).',
          pt:
            'Bomba Durante a Fase de Sistema, você pode gastar 1 [Charge]para soltar umaBomba de Prótonscom o gabarito (1 [Straight]).',
          zh:
            '炸弹 在系统阶段，你可以花费1[Charge]来投下质子榴弹，使用(1[Straight])移动条。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_65.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/6b9b316963a251093739dc2f34ea4d09.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_65.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/4706fd21d083920820d76eef902a5157.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/031d114d0cc85fa78b909b00a1679778.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/9387d2d85c299d794d6c5fe3abfc8aa7.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/6c0e084ddfb4a63a9e4ac1cab3dcc145.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_65.png',
        },
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
    limited: 0,
    xws: 'proximitymines',
    sides: [
      {
        title: {
          en: 'Proximity Mines',
          de: 'Annäherungsminen',
          fr: 'Mine de Proximité',
          es: 'Minas de proximidad',
          it: 'Mine di Prossimità',
          pl: 'Miny zbliżeniowe',
          pt: 'Minas de Proximidade',
          zh: '感应地雷',
        },
        type: 'Device',
        ability: {
          en:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Proximity Mine using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
          de:
            'Mine Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Annäherungsmine abzuwerfen. Die [Charge] dieser Karte können nicht wiederhergestellt werden.',
          es:
            'Mina Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Mina de proximidad utilizando la plantilla (1 [Straight]). Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Mine Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une mine de proximité en utilisant le gabarit (1 [Straight]). Les [Charge] de cette carte ne peuvent pas être récupérées.',
          it:
            'Mina Durante la Fase di Sistema, puoi spendere 1 [Charge] per sganciare 1 mina di prossimità usando il modello (1 [Straight]). Le [Charge] di questa carta non possono essere recuperate.',
          pl:
            'Mina W fazie systemowej możesz wydać 1 [Charge], aby zrzucić minę zbliżeniową, korzystając z wzornika (1 [Straight]). Nie można odzyskać [Charge] tej karty.',
          pt:
            'Mina Durante a Fase deSistema, você pode gastar1 [Charge] para soltar uma Minade Proximidade como gabarito (1 [Straight]). A [Charge] dessa carta nãopode ser recuperada.',
          zh:
            '地雷 在系统阶段，你可以花费1[Charge]来投下感应地雷，使用(1[Straight])移动条。 本卡的[Charge]不会被恢复。',
        },
        slots: ['Device'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Proximity Mine',
          type: 'Mine',
          effect:
            'After a ship overlaps or moves through this device, it detonates.\n\nWhen this device detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit] damage plus 1 [Hit] / [Critical Hit] damage for each matching result.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_66.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/6595f9f7d7ef766f7076f004fd29452a.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_66.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/250f62efbc7fc320b88b72ea24287cc4.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/a62d1a4e647804c293056f57321476dc.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/78160454a32c93fdbb8486d84c162f1f.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/65695773f7c9ac39028194ba157b8569.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_66.png',
        },
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
    limited: 0,
    xws: 'seismiccharges',
    sides: [
      {
        title: {
          en: 'Seismic Charges',
          de: 'Seismische Bomben',
          fr: 'Charges Sismiques',
          es: 'Cargas sísmicas',
          it: 'Cariche Sismiche',
          pl: 'Ładunki sejsmiczne',
          pt: 'Cargas Sísmicas',
          zh: '震波炸弹',
        },
        type: 'Device',
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop a Seismic Charge with the (1 [Straight]) template.',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Seismische Bombe abzuwerfen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Carga sísmica con la plantilla (1 [Straight]).',
          fr:
            'Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une charge sismique en utilisant le gabarit (1 [Straight]).',
          it:
            'Bomba Durante la Fase di Sistema, puoi spendere 1 [Charge] per sganciare 1 carica sismica usando il modello (1 [Straight]).',
          pl:
            'Bomba W fazie systemowej możesz wydać 1 [Charge], aby zrzucić ładunek sejsmiczny, korzystając z wzornika (1 [Straight]).',
          pt:
            'Bomba Durante a Fase de Sistema, você pode gastar 1 [Charge] para soltar uma Carga Sísmica com o gabarito (1 [Straight]).',
          zh:
            '炸弹 在系统阶段，你可以花费1 [Charge]来投下震波炸弹，使用(1[Straight])移动条。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_67.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/f66c2a3c001ebc3aa0ccb0cfe83cf8e6.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_67.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/000cd90163dc302eea711d87aa0c90f3.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/e04bcab299a10eeb3b3f2d6ea0f9e429.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/197d422fe07c1ac5dee9131dd8c883b9.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/6340bcb4a306697b55afa53f3d60fec0.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_67.png',
        },
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
    limited: 1,
    xws: 'drk1probedroids',
    sides: [
      {
        title: {
          en: 'DRK-1 Probe Droids',
          de: 'DRK-1-Sondendroiden',
          fr: 'Droïdes Sondes DRK-1',
          es: 'Droides sonda DRK-1',
          it: 'Droidi Sonda DRK-1',
          pl: 'Droidy sondujące DRK-1',
          pt: 'DRK-1 Probe Droids',
          zh: 'DRK-1 Probe Droids',
        },
        type: 'Device',
        ability: {
          en:
            "During the End Phase, you may spend 1 [Charge] to drop or launch 1 DRK-1 probe droid using a speed 3 template. This card's [Charge] cannot be recovered.",
          de:
            'Während der Endphase darfst du 1 [Charge] ausgeben, um unter Verwendung einer Schablone mit Geschwindigkeit 3 1 DRK-1-Sondendroiden abzuwerfen oder zu starten. Die [Charge] dieser Karte können nicht wiederhergestellt werden.',
          es:
            'Durante la fase Final, puedes gastar 1 [Charge] para soltar o lanzar 1 droide sonda DRK-1 utilizando una plantilla de velocidad 3. Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Pendant la phase de dénouement, vous pouvez dépenser 1 [Charge] pour larguer ou lancer 1 droïde sonde DRK-1 en utilisant un gabarit de vitesse 3. Les [Charge] de cette carte ne peuvent pas être récupérées.',
          it:
            'Durante la Fase Finale, puoi spendere 1 [Charge] per sganciare o lanciare 1 droide sonda DRK-1 usando un modello a velocità 3. Le [Charge] di questa carta non possono essere recuperate.',
          pl:
            'W fazie końcowej możesz wydać 1 [Charge], aby zrzucić albo wystrzelić 1 droida sondującego DRK-1, korzystając z wzornika dla prędkości 3. Nie można odzyskać [Charge] tej karty.',
          pt:
            "During the End Phase, you may spend 1 [Charge] to drop or launch 1 DRK-1 probe droid using a speed 3 template. This card's [Charge] cannot be recovered.",
          zh:
            "During the End Phase, you may spend 1 [Charge] to drop or launch 1 DRK-1 probe droid using a speed 3 template. This card's [Charge] cannot be recovered.",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/44556cd042e536b41e7e89850e13081a.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/57afbffc34ca9cfddb1e37726fdb1432.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/3fb41ab665d3efa4f5582e08b61a03c4.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/6c499ca2809f13b8ac97cf4185b634ad.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/e882d09a9a33de5af41b1d4a4d05568f.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/4d814d377778374d4c572e749d42edb1.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/44556cd042e536b41e7e89850e13081a.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/44556cd042e536b41e7e89850e13081a.png',
        },
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
    limited: 1,
    xws: 'electroprotonbomb',
    sides: [
      {
        title: {
          en: 'Electro-Proton Bomb',
          de: 'Elektro-Protonen-Bombe',
          fr: 'Bombe Électro-Protonique',
          es: 'Bomba de electroprotones',
          it: 'Bomba Elettroprotonica',
          pl: 'Bomba elektro-protonowa',
          pt: 'Electro-Proton Bomb',
          zh: 'Electro-Proton Bomb',
        },
        type: 'Device',
        ability: {
          en:
            "Bomb During the System Phase, you may spend 1 [Charge] to drop an Electro-Proton Bomb with the (1 [Straight]) template. Then place 1 fuse marker on that device. This card's [Charge] cannot be recovered.",
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight]) -Schablone eine Elektro-Protonen-Bombe abzuwerfen. Dann platziere 1 Zeitzünder auf jenem Gerät. Die [Charge] dieser Karte kann nicht wiederhergestellt werden.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Bomba de electroprotones utilizando la plantilla (1 [Straight]). Luego coloca 1 indicador de Espoleta sobre ese dispositivo. Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            "Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une Bombe Électro-Protonique avec le gabarit (1 [Straight]). Puis placez 1 marqueur d'amorce sur cet engin. La [Charge] de cette carte ne peut pas être récupérée.",
          it:
            'Bomba Durante la Fase di Sistema, puoi spendere 1 [Charge] per sganciare 1 bomba elettroprotonica usando il modello (1 [Straight]). Poi colloca 1 segnalino innesco su quel congegno. Le [Charge] di questa carta non possono essere recuperate.',
          pl:
            'Bomba W fazie systemowej możesz wydać 1 [Charge], aby zrzucić bombę elektro-protonową, korzystając z wzornika (1 [Straight]). Następnie umieść 1 znacznik opóźnienia na tym urządzeniu. Nie można odzyskać [Charge] tej karty.',
          pt:
            "Bomb During the System Phase, you may spend 1 [Charge] to drop an Electro-Proton Bomb with the (1 [Straight]) template. Then place 1 fuse marker on that device. This card's [Charge] cannot be recovered.",
          zh:
            "Bomb During the System Phase, you may spend 1 [Charge] to drop an Electro-Proton Bomb with the (1 [Straight]) template. Then place 1 fuse marker on that device. This card's [Charge] cannot be recovered.",
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/0f76484cc390fc97d1fe2f863d75944b.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/3a9ff5dda9113376b91df688218bce99.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/10c95db9395570b53fa1735833c3061e.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/b9fc2590e797daafba2b8fbc13a4d7cd.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/0f76484cc390fc97d1fe2f863d75944b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/0f76484cc390fc97d1fe2f863d75944b.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/0f76484cc390fc97d1fe2f863d75944b.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/0f76484cc390fc97d1fe2f863d75944b.png',
        },
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
    limited: 0,
    xws: 'clustermines',
    sides: [
      {
        title: {
          en: 'Cluster Mines',
          de: 'Clusterminen',
          fr: 'Mines Groupées',
          es: 'Minas de racimo',
          it: 'Cluster Mines',
          pl: 'Cluster Mines',
          pt: 'Cluster Mines',
          zh: 'Cluster Mines',
        },
        type: 'Device',
        charges: { value: 1, recovers: 0 },
        ability: {
          en:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
          de:
            'Mine Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone ein Cluster­minenset abzuwerfen. Die [Charge] dieser Karte kann nicht wiederhergestellt werden.',
          es:
            'Mina Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar un conjunto de Minas de racimo utilizando la plantilla (1 [Straight]). Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            'Mine Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une série de mines groupées en utilisant le gabarit (1 [Straight]). La [Charge] de cette carte ne peut pas être récupérée.',
          it:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
          pl:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
          pt:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
          zh:
            "Mine During the System Phase, you may spend 1 [Charge] to drop a Cluster Mine set using the (1 [Straight]) template. This card's [Charge] cannot be recovered.",
        },
        slots: ['Device'],
        device: {
          name: 'Cluster Mines',
          type: 'Mine',
          effect:
            'A Cluster Mine Set consists of 3 individual Cluster Mine devices. \n\nWhen a Cluster Mines set is placed, the center Cluster Mine is placed as normal, then two additional Cluster Mines are placed in the recesses as shown. After a ship overlaps or moves through any individual Cluster Mine, it detonates. Other Cluster Mines in the set that were not overlapped or moved through do not detonate.\n\nWhen each of these devices detonates, that ship rolls 2 attack dice. That ship then suffers 1 [Hit]/[Critical Hit] damage for each matching result.',
        },
        ffg: 648,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c27f0dcda78915239450bedf5b931d86.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/f494bfe33574470667d5ed8b67838d78.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/22db7b8882e45af1479643ccabbe5c89.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/5dbeda4d18ec25f1d87a8bf6f71c2d7a.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c27f0dcda78915239450bedf5b931d86.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c27f0dcda78915239450bedf5b931d86.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c27f0dcda78915239450bedf5b931d86.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/c27f0dcda78915239450bedf5b931d86.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 8 },
  },
  {
    limited: 0,
    xws: 'ionbombs',
    sides: [
      {
        title: {
          en: 'Ion Bombs',
          de: 'Ionenbomben',
          fr: 'Bombe Ionique',
          es: 'Bombas de iones',
          it: 'Ion Bombs',
          pl: 'Ion Bombs',
          pt: 'Ion Bombs',
          zh: 'Ion Bombs',
        },
        type: 'Device',
        charges: { value: 2, recovers: 0 },
        ability: {
          en:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
          de:
            'Bombe Während der Systemphase darfst du 1 [Charge] ausgeben, um unter Verwendung der (1 [Straight])-Schablone eine Ionenbombe abzuwerfen.',
          es:
            'Bomba Durante la fase de Sistemas, puedes gastar 1 [Charge] para soltar una Bomba de iones utilizando la plantilla (1 [Straight]).',
          fr:
            'Bombe Pendant la phase de système, vous pouvez dépenser 1 [Charge] pour larguer une bombe ionique en utilisant le gabarit (1 [Straight]).',
          it:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
          pl:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
          pt:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
          zh:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
        },
        slots: ['Device'],
        device: {
          name: 'Ion Bombs',
          type: 'Bomb',
          effect:
            'At the end of the Activation Phase, this device detonates.\n\nWhen this device detonates, each ship and remote at range 0-1 gains 3 ion tokens, and each remote at range 0-1 suffers 1 [Hit] damage.',
        },
        ffg: 649,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e4c43791c16aea639f2e811c16d1dbcf.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/24081a2c7a599de82199f44ea840f87f.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/1e7c1559fa4ffc5790ffc9790cf5fc2f.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/ec4c7a8b4908e0ebd05872ea6b1af82d.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e4c43791c16aea639f2e811c16d1dbcf.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e4c43791c16aea639f2e811c16d1dbcf.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e4c43791c16aea639f2e811c16d1dbcf.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/e4c43791c16aea639f2e811c16d1dbcf.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 5 },
  },
  {
    xws: 'concussionbombs',
    sides: [
      {
        ffg: 690,
        title: {
          en: 'Concussion Bombs',
          de: 'Erschütterungsbomben',
          fr: 'Bombes à Concussion',
          it: 'Concussion Bombs',
          pl: 'Concussion Bombs',
          pt: 'Concussion Bombs',
          zh: 'Concussion Bombs',
          es: 'Bombas de impacto',
        },
        type: 'Device',
        slots: [],
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/3b836493f5b17c47e44807c283bc4b04.png',
        },
        ability: {
          en:
            "During the System Phase, if any of this card's [Charge] are inactive, you must spend 1 [Charge] to drop 1 concussion bomb, if able. Otherwise, you may spend 1 [Charge] to drop 1 concussion bomb.",
          de:
            'Während der Systemphase, falls mindestens eine [Charge] dieser Karte inaktiv ist, musst du 1 [Charge] ausgeben, um 1 Erschütterungsbombe abzuwerfen, falls möglich. Ansonsten darfst du 1 [Charge] ausgeben, um 1 Erschütterungsbombe abzuwerfen.',
          fr:
            "Pendant la phase de système, si n'importe quelle [Charge] de cette carte est inactive, vous devez dépenser 1 [Charge] pour larguer 1 bombe à concussion, si possible. Sinon, vous pouvez dépenser 1 [Charge] pour larguer 1 bombe à concussion.",
          it:
            "During the System Phase, if any of this card's [Charge] are inactive, you must spend 1 [Charge] to drop 1 concussion bomb, if able. Otherwise, you may spend 1 [Charge] to drop 1 concussion bomb.",
          pl:
            "During the System Phase, if any of this card's [Charge] are inactive, you must spend 1 [Charge] to drop 1 concussion bomb, if able. Otherwise, you may spend 1 [Charge] to drop 1 concussion bomb.",
          pt:
            "During the System Phase, if any of this card's [Charge] are inactive, you must spend 1 [Charge] to drop 1 concussion bomb, if able. Otherwise, you may spend 1 [Charge] to drop 1 concussion bomb.",
          zh:
            "During the System Phase, if any of this card's [Charge] are inactive, you must spend 1 [Charge] to drop 1 concussion bomb, if able. Otherwise, you may spend 1 [Charge] to drop 1 concussion bomb.",
          es:
            'Durante la fase de Sistemas, si alguna de las [Charge] de esta carta está inactiva, debes gastar 1 [Charge] para soltar 1 bomba de impacto, si es posible. De lo contrario, puedes gastar 1 [Charge] para soltar 1 bomba de impacto.',
        },
      },
    ],
    cost: { value: 3 },
    limited: 0,
    hyperspace: true,
    epic: true,
  },
];

export default t;

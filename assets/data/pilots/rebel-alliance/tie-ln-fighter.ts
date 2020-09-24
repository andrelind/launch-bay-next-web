import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ln Fighter',
    de: 'TIE/ln-Jäger',
    fr: 'Chasseur TIE/ln',
    it: 'Caccia TIE/ln',
    pl: 'Myśliwiec TIE/ln',
    pt: 'TIE/ln Fighter',
    zh: 'TIE/ln战斗机',
    es: 'Caza TIE/ln',
  },
  xws: 'tielnfighter',
  ffg: 11,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
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
    '5FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_TIEFighter.png',
  pilots: [
    {
      name: {
        en: '"Zeb" Orrelios',
        de: '„Zeb" Orrelios',
        fr: '"Zeb" Orrelios',
        es: '"Zeb" Orrelios',
        it: '"Zeb" Orrelios',
        pl: '„Zeb" Orrelios',
        pt: '"Zeb" Orrelios',
        zh: '"Zeb" Orrelios',
      },
      caption: {
        en: 'Spectre-4',
        de: 'Spectre-4',
        fr: 'Spectre-4',
        es: 'Espectro-4',
        it: 'Spectre-4',
        pl: 'Widmo-4',
        pt: 'Espectro-4',
        zh: 'Spectre-4',
      },
      initiative: 2,
      limited: 1,
      cost: 24,
      xws: 'zeborrelios-tielnfighter',
      ability: {
        en:
          'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
        de:
          'Solange du verteidigst, werden [Critical Hit]-Ergebnisse neutralisiert, bevor [Hit]-Ergebnisse neutralisiert werden.',
        fr:
          'Tant que vous défendez, les résultats [Critical Hit] sont neutralisés avant les résultats [Hit].',
        es:
          'Mientras te defiendes, los resultados [Critical Hit] se neutralizan antes que los resultados [Hit].',
        it:
          'Mentre difendi, i risultati [Critical Hit] sono neutralizzati prima dei risultati [Hit].',
        pl:
          'Gdy się bronisz, wyniki [Critical Hit] są neutralizowane przed wynikami [Hit].',
        pt:
          'Quando você defender, os resultados [Critical Hit] são neutralizados antes dos resultados [Hit].',
        zh:
          'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_49.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c93c9c616d61c5ba47331924908787da.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/a711fa0914b687700e7700bd93d532e6.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/0a372dbcbf5ad53b5a70975e91e32bc2.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/0fe4f0bf62ae6ff0234e0cceef41b8e9.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/74277a822775cd172fe7577864958dca.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/7836f4c2d4b6e41855bcb0ead9effe4e.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_49.png',
      },
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_49.jpg',
      ffg: 49,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Captain Rex',
        de: 'Captain Rex',
        fr: 'Capitaine Rex',
        es: 'Capitán Rex',
        it: 'Capitano Rex',
        pl: 'Kapitan Rex',
        pt: 'Capitão Rex',
        zh: 'Captain Rex',
      },
      caption: {
        en: 'Clone Wars Veteran',
        de: 'Veteran der Klonkriege',
        fr: 'Vétéran de la Guerre des Clones',
        es: 'Veterano de las Guerras Clon',
        it: 'Veterano delle Guerre dei Cloni',
        pl: 'Weteran Wojen Klonów',
        pt: 'Veterano das Guerras Clônicas',
        zh: 'Clone Wars Veteran',
      },
      initiative: 2,
      limited: 1,
      cost: 29,
      xws: 'captainrex',
      ability: {
        en:
          'After you perform an attack, assign the Suppressive Fire condition to the defender.',
        de:
          'Nachdem du einen Angriff durchgeführt hast, ordne dem Verteidiger den Zustand Sperrfeuer zu.',
        fr:
          "Après avoir effectué une attaque, assignez l'état Tir de Suppression au défenseur.",
        es:
          'Después de que efectúes un ataque, asigna el Estado Fuego de supresión al defensor.',
        it:
          'Dopo che hai effettuato un attacco, assegna la condizione Fuoco di Soppressione al difensore.',
        pl: 'Gdy wykonasz atak, przypisz obrońcy stan: Ogień zaporowy.',
        pt:
          'Após realizar um ataque, atribua a condição Tiro Supressivo ao defensor.',
        zh:
          'After you perform an attack, assign the Suppressive Fire condition to the defender.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_48.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/c7f9447ea8039d387df58002afc9c9d0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/fa50f41f08df70b7dd3d94bbbeee35a5.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/1c50ef22a7b88789e78626d3e26fa139.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/d9e5c9173a5046be7cfb51fe97b119bb.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/5894d0e4f94a6b1fac3544cf0c48b037.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/239b70ca42d7a8208b89b5aa976d956b.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_48.png',
      },
      conditions: ['suppressivefire'],
      slots: ['Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_48.jpg',
      ffg: 48,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Ezra Bridger',
        de: 'Ezra Bridger',
        fr: 'Ezra Bridger',
        es: 'Ezra Bridger',
        it: 'Ezra Bridger',
        pl: 'Ezra Bridger',
        pt: 'Ezra Bridger',
        zh: 'Ezra Bridger',
      },
      caption: {
        en: 'Spectre-6',
        de: 'Spectre-6',
        fr: 'Spectre-6',
        es: 'Espectro-6',
        it: 'Spectre-6',
        pl: 'Widmo-6',
        pt: 'Espectro-6',
        zh: 'Spectre-6',
      },
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'ezrabridger-tielnfighter',
      ability: {
        en:
          'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls du gestresst bist, darfst du 1 [Force] ausgeben, um bis zu 2 deiner [Focus]-Ergebnisse in [Evade]- oder [Hit]-Ergebnisse zu ändern.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez dépenser 1 [Force] pour changer jusqu'à 2 de vos résultats [Focus] en résultats [Evade] ou [Hit].",
        es:
          'Mientras te defiendes o efectúas un ataque, si estás bajo tensión, puedes gastar 1 [Force] para cambiar hasta 2 de tus resultados [Focus] por resultados [Evade] o [Hit].',
        it:
          'Mentre difendi o effettui un attacco, se sei in tensione, puoi spendere 1 [Force] per cambiare fino a 2 tuoi risultati [Focus] in risultati [Evade] o [Hit].',
        pl:
          'Gdy się bronisz albo wykonujesz atak, jeżeli posiadasz żeton stresu, możesz wydać 1 [Force], aby zmienić maksymalnie 2 ze swoich wyników [Focus] na wynik [Evade] albo [Hit].',
        pt:
          'Quando defender ou realizar um ataque,se estiver estressado, você podegastar 1 [Force] para mudar até 2 de seusresultados [Focus] para resultados [Evade] ou [Hit].',
        zh:
          'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_46.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/6b7d8f85fdc4e360f50c5c47c1a514f0.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/448f3d3ed1cb7546ca4b8b17bfa2c068.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/2fa5fbb75602e207422b707d2a6cb89e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/49765eef5fa324d057f36636991d35d7.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/46bc5dfda41690019d6426a515104356.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/d2fb5abaeb2a1268575a1d4d2cc4fa7c.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_46.png',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Modification', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_46.jpg',
      ffg: 46,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Sabine Wren',
        de: 'Sabine Wren',
        fr: 'Sabine Wren',
        es: 'Sabine Wren',
        it: 'Sabine Wren',
        pl: 'Sabine Wren',
        pt: 'Sabine Wren',
        zh: 'Sabine Wren',
      },
      caption: {
        en: 'Spectre-5',
        de: 'Spectre-5',
        fr: 'Spectre-5',
        es: 'Espectro-5',
        it: 'Spectre-5',
        pl: 'Widmo-5',
        pt: 'Espectro-5',
        zh: 'Spectre-5',
      },
      initiative: 3,
      limited: 1,
      cost: 28,
      xws: 'sabinewren-tielnfighter',
      ability: {
        en:
          'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
        de:
          'Bevor du aktiviert wirst, darfst du eine [Barrel Roll]- oder [Boost]-Aktion durchführen.',
        fr:
          'Avant votre activation, vous pouvez effectuer une action [Barrel Roll] ou [Boost].',
        es:
          'Antes de que te actives, puedes realizar una acción [Barrel Roll] o [Boost].',
        it:
          'Prima di attivarti, puoi effettuare 1 azione [Barrel Roll] o [Boost].',
        pl:
          'Zanim się aktywujesz, możesz wykonać akcję [Barrel Roll] albo [Boost].',
        pt:
          'Antes de ativar, você poderealizar 1 ação [Barrel Roll] ou [Boost].',
        zh:
          'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_47.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/7aa7d06f048a1e0dc72726e255bc5d88.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/d94dca2de55a8bf82da2cba69db041d1.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/b502d14c8564d70293b382ce694d55d9.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/add0009f9fad5a9eb48de35dc92c1309.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/49e05e1b6075659467a5de7f6e9069e2.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/f38e3f4bf74e16c32d5cd63b3b34ee75.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_47.png',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_47.jpg',
      ffg: 47,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

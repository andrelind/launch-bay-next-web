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
      cost: 23,
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
      cost: 28,
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
      cost: 28,
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

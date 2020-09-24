import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'TIE/ba Interceptor',
    de: 'TIE/ba-Abfangjäger',
    fr: 'Intercepteur TIE/ba',
    it: 'TIE/ba Interceptor',
    pl: 'TIE/ba Interceptor',
    pt: 'TIE/ba Interceptor',
    zh: 'TIE/ba Interceptor',
    es: 'TIE del mayor Vonreg',
  },
  xws: 'tiebainterceptor',
  ffg: 69,
  size: 'Small',
  dial: [
    '1TB',
    '1BB',
    '1NB',
    '1YB',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FB',
    '5FW',
    '5KR',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: {
      en: 'Fine-Tuned Thrusters',
      de: 'Präzisionsdüsen',
      fr: 'Propulseurs Réactifs',
      es: 'Propulsores perfeccionados',
      it: 'Fine-Tuned Thrusters',
      pl: 'Fine-Tuned Thrusters',
      pt: 'Fine-Tuned Thrusters',
      zh: 'Fine-Tuned Thrusters',
    },
    text: {
      en:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      de:
        'Nachdem du ein Manöver vollständig ausgeführt hast, falls du nicht erschöpft oder angestrengt bist, darfst du 1 Erschöpfungs- oder Anstrengungsmarker erhalten, um eine [Lock]- oder [Barrel Roll]-Aktion durchzuführen.',
      fr:
        "après avoir entièrement exécuté une manœuvre, si vous n'êtes pas épuisé ou contraint, vous pouvez gagner 1 marqueur d'épuisement ou de contrainte pour effectuer une action [Lock] ou [Barrel Roll].",
      es:
        'Después de que ejecutes completamente una maniobra, si no estás mermado ni bajo sobresfuerzo, puedes recibir 1 ficha de Merma o de Sobresfuerzo para realizar una acción [Lock] o [Barrel Roll] .',
      it:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      pl:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      pt:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
      zh:
        'After you fully execute a maneuver, if you are not depleted or strained, you may gain 1 deplete or strain token to perform a [Lock] or [Barrel Roll] action.',
    },
  },
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Vonregs-First-Order-TIE-Interceptor.png',
  pilots: [
    {
      name: {
        en: 'Major Vonreg',
        de: 'Major Vonreg',
        fr: 'Major Vonreg',
        es: 'Major Vonreg',
        it: 'Major Vonreg',
        pl: 'Major Vonreg',
        pt: 'Major Vonreg',
        zh: 'Major Vonreg',
      },
      caption: {
        en: 'Red Baron',
        de: 'Der Rote Baron',
        fr: 'Baron Rouge',
        es: 'Barón Rojo',
        it: 'Red Baron',
        pl: 'Red Baron',
        pt: 'Red Baron',
        zh: 'Red Baron',
      },
      initiative: 6,
      limited: 1,
      cost: 55,
      xws: 'majorvonreg',
      ability: {
        en:
          'During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.',
        de:
          'Während der Systemphase darfst du 1 feindliches Schiff in deinem [Bullseye Arc] wählen. Jenes Schiff erhält 1 Erschöpfungs- oder Anstrengungsmarker deiner Wahl',
        fr:
          "Pendant la phase de système, vous pouvez choisir 1 vaisseau ennemi dans votre [Bullseye Arc]. Ce vaisseau ennemi gagne 1 marqueur d'épuisement ou de contrainte (vous choisissez) .",
        es:
          'Durante la fase de Sistemas, puedes elegir 1 nave enemiga situada en tu [Bullseye Arc]. Esa nave recibe 1 ficha de Merma o de Sobresfuerzo a tu elección.',
        it:
          'During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.',
        pl:
          'During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.',
        pt:
          'During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.',
        zh:
          'During the System Phase, you may choose 1 enemy ship in your [Bullseye Arc]. That ship gains 1 deplete or strain token of your choice.',
      },
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 624,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e95d46ad3a22ad0790cfd18a7e10cf81.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/1b30ffc8e79177a83532821d50f31564.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/671c74132ac32cfa5e2e94d105cbc780.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/605fef3d8d519f49cf15a86b757c5f9c.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e95d46ad3a22ad0790cfd18a7e10cf81.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e95d46ad3a22ad0790cfd18a7e10cf81.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e95d46ad3a22ad0790cfd18a7e10cf81.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/e95d46ad3a22ad0790cfd18a7e10cf81.png',
      },
    },
    {
      name: {
        en: '"Holo"',
        de: '„Holo"',
        fr: '"Holo"',
        es: '"Holo"',
        it: '"Holo"',
        pl: '"Holo"',
        pt: '"Holo"',
        zh: '"Holo"',
      },
      caption: {
        en: 'Trick of the Light',
        de: 'Optische Täuschung',
        fr: "Illusion d'Optique",
        es: 'Ilusión óptica',
        it: 'Trick of the Light',
        pl: 'Trick of the Light',
        pt: 'Trick of the Light',
        zh: 'Trick of the Light',
      },
      initiative: 5,
      limited: 1,
      cost: 53,
      xws: 'holo',
      ability: {
        en:
          'At the start of the Engagement Phase, you must transfer 1 of your tokens to another friendly ship at range 0-2.',
        de:
          'Zu Beginn der Kampfphase musst du 1 deiner Marker auf ein anderes befreundetes Schiff in Reichweite 0-2 transferieren.',
        fr:
          "Au début de la phase d'engagement, vous devez transférer 1 de vos marqueurs à un autre vaisseau allié à portée 0-2.",
        es:
          'Al comienzo de la fase de Enfrentamiento, debes transferir 1 de tus fichas a otra nave aliada que tengas a alcance 0-2.',
        it:
          'At the start of the Engagement Phase, you must transfer 1 of your tokens to another friendly ship at range 0-2.',
        pl:
          'At the start of the Engagement Phase, you must transfer 1 of your tokens to another friendly ship at range 0-2.',
        pt:
          'At the start of the Engagement Phase, you must transfer 1 of your tokens to another friendly ship at range 0-2.',
        zh:
          'At the start of the Engagement Phase, you must transfer 1 of your tokens to another friendly ship at range 0-2.',
      },
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 625,
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/61d81abede1ce312b0de7d16623c2e60.jpg',
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ee53482be8e59ff44f272e76c4e8123d.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/1f01a71abe3ab1962024fe2ff474b5b4.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/71b30a8599c4cb200eaa1054bc58dab5.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/92a3838b42257d2b90e69fcc49e6a155.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ee53482be8e59ff44f272e76c4e8123d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ee53482be8e59ff44f272e76c4e8123d.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ee53482be8e59ff44f272e76c4e8123d.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/ee53482be8e59ff44f272e76c4e8123d.png',
      },
    },
    {
      name: {
        en: '"Ember"',
        de: '„Ember"',
        fr: '"Ember"',
        es: '"Ascua"',
        it: '"Ember"',
        pl: '"Ember"',
        pt: '"Ember"',
        zh: '"Ember"',
      },
      caption: {
        en: 'Dying Flame',
        de: 'Erlöschende Flamme',
        fr: 'Flamme Mourante',
        es: 'Llama agonizante',
        it: 'Dying Flame',
        pl: 'Dying Flame',
        pt: 'Dying Flame',
        zh: 'Dying Flame',
      },
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'ember',
      ability: {
        en:
          'While you perform an attack, if there is a damaged ship friendly to the defender at range 0-1 of the defender, the defender cannot spend focus or calculate tokens.',
        de:
          'Solange du einen Angriff durchführst, falls in Reichweite 0-1 des Verteidigers ein beschädigtes Schiff ist, das mit dem Verteidiger befreundet ist, kann der Verteidiger keine Fokus- oder Berechnungsmarker ausgeben.',
        fr:
          'Tant que vous effectuez une attaque, si un vaisseau endommagé, allié du défenseur, est à portée 0-1 de ce dernier, le défenseur ne peut pas dépenser de marqueur de concentration ou de calcul.',
        es:
          'Mientras efectúas un ataque, si hay alguna nave dañada aliada con el defensor situada a alcance 0-1 del defensor, éste no puede gastar fichas de Concentración o de Cálculos.',
        it:
          'While you perform an attack, if there is a damaged ship friendly to the defender at range 0-1 of the defender, the defender cannot spend focus or calculate tokens.',
        pl:
          'While you perform an attack, if there is a damaged ship friendly to the defender at range 0-1 of the defender, the defender cannot spend focus or calculate tokens.',
        pt:
          'While you perform an attack, if there is a damaged ship friendly to the defender at range 0-1 of the defender, the defender cannot spend focus or calculate tokens.',
        zh:
          'While you perform an attack, if there is a damaged ship friendly to the defender at range 0-1 of the defender, the defender cannot spend focus or calculate tokens.',
      },
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 626,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4de956edddeacb92ef3e4f94e0a63db3.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/80eb41318c85d13af8db909a1058fc09.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/0d0a0fe39bba6a686a13c4897228826b.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/5d4ae8383cccc4b82b06841019e467a1.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4de956edddeacb92ef3e4f94e0a63db3.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4de956edddeacb92ef3e4f94e0a63db3.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4de956edddeacb92ef3e4f94e0a63db3.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/4de956edddeacb92ef3e4f94e0a63db3.png',
      },
    },
    {
      name: {
        en: 'First Order Provocateur',
        de: 'Provokateur der Ersten Ordnung',
        fr: 'Provocateur du Premier Ordre',
        es: 'Agente provocador de la Primera Orden',
        it: 'First Order Provocateur',
        pl: 'First Order Provocateur',
        pt: 'First Order Provocateur',
        zh: 'First Order Provocateur',
      },
      initiative: 3,
      limited: 0,
      cost: 41,
      xws: 'firstorderprovocateur',
      slots: ['Talent', 'Missile', 'Modification', 'Tech'],
      hyperspace: true,
      epic: true,
      ffg: 627,
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c834c2c4722b60e67292130d40c7ec19.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/f0296749365c66e91292ee1bd2c3ad8a.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/f1c7604de8f310f4986e19dd8d3d6c7d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/98629aa0f8532256505c091197c67a4f.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c834c2c4722b60e67292130d40c7ec19.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c834c2c4722b60e67292130d40c7ec19.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c834c2c4722b60e67292130d40c7ec19.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/c834c2c4722b60e67292130d40c7ec19.png',
      },
      text: {
        en:
          "Major Vonreg's vision guided the enhancement of proven designs while engineering this one-of-a-kind precise and lethal craft from Sienar-Jaemus Fleet Systems.",
        de:
          'Inspiriert von Major Vonregs Ideen entwickelte Sienar-Jaemus Flottensysteme viele altbewährte Modelle weiter und konstruierte diesen einmaligen, brandgefährlichen Flieger.',
        fr:
          "Les idées du Major Vonreg ont guidé l'amélioration de modèles déjà éprouvés lors de la conception de cet appareil unique en son genre, précis et mortel, par Sienar-Jaemus Fleet Systems.",
        es:
          'Aplicando las ideas del mayor Vonreg, Sistemas de Flota Sienar-Jaemus pudo mejorar diseños de valía ya probada, así como construir esta excepcional nave tan precisa como letal.',
        it:
          "Major Vonreg's vision guided the enhancement of proven designs while engineering this one-of-a-kind precise and lethal craft from Sienar-Jaemus Fleet Systems.",
        pl:
          "Major Vonreg's vision guided the enhancement of proven designs while engineering this one-of-a-kind precise and lethal craft from Sienar-Jaemus Fleet Systems.",
        pt:
          "Major Vonreg's vision guided the enhancement of proven designs while engineering this one-of-a-kind precise and lethal craft from Sienar-Jaemus Fleet Systems.",
        zh:
          "Major Vonreg's vision guided the enhancement of proven designs while engineering this one-of-a-kind precise and lethal craft from Sienar-Jaemus Fleet Systems.",
      },
    },
  ],
};

export default t;

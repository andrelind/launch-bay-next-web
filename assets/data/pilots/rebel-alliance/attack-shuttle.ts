import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Attack Shuttle',
    de: 'Jagdshuttle',
    fr: "Navette d'Attaque",
    it: 'Navetta di Attacco',
    pl: 'Prom szturmowy',
    pt: 'Shuttle de Ataque',
    zh: 'Attack Shuttle',
    es: 'Lanzadera de ataque',
  },
  xws: 'attackshuttle',
  ffg: 32,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
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
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  ability: {
    name: {
      en: 'Locked and Loaded',
      de: 'Geladen und entsichert',
      es: 'Armas preparadas',
      pl: 'Gotowy do akcji',
      zh: 'Locked and Loaded',
    },
    text: {
      en:
        'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
      de:
        'Solange du angedockt bist, nachdem dein Trägerschiff einen [Front Arc]-Primärangriff oder [Turret]-Angriff durchgeführt hat, darf es einen Bonus-[Rear Arc]-Primärangriff durchführen.',
      es:
        'Mientras estás acoplado, después de que tu nave nodriza efectúe un ataque principal [Front Arc] o [Turret], puede efectuar un ataque principal [Rear Arc] adicional.',
      pl:
        'Jeżeli statek, do którego jesteś zadokowany, wykona atak podstawowy [Front Arc] albo [Turret], może po nim wykonać dodatkowy atak podstawowy [Rear Arc].',
      zh:
        'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
    },
  },
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_AttackShuttle.png',
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
      cost: 32,
      xws: 'zeborrelios',
      ability: {
        en:
          'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
        de:
          'Solange du verteidigst, werden [Critical Hit]-Ergebnisse neutralisiert, bevor [Hit]-Ergebnisse neutralisiert werden.',
        fr:
          'Tant que vous défendez, les résultats [Critical Hit] sont neutralisés avant les résultats [Hit]. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.',
        es:
          'Mientras te defiendes, los resultados [Critical Hit] se neutralizan antes que los resultados [Hit].',
        it:
          'Mentre difendi, i risultati [Critical Hit] sono neutralizzati prima dei risultati [Hit]. Carico e Pronto: Mentre sei attraccato, dopo che la tua nave madre ha effettuato un attacco primario [Front Arc] o un attacco [Turret], può effettuare un attacco primario [Rear Arc] bonus.',
        pl:
          'Gdy się bronisz, wyniki [Critical Hit] są neutralizowane przed wynikami [Hit].',
        pt:
          'Quando você defender, osresultados [Critical Hit] são neutralizadosantes dos resultados [Hit]. Pronto para o Ataque: Quando você estiver acoplado, após seu porta-naves realizar um ataque primário [Front Arc] ou [Turret], ele pode realizar um ataque primário [Rear Arc] bônus.',
        zh:
          'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_37.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/86abe5e7a9d405d8ad1f0156bc7e67e4.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7318a4d0ac33b1ac76fe33286d950646.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/05cbf52310b8783ffe87ebcad12a5e3e.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/d02cdc48cdc0cb09e01157c1b0059124.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/76dcfd4c4da0ae54f47ebf161a2768d0.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/bd38c6a8ff2fe0efc7d6b4df231c40e5.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_37.png',
      },
      slots: ['Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_37.jpg',
      ffg: 37,
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
      cost: 40,
      xws: 'ezrabridger',
      ability: {
        en:
          'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls du gestresst bist, darfst du 1 [Force] ausgeben, um bis zu 2 deiner [Focus]-Ergebnisse in [Evade]- oder [Hit]-Ergebnisse zu ändern.',
        fr:
          "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez dépenser 1 [Force] pour changer jusqu'à 2 de vos résultats [Focus] en résultats [Evade] ou [Hit]. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.",
        es:
          'Mientras te defiendes o efectúas un ataque, si estás bajo tensión, puedes gastar 1 [Force] para cambiar hasta 2 de tus resultados [Focus] por resultados [Evade] o [Hit].',
        it:
          'Mentre difendi o effettui un attacco, se sei in tensione, puoi spendere 1 [Force] per cambiare fino a 2 tuoi risultati [Focus] in risultati [Evade] o [Hit]. Carico e Pronto: Mentre sei attraccato, dopo che la tua nave madre ha effettuato un attacco primario [Front Arc] o un attacco [Turret], può effettuare un attacco primario [Rear Arc] bonus.',
        pl:
          'Gdy się bronisz albo wykonujesz atak, jeżeli posiadasz żeton stresu, możesz wydać 1 [Force], aby zmienić maksymalnie 2 ze swoich wyników [Focus] na wynik [Evade] albo [Hit].',
        pt:
          'Quando defender ou realizar um ataque, se estiver estressado, você pode gastar 1 [Force] para mudar até 2 de seus resultados [Focus] para resultados [Evade] ou [Hit]. Pronto para o Ataque: Quando você estiver acoplado, após seu porta-naves realizar um ataque primário [Front Arc] ou [Turret], ele pode realizar um ataque primário [Rear Arc] bônus.',
        zh:
          'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_36.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/95a32d369fc202a898d73511f8ab2e98.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/5527c15233a7da6df96c77f104c6eef9.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/f539e48d5ab9fd2f7b8b9c65897be5ce.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/4bd3c04b8874d272e95be026eafd9df5.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/0e3f442253e4e1890fb48ff5c482c112.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/09469c0e14ea027152ae5fab976e0f7f.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_36.png',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Turret', 'Crew', 'Modification', 'Title', 'Force Power'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_36.jpg',
      ffg: 36,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Hera Syndulla',
        de: 'Hera Syndulla',
        fr: 'Hera Syndulla',
        es: 'Hera Syndulla',
        it: 'Hera Syndulla',
        pl: 'Hera Syndulla',
        pt: 'Hera Syndulla',
        zh: 'Hera Syndulla',
      },
      caption: {
        en: 'Spectre-2',
        de: 'Spectre-2',
        fr: 'Spectre-2',
        es: 'Espectro-2',
        it: 'Spectre-2',
        pl: 'Widmo-2',
        pt: 'Espectro-2',
        zh: 'Spectre-2',
      },
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'herasyndulla',
      ability: {
        en:
          'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
        de:
          'Nachdem du ein rotes oder blaues Manöver aufgedeckt hast, darfst du dein Rad auf ein anderes Manöver derselben Schwierigkeit einstellen.',
        fr:
          'Après avoir révélé une manœuvre bleue ou rouge, vous pouvez régler votre cadran sur une autre manœuvre de même difficulté. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.',
        es:
          'Después de que reveles una maniobra de color rojo o azul, puedes establecer en tu selector otra maniobra con esa misma dificultad.',
        it:
          "Dopo che hai rivelato una manovra rossa o blu, puoi selezionare un'altra manovra della stessa difficoltà sul tuo indicatore. Carico e Pronto: Mentre sei attraccato, dopo che la tua nave madre ha effettuato un attacco primario [Front Arc] o un attacco [Turret], può effettuare un attacco primario [Rear Arc] bonus.",
        pl:
          'Po odsłonięciu czerwonego albo niebieskiego manewru, możesz ustawić na tarczy inny manewr o tej samej trudności.',
        pt:
          'Após revelar uma manobra vermelha ou azul, você pode rotacionar seu disco para outra manobra de mesma dificuldade. Pronto para o Ataque: Quando você estiver acoplado, após seu porta-naves realizar um ataque primário [Front Arc] ou [Turret], ele pode realizar um ataque primário [Rear Arc] bônus.',
        zh:
          'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_34.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/06baefbcb82378139975d906e9d02981.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c742554323eccf0be5fcd98bfc48841d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/a7cef3d1f065a39c13b8b6079b6635ad.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/0b55e9ebbd94168903c1a1741de64241.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f69fdff26973ad37f0ebb4e5fd3a3c37.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/e28f7d85514c943be03ee038af7eab10.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_34.png',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_34.jpg',
      ffg: 34,
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
      cost: 41,
      xws: 'sabinewren',
      ability: {
        en:
          'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
        de:
          'Bevor du aktiviert wirst, darfst du eine [Barrel Roll]- oder [Boost]-Aktion durchführen.',
        fr:
          'Avant votre activation, vous pouvez effectuer une action [Barrel Roll] ou [Boost]. Chargé et Prêt à Tirer : tant que vous êtes arrimé, après que votre vaisseau porteur a effectué une attaque principale [Front Arc] ou [Turret], il peut effectuer une attaque principale [Rear Arc] bonus.',
        es:
          'Antes de que te actives, puedes realizar una maniobra [Barrel Roll] o [Boost].',
        it:
          'Prima di attivarti, puoi effettuare 1 azione [Barrel Roll] o [Boost]. Carico e Pronto: Mentre sei attraccato, dopo che la tua nave madre ha effettuato un attacco primario [Front Arc] o un attacco [Turret], può effettuare un attacco primario [Rear Arc] bonus.',
        pl:
          'Zanim się aktywujesz, możesz wykonać akcję [Barrel Roll] albo [Boost].',
        pt:
          'Antes de ativar, você poderealizar 1 ação [Barrel Roll] ou [Boost]. Pronto para o Ataque:Quando você estiver acoplado, após seu porta-naves realizar um ataque primário [Front Arc] ou [Turret], ele pode realizar um ataque primário [Rear Arc] bônus.',
        zh:
          'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_35.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/262183614d48d73977e6f4d1afae897b.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/9ddd38cdf2b5ff95f6c81b13d6d6e8fd.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/6b32c9c11480dc88c78265dccc68edb4.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/75e0917cd0f68889abb0cb5f0a1ad19a.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/c56f22a2a769654c951684fa65dc7262.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/8f1dac4f2c0ca10783668593338304e1.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_35.png',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_35.jpg',
      ffg: 35,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'heavylasercannon',
    sides: [
      {
        title: {
          en: 'Heavy Laser Cannon',
          de: 'Schwere Laserkanone',
          fr: 'Canon Laser Lourd',
          es: 'Cañón láser pesado',
          it: 'Cannone Laser Pesante',
          pl: 'Ciężkie działo laserowe',
          pt: 'Canhão de Laser Pesado',
          zh: '重型激光加农炮',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: After the Modify Attack Dice step, change all [Critical Hit] results to [Hit] results.',
          de:
            'Angriff: Nach dem Schritt „Angriffswürfel modifizieren", ändere alle [Critical Hit]-Ergebnisse in [Hit]-Ergebnisse.',
          es:
            'Ataque: Después del paso de "Modificar dados de ataque", cambia todos tus resultados [Critical Hit] por resultados [Hit].',
          fr:
            "Attaque : après l'étape « Modifier les dés d'attaque », changez tous les résultats [Critical Hit] en résultats [Hit].",
          it:
            'Attacco: Dopo il passo "Modificare i Dadi di Attacco", cambia tutti i risultati [Critical Hit] in risultati [Hit].',
          pl:
            'Atak: Po etapie modyfikowania kości ataku zmień wszystkie wyniki [Critical Hit] na wyniki [Hit].',
          pt:
            'Ataque: Após a etapa Modificar Dados de Ataque, mude todos os resultados [Critical Hit] para resultados [Hit].',
          zh:
            '攻击：在修正攻击骰后，将掷骰结果中所有的[Critical Hit]变为[Hit]。',
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_27.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/5b0567c73c3be07914333cb3272c1e48.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_27.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/58fce7872153f58f01d9320c39591f47.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/52878cb126b5fdf02f2fa57d3d2c6b96.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/23a05ae80d17d21868151d91de40c65e.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/99fbfec68c0472ce2bfec01ab9909195.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_27.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_27.jpg',
        ffg: 256,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ioncannon',
    sides: [
      {
        title: {
          en: 'Ion Cannon',
          de: 'Ionenkanone',
          fr: 'Canon Ionique',
          es: 'Cañón de iones',
          it: 'Cannone a Ioni',
          pl: 'Działo jonowe',
          pt: 'Canhão Iônico',
          zh: 'Ion Cannon',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Angriff: Falls dieser Angriff trifft, gib 1 [Hit]- oder [Critical Hit]-Ergebnis aus, um den Verteidiger 1 [Hit]-Schaden erleiden zu lassen. Alle übrigen [Hit]/[Critical Hit]-Ergebnisse fügen Ionenmarker anstatt Schaden zu.',
          es:
            'Ataque: Si este ataque impacta, gasta 1 resultado [Hit] o [Critical Hit] para provocar que el defensor sufra 1 de daño [Hit]. Todos los resultados [Hit]/[Critical Hit] restantes infligen fichas de Iones en vez de daño.',
          fr:
            'Attaque : si cette attaque touche, dépensez 1 résultat [Hit] ou [Critical Hit] pour faire subir 1 dégât [Hit] au défenseur. Tous les résultats [Hit]/[Critical Hit] restants infligent des marqueurs ioniques au lieu des dégâts.',
          it:
            'Attacco: Se questo attacco colpisce, spendi 1 risultato [Hit] o [Critical Hit] per far subire 1 danno [Hit] al difensore. Tutti i risultati [Hit]/[Critical Hit] rimanenti infliggono segnalini ioni invece di danni.',
          pl:
            'Atak: Jeżeli ten atak trafi, wydaj 1 wynik [Hit] albo [Critical Hit], aby obrońca przyjął 1 uszkodzenie [Hit]. Wszystkie pozostałe wyniki [Hit]/[Critical Hit] przydzielają żetony jonizacji zamiast uszkodzeń.',
          pt:
            'Ataque: Se este ataque acertar, gaste 1 resultado [Hit] ou [Critical Hit] para fazer com que o defensor sofra 1 dano [Hit]. Todos os resultados [Hit]/[Critical Hit] restantes atribuem fichas de íon em vez de causarem dano.',
          zh:
            'Attack: If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_28.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/ab8963256095769281bbc1bcb75e2c76.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_28.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/c72af1c985f82e927c0a0c7985f385a6.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/1c1578b52933d159f43160df8a3fc061.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/99d019af2021e6deca046ca29a9b5edf.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/90551f9b3ec2467ea28cbda43c3229bd.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_28.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_28.jpg',
        ffg: 257,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'jammingbeam',
    sides: [
      {
        title: {
          en: 'Jamming Beam',
          de: 'Störstrahl',
          fr: 'Rayon de Brouillage',
          es: 'Haz de interferencias',
          it: 'Raggio Disturbatore',
          pl: 'Promień zakłócający',
          pt: 'Feixe de Interferência',
          zh: 'Jamming Beam',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict jam tokens instead of damage.',
          de:
            'Angriff: Falls dieser Angriff trifft, fügen alle [Hit]/[Critical Hit]-Ergebnisse Störsignalmarker anstatt Schaden zu.',
          es:
            'Ataque: Si este ataque impacta, todos los resultados [Hit]/[Critical Hit] infligen fichas de Interferencia en vez de daño.',
          fr:
            'Attaque : si cette attaque touche, tous les résultats [Hit]/[Critical Hit] infligent des marqueurs de brouillage au lieu des dégâts.',
          it:
            'Attacco: Se questo attacco colpisce, tutti i risultati [Hit]/[Critical Hit] infliggono segnalini disturbo invece di danni.',
          pl:
            'Atak: Jeżeli ten atak trafi, wszystkie wyniki [Hit]/[Critical Hit] przydzielają żetony zakłócania zamiast uszkodzeń.',
          pt:
            'Ataque: Se este ataque acertar, todos os resultados [Hit]/[Critical Hit] atribuem fichasde interferência em vez de causarem dano.',
          zh:
            'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict jam tokens instead of damage.',
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_29.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/c1271681af10e037a18dbda8ad8a8186.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_29.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/c3c5e57e8e69230905d91f6b093c1b4d.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/0aa1b931e79b1d42ea9fa91ac722c494.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/5123df4df0d399ee041e9c6ca716bb1c.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/1abb331de0248d3e07554e37898dc876.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_29.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_29.jpg',
        ffg: 258,
      },
    ],
    cost: { value: 0 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tractorbeam',
    sides: [
      {
        title: {
          en: 'Tractor Beam',
          de: 'Fangstrahl',
          fr: 'Rayon Tracteur',
          es: 'Proyector de campo de tracción',
          it: 'Raggio Traente',
          pl: 'Wiązka ściągająca',
          pt: 'Feixe de Tração',
          zh: 'Tractor Beam',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict tractor tokens instead of damage.',
          de:
            'Angriff: Falls dieser Angriff trifft, fügen alle [Hit]/[Critical Hit]-Ergebnisse Fangstrahlmarker anstatt Schaden zu.',
          es:
            'Ataque: Si este ataque impacta, todos los resultados [Hit]/[Critical Hit] infligen fichas de Campo de tracción en vez de daño.',
          fr:
            'Attaque : si cette attaque touche, tous les résultats [Hit]/[Critical Hit] infligent des marqueurs de rayon tracteur au lieu des dégâts.',
          it:
            'Attacco: Se questo attacco colpisce, tutti i risultati [Hit]/[Critical Hit] infliggono segnalini raggio traente invece di danni.',
          pl:
            'Atak: Jeżeli ten atak trafi, wszystkie wyniki [Hit]/[Critical Hit] przydzielają żetony wiązki ściągającej zamiast uszkodzeń.',
          pt:
            'Ataque: Se esteataque acertar, todosos resultados [Hit]/[Critical Hit] atribuem fichas de traçãoem vez de causarem dano.',
          zh:
            'Attack: If this attack hits, all [Hit]/[Critical Hit] results inflict tractor tokens instead of damage.',
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_30.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/30d60c0390122f5201422726153cb79a.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_30.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/04de326f8a6991b610ea03751373011f.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/b82f38c8481250a92c878005b77ab5bf.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/60475273c7e1aa88d335fc469779dd84.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/3f9650c40e3668c72770e885ef8430d0.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_30.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_30.jpg',
        ffg: 259,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'autoblasters',
    sides: [
      {
        title: {
          en: 'Autoblasters',
          de: 'Autoblaster',
          fr: 'Autoblasters',
          es: 'Cañones bláster automáticos',
          it: 'Blaster Automatici',
          pl: 'Autoblastery',
          pt: 'Autoblasters',
          zh: 'Autoblasters',
        },
        type: 'Cannon',
        ability: {
          en:
            "Attack: If the defender is in your [Bullseye Arc], roll 1 additional die. During the Neutralize Results step, if you are not in the defender's [Front Arc], [Evade] results do not cancel [Critical Hit] results.",
          de:
            'Angriff: Falls der Verteidiger in deinem [Bullseye Arc] ist, wirf 1 zusätzlichen Würfel. Während des Schrittes „Ergebnisse neutralisieren", falls du nicht im [Front Arc] des Verteidigers bist, negieren [Evade] -Ergebnisse keine [Critical Hit] -Ergebnisse.',
          es:
            'Ataque: Si el defensor está en tu [Bullseye Arc], tiras 1 dado adicional. Durante el paso de "Neutralizar resultados", si no estás en el [Front Arc] del defensor, los resultados [Evade] no anulan los resultados [Critical Hit] .',
          fr:
            "Attaque : si le défenseur est dans votre [Bullseye Arc], lancez 1 dé supplémentaire. Lors de l'étape « Neutraliser les résultats », si vous n'êtes pas dans le [Front Arc] du défenseur, les résultats [Evade] n'annulent pas les résultats [Critical Hit].",
          it:
            'Attack: Se il difensore è nel tuo [Bullseye Arc], tira 1 dado aggiuntivo. Durante il passo "Neutralizzare i Risultati", se non sei nel [Front Arc] del difensore, i risultati [Evade] non neutralizzano i risultati [Critical Hit].',
          pl:
            'Atak: Jeżeli obrońca znajduje się w twoim [Bullseye Arc], rzucasz 1 dodatkową kością. Jeżeli w etapie neutralizacji wyników nie znajdujesz się w [Front Arc] obrońcy, wyniki [Evade] nie anulują wyników [Critical Hit].',
          pt:
            "Attack: If the defender is in your [Bullseye Arc], roll 1 additional die. During the Neutralize Results step, if you are not in the defender's [Front Arc], [Evade] results do not cancel [Critical Hit] results.",
          zh:
            "Attack: If the defender is in your [Bullseye Arc], roll 1 additional die. During the Neutralize Results step, if you are not in the defender's [Front Arc], [Evade] results do not cancel [Critical Hit] results.",
        },
        slots: ['Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/59d4a52e3a534dd090259bd5546e7bab.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/327f88ce1f9bdd47cc9234a0a3de279e.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/3f4b44382476556bf21e025e559964f3.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/5d38ad0ce0fb4bcc2fe7309e7a41d78a.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/59d4a52e3a534dd090259bd5546e7bab.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/59d4a52e3a534dd090259bd5546e7bab.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/59d4a52e3a534dd090259bd5546e7bab.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/59d4a52e3a534dd090259bd5546e7bab.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_30.jpg',
        ffg: 578,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'underslungblastercannon',
    limited: 0,
    cost: { value: 3 },
    sides: [
      {
        title: { en: 'Underslung Blaster Cannon' },
        type: 'Cannon',
        ability: {
          en:
            'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack.  Attack ([Lock]): Your dice can be modified only by spending a lock for the default effect.',
        },
        slots: ['Cannon'],
        ffg: -1,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { factions: ['Resistance', 'Rebel Alliance'] },
      { chassis: ['t65xwing', 't70xwing'] },
    ],
  },
  {
    xws: 'syncedlasercannons',
    limited: 0,
    cost: { value: 6 },
    sides: [
      {
        title: {
          en: 'Synced Laser Cannons',
          de: 'Synchronisierte Laserkanonen',
          fr: 'Canons Laser Synchronisés',
          it: 'Synced Laser Cannons',
          pl: 'Synced Laser Cannons',
          pt: 'Synced Laser Cannons',
          zh: 'Synced Laser Cannons',
          es: 'Cañones láser sincronizados',
        },
        type: 'Cannon',
        ability: {
          en:
            'Attack: If you are calculating, the defender does not apply the range bonus.',
          de:
            'Angriff: Falls du berechnend bist, wendet der Verteidiger den Reichweitenbonus nicht an.',
          fr:
            "Attaque : si vous êtes calculateur, le défenseur n'applique pas le bonus de portée.",
          it:
            'Attack: If you are calculating, the defender does not apply the range bonus.',
          pl:
            'Attack: If you are calculating, the defender does not apply the range bonus.',
          pt:
            'Attack: If you are calculating, the defender does not apply the range bonus.',
          zh:
            'Attack: If you are calculating, the defender does not apply the range bonus.',
          es:
            'Ataque: Si estás calculando, el defensor no aplica el modificador por alcance.',
        },
        slots: ['Cannon', 'Cannon'],
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: false,
        },
        ffg: 674,
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/6927e82e460670044786cd46327cb891.png',
        },
      },
    ],
    hyperspace: true,
    epic: true,
  },
];

export default t;

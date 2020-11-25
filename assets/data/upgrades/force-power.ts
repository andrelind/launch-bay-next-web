import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'heightenedperception',
    sides: [
      {
        title: {
          en: 'Heightened Perception',
          de: 'Geschärfte Sinne',
          fr: 'Perception Renforcée',
          es: 'Percepción agudizada',
          it: 'Percezione Ampliata',
          pl: 'Wyczulone zmysły',
          pt: 'Percepção Aguçada',
          zh: '提高洞察力',
        },
        type: 'Force Power',
        ability: {
          en:
            'At the start of the Engagement Phase, you may spend 1 [Force]. If you do, engage at initiative 7 instead of your standard initiative value this phase.',
          de:
            'Zu Beginn der Kampfphase darfst du 1 [Force] ausgeben. Falls du das tust, kämpfe in dieser Phase bei Initiative 7 anstatt bei deinem normalen Initiativwert.',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 [Force]. Si lo haces, en esta fase intervienes con Iniciativa 7 en vez de tu valor de Iniciativa normal.',
          fr:
            "Au début de la phase d'engagement, vous pouvez dépenser 1 [Force]. Dans ce cas, pendant cette phase, engagez-vous à l'initiative 7 au lieu de le faire à votre valeur d'initiative standard.",
          it:
            "All'inizio della Fase di Ingaggio, puoi spendere 1 [Force]. Se lo fai, ingaggia a iniziativa 7 (invece che al tuo valore di iniziativa standard) per questa fase.",
          pl:
            'Na początku fazy walki możesz wydać 1 [Force]. Jeżeli tak zrobisz, w tej fazie walczysz z inicjatywą 7 zamiast twojej normalnej wartości inicjatywy.',
          pt:
            'No início da Fase de Engajamento,você pode gastar 1 [Force]. Se fizer isso, engaje em iniciativa 7 nesta fase em vez do seu valor de iniciativa normal.',
          zh:
            '在交战阶段开始时，你可以花费1[Force]。如果你如此做，则本阶段交战时视你的先攻值为7，取代你的基础先攻值。',
        },
        slots: ['Force Power'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_19.jpg',
        ffg: 248,
      },
    ],
    cost: { value: 3 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'instinctiveaim',
    sides: [
      {
        title: {
          en: 'Instinctive Aim',
          de: 'Instinktives Zielen',
          fr: 'Visée Instinctive',
          es: 'Puntería instintiva',
          it: 'Mira Istintiva',
          pl: 'Instynktowne celowanie',
          pt: 'Mira Instintiva',
          zh: '天生狙击手',
        },
        type: 'Force Power',
        ability: {
          en:
            'While you perform a special attack, you may spend 1 [Force] to ignore the [Focus] or [Lock] requirement.',
          de:
            'Solange du einen Spezialangriff durchführst, darfst du 1 [Force] ausgeben, um die [Focus]- oder [Lock]-Voraussetzung zu ignorieren.',
          es:
            'Mientras efectúas un ataque especial, puedes gastar 1 [Force] para ignorar el requisito [Focus] o [Lock].',
          fr:
            'Tant que vous effectuez une attaque spéciale, vous pouvez dépenser 1 [Force] pour ignorer le prérequis [Focus] ou [Lock].',
          it:
            'Mentre effettui un attacco speciale, puoi spendere 1 [Force] per ignorare i requisiti [Focus] o [Lock].',
          pl:
            'Gdy wykonujesz atak specjalny, możesz wydać 1 [Force], aby zignorować wymóg [Focus] albo [Lock].',
          pt:
            'Quando realizar um ataqueespecial, você pode gastar1 [Force] para ignorar orequisito [Focus] ou [Lock].',
          zh:
            '当你执行一次特殊攻击时，你可以花费1[Force]来无视要求中的[Focus]或[Lock]。',
        },
        slots: ['Force Power'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_20.jpg',
        ffg: 249,
      },
    ],
    cost: { value: 1 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'sense',
    sides: [
      {
        title: {
          en: 'Sense',
          de: 'Gespür',
          fr: 'Sens',
          es: 'Sentir',
          it: 'Percezione della Forza',
          pl: 'Wyczucie',
          pt: 'Pressentimento',
          zh: '感知',
        },
        type: 'Force Power',
        ability: {
          en:
            'During the System Phase, you may choose 1 ship at range 0-1 and look at its dial. If you spend 1 [Force], you may choose a ship at range 0-3 instead.',
          de:
            'Während der Systemphase darfst du 1 Schiff in Reichweite 0-1 wählen und sein Rad ansehen. Falls du 1 [Force] ausgibst, darfst du stattdessen ein Schiff in Reichweite 0-3 wählen.',
          es:
            'Durante la fase de Sistemas, puedes elegir 1 nave que tengas a alcance 0-1 y mirar su selector de maniobras. Si gastas 1 [Force], en vez de eso puedes elegir una nave que tengas a alcance 0-3.',
          fr:
            'Pendant la phase de système, vous pouvez choisir 1 vaisseau à portée 0-1 et regarder son cadran. Si vous dépensez 1 [Force], vous pouvez choisir un vaisseau à portée 0-3 à la place.',
          it:
            'Durante la Fase di Sistema, puoi scegliere 1 nave a gittata 0-1 e guardare il suo indicatore. Se spendi 1 [Force], puoi invece scegliere 1 nave a gittata 0-3.',
          pl:
            'W fazie systemowej możesz wskazać 1 statek w zasięgu 0-1 i podejrzeć jego tarczę mnewrów. Jeżeli wydasz 1 [Force], możesz zamiast tego wskazać statek w zasięgu 0-3.',
          pt:
            'Durante a Fase de Sistema, vocêpode escolher 1 nave em alcance 0-1 e olhar o disco dela. Se gastar 1 [Force], você pode escolher, em vez disso,uma nave em alcance 0-3.',
          zh:
            '在系统阶段，你可以选择1架距离0~1的战机并查看其操作盘。如果花费1[Force]，则你可以改为选择1架距离0~3的战机。',
        },
        slots: ['Force Power'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_21.jpg',
        ffg: 250,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'supernaturalreflexes',
    sides: [
      {
        title: {
          en: 'Supernatural Reflexes',
          de: 'Übernatürliche Reflexe',
          fr: 'Réflexes Surnaturels',
          es: 'Reflejos sobrenaturales',
          it: 'Riflessi Soprannaturali',
          pl: 'Nadnaturalny refleks',
          pt: 'Reflexos Sobrenaturais',
          zh: '超自然反射',
        },
        type: 'Force Power',
        ability: {
          en:
            'Before you activate, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, suffer 1 [Hit] damage.',
          de:
            'Bevor du aktiviert wirst, darfst du 1 [Force] ausgeben, um eine [Barrel Roll]- oder [Boost]-Aktion durchzuführen. Dann, falls du eine Aktion durchgeführt hast, die nicht in deiner Aktionsleiste ist, erleide 1 [Hit]-Schaden.',
          es:
            'Antes de que te actives, puedes gastar 1 [Force] para realizar una acción [Barrel Roll] o [Boost]. Luego, si la acción que has realizado no figura en tu barra de acciones, sufres 1 de daño [Hit].',
          fr:
            "Avant votre activation, vous pouvez dépenser 1 [Force] pour effectuer une action [Barrel Roll] ou [Boost]. Puis, si vous avez effectué une action qui n'est pas dans votre barre d'action, subissez 1 dégât [Hit].",
          it:
            "Prima di attivarti, puoi spendere 1 [Force] per effettuare 1 azione [Barrel Roll] o [Boost]. Poi, se lo fai e non possiedi l'azione effettuata nella barra delle azioni,subisci 1 danno [Hit].",
          pl:
            'Zanim się aktywujesz, możesz wydać 1 [Force], aby wykonać akcję [Barrel Roll] albo [Boost].Następnie, jeżeli wykonałeś akcję, której nie masz na swoim pasku akcji, przyjmujesz 1 uszkodzenie [Hit].',
          pt:
            'Antes de ativar, você podegastar 1 [Force] para realizar umaação [Barrel Roll] ou [Boost]. Então, se você realizou uma ação que não está emsua barra de ações, sofra 1 dano [Hit].',
          zh:
            '在你执行启动之前，你可以花费1[Force]来执行1个[Barrel Roll]或[Boost]行动。 然后，如果你执行的行动不在你的行动条上，承受1[Hit]伤害。',
        },
        slots: ['Force Power'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_22.jpg',
        ffg: 251,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 4, '3': 8, '4': 16, '5': 24, '6': 32 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'brilliantevasion',
    sides: [
      {
        title: {
          en: 'Brilliant Evasion',
          de: 'Brilliantes Ausweichmanöver',
          fr: 'As de la Manœuvre',
          es: 'Evasión impecable',
          it: 'Schivata Mirabolante',
          pl: 'Doskonały unik',
          pt: 'Brilliant Evasion',
          zh: 'Brilliant Evasion',
        },
        type: 'Force Power',
        ability: {
          en:
            "While you defend, if you are not in the attacker's [Bullseye Arc], you may spend 1 [Force] to change 2 of your [Focus] results to [Evade] results.",
          de:
            'Solange du verteidigst, falls du nicht im [Bullseye Arc] des Angreifers bist, darfst du 1 [Force] ausgeben, um 2 deiner [Focus]-Ergebnisse in [Evade] -Ergebnisse ändern.',
          es:
            'Mientras te defiendes, si no estás situado en el [Bullseye Arc] del atacante, puedes gastar 1 [Force] para cambiar 2 de tus resultados [Focus] por resultados [Evade] .',
          fr:
            "Tant que vous défendez, si vous n'êtes pas dans le [Bullseye Arc] de l'attaquant, vous pouvez dépenser 1 [Force] pour changer 2 de vos résultats [Focus] en résultats [Evade].",
          it:
            "Mentre difendi, se non sei nel [Bullseye Arc] dell'attaccante, puoi spendere 1 [Force] per cambiare 2 tuoi risultati [Focus] in risultati [Evade].",
          pl:
            'Gdy się bronisz i nie znajdujesz się w [Bullseye Arc] atakującego, możesz wydać 1 [Force], aby zmienić 2 z twoich wyników [Focus] na wyniki [Evade] .',
          pt:
            "While you defend, if you are not in the attacker's [Bullseye Arc], you may spend 1 [Force] to change 2 of your [Focus] results to [Evade] results.",
          zh:
            "While you defend, if you are not in the attacker's [Bullseye Arc], you may spend 1 [Force] to change 2 of your [Focus] results to [Evade] results.",
        },
        slots: ['Force Power'],
        ffg: 536,
      },
    ],
    cost: { value: 2 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'hate',
    sides: [
      {
        title: {
          en: 'Hate',
          de: 'Hass',
          fr: 'Haine',
          es: 'Odio',
          it: 'Odio',
          pl: 'Nienawiść',
          pt: 'Hate',
          zh: 'Hate',
        },
        type: 'Force Power',
        ability: {
          en: 'After you suffer 1 or more damage, recover that many [Force].',
          de:
            'Nachdem du 1 oder mehr Schaden erlitten hast, stelle ebenso viele [Force] wieder her.',
          es:
            'Después de que sufras 1 o más de daño, recuperas esa misma cantidad de [Force].',
          fr:
            'Après avoir subi 1 ou plusieurs dégâts, récupérez autant de [Force].',
          it:
            'Dopo che hai subito 1 o più danni, recupera un pari ammontare di [Force].',
          pl:
            'Gdy przyjmiesz 1 albo więcej uszkodzeń, odzyskujesz tyle samo [Force].',
          pt: 'After you suffer 1 or more damage, recover that many [Force].',
          zh: 'After you suffer 1 or more damage, recover that many [Force].',
        },
        slots: ['Force Power'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/a373c947f0a56ee4bcf4223250326dc0.jpg',
        ffg: 489,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 3, Medium: 6, Large: 9, Huge: 12 },
    },
    restrictions: [
      {
        sides: ['dark'],
        factions: [
          'Galactic Empire',
          'First Order',
          'Scum and Villainy',
          'Separatist Alliance',
        ],
      },
    ],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'predictiveshot',
    sides: [
      {
        title: {
          en: 'Predictive Shot',
          de: 'Vorausschauender Schuss',
          fr: 'Tir Prophétique',
          es: 'Tiro predictivo',
          it: 'Colpo Precognitivo',
          pl: 'Strzał wyprzedzający',
          pt: 'Predictive Shot',
          zh: 'Predictive Shot',
        },
        type: 'Force Power',
        ability: {
          en:
            'After you declare an attack, if the defender is in your [Bullseye Arc], you may spend 1 [Force]. If you do, during the Roll Defense Dice step, the defender cannot roll more defense dice than the number of your [Hit]/[Critical Hit] results.',
          de:
            'Nachdem du einen Angriff deklariert hast, falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 [Force] ausgeben. Falls du das tust, kann der Verteidiger während des Schrittes „Verteidigungswürfel werfen" nicht mehr Verteidigungswürfel werfen als die Anzahl deiner [Hit]/[Critical Hit]-Ergebnisse.',
          es:
            'Después de que declares un ataque, si el defensor está en tu [Bullseye Arc], puedes gastar 1 [Force]. Si lo haces, durante el paso de "Tirar dados de defensa", el defensor no puede tirar más dados de defensa que la cantidad total de tus resultados [Hit]/[Critical Hit].',
          fr:
            "Après avoir déclaré une attaque, si le défenseur est dans votre [Bullseye Arc], vous pouvez dépenser 1 [Force]. Dans ce cas, lors de l'étape « Lancez les dés de défense », le défenseur ne peut pas lancer plus de dés de défense que le nombre de vos résultats [Hit]/[Critical Hit].",
          it:
            'Dopo che hai dichiarato un attacco, se il difensore è nel tuo [Bullseye Arc], puoi spendere 1 [Force]. Se lo fai, durante il passo "Tirare i Dadi di Difesa", il difensore non può tirare più dadi di difesa del numero di tuoi risultati [Hit]/[Critical Hit].',
          pl:
            'Gdy zadeklarujesz atak, a obrońca znajduje się w twojej [Bullseye Arc], możeszwydać 1 [Force]. Jeżeli tak zrobisz,w etapie rzutów kośćmi obrony obrońca nie może rzucić większą liczbąkości obrony niż liczba twoichwyników [Hit]/[Critical Hit].',
          pt:
            'After you declare an attack, if the defender is in your [Bullseye Arc], you may spend 1 [Force]. If you do, during the Roll Defense Dice step, the defender cannot roll more defense dice than the number of your [Hit]/[Critical Hit] results.',
          zh:
            'After you declare an attack, if the defender is in your [Bullseye Arc], you may spend 1 [Force]. If you do, during the Roll Defense Dice step, the defender cannot roll more defense dice than the number of your [Hit]/[Critical Hit] results.',
        },
        slots: ['Force Power'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/53ceabb0e2e66e61c077145475b18dab.jpg',
        ffg: 490,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'battlemeditation',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Battle Meditation',
          de: 'Kampfmeditation',
          fr: 'Méditation de Bataille',
          es: 'Meditación de batalla',
          it: 'Meditazione da Battaglia',
          pl: 'Medytacja bitewna',
          pt: 'Battle Meditation',
          zh: 'Battle Meditation',
        },
        type: 'Force Power',
        ability: {
          en:
            'You cannot coordinate limited ships. While you perform a purple [Coordinate] action, you may coordinate 1 additional friendly non-limited ship of the same type. Both ships must perform the same action.',
          de:
            'Du kannst keine limitierten Schiffe koordinieren. Solange du eine violette [Coordinate]-Aktion durchführst, darfst du 1 zusätzliches befreundetes nicht-limitiertes Schiff desselben Typs koordinieren. Beide Schiffe müssen dieselbe Aktion durchführen.',
          es:
            'No puedes coordinar naves limitadas. Mientras realizas una acción [Coordinate] violeta, puedes coordinar 1 nave aliada que no sea limitada adicional del mismo tipo. Ambas naves deben realizar la misma acción.',
          fr:
            'Vous ne pouvez pas coordonner des vaisseaux limités. Tant que vous effectuez une action [Coordinate] violette, vous pouvez coordonner 1 vaisseau allié non-limité supplémentaire du même type. Les deux vaisseaux doivent effectuer la même action.',
          it:
            "Non puoi coordinare le navi limitate. Mentre effettui un'azione [Coordinate] viola, puoi coordinare 1 nave non limitata amica aggiuntiva dello stesso tipo. Entrambe le navi devono effettuare la stessa azione.",
          pl:
            'Nie możesz koordynować limitowanych statków. Gdy wykonujesz fioletową akcję [Coordinate], możesz skoordynować 1 dodatkowy, przyjazny, nie limitowany statek tego samego rodzaju. Oba statki muszą wykonać tę samą akcję.',
          pt:
            'You cannot coordinate limited ships. While you perform a purple [Coordinate] action, you may coordinate 1 additional friendly non-limited ship of the same type. Both ships must perform the same action.',
          zh:
            'You cannot coordinate limited ships. While you perform a purple [Coordinate] action, you may coordinate 1 additional friendly non-limited ship of the same type. Both ships must perform the same action.',
        },
        slots: ['Force Power'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        ffg: 545,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 3, '4': 4, '5': 6, '6': 8 },
    },
    restrictions: [{ factions: ['Galactic Republic'] }],
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'foresight',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Foresight',
          de: 'Vorausahnung',
          fr: 'Clairvoyance',
          es: 'Intuición premonitoria',
          it: 'Foresight',
          pl: 'Przezorność',
          pt: 'Foresight',
          zh: 'Foresight',
        },
        type: 'Force Power',
        ability: {
          en:
            'After an enemy ship executes a maneuver, you may spend 1 [Force] to perform this attack against it as a bonus attack. Attack: You may change 1 [Focus] result to a [Hit] result; your dice cannot be modified otherwise.',
          de:
            'Nachdem ein feindliches Schiff ein Manöver ausgeführt hat, darfst du 1 [Force] ausgeben, um diesen Angriff als Bonusangriff gegen es durchzuführen. Angriff: Du darfst 1 [Focus] -Ergebnis in ein [Hit] -Ergebnis ändern; anderweitig können deine Würfel nicht modifiziert werden.',
          es:
            'Después de que una nave enemiga ejecute una maniobra, puedes gastar 1 [Force] para efectuar este ataque contra esa nave como un ataque adicional. Ataque: Puedes cambiar 1 resultado [Focus] por un resultado [Hit] ; tus dados no pueden ser modificados de ninguna otra manera.',
          fr:
            "Après qu'un vaisseau ennemi a exécuté une manœuvre, vous pouvez dépenser 1 [Force] pour effectuer cette attaque contre lui en tant qu'attaque bonus. Attaque : vous pouvez changer\n1 résultat [Focus] en un résultat [Hit] ; vos dés ne peuvent pas être modifiés autrement.",
          it:
            'After an enemy ship executes a maneuver, you may spend 1 [Force] to perform this attack against it as a bonus attack. Attack: You may change 1 [Focus] result to a [Hit] result; your dice cannot be modified otherwise.',
          pl:
            'Gdy wrogi statek wykona manewr, możesz wydać 1 [Force], aby wykonać przeciwko niemu poniższy atak jako dodatkowy atak. Atak: Możesz zmienić 1 wynik [Focus] na wynik [Hit]; twoje kości nie mogą być modyfikowane w inny sposób.',
          pt:
            'After an enemy ship executes a maneuver, you may spend 1 [Force] to perform this attack against it as a bonus attack. Attack: You may change 1 [Focus] result to a [Hit] result; your dice cannot be modified otherwise.',
          zh:
            'After an enemy ship executes a maneuver, you may spend 1 [Force] to perform this attack against it as a bonus attack. Attack: You may change 1 [Focus] result to a [Hit] result; your dice cannot be modified otherwise.',
        },
        slots: ['Force Power'],
        attack: {
          arc: 'Bullseye Arc',
          value: 2,
          minrange: 1,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 613,
      },
    ],
    cost: { value: 4 },
    hyperspace: true,
    epic: true,
  },
  {
    xws: 'precognitivereflexes',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Precognitive Reflexes',
          de: 'Hellseherische Reflexe',
          fr: 'Réflexes Prémonitoires',
          es: 'Reflejos precognitivos',
          it: 'Precognitive Reflexes',
          pl: 'Proroczy refleks',
          pt: 'Precognitive Reflexes',
          zh: 'Precognitive Reflexes',
        },
        type: 'Force Power',
        ability: {
          en:
            'After you reveal your dial, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, gain 1 strain token. If you do, you cannot perform another action during your activation.',
          de:
            'Nachdem du dein Rad aufgedeckt hast, darfst du 1 [Force] ausgeben, um eine [Barrel Roll] oder [Boost] -Aktion durchzuführen. Dann, falls du eine Aktion durchgeführt hast, die nicht in deiner Aktionsleiste ist, erhalte 1 Anstrengungsmarker. Falls du das tust, kannst du während deiner Aktivierung keine weitere Aktion durchführen.',
          es:
            'Después de que reveles tu selector, puedes gastar 1 [Force] para realizar una acción [Barrel Roll] o [Boost] . Luego, si has realizado una acción que no figura en tu barra de acciones, recibes 1 ficha de Sobresfuerzo. Si haces esto, no puedes realizar ninguna otra acción durante tu activación.',
          fr:
            "Après avoir révélé votre cadran, vous pouvez dépenser 1 [Force] pour effectuer une action [Barrel Roll] ou [Boost]. Puis, si vous avez effectué une action qui n'est pas dans votre barre d'action, gagnez 1 marqueur de contrainte. Si vous agissez ainsi, vous ne pouvez pas effectuer d'autre action pendant votre activation.",
          it:
            'After you reveal your dial, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, gain 1 strain token. If you do, you cannot perform another action during your activation.',
          pl:
            'Gdy odsłonisz swoją tarczę manewrów, możesz wydać 1 [Force], aby wykonać akcję [Barrel Roll] albo [Boost]. Następnie, jeżeli wykonałeś akcję, której nie masz na swoim pasku akcji, otrzymujesz 1 żeton przeciążenia. Jeżeli tak zrobisz, nie możesz już wykonać kolejnej akcji podczas swojej aktywacji.',
          pt:
            'After you reveal your dial, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, gain 1 strain token. If you do, you cannot perform another action during your activation.',
          zh:
            'After you reveal your dial, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, gain 1 strain token. If you do, you cannot perform another action during your activation.',
        },
        slots: ['Force Power'],
        ffg: 614,
      },
    ],
    restrictions: [{ baseSizes: ['Small'] }],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 4, '4': 7, '5': 10, '6': 13 },
    },
    hyperspace: false,
    epic: true,
  },
  {
    xws: 'patience',
    limited: 0,
    cost: { value: 2 },
    sides: [
      {
        title: { en: 'Patience' },
        type: 'Force Power',
        ability: {
          en:
            'At the start of the Engagement Phase, if there is an enemy ship in your [Front Arc], you may gain 1 deplete token to recover 1 [Force].',
        },
        slots: ['Force Power'],
        ffg: 849,
      },
    ],
    hyperspace: true,
    epic: false,
    restrictions: [{ sides: ['light'] }],
  },
  {
    limited: 0,
    xws: 'extrememaneuvers',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'While you perform a [Boost] action, you may spend 1 [Force] to use the turn ([Turn Left] or [Turn Right]) template instead.',
        },
        title: { en: 'Extreme Maneuvers' },
        type: 'Force Power',
        slots: ['Force Power'],
        ffg: 848,
      },
    ],
    cost: { value: 4 },
  },
];

export default t;

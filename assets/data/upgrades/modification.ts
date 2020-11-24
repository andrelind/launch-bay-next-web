import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'ablativeplating',
    sides: [
      {
        title: {
          en: 'Ablative Plating',
          de: 'Ablative Panzerung',
          fr: 'Blindage Ablatif',
          es: 'Blindaje ablativo',
          it: 'Blindatura Ablativa',
          pl: 'Poszycie ablacyjne',
          pt: 'Revestimento Ablativo',
          zh: 'Ablative Plating',
        },
        type: 'Modification',
        ability: {
          en:
            'Before you would suffer damage from an obstacle or from a friendly bomb detonating, you may spend 1 [Charge]. If you do, prevent 1 damage.',
          de:
            'Bevor du Schaden durch ein Hindernis oder die Detonation einer befreundeten Bombe erleiden würdest, darfst du 1 [Charge] ausgeben. Falls du das tust, verhindere 1 Schaden.',
          es:
            'Antes de que vayas a sufrir daño causado por un obstáculo o por la detonación de una bomba aliada, puedes gastar 1 [Charge]. Si lo haces, evitas sufrir 1 de ese daño.',
          fr:
            "Avant de subir des dégâts à cause d'un obstacle ou de l'explosion d'une bombe alliée, vous pouvez dépenser 1 [Charge]. Dans ce cas, prévenez 1 dégât.",
          it:
            'Prima che tu stia per subire danni da un ostacolo o da una bomba amica che detona, puoi spendere 1 [Charge]. Se lo fai, previeni 1 danno.',
          pl:
            'Zanim przyjmiesz uszkodzenia od przeszkody albo wybuchu przyjaznej bomby, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, zapobiegasz 1 uszkodzeniu.',
          pt:
            'Antes de sofrer dano de um obstáculo ou da detonação de uma bomba amiga, você pode gastar 1 [Charge]. Se fizer isso, evite 1 dano.',
          zh:
            'Before you would suffer damage from an obstacle or from a friendly bomb detonating, you may spend 1 [Charge]. If you do, prevent 1 damage.',
        },
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_68.jpg',
        ffg: 292,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'advancedslam',
    sides: [
      {
        title: {
          en: 'Advanced SLAM',
          de: 'Verbesserter SLAM',
          fr: 'MASL Avancé',
          es: 'Motor sublumínico avanzado',
          it: 'SLAM Avanzato',
          pl: 'Zaawansowany SLAM',
          pt: 'SLAM Avançado',
          zh: 'Advanced SLAM',
        },
        type: 'Modification',
        ability: {
          en:
            'After you perform a [Slam] action, if you fully executed the maneuver, you may perform a white action on your action bar, treating that action as red.',
          de:
            'Nachdem du eine [Slam]-Aktion durchgeführt hast, falls du das Manöver vollständig ausgeführt hast, darfst du eine weiße Aktion aus deiner Aktionsleiste durchführen, wobei du jene Aktion behandelst, als wäre sie rot.',
          es:
            'Después de que efectúes una acción [Slam], si has ejecutado completamente la maniobra, puedes realizar una acción blanca que figure en tu barra de acciones, considerando esa acción como si fuera roja.',
          fr:
            "Après avoir effectué une action [Slam], si vous avez entièrement exécuté la manœuvre, vous pouvez effectuer une action blanche de votre barre d'action, en la considérant comme rouge.",
          it:
            "Dopo che hai effettuato un'azione [Slam], se hai eseguito completamente la manovra, puoi effettuare 1 azione bianca nella tua barra delle azioni considerandola come se fosse rossa.",
          pl:
            'Gdy wykonasz akcję [Slam], jeśli wykonałeś pełny manewr, możesz wykonać białą akcję z twojego paska akcji, traktując ją tak, jak gdyby była czerwona.',
          pt:
            'Após realizar uma ação [Slam], se você executou completamente a manobra,você pode realizar uma ação brancade sua barra de ações, tratando-acomo uma ação vermelha.',
          zh:
            'After you perform a [Slam] action, if you fully executed the maneuver, you may perform a white action on your action bar, treating that action as red.',
        },
        slots: ['Modification'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_69.jpg',
        ffg: 293,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'SLAM' } }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'afterburners',
    sides: [
      {
        title: {
          en: 'Afterburners',
          de: 'Nachbrenner',
          fr: 'Postcombustion',
          es: 'Postquemadores',
          it: 'Postbruciatori',
          pl: 'Dopalacze',
          pt: 'Pós-Combustores',
          zh: '复燃室',
        },
        type: 'Modification',
        ability: {
          en:
            'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [Boost] action, even while stressed.',
          de:
            'Nachdem du ein Manöver mit Geschwindigkeit 3-5 vollständig ausgeführt hast, darfst du 1 [Charge] ausgeben, um eine [Boost]-Aktion durchzuführen, auch solange du gestresst bist.',
          es:
            'Después de que ejecutes completamente una maniobra de velocidad 3-5, puedes gastar 1 [Charge] para realizar una acción [Boost], incluso mientras estás bajo tensión.',
          fr:
            'Après avoir entièrement exécuté une manœuvre à vitesse 3-5, vous pouvez dépenser 1 [Charge] pour effectuer une action [Boost], même tant que vous êtes stressé.',
          it:
            'Dopo che hai eseguito completamente una manovra a velocità 3-5, puoi spendere 1 [Charge] per effettuare 1 azione [Boost], anche mentre sei in tensione.',
          pl:
            'Gdy wykonasz pełny manewr o prędkości 3-5, możesz wydać 1 [Charge], aby wykonać akcję [Boost] nawet wtedy, gdy posiadasz żeton stresu.',
          pt:
            'Após executar completamente uma manobra de velocidade3-5, você pode gastar 1 [Charge] para realizar uma ação [Boost], mesmo se estiver estressado.',
          zh:
            '在你完全地执行一个速度3~5的移动后，你可以花费1 [Charge] 来执行一个[Boost]行动，即使战机此时处于压力状态。',
        },
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_70.jpg',
        ffg: 294,
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 4, '3': 4, '4': 5, '5': 6, '6': 7 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'electronicbaffle',
    sides: [
      {
        title: {
          en: 'Electronic Baffle',
          de: 'Elektronischer Dämpfer',
          fr: 'Déflecteur Électronique',
          es: 'Regulador electrónico',
          it: 'Dispersore Elettronico',
          pl: 'Deflektor elektroniczny',
          pt: 'Desviador Eletrônico',
          zh: 'Electronic Baffle',
        },
        type: 'Modification',
        ability: {
          en:
            'During the End Phase, you may suffer 1 [Hit] damage to remove 1 red token.',
          de:
            'Während der Endphase darfst du 1 [Hit]-Schaden erleiden, um 1 roten Marker zu entfernen.',
          es:
            'Durante la fase Final, puedes sufrir 1 de daño [Hit] para retirar 1 ficha roja.',
          fr:
            'Pendant la phase de dénouement, vous pouvez subir 1 dégât [Hit] pour retirer 1 marqueur rouge.',
          it:
            'Durante la Fase Finale, puoi subire 1 danno [Hit] per rimuovere 1 segnalino rosso.',
          pl:
            'W fazie końcowej możesz przyjąć 1 uszkodzenie [Hit], aby usunąć 1 czerwony żeton.',
          pt:
            'Durante a Fase Final, vocêpode sofrer 1 dano [Hit]para remover 1 ficha vermelha.',
          zh:
            'During the End Phase, you may suffer 1 [Hit] damage to remove 1 red token.',
        },
        slots: ['Modification'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_71.jpg',
        ffg: 295,
      },
    ],
    cost: { value: 2 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'engineupgrade',
    sides: [
      {
        title: {
          en: 'Engine Upgrade',
          de: 'Verbessertes Triebwerk',
          fr: 'Moteurs Améliorés',
          es: 'Motor mejorado',
          it: 'Miglioria ai Motori',
          pl: 'Ulepszenie silnika',
          pt: 'Melhoria de Motor',
          zh: 'Engine Upgrade',
        },
        type: 'Modification',
        text: {
          en:
            'Large military forces such as the Galactic Empire have standardized engines, but individual pilots and small organizations often replace the power couplings, add thrusters, or use high-performance fuel to get extra push out of their engines.',
          de:
            'Große Armeen wie das Militär des Galaktischen Imperiums haben meist standardisierte Triebwerke. Freischaffende Piloten und kleinere Organisationen ersetzen oft Energiekopplungen,',
          fr:
            "Les armées de grande taille comme celles de l'Empire Galactique ont des vaisseaux équipés de moteurs standardisés, mais les pilotes indépendants ou les petites organisations remplacent souvent les accouplements, rajoutent des propulseurs ou utilisent du carburant haute performance afin d'obtenir une poussée plus forte.",
          es:
            'Las grandes fuerzas militares como las del Imperio Galáctico utilizan componentes de motores estandarizados, pero los pilotos individuales y las organizaciones pequeñas suelen reemplazar los acoplamientos de energía, añadir propulsores o emplear combustible de alto rendimiento para aumentar las prestaciones de sus motores.',
          it:
            "Le più grandi forzemilitari come l'Impero Galattico fanno uso di motori standardizzati, ma i singoli piloti e le organizzazioni spesso sostituiscono i giunti di potenza, aggiungono propulsori o fanno uso di combustibile ad alto rendimento per sfruttare al massimo la potenza dei loro motori.",
          pl:
            'Duże siły zbrojne, np. Imperium Galaktycznego, stosują standardowe silniki, ale piloci małych organizacji bardzo często wprowadzają daleko posunięte modyfikacje w systemach dystrybucji mocy, dodają silniki manewrowe, a czasem nawet stosują specjalne rodzaje paliwa, aby wycisnąć z jednostek napędowych, ile tylko się da.',
          pt:
            'Grandes forças militares como o Império Galático possuem motores padronizados, mas alguns pilotos e organizações pequenas normalmente substituem os conectores de energia, adicionam propulsores ou usam combustível de alto rendimento para turbinar seus motores.',
          zh:
            'Large military forces such as the Galactic Empire have standardized engines, but individual pilots and small organizations often replace the power couplings, add thrusters, or use high-performance fuel to get extra push out of their engines.',
        },
        slots: ['Modification'],
        grants: [{ action: { type: 'Boost', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_72.jpg',
        ffg: 296,
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 4, Large: 7, Huge: 10 },
    },
    restrictions: [{ action: { type: 'Boost', difficulty: 'Red' } }],
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'hullupgrade',
    sides: [
      {
        title: {
          en: 'Hull Upgrade',
          de: 'Verstärkte Hülle',
          fr: 'Coque Améliorée',
          es: 'Blindaje mejorado',
          it: 'Miglioria allo Scafo',
          pl: 'Ulepszenie kadłuba',
          pt: 'Melhoria de Casco',
          zh: '升级机体',
        },
        type: 'Modification',
        text: {
          en:
            'For those who cannot afford an enhanced shield generator, bolting additional plates onto the hull of a ship can serve as an adequate substitute.',
          de:
            'Auch wer sich keinen verbesserten Schildgenerator leisten kann, muss nicht auf erhöhten Schutz verzichten, sondern kann sich mit zusätzlichen Panzerplatten an der Schiffshülle behelfen.',
          fr:
            "Quand on ne peut pas s'offrir un générateur de boucliers améliorés, souder des plaques de blindage sur la coque du vaisseau peut être un bon substitut.",
          es:
            'Para quienes no pueden permitirse instalar un generador de escudos más potente, añadir capas adicionales de blindaje al casco de una nave puede servirles de alternativa adecuada.',
          it:
            'Per chi non può permettersi un generatore di scudo potenziato, saldare ulteriori strati di piastre sullo scafo di una nave può fungere da alternativa adeguata.',
          pl:
            'Gdy kogoś nie stać na zaawansowany generator osłon, zawsze może zamontować na kadłubie dodatkowe płyty pancerza.',
          pt:
            'Aqueles que não podemadquirir um bom gerador de escudo, adicionam placas encouraçadas adicionais aocasco da nave para compensar.',
          zh:
            '对于囊中羞涩的客户来说，在战机机体上用螺栓连接额外的金属板，足够作为增强护盾发生器的平价替代品。',
        },
        slots: ['Modification'],
        grants: [{ stat: 'hull', value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_73.jpg',
        ffg: 297,
      },
    ],
    cost: { variable: 'agility', values: { '0': 2, '1': 3, '2': 5, '3': 7 } },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'munitionsfailsafe',
    sides: [
      {
        title: {
          en: 'Munitions Failsafe',
          de: 'Ausfallsichere Munition',
          fr: 'Munitions à Sûreté Intégrée',
          es: 'Munición a prueba de fallos',
          it: 'Sicura per Munizioni',
          pl: 'Zabezpieczenie amunicji',
          pt: 'Abortar Disparo',
          zh: 'Munitions Failsafe',
        },
        type: 'Modification',
        ability: {
          en:
            'While you perform a [Torpedo] or [Missile] attack, after rolling attack dice, you may cancel all dice results to recover 1 [Charge] you spent as a cost for the attack.',
          de:
            'Solange du einen [Torpedo]- oder [Missile]-Angriff durchführst, nachdem du die Angriffswürfel geworfen hast, darfst du alle Würfelergebnisse negieren, um 1 [Charge] wiederherzustellen, die du als Kosten für den Angriff ausgegeben hast.',
          es:
            'Mientras efectúas un ataque [Torpedo] o [Missile], después de tirar los dados de ataque, puedes anular todos los resultados de los dados para recuperar 1 [Charge] que hayas gastado como coste para el ataque.',
          fr:
            "Tant que vous effectuez une attaque [Torpedo] ou [Missile], après avoir lancé les dés d'attaque, vous pouvez annuler tous les résultats des dés pour récupérer 1 [Charge] que vous avez dépensée comme coût pour l'attaque.",
          it:
            "Mentre effettui un attacco [Torpedo] o [Missile], dopo aver tirato i dadi di attacco, puoi annullare tutti i risultati dei dadi per recuperare 1 [Charge] spesa come costo dell'attacco.",
          pl:
            'Gdy wykonujesz atak [Torpedo] albo [Missile], po wykonaniu rzutu ataku możesz anulować wszystkie wyniki, aby odzyskać 1 [Charge] wydany jako koszt ataku.',
          pt:
            'Quando realizar um ataque [Torpedo] ou [Missile], após rolar os dados de ataque, você pode cancelar todos os resultados dos dados para recuperar 1 [Charge] que gastou como custo do ataque.',
          zh:
            'While you perform a [Torpedo] or [Missile] attack, after rolling attack dice, you may cancel all dice results to recover 1 [Charge] you spent as a cost for the attack.',
        },
        slots: ['Modification'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_74.jpg',
        ffg: 298,
      },
    ],
    cost: { value: 1 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'shieldupgrade',
    sides: [
      {
        title: {
          en: 'Shield Upgrade',
          de: 'Verbesserte Schilde',
          fr: 'Boucliers Améliorés',
          es: 'Escudos mejorados',
          it: 'Miglioria agli Scudi',
          pl: 'Ulepszenie osłon',
          pt: 'Melhoria de Escudo',
          zh: '升级护盾',
        },
        type: 'Modification',
        text: {
          en:
            "Deflector shields are a substantial line of defense on most starships beyond the lightest fighters. While enhancing a ship's shield capacity can be costly, all but the most confident or reckless pilots see the value in this sort of investment.",
          de:
            'Deflektor­schilde sind der wichtigste Verteidigungsmechanismus der meisten Raumschiffe, abgesehen von extrem leichten Jägern. Eine Verbesserung der Schildkapazität ist eine kostspielige, aber durchaus',
          fr:
            "Les écrans déflecteurs sont la principale protection de la plupart des vaisseaux, à l'exception des chasseurs légers. Améliorer les boucliers d'un vaisseau peut se révéler coûteux, mais seuls les pilotes les plus présomptueux, ou les plus téméraires, songent à se passer de ce type d'investissement.",
          es:
            'Los escudos deflectores son una importantísima línea de defensa de prácticamente todas las astronaves a excepción de los cazas más ligeros. Aunque mejorar los escudos de una nave puede ser caro, sólo los pilotos más confiados o temerarios desdeñan este tipo de inversión.',
          it:
            'Gli scudi deflettori costituiscono una linea di difesa essenziale per quasi tutte le astronavi al di fuori dei caccia più leggeri. Anche se potenziare la capacità di scudi di una nave può essere costoso, soltanto i piloti più arroganti o più avventati ignorano la validità di questo tipo di investimento.',
          pl:
            'Osłony to dość skuteczne systemy obrony stosowane na większości statków kosmicznych, poza najlżejszymi myśliwcami. Ulepszenie osłon bywa kosztowne, ale niemal wszyscy piloci, za wyjątkiem tych najbardziej pewnych siebie albo lekkomyślnych, doceniają zalety takiej inwestycji.',
          pt:
            'Escudos defletores são uma linha defesa fundamental para a maioria das naves estelares maiores que os caças leves. Apesar de geradores de escudo serem caros, todos os pilotos, exceto talvez os mais confiantes ou irresponsáveis, sabem do valor inestimável deste investimento.',
          zh:
            '除最轻的战斗机外，大多数的星际飞船都会选择偏导护盾作为防御分支。优化战机护盾性能时得付一大笔钱，然而只有最自信，或最鲁莽的驾驶员才会忽视这项投资的价值。',
        },
        slots: ['Modification'],
        grants: [{ stat: 'shields', value: 1 }],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_75.jpg',
        ffg: 299,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'staticdischargevanes',
    sides: [
      {
        title: {
          en: 'Static Discharge Vanes',
          de: 'Elektrostatischer Entlader',
          fr: 'Ailettes Statiques de Décharge',
          es: 'Aparejos de descarga electrostática',
          it: 'Antenne di Scarica Elettrostatica',
          pl: 'Dyfuzory statyczne',
          pt: 'Descarga Estática',
          zh: 'Static Discharge Vanes',
        },
        type: 'Modification',
        ability: {
          en:
            'Before you would gain 1 ion or jam token, if you are not stressed, you may choose another ship at range 0-1 and gain 1 stress token. If you do, the chosen ship gains that ion or jam token instead, then you suffer 1 [Hit] damage.',
          de:
            'Falls du einen Ionen- oder Störsignal-marker erhalten würdest, darfst du ein Schiff in Reichweite 0-1 wählen. Falls du das tust, erhalte 1 Stressmarker und transferiere 1 Ionen- oder Störsignalmarker auf jenes Schiff.',
          es:
            'Antes de que vayas de recibir una ficha de Iones o Interferencia, si no estás bajo tensión, puedes elegir otra nave que tengas a alcance 0─1 y recibir 1 ficha de Tensión. Si lo haces, la nave que has elegido recibe esa ficha de Iones o Interferencia en tu lugar.',
          fr:
            'Si vous devez gagner un marqueur ionique ou de brouillage, vous pouvez choisir un vaisseau à portée 0-1. Dans ce cas, gagnez 1 marqueur de stress et transférez 1 marqueur ionique ou de brouillage à ce vaisseau.',
          it:
            'Se stai per ottenere un segnalinoioni o disturbo, puoi scegliere 1 nave a gittata 0-1. Se lo fai, ottieni 1 segnalino tensione e trasferisci 1 segnalino ioni o disturbo su quella nave.',
          pl:
            'Gdy masz otrzymać 1 żeton jonizacji albo zakłócania, jeżeli nie posiadasz żetonu stresu, możesz wskazać inny statek w zasięgu 0-1 i otrzymać żeton stresu. Jeżeli tak zrobisz, wskazany statek otrzymuje ten żeton jonizacji albo zakłócania.',
          pt:
            'Se você for receber uma ficha de íon ou de interferência, você pode escolher uma nave em alcance 0-1. Se fizer isso, receba 1 ficha de estresse e transfira1 ficha de íon ou de interferência paraa nave escolhida',
          zh:
            'If you would gain an ion or jam token, you may choose a ship at range 0-1. If you do, gain 1 stress token and transfer 1 ion or jam token to that ship.',
        },
        slots: ['Modification'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_76.jpg',
        ffg: 300,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'stealthdevice',
    sides: [
      {
        title: {
          en: 'Stealth Device',
          de: 'Tarnvorrichtung',
          fr: "Système d'Occultation",
          es: 'Dispositivo de sigilo',
          it: 'Dispositivo Schermante',
          pl: 'Urządzenie maskujące',
          pt: 'Dispositivo de Ocultamento',
          zh: '隐秘装置',
        },
        type: 'Modification',
        ability: {
          en:
            'While you defend, if your [Charge] is active, roll 1 additional defense die. After you suffer damage, lose 1 [Charge].',
          de:
            'Solange du verteidigst, falls deine [Charge] aktiv ist, wirf 1 zusätzlichen Verteidigungswürfel. Nachdem du Schaden erlitten hast, verliere 1 [Charge].',
          es:
            'Mientras te defiendes, si tu [Charge] está activa, tira 1 dado de defensa adicional. Después de que sufras daño, pierdes 1 [Charge].',
          fr:
            'Tant que vous défendez, si votre [Charge] est active, lancez 1 dé de défense supplémentaire. Après avoir subi des dégâts, perdez 1 [Charge].',
          it:
            'Mentre difendi, se la tua [Charge] è attiva, tira 1 dado di difesa aggiuntivo. Dopo che hai subito danni, perdi 1 [Charge].',
          pl:
            'Gdy się bronisz i twój [Charge] jest aktywny, rzucasz dodatkową kością obrony. Gdy przyjmiesz uszkodzenie, tracisz 1 [Charge].',
          pt:
            'Quando você defender, se sua [Charge] estiver ativa, role 1 dado de defesa adicional. Após sofrer dano,perca 1 [Charge].',
          zh:
            '当你进行防御时，如果你的[Charge]已激活，额外投1个防御骰。 在你承受伤害后，失去1[Charge]。',
        },
        slots: ['Modification'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_77.jpg',
        ffg: 301,
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tacticalscrambler',
    sides: [
      {
        title: {
          en: 'Tactical Scrambler',
          de: 'Taktischer Scrambler',
          fr: 'Brouilleur Tactique',
          es: 'Inhibidor táctico',
          it: 'Distorsore Tattico',
          pl: 'Zakłócacz taktyczny',
          pt: 'Embaralhador Tático',
          zh: '战略扰频器',
        },
        type: 'Modification',
        ability: {
          en:
            "While you obstruct an enemy ship's attack, the defender rolls 1 additional defense die.",
          de:
            'Solange du den Angriff eines feindlichen Schiffes versperrst, wirft der Verteidiger 1 zusätzlichen Verteidigungswürfel.',
          es:
            'Mientras obstruyes el ataque de una nave enemiga, el defensor tira 1 dado de defensa adicional.',
          fr:
            "Tant que vous gênez l'attaque d'un vaisseau ennemi, le défenseur lance 1 dé de défense supplémentaire.",
          it:
            "Mentre ostruisci l'attacco di una nave nemica, il difensore tira 1 dado di difesa aggiuntivo.",
          pl:
            'Gdy przesłaniasz cel ataku wrogiemu statkowi, obrońca rzuca 1 dodatkową kością obrodny.',
          pt:
            'Quando você obstruir o ataquede uma nave inimiga, o defensorrola 1 dado de defesa adicional.',
          zh: '当你阻碍一架敌机的攻击时，防御方额外投1个防御骰。',
        },
        slots: ['Modification'],
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_78.jpg',
        ffg: 302,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'imperviumplating',
    sides: [
      {
        title: {
          en: 'Impervium Plating',
          de: 'Impervium-Panzerung',
          fr: 'Blindage en Impervium',
          es: 'Blindaje de impenetranio',
          it: 'Blindatura in Impervium',
          pl: 'Poszycie z imperwium',
          pt: 'Impervium Plating',
          zh: 'Impervium Plating',
        },
        type: 'Modification',
        ability: {
          en:
            'Before you would be dealt a faceup Ship damage card, you may spend 1 [Charge] to discard it instead.',
          de:
            'Bevor dir eine offene Schiff-Schadenskarte zugeteilt werden würde, darfst du 1 [Charge] ausgeben, um sie stattdessen abzulegen.',
          es:
            'Antes de que vayas a recibir una carta de Daño Nave boca arriba, puedes gastar 1 [Charge] para descartarla en vez de recibirla.',
          fr:
            "Avant qu'une carte de dégât face visible Vaisseau ne vous soit attribuée, vous pouvez dépenser 1 [Charge] pour la défausser à la place.",
          it:
            'Prima che ti stia per essere inflitta una carta danno Nave a faccia in su, puoi invece spendere 1 [Charge] per scartarla.',
          pl:
            'Zanim otrzymasz odkrytą kartę uszkodzenia Statek, możesz wydać 1 [Charge], aby zamiast tego ją odrzucić.',
          pt:
            'Before you would be dealt a faceup Ship damage card, you may spend 1 [Charge] to discard it instead.',
          zh:
            'Before you would be dealt a faceup Ship damage card, you may spend 1 [Charge] to discard it instead.',
        },
        charges: { value: 2, recovers: 0 },
        slots: ['Modification'],
        ffg: 534,
      },
    ],
    restrictions: [{ chassis: ['belbullab22starfighter'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 4 },
  },
  {
    xws: 'synchronizedconsole',
    limited: 0,
    sides: [
      {
        title: {
          en: 'Synchronized Console',
          de: 'Synchronisierte Steuerkonsole',
          fr: 'Console Synchronisée',
          es: 'Panel de mandos sincronizado',
          it: 'Console Sincronizzata',
          pl: 'Zsynchronizowana konsola',
          pt: 'Synchronized Console',
          zh: 'Synchronized Console',
        },
        type: 'Modification',
        ability: {
          en:
            'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
          de:
            'Nachdem du einen Angriff durchgeführt hast, darfst du ein befreundetes Schiff in Reichweite 1 oder ein befreundetes Schiff mit der Aufwertung Synchronisierte Steuerkonsole in Reichweite 1-3 wählen und eine Zielerfassung ausgeben, die du auf dem Verteidiger hast. Falls du das tust, darf das von dir gewählte Schiff den Verteidiger als Ziel erfassen.',
          es:
            'Después de que efectúes un ataque, puedes elegir una nave aliada que tengas a alcance 1 o una nave aliada con la mejora Panel de mandos sincronizado que tengas a alcance 1-3 y gastar un Blanco fijado que tengas sobre el defensor. Si lo haces, la nave aliada que elegiste puede obtener un Blanco fijado sobre el defensor.',
          fr:
            "Après avoir effectué une attaque, vous pouvez choisir un vaisseau allié à portée 1 ou un vaisseau allié qui possède l'amélioration Console Synchronisée à portée 1-3 et dépenser un verrouillage que vous avez sur le défenseur. Dans ce cas, le vaisseau allié que vous avez choisi peut verrouiller le défenseur.",
          it:
            'Dopo che hai effettuato un attacco, puoi scegliere 1 nave amica a gittata 1 oppure 1 nave amica con la miglioria Console Sincronizzata a gittata 1-3 e spendere un bersaglio acquisito sul difensore. Se lo fai, la nave amica scelta può acquisire il difensore come bersaglio.',
          pl:
            'Gdy wykonasz atak, możesz wskazać przyjazny statek w zasięgu 1 albo przyjazny statek z rozwinięciem Zsynchronizowana konsola w zasięgu 1-3, a następnie wydać twoje namierzenie z obrońcy. Jeżeli tak zrobisz, wskazany przyjazny statek może namierzyć tego obrońcę.',
          pt:
            'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
          zh:
            'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
        },
        slots: ['Modification'],
        ffg: 554,
      },
    ],
    restrictions: [
      { factions: ['Galactic Republic'] },
      { action: { type: 'Lock' } },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 1 },
  },
  {
    limited: 0,
    xws: 'sparepartscanisters',
    sides: [
      {
        title: {
          en: 'Spare Parts Canisters',
          de: '[Astromech] Ersatzteilkanister',
          fr: 'Caisses de Pièces Détachées',
          es: 'Contenedores de recambios',
          it: 'Cilindri di Parti di Ricambio',
          pl: 'Zasobniki części zamiennych',
          pt: 'Spare Parts Canisters',
          zh: 'Spare Parts Canisters',
        },
        type: 'Modification',
        ability: {
          en:
            'Action: Spend 1 [Charge] to recover 1 charge on one of your equipped [Astromech] upgrades. Action: Spend 1 [Charge] to drop 1 spare parts, then break all locks assigned to you.',
          de:
            'Aktion: Gib 1 [Charge] aus, um 1 Ladung von 1 deiner ausgerüsteten [Astromech]-Aufwertungen wiederherzustellen. Aktion: Gib 1 [Charge] aus, um 1 Ersatzteil abzuwerfen, dann verliere alle Zielerfassungen, die dir zugeordnet sind.',
          es:
            'Acción: Gasta 1 [Charge] para recuperar 1 carga sobre una de tus mejoras [Astromech] equipadas. Acción: Gasta 1 [Charge] para soltar 1 ficha de Piezas de recambio y luego interrumpe todos los Blancos fijados asignados a ti.',
          fr:
            "Action : dépensez 1 [Charge] pour récupérer 1 charge sur l'une de vos améliorations [Astromech] équipées. Action : dépensez 1 [Charge] pour larguer 1 pièces détachées, puis rompez tous les verrouillages qui vous sont assignés.",
          it:
            'Azione: Spendi 1 [Charge] per recuperare 1 carica su una miglioria [Astromech] di cui sei dotato. Azione: Spendi 1 [Charge] per sganciare 1 cumulo di parti di ricambio, poi perdi tutti i bersagli acquisiti assegnati a te.',
          pl:
            'Akcja: Wydaj 1 [Charge] , aby odzyskać 1 ładunek na rozwinięciu [Astromech]w które jesteś wyposażony. Akcja: Wydaj 1 [Charge], aby zrzucić 1 części zamienne, a następnie przerwać wszystkie przypisane do ciebie namierzenia.',
          pt:
            'Action: Spend 1 [Charge] to recover 1 charge on one of your equipped [Astromech] upgrades. Action: Spend 1 [Charge] to drop 1 spare parts, then break all locks assigned to you.',
          zh:
            'Action: Spend 1 [Charge] to recover 1 charge on one of your equipped [Astromech] upgrades. Action: Spend 1 [Charge] to drop 1 spare parts, then break all locks assigned to you.',
        },
        charges: { value: 1, recovers: 0 },
        slots: ['Modification'],
        ffg: 550,
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 4 },
    restrictions: [{ equipped: ['Astromech'] }],
  },
  {
    limited: 0,
    xws: 'delayedfuses',
    sides: [
      {
        title: {
          en: 'Delayed Fuses',
          de: 'Zeitverzögerter Zünder',
          fr: 'Détonateur à Retardement',
          es: 'Espoletas retardadas',
          it: 'Inneschi a Tempo',
          pl: 'Zapalnik czasowy',
          pt: 'Delayed Fuses',
          zh: 'Delayed Fuses',
        },
        type: 'Modification',
        ability: {
          en:
            'After you drop, launch, or place a bomb or mine, you may place 1 fuse marker on that device.',
          de:
            'Nachdem du eine Bombe oder Mine abgeworfen, gestartet oder platziert hast, darfst du 1 Zeitzünder auf jenem Gerät platzieren.',
          es:
            'Después de que sueltes, lances o coloques una bomba o mina, puedes colocar 1 indicador de Espoleta sobre ese dispositivo.',
          fr:
            "Après avoir largué, lancé ou placé une bombe ou une mine, vous pouvez placer dessus 1 marqueur d'amorce.",
          it:
            'Dopo che hai sganciato, lanciato o collocato una bomba o una mina, puoi collocare 1 segnalino innesco su quel congegno.',
          pl:
            'Gdy zrzucisz, wystrzelisz albo umieścisz bombę albo minę, możesz umieścić na tym urządzeniu 1 znacznik opóźnienia.',
          pt:
            'After you drop, launch, or place a bomb or mine, you may place 1 fuse marker on that device.',
          zh:
            'After you drop, launch, or place a bomb or mine, you may place 1 fuse marker on that device.',
        },
        slots: ['Modification'],
        ffg: 592,
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 1 },
  },
  {
    limited: 0,
    xws: 'angleddeflectors',
    sides: [
      {
        title: {
          en: 'Angled Deflectors',
          de: 'Ausgerichtete Deflektoren',
          fr: 'Déflecteurs Orientables',
          es: 'Deflectores reajustados',
          it: 'Deflettori Angolati',
          pl: 'Przekierowanie osłon',
          pt: 'Angled Deflectors',
          zh: 'Angled Deflectors',
        },
        type: 'Modification',
        text: {
          en:
            "Starfighter shields often have manual overrides that allow them to be angled for increased front or rear protection. However, doing so leaves the ship exposed if the pilot's situational awareness falters.",
          de:
            'Sternenjägerschilde haben oft manuelle Überbrückungsschalter, mit denen die Energie in bestimmte Richtungen umgeleitet werden kann, um Front oder Heck besser zu schützen. Ein Pilot, der seine Situation nicht richtig überblickt, kann jedoch seinem Feind eine offene Flanke bieten.',
          fr:
            "Les boucliers des chasseurs bénéficient souvent d'un contrôle manuel qui permet de les réorienter pour augmenter la protection avant ou arrière. Cependant, en agissant ainsi le vaisseau est exposé si la vigilance du pilote faiblit.",
          es:
            'Los escudos de los cazas estelares suelen tener controles manuales que permiten reajustarlos para aumentar la protección frontal o posterior,. Sin embargo, hacer esto deja la nave expuesta si el piloto no es perfectamente consciente de lo que ocurre a su alrededor.',
          it:
            "Gli scudi degli astrocaccia spesso sono dotati di override manuali che ne consentono la regolazione dell'angolazione per incrementare la protezione sul lato anteriore o posteriore. Tuttavia, questo può lasciare il pilota scoperto se la sua percezione dell'ambiente vacilla.",
          pl:
            'Myśliwce zwykle dają możliwość ręcznego przekierowania osłon, dzięki czemu można wzmocnić ochronę z przodu albo z tyłu statku. W konsekwencji inna część statku będzie chroniona słabiej, a to może być śmiertelnie niebezpieczne, jeśli pilota zawiedzie refleks.',
          pt:
            "Starfighter shields often have manual overrides that allow them to be angled for increased front or rear protection. However, doing so leaves the ship exposed if the pilot's situational awareness falters.",
          zh:
            "Starfighter shields often have manual overrides that allow them to be angled for increased front or rear protection. However, doing so leaves the ship exposed if the pilot's situational awareness falters.",
        },
        slots: ['Modification'],
        grants: [
          { action: { type: 'Reinforce', difficulty: 'White' }, value: 1 },
          { stat: 'shields', value: -1 },
        ],
        ffg: 593,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [
      { baseSizes: ['Small', 'Medium'] },
      { stat: { type: 'shields', value: 1 } },
    ],
    cost: { variable: 'agility', values: { '0': 6, '1': 3, '2': 1, '3': 1 } },
  },
  {
    limited: 0,
    xws: 'targetingcomputer',
    sides: [
      {
        title: {
          en: 'Targeting Computer',
          de: 'Zielcomputer',
          fr: 'Ordinateur de Visée',
          es: 'Computadora de selección de blancos',
          it: 'Targeting Computer',
          pl: 'Komputer namierzania',
          pt: 'Targeting Computer',
          zh: 'Targeting Computer',
        },
        type: 'Modification',
        slots: ['Modification'],
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
        ffg: 619,
        text: {
          en:
            'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
          de:
            'Zielcomputer gehören zur Standardausstattung vieler Schiffe, vor allem wenn sie für den Abwurf von Sprengkörpern konzipiert sind. Bei leichten Jagdmaschinen und Transportern, die ohne Waffenzielsystem verkauft werden, lässt es sich problemlos nachrüsten.',
          fr:
            "Les ordinateurs de visée sont des dispositifs standards sur beaucoup de vaisseaux et plus spécifiquement sur ceux conçus pour utiliser de l'artillerie. Certains chasseurs légers et appareils de transport n'ont pas ce genre de guidage d'armes, mais il est toujours possible d'en installer en tant que modification.",
          es:
            'Las computadoras de selección de blancos son componentes habituales en muchas naves, sobre todo en aquellas diseñadas para disparar cabezas explosivas. Algunos cazas estelares y transportes pequeños carecen de estos sistemas de guiado de armas, aunque eso no impide instalárselos como una modificación ulterior.',
          it:
            'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
          pl:
            'Komputery namierzania to standardowe wyposażenie wielu statków, zwłaszcza tych zaprojektowanych do działań bojowych. Niektóre lekkie myśliwce i statki transportowe nie mają takiego wspomagania systemów celowniczych, ale zawsze można je zainstalować na własną rękę.',
          pt:
            'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
          zh:
            'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
        },
      },
    ],
    hyperspace: false,
    epic: true,
    cost: { value: 3 },
  },
  {
    xws: 'overdrivethruster',
    limited: 1,
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 },
    },
    sides: [
      {
        title: { en: 'Overdrive Thruster' },
        type: 'Modification',
        ability: {
          en:
            'While you perform a red [Boost], [Barrel Roll], or [Slam] action, you must use a template of 1 speed higher, if able.',
        },
        slots: ['Modification'],
        ffg: 721,
      },
    ],
    hyperspace: true,
    epic: true,
    restrictions: [{ chassis: ['t70xwing'] }],
  },
  {
    limited: 0,
    xws: 'independentcalculations',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'Replace your Networked Calculations ship ability with the following: Independent Calculations: While you perform a white [Calculate] action, you may treat it as red to gain 1 additional calculate token. Other ships cannot spend your calculate tokens using the Networked Calculations ship ability.',
        },
        title: { en: 'Independent Calculations' },
        type: 'Modification',
        slots: ['Modification'],
        ffg: 866,
      },
    ],
    cost: { value: 4 },
  },
  {
    limited: 0,
    xws: 'precisionionengines',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            "Before you execute a speed 1-3 Koiogran Turn ([Koiogran Turn]) maneuver, you may spend 1 [Charge] to execute that maneuver as a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver instead.",
        },
        title: { en: 'Precision Ion Engines' },
        type: 'Modification',
        slots: ['Modification'],
        ffg: 867,
      },
    ],
    cost: { value: 3 },
    restrictions: [
      {
        chassis: [
          'tielnfighter',
          'tieadvancedx1',
          'tieskstriker',
          'tieddefender',
          'tiesabomber',
          'tiecapunisher',
          'tieadvancedv1',
          'tiephphantom',
          'tieagaggressor',
          'tieininterceptor',
          'tiereaper',
          'tiefofighter',
          'tiesffighter',
          'tievnsilencer',
          'tiebainterceptor',
        ],
      },
    ],
  },
];

export default t;

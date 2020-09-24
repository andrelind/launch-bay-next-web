import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'advprotontorpedoes',
    sides: [
      {
        title: {
          en: 'Adv. Proton Torpedoes',
          de: 'Verstärkte Protonentorpedos',
          fr: 'Torpilles à Protons Avancées',
          es: 'Torpedos de protones avanzados',
          it: 'Siluri Protonici Avanzati',
          pl: 'Zaaw. torpedy protonowe',
          pt: 'Torpedos de Prótons Avan.',
          zh: 'Adv. Proton Torpedoes',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Ändere 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Cambia 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Attaque ([Lock]) : dépensez 1 [Charge]. Changez 1 résultat [Hit] en un résultat [Critical Hit].',
          it:
            'Attacco ([Lock]): Spendi 1 [Charge]. Cambia 1 risultato [Hit] in 1 risultato [Critical Hit].',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Zmień 1 wynik [Hit] na wynik [Critical Hit].',
          pt:
            'Ataque ([Lock]): Gaste1 [Charge]. Mude 1 resultado[Hit] para um resultado [Critical Hit].',
          zh:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
        },
        slots: ['Torpedo'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 5,
          minrange: 1,
          maxrange: 1,
          ordnance: true,
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_33.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/ea591bb09b5eb3946c7a09a28c2a8fea.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_33.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/9d5a80e7f6206c2412df860e91dd7877.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/68389c43cc548b2ee8ca6e3e02c55f35.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/2657b3c1d6f67e10dc56435f0344aca4.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/e1c1d146248f0b968237e958c23c6a89.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_33.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_33.jpg',
        ffg: 262,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'iontorpedoes',
    sides: [
      {
        title: {
          en: 'Ion Torpedoes',
          de: 'Ionentorpedos',
          fr: 'Torpilles Ioniques',
          es: 'Torpedos de iones',
          it: 'Siluri Ionici',
          pl: 'Torpedy jonowe',
          pt: 'Torpedos Iônicos',
          zh: '离子鱼雷',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Falls dieser Angriff trifft, gib 1 [Hit]- oder [Critical Hit]-Ergebnis aus, um den Verteidiger 1 [Hit]-Schaden erleiden zu lassen. Alle übrigen [Hit]/[Critical Hit]-Ergebnisse fügen Ionenmarker anstatt Schaden zu.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Si este ataque impacta, gasta 1 resultado [Hit] o [Critical Hit] para provocar que el defensor sufra 1 de daño [Hit]. Todos los resultados [Hit]/[Critical Hit] restantes infligen fichas de Iones en vez de daño.',
          fr:
            'Attaque ([Lock]) : dépensez 1 [Charge]. Si cette attaque touche, dépensez 1 résultat [Hit] ou [Critical Hit] pour faire subir 1 dégât [Hit] au défenseur. Tous les résultats [Hit]/[Critical Hit] restants infligent des marqueurs ioniques au lieu des dégâts.',
          it:
            'Attacco ([Lock]): Spendi 1 [Charge]. Se questo attacco colpisce, spendi 1 risultato [Hit] o [Critical Hit] per far subire 1 danno [Hit] al difensore. Tutti i risultati [Hit]/[Critical Hit] rimanenti infliggono segnalini ioni invece di danni.',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Jeżeli ten atak trafi, wydaj 1 wynik [Hit] albo [Critical Hit], aby obrońca przyjął 1 uszkodzenie [Hit]. Wszystkie pozostałe wyniki [Hit]/[Critical Hit] przydzielają żetony jonizacji zamiast uszkodzeń.',
          pt:
            'Ataque ([Lock]): Gaste 1 [Charge].Se este ataque acertar, gaste 1 resultado [Hit] ou [Critical Hit] para fazer com que o defensor sofra 1 dano [Hit]. Todos os resultados [Hit]/[Critical Hit] restantes atribuem fichas de íon em vez de causarem dano.',
          zh:
            '攻击([Lock])：花费1[Charge]。如果本次攻击命中，花费掷骰结果中的1[Hit]或[Critical Hit]，使得防御方承受1[Hit]伤害。掷骰结果中剩余的[Hit]或[Critical Hit]不造成伤害，而是使防御方获得等量的离子标记。',
        },
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_34.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/523b19893077fd1bc4ade482f23405b1.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_34.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/87e16c2e6afa7180bded2103db6edaf9.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/a4bcc8c7b25392fbf8fe6c36eedaf3f2.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/59391bce9bc734d2b8ffae59b6606fcb.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/c824ebf54c2582a39fe63be1c8ca2539.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_34.png',
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_34.jpg',
        ffg: 263,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'protontorpedoes',
    sides: [
      {
        title: {
          en: 'Proton Torpedoes',
          de: 'Protonentorpedos',
          fr: 'Torpilles à Protons',
          es: 'Torpedos de protones',
          it: 'Siluri Protonici',
          pl: 'Torpedy protonowe',
          pt: 'Torpedos de Prótons',
          zh: '质子鱼雷',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Ändere 1 [Hit]-Ergebnis in ein [Critical Hit]-Ergebnis.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Cambia 1 resultado [Hit] por un resultado [Critical Hit].',
          fr:
            'Attaque ([Lock]) : dépensez 1 [Charge]. Changez 1 résultat [Hit] en un résultat [Critical Hit].',
          it:
            'Attacco ([Lock]): Spendi 1 [Charge]. Cambia 1 risultato [Hit] in 1 risultato [Critical Hit].',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Zmień 1 wynik [Hit] na wynik [Critical Hit].',
          pt:
            'Ataque ([Lock]): Gaste 1 [Charge]. Mude 1 resultado [Hit] para um resultado [Critical Hit].',
          zh:
            '攻击([Lock])：花费1[Charge]。将掷骰结果的1[Hit]变为[Critical Hit]。',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_35.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/034cc9b6733bc93e4de047f3576f0f0e.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_35.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/43503727a401f971ef180641fee5e3e2.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/it/444fc7b4df39065d82dc87cda510ce0b.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/pl/3790cd0f30f61e15722b1c9d73a8611c.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/pt/24609a65cc27c3bad5d387191fe8fb3c.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_35.png',
        },
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_35.jpg',
        ffg: 264,
      },
    ],
    cost: { value: 13 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'plasmatorpedoes',
    sides: [
      {
        title: {
          en: 'Plasma Torpedoes',
          de: 'Plasmatorpedos',
          fr: 'Torpilles à Plasma',
          es: 'Torpedos de plasma',
          it: 'Siluri al Plasma',
          pl: 'Torpedy plazmowe',
          pt: 'Plasma Torpedoes',
          zh: 'Plasma Torpedoes',
        },
        type: 'Torpedo',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. During the Neutralize Results step, [Critical Hit] results are canceled before [Hit] results. After this attack hits, the defender loses 1 shield.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Während des Schrittes „Ergebnisse neutralisieren" werden [Critical Hit] -Ergebnisse vor [Hit] -Ergebnissen negiert. Nachdem dieser Angriff getroffen hat, verliert der Verteidiger 1 Schild.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Durante el paso de "Neutralizar resultados", los resultados [Critical Hit] son anulados antes que los resultados [Hit] . Después de que este ataque impacte, el defensor pierde 1 escudo.',
          fr:
            "Attaque ([Lock]) : dépensez 1 [Charge]. Lors de l'étape « Neutraliser les résultats », les résultats [Critical Hit] sont annulés avant les résultats [Hit]. Après que cette attaque a touché, le défenseur perd 1 bouclier.",
          it:
            'Attack ([Lock]): Spendi 1 [Charge]. Durante il passo "Neutralizzare i Risultati", i risultati [Critical Hit] sono neutralizzati prima dei risultati [Hit]. Dopo che questo attacco ha colpito, il difensore perde 1 scudo.',
          pl:
            'Atak ([Lock]): Wydaj 1[Charge] . W etapie neutralizacji wyników wyniki [Critical Hit] są anulowane przed wynikami [Hit]. Gdy ten atak trafi, obrońca traci 1 osłonę.',
          pt:
            'Attack ([Lock]): Spend 1 [Charge]. During the Neutralize Results step, [Critical Hit] results are canceled before [Hit] results. After this attack hits, the defender loses 1 shield.',
          zh:
            'Attack ([Lock]): Spend 1 [Charge]. During the Neutralize Results step, [Critical Hit] results are canceled before [Hit] results. After this attack hits, the defender loses 1 shield.',
        },
        image: {
          en:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/60fb85c3782c235904678bac8a106150.png',
          de:
            'https://sb-cdn.fantasyflightgames.com/card_images/de/3eae6fca93289ebfa2c435d3e7c687f6.png',
          fr:
            'https://sb-cdn.fantasyflightgames.com/card_images/fr/4a56b5df27ab8b3e46aec51b1e9efe92.png',
          es:
            'https://sb-cdn.fantasyflightgames.com/card_images/es/221380d536b47818e83e982ff4f29c59.png',
          it:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/60fb85c3782c235904678bac8a106150.png',
          pl:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/60fb85c3782c235904678bac8a106150.png',
          pt:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/60fb85c3782c235904678bac8a106150.png',
          zh:
            'https://sb-cdn.fantasyflightgames.com/card_images/en/60fb85c3782c235904678bac8a106150.png',
        },
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_35.jpg',
        ffg: 579,
      },
    ],
    cost: { value: 8 },
    hyperspace: true,
    epic: true,
  },
];

export default t;

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'BTL-A4 Y-wing',
    de: 'BTL-A4-Y-Flügler',
    fr: 'Y-wing BTL-A4',
    it: 'Ala-Y BTL-A4',
    pl: 'Y-wing BTL-A4',
    pt: 'Y-wing BTL-A4',
    zh: 'BTL-A4 Y翼战机',
    es: 'BTL-A4 Ala-Y',
  },
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
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
    '4FR',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Y-wing.png',
  pilots: [
    {
      name: {
        en: '"Dutch" Vander',
        de: '„Dutch" Vander',
        fr: '"Dutch" Vander',
        es: '"Dutch" Vander',
        it: '"Dutch" Vander',
        pl: '„Dutch" Vander',
        pt: '"Dutch" Vander',
        zh: '"荷兰"·范德',
      },
      caption: {
        en: 'Gold Leader',
        de: 'Gold Eins',
        fr: 'Gold Leader',
        es: 'Jefe Oro',
        it: 'Capo Oro',
        pl: 'Dowódca Złotych',
        pt: 'Líder Dourado',
        zh: '金色领队',
      },
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'dutchvander',
      ability: {
        en:
          'After you perform the [Lock] action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions.',
        de:
          'Nachdem du die [Lock]-Aktion durchgeführt hast, darfst du 1 befreundetes Schiff in Reichweite 1-3 wählen. Jenes Schiff darf das Objekt, das du als Ziel erfasst hast, als Ziel erfassen, wobei es die Reichweitenbeschränkung ignoriert.',
        fr:
          "Après avoir effectué l'action [Lock], vous pouvez choisir 1 vaisseau allié à portée 1-3. Ce vaisseau allié peut verrouiller l'objet que vous avez verrouillé, en ignorant les restrictions de portée.",
        es:
          'Después de que realices la acción [Lock], puedes elegir 1 nave aliada que tengas a alcance 1-3. Esa nave puede obtener un Blanco fijado sobre el objeto que acabas de fijar como blanco, ignorando las restricciones por alcance.',
        it:
          "Dopo che hai effettuato un'azione [Lock], puoi scegliere 1 nave amica a gittata 1-3. Quella nave può acquisire come bersaglio l'oggetto che hai acquisito come bersaglio, ignorando le restrizioni di gittata.",
        pl:
          'Gdy wykonasz akcję [Lock], możesz wskazać 1 przyjazny statek w zasięgu 1-3. Wskazany statek może namierzyć obiekt, który ty namierzasz, ignorując ograniczenia dotyczące zasięgu.',
        pt:
          'Após realizar a ação [Lock], você podeescolher 1 nave amiga em alcance 1-3.A nave escolhida tem a opção de travaruma mira no objeto que você travou amira, ignorando as restrições de alcance.',
        zh:
          '在你执行[Lock]行动后，你可以选择1架距离为1~3的友方战机。该战机可以对你已锁定的目标进行一次锁定，无视距离限制。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_14.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/42fbcfe3e060d6a77a8fe3b39eb0d4ae.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/40c20d931a1868f9dc91edab69a33224.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/78913132f9762e2a12bbd2cb881e0cc1.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/c6bf3a5125c748faefb5010a679b7a45.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/ba3519cb7d67e96ff906b3e24eb6b0f3.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/82075add1eb740ad853f1abffb39fd46.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_14.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_14.jpg',
      ffg: 14,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Evaan Verlaine',
        de: 'Evaan Verlaine',
        fr: 'Evaan Verlaine',
        es: 'Evaan Verlaine',
        it: 'Evaan Verlaine',
        pl: 'Evaan Verlaine',
        pt: 'Evaan Verlaine',
        zh: '伊凡·韦尔兰',
      },
      caption: {
        en: 'Gold Three',
        de: 'Gold Drei',
        fr: 'Gold Trois',
        es: 'Oro Tres',
        it: 'Oro Tre',
        pl: 'Złoty Trzy',
        pt: 'Dourado Três',
        zh: '金色3号',
      },
      initiative: 3,
      limited: 1,
      cost: 35,
      xws: 'evaanverlaine',
      ability: {
        en:
          'At the start of the Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, that ship rolls 1 additional defense die while defending until the end of the round.',
        de:
          'Zu Beginn der Kampfphase darfst du 1 Fokusmarker ausgeben, um ein befreundetes Schiff in Reichweite 0-1 zu wählen. Falls du das tust, wirft jenes Schiff bis zum Ende der Runde 1 zusätzlichen Verteidigungswürfel, solange es verteidigt.',
        fr:
          "Au début de la phase d'engagement, vous pouvez dépenser 1 marqueur de concentration pour choisir un vaisseau allié à portée 0-1. Dans ce cas, ce vaisseau allié lance 1 dé de défense supplémentaire tant qu'il défend, jusqu'à la fin du round.",
        es:
          'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 ficha de Concentración para elegir una nave aliada que tengas a alcance 0-1. Si lo haces, esa nave tira 1 dado de defensa adicional mientras se está defendiendo hasta el final de la ronda.',
        it:
          "All'inizio della Fase di Ingaggio, puoi spendere 1 segnalino concentrazione per scegliere 1 nave amica a gittata 0-1. Se lo fai, quella nave tira 1 dado di difesa aggiuntivo mentre difende fino alla fine del round.",
        pl:
          'Na początku fazy walki możesz wydać 1 żeton skupienia, aby wskazać przyjazny statek w zasięgu 0-1.Jeżeli tak zrobisz, do końca tej rundy wskazany statek rzuca 1 dodatkową kością, gdy się broni.',
        pt:
          'No início da Fase de Engajamento, você pode gastar 1 ficha de foco para escolher uma nave amiga em alcance 0-1. Se você fizer isso, a nave escolhida rola 1 dadode defesa adicional quando defender atéo final da rodada.',
        zh:
          '在交战阶段开始时，你可以花费1枚专注标记来选择一架与你距离为0~1的友方战机。如果你如此做，该战机进行防御时额外投1个防御骰，直到本轮结束。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_16.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/2da533092242b7fa0933179ff707a9b5.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/c18ee9ab8b26ce21395bd81bb8df678d.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/8210ca087648c67cca0257c668f74f09.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/a6d34bfa0b620e2176da8406e30b046d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/f2aad33af3f5359ac60383f63c8a9ffe.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/9b6980f05c71e57562d0073972d6cb9c.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_16.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_16.jpg',
      ffg: 16,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Gold Squadron Veteran',
        de: 'Veteran der Gold-Staffel',
        fr: "Vétéran de l'Escadron Or",
        es: 'Veterano del Escuadrón Oro',
        it: 'Veterano della Squadriglia Oro',
        pl: 'Weteran Eskadry Złotych',
        pt: 'Veterano do Esq. Dourado',
        zh: '金色中队资深飞行员',
      },
      initiative: 3,
      limited: 0,
      cost: 32,
      xws: 'goldsquadronveteran',
      text: {
        en:
          'Commanded by Jon "Dutch" Vander, Gold Squadron played an instrumental role in the Battles of Scarif and Yavin.',
        de:
          'Unter dem Kommando von Jon „Dutch" Vander spielte die Gold-Staffel eine Schlüsselrolle bei den Schlachten von Scarif und Yavin.',
        fr:
          "Sous le commandement de Jon «Dutch» Vander, l'Escadron Or a joué un rôle déterminant au cours des Batailles de Scarif et de Yavin.",
        es:
          'Bajo el mando de Jon "Dutch" Vander, el Escuadrón Oro desempeñó un papel esencial en las batallas de Scarif y Yavin.',
        it:
          'La Squadriglia Oro, comandata da Jon "Dutch" Vander, svolse un ruolo cruciale nelle Battaglie di Scarif e Yavin.',
        pl:
          'Eskadra Złotych dowodzona przez Jona „Dutcha" Vandera odegrała kluczową rolę w bitwach o Scarif i Yavin.',
        pt:
          'Comandado por Jon "Dutch" Vander, o Esquadrão Dourado desempenhou um papel fundamental nas Batalhas de Scarif e Yavin.',
        zh:
          '由乔安·"荷兰"·范德指挥的金色中队在斯卡利夫与雅文两次战争中扮演了重要的角色。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_17.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/d2f785224c6c498dd127d63d95b8797c.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/8460069d29b5c5881584279f08c22883.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/084469b26068147b350c6addd224e6d3.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/01fa2bec679c0f2eebf338690c8b531b.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/95b528080eb4be87db5e82e8b965ac51.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/3fe09ec5a54b6e14b027738288e1d965.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_17.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      alt: [
        {
          image:
            'https://images-cdn.fantasyflightgames.com/filer_public/6e/42/6e42ac70-c222-4ca5-ad3a-dc9350988933/op086-gold-squadron-veteran.png',
          source: 'Gen Con Indy 2018',
        },
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_17.jpg',
      ffg: 17,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Gray Squadron Bomber',
        de: 'Bomber der grauen Staffel',
        fr: "Bombardier de l'Escadron Gris",
        es: 'Bombardero del Escuadrón Gris',
        it: 'Bombardiere della Squadriglia Grigia',
        pl: 'Bombowiec Eskadry Szarych',
        pt: 'Bombardeiro do Esquadrão Cinza',
        zh: '灰色中队投弹手',
      },
      initiative: 2,
      limited: 0,
      cost: 30,
      xws: 'graysquadronbomber',
      text: {
        en:
          'Long after the Y-wing was phased out by the Galactic Empire, its durability, dependability, and heavy armament help it remain a staple in the Rebel fleet.',
        de:
          'Obwohl er beim Imperium schon lange ausgemustert ist, bleibt der Y-Flügler aufgrund seiner Robustheit, Zuverlässigkeit und schweren Bewaffnung weiterhin ein fester Bestandteil der Rebellenflotte.',
        fr:
          "Grâce à sa vitesse, sa robustesse et son armement lourd, le Y-wing resta un élément essentiel de la flotte Rebelle longtemps après sa mise en retraite par l'Empire Galactique.",
        es:
          'Mucho después de que los Alas-Y dejaran de ser utilizados por el Imperio Galáctico, su resistencia, fiabilidad y potente armamento contribuyeron a asegurar su permanencia en la flota rebelde.',
        it:
          "Anche molto tempo dopo essere stato scartato dall'Impero Galattico, l'Ala-Y rimase una colonna portante della flotta Ribelle graziealla sua resistenza, alla sua affidabilità e ai suoi armamenti pesanti.",
        pl:
          'Jeszcze długo po wycofaniu Y-wingów przez Imperium Galaktyczne, siły Rebeliantów wciąż polegały na ich wytrzymałości, niezawodności i potężnym uzbrojeniu.',
        pt:
          'Muito tempo depois de a Y-wing ser descontinuada pelo Império Galático, sua durabilidade, confiabilidade e armamento pesado ainda fazdela um recurso fundamental à frota Rebelde.',
        zh:
          'Y翼战机被银河帝国逐步淘汰之后，其耐用性、可靠性、以及其配备的重型武器，使得其仍作为主力战机服役于反抗军舰队中。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_18.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/1c86cecb981fa61180c8c32d06cd4d99.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/cafa02efe493d370903bcf0123ed93d2.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/c34bcfb4632d7e492d9cd821a13b74b5.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/86554db71422d9dabd246fed15d3d758.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/4b8e77bef34bada33c23e0d3b2c06074.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/d116dd702afe896d7b1f224de9777eba.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_18.png',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_18.jpg',
      ffg: 18,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Horton Salm',
        de: 'Horton Salm',
        fr: 'Horton Salm',
        es: 'Horton Salm',
        it: 'Horton Salm',
        pl: 'Horton Salm',
        pt: 'Horton Salm',
        zh: '霍顿·索姆',
      },
      caption: {
        en: 'Gray Leader',
        de: 'Grau Eins',
        fr: 'Gray Leader',
        es: 'Jefe Gris',
        it: 'Capo Grigio',
        pl: 'Dowódca Szarych',
        pt: 'Líder Cinza',
        zh: '灰色领队',
      },
      initiative: 4,
      limited: 1,
      cost: 37,
      xws: 'hortonsalm',
      ability: {
        en:
          'While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender.',
        de:
          'Solange du einen Angriff durchführst, darfst du für jedes andere befreundete Schiff in Reichweite 0-1 des Verteidigers 1 Angriffswürfel neu werfen.',
        fr:
          "Tant que vous effectuez une attaque, vous pouvez relancer 1 dé d'attaque pour chaque autre vaisseau allié à portée 0-1 du défenseur.",
        es:
          'Mientras efectúas un ataque, puedes volver a tirar 1 dado de ataque por cada otra nave aliada que esté situada a alcance 0-1 del defensor.',
        it:
          'Mentre effettui un attacco, puoi ripetere il tiro di 1 dado di attacco per ogni altra nave amica a gittata 0-1 dal difensore.',
        pl:
          'Gdy wykonuujesz atak, możesz przerzucić 1 kość ataku za każdy przyjazny statek w zasięgu 0-1 od obrońcy.',
        pt:
          'Quando realizar um ataque, você pode rerrolar 1 dado de ataque para cada outra nave amiga em alcance 0-1 do defensor.',
        zh:
          '当你执行攻击时，每有一架其他友方战机与防御方距离为0~1，你可以重投1个攻击骰。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_15.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/0c70e87d8620ab0f681e4b8e72c1ea7d.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/d5bf07b5a12bbc5f53a8a33dbdc01f71.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/59d6dc0d16a769c586ade8c970381bbf.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/c1063697749d5740dc6b96926296b174.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/e9b4ebbcfb7f371cc4cb1dca8e656bf5.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/5e4d63c16924aaf2baaa6bc07be29004.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_15.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_15.jpg',
      ffg: 15,
      hyperspace: true,
      epic: true,
    },
    {
      name: {
        en: 'Norra Wexley',
        de: 'Norra Wexley',
        fr: 'Norra Wexley',
        es: 'Norra Wexley',
        it: 'Norra Wexley',
        pl: 'Norra Wexley',
        pt: 'Norra Wexley',
        zh: '诺拉·维库斯里',
      },
      caption: {
        en: 'Gold Nine',
        de: 'Gold Neun',
        fr: 'Gold Neuf',
        es: 'Oro Nueve',
        it: 'Oro Nove',
        pl: 'Złoty Dziewięć',
        pt: 'Dourado Nove',
        zh: '金色9号',
      },
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'norrawexley-btla4ywing',
      ability: {
        en:
          'While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.',
        de:
          'Solange du verteidigst, falls ein feindliches Schiff in Reichweite 0-1 ist, füge 1 [Evade]-Ergebnis zu deinen Würfelergebnissen hinzu.',
        fr:
          'Tant que vous défendez, si un vaisseau ennemi est à portée 0-1, ajoutez 1 résultat [Evade] à vos résultats de dés.',
        es:
          'Mientras te defiendes, si tienes alguna nave enemiga a alcance 0-1, añade 1 resultado [Evade] a tus resultados de dados.',
        it:
          'Mentre difendi, se ci sono navi nemiche a gittata 0-1, puoi aggiungere 1 risultato [Evade] ai risultati dei tuoi dadi.',
        pl:
          'Gdy się bronisz i w zasięgu 0-1 znajduje się wrogi statek, dodaj do wyników swoich rzutów kośćmi 1 wynik [Evade].',
        pt:
          'Quando defender, se houveruma nave inimiga em alcance 0-1,adicione 1 resultado [Evade] aosresultados de seus dados.',
        zh:
          '当你进行防御时，如果在你距离0~1内有敌机，则本次掷骰结果增加1[Evade]。',
      },
      image: {
        en:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_13.png',
        de:
          'https://sb-cdn.fantasyflightgames.com/card_images/de/5e7b811f85adb9eab3d8d082cc78f666.png',
        fr:
          'https://sb-cdn.fantasyflightgames.com/card_images/fr/7a241e96b09c2d9f4fba68507e3034de.png',
        es:
          'https://sb-cdn.fantasyflightgames.com/card_images/es/154941abcaff4bee2afcaebfde390310.png',
        it:
          'https://sb-cdn.fantasyflightgames.com/card_images/it/4e34abed1cfe3a40f94c91e43ed4020d.png',
        pl:
          'https://sb-cdn.fantasyflightgames.com/card_images/pl/b8aa478d0fb8f152781a39240fac7aef.png',
        pt:
          'https://sb-cdn.fantasyflightgames.com/card_images/pt/c7e8b15863175308680a09d8affc210a.png',
        zh:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Pilot_13.png',
      },
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_13.jpg',
      ffg: 13,
      hyperspace: true,
      epic: true,
    },
  ],
};

export default t;

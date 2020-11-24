import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Scavenged YT-1300',
    de: 'YT-1300 vom Schrottplatz',
    fr: 'YT-1300 Récupéré',
    it: 'YT-1300 Riciclato',
    pl: 'ZDEZELOWANY YT-1300',
    pt: 'Scavenged YT-1300 Light Freighter',
    zh: 'Scavenged YT-1300 Light Freighter',
    es: 'YT-1300 Recompuesto',
  },
  xws: 'scavengedyt1300',
  ffg: 57,
  size: 'Large',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3PR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'Red', type: 'Rotate Arc' },
  ],
  icon:
    'https://sb-cdn.fantasyflightgames.com/ship_types/I_Falcon_Resistance.png',
  pilots: [
    {
      name: {
        en: 'Resistance Sympathizer',
        de: 'Sympathisant des\n Widerstands',
        fr: 'Sympathisant de la Résistance',
        es: 'Simpatizante de la Resistencia',
        it: 'Simpatizzante \ndella Resistenza',
        pl: 'Sympatyk Ruchu Oporu',
        pt: 'Resistance Sympathizer',
        zh: 'Resistance Sympathizer',
      },
      initiative: 2,
      limited: 0,
      xws: 'resistancesympathizer',
      text: {
        en:
          'After witnessing the Hosnian Cataclysm, some spacers willingly aided the Resistance with whatever ships they had.',
        de:
          'Nach der Zerstörung des Hosnian-Systems stellten viele Raumfahrer bereitwillig ihre Schiffe dem Widerstand zur Verfügung.',
        fr:
          'Après avoir assisté au Cataclysme Hosnien, nombreux furent les astropilotes à mettre leurs vaisseaux à la disposition de la Résistance.',
        es:
          'Tras presenciar el cataclismo de Hosnian, algunos viajeros espaciales ayudaron de buen grado a la Resistencia con cualquier nave que tuvieran a su disposición.',
        it:
          'Dopo avere assistito al Cataclisma di Hosnian, molti naviganti prestarono volontariamente aiuto alla Resistenza usando i mezzi di cui disponevano.',
        pl:
          'Po zniszczeniu układu Hosnian niektórzy przepatrywacze zdecydowali się wspomóc Ruch Oporu wszelkimi dostępnymi im statkami.',
        pt:
          'After witnessing the Hosnian Cataclysm, some spacers willingly aided the Resistance with whatever ships they had.',
        zh:
          'After witnessing the Hosnian Cataclysm, some spacers willingly aided the Resistance with whatever ships they had.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3e567923957881e9a4dbef46789c7fbf.jpg',
      cost: 58,
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      ffg: 430,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Chewbacca',
        de: 'Chewbacca',
        fr: 'Chewbacca',
        es: 'Chewbacca',
        it: 'Chewbacca',
        pl: 'Chewbacca',
        pt: 'Chewbacca',
        zh: 'Chewbacca',
      },
      caption: {
        en: 'Loyal Companion',
        de: 'Treuer Gefährte',
        fr: 'Compagnon Loyal',
        es: 'Compañero leal',
        it: 'Compagno Fedele',
        pl: 'Lojalny towarzysz',
        pt: 'Loyal Companion',
        zh: 'Loyal Companion',
      },
      initiative: 4,
      limited: 1,
      xws: 'chewbacca-scavengedyt1300',
      ability: {
        en:
          'After a friendly ship at range 0-3 is destroyed, before that ship is removed, you may perform an action. Then you may perform a bonus attack.',
        de:
          'Nachdem ein befreundetes Schiff in Reichweite 0-3 zerstört worden ist, darfst du eine Aktion durchführen. Dann darfst du einen Bonusangriff durchführen.',
        fr:
          "Après qu'un vaisseau allié à portée 0-3 a été détruit, vous pouvez effectuer une action. Puis vous pouvez effectuer une attaque bonus.",
        es:
          'Después de que una nave aliada que tengas a alcance 0-3 sea destruida, puedes realizar una acción. Luego puedes efectuar un ataque adicional.',
        it:
          'Dopo che una nave amica a gittata 0-3 è stata distrutta, puoi effettuare 1 azione. Poi puoi effettuare 1 attacco bonus.',
        pl:
          'Gdy w zasięgu 0-3 zniszczony zostanie przyjazny statek, możesz wykonać akcję. Następnie możesz wykonać atak dodatkowy.',
        pt:
          'After a friendly ship at range 0-3 is destroyed, before that ship is removed, you may perform an action. Then you may perform a bonus attack.',
        zh:
          'After a friendly ship at range 0-3 is destroyed, before that ship is removed, you may perform an action. Then you may perform a bonus attack.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/c40ec30b7df138c4510b08f4f02d54b5.jpg',
      cost: 60,
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      ffg: 429,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Han Solo',
        de: 'Han Solo',
        fr: 'Han Solo',
        es: 'Han Solo',
        it: 'Han Solo',
        pl: 'Han Solo',
        pt: 'Han Solo',
        zh: 'Han Solo',
      },
      caption: {
        en: 'Jaded Smuggler',
        de: 'Hartgesottener Schmuggler',
        fr: 'Contrebandier Blasé',
        es: 'Contrabandista hastiado',
        it: 'Contrabbandiere Disilluso',
        pl: 'Znużony przemytnik',
        pt: 'Jaded Smuggler',
        zh: 'Jaded Smuggler',
      },
      initiative: 6,
      limited: 1,
      xws: 'hansolo-scavengedyt1300',
      ability: {
        en:
          'Setup: You can be placed anywhere in the play area beyond range 3 of enemy ships.',
        de:
          'Aufbau: Du kannst irgendwo auf der Spielfläche jenseits von Reichweite 3 der feindlichen Schiffe platziert werden.',
        fr:
          "Mise en Place: vous pouvez être placé n'importe où dans la zone de jeu au-delà de la portée 3 de tout vaisseau ennemi.",
        es:
          'Preparación: Puedes ser colocado en cualquier lugar de la zona de juego que esté más allá de alcance 3 de las naves enemigas.',
        it:
          "Preparazione: Puoi essere collocato in un qualsiasi punto dell'area di gioco oltre gittata 3 dalle navi nemiche.",
        pl:
          'Przygotowanie gry: Możesz się rozmieścić w dowolnym miejscu na obszarze gry w zasięgu większym niż 3 od wrogich statków.',
        pt:
          'Setup: You can be placed anywhere in the play area beyond range 3 of enemy ships.',
        zh:
          'Setup: You can be placed anywhere in the play area beyond range 3 of enemy ships.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/15263defc98e4a54d76ae9224534dacf.jpg',
      cost: 62,
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      ffg: 427,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Rey',
        de: 'Rey',
        fr: 'Rey',
        es: 'Rey',
        it: 'Rey',
        pl: 'Rey',
        pt: 'Rey',
        zh: 'Rey',
      },
      caption: {
        en: 'Resourceful Scavenger',
        de: 'Einfallsreiche Schrottsammlerin',
        fr: 'Récupératrice Débrouillarde',
        es: 'Chatarrera inventiva',
        it: 'Saccheggiatrice Intraprendente',
        pl: 'Zaradna zbieraczka',
        pt: 'Resourceful Scavenger',
        zh: 'Resourceful Scavenger',
      },
      initiative: 5,
      limited: 1,
      xws: 'rey',
      ability: {
        en:
          'While you defend or perform an attack, if the enemy ship is in your [Front Arc], you may spend 1 [Force] to change 1 of your blank results to an [Evade] or [Hit] result.',
        de:
          'Solange du verteidigst oder einen Angriff durchführst, falls das feindliche Schiff in deinem [Front Arc] ist, darfst du 1 [Force] ausgeben, um 1 deiner Leerseiten-Ergebnisse in ein [Evade]- oder [Hit]-Ergebnis zu ändern.',
        fr:
          'Tant que vous défendez ou effectuez une attaque, si le vaisseau ennemi est dans votre [Front Arc], vous pouvez dépenser 1 [Force] pour changer 1 de vos résultats vierges en un résultat [Evade] ou [Hit].',
        es:
          'Mientras te defiendes o efectúas un ataque, si la nave enemiga está situada en tu [Front Arc], puedes gastar 1 [Force] para cambiar 1 de tus resultados de cara vacía por un resultado [Evade] o [Hit].',
        it:
          'Mentre difendi o effettui un attacco, se la nave nemica è nel tuo [Front Arc], puoi spendere 1 [Force] per cambiare 1 tuo risultato vuoto in 1 risultato [Evade] o [Hit].',
        pl:
          'Gdy się bronisz albo wykonujesz atak, jeżeli wrogi skatek, z którym prowadzisz starcie, znajduje się w twojej [Front Arc], możesz wydać 1 [Force], aby zmienić 1 z twoich pustych wyników na wynik [Evade] albo [Hit].',
        pt:
          'While you defend or perform an attack, if the enemy ship is in your [Front Arc], you may spend 1 [Force] to change 1 of your blank results to an [Evade] or [Hit] result.',
        zh:
          'While you defend or perform an attack, if the enemy ship is in your [Front Arc], you may spend 1 [Force] to change 1 of your blank results to an [Evade] or [Hit] result.',
      },
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/1ff06aeff0d74773e9c9f3846b38b75d.jpg',
      force: { value: 2, recovers: 1, side: ['light'] },
      cost: 68,
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
        'Force Power',
      ],
      ffg: 428,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

import { ShipType } from '../../../../types';

const t: ShipType = {
  name: {
    en: 'Kihraxz Fighter',
    de: 'Kihraxz-Jäger',
    fr: 'Chasseur Kihraxz',
    it: 'Caccia Kihraxz',
    pl: 'Myśliwiec Kihraxz',
    pt: 'Caça Kihraxz',
    zh: 'Kihraxz Fighter',
    es: 'Caza Kihraxz',
  },
  xws: 'kihraxzfighter',
  ffg: 7,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2ER',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_Kihraxz.png',
  pilots: [
    {
      name: {
        en: 'Black Sun Ace',
        de: 'Fliegerass der Schwarzen Sonne',
        fr: 'As du Soleil Noir',
        es: 'As del Sol negro',
        it: 'Asso del Sole Nero',
        pl: 'As Czarnego Słońca',
        pt: 'Ás do Sol Negro',
        zh: 'Black Sun Ace',
      },
      initiative: 3,
      limited: 0,
      cost: 38,
      xws: 'blacksunace',
      text: {
        en:
          'The Kihraxz assault fighter was developed specifically for the Black Sun crime syndicate, whose highly paid ace pilots demanded a nimble, powerful ship to match their skills.',
        de:
          'Der Kihraxz-Angriffsjäger wurde eigens für das Verbrechersyndikat Schwarze Sonne entwickelt, dessen hochbezahlte Fliegerasse ein leistungsstarkes, wendiges Schiff verlangten, das ihren Fähigkeiten entsprach.',
        fr:
          "Le chasseur d'assaut Kihraxz fut développé expressément pour l'organisation criminelle du Soleil Noir, dont les as, très généreusement payés, exigeaient des appareils agiles et puissants, à la hauteur de leur talent.",
        es:
          'El caza de asalto Kihraxz fue desarrollado expresamente para el sindicato criminal del Sol Negro, cuyos cotizadísimos ases estelares exigían naves ágiles y potentes que estuvieran a la altura de sus habilidades.',
        it:
          "Il caccia d'assalto Kihraxz fu sviluppato specificamente per il consorzio criminale del Sole Nero, i cui assi del volo, pagati profumatamente, esigevano una nave agile e potente, all'altezza delle loro abilità.",
        pl:
          'Myśliwiec szturmowy Kihraxz został zaprojektowany specjalnie dla syndykatu Czarnego Słońca, którego szczodrze opłacane asy pilotażu domagały się zwinnego, potężnego statku, który pozwoliłby im w pełni wykorzystać umiejętności.',
        pt:
          'O caça de assalto Kihraxz foi especialmente desenvolvido para a organização criminosa Sol Negro, cujos áses muito bem pagos exigiam uma nave ágil e poderosa à altura de suas habilidades.',
        zh:
          'The Kihraxz assault fighter was developed specifically for the Black Sun crime syndicate, whose highly paid ace pilots demanded a nimble, powerful ship to match their skills.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_195.jpg',
      ffg: 195,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Captain Jostero',
        de: 'Captain Jostero',
        fr: 'Captain Jostero',
        es: 'Capitán Jostero',
        it: 'Capitano Jostero',
        pl: 'Kapitan Jostero',
        pt: 'Capitão Jostero',
        zh: 'Captain Jostero',
      },
      caption: {
        en: 'Aggressive Opportunist',
        de: 'Aggressiver Opportunist',
        fr: 'Opportuniste Agressif',
        es: 'Oportunista agresivo',
        it: 'Opportunista Aggressivo',
        pl: 'Agresywny oportunista',
        pt: 'Oportunista Agressivo',
        zh: 'Aggressive Opportunist',
      },
      initiative: 3,
      limited: 1,
      cost: 41,
      xws: 'captainjostero',
      ability: {
        en:
          'After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against that ship.',
        de:
          'Nachdem ein feindliches Schiff Schaden erlitten hat, falls es nicht verteidigt, darfst du einen Bonusangriff gegen jenes Schiff durchführen.',
        fr:
          "Après qu'un vaisseau ennemi a subi des dégâts, s'il n'est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
        es:
          'Después de que una nave enemiga sufra daño, si esa nave no está defendiéndose, puedes efectuar un ataque adicional contra esa nave.',
        it:
          'Dopo che una nave nemica ha subito danni, se non sta difendendo, puoi effettuare 1 attacco bonus contro quella nave.',
        pl:
          'Gdy wrogi statek przyjmie uszkodzenie i nie jest obrońcą, możesz wykonać przeciwko niemu dodatkowy atak.',
        pt:
          'Após uma nave inimiga sofrer dano, se ela não estiver defendendo, você tem a opçãode realizar um ataque bônus contra ela.',
        zh:
          'After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against that ship.',
      },
      slots: ['Missile', 'Illicit', 'Illicit', 'Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_194.jpg',
      ffg: 194,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Cartel Marauder',
        de: 'Kartell-Marodeur',
        fr: 'Marauder du Cartel',
        es: 'Salteador del Cártel',
        it: 'Predone del Cartello',
        pl: 'Maruder kartelu',
        pt: 'Saqueador de Cartel',
        zh: 'Cartel Marauder',
      },
      initiative: 2,
      limited: 0,
      cost: 37,
      xws: 'cartelmarauder',
      text: {
        en:
          "The versatile Kihraxz was modeled after Incom's popular X-wing starfighter, but an array of after-market modification kits ensure a wide variety of designs.",
        de:
          'Der vielseitige Kihraxz ist dem beliebten X-Flügler von Incom nachempfunden und verfügt über eine Reihe von Modifikationspaketen, mit denen er für verschiedenste Aufgabenbereiche angepasst werden kann.',
        fr:
          "Le polyvalent Kihraxz fut inspiré du très populaire chasseur X-wing d'Incom, mais toutes sortes d'options permettaient de le personnaliser à loisir.",
        es:
          'El diseño del caza Kihraxz está basado en el del popular caza estelar Ala-X de Incom, pero los numerosos accesorios y modificaciones disponibles para su personalización propician una amplia diversidad de modelos.',
        it:
          'Il versatile Kihraxz fu modellato sul popolare astrocaccia Ala-X della Incom, ma la vasta gamma di modifiche non ufficiali disponibili diede origine a numerosi modelli diversi.',
        pl:
          'Wszechstronny Kihraxz został oparty na popularnym X-wingu Incomu, ale szeroki asortyment dostępnych na rynku modyfikacji sprawia, że istnieje niezliczona ilość wersji tego myśliwca.',
        pt:
          'A versátil Kihraxz foi projetada com baseno popular caça estelar da Incom X-wing,porém uma série de kits de modificaçãogarantiu uma gama enorme de variações.',
        zh:
          "The versatile Kihraxz was modeled after Incom's popular X-wing starfighter, but an array of after-market modification kits ensure a wide variety of designs.",
      },
      slots: ['Missile', 'Illicit', 'Illicit', 'Modification', 'Modification'],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_196.jpg',
      ffg: 196,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Graz',
        de: 'Graz',
        fr: 'Graz',
        es: 'Graz',
        it: 'Graz',
        pl: 'Graz',
        pt: 'Graz',
        zh: 'Graz',
      },
      caption: {
        en: 'The Hunter',
        de: 'Der Jäger',
        fr: 'Le Chasseur',
        es: 'El cazador',
        it: 'Il Cacciatore',
        pl: 'Łowca',
        pt: 'O Caçador',
        zh: 'The Hunter',
      },
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'graz',
      ability: {
        en:
          'While you defend, if you are behind the attacker, roll 1 additional defense die. While you perform an attack, if you are behind the defender, roll 1 additional attack die.',
        de:
          'Solange du verteidigst, falls du hinter dem Angreifer bist, wirf 1 zusätzlichen Verteidigungswürfel. Solange du einen Angriff durchführst, falls du hinter dem Angreifer bist, wirf 1 zusätzlichen Angriffswürfel.',
        fr:
          "Tant que vous défendez, si vous êtes derrière l'attaquant, lancez 1 dé de défense supplémentaire. Tant que vous effectuez une attaque, si vous êtes derrière le défenseur, lancez 1 dé d'attaque supplémentaire.",
        es:
          'Mientras te defiendes, si estás detrás del atacante, tira 1 dado de defensa adicional. Mientras efectúas un ataque, si estás detrás del defensor, tira 1 dado de ataque adicional.',
        it:
          "Mentre difendi, se sei dietro l'attaccante, tira 1 dado di difesa aggiuntivo. Mentre effettui un attacco, se sei dietro il difensore, tira 1 dado di attacco aggiuntivo.",
        pl:
          'Gdy się bronisz i znajdujesz się za atakującym, rzucasz 1 dodatkową kością obrony. Gdy wykonujesz atak i znajdujesz się za obrońcą, rzucasz 1 dodatkową kością ataku.',
        pt:
          'Quando defender, se você estiver atrás do atacante, role 1 dado de defesa adicional. Quando realizar um ataque, se vocêestiver atrás do defensor, role 1 dadode ataque adicional.',
        zh:
          'While you defend, if you are behind the attacker, roll 1 additional defense die. While you perform an attack, if you are behind the defender, roll 1 additional attack die.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_192.jpg',
      ffg: 192,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Talonbane Cobra',
        de: 'Talonbane Cobra',
        fr: 'Talonbane Cobra',
        es: 'Talonbane Cobra',
        it: 'Talonbane Cobra',
        pl: 'Talonbane Cobra',
        pt: 'Talonbane Cobra',
        zh: 'Talonbane Cobra',
      },
      caption: {
        en: 'Scourge of Tansarii Point',
        de: 'Der Schrecken von Tansarii Point',
        fr: 'Fléau de Tansarii Point',
        es: 'Azote de Punto Tansarii',
        it: 'Flagello di Punta Tansarii',
        pl: 'Pogromca z Tansarii',
        pt: 'Tormento de Ponto Tansarii',
        zh: 'Scourge of Tansarii Point',
      },
      initiative: 5,
      limited: 1,
      cost: 48,
      xws: 'talonbanecobra',
      ability: {
        en:
          'While you defend at attack range 3 or perform an attack at attack range 1, roll 1 additional die.',
        de:
          'Solange du in Angriffsreichweite 3 verteidigst oder in Angriffsreichweite 1 einen Angriff durchführst, wirf 1 zusätzlichen Würfel.',
        fr:
          "Tant que vous défendez à portée d'attaque 3 ou effectuez une attaque à portée d'attaque 1, lancez 1 dé supplémentaire.",
        es:
          'Mientras te defiendes a alcance de ataque 3 o efectúas un ataque a alcance de ataque 1, tira 1 dado adicional.',
        it:
          'Mentre difendi a gittata di attacco 3 o effettui un attacco a gittata di attacco 1, tira 1 dado aggiuntivo.',
        pl:
          'Gdy się bronisz w zasięgu ataku 3 albo wykonujesz atak w zasięgu 1, rzucasz 1 dodatkową kością.',
        pt:
          'Quando você defender em alcancede ataque 3 ou realizar um ataquecom alcance de ataque 1, role 1 dado adicional.',
        zh:
          'While you defend at attack range 3 or perform an attack at attack range 1, roll 1 additional die.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_191.jpg',
      ffg: 191,
      hyperspace: false,
      epic: true,
    },
    {
      name: {
        en: 'Viktor Hel',
        de: 'Viktor Hel',
        fr: 'Viktor Hel',
        es: 'Viktor Hel',
        it: 'Viktor Hel',
        pl: 'Viktor Hel',
        pt: 'Viktor Hel',
        zh: 'Viktor Hel',
      },
      caption: {
        en: 'Storied Bounty Hunter',
        de: 'Berühmter Kopfgeldjäger',
        fr: 'Chasseur de Primes Légendaire',
        es: 'Cazarrecompensas célebre',
        it: 'Epico Cacciatore di Taglie',
        pl: 'Utytułowany łowca nagród',
        pt: 'Caçador de Recompensas Renomado',
        zh: 'Storied Bounty Hunter',
      },
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'viktorhel',
      ability: {
        en:
          'After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.',
        de:
          'Nachdem du verteidigt hast, falls du nicht genau 2 Verteidigungswürfel geworfen hast, erhält der Angreifer 1 Stressmarker.',
        fr:
          "Après avoir défendu, si vous n'avez pas lancé exactement 2 dés de défense, l'attaquant gagne 1 marqueur de stress.",
        es:
          'Después de que te defiendas, si no has tirado exactamente 2 dados de defensa, el atacante recibe 1 ficha de Tensión.',
        it:
          "Dopo che hai difeso, se non hai tirato esattamente 2 dadi di difesa, l'attaccante ottiene 1 segnalino tensione.",
        pl:
          'Gdy zakończysz obronę, jeżeli nie rzucałeś dokładnie 2 kośćmi obrony, atakujący otrzymuje 1 żeton stresu.',
        pt:
          'Após defender, se você não tiverrolado exatamente 2 dados de defesa,o atacante recebe 1 ficha de estresse.',
        zh:
          'After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_P_193.jpg',
      ffg: 193,
      hyperspace: false,
      epic: true,
    },
  ],
};

export default t;

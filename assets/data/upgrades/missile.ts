import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'barragerockets',
    sides: [
      {
        title: {
          en: 'Barrage Rockets',
          de: 'Raketensalve',
          fr: 'Roquettes de Barrage',
          es: 'Cohetes de saturación',
          it: 'Razzi di Sbarramento',
          pl: 'Rakiety zaporowe',
          pt: 'Torrente de Foguetes',
          zh: 'Barrage Rockets',
        },
        type: 'Missile',
        ability: {
          en:
            'Attack ([Focus]): Spend 1 [Charge]. If the defender is in your [Bullseye Arc], you may spend 1 or more [Charge] to reroll that many attack dice.',
          de:
            'Angriff ([Focus]): Gib 1 [Charge] aus. Falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du 1 oder mehrere [Charge] ausgeben, um ebenso viele Angriffswürfel neu zu werfen.',
          es:
            'Ataque ([Focus]): Gasta 1 [Charge]. Si el defensor está situado en tu [Bullseye Arc], puedes gastar 1 o más [Charge] para volver a tirar esa misma cantidad de dados de ataque.',
          fr:
            "Attaque ([Focus]) : dépensez 1 [Charge]. Si le défenseur est dans votre [Bullseye Arc], vous pouvez dépenser 1 ou plusieurs [Charge] pour relancer autant de dés d'attaque.",
          it:
            'Attacco ([Focus]): Spendi 1 [Charge]. Se il difensore è nel tuo [Bullseye Arc], puoi spendere 1 o più [Charge] per ripetere il tiro di un pari ammontare di dadi di attacco.',
          pl:
            'Atak ([Focus]): Wydaj 1 [Charge]. Jeżeli obrońca znajduje się w twojej [Bullseye Arc], możesz wydać 1 albo więcej [Charge], aby przerzucić tyle samo kości ataku.',
          pt:
            'Ataque ([Focus]): Gaste1 [Charge]. Se o defensorestiver em seu [Bullseye Arc], você pode gastar 1 ou mais [Charge] para rerrolar essa mesma quantidade em dados de ataque.',
          zh:
            'Attack ([Focus]): Spend 1 [Charge]. If the defender is in your [Bullseye Arc], you may spend 1 or more [Charge] to reroll that many attack dice.',
        },
        slots: ['Missile', 'Missile'],
        charges: { value: 5, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_36.jpg',
        ffg: 265,
      },
    ],
    cost: { value: 8 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'clustermissiles',
    sides: [
      {
        title: {
          en: 'Cluster Missiles',
          de: 'Clusterraketen',
          fr: 'Missiles Groupés',
          es: 'Misiles de racimo',
          it: 'Missili a Grappolo',
          pl: 'Rakiety kasetowe',
          pt: 'Mísseis de Fragmentação',
          zh: '集群导弹',
        },
        type: 'Missile',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. After this attack, you may perform this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring the [Lock] requirement.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Nach diesem Angriff darfst du diesen Angriff als Bonusangriff gegen ein anderes Ziel in Reichweite 0-1 des Verteidigers durchführen, wobei du die [Lock]-Voraussetzung ignorierst.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Después de este ataque, puedes efectuar este ataque como un ataque adicional contra un objetivo diferente que esté situado a alcance 0-1 del defensor, ignorando el requisito [Lock].',
          fr:
            "Attaque ([Lock]) : dépensez 1 [Charge]. Après cette attaque, vous pouvez effectuer cette attaque en tant qu'attaque bonus contre une cible différente à portée 0-1 du défenseur, en ignorant le prérequis [Lock].",
          it:
            'Attacco ([Lock]): Spendi 1 [Charge]. Dopo questo attacco, puoi effettuare questo attacco come attacco bonus contro un bersaglio diverso a gittata 0-1 dal difensore, ignorando il requisito [Lock].',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Po wykonaniu tego ataku możesz wykonać go raz jeszcze jako dodatkowy atak przeciwko innemu celowi w zasięgu 0-1 od obrońcy, ignorując wymaganie [Lock].',
          pt:
            'Ataque ([Lock]): Gaste 1 [Charge]. Após este ataque, vocêpode realizá-lo novamente como ataque bônus contraum alvo diferente em alcance 0-1 do defensor, ignorandoo requisito [Lock].',
          zh:
            '攻击([Lock])：花费1[Charge]。在本次攻击后，作为奖励攻击，你可以对防御方距离0~1内的另一战机再执行一次攻击，无视[Lock]要求。',
        },
        slots: ['Missile'],
        charges: { value: 4, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_37.jpg',
        ffg: 266,
      },
    ],
    cost: { value: 4 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'concussionmissiles',
    sides: [
      {
        title: {
          en: 'Concussion Missiles',
          de: 'Erschütterungsraketen',
          fr: 'Missiles à Concussion',
          es: 'Misiles de impacto',
          it: 'Missili a Concussione',
          pl: 'Rakiety wstrząsowe',
          pt: 'Mísseis de Concussão',
          zh: '震荡导弹',
        },
        type: 'Missile',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. After this attack hits, each ship at range 0-1 of the defender exposes 1 of its damage cards.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge]aus. Nachdem dieser Angriff getroffen hat, legt jedes Schiff in Reichweite 0-1 zum Verteidiger 1 seiner Schadenskarten offen.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Después de que este ataque impacte, toda nave que esté situada a alcance 0-1 del defensor expone 1 de sus cartas de Daño.',
          fr:
            'Attaque ([Lock]) : dépensez 1 [Charge]. Après que cette attaque a touché, chaque vaisseau à portée 0-1 du défenseur expose 1 de ses cartes de dégât.',
          it:
            'Attacco ([Lock]): Spendi 1 [Charge]. Dopo che questo attacco ha colpito, ogni nave a gittata 0-1 dal difensore espone 1 sua carta danno.',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Gdy ten atak trafi, każdy statek w zasięgu 0-1 od obrońcy odkrywa 1 ze swoich kart uszkodzeń.',
          pt:
            'Ataque ([Lock]): Gaste 1 [Charge]. Após este ataque acertar, cada nave em alcance 0-1do defensor expõe 1 desuas cartas de dano.',
          zh:
            '攻击([Lock])：花费1[Charge]。在本次攻击命中后，防御方距离0~1内的所有战机暴露1张伤害卡。',
        },
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_38.jpg',
        ffg: 267,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'homingmissiles',
    sides: [
      {
        title: {
          en: 'Homing Missiles',
          de: 'Lenkraketen',
          fr: 'Missiles à Tête Chercheuse',
          es: 'Misiles rastreadores',
          it: 'Missili Traccianti',
          pl: 'Rakiety samosterujące',
          pt: 'Mísseis Teleguiados',
          zh: 'Homing Missiles',
        },
        type: 'Missile',
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. After you declare the defender, the defender may choose to suffer 1 [Hit] damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Nachdem du den Verteidiger deklariert hast, darf der Verteidiger wählen, 1 [Hit]-Schaden zu erleiden. Falls er das tut, überspringe die Schritte „Angriffswürfel" und „Verteidigungswürfel", und der Angriff wird behandelt, als hätte er getroffen.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Después de que declares quién es el defensor, éste puede elegir sufrir 1 de daño [Hit]. Si lo hace, omites los pasos de "Dados de ataque" y "Dados de defensa" y el ataque se considera que ha impactado.',
          fr:
            "Attaque ([Lock]) : dépensez 1 [Charge]. Après que vous avez déclaré le défenseur, il peut choisir de subir 1 dégât [Hit]. Dans ce cas, sautez les étapes « Dés d'attaque » et « Dés de défense » et considérez que l'attaque a touché.",
          it:
            'Attacco ([Lock]): Spendi 1 [Charge]. Dopo che hai dichiarato il difensore, questi può scegliere di subire 1 danno [Hit]. Se lo fa, salta i passi "Dadi di Attacco" e "Dadi di Difesa" e considera l\'attacco come se avesse colpito.',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Gdy wyznaczysz obrońcę, obrońca może zdecydować, że przyjmuje 1 uszkodzenie [Hit]. Jeżeli tak zrobi, etapy rzutów ataku i obrony są pomijane, a atak jest traktowany jako trafienie.',
          pt:
            'Ataque ([Lock]): Gaste 1 [Charge]. Após você declarar o defensor, ele pode sofrer1 dano [Hit]. Se ele fizer isso, pule as etapas de Dadosde Ataque e de Defesae considere oataque um acerto.',
          zh:
            'Attack ([Lock]): Spend 1 [Charge]. After you declare the defender, the defender may choose to suffer 1 [Hit] damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting.',
        },
        slots: ['Missile'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_39.jpg',
        ffg: 268,
      },
    ],
    cost: { value: 5 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'ionmissiles',
    sides: [
      {
        title: {
          en: 'Ion Missiles',
          de: 'Ionenraketen',
          fr: 'Missiles Ioniques',
          es: 'Misiles de iones',
          it: 'Missili Ionici',
          pl: 'Rakiety jonowe',
          pt: 'Mísseis Iônicos',
          zh: 'Ion Missiles',
        },
        type: 'Missile',
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
            'Attacco ([Lock]): Spendi 1 [Charge].Se questo attacco colpisce, spendi 1 risultato [Hit] o [Critical Hit] per far subire 1 danno [Hit] al difensore. Tutti i risultati [Hit]/[Critical Hit] rimanenti infliggono segnalini ioni invece di danni.',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Jeżeli ten atak trafi, wydaj 1 wynik [Hit] albo [Critical Hit], aby obrońca przyjął 1 uszkodzenie [Hit]. Wszystkie pozostałe wyniki [Hit]/[Critical Hit] przydzielają żetony jonizacji zamiast uszkodzeń.',
          pt:
            'Ataque ([Lock]): Gaste 1 [Charge].Se este ataque acertar, gaste 1 resultado [Hit] ou [Critical Hit] para fazer com que o defensor sofra 1 dano [Hit]. Todos os resultados [Hit]/[Critical Hit] restantes atribuem fichas de íon em vez de causarem dano.',
          zh:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        },
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_40.jpg',
        ffg: 269,
      },
    ],
    cost: { value: 2 },
    hyperspace: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'protonrockets',
    sides: [
      {
        title: {
          en: 'Proton Rockets',
          de: 'Protonenraketen',
          fr: 'Roquettes à Protons',
          es: 'Cohetes de protones',
          it: 'Razzi Protonici',
          pl: 'Rakiety protonowe',
          pt: 'Foguetes de Prótons',
          zh: 'Proton Rockets',
        },
        type: 'Missile',
        ability: {
          en: 'Attack ([Focus]): Spend 1 [Charge].',
          de: 'Angriff ([Focus]): Gib 1 [Charge] aus.',
          es: 'Ataque ([Focus]): Gasta 1 [Charge].',
          fr: 'Attaque ([Focus]) : dépensez 1 [Charge].',
          it: 'Attacco ([Focus]): Spendi 1 [Charge].',
          pl: 'Atak ([Focus]): Wydaj 1 [Charge].',
          pt: 'Ataque ([Focus]): Gaste 1 [Charge].',
          zh: 'Attack ([Focus]): Spend 1 [Charge].',
        },
        slots: ['Missile'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Bullseye Arc',
          value: 5,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_41.jpg',
        ffg: 270,
      },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'energyshellcharges',
    sides: [
      {
        title: {
          en: 'Energy-Shell Charges',
          de: 'Energiegeschosse',
          fr: 'Obus Énergétiques',
          es: 'Cargas de energía concentrada',
          it: 'Cariche di Proiettili Energetici',
          pl: 'Pociski energetyczne',
          pt: 'Energy-Shell Charges',
          zh: 'Energy-Shell Charges',
        },
        type: 'Missile',
        ability: {
          en:
            'Attack ([Calculate]): Spend 1 [Charge]. While you perform this attack, you may spend 1 calculate token to change 1 [Focus] result to a [Critical Hit] result. Action: Reload this card.',
          de:
            'Angriff ([Calculate]): Gib 1 [Charge] aus. Solange du diesen Angriff durchführst, darfst du 1 Berechnungsmarker ausgegeben, um 1 [Focus]-Ergebnis in ein [Critical Hit]-Ergebnis zu ändern. Aktion: Lade diese Karte nach.',
          es:
            'Ataque ([Calculate]): Gasta 1 [Charge]. Mientras efectúas este ataque, puedes gastar 1 ficha de Cálculos para cambiar 1 resultado [Focus] por un resultado [Critical Hit]. Acción: Recarga esta carta.',
          fr:
            'Attaque ([Calculate]) : dépensez 1 [Charge]. Tant que vous effectuez cette attaque, vous pouvez dépenser 1 marqueur de calcul pour changer 1 résultat [Focus] en un résultat [Critical Hit]. Action : rechargez cette carte.',
          it:
            'Attacco ([Calculate]): Spendi 1 [Charge]. Mentre effetti questo attacco, puoi spendere 1 segnalino calcolo per cambiare 1 risultato [Focus] in un risultato [Critical Hit]. Azione: Ricarica questa carta.',
          pl:
            'Atak ([Calculate]): Wydaj 1 [Charge]. Gdy wykonujesz ten atak, możesz wydać 1 żeton obliczeń, aby zmienić 1 wynik [Focus] na wynik[Critical Hit]. Akcja: Przeładuj tę kartę.',
          pt:
            'Attack ([Calculate]): Spend 1 [Charge]. While you perform this attack, you may spend 1 calculate token to change 1 [Focus] result to a [Critical Hit] result. Action: Reload this card.',
          zh:
            'Attack ([Calculate]): Spend 1 [Charge]. While you perform this attack, you may spend 1 calculate token to change 1 [Focus] result to a [Critical Hit] result. Action: Reload this card.',
        },
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        slots: ['Missile'],
        ffg: 532,
      },
    ],
    restrictions: [
      { action: { type: 'Calculate', difficulty: 'White' } },
      { factions: ['Separatist Alliance'] },
    ],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    limited: 3,
    xws: 'discordmissiles',
    sides: [
      {
        title: {
          en: 'Discord Missiles',
          de: 'Diskordanzraketen',
          fr: 'Missiles Discorde',
          es: 'Misiles desguazadores',
          it: 'Missili di Degradamento',
          pl: 'Rakiety sabotażowe',
          pt: 'Discord Missiles',
          zh: 'Discord Missiles',
        },
        type: 'Missile',
        ability: {
          en:
            "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. This card's [Charge] cannot be recovered.",
          de:
            'Zu Beginn der Kampfphase darfst du 1 Berechnungsmarker und 1 [Charge] ausgeben, um unter Verwendung der (3 [Bank Left])-, (3 [Straight]) oder (3 [Bank Right])-Schablone 1 Buzz- Droidenschwarm zu starten. Die [Charge] dieser Karte kann nicht wiederhergestellt werden.',
          es:
            'Al comienzo de la fase de Enfrentamiento, puedes gastar 1 ficha de Cálculos y 1 [Charge] para lanzar 1 enjambre de droides zumbadores utilizando la plantilla (3 [Bank Left]), (3 [Straight]), o (3 [Bank Right]). Las [Charge] de esta carta no pueden recuperarse.',
          fr:
            "Au début de la phase d'engagement, vous pouvez dépenser 1 marqueur de calcul et 1 [Charge] pour lancer 1 nuée de droïdes buzz en utilisant le gabarit (3 [Bank Left]), (3 [Straight]) ou (3 [Bank Right]. La [Charge] de cette carte ne peut pas être récupérée.",
          it:
            "All'inizio della Fase di Ingaggio, puoi spendere 1 segnalino calcolo e 1 [Charge] per lanciare 1 sciame di droidi insetto usando il modello (3 [Bank Left]), (3 [Straight]) o (3 [Bank Right]). Le [Charge] di questa carta non possono essere recuperate.",
          pl:
            'Na początku fazy walki możesz wydać 1 żeton obliczeń i 1 [Charge], aby wystrzelić 1 rój droidów sabotażowych, korzystając z wzornika (3 [Bank Left]), (3 [Straight]) albo (3 [Bank Right]). Nie można odzyskać [Charge] tej karty.',
          pt:
            "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. This card's [Charge] cannot be recovered.",
          zh:
            "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. This card's [Charge] cannot be recovered.",
        },
        charges: { value: 1, recovers: 0 },
        slots: ['Missile'],
        device: {
          name: 'Buzz Droid Swarm',
          type: 'Remote',
          effect:
            'After an enemy ship moves through or overlaps you, relocate to its front or rear guides (you are at range 0 of this ship). You cannot overlap an object this way. If you cannot be placed at either set of guides, you and that ship each suffer 1 [Hit] damage. Engagement Phase: At your initiative, each enemy ship at range 0 suffers 1 [Critical Hit] damage.',
        },
        ffg: 543,
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: false,
    epic: true,
  },
  {
    limited: 1,
    xws: 'diamondboronmissiles',
    sides: [
      {
        title: {
          en: 'Diamond-Boron Missiles',
          de: 'Diamant-Boron-Raketen',
          fr: 'Missiles Diamant-Bore',
          es: 'Misiles de diamante-boro',
          it: 'Missili a Diamante Borico',
          pl: 'Rakiety diamentowo-borowe',
          pt: 'Diamond-Boron Missiles',
          zh: 'Diamond-Boron Missiles',
        },
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        ability: {
          en:
            "Attack ([Lock]): Spend 1 [Charge]. After this attack hits, you may spend 1 [Charge]. If you do, each ship at range 0-1 of the defender with agility equal to or less than the defender's rolls 1 attack die and suffers 1 [Hit]/[Critical Hit] damage for each matching result.",
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Nachdem dieser Angriff getroffen hat, darfst du [Charge] ausgeben. Falls du das tust, wirft jedes Schiff in Reichweite 0-1 des Verteidigers, dessen Wendigkeit gleich oder kleiner als die des Verteidigers ist, 1 Angriffswürfel und erleidet [Hit]/[Critical Hit]-Schaden für jedes passende Ergebnis.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Después de que este ataque impacte, puedes gastar 1 [Charge]. Si lo haces, toda nave a alcance 0-1 del defensor con un valor de Agilidad igual o inferior al del defensor tira 1 dado de ataque y sufre 1 de daño [Hit]/[Critical Hit] por cada resultado equivalente.',
          fr:
            "Attaque ([Lock]) : dépensez 1 [Charge]. Après que cette attaque a touché, vous pouvez dépenser 1 [Charge]. Dans ce cas, chaque vaisseau à portée 0-1 du défenseur dont l'agilité est inférieure ou égale à celle du défenseur lance 1 dé d'attaque et subit 1 dégât [Hit]/[Critical Hit] pour chaque résultat correspondant.",
          it:
            'Attack ([Lock]): Spendi 1 [Charge]. Dopo che questo attacco ha colpito, puoi spendere 1 [Charge]. Se lo fai, ogni nave a gittata 0-1 dal difensore con valore di agilità pari o inferiore a quello del difensore tira 1 dado di attacco e subisce 1 danno [Hit]/[Critical Hit] per ogni risultato corrispondente.',
          pl:
            'Atak ([Lock]): Wydaj 1 [Charge]. Gdy ten atak trafi, możesz wydać 1 [Charge]. Jeżeli tak zrobisz, każdy statek, którego zwrotność jest równa lub mniejsza od zwrotności obrońcy i znajduje się w zasięgu 0-1 od obrońcy, rzuca 1 kością ataku i przyjmuje 1 uszkodzenie [Hit]/[Critical Hit] za każdy analogiczny wynik.',
          pt:
            "Attack ([Lock]): Spend 1 [Charge]. After this attack hits, you may spend 1 [Charge]. If you do, each ship at range 0-1 of the defender with agility equal to or less than the defender's rolls 1 attack die and suffers 1 [Hit]/[Critical Hit] damage for each matching result.",
          zh:
            "Attack ([Lock]): Spend 1 [Charge]. After this attack hits, you may spend 1 [Charge]. If you do, each ship at range 0-1 of the defender with agility equal to or less than the defender's rolls 1 attack die and suffers 1 [Hit]/[Critical Hit] damage for each matching result.",
        },
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 580,
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 5 },
  },
  {
    limited: 0,
    xws: 'magpulsewarheads',
    sides: [
      {
        title: {
          en: 'Mag-Pulse Warheads',
          de: 'Magnetimpuls-Sprengköpfe',
          fr: 'Ogives à Impulsion Magnétique',
          es: 'Ojivas de pulso magnético',
          it: 'Mag-Pulse Warheads',
          pl: 'Mag-Pulse Warheads',
          pt: 'Mag-Pulse Warheads',
          zh: 'Mag-Pulse Warheads',
        },
        type: 'Missile',
        slots: ['Missile'],
        ability: {
          en:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
          de:
            'Angriff ([Lock]): Gib 1 [Charge] aus. Falls dieser Angriff trifft, erleidet der Verteidiger 1 [Critical Hit]-Schaden und erhält 1 Erschöpfungs- und 1 Störsignalmarker. Dann negiere alle [Hit]/[Critical Hit]-Ergebnisse.',
          es:
            'Ataque ([Lock]): Gasta 1 [Charge]. Si este ataque impacta, el defensor sufre 1 de daño [Critical Hit] y recibe 1 ficha de Interferencia y 1 ficha de Merma. Luego anula todos los resultados [Hit]/[Critical Hit] .',
          fr:
            "Attaque ([Lock]) : dépensez 1 [Charge]. Si cette attaque touche, le défenseur subit 1 dégât [Critical Hit] et gagne 1 marqueur d'épuisement et 1 marqueur de brouillage. Puis annulez tous les résultats [Hit]/[Critical Hit].",
          it:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
          pl:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
          pt:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
          zh:
            'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
        },
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: true,
        },
        ffg: 651,
      },
    ],
    hyperspace: true,
    epic: true,
    cost: { value: 5 },
  },
  {
    limited: 0,
    xws: 'multimissilepods',
    hyperspace: true,
    epic: true,
    sides: [
      {
        ability: {
          en:
            'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you may spend up to 2 [Charge] to roll that many additional attack dice instead.',
          de:
            'Angriff ([Calculate] oder [Lock]): Gib 1 [Charge] aus. Falls der Verteidiger in deinem [Front Arc]ist, darfst du 1 [Charge] ausgeben, um 1 zusätzlichen Angriffswürfel zu werfen. Falls der Verteidiger in deinem [Bullseye Arc] ist, darfst du stattdessen bis zu 2 [Charge] ausgeben, um ebenso viele zusätzliche Angriffswürfel zu werfen.',
          fr:
            "Attaque ([Calculate] or [Lock]) : dépensez 1 [Charge]. Si le défenseur est dans votre [Front Arc], vous pouvez dépenser 1 [Charge] pour lancer 1 dé d'attaque supplémentaire. Si le défenseur est dans votre [Bullseye Arc], vous pouvez dépenser jusqu'à 2 [Charge] pour lancer autant de dés supplémentaires à la place.",
          it:
            'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you may spend up to 2 [Charge] to roll that many additional attack dice instead.',
          pl:
            'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you may spend up to 2 [Charge] to roll that many additional attack dice instead.',
          pt:
            'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you may spend up to 2 [Charge] to roll that many additional attack dice instead.',
          zh:
            'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you may spend up to 2 [Charge] to roll that many additional attack dice instead.',
          es:
            'Ataque ([Calculate] o [Lock]): Gasta 1 [Charge]. Si el defensor está en tu [Front Arc], puedes gastar 1 [Charge] para tirar 1 dado de ataque adicional. Si el defensor está en tu [Bullseye Arc], en vez de eso puedes gastar hasta 2 [Charge] para tirar esa misma cantidad de dados de ataque adicionales.',
        },
        title: {
          en: 'Multi-Missile Pods',
          de: 'Mehrfachraketenwerfer',
          fr: 'Nacelles Multi-Missile',
          it: 'Multi-Missile Pods',
          pl: 'Multi-Missile Pods',
          pt: 'Multi-Missile Pods',
          zh: 'Multi-Missile Pods',
          es: 'Cápsulas de misiles múltiples',
        },
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        attack: {
          arc: 'Full Front Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        charges: { value: 5, recovers: 0 },
        ffg: 673,
      },
    ],
    cost: { value: 6 },
  },
  {
    limited: 2,
    xws: 'xx23sthreadtracers',
    hyperspace: true,
    epic: false,
    sides: [
      {
        ability: {
          en:
            'Attack ([Focus], [Calculate], or [Lock]): Spend 1 [Charge]. If this attack hits, each friendly ship at range 1-3 of the defender may acquire a lock on the defender. Then cancel all dice results.',
        },
        title: { en: 'XX-23 S-Thread Tracers' },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        charges: { value: 2, recovers: 0 },
        type: 'Missile',
        slots: ['Missile'],
        ffg: 851,
      },
    ],
    cost: { value: 2 },
  },
];

export default t;

const data = [
  {
    "name": "Ashe",
    "icon": "icons/damage/Ashe.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Can leap to Ashe's high ground and disrupt her aim with his barrier and Tesla Cannon",
        "ua": "Може стрибнути на висоту Еш і зірвати їй приціл за допомогою бар'єра та Тесли"
      },
      "D.Va": {
        "en": "Defense Matrix negates Ashe’s shots and she can quickly dive Ashe to pressure her",
        "ua": "Матриця поглинання нівелює постріли Еш, і вона може швидко задайвити її"
      },
      "Wrecking Ball": {
        "en": "Extremely mobile; he can knock Ashe away from vantage points and is hard for her to hit",
        "ua": "Надзвичайно мобільний; може вибити Еш з вигідної позиції і важкий для прицілу"
      },
      "Genji": {
        "en": "Deflects Ashe’s rifle shots and uses his mobility to dive her in the backline",
        "ua": "Відбиває постріли гвинтівки Еш і завдяки мобільності заходить у тил"
      },
      "Tracer": {
        "en": "Small and fast target that can dodge Ashe’s shots and flank her easily",
        "ua": "Маленька й швидка ціль, яку важко влучити, легко заходить з флангу"
      },
      "Widowmaker": {
        "en": "Outranges Ashe; can eliminate her with a single long-range headshot before Ashe can react",
        "ua": "Перестрілює Еш з великої дистанції; може вбити в голову до того, як вона зреагує"
      },
      "Ana": {
        "en": "Long-range hitscan can duel Ashe, and Sleep Dart can shut down her ultimate (B.O.B.)",
        "ua": "Далекобійна гітскан-зброя дозволяє боротися з Еш, а дротик сну перериває ульту (B.O.B.)"
      },
      "Baptiste": {
        "en": "Immortality Field negates Ashe’s burst damage (and B.O.B), while his hitscan fire challenges her at range",
        "ua": "Поле безсмертя нейтралізує шкоду від Еш (та B.O.B.), а гітскан-стрільба створює тиск на дистанції"
      },
      "Kiriko": {
        "en": "Protection Suzu cleanses Ashe’s Dynamite burn, and Kiriko’s swift headshots threaten Ashe from any angle",
        "ua": "Сузу очищає опіки від динаміту, а точні постріли Кіріко загрожують Еш з будь-якого кута"
      }
    }
  },
  {
    "name": "Bastion",
    "icon": "icons/damage/Bastion.webp",
    "role": "damage",
    "counters": {
      "D.Va": {
        "en": "Boosters let her close distance and Defense Matrix blocks Bastion’s Sentry mode barrage at close range",
        "ua": "Бустери дозволяють скоротити дистанцію, а матриця блокує шкоду з режиму турелі Бастіона"
      },
      "Orisa": {
        "en": "Fortify lets her survive Bastion’s burst, and Javelin Spin + Throw can interrupt Bastion’s Sentry or ultimate",
        "ua": "Фортифікація дозволяє пережити шкоду від Бастіона, спис перериває його турель чи ульту"
      },
      "Sigma": {
        "en": "Can deploy a shield to block Bastion’s line of fire and use Accretion (rock) to stun Bastion out of turret mode",
        "ua": "Може виставити щит проти Бастіона і оглушити його за допомогою каменя (Accretion)"
      },
      "Sombra": {
        "en": "Hack disables Bastion’s transformation and mobility, leaving him vulnerable in turret form",
        "ua": "Хак вимикає трансформацію і мобільність Бастіона, роблячи його вразливим"
      },
      "Widowmaker": {
        "en": "Can engage from beyond Bastion’s effective range, picking him off with a high-damage snipe",
        "ua": "Може атакувати з-за меж ефективної дальності Бастіона, вбиваючи його снайперським пострілом"
      },
      "Genji": {
        "en": "Deflect returns Bastion’s high DPS back at him, and Genji can close distance while Bastion is reloading or relocating",
        "ua": "Відбиває шкоду від Бастіона, і поки той перезаряджається — Гендзі може підійти впритул"
      },
      "Ana": {
        "en": "Sleep Dart can immobilize Bastion during Sentry mode, and Biotic Grenade prevents him from being healed through damage",
        "ua": "Дротик сну зупиняє режим турелі, а граната унеможливлює зцілення"
      },
      "Zenyatta": {
        "en": "Discord Orb amplifies damage Bastion takes, making him easier to burst down, and Zenyatta can snipe from afar with charged shots",
        "ua": "Орб розладу збільшує вхідну шкоду, а заряджені кулі дозволяють вбити з далекої дистанції"
      },
      "Baptiste": {
        "en": "Immortality Field protects teammates from Bastion’s burst damage, and his amplified burst fire can quickly take Bastion out",
        "ua": "Поле безсмертя рятує команду від шкоди Бастіона, а власна шкода дозволяє вивести його з гри"
      }
    }
  },
  {
    "name": "Cassidy",
    "icon": "icons/damage/Cassidy.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Jumps onto Cassidy to deny his mid-range comfort and bubbles to block Cassidy’s shots",
        "ua": "Стрибає на Кессіді, позбавляючи його комфортної дистанції, щит блокує постріли"
      },
      "Wrecking Ball": {
        "en": "Rolls through and knocks Cassidy around, making it hard for Cassidy to land accurate shots",
        "ua": "Катиться і відштовхує Кессіді, ускладнюючи йому прицілювання"
      },
      "Doomfist": {
        "en": "Uses quick engages and crowd control (Rocket Punch, etc.) to prevent Cassidy from lining up shots or using Deadeye safely",
        "ua": "Швидко вривається і застосовує контроль, не даючи Кессіді влучити чи використати ульту"
      },
      "Pharah": {
        "en": "Stays airborne where Cassidy struggles to hit, raining rockets while largely avoiding his effective range",
        "ua": "Літає, де Кессіді важко влучити, і атакує з безпечної дистанції"
      },
      "Widowmaker": {
        "en": "Engages Cassidy from distances he cannot contest, often killing him before he can get in range",
        "ua": "Атакує з такої дистанції, де Кессіді не може дати відсіч"
      },
      "Tracer": {
        "en": "Outmaneuvers Cassidy with superior mobility, making his shots and Magnetic Grenade hard to land",
        "ua": "Перевершує Кессіді мобільністю, ускладнюючи приціл і попадання гранати"
      },
      "Kiriko": {
        "en": "Cleanses Cassidy’s Magnetic Grenade from allies with Protection Suzu and can escape his close-range threat with Swift Step",
        "ua": "Сузу очищає магнітну гранату з союзників, а телепорт дозволяє уникнути загрози зблизька"
      },
      "Baptiste": {
        "en": "Can survive Cassidy’s burst with Regenerative Burst or Immortality Field and duel Cassidy using his accurate hitscan rifle",
        "ua": "Виживає після шкоди Кессіді і може дати відсіч точним стрільбом з гітскан-гвинтівки"
      },
      "Lucio": {
        "en": "Difficult for Cassidy to hit due to Lucio’s speed; Lucio can boop Cassidy to disrupt his aim or cancel Deadeye by knocking him out of line-of-sight",
        "ua": "Швидкий і важкий для влучання; може вибити Кессіді або перервати його ульту"
      }
    }
  },
  {
    "name": "Echo",
    "icon": "icons/damage/Echo.webp",
    "role": "damage",
    "counters": {
      "D.Va": {
        "en": "Can fly up to contest Echo in the air and use Defense Matrix to nullify Echo’s sticky bombs and focusing beam",
        "ua": "Може злетіти й боротися з Ехо у повітрі, використовуючи Матрицю поглинання"
      },
      "Winston": {
        "en": "Leaps to Echo’s position and uses Tesla Cannon (which requires no aim) to damage her, forcing Echo out of the sky",
        "ua": "Стрибає до Ехо і завдає шкоди Теслою, змушуючи її тікати з неба"
      },
      "Sigma": {
        "en": "Deploys a barrier and uses long-range projectiles to pressure Echo; Kinetic Grasp absorbs her burst damage while Accretion can knock her from the air",
        "ua": "Встановлює щит і стріляє з далека; камінь збиває Ехо з повітря"
      },
      "Ashe": {
        "en": "Hitscan that can consistently hit Echo at range, and Dynamite’s splash damages Echo even while flying",
        "ua": "Гітскан-герой, який стабільно влучає по Ехо з дистанції; динаміт діє навіть у повітрі"
      },
      "Widowmaker": {
        "en": "One fully charged headshot will eliminate Echo in mid-air, countering Echo’s aerial advantage with pure range and damage",
        "ua": "Один заряджений постріл у голову вбиває Ехо, нейтралізуючи її повітряну перевагу"
      },
      "Soldier: 76": {
        "en": "Hitscan rifle and Helix Rockets let him reliably track and damage Echo during her flight, bringing her down quickly",
        "ua": "Гвинтівка та ракети дозволяють трекати й швидко знищити Ехо"
      },
      "Ana": {
        "en": "Scoped rifle shots pressure Echo at long range, and a well-aimed Sleep Dart can drop Echo from the sky or cancel her Duplicate ultimate",
        "ua": "Прицільні постріли тиснуть на Ехо з дистанції; дротик сну може зняти її з неба або скасувати ульту"
      },
      "Baptiste": {
        "en": "Can shoot Echo out of the air with his hitscan bursts and use Immortality Field to protect allies from Echo’s burst combo when she dives",
        "ua": "Може вбити Ехо у повітрі, а поле безсмертя рятує союзників від її шкоди"
      },
      "Zenyatta": {
        "en": "Discord Orb increases damage Echo takes, making her easier to eliminate, and his charged volley can unexpectedly snipe Echo out of the air",
        "ua": "Орб розладу збільшує шкоду, Ехо стає вразливою до снайперських залпів"
      }
    }
  },
  {
    "name": "Genji",
    "icon": "icons/damage/Genji.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Tesla Cannon ignores Genji’s Deflect and forces Genji to retreat; Winston’s leap chases Genji down when he tries to escape",
        "ua": "Тесла ігнорує Відбиття, змушуючи Гендзі тікати; стрибок переслідує його при втечі"
      },
      "Orisa": {
        "en": "Fortify prevents Genji’s crowd control and reduces damage from Dragonblade; Javelin toss can stun Genji mid-dash or ultimate, stopping his attack",
        "ua": "Фортифікація захищає від Блейду, спис перериває його даш чи ульту"
      },
      "Zarya": {
        "en": "Particle Barriers block Genji’s damage and deny him dash resets, while her beam cannot be deflected and quickly drains Genji’s health at close range",
        "ua": "Бар’єри блокують його шкоду і не дають дашів; промінь не можна відбити і знищує зблизька"
      },
      "Pharah": {
        "en": "Stays well out of Genji’s reach in the air; Genji cannot effectively deflect rockets or pressure a flying Pharah",
        "ua": "Тримається в небі, куди Гендзі не дістає; ракети не відбиваються"
      },
      "Sombra": {
        "en": "Hack prevents Genji from using Deflect or Swift Strike, leaving him unable to escape or block damage and making him an easy target",
        "ua": "Хак вимикає даш і Відбиття, роблячи Гендзі легкою ціллю"
      },
      "Torbjorn": {
        "en": "Torb’s turret automatically targets Genji (ignoring Deflect), and Overload gives Torbjorn the durability and firepower to win close-range duels against Genji",
        "ua": "Турель ігнорує Відбиття, а Перевантаження дає Торбу шанс на близький бій"
      },
      "Moira": {
        "en": "Biotic Grasp locks onto Genji even through Deflect, and she can Fade away from him, making it hard for Genji to secure a kill",
        "ua": "Живильне захоплення діє крізь Відбиття, а Зникнення дозволяє вийти з бою"
      },
      "Brigitte": {
        "en": "Her Shield Bash and Whip Shot interrupt Genji’s engage, and her armor and sustained area damage (Inspire) make diving her very unfavorable for Genji",
        "ua": "Щит і бічний удар переривають атаку, броня і лікування стримують дайв"
      },
      "Ana": {
        "en": "Sleep Dart can stop Genji’s Dragonblade outright, and Biotic Grenade prevents him from healing (including any support or payload healing), making Genji much easier to finish off",
        "ua": "Дротик сну зупиняє Блейд, граната блокує зцілення і полегшує його ліквідацію"
      }
    }
  },
  {
    "name": "Hanzo",
    "icon": "icons/damage/Hanzo.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Closes the gap on Hanzo with a leap, making it difficult for Hanzo to land arrows and forcing him off sniper perches with Tesla Cannon damage",
        "ua": "Стрибає на Хандзо, позбавляючи його позиції і збиваючи приціл"
      },
      "D.Va": {
        "en": "Can use Boosters to rush Hanzo and Defense Matrix to negate his arrows, denying Hanzo the space and time he needs to line up shots",
        "ua": "Бустери дозволяють наблизитися, а Матриця блокує стріли"
      },
      "Wrecking Ball": {
        "en": "Rolls into Hanzo’s position and knocks him away with Piledriver, disrupting Hanzo’s aim and making it hard for him to focus on sniping",
        "ua": "Прокат і Удар руйнують приціл, заважаючи фокусуватися"
      },
      "Widowmaker": {
        "en": "Engages Hanzo at extreme distance where her hitscan sniper rifle has an advantage over Hanzo’s slower projectile arrows",
        "ua": "З великої дистанції Вдова має перевагу над Хандзо"
      },
      "Genji": {
        "en": "Swiftly closes distance and uses Deflect to turn Hanzo’s arrows back on him, exploiting Hanzo’s vulnerability in close-range skirmishes",
        "ua": "Закриває дистанцію, відбиває стріли, використовує слабкість Хандзо зблизька"
      },
      "Tracer": {
        "en": "Flanks Hanzo with rapid movement; her quick bursts make it hard for Hanzo to draw a bead on her before she deals lethal damage",
        "ua": "Фланкує швидкими ривками, складно влучити до того, як буде смертельний шквал"
      },
      "Ana": {
        "en": "Can contest Hanzo from long range with hitscan shots and use Sleep Dart to neutralize him if he’s lining up a Dragonstrike or focused shot",
        "ua": "Може зняти Хандзо з дистанції, дротик сну зупиняє ульту або прицільний постріл"
      },
      "Baptiste": {
        "en": "Uses his Amplification Matrix and hitscan fire to duel Hanzo at range, and his Immortality Field can save allies from a burst headshot or Dragonstrike",
        "ua": "Матриця підсилення та поле безсмертя рятують від хедшоту або ульти"
      },
      "Zenyatta": {
        "en": "Places Discord Orb on Hanzo to increase incoming damage to him, and Zenyatta’s charged orb volleys can catch Hanzo off-guard from across the map",
        "ua": "Орб розладу збільшує шкоду по Хандзо, заряджені кулі можуть несподівано його вбити"
      }
    }
  },
  {
    "name": "Junkrat",
    "icon": "icons/damage/Junkrat.webp",
    "role": "damage",
    "counters": {
      "D.Va": {
        "en": "Can eat Junkrat’s grenades and RIP-Tire with Defense Matrix, and boosters allow her to chase and eliminate Junkrat in his own backline",
        "ua": "Поглинає гранати і RIP-Tire Джанкрата за допомогою Матриці поглинання, а бустери дозволяють переслідувати його в тилу"
      },
      "Sigma": {
        "en": "Shields allies from Junkrat’s explosive spam and uses Kinetic Grasp to absorb his projectiles; Sigma’s Accretion rock can interrupt Junkrat or his RIP-Tire",
        "ua": "Захищає союзників від вибухів Джанкрата щитом, а Кінетичне поглинання знищує його снаряди; камінь може зірвати RIP-Tire"
      },
      "Orisa": {
        "en": "Uses Fortify to avoid being knocked back or combo’d by mines and can spear spin to destroy incoming grenades; her Javelin can stun Junkrat or cancel his ultimate if thrown at the tire",
        "ua": "Фортифікація запобігає відкиданню мінами, а обертання списа знищує гранати; кидок списа зупиняє Джанкрата чи його ульт"
      },
      "Pharah": {
        "en": "Operates outside Junkrat’s effective range by attacking from the air, making it nearly impossible for Junkrat to hit her reliably",
        "ua": "Атакує з повітря поза зоною дії Джанкрата, тож йому важко влучити"
      },
      "Widowmaker": {
        "en": "Picks Junkrat off from long range before he can close the gap or spam explosives, eliminating him with a single shot if he exposes himself",
        "ua": "Вибиває Джанкрата з гри з далекої дистанції до того, як він підійде чи почне спамити"
      },
      "Soldier: 76": {
        "en": "Outranges Junkrat and can safely destroy his traps and mines; Soldier’s sustained fire and Helix Rockets punish Junkrat when he tries to peek",
        "ua": "Перевершує його по дальності, знищує пастки й міни, а ракети й автоматичний вогонь карають за піки"
      },
      "Ana": {
        "en": "Lands long-range shots on Junkrat while staying out of his grenade range, and Sleep Dart can stop a RIP-Tire in its tracks",
        "ua": "Попадає з дистанції, не підходячи до гранат; дротик сну може зупинити RIP-Tire"
      },
      "Kiriko": {
        "en": "Swift Steps away from Junkrat’s traps or chaos, and Protection Suzu can save allies from his burst damage or even negate his RIP-Tire explosion at the critical moment",
        "ua": "Стрибок Кіріко уникає пасток і хаосу, а Сузу рятує союзників від шкоди або RIP-Tire в останню мить"
      },
      "Baptiste": {
        "en": "Immortality Field protects the team from Junkrat’s explosive bursts and RIP-Tire, and his long-range hitscan can pick Junkrat off from a safe distance",
        "ua": "Поле безсмертя захищає команду від вибухів і RIP-Tire, а гітскан дозволяє вбити Джанкрата з безпечної відстані"
      }
    }
  },
  {
    "name": "Mei",
    "icon": "icons/damage/Mei.webp",
    "role": "damage",
    "counters": {
      "D.Va": {
        "en": "Boosters allow D.Va to quickly close the distance or escape Mei’s freeze attempts, and Defense Matrix can nullify Mei’s alternate fire icicles",
        "ua": "Бустери дозволяють наблизитися або втекти від заморозки Мей, Матриця поглинає айсикли"
      },
      "Roadhog": {
        "en": "Can hook Mei before she closes in, dealing massive damage; Hog’s high health and Take a Breather help him survive Mei’s slow and avoid getting frozen",
        "ua": "Ціпок хукає Мей до того, як вона наблизиться, а високе ХП і зцілення переживають уповільнення"
      },
      "Orisa": {
        "en": "Fortify prevents being frozen by Mei’s Blizzard or slowed by her primary fire, and Orisa’s Energy Javelin can stun Mei out of Cryo-Freeze or interrupt her ultimate cast",
        "ua": "Фортифікація блокує заморозку чи уповільнення, а Спис перериває її ульту чи Кріо-заморозку"
      },
      "Pharah": {
        "en": "Attacks from heights Mei can’t easily reach, preventing Mei from using her freeze effectively and bombarding her with rockets",
        "ua": "Атакує з повітря, куди Мей не дістає, бомбардуючи зверху"
      },
      "Widowmaker": {
        "en": "Picks off Mei from long range, well outside the reach of Mei’s Endothermic Blaster, preventing Mei from ever getting close enough to threaten her",
        "ua": "Вбиває Мей з далека, де її бластер не досягає"
      },
      "Reaper": {
        "en": "Deals overwhelming close-range damage that outpaces Mei’s slow; Reaper can Wraith Form out of Blizzard or any slow, and will usually win a point-blank duel against Mei",
        "ua": "Завдає потужної шкоди зблизька, що перевершує уповільнення Мей; може вийти з Бліззарда формою Примари"
      },
      "Kiriko": {
        "en": "Protection Suzu cleanses the freeze effect from Mei’s Blizzard and can save allies from being frozen solid, while Kiriko can evade Mei with swift teleportation",
        "ua": "Сузу очищує заморозку від Бліззарда і рятує союзників; телепорт дозволяє уникнути Мей"
      },
      "Baptiste": {
        "en": "Immortality Field keeps teammates alive through Blizzard and prevents Mei from securing kills when they are low, and Baptiste’s burst rifle lets him chip away at Mei from a safe range",
        "ua": "Поле безсмертя тримає союзників живими під час Бліззарда, а рушниця Баптіста шкодить Мей здалеку"
      },
      "Lucio": {
        "en": "Speed Boost helps allies outrun Mei’s freeze area and Blizzard, and Lucio’s mobility makes him a very hard target for Mei to catch or slow down",
        "ua": "Прискорення дозволяє втекти з Бліззарда, а мобільність Лусіо ускладнює уповільнення"
      }
    }
  },
  {
    "name": "Pharah",
    "icon": "icons/damage/Pharah.webp",
    "role": "damage",
    "counters": {
      "D.Va": {
        "en": "Can contest Pharah directly by flying up to her and using Defense Matrix to eat rockets, effectively dueling Pharah in the sky",
        "ua": "Може злетіти до Фари і Матрицею з'їсти ракети, ефективно борючись з нею в повітрі"
      },
      "Sigma": {
        "en": "Projects a barrier to block Pharah’s rockets and fires accurate long-range shots to pressure her; his Accretion can knock Pharah out of the air if timed well",
        "ua": "Проєктує щит проти ракет і стріляє точно з дистанції; камінь може вибити Фару з неба"
      },
      "Roadhog": {
        "en": "Hooks Pharah out of the sky when she flies too low or near, instantly grounding and eliminating her before she can use her mobility to escape",
        "ua": "Хукає Фару, коли вона низько, моментально вбиваючи до втечі"
      },
      "Soldier: 76": {
        "en": "Hitscan bullets and a tracking visor (ultimate) allow him to steadily chip away at Pharah, and Helix Rockets deal burst if she hovers predictably",
        "ua": "Гітскан і візор дозволяють трекати Фару, а ракети карають за передбачувані польоти"
      },
      "Ashe": {
        "en": "Uses her hitscan rifle to land powerful shots on Pharah and can knock Pharah out of position mid-air with Coach Gun blast if needed",
        "ua": "Гвинтівка дозволяє влучати по Фарі, а рушничний постріл скидає її з позиції"
      },
      "Widowmaker": {
        "en": "Ideally positioned to eliminate Pharah at long range with a single sniper shot, ending the airborne threat before Pharah can react or get healing",
        "ua": "Може вбити Фару одним пострілом з далека, завершуючи загрозу до її реакції"
      },
      "Ana": {
        "en": "Shoots Pharah from across the map with hitscan darts and can Sleep Dart Pharah if she hovers or uses Barrage, instantly stopping the ultimate",
        "ua": "Гітскан-стріли влучають здалека, а дротик сну перериває Бараж"
      },
      "Baptiste": {
        "en": "Can duel Pharah with his hitscan weapon and keep his team sustained under rocket fire with AoE healing; Immortality Field saves allies from Barrage’s lethal damage",
        "ua": "Може боротися з Фарою гітскан-зброєю і зцілювати команду; Поле безсмертя рятує від Баража"
      },
      "Zenyatta": {
        "en": "Discord Orb greatly increases damage Pharah takes, making her much easier for hitscans to finish off, and a charged orb volley from Zenyatta can surprise and eliminate Pharah if she’s not careful",
        "ua": "Орб розладу збільшує шкоду по Фарі, а заряджений залп може несподівано її вбити"
      }
    }
  },
  {
    "name": "Reaper",
    "icon": "icons/damage/Reaper.webp",
    "role": "damage",
    "counters": {
      "Orisa": {
        "en": "Fortify prevents being knocked back or easily shredded by Reaper’s shotguns, and Energy Javelin can stun or push Reaper away, cancelling his Death Blossom if timed properly",
        "ua": "Фортифікація блокує відштовхування і дробовики Жнеця; спис перериває або відкидає під час Блейду"
      },
      "Roadhog": {
        "en": "A well-timed Chain Hook pulls Reaper out of Wraith Form or Death Blossom, and Roadhog’s shotgun and massive health pool allow him to duel Reaper at close range, especially with Take a Breather to deny Reaper the kill",
        "ua": "Хук витягує Жнеця з Примари або Блейду; високе ХП і лікування дають шанс на дуель"
      },
      "Sigma": {
        "en": "Keeps distance with a barrier and can use Accretion (rock) to interrupt Reaper’s Death Blossom; Sigma’s ranged damage lets him chip Reaper down before Reaper can close in",
        "ua": "Тримає дистанцію бар'єром, камінь перериває ульту, а дальня шкода зношує Жнеця до підходу"
      },
      "Pharah": {
        "en": "Operates high in the air where Reaper can’t reach or effectively damage her, while safely pelting him with rockets from above",
        "ua": "Літає високо, куди Жнець не дістає, і безпечно закидає ракетами"
      },
      "Mei": {
        "en": "Mei’s Endothermic Blaster slows Reaper’s approach, and if Reaper gets too close she can use Cryo-Freeze to deny him lifesteal or Blizzard to freeze and eliminate him",
        "ua": "Бластер Мей уповільнює Жнеця, Кріо-фріз блокує зцілення, а Бліззард може його вбити"
      },
      "Sombra": {
        "en": "Hack removes Reaper’s ability to Wraith or teleport, leaving him with no escape and vulnerable to focus fire; she can also interrupt Death Blossom by hacking during the wind-up",
        "ua": "Хак відключає Примару й телепорт, роблячи Жнеця беззахисним; також перериває Блейд"
      },
      "Ana": {
        "en": "Biotic Grenade prevents Reaper from healing via his lifesteal, and Sleep Dart can stop him mid-Death Blossom or when he flanks, completely nullifying his most dangerous moves",
        "ua": "Граната блокує зцілення від вампіризму, а дротик сну зупиняє ульту або фланг"
      },
      "Zenyatta": {
        "en": "Discord Orb makes Reaper extremely squishy, and Transcendence negates the damage from Death Blossom by outhealing it, denying Reaper kills during his ultimate",
        "ua": "Орб розладу робить його вразливим, а Трансцендентність переграє Блейд зціленням"
      },
      "Baptiste": {
        "en": "Immortality Field can entirely counter Death Blossom’s kill potential, keeping teammates alive through the ultimate, and Baptiste’s burst damage from range pressures Reaper before he can close distance",
        "ua": "Поле безсмертя повністю нейтралізує Блейд, а дальня шкода тисне ще до зближення"
      }
    }
  },
  {
    "name": "Sojourn",
    "icon": "icons/damage/Sojourn.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Jumps on Sojourn to force her out of position and uses Barrier to block her railgun shots, exploiting her vulnerability to close-range pressure",
        "ua": "Стрибає на Со́джорн, вибиваючи її з позиції, та блокує рельсу бар’єром, тиснучи зблизька"
      },
      "D.Va": {
        "en": "Closes distance rapidly with boosters and can use her Defense Matrix to eat Sojourn’s Disruptor Shot (area slow) and some primary fire, preventing Sojourn from easily charging her railgun",
        "ua": "Бустерами швидко скорочує дистанцію, а Матриця поглинає її уповільнення та частину шкоди"
      },
      "Sigma": {
        "en": "Deploys a shield to cut off Sojourn’s sightlines and uses Kinetic Grasp to absorb her energy shots; Sigma can also duel at mid-range with his own consistent damage, denying Sojourn free charge",
        "ua": "Встановлює щит, який закриває їй огляд, і поглинає енергетичні постріли; стабільно стріляє з середньої дистанції"
      },
      "Genji": {
        "en": "Deflect can send Sojourn’s energy projectiles back at her, and Genji’s swift movement and wall-climb allow him to dive onto Sojourn, who has limited escape once her Power Slide is used",
        "ua": "Відбиття повертає енергетичні снаряди; мобільність Гендзі дозволяє йому застрибнути на неї після використання ковзання"
      },
      "Widowmaker": {
        "en": "Has a longer effective range; she can out-snipe Sojourn by getting a kill with a fully charged shot before Sojourn can land a charged railgun hit",
        "ua": "Має більшу ефективну дальність; може вбити зарядженим пострілом до того, як Со́джорн відповість"
      },
      "Tracer": {
        "en": "Hard for Sojourn to hit due to erratic movement; Tracer can harass Sojourn, force her to use Power Slide defensively, and finish her once her mobility is on cooldown",
        "ua": "Складна ціль; Трейсер змушує Со́джорн витратити ковзання й добиває її, коли мобільність на кулдауні"
      },
      "Ana": {
        "en": "Can safely dart Sojourn from a distance and use Sleep Dart if Sojourn uses Overclock (ultimate) to disable the aimbot-like railgun volleys before they become lethal",
        "ua": "Може стріляти з безпечної дистанції, а дротик сну зупиняє ульту, перш ніж вона стане смертельною"
      },
      "Baptiste": {
        "en": "His Immortality Field can save allies from Sojourn’s one-shot railgun kills and he can duel Sojourn at range, with Regenerative Burst keeping him alive through her poke damage",
        "ua": "Поле безсмертя рятує союзників від ваншоту рельсою, а зцілення тримає його в бою проти її прокасту"
      },
      "Lucio": {
        "en": "Uses Speed Boost and wall-riding to be a very hard target for Sojourn to hit, and can knock her out of position with Soundwave, disrupting her aim and stopping her from lining up charged shots",
        "ua": "Прискорення й стінран роблять його складною ціллю, а Саундвейв вибиває її з позиції, ламаючи приціл"
      }
    }
  },
  {
    "name": "Soldier: 76",
    "icon": "icons/damage/Soldier_76.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Leaps at Soldier to force him off high ground and out of his Biotic Field, while Winston’s Tesla Cannon cannot be dodged or blocked by Soldier",
        "ua": "Стрибає на Солдата, зганяючи з хайграунда та поля зцілення, а Тесла не промахується"
      },
      "D.Va": {
        "en": "Boosters allow her to chase down Soldier and Defense Matrix can eat his Helix Rocket, denying his burst damage and making it hard for him to finish targets",
        "ua": "Бустери дозволяють наздогнати, а Матриця блокує ракети, не даючи Солдату добити ціль"
      },
      "Doomfist": {
        "en": "Uses Rocket Punch and crowd control to knock Soldier around or off ledges, interrupting Soldier’s Tactical Visor and preventing him from simply tracking targets freely",
        "ua": "Ракетний удар і контроль вибивають Солдата або зривають його ульту, не даючи спокійно стріляти"
      },
      "Genji": {
        "en": "Deflect turns Soldier’s own bullets and Helix Rockets back at him, and Genji’s mobility allows him to get close to Soldier where Genji can quickly eliminate him",
        "ua": "Відбиває кулі й ракети назад, а мобільність дозволяє наблизитись і швидко вбити"
      },
      "Widowmaker": {
        "en": "Engages from beyond Soldier’s optimal range, killing him with a sniper shot before he can effectively fight back or force her off",
        "ua": "Нападає з-за меж його дальності, вбиваючи снайперським пострілом до реакції"
      },
      "Sombra": {
        "en": "Hack disables Soldier’s Sprint and Biotic Field, leaving him immobile and without self-healing – easy prey once he’s locked in place and unable to escape or heal",
        "ua": "Хак вимикає біг і поле зцілення — він без мобільності та самозцілення, легка ціль"
      },
      "Ana": {
        "en": "Sleep Dart can shut down Soldier’s Tactical Visor, and her biotic rounds outdamage his self-heal, allowing her to duel him at range where she has the advantage",
        "ua": "Дротик сну зупиняє Тач Візор, а біотичні постріли переграють зцілення Солдата на дистанції"
      },
      "Baptiste": {
        "en": "Immortality Field protects the team from being wiped by Tactical Visor, and Baptiste’s hitscan burst fire lets him contend with Soldier on equal footing from a defensive position",
        "ua": "Поле безсмертя не дає Солдату знищити команду ультою, а Баптіст може вести бій на рівних"
      },
      "Zenyatta": {
        "en": "Discord Orb makes Soldier much easier to burst down, and Zenyatta can use Transcendence to counteract the damage from Tactical Visor, nullifying Soldier’s ultimate pressure",
        "ua": "Орб розладу полегшує його ліквідацію, а Трансцендентність переграє Тач Візор повністю"
      }
    }
  },
  {
    "name": "Sombra",
    "icon": "icons/damage/Sombra.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Tesla Cannon hits Sombra even if she’s trying to dodge or recloak, revealing her when she’s near, and Winston’s jump chases her down when she translocates short distances",
        "ua": "Тесла вражає навіть у невидимості чи ухиленні, виявляючи Сомбру; стрибок переслідує телепорт"
      },
      "Sigma": {
        "en": "Experimental Barrier can block hacks on teammates by breaking line-of-sight, and if Sombra decloaks, Sigma’s Accretion can stun her, preventing escape",
        "ua": "Бар’єр блокує хак на союзників, а камінь зупиняє її при деклоаці — не даючи втекти"
      },
      "Orisa": {
        "en": "Fortify prevents her from being severely affected by hack (she continues firing), and Orisa’s Javelin Spin can intercept Sombra’s EMP device or translocator toss; Energy Javelin can stop Sombra’s hack channel with a well-timed hit",
        "ua": "Фортифікація зменшує вплив хака (продовжує стріляти), Спис перериває EMP чи транслокатор"
      },
      "Reaper": {
        "en": "High close-range damage means if Sombra engages Reaper, he can win the duel with two shotgun blasts; he’s less ability-reliant, so hack doesn’t remove his core damage and he can Wraith Form to escape if needed",
        "ua": "Висока шкода зблизька дає перевагу Жнецю, навіть без здібностей; хак не блокує його урон"
      },
      "Widowmaker": {
        "en": "Infra-Sight (ultimate) exposes Sombra even in stealth, and a single headshot will eliminate Sombra if she ever uncloaks in Widow’s sight",
        "ua": "Інфра-зір бачить Сомбру навіть у стелсі, а хедшот вбиває одразу після деклоака"
      },
      "Cassidy": {
        "en": "Has the health and firepower to punish Sombra’s ambush; Magnetic Grenade forces Sombra to retreat or take heavy damage, and Cassidy’s hitscan shots can quickly finish her if she’s detected",
        "ua": "ХП і шкода карають засідки; магнітна граната змушує Сомбру тікати, а хітскан швидко добиває"
      },
      "Brigitte": {
        "en": "Any damage Brigitte deals (Shield Bash or Whip Shot) will interrupt Sombra’s hack; Brig’s shield and armor make her a poor target for Sombra, and Inspire healing keeps her team healthier so Sombra’s picks are harder",
        "ua": "Будь-який удар перериває хак; броня та щит роблять Брiґітту поганою ціллю, а Inspire лікує команду"
      },
      "Moira": {
        "en": "Moira’s area-effect damage (Biotic Grasp stream or Biotic Orb) can reveal Sombra even in stealth and force her away; Moira can Fade out of hack or chase Sombra down with continuous damage that Sombra cannot easily avoid",
        "ua": "Біотична шкода (сфера/потік) виявляє Сомбру навіть у стелсі, Fade рятує або дає погоню"
      },
      "Kiriko": {
        "en": "Protection Suzu cleanses the hack effect from teammates, and Kiriko can teleport out of danger if Sombra tries to focus her. Additionally, Kiriko’s quick headshots can punish Sombra’s low health if she tries to duel",
        "ua": "Сузу знімає хак, а телепорт дозволяє втекти; точні хедшоти Кіріко карають Сомбру при дуелі"
      }
    }
  },
  {
    "name": "Symmetra",
    "icon": "icons/damage/Symmetra.webp",
    "role": "damage",
    "counters": {
      "Reinhardt": {
        "en": "His barrier blocks Symmetra’s primary fire and turret lasers, preventing her beam from charging up; Reinhardt can safely advance and smash her turrets with his hammer",
        "ua": "Бар’єр блокує основну зброю і лазери турелей Сімметри; Райн може безпечно знищити їх молотом"
      },
      "Winston": {
        "en": "Clears Symmetra’s turrets almost instantly with Tesla Cannon and leaps on Symmetra to pressure her before she can ramp up her weapon or set up a strong defense",
        "ua": "Очищає турелі миттєво Теслою і стрибає на Сімметру, не даючи їй розкачати зброю"
      },
      "D.Va": {
        "en": "Mobility allows her to hunt down Symmetra’s sentry turrets, and Defense Matrix can eat Symmetra’s charged orbs. D.Va can also chase Symmetra, who has no mobility, and finish her off up close",
        "ua": "Мобільність дозволяє знищити турелі; Матриця поглинає кулі, а сама Діва добиває Сімметру впритул"
      },
      "Pharah": {
        "en": "Destroys Symmetra’s turrets from a safe distance and attacks Symmetra from angles she can’t retaliate against, preventing Symmetra from ever getting in range to use her beam effectively",
        "ua": "Знищує турелі здалека, атакуючи з недоступних кутів, не даючи Сімметрі вийти в зону променя"
      },
      "Junkrat": {
        "en": "Lobs grenades that can take out Symmetra’s turrets around corners or in rooms, and his mines dislodge Symmetra from fixed defensive setups. Symmetra’s teleporter and Photon Barrier do little to stop Junkrat’s explosive onslaught",
        "ua": "Гранати вбивають турелі за рогом, а міни вибивають Сімметру з позицій; телепорт і бар’єр не рятують"
      },
      "Widowmaker": {
        "en": "Picks off Symmetra or her turrets from long range; Symmetra must expose herself to do any damage, at which point Widowmaker can easily eliminate her before Symmetra can close distance",
        "ua": "Убиває Сімметру або її турелі з далека; їй треба висунутись, а Вдова одразу карає"
      },
      "Moira": {
        "en": "Her Biotic Orb and beam can quickly clear Symmetra’s turrets, and Moira’s mobility (Fade) allows her to avoid being cornered by Symmetra’s beam or trapped by turrets",
        "ua": "Біотична сфера і промінь швидко вбивають турелі; Fade дозволяє вийти з пастки або променя"
      },
      "Brigitte": {
        "en": "Shield can block turret damage for teammates, and Whip Shot or simple melee swings can destroy Symmetra’s low-HP turrets. Brigitte’s close-range prowess and crowd control make it hard for Symmetra to commit to a beam fight",
        "ua": "Щит захищає від турелей, батіг або ближні удари їх знищують; контроль ускладнює Сімметрі атаку"
      },
      "Baptiste": {
        "en": "Uses his Exo Boots to gain high ground away from Symmetra’s effective range and systematically shoot down her turrets. His Immortality Field can save allies from Symmetra’s close-range focus fire or her explosive Photon Barrier combo plays",
        "ua": "Завдяки стрибкам дістає високі позиції й стріляє по турелях; Поле безсмертя рятує від променя"
      }
    }
  },
  {
    "name": "Torbjorn",
    "icon": "icons/damage/Torbjorn.webp",
    "role": "damage",
    "counters": {
      "D.Va": {
        "en": "Quickly closes the gap to Torbjorn’s turret and destroys it with sustained fire. Defense Matrix can block the turret’s shots and Torbjorn’s Rivet Gun when diving them",
        "ua": "Бистрий підхід дозволяє знищити турель без втрат; Матриця блокує постріли та основну зброю Торба"
      },
      "Winston": {
        "en": "Leaps onto Torbjorn and his turret, zapping both at once with Tesla Cannon. Winston’s barrier can isolate the turret or Torbjorn from healing or support, making it easier to eliminate them",
        "ua": "Стрибає на Торба і його турель, б’ючи Теслою; щит роз’єднує з лікуванням, спрощуючи вбивство"
      },
      "Sigma": {
        "en": "Pokes down Torbjorn’s turret safely with long-range projectiles and uses his barrier to block return fire. Sigma’s Accretion can stun Torbjorn, interrupting an Overload push or even stopping Molten Core if timed perfectly",
        "ua": "Снарядами зносить турель здалека, а бар’єр блокує шкоду у відповідь; камінь зупиняє Турбо-пуш або ульту"
      },
      "Pharah": {
        "en": "Stays out of the turret’s reach or line-of-sight by flying and bombards both Torbjorn and his turret with rockets from afar",
        "ua": "Тримається поза досяжності турелі в повітрі та бомбить ракетами без відповіді"
      },
      "Widowmaker": {
        "en": "Snipes Torbjorn or his turret from outside their effective range, dismantling Torbjorn’s setup without ever giving him a chance to fight back",
        "ua": "Снайпить Торба або турель поза зоною дії; знищує установку до бою"
      },
      "Genji": {
        "en": "Swiftly destroys the turret with shurikens or deflects its shots back at it. Genji’s mobility lets him flank Torbjorn, and Torb’s large hitbox makes him vulnerable to quick burst damage from Genji’s dash resets",
        "ua": "Кунаї знищують турель або відбиваються назад; мобільність дозволяє фланг, а хітбокс Торба великий"
      },
      "Ana": {
        "en": "Tranquilizes Torbjorn with Sleep Dart to disable him and his turret’s support, then the team can focus the turret. Biotic Grenade also stops Torbjorn from getting armor healing during Overload, making him easier to bring down",
        "ua": "Дротик сну паралізує Торба та відключає підтримку; граната блокує броню під час Перевантаження"
      },
      "Baptiste": {
        "en": "Can engage the turret at range with his hitscan weapon, and Immortality Field protects allies from Torbjorn’s Molten Core pools or turret focus. His regenerative burst counters chip damage from the turret while advancing",
        "ua": "Може атакувати турель з далека гітсканом, а Поле безсмертя рятує від лави чи фокусу"
      },
      "Moira": {
        "en": "A well-aimed Biotic Orb can damage or even destroy the turret from an angle. Moira’s Fade allows her to reposition away from turret fire and pursue Torbjorn around corners where she can safely outduel him",
        "ua": "Сфера шкодить турелі навіть за рогом; Fade дозволяє змінити позицію й наздогнати Торба в бою"
      }
    }
  },
  {
    "name": "Tracer",
    "icon": "icons/damage/Tracer.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Tesla Cannon automatically hits Tracer without needing precision, punishing her if she dives backlines. His jump can follow her blinks and his shield denies her easy damage on squishy teammates",
        "ua": "Тесла Вінстона влучає по Трейсер автоматично, караючи її за спроби дайвити тил; стрибок наздоганяє її блима, а щит блокує шкоду по сапортам"
      },
      "Roadhog": {
        "en": "One hook will catch and typically one-shot Tracer due to her low health. His large health pool and self-heal let him survive Tracer’s burst long enough to land a hook or force her recall",
        "ua": "Один хук ловить і зазвичай ваншотить Трейсер через її мале ХП. Високе здоров’я і зцілення дозволяють пережити її бурст і влучити"
      },
      "D.Va": {
        "en": "High mobility to chase Tracer and micro-missiles for burst damage. D.Va can also eat Tracer’s Pulse Bomb with Defense Matrix if timed right, negating her ultimate threat",
        "ua": "Висока мобільність дає змогу переслідувати Трейсер, а мікроракети завдають бурсту. Матриця може з’їсти її Пульсову бомбу"
      },
      "Cassidy": {
        "en": "A landed Magnetic Grenade will severely hurt or force Tracer’s recall, and Cassidy’s steady aim can two-shot Tracer if she ventures too close",
        "ua": "Магнітна граната наносить шкоду або змушує відкотитись; точна стрільба Кессіді може швидко добити Трейсер зблизька"
      },
      "Torbjorn": {
        "en": "His auto-aim turret constantly pressures Tracer and forces her to waste time destroying it. Additionally, Torbjorn’s Overload gives him the survivability to withstand her burst and fight back with his shotgun if she engages him",
        "ua": "Автонаведення турелі тисне на Трейсер і змушує її витрачати час; Перевантаження дає Торбу шанс протистояти її бурсту дробовиком"
      },
      "Widowmaker": {
        "en": "Although risky, a skilled Widowmaker completely shuts Tracer down – one scoped headshot or a couple of close-range shots will kill Tracer immediately. Venom Mine can also reveal a flanking Tracer and soften her up",
        "ua": "Хоч і ризиковано, але вміла Вдова повністю контрить Трейсер — одне попадання в голову або кілька зблизька — і вона мертва. Отруйна міна видає фланг"
      },
      "Brigitte": {
        "en": "Armor and shield make her hard to burst, and Shield Bash or Whip Shot will interrupt Tracer’s momentum. Brigitte’s area-heal and Repair Packs also negate Tracer’s chip damage on teammates",
        "ua": "Броня й щит захищають від бурсту, Удар щитом або Батіг зупиняють Трейсер. Лікування з Inspire нівелює шкоду по команді"
      },
      "Moira": {
        "en": "Moira’s lock-on beam follows Tracer’s movements and steadily damages her while healing Moira, and Moira can Fade to avoid Pulse Bomb or escape if Tracer tries to focus her",
        "ua": "Біотичний промінь Моіри трекає Трейсер та шкодить, лікує одночасно. Fade дозволяє уникнути Пульсової бомби чи втекти"
      },
      "Kiriko": {
        "en": "Swiftstep allows Kiriko to evade Tracer’s attacks or pursue her, and Protection Suzu negates Pulse Bomb’s lethal explosion by granting brief invulnerability. Kiriko’s quick headshots can punish Tracer’s low HP if she engages carelessly",
        "ua": "Телепорт дозволяє втекти або переслідувати, а Сузу знімає шкоду від Пульсової бомби. Точні хедшоти карають її мале ХП"
      }
    }
  },
  {
    "name": "Venture",
    "icon": "icons/damage/Venture.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Winston’s Barrier blocks Venture’s Tectonic Shock ultimate and his leap mobility lets him either escape Venture’s close-range combos or pressure Venture directly before they can set up",
        "ua": "Бар’єр Вінстона блокує ульту Вентчер, а стрибок дозволяє або втекти, або напасти до її комбо"
      },
      "D.Va": {
        "en": "Flies into Venture to contest them and uses Defense Matrix to absorb their burst damage (like drill shots), denying Venture the quick combo kills they seek",
        "ua": "Влітає в Вентчер і поглинає шкоду (бури) Матрицею, не даючи швидко вбивати"
      },
      "Doomfist": {
        "en": "Excellent at disrupting close-range heroes: Doomfist’s punches and slams knock Venture around, preventing them from executing their combos cleanly, while also having the mobility to stick to or escape from Venture",
        "ua": "Думфіст вибиває Вентчер із позиції ударами та стрибками, не даючи нормально провести комбо"
      },
      "Cassidy": {
        "en": "Cassidy’s hitscan pressure and Magnetic Grenade can burst down Venture quickly, especially since Venture operates at close-to-mid range where Cassidy thrives. Cassidy also has the health to survive Venture’s initial burst and fight back",
        "ua": "Хітскан і граната Кессіді карають Вентчер швидко — він сильний на середній дистанції. Має ХП, щоб вижити після бурсту"
      },
      "Sojourn": {
        "en": "Outranges Venture and can escape danger with Power Slide. Sojourn can pick off Venture with a high-damage railgun shot before Venture closes in, using superior range and mobility to kite them",
        "ua": "Має вищу дальність і ковзання для втечі. Railgun може вбити Вентчер до зближення"
      },
      "Pharah": {
        "en": "Plays at a vertical angle Venture struggles to hit; Pharah can bombard Venture from above, and Venture lacks reliable tools to contest airborne targets at long range",
        "ua": "Грає з висоти, недосяжної для Вентчер; Фара бомбить згори, а Вентчер не має чим відповісти"
      },
      "Kiriko": {
        "en": "Burst heals can keep allies alive through Venture’s combo damage, and Protection Suzu negates any debuff from Venture’s kit. Kiriko can also teleport away from Venture’s engage and attempt to headshot them, exploiting Venture’s short effective range",
        "ua": "Швидке зцілення знімає шкоду комбо; Сузу знімає дебафи. Кіріко може телепортнутись і намагатися дати хедшот"
      },
      "Ana": {
        "en": "Biotic Grenade prevents Venture from self-sustaining (if they have any heal reduction abilities, it amplifies them too) and her long-range hitscan lets her harass Venture safely. Sleep Dart can also instantly stop Venture’s ultimate or burrow maneuver if timed well",
        "ua": "Граната Ана блокує самозцілення (якщо є), а дротик сну зупиняє ульту чи буріння при точному таймінгу"
      },
      "Lucio": {
        "en": "Lucio’s speed and wall-riding make him very hard for Venture to pin down. He can boop Venture away during their engage, and his constant mobility plus healing aura diminish Venture’s chances of securing quick kills",
        "ua": "Швидкість і стінран Лусіо ускладнюють захоплення; відштовхування вибиває Вентчер із бою, а аура зцілює команду"
      }
    }
  },
  {
    "name": "Widowmaker",
    "icon": "icons/damage/Widowmaker.webp",
    "role": "damage",
    "counters": {
      "Winston": {
        "en": "Closes the gap with Jump Pack and forces Widowmaker off her perch. His Barrier and Tesla Cannon nullify her sniping by blocking line-of-sight and dealing unavoidable damage up close",
        "ua": "Стрибає на Вдову, змушуючи покинути позицію; бар’єр і Тесла не дають їй снайпити"
      },
      "D.Va": {
        "en": "Uses boosters to dive Widowmaker and harass or eliminate her. D.Va’s large health pool and Defense Matrix (though it doesn’t stop hitscan) allow her to contest Widow at close range, where Widow is weakest",
        "ua": "Бустери дозволяють влізти до Вдови, а Матриця блокує шкоду на малій дистанції"
      },
      "Wrecking Ball": {
        "en": "Rolls behind Widowmaker’s position quickly and knocks her away with a piledrive or swing, making it nearly impossible for Widow to aim. His high health and shields make him difficult for Widowmaker to kill quickly",
        "ua": "Катиться з тилу і скидає Вдову Пайлдрайвом; високий запас ХП і щити роблять його стійким до шкоди"
      },
      "Genji": {
        "en": "Closes distance using wall climb and Swift Strike, then eliminates Widow with quick burst damage. Deflect can protect Genji as he approaches by sending Widow’s shots back at her or discouraging her from firing",
        "ua": "Стіни і Ривок дозволяють наблизитись і швидко вбити; Відбиття блокує її постріли під час підходу"
      },
      "Sombra": {
        "en": "Stealth allows Sombra to approach Widowmaker undetected and Hack will prevent Widow from using her Grappling Hook to escape. Sombra can then finish Widow while she’s immobilized or forced to fight at close range",
        "ua": "Стелс дозволяє підійти; Хак відключає гак, не даючи втекти, і Сомбра добиває її зблизька"
      },
      "Tracer": {
        "en": "Flanks Widowmaker and duels her at point-blank range where Widow is at a big disadvantage. Tracer’s blinks and recall help her dodge Widow’s aim and quickly punish any exposure",
        "ua": "Фланкує і б’ється зблизька, де Вдова беззахисна. Бліми й відкочування допомагають уникати шкоди"
      },
      "Mercy": {
        "en": "Her Guardian Angel mobility makes Mercy extremely hard to hit, and she can resurrect allies that Widowmaker picks off, effectively undoing Widow’s kills. Mercy’s damage boost also helps teammates win sniper duels or quickly destroy Widow’s vantage point setups",
        "ua": "Ангел важко влучити через ГА; вона може воскресити ціль Вдови. Баф шкоди допомагає виграти дуель або знести позицію"
      },
      "Ana": {
        "en": "Ana can challenge Widowmaker from long range with hitscan shots and a well-timed Sleep Dart will render Widowmaker helpless, setting up an easy elimination. Ana’s biotic rifle also allows her to heal while staying safely behind cover between shots",
        "ua": "Ана може стріляти з дистанції, а дротик сну паралізує Вдову, відкриваючи шанс на ліквідацію"
      },
      "Baptiste": {
        "en": "Baptiste’s Amplification Matrix doubles his damage, enabling him to duel Widow from afar. Additionally, Immortality Field can save a teammate from what would have been a fatal headshot, denying Widowmaker the kill and giving his team time to respond or take cover",
        "ua": "Матриця посилення подвоює шкоду Баптіста, дозволяючи боротись з Вдовою. Поле безсмертя рятує союзника від хедшоту"
      }
    }
  },
  {
    "name": "Ana",
    "icon": "icons/support/Ana.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "His jump pack allows him to dive Ana and disrupt her aim, preventing her from healing or using Sleep Dart effectively",
        "ua": "Стрибок дозволяє Вінстону дайвити Ану й збивати приціл, не даючи їй кинути гранату чи дротик сну"
      },
      "D.Va": {
        "en": "Can negate Ana’s impact by using Defense Matrix to absorb her Biotic Grenades and darts, then burst her down at close range",
        "ua": "Матриця поглинає біотичну гранату й дротики, після чого Діва може швидко її добити зблизька"
      },
      "Wrecking Ball": {
        "en": "High mobility and knockbacks keep Ana constantly under pressure, making it difficult for her to land shots or abilities.  ",
        "ua": "Мобільність і відштовхування постійно тиснуть на Ану, ускладнюючи приціл і використання здібностей"
      },
      "Genji": {
        "en": "Swiftly dives Ana and forces her out of position, and can even deflect her Biotic shots and Sleep Dart",
        "ua": "Швидко вривається на Ану, змушуючи змінити позицію, і може відбити її постріли та дротик сну"
      },
      "Sombra": {
        "en": "Hack disables Ana’s abilities (no Sleep Dart or Biotic Grenade), leaving her defenseless and easy to eliminate",
        "ua": "Хак вимикає всі здібності Ани — без гранати й сну вона легка мішень"
      },
      "Tracer": {
        "en": "Ana struggles to duel Tracer’s hypermobility – Tracer can blink around and be pesky as she damages Ana, then Recall to undo any damage or biotic effects",
        "ua": "Ана не може встигнути за мобільністю Трейсер — та блимає навколо, шкодить і відкатує весь ефект"
      },
      "Kiriko": {
        "en": "Her Protection Suzu instantly cleanses Ana’s anti-heal and sleep effects on allies, nullifying Ana’s biggest strengths",
        "ua": "Сузу миттєво знімає антихіл і сон із союзника, нейтралізуючи головну силу Ани"
      },
      "Lucio": {
        "en": "Wall-riding and Speed Boost make it hard for Ana to hit her Sleep Dart or grenades, and Sound Barrier mitigates her Nano-Boost kills by giving the team extra health",
        "ua": "Стінран і швидкість Лусіо ускладнюють попадання гранати чи сну; Саунд Бар’єр зменшує шкоду від Нано-бусту"
      },
      "Baptiste": {
        "en": "Immortality Field can save allies from Ana’s Biotic Grenade combos or Nano-Boost burst, and his hitscan pressure forces Ana into cover.  ",
        "ua": "Поле безсмертя рятує від комбо з гранатою чи ульти; гітскан примушує Ану ховатися"
      }
    }
  },
  {
    "name": "Baptiste",
    "icon": "icons/support/Baptiste.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "Winston’s barrier and leap let him bypass Baptiste’s setup, pressuring him on high ground and forcing out Immortality Field.  ",
        "ua": "Бар’єр і стрибок Вінстона дозволяють обійти позицію Баптіста і змусити його витратити лампу"
      },
      "D.Va": {
        "en": "Boosters allow her to reach Baptiste and destroy his Immortality Field device quickly, while Defense Matrix eats his healing projectiles to negate their effect.  ",
        "ua": "Бустери дозволяють дістатись до Баптіста й знищити лампу; Матриця з’їдає його зцілення"
      },
      "Doomfist": {
        "en": "His mobility and crowd control let him punch Baptiste away from his team or slam him out of position, preventing Baptiste from freely using his regenerative burst or lamp.  ",
        "ua": "Мобільність і контроль дозволяють вибити Баптіста з позиції й не дати йому скористатися лампою"
      },
      "Sombra": {
        "en": "Hack disables Baptiste’s Exo Boots and Immortality Field, making him an easy target when he cannot escape or protect himself",
        "ua": "Хак блокує Екзо-черевики й Поле безсмертя — він беззахисний і не може втекти"
      },
      "Reaper": {
        "en": "Reaper’s close-range damage can overwhelm Baptiste, and he can Wraith Form to ignore Baptiste’s damage while closing the gap",
        "ua": "Близька шкода Жнеця перевищує зцілення Баптіста, а форма Примари дозволяє скоротити дистанцію"
      },
      "Genji": {
        "en": "Genji can climb to Baptiste’s position and pressure him with shurikens or Swift Strike, and even deflect Baptiste’s shots back at him",
        "ua": "Гендзі дістається до нього по стінах, тисне шурікенами й Ривком, може навіть відбити постріли назад"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade prevents Baptiste from healing himself or his team, and Sleep Dart can catch him if he’s stationary using Amplification Matrix.  ",
        "ua": "Граната Ани блокує зцілення Баптіста, а дротик сну ловить його під час ульти або стояння"
      },
      "Lucio": {
        "en": "Lucio can wall-ride to chase or boop Baptiste off high ground, disrupting his positioning and making it easier to focus him down.  ",
        "ua": "Лусіо може вибити Баптіста з хайграунду або порушити позиціонування, відкриваючи його для атаки"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb makes Baptiste much easier to burst through his self-healing, and long-range volleys pressure Baptiste into using Immortality Field early.  ",
        "ua": "Орб розладу робить Баптіста легким для ліквідації, а залпи з дистанції змушують витратити лампу"
      }
    }
  },
  {
    "name": "Brigitte",
    "icon": "icons/support/Brigitte.webp",
    "role": "support",
    "counters": {
      "Sigma": {
        "en": "His long-range Hyperspheres and Accretion rock let him punish Brigitte from a distance outside of her flail range.  ",
        "ua": "Гіперсфери і камінь Сігми дозволяють карати Брiґiтту на відстані поза зоною удару батогом"
      },
      "Roadhog": {
        "en": "Hook can pull Brigitte out from behind her shield, and his high burst damage can break through her armor and self-heal before she can retaliate.  ",
        "ua": "Хук витягує її з-за щита, а висока шкода пробиває броню до того, як вона відповість"
      },
      "Ramattra": {
        "en": "In Nemesis form he can punch through Brigitte’s shield and out-range her, while Brigitte struggles to get past his health pool and piercing punches.  ",
        "ua": "У формі Немезиди Раматтра пробиває щит і перевершує її по дальності; вона не може його продавити"
      },
      "Pharah": {
        "en": "Brigitte struggles against airborne heroes – Pharah can hit her with rockets from above where Brigitte cannot effectively retaliate",
        "ua": "Брiґiтта неефективна проти повітряних героїв — Фара б’є ракетами згори, і вона не має чим відповісти"
      },
      "Junkrat": {
        "en": "His explosives deal heavy damage to Brigitte and rapidly break her shield, keeping her on the defensive",
        "ua": "Вибухи Джанкрата сильно шкодять і швидко ламають щит Брiґiтти, змушуючи грати обережно"
      },
      "Widowmaker": {
        "en": "Widowmaker outranges Brigitte and can pick her off from afar since Brigitte has no tools to contest a distant sniper",
        "ua": "Вдова має більшу дальність і може вбити Брiґiтту, бо та не має чим дістати снайпера"
      },
      "Ana": {
        "en": "Ana can safely dart Brigitte with Sleep or Anti-heal from outside Brigitte’s reach, negating Brigitte’s sustain and setting her up for a focused kill.  ",
        "ua": "Ана може з безпечної дистанції кинути сон або антихіл, нейтралізуючи її зцілення"
      },
      "Zenyatta": {
        "en": "Zenyatta can pepper Brigitte with orbs from long range; a Discord Orb combined with charged volleys will melt Brigitte before she can close the gap.  ",
        "ua": "Зен’я́тта сипле кулями з дистанції, а Орб розладу й залп розплавляє її до того, як вона зблизиться"
      },
      "Baptiste": {
        "en": "Baptiste’s hitscan rifle and area healing allow him to duel Brigitte from mid-range, and his Immortality Field can nullify Brigitte’s Rally engage attempts.  ",
        "ua": "Гітскан Баптіста та AoE-лікування дають йому перевагу на середній дистанції, а лампа блокує її ульт"
      }
    }
  },
  {
    "name": "Illari",
    "icon": "icons/support/Illari.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "Winston can leap to Illari’s high-ground positions and disrupt her, making it hard for her to line up charged shots or keep her healing pylon safe",
        "ua": "Вінстон може стрибнути до Іларі на хайграунд і порушити її приціл, заважаючи зарядженим пострілам і захисту пилона"
      },
      "D.Va": {
        "en": "D.Va’s mobility lets her dive Illari and quickly destroy her healing pylon. Illari’s railgun shots are hitscan (not absorbable), but D.Va can close distance to negate Illari’s range advantage.  ",
        "ua": "Мобільність Діви дозволяє задайвити Іларі й швидко знищити її пилон. Хоч її рельса — гітскан, Діва може скоротити дистанцію"
      },
      "Wrecking Ball": {
        "en": "Ball’s rapid engagements knock Illari around and force her to reposition constantly, denying her the steady aim needed for her long-range damage.  ",
        "ua": "Швидкі атаки Хамстера вибивають Іларі з позиції, не даючи прицілитись і стабільно наносити шкоду"
      },
      "Genji": {
        "en": "Genji’s mobility allows him to pressure Illari and her pylon, and he can deflect her Solar Rifle shots back at her or swiftly dash in when she’s distracted",
        "ua": "Мобільність Гендзі дозволяє тиснути на Іларі та її пилон, а також відбивати постріли або вриватися, коли вона відволіклась"
      },
      "Sombra": {
        "en": "Hack disables Illari’s healing pylon and prevents her from using Outburst to reposition, leaving Illari vulnerable to follow-up attacks",
        "ua": "Хак вимикає пилон Іларі та її ривок, позбавляючи мобільності й можливості захищатись"
      },
      "Widowmaker": {
        "en": "Illari deals damage at range, but a sniper like Widowmaker can outrange and one-shot her if she’s peeking – Widow can eliminate Illari before she can impact the fight.  ",
        "ua": "Іларі шкодить на дистанції, але Вдова перестрілює її й може вбити одним хедом, поки Іларі лише визирає"
      },
      "Ana": {
        "en": "Ana’s toolkit counters Illari’s strengths – a Biotic Grenade can prevent Illari from healing through her pylon or ultimate, and a well-timed Sleep Dart can stop Illari’s **Captive Sun** ultimate or catch Illari when she overpeeks.  ",
        "ua": "Комплект здібностей Ани блокує Іларі: граната зупиняє зцілення, а дротик сну — ульту або агресивний пік"
      },
      "Kiriko": {
        "en": "Protection Suzu can cleanse the burning effect from Illari’s Captive Sun ultimate, negating its kill potential, and Kiriko’s swift mobility and precise kunai can duel Illari effectively at mid-range.  ",
        "ua": "Сузу знімає ефект спалення від ульти Іларі, а Кіріко завдяки мобільності й точним кунаям може виграти дуель"
      },
      "Zenyatta": {
        "en": "Zenyatta can fight Illari from long range; Discord Orb makes Illari easier to burst, and his charged orb volleys threaten Illari whenever she attempts to line up shots.  ",
        "ua": "Зен'ятта може вести бій на відстані, Орб розладу робить Іларі вразливою, а залп — небезпечно швидким"
      }
    }
  },
  {
    "name": "Juno",
    "icon": "icons/support/Juno.webp",
    "role": "support",
    "counters": {
      "Roadhog": {
        "en": "Roadhog’s Chain Hook pulls Juno out of her evasive float, and his breather can shrug off her damage. Once hooked, Juno’s low health pool makes her an easy kill while grounded",
        "ua": "Хук Роадхога витягує Джуно з польоту, а самогіл лікує всю її шкоду. Після хука Джуно — легка мішень"
      },
      "D.Va": {
        "en": "D.Va’s Boosters let her chase Juno even as Juno tries to glide away, and Defense Matrix can nullify Juno’s healing output and Pulsar Torpedoes, making it hard for Juno to sustain her team",
        "ua": "Бустери Діви дозволяють наздогнати Джуно в польоті, Матриця нівелює її зцілення і торпеди"
      },
      "Winston": {
        "en": "With a leap Winston can reach Juno on high ledges and bubble her off from her team, disrupting her support and damaging her with Tesla Cannon while she’s isolated",
        "ua": "Стрибок Вінстона дістає Джуно на висоті, ізолює бар’єром і Теслою б’є її, поки вона без підтримки"
      },
      "Soldier: 76": {
        "en": "Soldier’s hitscan weapon and mobility counter Juno’s aerial movement – he can reliably track her and avoid her torpedoes with Sprint, and even use Tactical Visor to finish off the evasive support",
        "ua": "Хітскан Солдата та мобільність дозволяють трекати Джуно, ухилятись від торпед і завершувати ультою"
      },
      "Sombra": {
        "en": "Hack removes Juno’s mobility and prevents her from using her wall-glide, making her a sitting target. A hacked Juno cannot use her hover jets, leaving her vulnerable to focus fire.  ",
        "ua": "Хак зупиняє глайд Джуно, роблячи її нерухомою мішенню, яку легко добити"
      },
      "Genji": {
        "en": "Juno’s hover ability makes her susceptible to agile flankers – Genji can double-jump and dash to reach her in the air and apply lethal pressure at close range",
        "ua": "Польоти Джуно вразливі до фланкерів — Гендзі може дістатись подвійним стрибком і натиснути зблизька"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade prevents Juno from healing her teammates (and herself via support passive) during its effect, and Sleep Dart can pacify Juno despite her mobility",
        "ua": "Граната Ани блокує пасивне зцілення Джуно, а дротик сну зупиняє її попри мобільність"
      },
      "Zenyatta": {
        "en": "Discord Orb makes the relatively fragile Juno take 25% more damage, which combined with Zenyatta’s accurate long-range orbs can quickly take Juno down from a safe distance.  ",
        "ua": "Орб розладу збільшує шкоду по Джуно, а точні залпи Зена добивають її здалеку"
      },
      "Baptiste": {
        "en": "Baptiste can contest Juno’s high-ground positions with his hitscan rifle, and his Immortality Field nullifies Juno’s **Orbital Ray** ultimate by keeping allies alive through its damage.  ",
        "ua": "Баптіст може боротись з Джуно на хайграунді, а Поле безсмертя нівелює шкоду її ульти"
      }
    }
  },
  {
    "name": "Kiriko",
    "icon": "icons/support/Kiriko.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "Winston can continuously chase Kiriko – his Tesla Cannon hits through her allies and Teleport, forcing her on the defensive and making her think twice about flanking.  ",
        "ua": "Вінстон може постійно тиснути на Кіріко — Тесла проходить через союзників і телепорт, змушуючи її грати обережно"
      },
      "D.Va": {
        "en": "D.Va’s Defense Matrix eats Kiriko’s Kunai projectiles, negating her damage. D.Va can also pressure Kiriko’s positioning with boosters, limiting Kiriko’s ability to poke safely.  ",
        "ua": "Матриця Діви поглинає кунаї Кіріко, а бустери дозволяють виштовхати її з позиції"
      },
      "Wrecking Ball": {
        "en": "Ball’s disruptive knock-ups and slam damage can catch Kiriko even after she teleports, keeping her off-balance so she can’t comfortably heal or land kunai.  ",
        "ua": "Нокапи й шкода від Хамстера ловлять Кіріко навіть після телепорту, не даючи прицілитись чи зцілювати"
      },
      "Sombra": {
        "en": "Sombra’s Hack completely disrupts Kiriko – a hacked Kiriko cannot Swift Step to escape or throw Suzu, leaving her vulnerable to follow-up",
        "ua": "Хак блокує телепорт і Сузу, лишаючи Кіріко без захисту і втечі"
      },
      "Genji": {
        "en": "Genji’s mobility and burst let him duel Kiriko effectively; he can wall-climb to chase her and deflect her kunai, making it risky for Kiriko to take one-on-one fights",
        "ua": "Мобільність і бурст Гендзі дозволяють йому виграти дуель; він лізе по стінах і відбиває кунаї"
      },
      "Tracer": {
        "en": "Tracer can harass Kiriko incessantly – Kiriko’s single-target heals and burst damage are hard to land on a blinking target, and Tracer can force Kiriko to waste her teleport and then re-engage",
        "ua": "Трейсер може безперервно чіплятись до Кіріко — бліми важко відслідковувати, змушує витратити телепорт і перезаходить"
      },
      "Ana": {
        "en": "Ana’s Sleep Dart and Biotic Grenade do not get nullified if Kiriko is caught off-guard – a slept Kiriko can be eliminated before she can react, and anti-heal stops Kiriko from saving her team with burst healing.  ",
        "ua": "Граната і дротик Ани не блочаться, якщо Кіріко не зреагувала — їх достатньо для ліквідації"
      },
      "Moira": {
        "en": "Moira’s Fade and sustain allow her to outlast Kiriko in a duel. Since Kiriko needs to land headshots to quickly kill a Moira, Moira can often force Kiriko to retreat by steadily draining her health.  ",
        "ua": "Fade Моіри й зцілення дозволяють пережити бурст Кіріко; Моіра може стабільно виснажувати її хп"
      },
      "Brigitte": {
        "en": "Brigitte’s shield and armor let her survive Kiriko’s burst. In close range, Brig can interrupt Kiriko’s kunai throws with Shield Bash or Whip Shot, and Kiriko has no sustain to withstand Brig’s melee damage.  ",
        "ua": "Щит і броня Брiґiтти дозволяють пережити бурст Кіріко, а Батіг або Штовхання зупиняють її атаки зблизька"
      }
    }
  },
  {
    "name": "Lifeweaver",
    "icon": "icons/support/Lifeweaver.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "Winston’s dive directly counters Lifeweaver’s tendency to stay back – he can jump onto Lifeweaver, bypass the Petal Platform with ease, and force Lifeweaver to fight instead of freely healing from afar.  ",
        "ua": "Вінстон контрить Лайфвівера, який грає на дистанції — стрибком дістається до нього, ігноруючи платформу"
      },
      "D.Va": {
        "en": "D.Va can use boosters to chase Lifeweaver and focus him down. She can also quickly target and destroy Lifeweaver’s Petal Platform or mitigate Life Grip pulls by pressuring the relocated ally immediately.  ",
        "ua": "Діва може задайвити Лайфвівера, знищити платформу або тиснути на переміщеного союзника після Life Grip"
      },
      "Doomfist": {
        "en": "Doomfist’s mobility and crowd control let him single out Lifeweaver – a well-timed Rocket Punch can knock Lifeweaver away from his team or interrupt his healing, making him easy to eliminate.  ",
        "ua": "Мобільність і контроль Думфіста дозволяють вибити Лайфвівера з команди і не дати зцілювати"
      },
      "Sombra": {
        "en": "Hack disables Lifeweaver’s Petal Platform and Life Grip, leaving him unable to escape or save teammates. Without his utility, his low mobility makes him an easy dive target",
        "ua": "Хак блокує платформу і Life Grip — без них Лайфвівер вразливий до дайва"
      },
      "Pharah": {
        "en": "Lifeweaver has no offensive capability against airborne heroes – Pharah can rain rockets down on him and his team, and Lifeweaver’s large hitbox makes him an easy target from above",
        "ua": "Фара атакує з повітря — Лайфвівер не може захищатись, а великий хітбокс робить його легкою ціллю"
      },
      "Genji": {
        "en": "Genji’s burst damage and mobility allow him to easily pressure Lifeweaver. He can chase Lifeweaver onto his Petal Platform and deflect the Thorn Volley, punishing Lifeweaver’s lack of self-defense",
        "ua": "Бурст Гендзі і мобільність дозволяють тиснути на Лайфвівера, залізти на платформу і відбити снаряди"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade nullifies Lifeweaver’s healing burst (Rejuvenating Dash and charged Blossom), and a dart can put him to sleep if he exposes himself to line-of-sight.  ",
        "ua": "Граната Ани блокує зцілення Лайфвівера, а дротик сну карає за невдалу позицію"
      },
      "Lucio": {
        "en": "Lucio’s speed and boop counter Lifeweaver’s positioning – he can knock Lifeweaver or his allies off the Petal Platform and speed his team out of the area when Lifeweaver uses his Tree of Life ultimate.  ",
        "ua": "Швидкість і відштовхування Лусіо руйнують позиціонування — він вибиває з платформи і рятує команду від ульти деревом"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb makes Lifeweaver’s massive hitbox a liability, allowing the team to quickly focus him down despite any healing, and Zenyatta can pick at Lifeweaver from ranges Lifeweaver can’t retaliate.  ",
        "ua": "Орб розладу робить великий хітбокс Лайфвівера вразливим, дозволяючи команді швидко його фокусити"
      }
    }
  },
  {
    "name": "Lucio",
    "icon": "icons/support/Lucio.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "Winston’s Tesla Cannon can hit Lucio as he wall-rides, and Winston can leap after Lucio to prevent him from freely harassing the backline.  ",
        "ua": "Тесла Вінстона влучає по Лусіо навіть на стінах, а стрибок не дає спокійно грати в тилу"
      },
      "D.Va": {
        "en": "D.Va’s boosters and spread shots let her chase Lucio around and pressure him, while her Defense Matrix can eat Lucio’s projectile sound waves to negate his damage output.  ",
        "ua": "Бустери і розсіювання Діви дозволяють переслідувати Лусіо, Матриця з’їдає його звукові хвилі"
      },
      "Wrecking Ball": {
        "en": "Wrecking Ball’s speed and knockback can keep up with Lucio. Ball can bump Lucio away from walls and disrupt his movement, making Lucio easier for the team to hit.  ",
        "ua": "Швидкість і нокбеки Хамстера тримають темп з Лусіо, вибивають його зі стін, відкриваючи для команди"
      },
      "Pharah": {
        "en": "Pharah attacks from angles Lucio can’t easily contest – she can bombard him or his team from the air, where Lucio’s projectile shots are hard to land",
        "ua": "Фара атакує з кутів, які Лусіо не контролює; з повітря його важко влучити"
      },
      "Reaper": {
        "en": "If Lucio gets too close, Reaper can burst him down quickly with shotguns. Lucio’s small damage output can’t outduel Reaper’s lifesteal in close quarters.  ",
        "ua": "Якщо Лусіо підходить надто близько — Жнець з дробовиків швидко його добиває"
      },
      "Mei": {
        "en": "Mei’s Endothermic Blaster can slow or even briefly freeze Lucio if he comes within range, making it easy to finish him off when he tries to skate away.  ",
        "ua": "Бластер Мей уповільнює або частково заморожує Лусіо, дозволяючи добити при втечі"
      },
      "Ana": {
        "en": "Ana’s Sleep Dart can knock Lucio out of his wall-ride, and a Biotic Grenade will prevent him from healing through chip damage, punishing Lucio’s hit-and-run tactics.  ",
        "ua": "Дротик сну знімає Лусіо зі стіни, а граната блокує його зцілення"
      },
      "Moira": {
        "en": "Moira’s lock-on Biotic Grasp can track Lucio even during his evasive wall maneuvers, and Moira can Fade to avoid Lucio’s boop then continue draining his health.  ",
        "ua": "Промінь Моіри трекає Лусіо навіть при ухиленні, а Fade дозволяє уникнути його штовхань і продовжити тиск"
      },
      "Brigitte": {
        "en": "Brigitte’s area healing and armor make her resilient to Lucio’s harassment, and she can knock him back with Whip Shot or bash him if he comes in range, denying him easy environmental kills.  ",
        "ua": "Щит і броня Брiґiтти дають їй витримати його харас, а Батіг або Удар щитом зупиняють його набіги"
      }
    }
  },
  {
    "name": "Mercy",
    "icon": "icons/support/Mercy.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "Winston is excellent at diving Mercy and her pocket – he can continuously pursue Mercy with leaps and cleave damage, making it difficult for Mercy to safely resurrect or heal under pressure.  ",
        "ua": "Вінстон чудово дайвить Мерсі та її таргет — стрибками і Теслою тисне, не даючи зцілювати чи воскрешати"
      },
      "D.Va": {
        "en": "D.Va’s boosters allow her to chase a flying Mercy, and Defense Matrix can nullify the damage Mercy’s ally is outputting, effectively neutralizing Mercy’s boosted target while D.Va focuses her.  ",
        "ua": "Бустери Діви дозволяють переслідувати літаючу Мерсі, а Матриця блокує шкоду її союзника, нейтралізуючи комбо"
      },
      "Wrecking Ball": {
        "en": "Ball’s piledriver and knockback can disrupt Mercy’s flow, especially when she attempts to go for a resurrection. His Minefield also zones Mercy’s movement, restricting her ability to glide freely.  ",
        "ua": "Пайлдрайв і нокбеки Хамстера порушують темп Мерсі, особливо під час реса; міни обмежують її пересування"
      },
      "Sombra": {
        "en": "Sombra’s Hack makes it impossible for Mercy to use Guardian Angel to escape, leaving her stranded and easy to eliminate if she’s caught out",
        "ua": "Хак блокує Guardian Angel, лишаючи Мерсі без втечі — легка мішень, якщо її піймали"
      },
      "Widowmaker": {
        "en": "A skilled Widowmaker can snipe Mercy when she peeks to heal or resurrect – Mercy often hovers in predictable paths while boosting or healing, making her vulnerable to a well-placed headshot",
        "ua": "Досвідчена Вдова легко знімає Мерсі, яка висувається на лікування чи рес — траєкторії передбачувані"
      },
      "Ashe": {
        "en": "Ashe’s hitscan rifle can quickly take down a Mercy at mid-range, and her Dynamite forces Mercy out of hiding with burn damage. Ashe can also interrupt or punish a resurrection attempt with Coach Gun and rapid shots.  ",
        "ua": "Гвинтівка Еш швидко добиває Мерсі, а Динаміт змушує її вийти з укриття; Коч-Ган може зірвати рес"
      },
      "Ana": {
        "en": "Ana can interrupt Mercy’s resurrection with a Sleep Dart and prevent her from healing her team with Biotic Grenade. Mercy’s constant movement is less effective if Ana lands a dart, leaving Mercy or her target vulnerable.  ",
        "ua": "Ана може дротиком сну зірвати рес, а гранатою заблокувати лікування Мерсі чи її союзника"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb on Mercy’s evasive partner (or Mercy herself) increases damage dealt to them, often overpowering Mercy’s healing. His charged volley can also catch Mercy if she glides predictably.  ",
        "ua": "Орб розладу на Мерсі або її таргеті збільшує шкоду, переграючи її зцілення; заряджений залп ловить при глайді"
      },
      "Moira": {
        "en": "Moira’s mobility (Fade jump) and homing damage orb let her chase and pressure Mercy even as Mercy flies between allies – something many supports struggle to do. Moira can also negate Mercy’s healing by out-damaging it in a duel situation.  ",
        "ua": "Моіра завдяки мобільності та гомінг-сфері може наздогнати Мерсі навіть у польоті, переграючи її зцілення у дуелі"
      }
    }
  },
  {
    "name": "Moira",
    "icon": "icons/support/Moira.webp",
    "role": "support",
    "counters": {
      "D.Va": {
        "en": "D.Va’s armor and Defense Matrix allow her to withstand Moira’s damage and nullify Biotic Orbs, while she closes the gap to force Moira out of position.  ",
        "ua": "Броня та Матриця Діви дозволяють пережити шкоду Моіри й заблокувати кулі, змушуючи її змінити позицію"
      },
      "Roadhog": {
        "en": "If Roadhog lands a hook on Moira, her Fade won’t save her in time – he can one-shot her. Also, his large health pool isn’t easily burned down by Moira’s steady damage, especially while he can self-heal.  ",
        "ua": "Хук Роадхога ловить Моіру — Fade не рятує; її шкода не проб’є його здоров’я й самозцілення"
      },
      "Orisa": {
        "en": "Orisa’s Fortify and high durability make Moira’s life drain relatively ineffective. Orisa can also javelin Moira to interrupt Coalescence or pin her down before she escapes.  ",
        "ua": "Фортифікація Оріси знижує ефект дренажу Моіри; спис може перервати Коалесценцію або зупинити втечу"
      },
      "Sombra": {
        "en": "A well-timed Hack prevents Moira from using Fade, leaving her extremely vulnerable since she has no other escape. Sombra’s team can then burst Moira during the hack duration",
        "ua": "Хак зупиняє Fade, роблячи Моіру беззахисною — команда може добити її, поки вона не може втекти"
      },
      "Reaper": {
        "en": "Reaper’s close-range burst can out-duel Moira – he can absorb the damage from her Biotic Grasp via self-healing while his shotguns quickly deplete Moira’s health",
        "ua": "Бурст Жнеця переграє Моіру зблизька — самозцілення Жнеця дозволяє вижити під її шкодою і добити її"
      },
      "Pharah": {
        "en": "Moira struggles against threats she cannot reach – Pharah’s high airborne damage forces Moira to either hide or use Fade defensively, as Moira has no ranged attack to reliably fight back",
        "ua": "Моіра слабка проти цілей, до яких не дотягується — Фара змушує її ховатись або витратити Fade"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade stops Moira from healing herself or her team, a big blow to a hero built around steady healing and self-sustain. Sleep Dart can also cancel Moira’s Coalescence or catch her after a Fade, setting up an elimination.  ",
        "ua": "Граната Ани блокує лікування Моіри собі і команді, дротик сну перериває ульту чи ловить після Fade"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb amplified damage makes her surprisingly fragile despite her self-healing. His orbs can also damage her from ranges where Moira cannot retaliate, forcing her to use Fade or retreat.  ",
        "ua": "Орб розладу робить Моіру крихкою попри самозцілення; залпи з дистанції змушують її втікати"
      },
      "Brigitte": {
        "en": "Brigitte’s Inspire healing and armor can counteract Moira’s area damage on her team. In close quarters, Brigitte can interrupt Moira’s lifesteal with Shield Bash or knock her away, and Moira cannot easily secure a kill on a protected Brigitte.  ",
        "ua": "Брiґiтта завдяки Inspire і броні зменшує шкоду Моіри; зблизька щит і батіг вибивають її з позиції"
      }
    }
  },
  {
    "name": "Zenyatta",
    "icon": "icons/support/Zenyatta.webp",
    "role": "support",
    "counters": {
      "Winston": {
        "en": "Winston is a classic Zenyatta counter – he leaps directly onto Zenyatta and bypasses Zenyatta’s lack of mobility. Winston’s Tesla Cannon cannot miss and quickly overwhelms Zen if unsupported",
        "ua": "Вінстон — класичний контр Зена: стрибає до нього і Теслою швидко добиває, бо Зен не має втечі"
      },
      "D.Va": {
        "en": "D.Va can fly into the backline and pressure Zenyatta with missiles and shotguns. Zenyatta’s orbs do little to deter D.Va’s 600 HP mech, and Defense Matrix can eat Zenyatta’s projectiles to protect D.Va as she closes in.  ",
        "ua": "Діва влітає у беклайн і тисне на Зена ракетами й дробом; Матриця блокує його кулі"
      },
      "Wrecking Ball": {
        "en": "Wrecking Ball’s high mobility and knockbacks make him lethal to Zenyatta – he can piledrive to heavily damage and then finish Zen before Zen can charge a volley. Zen’s lack of escapes makes him easy prey for Ball’s quick hit-and-run attacks.  ",
        "ua": "Хамстер завдяки мобільності й нокбеку може швидко зайти і вбити Зена до того, як він встигне зарядити залп"
      },
      "Genji": {
        "en": "Genji relentlessly harasses Zenyatta – he can dash through or climb to Zenyatta’s position and deflect Zenyatta’s orbs. A swift combo of shuriken and Swift Strike often eliminates Zen before Transcendence can be used",
        "ua": "Гендзі постійно харасить Зена — лазить по стінах, кидає шурікени, Ривком добиває до Трансцендентності"
      },
      "Sombra": {
        "en": "Sombra’s Stealth lets her flank Zenyatta and her Hack makes him unable to use Transcendence or Discord. With no escape and no defensive ult, Zenyatta is an easy kill for Sombra’s team",
        "ua": "Сомбра фланкує в стелсі і хаком блокує Трансцендентність та Орб розладу — Зен без захисту"
      },
      "Tracer": {
        "en": "Tracer is a nightmare for Zenyatta: she can blink past his team and unload a full clip into him faster than he can charge a volley. His low health and lack of mobility mean Tracer can consistently duel and eliminate him if he’s unprotected.  ",
        "ua": "Трейсер — жах для Зена: блимає повз команду й за секунду розстрілює його до смерті"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade completely negates Zenyatta’s Transcendence healing (anti-healed allies receive no healing from Trans), and Sleep Dart can catch Zenyatta at range due to his slow movement",
        "ua": "Граната Ани повністю блокує Трансцендентність (антихіл), а дротик сну ловить Зена з дистанції"
      },
      "Kiriko": {
        "en": "Kiriko’s Protection Suzu can cleanse Discord Orb from a critical ally, countering Zenyatta’s primary threat. Additionally, Kiriko’s fast-flying kunai and teleport give her tools to pressure or escape Zenyatta, who cannot chase or dodge well.  ",
        "ua": "Сузу Кіріко знімає Орб розладу з союзника, а сама може тиснути Зена завдяки телепорту й кунаям"
      },
      "Lucio": {
        "en": "Lucio can exploit Zenyatta’s immobility by knocking him out of position or into his team. His speed boost also helps allies close the gap on Zen or disengage from a discorded target, reducing Zenyatta’s effectiveness.  ",
        "ua": "Лусіо може вибити Зена з позиції, або дати буст команді, щоб втекти або знищити ціль із розладом"
      }
    }
  },
  {
    "name": "D.Va",
    "icon": "icons/tank/D.Va.webp",
    "role": "tank",
    "counters": {
      "Zarya": {
        "en": "Zarya’s Particle Barriers completely nullify D.Va’s burst and stop her Self-Destruct kills, while Zarya’s beam bypasses Defense Matrix entirely to melt D.Va’s mech",
        "ua": "Бабли Зарі повністю нівелюють бурст Діви і запобігають вбивствам від її самознищення, а промінь проходить крізь Матрицю і плавить мех"
      },
      "Reinhardt": {
        "en": "Reinhardt’s large barrier blocks D.Va’s Micro Missiles and fusion cannons, and his Rocket Hammer swings aren’t affected by Defense Matrix – he can out-brawl D.Va up close",
        "ua": "Великий щит Райнхарда блокує ракети й гармати Діви, а Молот не зупиняється Матрицею — він перемагає її зблизька"
      },
      "Sigma": {
        "en": "Sigma’s Accretion (rock) can stun D.Va out of her boosters, and his Experimental Barrier blocks her damage. He can absorb her close-range burst with Kinetic Grasp, turning D.Va’s aggression into shields",
        "ua": "Камінь Сігми зупиняє Діву під час бустерів, щит блокує шкоду, а Поглинання перетворює бурст на щити"
      },
      "Reaper": {
        "en": "Reaper’s shotguns deal massive close-range damage that can quickly force D.Va out of her mech, and he can use Wraith Form to avoid her Self-Destruct blast or negate her return fire",
        "ua": "Дробовики Жнеця швидко виводять Діву з меха, а форма Примари дозволяє уникнути самознищення чи відповіді"
      },
      "Symmetra": {
        "en": "Symmetra’s sustained beam ignores Defense Matrix and ramps up damage the longer it hits D.Va, shredding her mech quickly. Her Sentry Turrets also slow D.Va down, making it harder for D.Va to escape once engaged",
        "ua": "Промінь Сімметри ігнорує Матрицю й збільшує шкоду з часом, а турелі сповільнюють Діву й не дають втекти"
      },
      "Mei": {
        "en": "Mei’s freeze effects (primary spray and Blizzard) bypass Defense Matrix and can lock D.Va in place, preventing her from escaping. Mei can also block D.Va’s boosters or line of sight with an Ice Wall",
        "ua": "Заморозка Мей (спрей і ульта) проходить крізь Матрицю і блокує втечу, а Крижана Стіна блокує бустери або приціл"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Orb of Discord makes D.Va take increased damage, allowing teammates to burst her down before she can react. His charged volleys and Transcendence can negate D.Va’s Self-Destruct by keeping the team healthy",
        "ua": "Орб розладу збільшує шкоду по Діві, дозволяючи команді швидко її добити; Трансцендентність рятує від самознищення"
      },
      "Brigitte": {
        "en": "Brigitte’s Shield Bash and Whip Shot can disrupt D.Va’s boosters, and her close-range sustain (armor + self-healing) makes it difficult for D.Va to secure a kill. Brig’s barrier can also absorb some of D.Va’s Micro Missile burst",
        "ua": "Удар щитом і Батіг Брiґiтти збивають бустери Діви, а її броня й самозцілення дають вижити під бурстом"
      },
      "Moira": {
        "en": "Moira’s biotic beam and Coalescence ignore Defense Matrix, steadily damaging D.Va while healing Moira’s allies. Moira’s sustain and Fade allow her to duel D.Va for an extended time, often forcing D.Va to retreat",
        "ua": "Промінь Моіри та Коалесценція проходять Матрицю, стабільно шкодять Діві; Fade і зцілення дозволяють виграти дуель"
      }
    }
  },
  {
    "name": "Doomfist",
    "icon": "icons/tank/Doomfist.webp",
    "role": "tank",
    "counters": {
      "Orisa": {
        "en": "Orisa’s Fortify makes her immune to Doomfist’s knockbacks and stuns, negating his Rocket Punch combo, and she can use Javelin Spin to block his Seismic Slam damage",
        "ua": "Фортифікація Оріси захищає від нокбеків і станів Дума, а Спін списа блокує його шкоду від Slam"
      },
      "Zarya": {
        "en": "Zarya’s bubbles protect teammates from Doomfist’s punches and give her energy when he hits them. Her beam deals consistent damage that ignores his mobility, and she can survive his dive by self-bubbling to deny his shield gain.  ",
        "ua": "Бабли Зарі захищають союзників від ударів Дума й дають енергію; промінь проходить через щити, а самозахист рятує від дайву"
      },
      "Sigma": {
        "en": "Sigma can punish Doomfist’s engagements with Accretion – a well-timed rock will stun Doomfist mid-leap or mid-punch. Additionally, Sigma’s shield and Kinetic Grasp reduce the impact of Doomfist’s abilities on the backline.  ",
        "ua": "Камінь Сігми карає стрибки Дума; щит і Поглинання зменшують ефект від його скілів на сапортах"
      },
      "Sombra": {
        "en": "Sombra’s Hack disables Doomfist’s gauntlet abilities (mobility and shield gain), leaving him vulnerable and unable to escape after diving",
        "ua": "Хак відключає рукавицю Дума (мобільність + щити), роблячи його легкою здобиччю"
      },
      "Pharah": {
        "en": "Pharah can stay airborne where Doomfist struggles to reach her. She can bombard him and his team from above; Doomfist’s lack of long-range attacks makes it hard for him to counter Pharah’s sustained rocket damage",
        "ua": "Фара залишається в повітрі, де Дума не дістає; вона закидує команду, а він не має чим відповісти"
      },
      "Reaper": {
        "en": "Reaper’s close-range firepower punishes Doomfist when he dives in. Even if Doomfist uses Power Block to reduce damage, Reaper can wait it out or reposition with Wraith Form, then continue dealing heavy damage up close.  ",
        "ua": "Бурст Жнеця карає Дума за дайв; навіть з Блоком, Жнець може перечекати й потім добити"
      },
      "Ana": {
        "en": "Ana’s Sleep Dart and Biotic Grenade stop Doomfist cold – a slept Doomfist can be focused down, and anti-heal prevents him from gaining the shields he relies on, making him much easier to kill.  ",
        "ua": "Граната й дротик Ани зупиняють Дума; антихіл блокує щити, а сон дозволяє добити"
      },
      "Brigitte": {
        "en": "Brigitte’s passive healing and barrier help her team survive Doomfist’s dive. She can knock him back with Whip Shot, interrupting his combos and giving her allies time to react, and during Rally her bash will even stun Doomfist in his tracks.  ",
        "ua": "Брiґiтта за допомогою щита й Батога зупиняє комбо Дума й дає команді шанс відреагувати"
      },
      "Kiriko": {
        "en": "Kiriko’s Protection Suzu can cleanse the stun effect on allies punched into walls by Doomfist, denying him kills. She can also Swift Step away from his engagements and contribute kunai headshots while he is busy diving her team.  ",
        "ua": "Сузу Кіріко очищує стан від удару об стіну, а Стрибок дозволяє втекти; кунаї карають Дума під час дайву"
      }
    }
  },
  {
    "name": "Hazard",
    "icon": "icons/tank/Hazard.webp",
    "role": "tank",
    "counters": {
      "Reinhardt": {
        "en": "Reinhardt’s large barrier and strong melee damage let him negate Hazard’s spike volleys and close the distance to out-brawl Hazard. His shield can block Hazard’s projectile wall, and a well-timed Earthshatter can catch Hazard despite his mobility",
        "ua": "Щит і шкода Райнхарда блокують шипи Газарда, а Землетрус ловить його попри мобільність"
      },
      "Orisa": {
        "en": "Orisa’s Fortify prevents Hazard’s knockback and crowd control from affecting her, and her javelin attacks can interrupt Hazard’s abilities. She has the sustained damage and durability to withstand Hazard’s close-range burst, shutting down his value",
        "ua": "Фортифікація Оріси блокує нокбеки й контроль Газарда, списи зупиняють його скіли, а тривалий ДПС переграє бурст"
      },
      "Sigma": {
        "en": "Sigma’s barrier and consistent ranged damage counter Hazard’s setups. Sigma can block Hazard’s spikes with his shield, stun him with Accretion if he leaps in, and absorb damage with Kinetic Grasp, denying Hazard the quick kills he seeks",
        "ua": "Щит Сігми та стабільна дальня шкода контрять Газарда; камінь і Поглинання знижують його загрозу"
      },
      "Ashe": {
        "en": "Ashe’s long-range hitscan shots and area denial (Dynamite) lock Hazard out of effective range. She can shoot from a safe distance where Hazard’s leaping melee attacks are useless, steadily wearing him down",
        "ua": "Гітскан постріли Еш і Динаміт не дають Газарду підійти; вона стріляє здалеку, де він нічого не може"
      },
      "Soldier: 76": {
        "en": "Soldier: 76 has the sustained damage to chip away at Hazard and the mobility to kite him. Soldier can Sprint to maintain distance and use Biotic Field to outlast Hazard’s attempts at burst damage",
        "ua": "Солдат має тривалий урон і мобільність для кайту; Спринт дозволяє тримати дистанцію, Біотик поле — виживати"
      },
      "Mei": {
        "en": "Mei’s weapon and abilities counter Hazard’s close-range aggression – she can slow and potentially freeze Hazard with her primary fire, drop an Ice Wall to block his leaping engages or line of fire, and even cryo-freeze to avoid his ultimate",
        "ua": "Мей сповільнює і заморожує Газарда, стіна блокує стрибки або лінію вогню, кріо-фріз дозволяє уникнути ульти"
      },
      "Ana": {
        "en": "Ana can hit Hazard with a Biotic Grenade to prevent him from being healed and use Sleep Dart to stop his rampage mid-leap. Keeping Hazard at a distance with her darts significantly reduces his impact",
        "ua": "Граната Ани блокує зцілення Газарда, а дротик сну зупиняє його в стрибку"
      },
      "Lucio": {
        "en": "Lucio’s speed boost helps allies spread out to avoid Hazard’s area attacks, and his Sound Barrier provides extra shields to survive Hazard’s ultimate. Lucio can also boop Hazard away when he dives in, disrupting his combo attempts",
        "ua": "Прискорення Лусіо допомагає розсіятись, а Бар’єр рятує від ульти; відштовхування збиває комбо Газарда"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb makes Hazard much easier to kill, and Zenyatta can stay at the edge of fights to minimize Hazard’s threat. Transcendence can also counteract the damage from Hazard’s **Downpour** ultimate, keeping the team alive through its immobilizing effect",
        "ua": "Орб розладу робить його легкою ціллю, а Зен стоїть на краю бою; Трансцендентність рятує від ульти Downpour"
      }
    }
  },
  {
    "name": "Junker Queen",
    "icon": "icons/tank/Junker_Queen.webp",
    "role": "tank",
    "counters": {
      "Orisa": {
        "en": "Orisa’s Fortify and defensive abilities blunt Junker Queen’s kit – she doesn’t get pulled by the Jagged Blade and can ignore the wound effects with her sheer durability. Orisa’s spear spin also mitigates Queen’s Scattergun damage output.  ",
        "ua": "Фортифікація Оріси і її захисні здібності нівелюють комплект Джанкер Квін — вона не піддається витягуванню ігловим ножем і ігнорує ефекти кровотечі. Обертання списа зменшує шкоду її рушниці"
      },
      "Sigma": {
        "en": "Sigma outranges Junker Queen significantly. His shield and grasp deny Queen’s knives and gun shots, and Accretion can interrupt her Carnage swing or ultimate. Considering her low health pool (425), Queen is very vulnerable to Sigma’s focused damage",
        "ua": "Сігма значно перевершує Квін по дальності. Щит і Поглинання зупиняють ножі та постріли, а Камінь перериває Удар або ульту. Через низьке ХП, Квін швидко вмирає від фокусного вогню"
      },
      "Zarya": {
        "en": "Zarya’s bubbles cleanse Junker Queen’s wound effects (if timed right) and prevent her from landing the axe or Rampage on priority targets. Meanwhile, Zarya’s high-energy beam deals heavy damage to Queen, who lacks a barrier to block it.  ",
        "ua": "Бабли Зарі очищують ефекти кровотечі Квін і захищають союзників від Удару або ульти. Заряджений промінь швидко плавить Квін, у якої немає щита"
      },
      "Reaper": {
        "en": "Reaper’s close-range dominance and life-steal let him go toe-to-toe with Junker Queen and win. Even if she uses Commanding Shout, Reaper can sustain through her damage while quickly depleting her health",
        "ua": "Жнець у ближньому бою переграє Квін — лайфстіл дозволяє пережити її шкоду навіть під Криком і швидко знести їй ХП"
      },
      "Ashe": {
        "en": "Ashe can fight Junker Queen from a safe mid-to-long range. Queen has no barrier, so Ashe can land powerful Viper shots and use Coach Gun to create distance if Queen tries to close in",
        "ua": "Еш може тримати дистанцію — Вайпер пробиває без щита, а Коч-Ган створює дистанцію при спробі наблизитися"
      },
      "Widowmaker": {
        "en": "With Junker Queen’s relatively low HP for a tank, a skilled Widowmaker can eliminate her with a couple of charged headshots",
        "ua": "Через невисокий запас ХП, досвідчена Вдова може вбити Квін за кілька хедшотів"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade prevents Junker Queen from self-healing via Adrenaline Rush (from wounds), directly countering her survivability. Ana can also sleep Queen to halt an aggressive push or cancel the Rampage ultimate mid-charge",
        "ua": "Граната Ани блокує самозцілення через кровотечу (Adrenaline Rush), зменшуючи виживання. Дротик сну зупиняє ульту або агресивний вхід"
      },
      "Kiriko": {
        "en": "Kiriko is a direct counter to Junker Queen’s ultimate – Protection Suzu cleanses the anti-heal wound from Rampage, nullifying Queen’s big play. Kiriko can also keep her distance and pressure Queen with kunai, forcing Queen to waste Shout to engage.  ",
        "ua": "Сузу Кіріко очищує антихіл Квін від Rampage, повністю нейтралізуючи її ульту. Кунаї тиснуть з дистанції, змушуючи витратити Крик"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb makes it easy for allies to burst down Junker Queen. Additionally, Zenyatta’s Transcendence can out-heal the wound damage from Queen’s Rampage (once the anti-heal fades or if Kiriko cleanses it), preventing her from securing kills.  ",
        "ua": "Орб розладу робить Квін легкою ціллю для фокуса. Трансцендентність переграє шкоду від Rampage (після очищення Кіріко), не даючи Квін вбивств"
      }
    }
  },
  {
    "name": "Mauga",
    "icon": "icons/tank/Mauga.webp",
    "role": "tank",
    "counters": {
      "Orisa": {
        "en": "Orisa’s staying power counters Mauga’s heavy damage. Her Fortify shrugs off Mauga’s knockbacks and prevents him from being easily focused, and she can spear Mauga to interrupt his momentum. Orisa’s consistent weapon damage also pressures Mauga despite his large health pool.  ",
        "ua": "Оріса своїм виживанням контрить шкоду Мауги. Фортифікація блокує нокбеки, спис зупиняє його тиск, а зброя стабільно наносить шкоду"
      },
      "Sigma": {
        "en": "Sigma can block Mauga’s chaingun barrage with his Experimental Barrier and return fire with Hyperspheres from a safe distance. If Mauga rushes in, Sigma’s Accretion rock can stun him, and Kinetic Grasp converts Mauga’s bullet damage into shields, nullifying Mauga’s offensive push.  ",
        "ua": "Сігма блокує кулемет Мауги щитом, а в разі дайву — камінь і Поглинання знімають весь бурст"
      },
      "Reinhardt": {
        "en": "Reinhardt’s shield greatly reduces Mauga’s ranged threat, forcing Mauga into a hammer fight where Reinhardt excels. Mauga lacks a strong way to penetrate shields, so Reinhardt can protect his team and then hammer down Mauga at close range once Mauga’s abilities are on cooldown.  ",
        "ua": "Щит Райнхарда зменшує загрозу Мауги на дистанції. У ближньому бою Райн має перевагу з молотом і захищає команду від його фокуса"
      },
      "Sombra": {
        "en": "Sombra is one of the best at disabling Mauga – her Hack stops Mauga from using his abilities (and any self-heal), preventing him from gaining durability or closing the gap. A hacked Mauga is left extremely vulnerable",
        "ua": "Сомбра — топ контр Мауги: хак блокує здібності та самозцілення, роблячи його беззахисним"
      },
      "Widowmaker": {
        "en": "Widowmaker’s long-range precision punishes Mauga’s large frame. Mauga has no means to quickly close the gap on a far sniper, so Widowmaker can continuously pick at him or even land a crucial headshot without fear of reprisal",
        "ua": "Вдова карає великий хітбокс Мауги з безпечної дистанції — він не має як до неї дістатися"
      },
      "Pharah": {
        "en": "Pharah can bombard Mauga from above, where his chainguns are less effective. Mauga has limited vertical mobility, so Pharah remains relatively safe and can use splash damage to wear him and his team down",
        "ua": "Фара закидує Маугу з повітря, де його кулемети майже безсилі, а мобільності не вистачає, щоб зупинити її"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade prevents Mauga from benefiting from any self-healing (and makes any incoming support healing useless), and Sleep Dart can temporarily take the giant tank out of the fight. Keeping Mauga “purple” (anti-healed) makes it far easier for the team to focus him down.  ",
        "ua": "Граната Ани блокує будь-яке зцілення, а дротик сну тимчасово виводить Маугу з бою"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb is extremely effective against Mauga’s high health – with 25% increased damage taken, Mauga’s durability is significantly reduced. Zenyatta can stay at a distance and pepper Mauga with empowered shots, forcing Mauga to either retreat or take heavy damage.  ",
        "ua": "Орб розладу нейтралізує його великий ХП — +25% шкоди робить Маугу вразливим. Зен може тримати дистанцію та наносити шкоду постійно"
      },
      "Lucio": {
        "en": "Lucio’s speed boost and mobility help his team avoid Mauga’s spike traps and heavy fire. Lucio can also boop Mauga, disrupting his attempts to lock targets down, and Sound Barrier provides enough team durability to survive Mauga’s combos and turn the tables.  ",
        "ua": "Швидкість і мобільність Лусіо допомагають уникати пасток і бурсту Мауги. Саундбар'єр рятує команду від його комбо"
      }
    }
  },
  {
    "name": "Orisa",
    "icon": "icons/tank/Orisa.webp",
    "role": "tank",
    "counters": {
      "Roadhog": {
        "en": "Roadhog’s Chain Hook can yank Orisa when Fortify is down, bypassing her defenses. If he times it when Orisa is vulnerable, he can deal massive damage to her before she retaliates, and Orisa’s large head makes her an easy target for Hog’s scrap-gun combo.  ",
        "ua": "Хук Роадхога тягне Орісу, якщо Фортифікація не активна, даючи шанс нанести критичний бурст"
      },
      "Zarya": {
        "en": "Zarya can project a barrier onto whoever Orisa tries to javelin or spin, negating Orisa’s crowd control. Zarya’s beam also remains effective even if Orisa uses Fortify (since it isn’t blocked), continuously dealing damage until Orisa’s cooldowns are over.  ",
        "ua": "Бабл Зарі захищає союзника від спіну чи списа Оріси, промінь пробиває навіть під Фортифікацією"
      },
      "Sigma": {
        "en": "Sigma can play at a range Orisa cannot easily reach. His barrier blocks Orisa’s projectile shots, and he can hurl a Hypersphere or Accretion rock whenever Orisa drops her guard. If Orisa tries to use Terra Surge, Sigma can stun her out of it with Accretion to prevent the slam.  ",
        "ua": "Сігма тримає дистанцію — щит блокує постріли, а камінь зупиняє ульту Terra Surge"
      },
      "Reaper": {
        "en": "Reaper’s close-range damage output can brute-force through Orisa’s defenses. Even with Fortify’s 40% damage reduction, Orisa’s large hitbox and Reaper’s life-steal mean he can sustain himself while shredding Orisa at point-blank range",
        "ua": "Жнець просто пробиває Орісу в ближньому бою, навіть через Фортифікацію — лайфстіл тримає його живим"
      },
      "Sombra": {
        "en": "Sombra’s Hack disables Orisa’s Fortify and Javelin Spin, stripping Orisa of her survivability and crowd-control tools. A hacked Orisa can be focused down since she can’t block damage or prevent knockback",
        "ua": "Хак Сомбри вимикає Фортифікацію і Спін — Оріса стає вразливою до бурсту"
      },
      "Bastion": {
        "en": "Bastion’s Configuration: Assault (turret mode) rapidly destroys Orisa’s health despite Fortify. Orisa has no barrier, so Bastion can unload freely; Fortify won’t fully negate Bastion’s huge DPS and Orisa can’t close distance fast enough.  ",
        "ua": "Бастіон у режимі турелі знищує ХП Оріси швидше, ніж Фортифікація може знизити шкоду"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade can prevent Orisa from receiving healing while she’s under fire, making Orisa easier to kill despite her Fortify. Additionally, once Fortify ends, a Sleep Dart can leave Orisa defenseless, effectively removing her from the fight for a few seconds.  ",
        "ua": "Граната Ани блокує лікування Оріси, а дротик сну — виводить її з бою після завершення Фортифікації"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb significantly increases the damage Orisa takes, helping teammates break through her armor and Fortify. From a distance, Zenyatta can keep Orisa discorded and pelt her with orbs, exploiting Orisa’s slow movement when her abilities are on cooldown.  ",
        "ua": "Орб розладу Зена значно збільшує вхідну шкоду — з дистанції Зен може фокусити Орісу безкарно"
      },
      "Baptiste": {
        "en": "Baptiste’s Immortality Field can counter Orisa’s Terra Surge ultimate, preventing her from scoring kills after pulling everyone in. He also can fire from angles Orisa’s team might not block and amplify his team’s damage to break Orisa’s health bar quickly.  ",
        "ua": "Поле безсмертя Баптіста рятує команду від Terra Surge, а Матриця посилює шкоду по Орісі"
      }
    }
  },
  {
    "name": "Ramattra",
    "icon": "icons/tank/Ramattra.webp",
    "role": "tank",
    "counters": {
      "Orisa": {
        "en": "Orisa can Fortify to avoid being slowed by Ramattra’s Ravenous Vortex and is immune to his punch knockback during Fortify. She can also interrupt Ramattra’s pummel with a well-timed javelin throw and generally outlasts his Nemesis form.  ",
        "ua": "Оріса не боїться удару чи ульти Раматтри через Фортифікацію, а спис зупиняє його атаки. Виживає довше за Немезиду"
      },
      "Roadhog": {
        "en": "Roadhog can hook Ramattra when he drops his barrier or exits block, interrupting Ramattra’s approach. Hog’s high burst damage punishes Ramattra’s relatively large hitbox, especially if Ramattra isn’t in Nemesis form to block.  ",
        "ua": "Роадхог може хукнути Раматтру, коли той без блоку або щита — бурст шкода ефективна через великий хітбокс"
      },
      "Reinhardt": {
        "en": "Reinhardt’s shield can block Ramattra’s pokes and his Vortex for the team, forcing Ramattra into a close-range brawl where Reinhardt’s hammer and health pool give him an edge. If Ramattra enters Nemesis, Reinhardt can still trade blows and potentially Earthshatter when Ramattra’s block is down.  ",
        "ua": "Щит Райнхарда блокує атаки Раматтри на дальній дистанції. У ближньому бою Райн може конкурувати з Немезидою"
      },
      "Pharah": {
        "en": "Pharah can attack from high in the air, where Ramattra’s attacks (both staff and punches) cannot reach. Ramattra has to rely on his primary fire which is difficult to hit on a flying target, giving Pharah free reign to deal damage",
        "ua": "Фара атакує з повітря — Раматтра не має чим відповісти, атаки не досягають цілі"
      },
      "Mei": {
        "en": "Mei’s Endothermic Blaster slows Ramattra significantly, especially when he’s in Nemesis form trying to punch. She can also wall him off from his team or to cut off his escape, and even freeze him with Blizzard to stop an Annihilation push",
        "ua": "Спрей Мей сповільнює Немезиду, стіна розділяє його з командою, Бліззард зупиняє пуш з ультою"
      },
      "Reaper": {
        "en": "Reaper excels at the close-quarter fights Ramattra wants – except Reaper deals more burst damage. Reaper can phase out (Wraith Form) to avoid Ramattra’s punches or the damage from Annihilation, then return to quickly break Ramattra’s armor.  ",
        "ua": "Жнець у ближньому бою сильніший, може втекти Примарою від Annihilation і швидко знести броню"
      },
      "Ana": {
        "en": "Ana’s Sleep Dart will immobilize Ramattra, especially if used when he’s in Nemesis form or during his Annihilation (sleeping him wastes precious seconds of his ult). Biotic Grenade also prevents his supports from healing him through the damage he takes while brawling",
        "ua": "Граната Ани блокує зцілення, а дротик сну — зупиняє Раматтру під час ульти, втрачаючи час дії"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb makes Ramattra’s giant Nemesis form an easy target to focus down. Additionally, Transcendence can counter Ramattra’s Annihilation by out-healing its damage (though his ult timer won’t expire while Transcendence negates the damage, it prevents Ramattra from securing kills during its duration).  ",
        "ua": "Орб розладу робить Немезиду вразливою до фокуса. Трансцендентність переграє шкоду від Annihilation"
      },
      "Kiriko": {
        "en": "Kiriko’s Protection Suzu cleanses the slow effect from Ramattra’s Ravenous Vortex on allies and can briefly make allies invulnerable to stop the continuous damage of his ultimate. She can also teleport away from Ramattra’s punches and contribute damage from relative safety with her kunai.  ",
        "ua": "Сузу Кіріко знімає уповільнення від Вихору, дає неуразливість і дозволяє втекти чи атакувати у відповідь"
      }
    }
  },
  {
    "name": "Reinhardt",
    "icon": "icons/tank/Reinhardt.webp",
    "role": "tank",
    "counters": {
      "Orisa": {
        "en": "Orisa doesn’t fear Reinhardt’s charge or Earthshatter as much due to Fortify’s CC immunity. She can poke at Reinhardt with her energy javelin and augment her defense with Javelin Spin, wearing Rein down as he struggles to close distance with his shield.  ",
        "ua": "Фортифікація Оріси блокує Захоплення Райнхарда і стан від Землетрусу. Вона може покарати списом і тримати дистанцію"
      },
      "Sigma": {
        "en": "Sigma can contest Reinhardt at mid-range, where Rein cannot easily hit him. Sigma’s barrier can block Fire Strikes and protect against a charge, and Accretion can punish Reinhardt if he drops his shield or attempts to rush in.  ",
        "ua": "Сігма ефективний на середній дистанції — щит блокує Удар вогню, камінь зупиняє чардж чи агресію"
      },
      "Zarya": {
        "en": "Zarya can prevent Reinhardt’s big plays – Projected Barrier on a teammate negates Reinhardt’s pin or Earthshatter follow-up, and bubbles give Zarya high energy to melt Reinhardt’s shield and health. If Rein cannot land a shatter due to Zarya’s bubble coverage, he loses a major win condition.  ",
        "ua": "Заря зупиняє комбо Райнхарда — бабл на союзника блокує чардж чи ульту, а промінь швидко ламає щит"
      },
      "Pharah": {
        "en": "Pharah’s rockets bypass Reinhardt’s shield by arcing over or hitting around it, dealing splash damage to him and his team. Reinhardt has no reliable way to hit an airborne Pharah, allowing her to chip him down or pressure his supports",
        "ua": "Фара обходить щит Райнхарда за допомогою ракет, завдаючи сплеш шкоди по команді; Райн не має як дістати її"
      },
      "Mei": {
        "en": "Mei can block Reinhardt’s charge or split him off from his team with Ice Wall. Her primary fire slows Reinhardt’s movement and swinging, making him an easier target, and if he’s caught in Blizzard he’s helpless. She also can Cryo-Freeze to avoid being hit by Earthshatter",
        "ua": "Мей блокує чардж Стіною, уповільнює і заморожує під Бліззардом, а кріофріз рятує від Землетрусу"
      },
      "Bastion": {
        "en": "Bastion’s turret mode shreds Reinhardt’s shield in seconds and forces Rein to play extremely defensively. If Reinhardt tries to approach, Bastion’s high DPS can even break Rein himself before he closes distance",
        "ua": "Бастіон у режимі турелі знищує щит Райнхарда за секунди, змушуючи його грати пасивно або вмирати"
      },
      "Ana": {
        "en": "Ana can cancel Reinhardt’s momentum with Sleep Dart or stop his sustain with Biotic Grenade. A Nano-Boosted Reinhardt is also countered by Ana’s sleep – putting him down during his engage wastes the boost. Anti-nade plus focus fire will melt Reinhardt despite his shield.  ",
        "ua": "Ана зупиняє чардж дротиком сну, а граната блокує зцілення; навіть нанобуст не допоможе, якщо Ана ловить його під час вхідного бою"
      },
      "Kiriko": {
        "en": "Kiriko’s Protection Suzu is a hard counter to Reinhardt’s Earthshatter – it immediately cleanses the stun on her team, nullifying Rein’s biggest play. She can also Swift Step to allies out of reach if Reinhardt dives in and pepper him with kunai from outside his swing range.  ",
        "ua": "Сузу Кіріко очищує стан від Землетрусу, повністю зупиняючи ульту. Вона може втекти телепортом і атакувати з безпечної дистанції"
      },
      "Lucio": {
        "en": "Lucio’s boop (Soundwave) knocks Reinhardt back, often disrupting a charge or preventing him from closing the gap. Moreover, Lucio’s Speed Boost helps his team kite Reinhardt, and Sound Barrier can neutralize the impact of Reinhardt’s Fire Strike or shatter engage by giving the team extra health.  ",
        "ua": "Лусіо вибиває Райнхарда Саундвейвом, зриваючи чардж; Швидкість допомагає команді відійти, а Бар’єр рятує від Удару або ульти"
      }
    }
  },
  {
    "name": "Roadhog",
    "icon": "icons/tank/Roadhog.webp",
    "role": "tank",
    "counters": {
      "Orisa": {
        "en": "Orisa is highly resistant to Roadhog’s tricks. Fortify prevents her from being hooked, and even if Hog lands a hook when Fortify is down, Orisa’s large health and armor pool often let her survive the combo. Orisa can also interrupt Hog’s Take a Breather with Javelin Throw or mitigate his shots with Spin",
        "ua": "Оріса дуже стійка до трюків Родхога. Фортифікація захищає від хука, а навіть без неї ХП і броня дозволяють вижити після комбо. Спис зупиняє його зцілення, Спін зменшує шкоду"
      },
      "Zarya": {
        "en": "Zarya’s bubbles directly counter Roadhog’s hook combo – Projected Barrier makes a hooked ally temporarily invulnerable, nullifying Hog’s follow-up shot (while giving Zarya energy). Meanwhile, Zarya’s beam ignores Hog’s damage reduction during Breather and can burn through his large hitbox effectively",
        "ua": "Бабл Зарі контрить комбо хук+вистріл — дає безсмертя союзнику й заряд Зарі. Промінь пробиває зниження шкоди під зціленням і швидко плавить великого Хогa"
      },
      "Sigma": {
        "en": "Sigma can keep Roadhog at bay with his barrier, preventing hooks and blocking scrap shots. If Hog does land a hook on someone else, Sigma can use Kinetic Grasp or Accretion to peel – Accretion will cancel Hog’s Breather or Whole Hog if timed right, denying Hog his sustain or ultimate.  ",
        "ua": "Сігма тримає Хога на дистанції щитом, блокує хук і постріли. Камінь і Поглинання зупиняють зцілення або ульту, рятуючи союзника"
      },
      "Reaper": {
        "en": "Reaper is a brute-force counter to Roadhog. If Hog hooks Reaper, Wraith Form allows Reaper to escape, and outside of that Reaper’s shotguns deal extreme damage to Hog’s large body while self-healing. Reaper can often out-duel Hog even through Take a Breather.  ",
        "ua": "Жнець може втекти з хука формою Примари, а дробовики швидко зносять Хогa, навіть під зціленням. Часто перемагає у дуелі"
      },
      "Sombra": {
        "en": "Sombra’s Hack shuts down Roadhog’s entire kit – a hacked Hog cannot use Take a Breather or Chain Hook. This leaves Hog without his sustain or pick potential, making him an ult battery. Sombra can also hack Hog during Whole Hog to cancel the ultimate prematurely.  ",
        "ua": "Хак Сомбри блокує всі здібності Хога — без хука й зцілення він стає ульто-батарейкою. Хак також скасовує ульту Whole Hog"
      },
      "Mei": {
        "en": "Mei’s Endothermic Blaster slows Roadhog significantly, preventing him from lining up an accurate hook. If she lands several seconds of spray, she can even briefly freeze him, and her Ice Wall can block off Hog’s line of sight to his target. Hog’s large size also makes him an easy target for Mei’s icicle headshots once slowed.  ",
        "ua": "Бластер Мей сповільнює Хога і ускладнює приціл. Стіна блокує огляд, а великі хітбокси дозволяють легко влучати айсиклами"
      },
      "Ana": {
        "en": "Ana is the premier Roadhog counter – her Biotic Grenade prevents him from healing during Take a Breather and her Sleep Dart can interrupt Whole Hog or stop a flanking Hog in his tracks",
        "ua": "Ана — головний контр Хога. Граната блокує зцілення, а дротик сну зупиняє ульту або фланг"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb increases all damage Hog takes, helping allies cut through his 700 HP quickly. Zenyatta can stay far from Hog’s hook range and pelt him with charged shots – enough headshots with Discord can even force Hog to retreat before he finds a hook opportunity.  ",
        "ua": "Орб розладу збільшує шкоду по Хогу. Зен може тримати дистанцію і розстрілювати з залпів, змушуючи Хога відступити"
      },
      "Baptiste": {
        "en": "Baptiste’s Immortality Field can save allies from the brink of death if Roadhog hooks them, nullifying Hog’s combo. Baptiste can also use Regenerative Burst to counteract some of Hog’s area damage (from Whole Hog) and shoot Hog from off-angles using Exo Boots, making himself a difficult hook target.  ",
        "ua": "Поле безсмертя Баптіста рятує союзника від смерті після хука. Біотичний вибух знімає шкоду ульти, а Exo Boots дозволяють бути поза досяжністю"
      }
    }
  },
  {
    "name": "Sigma",
    "icon": "icons/tank/Sigma.webp",
    "role": "tank",
    "counters": {
      "Orisa": {
        "en": "Orisa’s Fortify makes her immune to Sigma’s Accretion stun, and she can push forward through Sigma’s barrier with Javelin Spin. Sigma struggles to break Orisa’s durable defenses and can be outpaced by her consistent damage and CC.  ",
        "ua": "Фортифікація Оріси блокує камінь Сігми, а Спін дає пройти крізь щит. Оріса витримує шкоду й поступово перебиває Сігму"
      },
      "D.Va": {
        "en": "D.Va can aggressively dive Sigma, rendering his long-range advantage moot. Defense Matrix eats Sigma’s Hyperspheres and even his Gravitic Flux slam if timed just as allies hit the ground. D.Va forces Sigma to duel at close range where she can overwhelm him.  ",
        "ua": "Діва влітає в Сігму, Матриця блокує кулі та навіть падіння від ульти, змушуючи Сігму битися зблизька, де вона сильніша"
      },
      "Zarya": {
        "en": "Zarya’s particle beam cannot be blocked by Sigma’s grasp or barrier once she gets within range. If Sigma tries to combo her with Accretion + primary fire, Zarya can use a personal bubble to absorb it, gaining energy and negating the damage. High-energy Zarya will quickly destroy Sigma’s barrier and pressure him heavily.  ",
        "ua": "Промінь Зарі не блокується щитом чи Поглинанням. Особистий бабл блокує комбо Сігми, даючи заряд — високоенергетична Заря знищує Сігму швидко"
      },
      "Reaper": {
        "en": "Reaper can phase through Sigma’s barrier and unload point-blank. Sigma’s lack of mobility makes him an easy target for Reaper once distance is closed. Additionally, Sigma’s grasp won’t absorb Reaper’s hitscan pellets, so Reaper can continue to deal damage even when Sigma tries to defend",
        "ua": "Жнець проходить крізь щит Сігми й завдає шкоди зблизька, де Сігма безпорадний. Поглинання не працює проти дробу"
      },
      "Sombra": {
        "en": "Sombra can hack Sigma to drop his barrier and prevent him from using Kinetic Grasp, leaving him exposed. With his defenses down, Sigma is susceptible to being burst by Sombra’s team, and he cannot escape easily without abilities",
        "ua": "Сомбра хаком блокує щит і Поглинання, залишаючи Сігму беззахисним до фокусу"
      },
      "Pharah": {
        "en": "Pharah attacks from above and can stay out of reach of Sigma’s abilities. Sigma’s barrier can block some rockets but has limited duration, and Accretion is very hard to land on a flying Pharah. Meanwhile, Pharah’s sustained aerial assault pressures Sigma and forces him to spend resources on defense rather than aggression.  ",
        "ua": "Фара тисне з повітря, де Сігма не дістає. Щит тримається недовго, а камінь важко влучити — ракети постійно тиснуть"
      },
      "Ana": {
        "en": "Ana’s Sleep Dart is particularly dangerous for Sigma – if she catches him (for example, while he’s channeling Gravitic Flux or dropping shield), it sets up an easy focus kill. Biotic Grenade also prevents Sigma from benefiting from his shield conversion (Kinetic Grasp shields) or support healing, making him much easier to bring down.  ",
        "ua": "Дротик сну Ани ловить Сігму при ульті або помилці, а граната блокує зцілення від Поглинання і сапортів"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb makes quick work of Sigma’s health bar, especially since Sigma often holds still while using his abilities. Discord amplifies all damage, helping the team overwhelm Sigma’s shield and armor quickly",
        "ua": "Орб розладу робить Сігму легкою ціллю — у стані використання здібностей він стає мішенню для залпів"
      },
      "Baptiste": {
        "en": "Baptiste’s Immortality Field thwarts Sigma’s Gravitic Flux kill combo – allies lifted by Flux can survive the slam with the field in place. Baptiste can also chip away at Sigma with his hitscan rifle and use Regenerative Burst to heal through Sigma’s poke damage, making Sigma’s job much harder.  ",
        "ua": "Поле безсмертя блокує ульту Сігми (Flux), а Баптіст знімає шкоду гітсканом і лікуванням"
      }
    }
  },
  {
    "name": "Winston",
    "icon": "icons/tank/Winston.webp",
    "role": "tank",
    "counters": {
      "Roadhog": {
        "en": "Roadhog punishes Winston’s dives with Chain Hook – a hooked Winston is pulled out of his bubble and can be burst down with Scrap Gun. Hog’s high health and self-heal also allow him to withstand Winston’s Tesla Cannon long enough to win the duel or force Winston to retreat.  ",
        "ua": "Хук Хога зриває стрибок Вінстона і виводить з бабла — він стає легкою мішенню. ХП і зцілення Хога дозволяють пережити Теслу"
      },
      "Zarya": {
        "en": "Zarya thrives against Winston’s Tesla Cannon: her barriers soak up Winston’s lightning to charge her energy, making her attacks stronger. A high-energy Zarya will melt Winston quickly, and she can use bubbles on allies to nullify Winston’s focus fire when he jumps a target.  ",
        "ua": "Заря заряджається від Тесли, а з високим зарядом плавить Вінстона. Бабл на союзнику блокує фокус після стрибка"
      },
      "Orisa": {
        "en": "Orisa can Fortify to ignore Winston’s knockback when he lands and can spear him away from squishy allies. Her sustained damage at mid-range pressures Winston outside the reach of his Tesla Cannon, and Javelin Spin can block the fire from his secondary if needed.  ",
        "ua": "Оріса блокує удар при приземленні Фортифікацією, а Спис відкидає від сапортів. Її шкода починається ще до того, як Тесла дістає"
      },
      "Reaper": {
        "en": "Reaper’s shotguns make short work of Winston if he tries to engage Reaper or his team in close range. Winston’s Barrier won’t save him – Reaper can step inside it and continue firing. Meanwhile, Wraith Form lets Reaper escape if Winston tries to focus him with Primal Rage",
        "ua": "Жнець перемагає у ближньому бою — проходить щит, стріляє зблизька, а Примара дозволяє втекти"
      },
      "Bastion": {
        "en": "Bastion’s turret mode (Assault) can destroy Winston’s barrier and health rapidly. Winston has a large crit box and limited range, so if Bastion positions well, Winston will lose too much health before he ever reaches Bastion’s position",
        "ua": "Бастіон у турелі знищує щит і ХП Вінстона швидко. Якщо добре позиціонований — Вінстон помре до того, як дійде"
      },
      "Mei": {
        "en": "Mei can slow Winston with her Endothermic Blaster, making it difficult for him to escape once he dives in. She can also drop Ice Wall to block Winston’s escape route or isolate him from his team, and Cryo-Freeze to weather his Tesla Cannon until help arrives",
        "ua": "Мей уповільнює Тесли, блокує втечу Стіною, або виживає у фризі. Ідеально для ізоляції танка"
      },
      "Brigitte": {
        "en": "Brigitte was designed to counter dive tanks like Winston. Her Inspire healing and armor make her team more survivable against Winston’s cleave damage, and Shield Bash or Whip Shot can interrupt Winston’s leap or push him away from priority targets, denying him easy kills.  ",
        "ua": "Брiґiтта створена проти дайв-танків. Inspire і броня тримають команду, а Батіг або Удар щитом переривають стрибки"
      },
      "Ana": {
        "en": "Ana’s Sleep Dart is a direct threat to Winston – a sleeping Winston (often timed right after he lands or during Primal Rage) is a free elimination. Biotic Grenade also prevents Winston from getting healed while he’s in the fray, ensuring he can’t sustain a long dive.  ",
        "ua": "Дротик сну Ани ловить Вінстона після приземлення чи під ультою, а граната блокує зцілення — без підтримки він помирає"
      },
      "Moira": {
        "en": "Moira can evade Winston easily with Fade and out-heal his damage to her team. Her Biotic Grasp latches onto Winston when he dives, and Moira’s self-healing plus lifesteal orb can allow her to duel Winston if needed, often forcing him back without securing a kill.  ",
        "ua": "Моіра легко ухиляється Fade’ом, лікує команду більше, ніж шкодить Тесла. Може вижити й прогнати Вінстона сама"
      }
    }
  },
  {
    "name": "Wrecking Ball",
    "icon": "icons/tank/Wrecking_Ball.webp",
    "role": "tank",
    "counters": {
      "Roadhog": {
        "en": "Roadhog’s Chain Hook is one of the best answers to a rolling Hammond – a hook can yank Wrecking Ball out of a rollout or pile drive, cancelling his momentum and leaving him exposed to follow-up shots. Hog’s high damage can then quickly deplete Ball’s health before he can escape.  ",
        "ua": "Хук Хога витягує Хамстера з ролл-аута або пайлдрайва, дає бурст до втечі"
      },
      "Orisa": {
        "en": "Orisa’s Fortify makes her immune to Wrecking Ball’s knockbacks and slams, denying Ball the ability to scatter her team. She can also spear Ball mid-roll to knock him back, and her Javelin Spin can block Ball’s Adaptive Shield projectile (limiting the shields he gains from nearby enemies).  ",
        "ua": "Оріса не реагує на нокбеки та стани Хамстера, Спис збиває вкат, Спін знищує щити"
      },
      "Ramattra": {
        "en": "Ramattra’s Ravenous Vortex is a direct counter to Wrecking Ball’s aerial pile drive – it pulls Ball down and significantly slows him, making him an easy target after he slams. In Nemesis form, Ramattra’s punches also go through Ball’s shields, pressuring him even if he uses Adaptive Shield.  ",
        "ua": "Вихор Раматтри тягне Хамстера вниз під час стрибка, а в Немезиді його кулаки пробивають щити, шкодять навіть із адаптивом"
      },
      "Sombra": {
        "en": "Sombra’s Hack is a hard counter to Wrecking Ball: a hacked Ball is knocked out of ball form and cannot use Grappling Claw or Adaptive Shield, leaving him extremely vulnerable. Sombra can then coordinate to burst Ball down during the hack duration",
        "ua": "Хак Сомбри вибиває Хамстера з кулі, блокує гак і щити — робить його беззахисним"
      },
      "Mei": {
        "en": "Mei’s freeze effects and Ice Wall ruin Wrecking Ball’s engagements. A well-placed Ice Wall can block Ball’s rollout paths or separate him from his tether point, and her primary fire can slow him to a crawl, stopping his escape. Once slowed, Ball becomes an easy target for her team",
        "ua": "Мей сповільнює і стіною блокує шляхи розгону, ізолюючи від троса. Після сповільнення стає легкою мішенню"
      },
      "Torbjorn": {
        "en": "Torbjorn’s turret automatically tracks Wrecking Ball, chipping away at him even as he tries to be evasive. The constant turret pressure forces Ball to deal with it or take continuous damage. Meanwhile, Torb’s Overload gives him the survivability to withstand Ball’s pile driver and shoot back effectively.  ",
        "ua": "Турель Торба постійно відстежує Хамстера, змушуючи реагувати. Перевантаження дозволяє вижити та відповісти"
      },
      "Brigitte": {
        "en": "Brigitte’s Shield Bash will cancel Wrecking Ball’s rollout if timed as he approaches, and her Whip Shot can boop him away after a pile drive. Brigitte’s Repair Packs and Rally armor also counter Ball’s hit-and-run style by keeping her teammates sustained and resistant to his burst damage.  ",
        "ua": "Брiґiтта зупиняє закат Штовханням і відкидає після стрибка. Пакети й броня зберігають команду від бурсту"
      },
      "Ana": {
        "en": "Ana’s Sleep Dart is a death sentence for Wrecking Ball – a sleeping Ball (especially after he’s used Adaptive Shield) can be quickly focused down by her team. Additionally, Ana’s Biotic Grenade prevents Ball from receiving healing from his supports, so if he dives in and gets anti-healed, he cannot sustain and must retreat or die.  ",
        "ua": "Дротик сну Ани — вирок Хамстеру після адаптиву. Граната блокує зцілення — він не виживе у фокусі"
      },
      "Zenyatta": {
        "en": "While Zenyatta is a dive target for Ball, a coordinated team can make use of Discord Orb to kill Wrecking Ball quickly. The orb stays on Ball even as he rolls around, increasing all damage he takes. If Ball can’t remove the discord (by breaking line of sight), Zen’s team will burst him down and punish his aggression",
        "ua": "Орб розладу тримається навіть при русі — Зен і команда можуть швидко добити Хамстера при злагодженій грі"
      }
    }
  },
  {
    "name": "Zarya",
    "icon": "icons/tank/Zarya.webp",
    "role": "tank",
    "counters": {
      "Sigma": {
        "en": "Sigma’s range and shield control can stymie Zarya. He can poke safely with Hyperspheres and pull back behind his barrier whenever Zarya looks to beam him. If Zarya uses her Projected Barrier aggressively, Sigma can wait it out or use Kinetic Grasp to avoid feeding her energy. Accretion can also interrupt a high-energy Zarya’s Graviton Surge if timed perfectly.  ",
        "ua": "Сігма на дистанції контролює Зарю. Щит і Поглинання блокують промінь, поки бабл активний. Камінь зупиняє ульту"
      },
      "Orisa": {
        "en": "Orisa’s Javelin Spin eats Zarya’s secondary fire grenades, and Fortify prevents her from being pulled by Graviton Surge. Orisa can also outlast Zarya’s damage thanks to her armor and Fortify damage reduction, especially when Zarya doesn’t have bubbles available.  ",
        "ua": "Спін Оріси блокує гранати Зарі, а Фортифікація захищає від Гравітон Серджу. Виживає за рахунок броні та зниження шкоди"
      },
      "Roadhog": {
        "en": "Roadhog can capitalize when Zarya’s bubbles are on cooldown. If he hooks her when she’s vulnerable, he can take out a significant chunk of her health with his follow-up combo. Additionally, Roadhog’s frequent self-healing forces Zarya to expend a lot of effort and energy to secure a kill, during which time Hog can look for another hook opportunity.  ",
        "ua": "Роадхог карає, коли бабли на кулдауні — хук + вистріл знімає багато ХП. Часте зцілення змушує Зарю витрачати заряд"
      },
      "Bastion": {
        "en": "Bastion’s high sustained DPS in turret mode can burn through Zarya’s health even if she has high energy. Her bubbles last only 2 seconds and can’t cover her whole team, so Bastion will always find targets to shoot. Once her bubbles are down, Zarya herself can be shredded quickly by Bastion’s fire",
        "ua": "Бастіон у турелі пробиває Зарю навіть з енергією — бабли короткі, не рятують всю команду. Після баблів Зара вразлива"
      },
      "Reaper": {
        "en": "Reaper can exploit Zarya’s shorter range. If he teleports or flanks into range, his shotguns will deal heavy damage faster than Zarya can charge up and return it. If Zarya bubbles, Reaper can simply cease fire momentarily to avoid feeding her, then resume once it expires, often out-dueling her at close range.  ",
        "ua": "Жнець обходить коротку дальність Зарі. Фланк, бурст, і перерва у стрільбі під бабл дозволяють перемогти"
      },
      "Pharah": {
        "en": "Pharah can stay well outside of Zarya’s effective range and bombard her. Zarya has no tools to reliably hit an airborne target at long range except slow lobbed grenades, which are easy for Pharah to dodge. This means Pharah can freely pressure Zarya or her teammates and force Zarya to use bubbles to save allies from splash damage",
        "ua": "Фара тримається далеко — Заря не має як дістати. Лише повільні гранати, які легко ухилити"
      },
      "Ana": {
        "en": "Ana’s Biotic Grenade is extremely potent against Zarya because it prevents Zarya from receiving any healing during its duration, making Zarya easier to kill despite her shields. Also, Ana’s Sleep Dart can neutralize Zarya’s Graviton Surge combo by sleeping Zarya or her follow-up damage dealer during the ultimate.  ",
        "ua": "Граната Ани блокує зцілення під щитами — важливий момент проти Зарі. Дротик сну зупиняє комбо під ультою"
      },
      "Zenyatta": {
        "en": "Zenyatta’s Discord Orb ensures Zarya takes amplified damage even while she might have bubble protection. Since Discord persists until line of sight is broken, Zarya remains a glowing target anytime she’s in the open, and the extra damage helps overcome her shield health quickly.  ",
        "ua": "Орб розладу не зникає під баблом — Зен і команда швидко проривають щити й здоров’я"
      },
      "Kiriko": {
        "en": "Kiriko’s Protection Suzu can cleanse the Graviton Surge effect from her teammates, allowing them to escape Zarya’s ultimate. This completely nullifies Zarya’s biggest playmaker. In neutral play, Kiriko can also Swift Step away if Zarya tries to focus her, and her kunai can poke Zarya from outside of optimal beam range, keeping Kiriko relatively safe while still contributing to the fight.    ",
        "ua": "Сузу Кіріко знімає ефект Гравітон Серджу, рятуючи команду. У нейтральному бою — телепорт і кунаї дозволяють виживати й шкодити на безпечній дистанції"
      }
    }
  }
];

export default data;
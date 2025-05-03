export const characters = [
    {
        name: 'escoffier',
        function: 'mainDps',
        bestWeapon: 'Symphonist of Scents',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [
            [{'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'escoffier': 'support'},
            {'neuvillette': 'mainDps'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        newCharacter : 'new',
        weapon: 'WEAPON_POLE',
        rarity: '5',
    },
    {
        name: 'ifa',
        function: 'support',
        bestWeapon: 'Sunny Morning Sleep-In',
        otherWeapons: ['A Thousand Floating Dreams','Mappa Mare','Wandering Evenstar'],
        bestArtifacts: 'Viridescent Venerer',
        teams: [
            [{'kamisato-ayato': 'mainDps'},
            {'ororon': 'subDps'},
            {'ifa': 'support'},
            {'furina': 'support'}]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['critRate', 'elementalMastery','energyRecharge'],
        newCharacter : 'new',
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'albedo',
        function: 'subDps',
        bestWeapon: 'Peak Patrol Song',
        otherWeapons: ['Uraku Misugiri','Cinnabar Spindle','Harbinger of Dawn'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Golden Troupe'],
        twoPieces: ['Husk of Opulent Dreams', 'Archaic Petra'],
        teams: [
            [{'arataki-itto': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}],
            [{'navia': 'mainDps'},
            {'albedo': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'alhaitham',
        function: 'mainDps',
        bestWeapon: 'Light of Foliar Incision',
        otherWeapons: ['Primordial Jade Cutter','Mistsplitter Reforged','Wolf-Fang'],
        bestArtifacts: 'Gilded Dreams',
        otherArtifacts: ['Deepwood Memories'],
        twoPieces: ['Deepwood Memories', 'Emblem of Severed Fate'],
        teams: [
            [{'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'support'},
            {'kuki-shinobu': 'support'}],
            [{'alhaitham': 'mainDps'},
            {'yae-miko': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}]
        ],
        talentPriority: ['elementalSkill','normalAttack','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','dendroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','elementalMastery', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'amber',
        function: 'subDps',
        bestWeapon: 'the First Great Magic',
        otherWeapons: ['Aqua Simulacra','Elegy for the End','Hamayumi'],
        bestArtifacts: 'Wanderers Troupe',
        otherArtifacts: ['Shimenawas Reminiscence', 'Instructor'],
        teams: [[
            {'amber': 'subDps'},
            {'rosaria': 'subDps'},
            {'bennett': 'support'},
            {'diona': 'support'}
        ],
        [
            {'hu-tao': 'mainDps'},
            {'amber': 'support'},
            {'xingqiu': 'subDps'},
            {'sucrose': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','elementalMastery', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank:'d'
    },
    {
        name: 'arataki-itto',
        function: 'mainDps',
        bestWeapon: 'Redhorn Stonethresher',
        otherWeapons: ['Serpent Spine','Skyward Pride','Whiteblind'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Desert Pavilion Chronicle', 'Retracing Bolide'],
        teams: [[
            {'arataki-itto': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
            ],
            [{'arataki-itto': 'mainDps'},
            {'chiori': 'subDps'},
            {'gorou': 'support'},
            {'furina': 'subDps'}
        ]
        ],
        talentPriority: ['elementalBurst', 'normalAttack', 'elementalSkill'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'arlecchino',
        function: 'mainDps',
        bestWeapon: 'Crimson Moons Semblance',
        otherWeapons: ['Primordial Jade Winged-Spear','Staff of the Scarlet Sands','Deathmatch'],
        bestArtifacts: 'Fragment of Harmonic Whimsy',
        otherArtifacts: ['Gladiators Finale', 'Crimson Witch of Flames'],
        teams: [[
            {'arlecchino': 'mainDps'},
            {'yelan': 'subDps'},
            {'xingqiu': 'subDps'},
            {'kaedehara-kazuha': 'support'}],
            [
            {'arlecchino': 'mainDps'},
            {'fischl': 'subDps'},
            {'chevreuse': 'support'},
            {'bennett': 'support'}]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','elementalMastery'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'baizhu',
        function: 'support',
        bestWeapon: 'Jadefalls Splendor',
        otherWeapons: ['Prototype Amber','Favonius Codex','Thrilling Tales of Dragon Slayers'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Ocean-Hued Clam', 'Instructor'],
        teams: [[
            {'nilou': 'mainDps'},
            {'nahida': 'subDps'},
            {'xingqiu': 'subDps'},
            {'baizhu': 'support'}
        ],
        [
            {'cyno': 'mainDps'},
            {'nahida': 'subDps'},
            {'yelan': 'subDps'},
            {'baizhu': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['energyRecharge', 'hpPercent','hp'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'beidou',
        function: 'subDps',
        bestWeapon: 'Wolfs Gravestone',
        otherWeapons: ['Serpent Spine','Beacon of the Reed Sea','Redhorn Stonethresher'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: [],
        twoPieces: ['Noblesse Oblige','Emblem of Severed Fate', 'Thundering Fury', 'Emblem of Severed Fate'],
        teams: [[
            {'sucrose': 'support'},
            {'fischl': 'subDps'},
            {'beidou': 'subDps'},
            {'xingqiu': 'subDps'}
        ],
        [
            {'yoimiya': 'mainDps'},
            {'fischl': 'subDps'},
            {'beidou': 'subDps'},
            {'xingqiu': 'subDps'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'barbara',
        function: 'support',
        bestWeapon: 'Thrilling Tales of Dragon Slayers',
        otherWeapons: ['Everlasting Moonglow','Prototype Amber','Favonius Codex'],
        bestArtifacts: 'Ocean-Hued Clam',
        otherArtifacts: ['Tenacity of the Millelith', 'Instrutor'],
        teams: [[
            {'nilou': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'subDps'},
            {'barbara': 'support'}
        ],
        [
            {'kamisato-ayaka': 'mainDps'},
            {'shenhe': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'barbara': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'healingBonus'],
        subStatsArtifacts: ['hpPercent','hp', 'energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'bennett',
        function: 'support',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Aquila Favonia','Skyward Blade','Sapwood Blade'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Emblem of Severed Fate', 'Crimson Witch of Flames'],
        teams: [[
            {'tartaglia': 'mainDps'},
            {'xiangling': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'raiden-shogun': 'mainDps'},
            {'xiangling': 'subDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'}
        ]],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'candace',
        function: 'support',
        bestWeapon: 'Favonius Lance',
        otherWeapons: ['Black Tassel','Staff of Homa','Skyward Spine'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['the Exile'],
        twoPieces: ['Emblem of Severed Fate', 'Tenacity of the Millelith'],
        teams: [[
            {'yoimiya': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'candace': 'support'}
        ],
        [
            {'noelle': 'mainDps'},
            {'furina': 'subDps'},
            {'yelan': 'subDps'},
            {'candace': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['energyRecharge','hpPercent', 'hp'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'charlotte',
        function: 'support',
        bestWeapon: 'Prototype Amber',
        otherWeapons: ['Favonius Codex','Thrilling Tales of Dragon Slayers','Oathsworn Eye'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Tenacity of the Millelith', 'Ocean-Hued Clam'],
        teams: [[
            {'wriothesley': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'charlotte': 'support'}
        ],
        [
            {'xiangling': 'subDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'charlotte': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'healingBonus'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'chasca',
        function: 'mainDps',
        bestWeapon: 'Astral Vultures Crimson Plumage',
        otherWeapons: ['the First Great Magic','Aqua Simulacra','Hamayumi'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Desert Pavilion Chronicle', 'Wanderers Troupe'],
        teams: [[
            {'chasca': 'mainDps'},
            {'ororon': 'subDps'},
            {'furina': 'subDps'},
            {'bennett': 'support'}
        ],
        [
            {'chasca': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','atkPercent','energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'chevreuse',
        function: 'support',
        bestWeapon: 'Favonius Lance',
        otherWeapons: ['Rightful Reward','Dialogues of the Desert Sages','Black Tassel'],
        bestArtifacts: 'Song of Days Past',
        otherArtifacts: ['Ocean-Hued Clam', 'Noblesse Oblige'],
        teams: [[
            {'raiden-shogun': 'mainDps'},
            {'kujou-sara': 'support'},
            {'bennett': 'support'},
            {'chevreuse': 'support'}
        ],
        [
            {'yoimiya': 'mainDps'},
            {'fischl': 'support'},
            {'bennett': 'support'},
            {'chevreuse': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['hpPercent','energyRecharge', 'hp'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'chiori',
        function: 'subDps',
        bestWeapon: 'Uraku Misugiri',
        otherWeapons: ['Wolf-Fang','Cinnabar Spindle','Harbinger of Dawn'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Golden Troupe'],
        twoPieces: ['Archaic Petra', 'Husk of Opulent Dreams'],
        teams: [[
            {'navia': 'mainDps'},
            {'chiori': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}
            ],
            [{'arataki-itto': 'mainDps'},
            {'chiori': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','atkPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'chongyun',
        function: 'support',
        bestWeapon: 'Wolfs Gravestone',
        otherWeapons: ['Skyward Pride','Sacrificial Greatsword','Serpent Spine'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Noblesse Oblige'],
        twoPieces: ['Blizzard Strayer', 'Noblesse Oblige'],
        teams: [[
            {'rosaria': 'subDps'},
            {'xiangling': 'subDps'},
            {'chongyun': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'kaeya': 'subDps'},
            {'xingqiu': 'subDps'},
            {'chongyun': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'citlali',
        function: 'support',
        bestWeapon: 'Starcallers Watch',
        otherWeapons: ['A Thousand Floating Dreams','Favonius Codex','Sacrificial Fragments'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Tenacity of the Millelith', 'Instructor'],
        teams: [[
            {'mavuika': 'mainDps'},
            {'xilonen': 'support'},
            {'citlali': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'arlecchino': 'mainDps'},
            {'rosaria': 'support'},
            {'citlali': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['critRate', 'elementalMastery','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'clorinde',
        function: 'mainDps',
        bestWeapon: 'Absolution',
        otherWeapons: ['Haran Geppaku Futsu','Mistsplitter Reforged','Finale of the Deep'],
        bestArtifacts: 'Fragment of Harmonic Whimsy',
        otherArtifacts: ['Thundering Fury', 'Echoes of An offering'],
        teams: [[
            {'clorinde': 'mainDps'},
            {'fischl': 'subDps'},
            {'thoma': 'support'},
            {'chevreuse': 'support'}
        ],
        [
            {'clorinde': 'mainDps'},
            {'yae-miko': 'subDps'},
            {'nahida': 'subDps'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','atkPercent', 'elementalMastery','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'collei',
        function: 'subDps',
        bestWeapon: 'favonius bow',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'cyno',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'dehya',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'diluc',
        function: 'mainDps',
        bestWeapon: 'Redhorn Stonethresher',
        otherWeapons: ['Beacon of the Reed Sea','Serpent Spine','Wolfs Gravestone'],
        bestArtifacts: 'Crimson Witch of Flames',
        otherArtifacts: ['Gilded Dreams', 'Gladiators Finale'],
        teams: [[
            {'diluc': 'mainDps'},
            {'furina': 'subDps'},
            {'bennett': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'diluc': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'sucrose': 'support'}
        ]
        ],
        talentPriority: ['normalAttack', 'elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','pyroBonus','critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','elementalMastery'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 'c'
    },
    {
        name: 'diona',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'dori',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'emilie',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'eula',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'faruzan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'fischl',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'freminet',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'furina',
        function: 'subDps',
        bestWeapon: 'Splendor of Tranquil Waters',
        otherWeapons: ['Primordial Jade Cutter','Festering Desire','Favonius Sword'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        twoPieces: ['Tenacity of the Millelith', 'Golden Troupe'],
        teams: [
            [{'neuvillette': 'mainDps'},
            {'xilonen': 'support'},
            {'furina': 'subDps'},
            {'kaedehara-kazuha': 'support'}],
            [{'mavuika': 'mainDps'},
                {'xilonen': 'support'},
                {'furina': 'subDps'},
                {'bennett': 'support'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','hpPercent', 'energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'gaming',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'ganyu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'gorou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'hu-tao',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'iansan',
        function: 'support',
        bestWeapon: 'Calamity Queller',
        otherWeapons: ['Engulfing Lightning','Favonius Lance','Tamayuratei no Ohanashi'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Noblesse Oblige'],
        twoPieces: ['Emblem of Severed Fate', 'Gladiators Finale'],
        teams: [[
            {'varesa': 'mainDps'},
            {'furina': 'subDps'},
            {'iansan': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'mavuika': 'mainDps'},
            {'citlali': 'support'},
            {'iansan': 'support'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'atkPercent'],
        subStatsArtifacts: ['atkPercent','energyRecharge', 'critRate'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'jean',
        function: 'support',
        bestWeapon: 'Primordial Jade Cutter',
        otherWeapons: ['Freedom-Sworn','Favonius Sword','Amenoma Kageuchi'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Noblesse Oblige', 'Ocean-Hued Clam'],
        teams: [[
            {'neuvillette': 'mainDps'},
            {'fischl': 'subDps'},
            {'furina': 'subDps'},
            {'jean': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'fischl': 'subDps'},
            {'beidou': 'subDps'},
            {'jean': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','anemoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'kachina',
        function: 'subDps',
        bestWeapon: 'Footprint of the Rainbow',
        otherWeapons: ['Favonius Lance','Engulfing Lightning','Deathmatch'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Husk of Opulent Dreams','Tenacity of the Millelith'],
        teams: [[
            {'arataki-itto': 'mainDps'},
            {'kachina': 'subDps'},
            {'chiori': 'subDps'},
            {'zhongli': 'support'}
        ],
        [
            {'mualani': 'mainDps'},
            {'kachina': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercentOrEnergyRecharge','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'kaedehara-kazuha',
        function: 'subDps',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Astral Vultures Crimson Plumage','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kaeya',
        function: 'subDps',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Favonius Sword','Lions Roar','Harbinger of Dawn'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: [],
        twoPieces: ['Blizzard Strayer', 'Noblesse Oblige', 'Emblem of Severed Fate', 'Noblesse Oblige'],
        teams: [[
            {'xiangling': 'subDps'},
            {'rosaria': 'support'},
            {'kaeya': 'subDps'},
            {'bennett': 'support'} 
        ],
        [
            {'chongyun': 'support'},
            {'xingqiu': 'subDps'},
            {'kaeya': 'subDps'},
            {'bennett': 'support'} 
        ]
        ],
        talentPriority: ['elementalBurst','normalAttack','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['energyRecharge', 'critRate','critDamage', 'atkPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'kamisato-ayaka',
        function: 'subDps',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Blizzard Strayer',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kamisato-ayato',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Echoes of an offering',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kaveh',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'keqing',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kinich',
        function: 'mainDps',
        bestWeapon: 'Fang of the Mountain King',
        otherWeapons: ['Beacon of the Reed Sea','Serpent Spine','Verdict'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Unfinished Reverie', 'Deepwood Memories'],
        teams: [[
            {'kinich': 'mainDps'},
            {'emilie': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}
        ],
        [
        {'kinich': 'mainDps'},
        {'furina': 'subDps'},
        {'xiangling': 'subDps'},
        {'bennett': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','dendroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'kirara',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'klee',
        function: 'subDps',
        bestWeapon: 'Kaguras Verity',
        otherWeapons: ['Lost Prayer to the Sacred Winds','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'kujou-sara',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'kuki-shinobu',
        function: 'subDps',
        bestWeapon: 'Xiphos Moonlight',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'lan-yan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'layla',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'lisa',
        function: 'support',
        bestWeapon: 'Kaguras Verity',
        otherWeapons: ['Lost Prayer to the Sacred Winds','Skyward Atlas','The Widsith'],
        bestArtifacts: 'Thundering Fury',
        otherArtifacts: ['Gilded Dreams', 'Thundersoother'],
        teams: [[
            {'alhaitham': 'mainDps'},
            {'nahida': 'support'},
            {'lisa': 'support'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'cyno': 'mainDps'},
            {'nahida': 'support'},
            {'lisa': 'support'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'lynette',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'lyney',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'mavuika',
        function: 'mainDps',
        bestWeapon: 'A Thousand Blazing Suns',
        otherWeapons: ['Beacon of the Reed Sea','Verdict','Serpent Spine'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Marechaussee Hunter', 'Crimson Witch of Flames'],
        teams: [
        [
            {'mavuika': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'mavuika': 'mainDps'},
            {'citlali': 'support'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'mika',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'mona',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'mualani',
        function: 'mainDps',
        bestWeapon: 'Surfs Up',
        otherWeapons: ['Sacrificial Jade','Tome of the Eternal Flow','Ring of Yaxche'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Heart of Depth', 'Marechaussee Hunter'],
        teams: [[
            {'mualani': 'mainDps'},
            {'dehya': 'subDps'},
            {'emilie': 'subDps'},
            {'nahida': 'subDps'}
        ],
        [
            {'mualani': 'mainDps'},
            {'xiangling': 'subDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hydroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'hpPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'nahida',
        function: 'subDps',
        bestWeapon: 'A Thousand Floating Dreams',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Gilded Dreams','Golden Troupe'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'navia',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'neuvillette',
        function: 'subDps',
        bestWeapon: 'Tome of the Eternal Flow',
        otherWeapons: ['Sacrificial Jade','Jadefalls Splendor','Prototype Amber'],
        bestArtifacts: 'Marechaussee Hunter',
        otherArtifacts: ['Heart of Depth'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        twoPieces: ['Heart of Depth', 'Marechaussee Hunter'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'nilou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'ningguang',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'noelle',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'ororon',
        function: 'subDps',
        bestWeapon: 'Elegy for the End',
        otherWeapons: ['Aqua Simulacra','Amos Bow','Chain Breaker'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Thundering Fury', 'Emblem of Severed Fate'],
        teams: [[
            {'kamisato-ayato': 'mainDps'},
            {'ororon': 'subDps'},
            {'fischl': 'subDps'},
            {'sucrose': 'support'}
        ],
        [
            {'chasca': 'mainDps'},
            {'ororon': 'subDps'},
            {'furina': 'subDps'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'qiqi',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'raiden-shogun',
        function: 'subDps',
        bestWeapon: 'Engulfing Lightning',
        otherWeapons: ['the Catch','Staff of Homa','Dragons Bane'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Thundering Fury', 'Flower of Paradise Lost'],
        teams: [
            [{'raiden-shogun': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}],
            [{'raiden-shogun': 'subDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'subDps'},
            {'baizhu': 'support'}]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery','atkPercentOrElementalMastery', 'critRateOrElementalMastery'],
        subStatsArtifacts: ['critRateOrDamage', 'energyRecharge', 'atkPercent', 'elementalMastery'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'razor',
        function: 'mainDps',
        bestWeapon: 'Song of Broken Pines',
        otherWeapons: ['Wolfs Gravestone', 'Serpent Spine', 'Prototype Archaic'],
        bestArtifacts: 'Pale Flame',
        otherArtifacts: ['Gladiators Finale', 'Bloodstained Chivalry'],
        teams: [
          [
            {'rosaria': 'subDps'},
            {'fischl': 'subDps'},
            {'diona': 'support'},
            {'xingqiu': 'support'}
          ],
          [
            {'kamisato-ayaka': 'subDps'},
            {'mika': 'support'},
            {'bennett': 'support'},
            {'yun-jin': 'support'}
          ]
        ],
        talentPriority: ['normalAttack', 'elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent', 'physicalDamageBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate', 'critDamage', 'atkPercent', 'energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'rosaria',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'sangonomiya-kokomi',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'sayu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'sethos',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'shenhe',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'shikanoin-heizou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'sigewinne',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'tartaglia',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'sucrose',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'thoma',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'tighnari',
        function: 'subDps',
        bestWeapon: 'Hunters Path',
        otherWeapons: ['Aqua Simulacra','Polar Star','Fading Twilight'],
        bestArtifacts: 'Wanderers Troupe',
        otherArtifacts: ['Gilded Dreams'],
        teams: [
            [
                {'keqing': 'mainDps'},
                {'fischl': 'subDps'},
                {'tighnari': 'subDps'},
                {'kaedehara-kazuha': 'support'}
            ],
            [
                {'tighnari': 'mainDps'},
                {'fischl': 'subDps'},
                {'collei': 'subDps'},
                {'zhongli': 'support'}
            ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','dendroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'elementalMastery','atkPercent'],
        weapon: 'WEAPON_BOW',
        twoPieces: ['Deepwood Memories','Wanderers Troupe'],
        rarity: '5'
    },
    {
        name: 'traveler-anemo',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'traveler-anemo': 'subDps'},
            {'arlecchino': 'support'},
            {'neuvillette': 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'traveler-geo',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'traveler-electro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'traveler-dendro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'traveler-hydro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'traveler-pyro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'varesa',
        function: 'mainDps',
        bestWeapon: 'Vivid Notions',
        otherWeapons: ['Lost Prayer To The Sacred Winds','The Widsith','Skyward Atlas'],
        bestArtifacts: 'Long Nights Oath',
        otherArtifacts: ['Obsidian Codex', 'Thundering Fury'],
        teams: [[
            {'varesa': 'mainDps'},
            {'furina': 'subDps'},
            {'iansan': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'varesa': 'mainDps'},
            {'xiangling': 'subDps'},
            {'iansan': 'support'},
            {'chevreuse': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'venti',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'wanderer',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Desert Pavilion Chronicle',
        otherArtifacts: ['Shimenawas Reminiscence'],
        teams: [[
            {'nilou': 'mainDps'},
            {'traveler-anemo': 'subDps'},
            {'arlecchino': 'support'},
            {'neuvillette': 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        twoPieces: ['Desert Pavilion Chronicle', 'Viridescent Venerer'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'wriothesley',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'xiangling',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'xianyun',
        function: 'subDps',
        bestWeapon: 'Cranes Echoing Call',
        otherWeapons: ['Oathsworn Eye','Thrilling Tales of Dragon Slayers','Favonius Codex'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Noblesse Oblige', 'Song of Days Past'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'xiao',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'xilonen',
        function: 'support',
        bestWeapon: 'Peak Patrol Song',
        otherWeapons: ['Freedom-Sworn','Favonius Sword','Flute of Ezpitzal'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Archaic Petra', 'Noblesse Oblige'],
        teams: [[
            {'neuvillette': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'mavuika': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'citlali': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercentOrEnergyRecharge','defPercent', 'defPercent'],
        subStatsArtifacts: ['critRate','defPercent', 'def','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'xingqiu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'xinyan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'yae-miko',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'yanfei',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'yaoyao',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'yelan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'yoimiya',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'yumemizuki-mizuki',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'yun-jin',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'zhongli',
        function: 'support',
        bestWeapon: 'Black Tassel',
        otherWeapons: ['Favonius Lance','Staff of Homa','Skyward Spine'],
        bestArtifacts: 'Millelith',
        otherArtifacts: ['Archaic Petra', 'Scroll of the Hero of Cinder City'],
        teams: [[
            {'arataki-itto': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
        ],
        [
            {'hu-tao': 'mainDps'},
            {'yelan': 'subDps'},
            {'xingqiu': 'subDps'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['hpPercent','hp','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'aloy',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {'nilou': 'mainDps'},
            {'navia': 'subDps'},
            {'arlecchino': 'subDps'},
            {'neuvillette': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
]
  
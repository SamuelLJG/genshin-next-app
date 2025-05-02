export const characters = [
    {
        name: 'escoffier',
        function: 'mainDps',
        bestWeapon: 'Symphonist of Scents',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [
            [{"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"escoffier": 'support'},
            {"neuvillette": 'mainDps'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            [{"kamisato-ayato": 'mainDps'},
            {"ororon": 'subDps'},
            {"ifa": 'support'},
            {"furina": 'support'}]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMastery',"elementalMastery", "elementalMastery"],
        subStatsArtifacts: ['critRate', "elementalMastery","energyRecharge"],
        newCharacter : 'new',
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
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
            [{"arataki-itto": 'mainDps'},
            {"albedo": 'subDps'},
            {"gorou": 'support'},
            {"zhongli": 'support'}],
            [{"navia": 'mainDps'},
            {"albedo": 'subDps'},
            {"xiangling": 'subDps'},
            {"bennett": 'support'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent',"geoBonus", "critRateOrDamage"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            [{"alhaitham": 'mainDps'},
            {"xingqiu": 'subDps'},
            {"nahida": 'support'},
            {"kuki-shinobu": 'support'}],
            [{"alhaitham": 'mainDps'},
            {"yae-miko": 'subDps'},
            {"nahida": 'subDps'},
            {"kuki-shinobu": 'support'}]
        ],
        talentPriority: ['elementalSkill','normalAttack','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery',"dendroBonus", "critRateOrDamage"],
        subStatsArtifacts: ['critRateOrDamage',"elementalMastery", "atkPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'amber',
        function: 'subDps',
        bestWeapon: 'Polar Star',
        otherWeapons: ['Elegy for the End','Mouuns Moon','The Stringless'],
        bestArtifacts: 'Emblem Of Severed Fate',
        otherArtifacts: ['Instructor', 'The Exile'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent',"pyroBonus", "critRateOrDamage"],
        subStatsArtifacts: ['critRateOrDamage',"elementalMastery", "atkPercent","energyRecharge"],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'arataki-itto',
        function: 'subDps',
        bestWeapon: 'Redhorn Stonethresher',
        otherWeapons: ['Serpent Spine','Skyward Pride','Whiteblind'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Desert Pavilion Chronicle', 'Retracing Bolide'],
        teams: [
            [{"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"kaedehara-kazuha": 'mainDps'}],
            [{"nahida": 'mainDps'},
                {"navia": 'subDps'},
                {"arlecchino": 'support'},
                {"kaedehara-kazuha": 'mainDps'}],
                [{"ningguang": 'mainDps'},
                    {"navia": 'subDps'},
                    {"arlecchino": 'support'},
                    {"kaedehara-kazuha": 'mainDps'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent',"geoBonus", "critRateOrDamage"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","elementalMastery"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'arlecchino',
        function: 'subDps',
        bestWeapon: 'Crimson Moons Semblance',
        otherWeapons: ['Primordial Jade Winged-Spear','Staff of the Scarlet Sands','Deathmatch'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith', 'Gilded Dreams'],
        teams: [[
            {"arataki-itto": 'mainDps'},
            {"gorou": 'support'},
            {"albedo": 'support'},
            {"zhongli": 'support'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'baizhu',
        function: 'support',
        bestWeapon: 'Jadefalls Splendor',
        otherWeapons: ['Prototype Amber','Favonius Codex','Thrilling Tales of Dragon Slayers'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Ocean-Hued Clam', 'Instructor'],
        teams: [[
            {"nilou": 'mainDps'},
            {"nahida": 'subDps'},
            {"xingqiu": 'subDps'},
            {"baizhu": 'support'}
        ],
        [
            {"cyno": 'mainDps'},
            {"nahida": 'subDps'},
            {"yelan": 'subDps'},
            {"baizhu": 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"hpPercent", "hpPercent"],
        subStatsArtifacts: ['energyRecharge', "hpPercent","hp"],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'beidou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'barbara',
        function: 'support',
        bestWeapon: 'Thrilling Tales of Dragon Slayers',
        otherWeapons: ['Everlasting Moonglow','Prototype Amber','Favonius Codex'],
        bestArtifacts: 'Maiden Beloved',
        otherArtifacts: [],
        twoPieces: ['Maiden Beloved','Tenacity of the Millelith','Maiden Beloved','Ocean-Hued Clam'],
        teams: [[
            {"nilou": 'mainDps'},
            {"xingqiu": 'subDps'},
            {"nahida": 'subDps'},
            {"barbara": 'support'}
        ],
        [
            {"kamisato-ayaka": 'mainDps'},
            {"shenhe": 'subDps'},
            {"kaedehara-kazuha": 'support'},
            {"barbara": 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"hpPercent", "healingBonus"],
        subStatsArtifacts: ['hpPercent',"hp", "energyRecharge"],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'bennett',
        function: 'subDps',
        bestWeapon: 'FAVONIUSSWORD',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"xingqiu": 'subDps'},
            {"nahida": 'subDps'},
            {"barbara": 'support'}
        ],
        [
            {"kamisato-ayaka": 'mainDps'},
            {"shenhe": 'subDps'},
            {"kaedehara-kazuha": 'support'},
            {"barbara": 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'candace',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'charlotte',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'chasca',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'chevreuse',
        function: 'subDps',
        bestWeapon: 'favonius lance',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'chiori',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'chongyun',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'citlali',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'clorinde',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'collei',
        function: 'subDps',
        bestWeapon: 'favonius bow',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'diluc',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'diona',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'furina',
        function: 'support',
        bestWeapon: 'Splendor of Tranquil Waters',
        otherWeapons: ['Primordial Jade Cutter','Festering Desire','Favonius Sword'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        twoPieces: ['Tenacity of the Millelith', 'Golden Troupe'],
        teams: [
            [{"neuvillette": 'mainDps'},
            {"xilonen": 'support'},
            {"furina": 'support'},
            {"kaedehara-kazuha": 'support'}],
            [{"mavuika": 'mainDps'},
                {"xilonen": 'support'},
                {"furina": 'support'},
                {"bennett": 'support'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"hpPercent", "critRateOrDamage"],
        subStatsArtifacts: ['critRateOrDamage',"hpPercent", "energyRecharge", "elementalMastery"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'gaming',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'iansan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'jean',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kachina',
        function: 'subDps',
        bestWeapon: 'dragon spear',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '4'
    },
    {
        name: 'kaedehara-kazuha',
        function: 'subDps',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Astral Vultures Crimson Plumage','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kaeya',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'kamisato-ayaka',
        function: 'subDps',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Blizzard Strayer',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kamisato-ayato',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Echoes of an Offering',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'kinich',
        function: 'subDps',
        bestWeapon: 'Fang of the Mountain King',
        otherWeapons: ['Beacon of the Reed Sea','Serpent Spine','Verdict'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'kirara',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4'
    },
    {
        name: 'lisa',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CATALYST',
        rarity: '4'
    },
    {
        name: 'lynette',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
    {
        name: 'mavuika',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5'
    },
    {
        name: 'mika',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'mualani',
        function: 'subDps',
        bestWeapon: 'Surfs Up',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'nahida',
        function: 'subDps',
        bestWeapon: 'A Thousand Floating Dreams',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Gilded Dreams','Golden Troupe'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'ororon',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_BOW',
        rarity: '4'
    },
    {
        name: 'qiqi',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'raiden-shogun',
        function: 'mainDps',
        bestWeapon: 'Engulfing Lightning',
        otherWeapons: ['The Catch','Staff of Homa','Dragons Bane'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Thundering Fury', 'Flower of Paradise Lost'],
        teams: [
            [{"raiden-shogun": 'mainDps'},
            {"xingqiu": 'subDps'},
            {"xiangling": 'subDps'},
            {"bennett": 'support'}],
            [{"raiden-shogun": 'subDps'},
            {"xingqiu": 'subDps'},
            {"nahida": 'subDps'},
            {"baizhu": 'support'}]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery',"atkPercentOrElementalMastery", "critRateOrElementalMastery"],
        subStatsArtifacts: ["critRateOrDamage", "energyRecharge", 'atkPercent', "elementalMastery"],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'razor',
        function: 'subDps',
        bestWeapon: 'Wolf ',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4'
    },
    {
        name: 'rosaria',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
                {"keqing": 'mainDps'},
                {"fischl": 'subDps'},
                {"tighnari": 'subDps'},
                {"kaedehara-kazuha": 'support'}
            ],
            [
                {"tighnari": 'mainDps'},
                {"fischl": 'subDps'},
                {"collei": 'subDps'},
                {"zhongli": 'support'}
            ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent',"dendroBonus", "critRateOrDamage"],
        subStatsArtifacts: ['critRate',"critDamage", "elementalMastery","atkPercent"],
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
            {"nilou": 'mainDps'},
            {"traveler-anemo": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'varesa',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_CATALYST',
        rarity: '5'
    },
    {
        name: 'venti',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"traveler-anemo": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'xilonen',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5'
    },
    {
        name: 'xingqiu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
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
            {"arataki-itto": 'mainDps'},
            {"albedo": 'subDps'},
            {"gorou": 'support'},
            {"zhongli": 'support'}
        ],
        [
            {"hu-tao": 'mainDps'},
            {"yelan": 'subDps'},
            {"xingqiu": 'subDps'},
            {"zhongli": 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"hpPercent", "hpPercent"],
        subStatsArtifacts: ['hpPercent',"hp","energyRecharge"],
        weapon: 'WEAPON_POLE',
        rarity: '5'
    },
    {
        name: 'aloy',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        teams: [[
            {"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_BOW',
        rarity: '5'
    },
]
  
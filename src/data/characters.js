export const characters = [
    {
        name: 'escoffier',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
        teams: [
            [{"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        newCharacter : 'new',
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'ifa',
        function: 'support',
        bestWeapon: 'Sunny Morning Sleep-In',
        otherWeapons: [' A Thousand Floating Dreams','Mappa Mare','Wandering Evenstar'],
        bestArtifacts: ' Viridescent Venerer',
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'albedo',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
        teams: [
            [{"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'alhaitham',
        function: 'subDps',
        bestWeapon: 'primordial jade cutter',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
        teams: [
            [{"nilou": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'amber',
        function: 'subDps',
        bestWeapon: 'Elegy for the End',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'arlecchino',
        function: 'subDps',
        bestWeapon: 'Crimson Moons Semblance',
        otherWeapons: ['Primordial Jade Winged-Spear','Staff of the Scarlet Sands','Deathmatch'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith', 'Gilded Dreams'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'baizhu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'beidou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'bennett',
        function: 'subDps',
        bestWeapon: 'FAVONIUSSWORD',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'candace',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'charlotte',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'chasca',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'chevreuse',
        function: 'subDps',
        bestWeapon: 'favonius lance',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'chiori',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'chongyun',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'citlali',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'clorinde',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'collei',
        function: 'subDps',
        bestWeapon: 'favonius bow',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'cyno',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'dehya',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'diluc',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'diona',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'dori',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'emilie',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'eula',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'faruzan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'fischl',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'freminet',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'furina',
        function: 'subDps',
        bestWeapon: 'Splendor of Tranquil Waters',
        otherWeapons: ['Primordial Jadecutter','Festering Desire ','Key of Khaj-Nisut'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        twoPieces: ['Tenacity of the Millelith', 'Golden Troupe'],
        teams: [[
            {"nahida": 'mainDps'},
            {"navia": 'subDps'},
            {"arlecchino": 'support'},
            {"neuvillette": 'mainDps'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent',"elementalMastery", "atkPercent"],
        subStatsArtifacts: ['critRate',"critDamage", "defPercent","energyRecharge"],
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'gaming',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'ganyu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'gorou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'hu-tao',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'iansan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'jean',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'kachina',
        function: 'subDps',
        bestWeapon: 'dragon spear',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'kaedehara-kazuha',
        function: 'subDps',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Astral Vultures Crimson Plumage','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'kaeya',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'kamisato-ayaka',
        function: 'subDps',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Blizzard Strayer',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'kamisato-ayato',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'kaveh',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'keqing',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'kinich',
        function: 'subDps',
        bestWeapon: 'Fang of the Mountain King',
        otherWeapons: ['Beacon of the Reed Sea','Serpent Spine','Verdict'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'kirara',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'klee',
        function: 'subDps',
        bestWeapon: 'Kaguras Verity',
        otherWeapons: ['Lost Prayer to the Sacred Winds','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'kujou-sara',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'kuki-shinobu',
        function: 'subDps',
        bestWeapon: 'Xiphos Moonlight',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'lan-yan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'layla',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'lisa',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'lynette',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'lyney',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'mavuika',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'mika',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'mona',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'mualani',
        function: 'subDps',
        bestWeapon: 'Surfs Up',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'nahida',
        function: 'subDps',
        bestWeapon: 'Floating Dreams',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Deepwood',
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'navia',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'nilou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'ningguang',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'noelle',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'ororon',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'qiqi',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'raiden-shogun',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'razor',
        function: 'subDps',
        bestWeapon: 'Wolf ',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'rosaria',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'sangonomiya-kokomi',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'sayu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'sethos',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'shenhe',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'shikanoin-heizou',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'sigewinne',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'tartaglia',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'sucrose',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'thoma',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'tighnari',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'traveler-anemo',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'traveler-geo',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'traveler-electro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'traveler-dendro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'traveler-hydro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'traveler-pyro',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'varesa',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'venti',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'wriothesley',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'xiangling',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'xiao',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'xilonen',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'xingqiu',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_SWORD_ONE_HAND'
    },
    {
        name: 'xinyan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CLAYMORE'
    },
    {
        name: 'yae-miko',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'yanfei',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'yaoyao',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'yelan',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'yoimiya',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
    {
        name: 'yumemizuki-mizuki',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_CATALYST'
    },
    {
        name: 'yun-jin',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'zhongli',
        function: 'subDps',
        bestWeapon: 'Black Tassel',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Millelith',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_POLE'
    },
    {
        name: 'aloy',
        function: 'subDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'goldentroupe',
        otherArtifacts: ['tenacityofthemillelith'],
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
        weapon: 'WEAPON_BOW'
    },
]
  
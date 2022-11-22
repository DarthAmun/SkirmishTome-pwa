import IEntity from "./IEntity";

export interface CharOrigin {
  background: string;
  education: string;
  caste: string;
}

export enum CharSize {
  tiny,
  small,
  medium,
  large,
  huge,
  gargantuan,
}
export interface CharAppearance {
  age: number;
  height: string;
  weight: string;
  sizeclass: CharSize;
  pic: string;
}

export interface CharAbilityRating {
  body: number; //1-12
  dex: number; //1-12;
  str: number; //1-12;
  reac: number; //1-12;
  will: number; //1-12;
  log: number; //1-12;
  char: number; //1-12;
  int: number; //1-12;
  luck: number; //1-10;
  magic: number; //1-12
  faith: number; //1-12;
}

export enum CharArcaneCoreAbility {
  will,
  char,
  log,
  int,
}
export interface CharArcaneAffinity {
  arcaneCoreAbility: CharArcaneCoreAbility;
  ascensionLevel: number;
  tradition: string;
  path: string;
}

export interface CharCombaty {
  currentHp: number;
  currentSp: number;
  woundCurrent: number[];
}

export interface CharActions {
  actionName: string;
  actionTickCost: number;
}

export interface CharMoney {
  copper: number;
  silverling: number;
  neekon: number;
}

//Basically Sliders von -4 bis 4?
//  Devious 4 3 2 1 <0> 1 2 3 4 Honest
//  Adamant 4 3 2 1 <0> 1 2 3 4 Agreeable
//  Renegade 4 3 2 1 <0> 1 2 3 4 Lawful
//  Egotistic 4 3 2 1 <0> 1 2 3 4 Altruistic
//  Outgoing 4 3 2 1 <0> 1 2 3 4 Reclusive
//  Callous 4 3 2 1 <0> 1 2 3 4 Empathetic
//  Realistic 4 3 2 1 <0> 1 2 3 4 Idealistic
//  Vengeful 4 3 2 1 <0> 1 2 3 4 Forgiving
export interface CharSocialTraits {
  start: string;
  end: string;
  value: number;
}

export interface CharBaseAbilitySkills {
  bskillName: string;
  bskillMod: number; //+x
  bskillDisadvantage: number; // + x Dis
  bskillAdvantage: number; // + x Adv
}

export default class Character implements IEntity {
  id?: number;
  name: string;
  pic: string;
  house: string;
  title: string;
  player: string;
  totalXPSpent: number;
  xpToSpend: number;
  charLevel: number;
  race: string;
  archetype: string;
  origin: CharOrigin;
  background: string;
  education: string;
  appearance: CharAppearance;
  abilityRating: CharAbilityRating;
  arcaneAffinity: CharArcaneAffinity;
  combat: CharCombaty;
  actions: CharActions[];
  money: CharMoney;
  socialTraits: CharSocialTraits[];
  talents: string[];
  flaws: string[];
  baseAbilitySkills: CharBaseAbilitySkills[];
  skills: string[];
  weaponSkills: string[];
  knowledgeSkills: string[];
  spells: string[];
  adeptPowers: string[];
  ascensionPowers: string[];
  items: string[];

  constructor(
    id?: number,
    name?: string,
    pic?: string,
    house?: string,
    title?: string,
    player?: string,
    totalXPSpent?: number,
    xpToSpend?: number,
    charLevel?: number,
    race?: string,
    archetype?: string,
    origin?: CharOrigin,
    background?: string,
    education?: string,
    appearance?: CharAppearance,
    abilityRating?: CharAbilityRating,
    arcaneAffinity?: CharArcaneAffinity,
    combat?: CharCombaty,
    actions?: CharActions[],
    money?: CharMoney,
    socialTraits?: CharSocialTraits[],
    talents?: string[],
    flaws?: string[],
    baseAbilitySkills?: CharBaseAbilitySkills[],
    skills?: string[],
    weaponSkills?: string[],
    knowledgeSkills?: string[],
    spells?: string[],
    adeptPowers?: string[],
    ascensionPowers?: string[],
    items?: string[]
  ) {
    this.id = id;
    this.name = name || "";
    this.pic = pic || "";
    this.house = house || "";
    this.title = title || "";
    this.player = player || "";
    this.totalXPSpent = totalXPSpent || 0;
    this.xpToSpend = xpToSpend || 0;
    this.charLevel = charLevel || 0;
    this.race = race || "";
    this.archetype = archetype || "";
    this.origin = origin || {
      background: "",
      education: "",
      caste: "",
    };
    this.background = background || "";
    this.education = education || "";
    this.appearance = appearance || {
      age: 0,
      height: "",
      weight: "",
      sizeclass: CharSize.medium,
      pic: "",
    };
    this.abilityRating = abilityRating || {
      body: 1, //1-12
      dex: 1, //1-12;
      str: 1, //1-12;
      reac: 1, //1-12;
      will: 1, //1-12;
      log: 1, //1-12;
      char: 1, //1-12;
      int: 1, //1-12;
      luck: 1, //1-10;
      magic: 1, //1-12
      faith: 1, //1-12;
    };
    this.arcaneAffinity = arcaneAffinity || {
      arcaneCoreAbility: CharArcaneCoreAbility.char,
      ascensionLevel: 0,
      tradition: "",
      path: "",
    };
    this.combat = combat || {
      currentHp: 0,
      currentSp: 0,
      woundCurrent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    this.actions = actions || [];
    this.money = money || {
      copper: 0,
      silverling: 0,
      neekon: 0,
    };
    this.socialTraits = socialTraits || [
      {
        start: "Devious",
        end: "Honest",
        value: 0,
      },
      {
        start: "Adamant",
        end: "Agreeable",
        value: 0,
      },
      {
        start: "Renegade",
        end: "Lawful",
        value: 0,
      },
      {
        start: "Egotistic",
        end: "Altruistic",
        value: 0,
      },
      {
        start: "Outgoing",
        end: "Reclusive",
        value: 0,
      },
      {
        start: "Callous",
        end: "Empathetic",
        value: 0,
      },
      {
        start: "Realistic",
        end: "Idealistic",
        value: 0,
      },
      {
        start: "Vengeful",
        end: "Forgiving",
        value: 0,
      },
    ];
    this.talents = talents || [];
    this.flaws = flaws || [];
    this.baseAbilitySkills = baseAbilitySkills || [];
    this.skills = skills || [];
    this.weaponSkills = weaponSkills || [];
    this.knowledgeSkills = knowledgeSkills || [];
    this.spells = spells || [];
    this.adeptPowers = adeptPowers || [];
    this.ascensionPowers = ascensionPowers || [];
    this.items = items || [];
  }

  static makeCsv = (character: Character): any[] => {
    return [character.id, character.name];
  };
}

export function isCharacter(arg: any): arg is Character {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";

  return arg && nameCheck;
}

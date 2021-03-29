import IEntity from "./IEntity";

export default class Race implements IEntity {
  id?: number;
  name: string;
  hp: number;
  abilityModifier: number;
  talents: string[];
  flaws: string[];

  constructor(
    id?: number,
    name?: string,
    hp?: number,
    abilityModifier?: number,
    talents?: string[],
    flaws?: string[]
  ) {
    this.id = id;
    this.name = name || "";
    this.hp = hp || 0;
    this.abilityModifier = abilityModifier || 0;
    this.talents = talents || [];
    this.flaws = flaws || [];
  }
}

export function isRace(arg: any): arg is Race {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const hpCheck = arg.hp !== undefined && typeof arg.hp == "number";
  const abilityModifierCheck =
    arg.abilityModifier !== undefined && typeof arg.abilityModifier == "number";
  const talentsCheck = arg.talents !== undefined && Array.isArray(arg.talents);
  const flawsCheck = arg.flaws !== undefined && Array.isArray(arg.flaws);

  return arg && nameCheck && hpCheck && abilityModifierCheck && talentsCheck && flawsCheck;
}

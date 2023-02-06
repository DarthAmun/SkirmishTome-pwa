import IEntity from "./IEntity";

export enum RaceLimits {
  empty = "-", // -
  magicNull = "> 0", // > 0
  magicFour = "<= 4", // <= 4
}

export default class Race implements IEntity {
  id?: number;
  name: string;
  rarity: number;
  hp: number;
  abilityModifier: string;
  size: string;
  stamina: number;
  talents: string[];
  flaws: string[];
  limit: string;
  sprint: number;
  description: string;

  constructor(
    id?: number,
    name?: string,
    rarity?: number,
    hp?: number,
    abilityModifier?: string,
    size?: string,
    stamina?: number,
    talents?: string[],
    flaws?: string[],
    limit?: string,
    sprint?: number,
    description?: string,
  ) {
    this.id = id;
    this.name = name || "";
    this.rarity = rarity || 0;
    this.hp = hp || 0;
    this.abilityModifier = abilityModifier || "";
    this.size = size || "";
    this.stamina = stamina || 0;
    this.talents = talents || [];
    this.flaws = flaws || [];
    this.limit = limit || RaceLimits.empty;
    this.sprint = sprint || 0;
    this.description = description || "";
  }

  static makeCsv = (race: Race): any[] => {
    return [
      race.id,
      race.name,
      race.rarity,
      race.hp,
      race.abilityModifier,
      race.size,
      race.stamina,
      race.talents,
      race.flaws,
    ];
  };
}

export function isRace(arg: any): arg is Race {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const hpCheck = arg.hp !== undefined && typeof arg.hp == "number";
  const abilityModifierCheck =
    arg.abilityModifier !== undefined && typeof arg.abilityModifier == "number";
  const talentsCheck = arg.talents !== undefined && Array.isArray(arg.talents);
  const flawsCheck = arg.flaws !== undefined && Array.isArray(arg.flaws);

  return (
    arg &&
    nameCheck &&
    hpCheck &&
    abilityModifierCheck &&
    talentsCheck &&
    flawsCheck
  );
}

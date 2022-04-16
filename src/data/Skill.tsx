import IEntity from "./IEntity";

export enum SkillDie {
  dfour = "d4",
  dsix = "d6",
  deight = "d8",
  dten = "d10",
  dtwelve = "d12",
}

export default class Skill implements IEntity {
  id?: number;
  name: string;
  details: string;
  die: string;
  bonus: number; //+1, +2, +3
  mod: string; //+x
  disadvantage: number; // + x Dis
  advantage: number; // + x Adv

  constructor(
    id?: number,
    name?: string,
    details?: string,
    die?: string,
    bonus?: number, //+1, +2, +3
    mod?: string, //+x
    disadvantage?: number, // + x Dis
    advantage?: number // + x Adv
  ) {
    this.id = id;
    this.name = name || "";
    this.details = details || "";
    this.die = die || SkillDie.dfour;
    this.bonus = bonus || 0;
    this.mod = mod || "";
    this.disadvantage = disadvantage || 0;
    this.advantage = advantage || 0;
  }

  static makeCsv = (power: Skill): any[] => {
    return [power.id, power.name];
  };
}

export function isSkill(arg: any): arg is Skill {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const costCheck = arg.cost !== undefined && typeof arg.cost == "number";
  const isFlawCheck =
    arg.isFlaw !== undefined && typeof arg.isFlaw == "boolean";
  const prerequisiteCheck =
    arg.prerequisite !== undefined && typeof arg.prerequisite == "string";
  const effectCheck = arg.effect !== undefined && typeof arg.effect == "string";
  const typeCheck = arg.type !== undefined && typeof arg.type == "boolean";
  const stressCheck = arg.stress !== undefined && typeof arg.stress == "string";
  const triggerCheck =
    arg.trigger !== undefined && typeof arg.trigger == "string";
  const triggerFrequencyCheck =
    arg.triggerFrequency !== undefined &&
    typeof arg.triggerFrequency == "string";
  const ticksCheck = arg.ticks !== undefined && typeof arg.ticks == "number";

  return (
    arg &&
    nameCheck &&
    costCheck &&
    isFlawCheck &&
    prerequisiteCheck &&
    effectCheck &&
    typeCheck &&
    stressCheck &&
    triggerCheck &&
    triggerFrequencyCheck &&
    ticksCheck
  );
}

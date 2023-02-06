import IEntity from "./IEntity";

export enum Kaste {
  Slave = "Slave",
  Outlore = "Outlore",
  Worker = "Worker",
  Scolar = "Scolar",
  Noble = "Noble",
  Knight = "Knight",
  Royal = "Royal",
}

export default class Education implements IEntity {
  id?: number;
  name: string;
  caste: string;
  skills: string[];
  group: string;
  talent: string | undefined;

  constructor(
    id?: number,
    name?: string,
    caste?: string,
    skills?: string[],
    group?: string, // From Skill Group
    talent?: string | undefined,
  ) {
    this.id = id;
    this.name = name || "";
    this.caste = caste || Kaste.Slave;
    this.skills = skills || [];
    this.group = group || "";
    this.talent = talent;
  }

  static makeCsv = (power: Education): any[] => {
    return [power.id];
  };
}

export function isEducation(arg: any): arg is Education {
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

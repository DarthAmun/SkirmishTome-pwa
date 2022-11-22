import IEntity from "./IEntity";

export enum OriginKaste {
  Slave = "Slave",
  Outlore = "Outlore",
  Worker = "Worker",
  Scolar = "Scolar",
  Noble = "Noble",
  Knight = "Knight",
  Royal = "Royal",
}

export default class Origin implements IEntity {
  id?: number;
  name: string;
  casteOne: string;
  casteTwo: string;

  constructor(
    id?: number,
    casteOne?: string,
    casteTwo?: string
  ) {
    this.id = id;
    this.casteOne = casteOne || OriginKaste.Slave;
    this.casteTwo = casteTwo || OriginKaste.Outlore;
    this.name = casteOne + "/" + casteTwo;
  }

  static makeCsv = (power: Origin): any[] => {
    return [power.id];
  };
}

export function isOrigin(arg: any): arg is Origin {
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

import IEntity from "./IEntity";

export default class Power implements IEntity {
  id?: number;
  name: string;
  isAdept: boolean;
  path: string;
  cost: number;
  prerequisite: string;
  effect: string;
  type: boolean;
  stress: string;
  ticks: number;

  constructor(
    id?: number,
    name?: string,
    isAdept?: boolean,
    path?: string,
    cost?: number,
    prerequisite?: string,
    effect?: string,
    type?: boolean,
    stress?: string,
    ticks?: number
  ) {
    this.id = id;
    this.name = name || "";
    this.isAdept = isAdept || false;
    this.path = path || "";
    this.cost = cost || 0;
    this.prerequisite = prerequisite || "";
    this.effect = effect || "";
    this.type = type || false;
    this.stress = stress || "";
    this.ticks = ticks || 0;
  }

  static makeCsv = (power: Power): any[] => {
    return [
      power.id,
      power.name,
      power.ticks,
    ];
  };
}

export function isPower(arg: any): arg is Power {
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

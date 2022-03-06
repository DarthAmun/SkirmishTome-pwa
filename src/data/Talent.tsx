import IEntity from "./IEntity";

export enum TalentCategory {
  physical = "physical",
  mental = "mental",
  social = "social",
  magical = "magical",
}

export default class Talent implements IEntity {
  id?: number;
  name: string;
  category: string;
  isFlaw: boolean;
  cost: number;
  prerequisite: string;
  effect: string;
  type: boolean;
  stress: string;
  trigger: string;
  triggerFrequency: string;
  ticks: number;

  constructor(
    id?: number,
    name?: string,
    category?: string,
    isFlaw?: boolean,
    cost?: number,
    prerequisite?: string,
    effect?: string,
    type?: boolean,
    stress?: string,
    trigger?: string,
    triggerFrequency?: string,
    ticks?: number
  ) {
    this.id = id;
    this.name = name || "";
    this.category = category || TalentCategory.magical;
    this.isFlaw = isFlaw || false;
    this.cost = cost || 0;
    this.prerequisite = prerequisite || "";
    this.effect = effect || "";
    this.type = type || false;
    this.stress = stress || "";
    this.trigger = trigger || "";
    this.triggerFrequency = triggerFrequency || "";
    this.ticks = ticks || 0;
  }
}

export function isTalent(arg: any): arg is Talent {
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

import IEntity from "./IEntity";

export default class Talent implements IEntity {
  id?: number;
  name: string;
  isFlaw: boolean;
  cost: number;
  prerequisite: string;
  effect: string;
  type: boolean;
  stress: string;

  constructor(
    id?: number,
    name?: string,
    isFlaw?: boolean,
    cost?: number,
    prerequisite?: string,
    effect?: string,
    type?: boolean,
    stress?: string
  ) {
    this.id = id;
    this.name = name || "";
    this.isFlaw = isFlaw || false;
    this.cost = cost || 0;
    this.prerequisite = prerequisite || "";
    this.effect = effect || "";
    this.type = type || false;
    this.stress = stress || "";
  }
}

export function isTalent(arg: any): arg is Talent {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const costCheck = arg.cost !== undefined && typeof arg.cost == "number";
  const isFlawCheck = arg.isFlaw !== undefined && typeof arg.isFlaw == "boolean";
  const prerequisiteCheck = arg.prerequisite !== undefined && typeof arg.prerequisite == "string";
  const effectCheck = arg.effect !== undefined && typeof arg.effect == "string";
  const typeCheck = arg.type !== undefined && typeof arg.type == "boolean";
  const stressCheck = arg.stress !== undefined && typeof arg.stress == "string";

  return (
    arg &&
    nameCheck &&
    costCheck &&
    isFlawCheck &&
    prerequisiteCheck &&
    effectCheck &&
    typeCheck &&
    stressCheck
  );
}

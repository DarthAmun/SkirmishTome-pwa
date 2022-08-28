import IEntity from "./IEntity";

export default class Character implements IEntity {
  id?: number;
  name: string;

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name || "";
  }

  static makeCsv = (character: Character): any[] => {
    return [character.id, character.name];
  };
}

export function isCharacter(arg: any): arg is Character {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";

  return arg && nameCheck;
}

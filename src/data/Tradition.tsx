import IEntity from "./IEntity";
import Power from "./Power";

export default class Tradition implements IEntity {
  id?: number;
  name: string;
  isPath: boolean;
  availablleSpellSources: {
    earth: boolean;
    frost: boolean;
    air: boolean;
    fire: boolean;
    arcane: boolean;
    divine: boolean;
    demonic: boolean;
    druidic: boolean;
    psychic: boolean;
  };
  powers: Power[];

  constructor(
    id?: number,
    name?: string,
    isPath?: boolean,
    availablleSpellSources?: {
      earth: boolean;
      frost: boolean;
      air: boolean;
      fire: boolean;
      arcane: boolean;
      divine: boolean;
      demonic: boolean;
      druidic: boolean;
      psychic: boolean;
    },
    powers?: Power[]
  ) {
    this.id = id;
    this.name = name || "";
    this.isPath = isPath || false;
    this.availablleSpellSources = availablleSpellSources || {
      earth: false,
      frost: false,
      air: false,
      fire: false,
      arcane: false,
      divine: false,
      demonic: false,
      druidic: false,
      psychic: false,
    };
    this.powers = powers || [];
  }

  static makeCsv = (tradition: Tradition): any[] => {
    return [
      tradition.id,
      tradition.name,
      tradition.isPath,
      tradition.availablleSpellSources,
      tradition.powers,
    ];
  };
}

export function isTradition(arg: any): arg is Tradition {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const qualityCheck =
    arg.quality !== undefined && typeof arg.quality == "string";
  const descriptionCheck =
    arg.description !== undefined && typeof arg.description == "string";

  return arg && nameCheck && qualityCheck && descriptionCheck;
}

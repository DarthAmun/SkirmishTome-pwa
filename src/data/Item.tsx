import IEntity from "./IEntity";

export default class Item implements IEntity {
  id?: number;
  name: string;
  quality: string;
  description: string;

  constructor(
    id?: number,
    name?: string,
    quality?: string,
    description?: string

  ) {
    this.id = id;
    this.name = name || "";
    this.quality = quality || "";
    this.description = description || "";
  }

  static makeCsv = (item: Item): any[] => {
    return [
      item.id,
      item.name,
      item.quality,
      item.description,
    ];
  };
}

export function isItem(arg: any): arg is Item {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const qualityCheck = arg.quality !== undefined && typeof arg.quality == "string";
  const descriptionCheck = arg.description !== undefined && typeof arg.description == "string";

  return (
    arg &&
    nameCheck &&
    qualityCheck &&
    descriptionCheck
  );
}

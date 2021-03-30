import IEntity from "./IEntity";

//["earth", "frost", "air", "fire", "arcane", "divine", "demonic", "druidic", "psychic"],
export enum SpellSource {
  earth = "earth",
  frost = "frost",
  air = "air",
  fire = "fire",
  arcane = "arcane",
  divine = "divine",
  demonic = "demonic",
  druidic = "druidic",
  psychic = "psychic",
}

//["5 + 3 ticks", "7 + 3 ticks", "9 + 3 ticks", "5 ticks", "drain + 3 ticks"],
// export enum SpellCastTime {
//   earth = "earth",
// }

//["verbal", "somatic", "mental", "ritual"],
export enum SpellRite {
  verbal = "verbal",
  somatic = "somatic",
  mental = "mental",
  ritual = "ritual",
}

//["concentration", "instantaneous", "permanent", "fixed duration"],
export enum SpellDuration {
  concentration = "concentration",
  instantaneous = "instantaneous",
  permanent = "permanent",
  fixed = "fixed",
}

//["Transmutation", "Evocation", "Fortification", "Hex", "Illusion", "Conjuration", "Necromancy"],
export enum SpellSchool {
  transmutation = "Transmutation",
  evocation = "Evocation",
  fortification = "Fortification",
  hex = "Hex",
  illusion = "Illusion",
  conjuration = "Conjuration",
  necromancy = "Necromancy",
}

export default class Spell implements IEntity {
  id?: number;
  name: string;
  source: string;
  castTime: string;
  rite: string;
  duration: string;
  durationText: string;
  range: number;
  school: string;
  effect: string;
  damage: string;
  mastery: string;
  resist: string;
  drain: number;

  constructor(
    id?: number,
    name?: string,
    source?: string,
    castTime?: string,
    rite?: string,
    duration?: string,
    durationText?: string,
    range?: number,
    school?: string,
    effect?: string,
    damage?: string,
    mastery?: string,
    resist?: string,
    drain?: number
  ) {
    this.id = id;
    this.name = name || "";
    this.source = source || SpellSource.air;
    this.castTime = castTime || "";
    this.rite = rite || SpellRite.mental;
    this.duration = duration || SpellDuration.instantaneous;
    this.durationText = durationText || "";
    this.range = range || 0;
    this.school = school || SpellSchool.conjuration;
    this.effect = effect || "";
    this.damage = damage || "";
    this.mastery = mastery || "";
    this.resist = resist || "";
    this.drain = drain || 0;
  }
}

export function isSpell(arg: any): arg is Spell {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const sourceCheck = arg.source !== undefined && typeof arg.source == "string";
  const castTimeCheck = arg.castTime !== undefined && typeof arg.castTime == "string";
  const riteCheck = arg.rite !== undefined && typeof arg.rite == "string";
  const durationCheck = arg.duration !== undefined && typeof arg.duration == "string";
  const rangeCheck = arg.range !== undefined && typeof arg.range == "number";
  const schoolCheck = arg.school !== undefined && typeof arg.school == "string";
  const effectCheck = arg.effect !== undefined && typeof arg.effect == "string";
  const damageCheck = arg.damage !== undefined && typeof arg.damage == "string";
  const masteryCheck = arg.mastery !== undefined && typeof arg.mastery == "string";
  const resistCheck = arg.resist !== undefined && typeof arg.resist == "string";
  const drainCheck = arg.drain !== undefined && typeof arg.drain == "number";

  return (
    arg &&
    nameCheck &&
    sourceCheck &&
    castTimeCheck &&
    riteCheck &&
    durationCheck &&
    rangeCheck &&
    schoolCheck &&
    effectCheck &&
    damageCheck &&
    masteryCheck &&
    resistCheck &&
    drainCheck
  );
}

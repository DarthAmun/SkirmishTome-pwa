import IEntity from "./IEntity";

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

export enum SpellRange {
  touch = "touch",
  sonic = "sonic",
  radius = "Radius 90° around Caster",
  radiusPlus = "Radius 90°+ around Caster",
  losAura = "Line of Sight Aura or Projectile",
  losManipulate = "Line of Sight Manipulate",
  losPoint = "Line of Sight Spawn At Point",
}

export enum SpellRite {
  verbal = "verbal",
  somatic = "somatic",
  mental = "mental",
  ritual = "ritual",
}

export enum SpellTarget {
  single = "Single Target",
  daoe = "Diminishing Area Of Effect ",
  multi = "Multiple Targets",
  aoe = "Area Of Effect",
  caster = "Caster",
  target = "Caster Or Target",
  line = "Straight Line",
}

export enum SpellDuration {
  concentration = "concentration",
  instantaneous = "instantaneous",
  permanent = "permanent",
  fixedTicks = "fixed # of ticks",
  fixedRounds = "fixed # of rounds",
  fixedHours = "fixed # of hours",
  channel = "channel",
}

export enum SpellSchool {
  transmutation = "Transmutation",
  evocation = "Evocation",
  fortification = "Fortification",
  hex = "Hex",
  illusion = "Illusion",
  conjuration = "Conjuration",
  necromancy = "Necromancy",
  enchantment = "Enchantment",
}

export default class Spell implements IEntity {
  id?: number;
  name: string;
  source: string;
  castTime: string;
  rite: string;
  duration: string;
  durationText: string;
  range: string;
  school: string;
  effect: string;
  damageText: string;
  mastery: string;
  resist: string;
  drain: number;
  drainParts: number[];

  scalingEffect: string;
  spellTarget: string;
  aoeRadius: string;
  damage: string[];
  directEffects: string;
  level: number;
  projectileType: string;
  projectileNumber: string;
  damageType: string;
  targetingType: string;
  losRange: string;
  drainType: string;
  pureDamage: string;
  size: string;
  hp: string;
  chargeable: boolean;
  needsMaterial: boolean;

  constructor(
    id?: number,
    name?: string,
    source?: string,
    castTime?: string,
    rite?: string,
    duration?: string,
    durationText?: string,
    range?: string,
    school?: string,
    effect?: string,
    damageText?: string,
    mastery?: string,
    resist?: string,
    drain?: number,
    drainParts?: number[],

    scalingEffect?: string,
    spellTarget?: string,
    aoeRadius?: string,
    damage?: string[],
    directEffects?: string,
    level?: number,
    projectileType?: string,
    projectileNumber?: string,
    damageType?: string,
    targetingType?: string,
    losRange?: string,
    drainType?: string,
    pureDamage?: string,
    size?: string,
    hp?: string,
    chargeable?: boolean,
    needsMaterial?: boolean
  ) {
    this.id = id;
    this.name = name || "";
    this.source = source || SpellSource.air;
    this.castTime = castTime || "4 - Mystb Rounds";
    this.rite = rite || SpellRite.mental;
    this.duration = duration || SpellDuration.instantaneous;
    this.durationText = durationText || "";
    this.range = range || SpellRange.touch;
    this.school = school || SpellSchool.conjuration;
    this.effect = effect || "";
    this.damageText = damageText || "";
    this.mastery = mastery || "";
    this.resist = resist || "";
    this.drain = drain || 0;
    //Source, Rite, Casting Time, Duration, Range, School, Scaling Effect, Single Target, aoeRadius, damage, damage, damage, direct Effects, level, projectile type, projectile number, damage type, targeting type, los Range, drain type, Pure Spell Damage, size, hp, chargeable, needs material
    this.drainParts = drainParts || [
      0, 3, 2, 1, 1, 1, 0, 1, 0, 0, 0, 0, -4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    this.scalingEffect = scalingEffect || "";
    this.spellTarget = spellTarget || "";
    this.aoeRadius = aoeRadius || "";
    this.damage = damage || [];
    this.directEffects = directEffects || "";
    this.level = level || 0;
    this.projectileType = projectileType || "";
    this.projectileNumber = projectileNumber || "";
    this.damageType = damageType || "";
    this.targetingType = targetingType || "";
    this.losRange = losRange || "";
    this.drainType = drainType || "";
    this.pureDamage = pureDamage || "";
    this.size = size || "";
    this.hp = hp || "";
    this.chargeable = chargeable || false;
    this.needsMaterial = needsMaterial || false;
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

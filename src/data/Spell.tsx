import IEntity from "./IEntity";
import {
  StringPair,
  NumberPair,
  SpellSource,
  SpellRite,
  SpellDuration,
  SpellRange,
  SpellSchool,
  SpellTarget,
  SpellDrainType,
  SpellLevel,
  SpellCastTime,
  SpellScalingEffect,
  SpellAoeRadius,
  SpellDirectEffects,
  SpellProjectileType,
  SpellProjectileNumber,
  SpellDamageType,
  SpellTargetingType,
  SpellLosRange,
  SpellSize,
  SpellPureDamage,
  SpellHp,
} from "./SpellValues";

export default class Spell implements IEntity {
  id?: number;
  name: string;
  source: StringPair;
  castTime: StringPair;
  rite: StringPair;
  duration: StringPair;
  durationText: string;
  range: StringPair;
  school: StringPair;
  effect: string;
  mastery: string;
  resist: string;
  drain: number;
  masteryDrain: number;

  drainType: StringPair;
  scalingEffect: StringPair;
  spellTarget: StringPair;
  aoeRadius: StringPair;
  damage: StringPair[];
  directEffects: StringPair;
  level: NumberPair;
  projectileType: StringPair;
  projectileNumber: StringPair;
  damageType: StringPair;
  targetingType: StringPair;
  losRange: StringPair;
  pureDamage: StringPair;
  size: StringPair;
  hp: StringPair;
  chargeable: boolean;
  needsMaterial: boolean;
  glyph: boolean;

  constructor(
    id?: number,
    name?: string,
    source?: StringPair,
    castTime?: StringPair,
    rite?: StringPair,
    duration?: StringPair,
    durationText?: string,
    range?: StringPair,
    school?: StringPair,
    effect?: string,
    mastery?: string,
    resist?: string,
    drain?: number,
    masteryDrain?: number,

    scalingEffect?: StringPair,
    spellTarget?: StringPair,
    aoeRadius?: StringPair,
    damage?: StringPair[],
    directEffects?: StringPair,
    level?: NumberPair,
    projectileType?: StringPair,
    projectileNumber?: StringPair,
    damageType?: StringPair,
    targetingType?: StringPair,
    losRange?: StringPair,
    drainType?: StringPair,
    pureDamage?: StringPair,
    size?: StringPair,
    hp?: StringPair,
    chargeable?: boolean,
    needsMaterial?: boolean,
    glyph?: boolean
  ) {
    this.id = id;
    this.name = name || "";
    this.source = source || SpellSource.NONE;
    this.castTime = castTime || SpellCastTime.NONE;
    this.rite = rite || SpellRite.NONE;
    this.duration = duration || SpellDuration.NONE;
    this.durationText = durationText || "";
    this.range = range || SpellRange.NONE;
    this.school = school || SpellSchool.NONE;
    this.effect = effect || "";
    this.mastery = mastery || "";
    this.resist = resist || "";
    this.drain = drain || 0;
    this.masteryDrain = masteryDrain || 0;

    this.scalingEffect = scalingEffect || SpellScalingEffect.NONE;
    this.spellTarget = spellTarget || SpellTarget.NONE;
    this.aoeRadius = aoeRadius || SpellAoeRadius.NONE;
    this.damage = damage || [];
    this.directEffects = directEffects || SpellDirectEffects.NONE;
    this.level = level || SpellLevel.NONE;
    this.projectileType = projectileType || SpellProjectileType.NONE;
    this.projectileNumber = projectileNumber || SpellProjectileNumber.NONE;
    this.damageType = damageType || SpellDamageType.NONE;
    this.targetingType = targetingType || SpellTargetingType.NONE;
    this.losRange = losRange || SpellLosRange.NONE;
    this.drainType = drainType || SpellDrainType.NONE;
    this.pureDamage = pureDamage || SpellPureDamage.NONE;
    this.size = size || SpellSize.NONE;
    this.hp = hp || SpellHp.NONE;
    this.chargeable = chargeable || false;
    this.needsMaterial = needsMaterial || false;
    this.glyph = glyph || false;
  }

  static calcDrain = (spell: Spell): Spell => {
    let drain = 0;
    drain += spell.castTime ? spell.castTime.drain : 0;
    drain += spell.drainType ? spell.drainType.drain : 0;
    drain += spell.school ? spell.school.drain : 0;
    drain += spell.duration ? spell.duration.drain : 0;
    drain += spell.spellTarget ? spell.spellTarget.drain : 0;
    drain += spell.rite ? spell.rite.drain : 0;
    drain += spell.range ? spell.range.drain : 0;
    drain += spell.source ? spell.source.drain : 0;
    drain += spell.level ? spell.level.drain : 0;
    drain += spell.chargeable ? -1 : 0;
    drain += spell.needsMaterial ? -1 : 0;
    drain += spell.targetingType ? spell.targetingType.drain : 0;
    drain += spell.projectileType ? spell.projectileType.drain : 0;
    drain += spell.projectileNumber ? spell.projectileNumber.drain : 0;
    drain += spell.losRange ? spell.losRange.drain : 0;
    drain += spell.aoeRadius ? spell.aoeRadius.drain : 0;
    drain += spell.damage[0] ? spell.damage[0].drain : 0;
    drain += spell.damage[1] ? spell.damage[1].drain : 0;
    drain += spell.damage[2] ? spell.damage[2].drain : 0;
    drain += spell.damageType ? spell.damageType.drain : 0;
    drain += spell.scalingEffect ? spell.scalingEffect.drain : 0;
    drain += spell.directEffects ? spell.directEffects.drain : 0;
    drain += spell.size ? spell.size.drain : 0;
    drain += spell.hp ? spell.hp.drain : 0;
    drain += spell.pureDamage ? spell.pureDamage.drain : 0;
    return { ...spell, drain: drain };
  };

  static makeCsv = (spell: Spell): any[] => {
    return [
      spell.id,
      spell.name,
      spell.source.label,
      spell.castTime.label,
      spell.rite.label,
      spell.duration.label,
      spell.durationText,
      spell.range.label,
      spell.school.label,
      spell.effect,
      spell.mastery,
      spell.resist,
      spell.drain,
      spell.masteryDrain,
      spell.scalingEffect.label,
      spell.spellTarget.label,
      spell.aoeRadius.label,
      spell.damage[0].label +
        ", " +
        spell.damage[1].label +
        ", " +
        spell.damage[2].label,
      spell.directEffects.label,
      spell.level.label,
      spell.projectileType.label,
      spell.projectileNumber.label,
      spell.damageType.label,
      spell.targetingType.label,
      spell.losRange.label,
      spell.drainType.label,
      spell.pureDamage.label,
      spell.size.label,
      spell.hp.label,
      spell.chargeable,
      spell.needsMaterial,
      spell.glyph,
    ];
  };
}

export function isSpell(arg: any): arg is Spell {
  const nameCheck = arg.name !== undefined && typeof arg.name == "string";
  const sourceCheck = arg.source !== undefined && typeof arg.source == "string";
  const castTimeCheck =
    arg.castTime !== undefined && typeof arg.castTime == "string";
  const riteCheck = arg.rite !== undefined && typeof arg.rite == "string";
  const durationCheck =
    arg.duration !== undefined && typeof arg.duration == "string";
  const rangeCheck = arg.range !== undefined && typeof arg.range == "number";
  const schoolCheck = arg.school !== undefined && typeof arg.school == "string";
  const effectCheck = arg.effect !== undefined && typeof arg.effect == "string";
  const damageCheck = arg.damage !== undefined && typeof arg.damage == "string";
  const masteryCheck =
    arg.mastery !== undefined && typeof arg.mastery == "string";
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

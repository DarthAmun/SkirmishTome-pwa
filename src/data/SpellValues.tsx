export interface StringPair {
  label: string;
  drain: number;
}
export interface NumberPair {
  label: number;
  drain: number;
}

// export class Dummy {
//   static readonly NONE: StringPair = { label: "", drain: 0,};
//   static readonly DUMMY: StringPair = { label: , drain: 0 };

//   private constructor(
//     private readonly label: string,
//     public readonly drain: number
//   ) {}

//   static find = (label: string): StringPair => {
//     switch (label?.toLowerCase().trim()) {
//       case Dummy.DUMMY.label.toLowerCase():
//         return Dummy.DUMMY;
//       default:
//         return Dummy.NONE;
//     }
//   };
//   static getAll = (): string[] => {
//     return [Dummy.DUMMY.label];
//   };
// }

export class SpellPureDamage {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly ACID: StringPair = { label: "Acid", drain: 0 };
  static readonly NECROTIC: StringPair = { label: "Necrotic", drain: 0 };
  static readonly FROST: StringPair = { label: "Frost", drain: 0 };
  static readonly FIRE: StringPair = { label: "Fire", drain: 0 };
  static readonly LIGHTNING: StringPair = { label: "Lightning", drain: 0 };
  static readonly RADIANT: StringPair = { label: "Radiant", drain: 0 };
  static readonly ARCANE: StringPair = { label: "Arcane", drain: 1 };
  static readonly POISON: StringPair = { label: "Poison", drain: 0 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellPureDamage.ACID.label.toLowerCase():
        return SpellPureDamage.ACID;
      case SpellPureDamage.NECROTIC.label.toLowerCase():
        return SpellPureDamage.NECROTIC;
      case SpellPureDamage.FROST.label.toLowerCase():
        return SpellPureDamage.FROST;
      case SpellPureDamage.FIRE.label.toLowerCase():
        return SpellPureDamage.FIRE;
      case SpellPureDamage.LIGHTNING.label.toLowerCase():
        return SpellPureDamage.LIGHTNING;
      case SpellPureDamage.RADIANT.label.toLowerCase():
        return SpellPureDamage.RADIANT;
      case SpellPureDamage.ARCANE.label.toLowerCase():
        return SpellPureDamage.ARCANE;
      case SpellPureDamage.POISON.label.toLowerCase():
        return SpellPureDamage.POISON;
      default:
        return SpellPureDamage.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellPureDamage.NONE.label,
      SpellPureDamage.ACID.label,
      SpellPureDamage.NECROTIC.label,
      SpellPureDamage.FROST.label,
      SpellPureDamage.FIRE.label,
      SpellPureDamage.LIGHTNING.label,
      SpellPureDamage.RADIANT.label,
      SpellPureDamage.ARCANE.label,
      SpellPureDamage.POISON.label,
    ];
  };
}

export class SpellHp {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly HALFMAGICSTRUCTUREHP: StringPair = {
    label: "1/2 Magic/Faith armor/structure rating and Magic/Faith *1 hit points",
    drain: 0,
  };
  static readonly HALFMAGICSTRUCTUREDOUBLEHP: StringPair = {
    label: "1/2 Magic/Faith armor/structure rating and Magic/Faith *2 hit points",
    drain: 1,
  };
  static readonly HALFMAGICSTRUCTURETRIPPLEHP: StringPair = {
    label: "1/2 Magic/Faith armor/structure rating and Magic/Faith *3 hit points",
    drain: 2,
  };
  static readonly MAGICSTRUCTUREHP: StringPair = {
    label: "Magic/Faith *1 armor/structure rating and Magic/Faith *1 hit points",
    drain: 1,
  };
  static readonly MAGICSTRUCTUREDOUBLEHP: StringPair = {
    label: "Magic/Faith *1 armor/structure rating and Magic/Faith *2 hit points",
    drain: 3,
  };
  static readonly DOUBLEMAGICESTRUCTUREHP: StringPair = {
    label: "Magic/Faith *2 armor/structure rating and Magic/Faith hit points",
    drain: 4,
  };
  static readonly MAGICHP: StringPair = {
    label: "Magic/Faith *1 hit points",
    drain: 1,
  };
  static readonly MAGICDOUBLEHP: StringPair = {
    label: "Magic/Faith *2 hit points",
    drain: 2,
  };
  static readonly MAGICTRIPPLEHP: StringPair = {
    label: "Magic/Faith *3 hit points",
    drain: 3,
  };
  static readonly MAGICQUADRUPLEHP: StringPair = {
    label: "Magic/Faith *4 hit points",
    drain: 4,
  };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellHp.HALFMAGICSTRUCTUREHP.label.toLowerCase():
        return SpellHp.HALFMAGICSTRUCTUREHP;
      case SpellHp.HALFMAGICSTRUCTUREDOUBLEHP.label.toLowerCase():
        return SpellHp.HALFMAGICSTRUCTUREDOUBLEHP;
      case SpellHp.HALFMAGICSTRUCTURETRIPPLEHP.label.toLowerCase():
        return SpellHp.HALFMAGICSTRUCTURETRIPPLEHP;
      case SpellHp.MAGICSTRUCTUREHP.label.toLowerCase():
        return SpellHp.MAGICSTRUCTUREHP;
      case SpellHp.MAGICSTRUCTUREDOUBLEHP.label.toLowerCase():
        return SpellHp.MAGICSTRUCTUREDOUBLEHP;
      case SpellHp.DOUBLEMAGICESTRUCTUREHP.label.toLowerCase():
        return SpellHp.DOUBLEMAGICESTRUCTUREHP;
      case SpellHp.MAGICHP.label.toLowerCase():
        return SpellHp.MAGICHP;
      case SpellHp.MAGICDOUBLEHP.label.toLowerCase():
        return SpellHp.MAGICDOUBLEHP;
      case SpellHp.MAGICTRIPPLEHP.label.toLowerCase():
        return SpellHp.MAGICTRIPPLEHP;
      case SpellHp.MAGICQUADRUPLEHP.label.toLowerCase():
        return SpellHp.MAGICQUADRUPLEHP;
      default:
        return SpellHp.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellHp.NONE.label,
      SpellHp.HALFMAGICSTRUCTUREHP.label,
      SpellHp.HALFMAGICSTRUCTUREDOUBLEHP.label,
      SpellHp.HALFMAGICSTRUCTURETRIPPLEHP.label,
      SpellHp.MAGICSTRUCTUREHP.label,
      SpellHp.MAGICSTRUCTUREDOUBLEHP.label,
      SpellHp.DOUBLEMAGICESTRUCTUREHP.label,
      SpellHp.MAGICHP.label,
      SpellHp.MAGICDOUBLEHP.label,
      SpellHp.MAGICTRIPPLEHP.label,
      SpellHp.MAGICQUADRUPLEHP.label,
    ];
  };
}

export class SpellSize {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly HALFMAGICSQUARED: StringPair = {
    label: "1/2 Magic/Faith M²",
    drain: 0,
  };
  static readonly MAGICSQUARED: StringPair = {
    label: "Magic/Faith M²",
    drain: 1,
  };
  static readonly DOUBLEMAGICSQUARED: StringPair = {
    label: "Magic/Faith *2 M²",
    drain: 2,
  };
  static readonly TRIPPLEMAGICSQUARED: StringPair = {
    label: "Magic/Faith *3 M²",
    drain: 4,
  };
  static readonly HALFMAGICQUBED: StringPair = {
    label: "1/2 Magic/Faith M³",
    drain: 0,
  };
  static readonly MAGICQUBED: StringPair = {
    label: "Magic/Faith M³",
    drain: 1,
  };
  static readonly DOUBLEMAGICQUBED: StringPair = {
    label: "Magic/Faith *2 M³",
    drain: 2,
  };
  static readonly TRIPPLEMAGICQUBED: StringPair = {
    label: "Magic/Faith *3 M³",
    drain: 4,
  };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellSize.HALFMAGICSQUARED.label.toLowerCase():
        return SpellSize.HALFMAGICSQUARED;
      case SpellSize.MAGICSQUARED.label.toLowerCase():
        return SpellSize.MAGICSQUARED;
      case SpellSize.DOUBLEMAGICSQUARED.label.toLowerCase():
        return SpellSize.DOUBLEMAGICSQUARED;
      case SpellSize.TRIPPLEMAGICSQUARED.label.toLowerCase():
        return SpellSize.TRIPPLEMAGICSQUARED;
      case SpellSize.HALFMAGICQUBED.label.toLowerCase():
        return SpellSize.HALFMAGICQUBED;
      case SpellSize.MAGICQUBED.label.toLowerCase():
        return SpellSize.MAGICQUBED;
      case SpellSize.DOUBLEMAGICQUBED.label.toLowerCase():
        return SpellSize.DOUBLEMAGICQUBED;
      case SpellSize.TRIPPLEMAGICQUBED.label.toLowerCase():
        return SpellSize.TRIPPLEMAGICQUBED;
      default:
        return SpellSize.HALFMAGICSQUARED;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellSize.NONE.label,
      SpellSize.HALFMAGICSQUARED.label,
      SpellSize.MAGICSQUARED.label,
      SpellSize.DOUBLEMAGICSQUARED.label,
      SpellSize.TRIPPLEMAGICSQUARED.label,
      SpellSize.HALFMAGICQUBED.label,
      SpellSize.MAGICQUBED.label,
      SpellSize.DOUBLEMAGICQUBED.label,
      SpellSize.TRIPPLEMAGICQUBED.label,
    ];
  };
}

export class SpellDirectEffects {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly DIFFICULTTERRAIN: StringPair = {
    label: "Difficult Terrain",
    drain: 1,
  };
  static readonly LIFELEECH: StringPair = { label: "Life Leech", drain: 2 };
  static readonly COMMUNICATE: StringPair = { label: "Communicate", drain: 2 };
  static readonly CONFUSIONSTUNBLIND: StringPair = {
    label: "Confusion / Stun / Blind",
    drain: 3,
  };
  static readonly HEX: StringPair = { label: "Hex", drain: 4 };
  static readonly IMPAIRMOVEMENTVISION: StringPair = {
    label: "Impair Movement / Vision",
    drain: 4,
  };
  static readonly MOVEFEARROOT: StringPair = {
    label: "Move / Fear / Root",
    drain: 4,
  };
  static readonly DOT: StringPair = { label: "Damage Over Time", drain: 3 };
  static readonly INCAPACITATE: StringPair = {
    label: "Incapacitate",
    drain: 5,
  };
  static readonly SPHERE: StringPair = { label: "Shield", drain: 5 };
  static readonly KNOCKDOWN: StringPair = { label: "Knockdown", drain: 2 };
  static readonly WALLBARRIERCONSTRUCTSUMMON: StringPair = {
    label: "Wall / Barrier / Sphere / Construct",
    drain: 5,
  };
  static readonly TELEPORT: StringPair = { label: "Teleport", drain: 6 };
  static readonly HEAL: StringPair = { label: "Heal", drain: 5 };
  static readonly BUFFILLUSIONSHIELD: StringPair = {
    label: "Buff / Illusion",
    drain: 5,
  };
  static readonly CHARMCONTROLINFLUENCE: StringPair = {
    label: "Charm / Control / Influence",
    drain: 5,
  };
  static readonly TRANSFORM: StringPair = { label: "Transform", drain: 4 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellDirectEffects.DIFFICULTTERRAIN.label.toLowerCase():
        return SpellDirectEffects.DIFFICULTTERRAIN;
      case SpellDirectEffects.LIFELEECH.label.toLowerCase():
        return SpellDirectEffects.LIFELEECH;
      case SpellDirectEffects.COMMUNICATE.label.toLowerCase():
        return SpellDirectEffects.COMMUNICATE;
      case SpellDirectEffects.CONFUSIONSTUNBLIND.label.toLowerCase():
        return SpellDirectEffects.CONFUSIONSTUNBLIND;
      case SpellDirectEffects.HEX.label.toLowerCase():
        return SpellDirectEffects.HEX;
      case SpellDirectEffects.IMPAIRMOVEMENTVISION.label.toLowerCase():
        return SpellDirectEffects.IMPAIRMOVEMENTVISION;
      case SpellDirectEffects.MOVEFEARROOT.label.toLowerCase():
        return SpellDirectEffects.MOVEFEARROOT;
      case SpellDirectEffects.DOT.label.toLowerCase():
        return SpellDirectEffects.DOT;
      case SpellDirectEffects.INCAPACITATE.label.toLowerCase():
        return SpellDirectEffects.INCAPACITATE;
      case SpellDirectEffects.SPHERE.label.toLowerCase():
        return SpellDirectEffects.SPHERE;
      case SpellDirectEffects.KNOCKDOWN.label.toLowerCase():
        return SpellDirectEffects.KNOCKDOWN;
      case SpellDirectEffects.WALLBARRIERCONSTRUCTSUMMON.label.toLowerCase():
        return SpellDirectEffects.WALLBARRIERCONSTRUCTSUMMON;
      case SpellDirectEffects.TELEPORT.label.toLowerCase():
        return SpellDirectEffects.TELEPORT;
      case SpellDirectEffects.HEAL.label.toLowerCase():
        return SpellDirectEffects.HEAL;
      case SpellDirectEffects.BUFFILLUSIONSHIELD.label.toLowerCase():
        return SpellDirectEffects.BUFFILLUSIONSHIELD;
      case SpellDirectEffects.CHARMCONTROLINFLUENCE.label.toLowerCase():
        return SpellDirectEffects.CHARMCONTROLINFLUENCE;
      case SpellDirectEffects.TRANSFORM.label.toLowerCase():
        return SpellDirectEffects.TRANSFORM;
      default:
        return SpellDirectEffects.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellDirectEffects.NONE.label,
      SpellDirectEffects.DIFFICULTTERRAIN.label,
      SpellDirectEffects.LIFELEECH.label,
      SpellDirectEffects.COMMUNICATE.label,
      SpellDirectEffects.CONFUSIONSTUNBLIND.label,
      SpellDirectEffects.HEX.label,
      SpellDirectEffects.IMPAIRMOVEMENTVISION.label,
      SpellDirectEffects.MOVEFEARROOT.label,
      SpellDirectEffects.DOT.label,
      SpellDirectEffects.INCAPACITATE.label,
      SpellDirectEffects.SPHERE.label,
      SpellDirectEffects.KNOCKDOWN.label,
      SpellDirectEffects.WALLBARRIERCONSTRUCTSUMMON.label,
      SpellDirectEffects.TELEPORT.label,
      SpellDirectEffects.HEAL.label,
      SpellDirectEffects.BUFFILLUSIONSHIELD.label,
      SpellDirectEffects.CHARMCONTROLINFLUENCE.label,
      SpellDirectEffects.TRANSFORM.label,
    ];
  };
}

export class SpellScalingEffect {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly MYSTBRADIUS: StringPair = {
    label: "MystB Meters Radius",
    drain: 3,
  };
  static readonly MYSTBPROJECTILES: StringPair = {
    label: "MystB Projectiles / Effects",
    drain: 4,
  };
  static readonly PROJECTILERADIUSPERVARIABLE: StringPair = {
    label: "1 Projectile/Effect and 1 Meter Radius per Variable Factor",
    drain: 4,
  };
  static readonly PROJECTILEPERVARIABLE: StringPair = {
    label: "1 Projectile/Effect per Variable Factor",
    drain: 3,
  };
  static readonly PROJECTILEPERTHREEMAGIC: StringPair = {
    label: "1 Projectile/Effect per 3 Magic/Faith Rating",
    drain: 2,
  };
  static readonly PROJECTILEPERTWOMAGIC: StringPair = {
    label: "1 Projectile/Effect per 2 Magic/Faith Rating",
    drain: 4,
  };
  static readonly PROJECTILERADIUSPERTWOMAGIC: StringPair = {
    label: "1 Projectile/Effect and 1 Meter Radius per 2 Magic/Faith Rating",
    drain: 5,
  };
  static readonly PROJECTILERADIUSPERTHREEMAGIC: StringPair = {
    label: "1 Projectile/Effect and 1 Meter Radius per 3 Magic/Faith Rating",
    drain: 4,
  };
  static readonly PLUSPROJECTILEPERTWOMAGIC: StringPair = {
    label: "plus 1 Projectile/Effect per 2 Magic/Faith Rating",
    drain: 4,
  };
  static readonly PLUSPROJECTILEPERFOURMAGIC: StringPair = {
    label: "plus 1 Projectile/Effect per 4 Magic/Faith Rating",
    drain: 2,
  };
  static readonly PLUSPROJECTILEPERTHREEMAGIC: StringPair = {
    label: "plus 1 Projectile/Effect per 3 Magic/Faith Rating",
    drain: 3,
  };
  static readonly MYSTBRADIUSEFFECT: StringPair = {
    label: "MystB Meters Radius & Effect",
    drain: 5,
  };
  static readonly PLUSHALFMYSTBRADIUSEFFECT: StringPair = {
    label: "plus 1/2 MystB Meters Radius & Effect",
    drain: 4,
  };
  static readonly PLUSHALFMYSTBRADIUS: StringPair = {
    label: "plus 1/2 MystB Meters Radius",
    drain: 2,
  };
  static readonly PLUSMYSTBRADIUS: StringPair = {
    label: "plus MystB Meters Radius",
    drain: 3,
  };
  static readonly PLUSMYSTBRADIUSEFFECT: StringPair = {
    label: "plus MystB Meters Radius & Effect",
    drain: 6,
  };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellScalingEffect.MYSTBRADIUS.label.toLowerCase():
        return SpellScalingEffect.MYSTBRADIUS;
      case SpellScalingEffect.MYSTBPROJECTILES.label.toLowerCase():
        return SpellScalingEffect.MYSTBPROJECTILES;
      case SpellScalingEffect.PROJECTILERADIUSPERVARIABLE.label.toLowerCase():
        return SpellScalingEffect.PROJECTILERADIUSPERVARIABLE;
      case SpellScalingEffect.PROJECTILEPERVARIABLE.label.toLowerCase():
        return SpellScalingEffect.PROJECTILEPERVARIABLE;
      case SpellScalingEffect.PROJECTILEPERTHREEMAGIC.label.toLowerCase():
        return SpellScalingEffect.PROJECTILEPERTHREEMAGIC;
      case SpellScalingEffect.PROJECTILEPERTWOMAGIC.label.toLowerCase():
        return SpellScalingEffect.PROJECTILEPERTWOMAGIC;
      case SpellScalingEffect.PROJECTILERADIUSPERTWOMAGIC.label.toLowerCase():
        return SpellScalingEffect.PROJECTILERADIUSPERTWOMAGIC;
      case SpellScalingEffect.PROJECTILERADIUSPERTHREEMAGIC.label.toLowerCase():
        return SpellScalingEffect.PROJECTILERADIUSPERTHREEMAGIC;
      case SpellScalingEffect.PLUSPROJECTILEPERTWOMAGIC.label.toLowerCase():
        return SpellScalingEffect.PLUSPROJECTILEPERTWOMAGIC;
      case SpellScalingEffect.PLUSPROJECTILEPERFOURMAGIC.label.toLowerCase():
        return SpellScalingEffect.PLUSPROJECTILEPERFOURMAGIC;
      case SpellScalingEffect.PLUSPROJECTILEPERTHREEMAGIC.label.toLowerCase():
        return SpellScalingEffect.PLUSPROJECTILEPERTHREEMAGIC;
      case SpellScalingEffect.MYSTBRADIUSEFFECT.label.toLowerCase():
        return SpellScalingEffect.MYSTBRADIUSEFFECT;
      case SpellScalingEffect.PLUSHALFMYSTBRADIUSEFFECT.label.toLowerCase():
        return SpellScalingEffect.PLUSHALFMYSTBRADIUSEFFECT;
      case SpellScalingEffect.PLUSHALFMYSTBRADIUS.label.toLowerCase():
        return SpellScalingEffect.PLUSHALFMYSTBRADIUS;
      case SpellScalingEffect.PLUSMYSTBRADIUS.label.toLowerCase():
        return SpellScalingEffect.PLUSMYSTBRADIUS;
      case SpellScalingEffect.PLUSMYSTBRADIUSEFFECT.label.toLowerCase():
        return SpellScalingEffect.PLUSMYSTBRADIUSEFFECT;
      default:
        return SpellScalingEffect.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellScalingEffect.NONE.label,
      SpellScalingEffect.MYSTBRADIUS.label,
      SpellScalingEffect.MYSTBPROJECTILES.label,
      SpellScalingEffect.PROJECTILERADIUSPERVARIABLE.label,
      SpellScalingEffect.PROJECTILEPERVARIABLE.label,
      SpellScalingEffect.PROJECTILEPERTHREEMAGIC.label,
      SpellScalingEffect.PROJECTILEPERTWOMAGIC.label,
      SpellScalingEffect.PROJECTILERADIUSPERTWOMAGIC.label,
      SpellScalingEffect.PROJECTILERADIUSPERTHREEMAGIC.label,
      SpellScalingEffect.PLUSPROJECTILEPERTWOMAGIC.label,
      SpellScalingEffect.PLUSPROJECTILEPERFOURMAGIC.label,
      SpellScalingEffect.PLUSPROJECTILEPERTHREEMAGIC.label,
      SpellScalingEffect.MYSTBRADIUSEFFECT.label,
      SpellScalingEffect.PLUSHALFMYSTBRADIUSEFFECT.label,
      SpellScalingEffect.PLUSHALFMYSTBRADIUS.label,
      SpellScalingEffect.PLUSMYSTBRADIUS.label,
      SpellScalingEffect.PLUSMYSTBRADIUSEFFECT.label,
    ];
  };
}

export class SpellDamageType {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly COMBINED: StringPair = { label: "Combined", drain: 0 };
  static readonly PHYSICAL: StringPair = { label: "Physical", drain: 0 };
  static readonly STUN: StringPair = { label: "Stun", drain: 1 };
  static readonly PURE: StringPair = { label: "Pure", drain: 2 };
  static readonly FATIGUE: StringPair = { label: "Fatigue", drain: 3 };
  static readonly AGONY: StringPair = { label: "Agony", drain: 5 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellDamageType.COMBINED.label.toLowerCase():
        return SpellDamageType.COMBINED;
      case SpellDamageType.PHYSICAL.label.toLowerCase():
        return SpellDamageType.PHYSICAL;
      case SpellDamageType.STUN.label.toLowerCase():
        return SpellDamageType.STUN;
      case SpellDamageType.PURE.label.toLowerCase():
        return SpellDamageType.PURE;
      case SpellDamageType.FATIGUE.label.toLowerCase():
        return SpellDamageType.FATIGUE;
      case SpellDamageType.AGONY.label.toLowerCase():
        return SpellDamageType.AGONY;
      default:
        return SpellDamageType.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellDamageType.NONE.label,
      SpellDamageType.COMBINED.label,
      SpellDamageType.PHYSICAL.label,
      SpellDamageType.STUN.label,
      SpellDamageType.PURE.label,
      SpellDamageType.FATIGUE.label,
      SpellDamageType.AGONY.label,
    ];
  };
}

export class SpellDamage {
  static readonly NONE: StringPair = { label: "", drain: 0, };
  static readonly ONEPRMAGIC: StringPair = { label: "1 PR Magic/Faith", drain: 3, };
  static readonly TWOPRMAGIC: StringPair = { label: "2 PR Magic/Faith", drain: 4, };
  static readonly THREEPRMAGIC: StringPair = { label: "3 PR Magic/Faith", drain: 6, };
  static readonly FOURPRMAGIC: StringPair = { label: "4 PR Magic/Faith", drain: 9, };
  static readonly FIVEPRMAGIC: StringPair = { label: "5 PR Magic/Faith", drain: 12, };
  static readonly ONE: StringPair = { label: "1", drain: 1 };
  static readonly TWO: StringPair = { label: "2", drain: 2 };
  static readonly THREE: StringPair = { label: "3", drain: 3 };
  static readonly FOUR: StringPair = { label: "4", drain: 4 };
  static readonly FIVE: StringPair = { label: "5", drain: 5 };
  static readonly ONEDFOUR: StringPair = { label: "1d4", drain: 1 };
  static readonly ONEDSIX: StringPair = { label: "1d6", drain: 1 };
  static readonly ONEDEIGHT: StringPair = { label: "1d8", drain: 2 };
  static readonly ONEDTEN: StringPair = { label: "1d10", drain: 3 };
  static readonly ONEDTWELVE: StringPair = { label: "1d12", drain: 3 };
  static readonly ONEDTWENTY: StringPair = { label: "1d20", drain: 5 };
  static readonly TWODFOUR: StringPair = { label: "2d4", drain: 2 };
  static readonly TWODSIX: StringPair = { label: "2d6", drain: 3 };
  static readonly TWODEIGHT: StringPair = { label: "2d8", drain: 4 };
  static readonly TWODTEN: StringPair = { label: "2d10", drain: 5 };
  static readonly TWODTWELVE: StringPair = { label: "2d12", drain: 5 };
  static readonly TWODTWENTY: StringPair = { label: "2d20", drain: 10 };
  static readonly THREEDFOUR: StringPair = { label: "3d4", drain: 3 };
  static readonly THREEDSIX: StringPair = { label: "3d6", drain: 5 };
  static readonly THREEDEIGHT: StringPair = { label: "3d8", drain: 6 };
  static readonly THREEDTEN: StringPair = { label: "3d10", drain: 7 };
  static readonly THREEDTWELVE: StringPair = { label: "3d12", drain: 9 };
  static readonly FOURDFOUR: StringPair = { label: "4d4", drain: 4 };
  static readonly FOURDSIX: StringPair = { label: "4d6", drain: 6 };
  static readonly FOURDEIGHT: StringPair = { label: "4d8", drain: 8 };
  static readonly FOURDTEN: StringPair = { label: "4d10", drain: 11 };
  static readonly FIVEDFOUR: StringPair = { label: "5d4", drain: 5 };
  static readonly FIVEDSIX: StringPair = { label: "5d6", drain: 8 };
  static readonly FIVEDEIGHT: StringPair = { label: "5d8", drain: 12 };
  static readonly SIXDFOUR: StringPair = { label: "6d4", drain: 7 };
  static readonly MYSTB: StringPair = { label: "MystB", drain: 1 };
  static readonly MYSTBDOUBLE: StringPair = { label: "MystB *2", drain: 2 };
  static readonly QUARTERMAGIC: StringPair = { label: "1/4 Magic/Faith", drain: 2, };
  static readonly HALFMAGIC: StringPair = { label: "1/2 Magic/Faith", drain: 3, };
  static readonly MAGIC: StringPair = { label: "Magic/Faith", drain: 4 };
  static readonly COLLETERAL: StringPair = { label: "Collateral damage based on environment", drain: 1, };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellDamage.ONEPRMAGIC.label.toLowerCase():
        return SpellDamage.ONEPRMAGIC;
      case SpellDamage.TWOPRMAGIC.label.toLowerCase():
        return SpellDamage.TWOPRMAGIC;
      case SpellDamage.THREEPRMAGIC.label.toLowerCase():
        return SpellDamage.THREEPRMAGIC;
      case SpellDamage.FOURPRMAGIC.label.toLowerCase():
        return SpellDamage.FOURPRMAGIC;
      case SpellDamage.FIVEPRMAGIC.label.toLowerCase():
        return SpellDamage.FIVEPRMAGIC;
      case SpellDamage.ONE.label.toLowerCase():
        return SpellDamage.ONE;
      case SpellDamage.TWO.label.toLowerCase():
        return SpellDamage.TWO;
      case SpellDamage.THREE.label.toLowerCase():
        return SpellDamage.THREE;
      case SpellDamage.FOUR.label.toLowerCase():
        return SpellDamage.FOUR;
      case SpellDamage.FIVE.label.toLowerCase():
        return SpellDamage.FIVE;
      case SpellDamage.ONEDFOUR.label.toLowerCase():
        return SpellDamage.ONEDFOUR;
      case SpellDamage.ONEDSIX.label.toLowerCase():
        return SpellDamage.ONEDSIX;
      case SpellDamage.ONEDEIGHT.label.toLowerCase():
        return SpellDamage.ONEDEIGHT;
      case SpellDamage.ONEDTEN.label.toLowerCase():
        return SpellDamage.ONEDTEN;
      case SpellDamage.ONEDTWELVE.label.toLowerCase():
        return SpellDamage.ONEDTWELVE;
      case SpellDamage.ONEDTWENTY.label.toLowerCase():
        return SpellDamage.ONEDTWENTY;
      case SpellDamage.TWODFOUR.label.toLowerCase():
        return SpellDamage.TWODFOUR;
      case SpellDamage.TWODSIX.label.toLowerCase():
        return SpellDamage.TWODSIX;
      case SpellDamage.TWODEIGHT.label.toLowerCase():
        return SpellDamage.TWODEIGHT;
      case SpellDamage.TWODTEN.label.toLowerCase():
        return SpellDamage.TWODTEN;
      case SpellDamage.TWODTWELVE.label.toLowerCase():
        return SpellDamage.TWODTWELVE;
      case SpellDamage.TWODTWENTY.label.toLowerCase():
        return SpellDamage.TWODTWENTY;
      case SpellDamage.THREEDFOUR.label.toLowerCase():
        return SpellDamage.THREEDFOUR;
      case SpellDamage.THREEDSIX.label.toLowerCase():
        return SpellDamage.THREEDSIX;
      case SpellDamage.THREEDEIGHT.label.toLowerCase():
        return SpellDamage.THREEDEIGHT;
      case SpellDamage.THREEDTEN.label.toLowerCase():
        return SpellDamage.THREEDTEN;
      case SpellDamage.THREEDTWELVE.label.toLowerCase():
        return SpellDamage.THREEDTWELVE;
      case SpellDamage.FOURDFOUR.label.toLowerCase():
        return SpellDamage.FOURDFOUR;
      case SpellDamage.FOURDSIX.label.toLowerCase():
        return SpellDamage.FOURDSIX;
      case SpellDamage.FOURDEIGHT.label.toLowerCase():
        return SpellDamage.FOURDEIGHT;
      case SpellDamage.FOURDTEN.label.toLowerCase():
        return SpellDamage.FOURDTEN;
      case SpellDamage.FIVEDFOUR.label.toLowerCase():
        return SpellDamage.FIVEDFOUR;
      case SpellDamage.FIVEDSIX.label.toLowerCase():
        return SpellDamage.FIVEDSIX;
      case SpellDamage.FIVEDEIGHT.label.toLowerCase():
        return SpellDamage.FIVEDEIGHT;
      case SpellDamage.SIXDFOUR.label.toLowerCase():
        return SpellDamage.SIXDFOUR;
      case SpellDamage.MYSTB.label.toLowerCase():
        return SpellDamage.MYSTB;
      case SpellDamage.MYSTBDOUBLE.label.toLowerCase():
        return SpellDamage.MYSTBDOUBLE;
      case SpellDamage.QUARTERMAGIC.label.toLowerCase():
        return SpellDamage.QUARTERMAGIC;
      case SpellDamage.HALFMAGIC.label.toLowerCase():
        return SpellDamage.HALFMAGIC;
      case SpellDamage.MAGIC.label.toLowerCase():
        return SpellDamage.MAGIC;
      case SpellDamage.COLLETERAL.label.toLowerCase():
        return SpellDamage.COLLETERAL;
      default:
        return SpellDamage.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellDamage.NONE.label,
      SpellDamage.ONEPRMAGIC.label,
      SpellDamage.TWOPRMAGIC.label,
      SpellDamage.THREEPRMAGIC.label,
      SpellDamage.FOURPRMAGIC.label,
      SpellDamage.FIVEPRMAGIC.label,
      SpellDamage.ONE.label,
      SpellDamage.TWO.label,
      SpellDamage.THREE.label,
      SpellDamage.FOUR.label,
      SpellDamage.FIVE.label,
      SpellDamage.ONEDFOUR.label,
      SpellDamage.ONEDSIX.label,
      SpellDamage.ONEDEIGHT.label,
      SpellDamage.ONEDTEN.label,
      SpellDamage.ONEDTWELVE.label,
      SpellDamage.ONEDTWENTY.label,
      SpellDamage.TWODFOUR.label,
      SpellDamage.TWODSIX.label,
      SpellDamage.TWODEIGHT.label,
      SpellDamage.TWODTEN.label,
      SpellDamage.TWODTWELVE.label,
      SpellDamage.TWODTWENTY.label,
      SpellDamage.THREEDFOUR.label,
      SpellDamage.THREEDSIX.label,
      SpellDamage.THREEDEIGHT.label,
      SpellDamage.THREEDTEN.label,
      SpellDamage.THREEDTWELVE.label,
      SpellDamage.FOURDFOUR.label,
      SpellDamage.FOURDSIX.label,
      SpellDamage.FOURDEIGHT.label,
      SpellDamage.FOURDTEN.label,
      SpellDamage.FIVEDFOUR.label,
      SpellDamage.FIVEDSIX.label,
      SpellDamage.FIVEDEIGHT.label,
      SpellDamage.SIXDFOUR.label,
      SpellDamage.MYSTB.label,
      SpellDamage.MYSTBDOUBLE.label,
      SpellDamage.QUARTERMAGIC.label,
      SpellDamage.HALFMAGIC.label,
      SpellDamage.MAGIC.label,
      SpellDamage.COLLETERAL.label,
    ];
  };
}

export class SpellAoeRadius {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly ONEMETER: StringPair = { label: "1 Meter", drain: -1 };
  static readonly TWOMETERS: StringPair = { label: "2 Meters", drain: 0 };
  static readonly THREEMETERS: StringPair = { label: "3 Meters", drain: 1 };
  static readonly HALFMAGMETERS: StringPair = { label: "1/2 Magic/Faith Meters", drain: 2 };
  static readonly MAGMETERS: StringPair = { label: "Magic/Faith *1 Meters", drain: 4 };
  static readonly MAGTIMESTWOMETERS: StringPair = { label: "Magic/Faith *2 Meters", drain: 6 };
  static readonly VARIABLE: StringPair = { label: "Variable", drain: 1 };
  
  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellAoeRadius.ONEMETER.label.toLowerCase():
        return SpellAoeRadius.ONEMETER;
      case SpellAoeRadius.TWOMETERS.label.toLowerCase():
        return SpellAoeRadius.TWOMETERS;
      case SpellAoeRadius.THREEMETERS.label.toLowerCase():
        return SpellAoeRadius.THREEMETERS;
      case SpellAoeRadius.HALFMAGMETERS.label.toLowerCase():
        return SpellAoeRadius.HALFMAGMETERS;
      case SpellAoeRadius.MAGMETERS.label.toLowerCase():
        return SpellAoeRadius.MAGMETERS;
      case SpellAoeRadius.MAGTIMESTWOMETERS.label.toLowerCase():
        return SpellAoeRadius.MAGTIMESTWOMETERS;
      case SpellAoeRadius.VARIABLE.label.toLowerCase():
        return SpellAoeRadius.VARIABLE;
      default:
        return SpellAoeRadius.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellAoeRadius.NONE.label,
      SpellAoeRadius.ONEMETER.label,
      SpellAoeRadius.TWOMETERS.label,
      SpellAoeRadius.THREEMETERS.label,
      SpellAoeRadius.HALFMAGMETERS.label,
      SpellAoeRadius.MAGMETERS.label,
      SpellAoeRadius.MAGTIMESTWOMETERS.label,
      SpellAoeRadius.VARIABLE.label,
    ];
  };
}

export class SpellLosRange {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly HALFMAGIC: StringPair = {
    label: "1/2 Magic/Faith meters",
    drain: -1,
  };
  static readonly ONEMAGIC: StringPair = {
    label: "Magic/Faith *1 meters",
    drain: -1,
  };
  static readonly TWOMAGIC: StringPair = {
    label: "Magic/Faith *2 meters",
    drain: 0,
  };
  static readonly THREEMAGIC: StringPair = {
    label: "Magic/Faith *3 meters",
    drain: 1,
  };
  static readonly FOURMAGIC: StringPair = {
    label: "Magic/Faith *4 meters",
    drain: 2,
  };
  static readonly FIVEMAGIC: StringPair = {
    label: "Magic/Faith *5 meters",
    drain: 3,
  };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellLosRange.HALFMAGIC.label.toLowerCase():
        return SpellLosRange.HALFMAGIC;
      case SpellLosRange.ONEMAGIC.label.toLowerCase():
        return SpellLosRange.ONEMAGIC;
      case SpellLosRange.TWOMAGIC.label.toLowerCase():
        return SpellLosRange.TWOMAGIC;
      case SpellLosRange.THREEMAGIC.label.toLowerCase():
        return SpellLosRange.THREEMAGIC;
      case SpellLosRange.FOURMAGIC.label.toLowerCase():
        return SpellLosRange.FOURMAGIC;
      case SpellLosRange.FIVEMAGIC.label.toLowerCase():
        return SpellLosRange.FIVEMAGIC;
      default:
        return SpellLosRange.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellLosRange.NONE.label,
      SpellLosRange.HALFMAGIC.label,
      SpellLosRange.ONEMAGIC.label,
      SpellLosRange.TWOMAGIC.label,
      SpellLosRange.THREEMAGIC.label,
      SpellLosRange.FOURMAGIC.label,
      SpellLosRange.FIVEMAGIC.label,
    ];
  };
}

export class SpellProjectileNumber {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly ONE: StringPair = { label: "1", drain: 1 };
  static readonly TWO: StringPair = { label: "2", drain: 2 };
  static readonly THREE: StringPair = { label: "3", drain: 4 };
  static readonly FOUR: StringPair = { label: "4", drain: 6 };
  static readonly FIVE: StringPair = { label: "5", drain: 8 };
  static readonly SCALING: StringPair = {
    label: "Scaling / Variable",
    drain: 1,
  };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellProjectileNumber.ONE.label.toLowerCase():
        return SpellProjectileNumber.ONE;
      case SpellProjectileNumber.TWO.label.toLowerCase():
        return SpellProjectileNumber.TWO;
      case SpellProjectileNumber.THREE.label.toLowerCase():
        return SpellProjectileNumber.THREE;
      case SpellProjectileNumber.FOUR.label.toLowerCase():
        return SpellProjectileNumber.FOUR;
      case SpellProjectileNumber.FIVE.label.toLowerCase():
        return SpellProjectileNumber.FIVE;
      case SpellProjectileNumber.SCALING.label.toLowerCase():
        return SpellProjectileNumber.SCALING;
      default:
        return SpellProjectileNumber.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellProjectileNumber.NONE.label,
      SpellProjectileNumber.ONE.label,
      SpellProjectileNumber.TWO.label,
      SpellProjectileNumber.THREE.label,
      SpellProjectileNumber.FOUR.label,
      SpellProjectileNumber.FIVE.label,
      SpellProjectileNumber.SCALING.label,
    ];
  };
}

export class SpellProjectileType {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly BALL: StringPair = { label: "Ball", drain: -1 };
  static readonly MISSILE: StringPair = { label: "Missile", drain: 0 };
  static readonly BOLT: StringPair = { label: "Bolt", drain: 0 };
  static readonly RAY: StringPair = { label: "Ray", drain: 1 };
  static readonly SPRAY: StringPair = { label: "Spray", drain: 0 };
  static readonly LASSO: StringPair = { label: "Lasso", drain: 1 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellProjectileType.BALL.label.toLowerCase():
        return SpellProjectileType.BALL;
      case SpellProjectileType.MISSILE.label.toLowerCase():
        return SpellProjectileType.MISSILE;
      case SpellProjectileType.BOLT.label.toLowerCase():
        return SpellProjectileType.BOLT;
      case SpellProjectileType.RAY.label.toLowerCase():
        return SpellProjectileType.RAY;
      case SpellProjectileType.SPRAY.label.toLowerCase():
        return SpellProjectileType.SPRAY;
      case SpellProjectileType.LASSO.label.toLowerCase():
        return SpellProjectileType.LASSO;
      default:
        return SpellProjectileType.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellProjectileType.NONE.label,
      SpellProjectileType.BALL.label,
      SpellProjectileType.MISSILE.label,
      SpellProjectileType.BOLT.label,
      SpellProjectileType.RAY.label,
      SpellProjectileType.SPRAY.label,
      SpellProjectileType.LASSO.label,
    ];
  };
}

export class SpellTargetingType {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly DIRECTTARGET: StringPair = {
    label: "Direct",
    drain: 0,
  };
  static readonly AURATARGETING: StringPair = {
    label: "Aura",
    drain: 2,
  };
  static readonly INDIRECTTARGETING: StringPair = {
    label: "Indirect",
    drain: 1,
  };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellTargetingType.DIRECTTARGET.label.toLowerCase():
        return SpellTargetingType.DIRECTTARGET;
      case SpellTargetingType.AURATARGETING.label.toLowerCase():
        return SpellTargetingType.AURATARGETING;
      case SpellTargetingType.INDIRECTTARGETING.label.toLowerCase():
        return SpellTargetingType.INDIRECTTARGETING;
      default:
        return SpellTargetingType.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellTargetingType.NONE.label,
      SpellTargetingType.DIRECTTARGET.label,
      SpellTargetingType.AURATARGETING.label,
      SpellTargetingType.INDIRECTTARGETING.label,
    ];
  };
}

export class SpellCastTime {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly SIXMINUSMYSTBROUNDS: StringPair = { label: "6 - Mystb Rounds", drain: 2, };
  static readonly NINETHREE: StringPair = { label: "9 + 3", drain: -4 };
  static readonly NINETHREECHANNEL: StringPair = { label: "9 + 3 (Channel)", drain: -3, };
  static readonly SEVENTHREE: StringPair = { label: "7 + 3", drain: -1 };
  static readonly FIVETHREE: StringPair = { label: "5 + 3", drain: 1 };
  static readonly FIVE: StringPair = { label: "5", drain: 4 };
  static readonly DRAINCHENNEL: StringPair = { label: "Drain (Channel)", drain: -3, };
  static readonly DRAINTHREE: StringPair = { label: "Drain + 3", drain: -2 };
  static readonly MAGIFAITHHOURS: StringPair = { label: "24 / Magic/Faith Hours", drain: 0, };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellCastTime.SIXMINUSMYSTBROUNDS.label.toLowerCase():
        return SpellCastTime.SIXMINUSMYSTBROUNDS;
      case SpellCastTime.NINETHREE.label.toLowerCase():
        return SpellCastTime.NINETHREE;
      case SpellCastTime.NINETHREECHANNEL.label.toLowerCase():
        return SpellCastTime.NINETHREECHANNEL;
      case SpellCastTime.SEVENTHREE.label.toLowerCase():
        return SpellCastTime.SEVENTHREE;
      case SpellCastTime.FIVETHREE.label.toLowerCase():
        return SpellCastTime.FIVETHREE;
      case SpellCastTime.FIVE.label.toLowerCase():
        return SpellCastTime.FIVE;
      case SpellCastTime.DRAINCHENNEL.label.toLowerCase():
        return SpellCastTime.DRAINCHENNEL;
      case SpellCastTime.DRAINTHREE.label.toLowerCase():
        return SpellCastTime.DRAINTHREE;
      case SpellCastTime.MAGIFAITHHOURS.label.toLowerCase():
        return SpellCastTime.MAGIFAITHHOURS;
      default:
        return SpellCastTime.NONE;
    }
  };
  static getAllPhysical = (): string[] => {
    return [
      SpellCastTime.NONE.label,
      SpellCastTime.SIXMINUSMYSTBROUNDS.label,
      SpellCastTime.NINETHREE.label,
      SpellCastTime.NINETHREECHANNEL.label,
      SpellCastTime.SEVENTHREE.label,
      SpellCastTime.FIVETHREE.label,
      SpellCastTime.FIVE.label,
      SpellCastTime.DRAINCHENNEL.label,
      SpellCastTime.DRAINTHREE.label,
      SpellCastTime.MAGIFAITHHOURS.label,
    ];
  };
  static getAllStun = (): string[] => {
    return [
      SpellCastTime.NONE.label,
      SpellCastTime.SIXMINUSMYSTBROUNDS.label,
      SpellCastTime.NINETHREE.label,
      SpellCastTime.NINETHREECHANNEL.label,
      SpellCastTime.SEVENTHREE.label,
      SpellCastTime.FIVETHREE.label,
      SpellCastTime.FIVE.label,
      SpellCastTime.MAGIFAITHHOURS.label,
    ];
  };
}

export class SpellLevel {
  static readonly NONE: NumberPair = {
    label: 0,
    drain: 0,
  };
  static readonly ONE: NumberPair = { label: 1, drain: -4 };
  static readonly TWO: NumberPair = { label: 2, drain: -3 };
  static readonly THREE: NumberPair = { label: 3, drain: -2 };
  static readonly FOUR: NumberPair = { label: 4, drain: -1 };
  static readonly FIVE: NumberPair = { label: 5, drain: 0 };
  static readonly SIX: NumberPair = { label: 6, drain: 1 };
  static readonly SEVEN: NumberPair = { label: 7, drain: 2 };
  static readonly EIGHT: NumberPair = { label: 8, drain: 3 };
  static readonly NINE: NumberPair = { label: 9, drain: 4 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): NumberPair => {
    switch (+label) {
      case SpellLevel.ONE.label:
        return SpellLevel.ONE;
      case SpellLevel.TWO.label:
        return SpellLevel.TWO;
      case SpellLevel.THREE.label:
        return SpellLevel.THREE;
      case SpellLevel.FOUR.label:
        return SpellLevel.FOUR;
      case SpellLevel.FIVE.label:
        return SpellLevel.FIVE;
      case SpellLevel.SIX.label:
        return SpellLevel.SIX;
      case SpellLevel.SEVEN.label:
        return SpellLevel.SEVEN;
      case SpellLevel.EIGHT.label:
        return SpellLevel.EIGHT;
      case SpellLevel.NINE.label:
        return SpellLevel.NINE;
      default:
        return SpellLevel.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellLevel.NONE.label + "",
      SpellLevel.ONE.label + "",
      SpellLevel.TWO.label + "",
      SpellLevel.THREE.label + "",
      SpellLevel.FOUR.label + "",
      SpellLevel.FIVE.label + "",
      SpellLevel.SIX.label + "",
      SpellLevel.SEVEN.label + "",
      SpellLevel.EIGHT.label + "",
      SpellLevel.NINE.label + "",
    ];
  };
}

export class SpellSource {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly EARTH: StringPair = { label: "earth", drain: 0 };
  static readonly FROST: StringPair = { label: "frost", drain: 0 };
  static readonly AIR: StringPair = { label: "air", drain: 0 };
  static readonly FIRE: StringPair = { label: "fire", drain: 0 };
  static readonly ARCANE: StringPair = { label: "arcane", drain: 1 };
  static readonly DIVINE: StringPair = { label: "divine", drain: 0 };
  static readonly DEMONIC: StringPair = { label: "demonic", drain: 0 };
  static readonly DRUIDIC: StringPair = { label: "druidic", drain: 0 };
  static readonly PSYCHIC: StringPair = { label: "psychic", drain: 0 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellSource.EARTH.label.toLowerCase():
        return SpellSource.EARTH;
      case SpellSource.FROST.label.toLowerCase():
        return SpellSource.FROST;
      case SpellSource.AIR.label.toLowerCase():
        return SpellSource.AIR;
      case SpellSource.FIRE.label.toLowerCase():
        return SpellSource.FIRE;
      case SpellSource.ARCANE.label.toLowerCase():
        return SpellSource.ARCANE;
      case SpellSource.DIVINE.label.toLowerCase():
        return SpellSource.DIVINE;
      case SpellSource.DEMONIC.label.toLowerCase():
        return SpellSource.DEMONIC;
      case SpellSource.DRUIDIC.label.toLowerCase():
        return SpellSource.DRUIDIC;
      case SpellSource.PSYCHIC.label.toLowerCase():
        return SpellSource.PSYCHIC;
      default:
        return SpellSource.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellSource.NONE.label,
      SpellSource.EARTH.label,
      SpellSource.FROST.label,
      SpellSource.AIR.label,
      SpellSource.FIRE.label,
      SpellSource.ARCANE.label,
      SpellSource.DIVINE.label,
      SpellSource.DEMONIC.label,
      SpellSource.DRUIDIC.label,
      SpellSource.PSYCHIC.label,
    ];
  };
}

export class SpellRange {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly TOUCH: StringPair = { label: "touch", drain: 1 };
  static readonly SONIC: StringPair = { label: "sonic", drain: 1 };
  static readonly RADIUS90: StringPair = {
    label: "Radius 90° around Caster",
    drain: 1,
  };
  static readonly RADIUS360: StringPair = {
    label: "Radius 90°+ around Caster",
    drain: 2,
  };
  static readonly LOSAURA: StringPair = {
    label: "Line of Sight Aura or Projectile",
    drain: 1,
  };
  static readonly LOSMANIPULATE: StringPair = {
    label: "Line of Sight Manipulate",
    drain: 3,
  };
  static readonly LOSPOINT: StringPair = {
    label: "Line of Sight Spawn At Point",
    drain: 4,
  };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellRange.TOUCH.label.toLowerCase():
        return SpellRange.TOUCH;
      case SpellRange.SONIC.label.toLowerCase():
        return SpellRange.SONIC;
      case SpellRange.RADIUS90.label.toLowerCase():
        return SpellRange.RADIUS90;
      case SpellRange.RADIUS360.label.toLowerCase():
        return SpellRange.RADIUS360;
      case SpellRange.LOSAURA.label.toLowerCase():
        return SpellRange.LOSAURA;
      case SpellRange.LOSMANIPULATE.label.toLowerCase():
        return SpellRange.LOSMANIPULATE;
      case SpellRange.LOSPOINT.label.toLowerCase():
        return SpellRange.LOSPOINT;
      default:
        return SpellRange.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellRange.NONE.label,
      SpellRange.TOUCH.label,
      SpellRange.SONIC.label,
      SpellRange.RADIUS90.label,
      SpellRange.RADIUS360.label,
      SpellRange.LOSAURA.label,
      SpellRange.LOSMANIPULATE.label,
      SpellRange.LOSPOINT.label,
    ];
  };
}

export class SpellRite {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly VERBAL: StringPair = { label: "verbal", drain: 2 };
  static readonly SOMATIC: StringPair = { label: "somatic", drain: 1 };
  static readonly MENTAL: StringPair = { label: "mental", drain: 3 };
  static readonly RITUAL: StringPair = { label: "ritual", drain: 3 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellRite.VERBAL.label.toLowerCase():
        return SpellRite.VERBAL;
      case SpellRite.SOMATIC.label.toLowerCase():
        return SpellRite.SOMATIC;
      case SpellRite.MENTAL.label.toLowerCase():
        return SpellRite.MENTAL;
      case SpellRite.RITUAL.label.toLowerCase():
        return SpellRite.RITUAL;
      default:
        return SpellRite.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellRite.NONE.label,
      SpellRite.VERBAL.label,
      SpellRite.SOMATIC.label,
      SpellRite.MENTAL.label,
      SpellRite.RITUAL.label,
    ];
  };
}

export class SpellTarget {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly SINGLE: StringPair = { label: "Single Target", drain: 1 };
  static readonly DAOE: StringPair = { label: "Diminishing Area Of Effect ", drain: 1, };
  static readonly MULTI: StringPair = { label: "Multiple Targets", drain: 4, };
  static readonly AOE: StringPair = { label: "Area Of Effect", drain: 2, };
  static readonly CASTER: StringPair = { label: "Caster", drain: 3, };
  static readonly TARGET: StringPair = { label: "Caster Or Target", drain: 3, };
  static readonly LINE: StringPair = { label: "Straight Line", drain: 2, };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellTarget.SINGLE.label.toLowerCase():
        return SpellTarget.SINGLE;
      case SpellTarget.DAOE.label.toLowerCase():
        return SpellTarget.DAOE;
      case SpellTarget.MULTI.label.toLowerCase():
        return SpellTarget.MULTI;
      case SpellTarget.AOE.label.toLowerCase():
        return SpellTarget.AOE;
      case SpellTarget.CASTER.label.toLowerCase():
        return SpellTarget.CASTER;
      case SpellTarget.TARGET.label.toLowerCase():
        return SpellTarget.TARGET;
      case SpellTarget.LINE.label.toLowerCase():
        return SpellTarget.LINE;
      default:
        return SpellTarget.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellTarget.NONE.label,
      SpellTarget.SINGLE.label,
      SpellTarget.MULTI.label,
      SpellTarget.AOE.label,
      SpellTarget.DAOE.label,
      SpellTarget.TARGET.label,
      SpellTarget.CASTER.label,
      SpellTarget.LINE.label,
    ];
  };
}

export class SpellDuration {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly CONCENTRATION: StringPair = { label: "concentration", drain: 0, };
  static readonly INSTANTANEOUS: StringPair = { label: "instantaneous", drain: 1, };
  static readonly PERMANENT: StringPair = { label: "permanent", drain: 1 };
  static readonly FIXEDTICKS: StringPair = { label: "fixed # of ticks", drain: 1, };
  static readonly FIXEDROUNDS: StringPair = { label: "fixed # of rounds", drain: 2, };
  static readonly FIXEDHOURS: StringPair = { label: "fixed # of hours", drain: 2, };
  static readonly CHANNEL: StringPair = { label: "channel", drain: -1 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellDuration.CONCENTRATION.label.toLowerCase():
        return SpellDuration.CONCENTRATION;
      case SpellDuration.INSTANTANEOUS.label.toLowerCase():
        return SpellDuration.INSTANTANEOUS;
      case SpellDuration.PERMANENT.label.toLowerCase():
        return SpellDuration.PERMANENT;
      case SpellDuration.FIXEDTICKS.label.toLowerCase():
        return SpellDuration.FIXEDTICKS;
      case SpellDuration.FIXEDROUNDS.label.toLowerCase():
        return SpellDuration.FIXEDROUNDS;
      case SpellDuration.FIXEDHOURS.label.toLowerCase():
        return SpellDuration.FIXEDHOURS;
      case SpellDuration.CHANNEL.label.toLowerCase():
        return SpellDuration.CHANNEL;
      default:
        return SpellDuration.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellDuration.NONE.label,
      SpellDuration.CONCENTRATION.label,
      SpellDuration.FIXEDTICKS.label,
      SpellDuration.FIXEDROUNDS.label,
      SpellDuration.FIXEDHOURS.label,
      SpellDuration.CHANNEL.label,
      SpellDuration.INSTANTANEOUS.label,
      SpellDuration.PERMANENT.label,
    ];
  };
}

export class SpellSchool {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly TRANSMUTATION: StringPair = { label: "Transmutation", drain: 1, };
  static readonly EVOCATION: StringPair = { label: "Evocation", drain: 0 };
  static readonly FORTIFICATION: StringPair = { label: "Fortification", drain: 1, };
  static readonly HEX: StringPair = { label: "Hex", drain: 1 };
  static readonly ILLUSION: StringPair = { label: "Illusion", drain: 1 };
  static readonly CONJURATION: StringPair = { label: "Conjuration", drain: 2 };
  static readonly NECROMANCY: StringPair = { label: "Necromancy", drain: 1 };
  static readonly ENCHANTMENT: StringPair = { label: "Enchantment", drain: 2 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellSchool.FORTIFICATION.label.toLowerCase():
        return SpellSchool.FORTIFICATION;
      case SpellSchool.HEX.label.toLowerCase():
        return SpellSchool.HEX;
      case SpellSchool.ILLUSION.label.toLowerCase():
        return SpellSchool.ILLUSION;
      case SpellSchool.NECROMANCY.label.toLowerCase():
        return SpellSchool.NECROMANCY;
      case SpellSchool.TRANSMUTATION.label.toLowerCase():
        return SpellSchool.TRANSMUTATION;
      case SpellSchool.CONJURATION.label.toLowerCase():
        return SpellSchool.CONJURATION;
      case SpellSchool.EVOCATION.label.toLowerCase():
        return SpellSchool.EVOCATION;
      case SpellSchool.ENCHANTMENT.label.toLowerCase():
        return SpellSchool.ENCHANTMENT;
      default:
        return SpellSchool.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellSchool.NONE.label,
      SpellSchool.CONJURATION.label,
      SpellSchool.EVOCATION.label,
      SpellSchool.FORTIFICATION.label,
      SpellSchool.HEX.label,
      SpellSchool.ILLUSION.label,
      SpellSchool.NECROMANCY.label,
      SpellSchool.TRANSMUTATION.label,
      SpellSchool.ENCHANTMENT.label,
    ];
  };
}

export class SpellDrainType {
  static readonly NONE: StringPair = {
    label: "",
    drain: 0,
  };
  static readonly STUN: StringPair = { label: "Stun", drain: 0 };
  static readonly PHYSICAL: StringPair = { label: "Physical", drain: -7 };

  private constructor(
    private readonly label: string,
    public readonly drain: number
  ) {}

  static find = (label: string): StringPair => {
    switch (label?.toLowerCase().trim()) {
      case SpellDrainType.STUN.label.toLowerCase():
        return SpellDrainType.STUN;
      case SpellDrainType.PHYSICAL.label.toLowerCase():
        return SpellDrainType.PHYSICAL;
      default:
        return SpellDrainType.NONE;
    }
  };
  static getAll = (): string[] => {
    return [
      SpellDrainType.NONE.label,
      SpellDrainType.STUN.label,
      SpellDrainType.PHYSICAL.label,
    ];
  };
}

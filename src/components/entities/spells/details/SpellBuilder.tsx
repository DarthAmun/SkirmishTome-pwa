import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Spell, {
  SpellDuration,
  SpellRange,
  SpellRite,
  SpellSchool,
  SpellSource,
  SpellTarget,
} from "../../../../data/Spell";
import NumberField from "../../../form_elements/NumberField";
import SelectField from "../../../form_elements/SelectField";

import StringField from "../../../form_elements/StringField";
import TextField from "../../../form_elements/TextField";

const SpellBuilderView = () => {
  //Source, Rite, Casting Time, Duration, Range, School, Scaling Effect, Single Target, aoeRadius, damage, damage, damage, direct Effects, level, projectile type, projectile number, damage type, targeting type, los Range, drain type
  const [drain, setDrain] = useState<number[]>([
    0, 3, 2, 1, 1, 1, 0, 1, 0, 0, 0, 0, -4, 0, 0, 0, 0, 0, 0,
  ]);
  const [spell, onEdit] = useState<Spell>(new Spell());
  const [scalingEffect, setSaclingEffect] = useState<string>("");
  const [spellTarget, setSpellTarget] = useState<string>("Single Target");
  const [aoeRadius, setAoeRadius] = useState<string>("");
  const [damage, setDamage] = useState<string[]>(["", "", ""]);
  const [directEffects, setDirectEffects] = useState<string>("");
  const [level, setLevel] = useState<string>("1");
  const [projectileType, setProjectileType] = useState<string>("");
  const [projectileNumber, setProjectileNumber] = useState<string>("");
  const [damageType, setDamageType] = useState<string>("");
  const [targetingType, setTargetingType] = useState<string>("");
  const [losRange, setLosRange] = useState<string>("");
  const [drainType, setDrainType] = useState<string>("Stun");

  const makeDrain = (): number => {
    let sum = 0;
    drain.forEach((d) => {
      sum += d;
    });
    return sum;
  };

  useEffect(() => {
    console.log(drain, makeDrain());
  }, [drain]);

  return (
    <CenterWrapper>
      <View>
        <StringField
          value={spell.name}
          label="Name"
          onChange={(name) => onEdit({ ...spell, name: name })}
        />
        <NumberField value={makeDrain()} label="Drain" onChange={(drain) => undefined} />
        <SelectField
          value={drainType}
          options={["Stun", "Physical", "Fatigue / Agony"]}
          label={"Drain Type"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "Stun":
                  newD[18] = 0;
                  break;
                case "Physical":
                  newD[18] = -7;
                  break;
                case "Fatigue / Agony":
                  newD[18] = 4;
                  break;
                default:
                  newD[18] = 0;
                  break;
              }
              return newD;
            });
            setDrainType(value);
          }}
        />
        <SelectField
          value={spell.source}
          options={[
            SpellSource.air,
            SpellSource.arcane,
            SpellSource.demonic,
            SpellSource.divine,
            SpellSource.druidic,
            SpellSource.earth,
            SpellSource.fire,
            SpellSource.frost,
            SpellSource.psychic,
          ]}
          label={"Source"}
          onChange={(category: string) => {
            setDrain((d) => {
              let newD = [...d];
              newD[0] = category === SpellSource.arcane ? 1 : 0;
              return newD;
            });
            onEdit({ ...spell, source: category });
          }}
        />
        <SelectField
          value={spell.castTime}
          options={[
            "4 - Mystb Rounds",
            "9 + 3",
            "9 + 3 (Channel)",
            "7 + 3",
            "5 + 3",
            "5",
            "Drain (Channel)",
            "Drain + 3",
          ]}
          label={"Casting Time"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "4 - Mystb Rounds":
                  newD[2] = 2;
                  break;
                case "9 + 3":
                  newD[2] = -4;
                  break;
                case "9 + 3 (Channel)":
                case "Drain (Channel)":
                  newD[2] = -3;
                  break;
                case "7 + 3":
                  newD[2] = -1;
                  break;
                case "5 + 3":
                  newD[2] = 1;
                  break;
                case "5":
                  newD[2] = 4;
                  break;
                case "Drain":
                  newD[2] = -2;
                  break;
                default:
                  newD[2] = 0;
                  break;
              }
              return newD;
            });
            onEdit({ ...spell, castTime: value });
          }}
        />
        <SelectField
          value={spell.rite}
          options={[SpellRite.mental, SpellRite.ritual, SpellRite.somatic, SpellRite.verbal]}
          label={"Rite"}
          onChange={(category: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (category) {
                case SpellRite.mental:
                case SpellRite.ritual:
                  newD[1] = 3;
                  break;
                case SpellRite.somatic:
                  newD[1] = 1;
                  break;
                case SpellRite.verbal:
                  newD[1] = 2;
                  break;
                default:
                  newD[1] = 0;
                  break;
              }
              return newD;
            });
            onEdit({ ...spell, rite: category });
          }}
        />
        <SelectField
          value={spell.duration}
          options={[
            SpellDuration.concentration,
            SpellDuration.fixedTicks,
            SpellDuration.fixedRounds,
            SpellDuration.fixedHours,
            SpellDuration.channel,
            SpellDuration.instantaneous,
            SpellDuration.permanent,
          ]}
          label={"Duration"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case SpellDuration.concentration:
                  newD[3] = 0;
                  break;
                case SpellDuration.channel:
                  newD[3] = -1;
                  break;
                case SpellDuration.fixedTicks:
                case SpellDuration.instantaneous:
                case SpellDuration.permanent:
                  newD[3] = 1;
                  break;
                case SpellDuration.fixedHours:
                case SpellDuration.fixedRounds:
                  newD[3] = 2;
                  break;
                default:
                  newD[3] = 0;
                  break;
              }
              return newD;
            });
            onEdit({ ...spell, duration: value });
          }}
        />
        {(spell.duration === SpellDuration.fixedTicks ||
          spell.duration === SpellDuration.fixedRounds ||
          spell.duration === SpellDuration.fixedHours) && (
          <StringField
            value={spell.durationText}
            label="Duration"
            onChange={(value) => onEdit({ ...spell, durationText: value })}
          />
        )}
        <SelectField
          value={spell.range}
          options={[
            SpellRange.touch,
            SpellRange.sonic,
            SpellRange.radius,
            SpellRange.radiusPlus,
            SpellRange.losAura,
            SpellRange.losManipulate,
            SpellRange.losPoint,
          ]}
          label={"Range"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case SpellRange.touch:
                case SpellRange.sonic:
                case SpellRange.radius:
                case SpellRange.losAura:
                  newD[4] = 1;
                  break;
                case SpellRange.radiusPlus:
                  newD[4] = 2;
                  break;
                case SpellRange.losManipulate:
                  newD[4] = 3;
                  break;
                case SpellRange.losPoint:
                  newD[4] = 4;
                  break;
                default:
                  newD[4] = 0;
                  break;
              }
              return newD;
            });
            onEdit({ ...spell, range: value });
          }}
        />
        <SelectField
          value={spell.school}
          options={[
            SpellSchool.conjuration,
            SpellSchool.evocation,
            SpellSchool.fortification,
            SpellSchool.hex,
            SpellSchool.illusion,
            SpellSchool.necromancy,
            SpellSchool.transmutation,
            SpellSchool.enchantment,
          ]}
          label={"School"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case SpellSchool.fortification:
                case SpellSchool.hex:
                case SpellSchool.illusion:
                case SpellSchool.necromancy:
                case SpellSchool.transmutation:
                case SpellSchool.conjuration:
                  newD[4] = 1;
                  break;
                case SpellSchool.evocation:
                  newD[4] = 0;
                  break;
                case SpellSchool.enchantment:
                  newD[4] = 2;
                  break;
                default:
                  newD[4] = 0;
                  break;
              }
              return newD;
            });
            onEdit({ ...spell, school: value });
          }}
        />
        <SelectField
          value={scalingEffect}
          options={[
            "plus MystB Meters Radius",
            "plus MystB Projectiles",
            "1 Projectile/Effect per Variable Factor",
            "1 Projectile/Effect per 3 Magic/Faith Rating",
            "1 Projectile/Effect per 2 Magic/Faith Rating",
            "1 Projectile/Effect and 1 Meter Radius per 2 Magic/Faith Rating",
            "1 Projectile/Effect and 1 Meter Radius per 3 Magic/Faith Rating",
            "plus  1 Projectile/Effect per 3 Magic/Faith Rating",
            "plus  1 Projectile/Effect per 4 Magic/Faith Rating",
          ]}
          label={"Scaling Effects"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "plus MystB Meters Radius":
                case "plus MystB Projectiles":
                case "1 Projectile/Effect per 3 Magic/Faith Rating":
                case "plus  1 Projectile/Effect per 4 Magic/Faith Rating":
                  newD[5] = 2;
                  break;
                case "1 Projectile/Effect per Variable Factor":
                case "plus  1 Projectile/Effect per 3 Magic/Faith Rating":
                  newD[5] = 3;
                  break;
                case "1 Projectile/Effect per 2 Magic/Faith Rating":
                case "1 Projectile/Effect and 1 Meter Radius per 3 Magic/Faith Rating":
                  newD[5] = 4;
                  break;
                case "1 Projectile/Effect and 1 Meter Radius per 2 Magic/Faith Rating":
                  newD[5] = 5;
                  break;
                default:
                  newD[5] = 0;
                  break;
              }
              return newD;
            });
            setSaclingEffect(value);
          }}
        />
        <SelectField
          value={spellTarget}
          options={[
            SpellTarget.single,
            SpellTarget.multi,
            SpellTarget.aoe,
            SpellTarget.daoe,
            SpellTarget.target,
            SpellTarget.caster,
            SpellTarget.line,
          ]}
          label={"Spell Target"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case SpellTarget.single:
                case SpellTarget.daoe:
                  newD[6] = 1;
                  break;
                case SpellTarget.aoe:
                case SpellTarget.line:
                  newD[6] = 2;
                  break;
                case SpellTarget.caster:
                case SpellTarget.target:
                  newD[6] = 3;
                  break;
                case SpellTarget.multi:
                  newD[6] = 4;
                  break;
                default:
                  newD[6] = 0;
                  break;
              }
              return newD;
            });
            setSpellTarget(value);
          }}
        />
        <SelectField
          value={aoeRadius}
          options={[
            "1 Meter",
            "2 Meter",
            "3 Meter",
            "4 Meter",
            "5 Meter",
            "6 Meter",
            "7 Meter",
            "8 Meter",
            "9 Meter",
            "10 Meter",
            "1/2 Magic/Faith Meter",
            "Magic/Faith Meters",
          ]}
          label={"Area of Effect Radius"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "1 Meter":
                  newD[7] = -1;
                  break;
                case "2 Meter":
                  newD[7] = 0;
                  break;
                case "3 Meter":
                  newD[7] = 1;
                  break;
                case "4 Meter":
                case "5 Meter":
                case "1/2 Magic/Faith Meter":
                  newD[7] = 2;
                  break;
                case "6 Meter":
                case "7 Meter":
                  newD[7] = 3;
                  break;
                case "8 Meter":
                case "9 Meter":
                case "Magic/Faith Meters":
                  newD[7] = 4;
                  break;
                case "10 Meter":
                  newD[7] = 5;
                  break;
                default:
                  newD[7] = 0;
                  break;
              }
              return newD;
            });
            setAoeRadius(value);
          }}
        />
        <SelectField
          value={damage[0]}
          options={[
            "1 PR Magic/Faith",
            "2 PR Magic/Faith",
            "3 PR Magic/Faith",
            "4 PR Magic/Faith",
            "5 PR Magic/Faith",
            "1",
            "2",
            "3",
            "4",
            "5",
            "1d4",
            "1d6",
            "1d8",
            "1d10",
            "1d12",
            "1d20",
            "2d4",
            "2d6",
            "2d8",
            "2d10",
            "2d20",
            "3d4",
            "3d6",
            "3d8",
            "3d10",
            "3d12",
            "4d4",
            "4d6",
            "4d8",
            "4d10",
            "5d4",
            "5d6",
            "5d8",
            "6d4",
            "MystB",
            "MystB *2",
            "plus 1/4 Magic/Faith",
            "plus 1/2 Magic/Faith",
          ]}
          label={"Damage 1"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "plus 1/4 Magic/Faith":
                  newD[8] = -1;
                  break;
                case "plus 1/2 Magic/Faith":
                  newD[8] = -2;
                  break;
                case "1":
                case "1d4":
                case "1d6":
                case "MystB":
                  newD[8] = 1;
                  break;
                case "MystB *2":
                case "2":
                case "1d8":
                case "2d4":
                  newD[8] = 2;
                  break;
                case "3":
                case "1 PR Magic/Faith":
                case "1d10":
                case "1d12":
                case "2d6":
                case "3d4":
                  newD[8] = 3;
                  break;
                case "4":
                case "2 PR Magic/Faith":
                case "2d8":
                case "4d4":
                  newD[8] = 4;
                  break;
                case "5":
                case "3d6":
                case "1d20":
                case "2d10":
                case "5d4":
                case "2d12":
                  newD[8] = 5;
                  break;
                case "3 PR Magic/Faith":
                case "3d8":
                case "4d6":
                  newD[8] = 6;
                  break;
                case "6d4":
                case "3d10":
                  newD[8] = 7;
                  break;
                case "4 PR Magic/Faith":
                case "5d6":
                case "4d8":
                  newD[8] = 8;
                  break;
                case "3d12":
                  newD[8] = 9;
                  break;
                case "2d20":
                  newD[8] = 10;
                  break;
                case "4d10":
                  newD[8] = 11;
                  break;
                case "5d8":
                case "5 PR Magic/Faith":
                  newD[8] = 12;
                  break;
                default:
                  newD[8] = 0;
                  break;
              }
              return newD;
            });
            setDamage((d) => {
              let newD = [...d];
              newD[0] = value;
              return newD;
            });
          }}
        />
        <SelectField
          value={damage[1]}
          options={[
            "1 PR Magic/Faith",
            "2 PR Magic/Faith",
            "3 PR Magic/Faith",
            "4 PR Magic/Faith",
            "5 PR Magic/Faith",
            "1",
            "2",
            "3",
            "4",
            "5",
            "1d4",
            "1d6",
            "1d8",
            "1d10",
            "1d12",
            "1d20",
            "2d4",
            "2d6",
            "2d8",
            "2d10",
            "2d20",
            "3d4",
            "3d6",
            "3d8",
            "3d10",
            "3d12",
            "4d4",
            "4d6",
            "4d8",
            "4d10",
            "5d4",
            "5d6",
            "5d8",
            "6d4",
            "MystB",
            "MystB *2",
            "plus 1/4 Magic/Faith",
            "plus 1/2 Magic/Faith",
          ]}
          label={"Damage 2"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "plus 1/4 Magic/Faith":
                  newD[9] = -1;
                  break;
                case "plus 1/2 Magic/Faith":
                  newD[9] = -2;
                  break;
                case "1":
                case "1d4":
                case "1d6":
                case "MystB":
                  newD[9] = 1;
                  break;
                case "MystB *2":
                case "2":
                case "1d8":
                case "2d4":
                  newD[9] = 2;
                  break;
                case "3":
                case "1 PR Magic/Faith":
                case "1d10":
                case "1d12":
                case "2d6":
                case "3d4":
                  newD[9] = 3;
                  break;
                case "4":
                case "2 PR Magic/Faith":
                case "2d8":
                case "4d4":
                  newD[9] = 4;
                  break;
                case "5":
                case "3d6":
                case "1d20":
                case "2d10":
                case "5d4":
                case "2d12":
                  newD[9] = 5;
                  break;
                case "3 PR Magic/Faith":
                case "3d8":
                case "4d6":
                  newD[9] = 6;
                  break;
                case "6d4":
                case "3d10":
                  newD[9] = 7;
                  break;
                case "4 PR Magic/Faith":
                case "5d6":
                case "4d8":
                  newD[9] = 8;
                  break;
                case "3d12":
                  newD[9] = 9;
                  break;
                case "2d20":
                  newD[9] = 10;
                  break;
                case "4d10":
                  newD[9] = 11;
                  break;
                case "5d8":
                case "5 PR Magic/Faith":
                  newD[9] = 12;
                  break;
                default:
                  newD[9] = 0;
                  break;
              }
              return newD;
            });
            setDamage((d) => {
              let newD = [...d];
              newD[1] = value;
              return newD;
            });
          }}
        />
        <SelectField
          value={damage[2]}
          options={[
            "1 PR Magic/Faith",
            "2 PR Magic/Faith",
            "3 PR Magic/Faith",
            "4 PR Magic/Faith",
            "5 PR Magic/Faith",
            "1",
            "2",
            "3",
            "4",
            "5",
            "1d4",
            "1d6",
            "1d8",
            "1d10",
            "1d12",
            "1d20",
            "2d4",
            "2d6",
            "2d8",
            "2d10",
            "2d20",
            "3d4",
            "3d6",
            "3d8",
            "3d10",
            "3d12",
            "4d4",
            "4d6",
            "4d8",
            "4d10",
            "5d4",
            "5d6",
            "5d8",
            "6d4",
            "MystB",
            "MystB *2",
            "plus 1/4 Magic/Faith",
            "plus 1/2 Magic/Faith",
          ]}
          label={"Damage 3"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "plus 1/4 Magic/Faith":
                  newD[10] = -1;
                  break;
                case "plus 1/2 Magic/Faith":
                  newD[10] = -2;
                  break;
                case "1":
                case "1d4":
                case "1d6":
                case "MystB":
                  newD[10] = 1;
                  break;
                case "MystB *2":
                case "2":
                case "1d8":
                case "2d4":
                  newD[10] = 2;
                  break;
                case "3":
                case "1 PR Magic/Faith":
                case "1d10":
                case "1d12":
                case "2d6":
                case "3d4":
                  newD[10] = 3;
                  break;
                case "4":
                case "2 PR Magic/Faith":
                case "2d8":
                case "4d4":
                  newD[10] = 4;
                  break;
                case "5":
                case "3d6":
                case "1d20":
                case "2d10":
                case "5d4":
                case "2d12":
                  newD[10] = 5;
                  break;
                case "3 PR Magic/Faith":
                case "3d8":
                case "4d6":
                  newD[10] = 6;
                  break;
                case "6d4":
                case "3d10":
                  newD[10] = 7;
                  break;
                case "4 PR Magic/Faith":
                case "5d6":
                case "4d8":
                  newD[10] = 8;
                  break;
                case "3d12":
                  newD[10] = 9;
                  break;
                case "2d20":
                  newD[10] = 10;
                  break;
                case "4d10":
                  newD[10] = 11;
                  break;
                case "5d8":
                case "5 PR Magic/Faith":
                  newD[10] = 12;
                  break;
                default:
                  newD[10] = 0;
                  break;
              }
              return newD;
            });
            setDamage((d) => {
              let newD = [...d];
              newD[3] = value;
              return newD;
            });
          }}
        />
        <SelectField
          value={directEffects}
          options={[
            "Difficult Terrain",
            "Life Leech",
            "Communicate",
            "Confusion / Stun / Blind",
            "Hex",
            "Impair Movement / Vision",
            "Move / Fear / Root",
            "Damage Over Time",
            "Incapacitate",
            "Shield",
            "Knockdown",
            "Wall / Barrier / Sphere / Construct",
            "Teleport",
            "Heal",
            "Buff / Illusion",
            "Charm / Control / Influence",
            "Transform",
          ]}
          label={"Direct Effects"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "Difficult Terrain":
                  newD[11] = 1;
                  break;
                case "Life Leech":
                case "Communicate":
                case "Knockdown":
                  newD[11] = 2;
                  break;
                case "Confusion / Stun / Blind":
                case "Damage Over Time":
                  newD[11] = 3;
                  break;
                case "Hex":
                case "Impair Movement / Vision":
                case "Move / Fear / Root":
                case "Transform":
                  newD[11] = 4;
                  break;
                case "Shield":
                case "Wall / Barrier / Sphere / Construct":
                case "Heal":
                case "Buff / Illusion":
                  newD[11] = 5;
                  break;
                case "Teleport":
                  newD[11] = 6;
                  break;
                default:
                  newD[11] = 0;
                  break;
              }
              return newD;
            });
            setDirectEffects(value);
          }}
        />
        <SelectField
          value={level}
          options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
          label={"Level"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              newD[12] = +value - 5;
              return newD;
            });
            setLevel(value);
          }}
        />
        <SelectField
          value={projectileType}
          options={["Ball", "Missile", "Bolt", "Ray", "Spray"]}
          label={"Projectile Type"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "Ball":
                  newD[13] = -1;
                  break;
                case "Missile":
                case "Bolt":
                case "Spray":
                  newD[13] = 0;
                  break;
                case "Ray":
                  newD[13] = 1;
                  break;
                default:
                  newD[13] = 0;
                  break;
              }
              return newD;
            });
            setProjectileType(value);
          }}
        />
        <SelectField
          value={projectileNumber}
          options={["1", "2", "3", "4", "5", "Scaling / Variable"]}
          label={"Projectile Type"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "1":
                case "Scaling / Variable":
                  newD[14] = 1;
                  break;
                case "2":
                  newD[14] = 2;
                  break;
                case "3":
                  newD[14] = 4;
                  break;
                case "4":
                  newD[14] = 6;
                  break;
                case "5":
                  newD[14] = 8;
                  break;
                default:
                  newD[14] = 0;
                  break;
              }
              return newD;
            });
            setProjectileNumber(value);
          }}
        />
        <SelectField
          value={damageType}
          options={["Combined", "Physical", "Stun", "Pure"]}
          label={"Damage Type"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "Combined":
                case "Physical":
                  newD[15] = 0;
                  break;
                case "Stun":
                  newD[15] = 1;
                  break;
                case "Pure":
                  newD[15] = 2;
                  break;
                default:
                  newD[15] = 0;
                  break;
              }
              return newD;
            });
            setDamageType(value);
          }}
        />
        <SelectField
          value={targetingType}
          options={["Direct Target", "Aura Targeting", "Indirect Targeting"]}
          label={"Targeting Type"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "Direct Target":
                  newD[16] = 0;
                  break;
                case "Aura Targeting":
                  newD[16] = 2;
                  break;
                case "Indirect Targeting":
                  newD[16] = 1;
                  break;
                default:
                  newD[16] = 0;
                  break;
              }
              return newD;
            });
            setTargetingType(value);
          }}
        />
        <SelectField
          value={losRange}
          options={[
            "1/2 Magic/Faith meters",
            "Magic/Faith meters",
            "Magic/Faith *2 meters",
            "Magic/Faith *3 meters",
            "Magic/Faith *4 meters",
            "Magic/Faith *5 meters",
          ]}
          label={"Line of Sight Range"}
          onChange={(value: string) => {
            setDrain((d) => {
              let newD = [...d];
              switch (value) {
                case "1/2 Magic/Faith meters":
                case "Magic/Faith meters":
                  newD[17] = -1;
                  break;
                case "Magic/Faith *2 meters":
                  newD[17] = 0;
                  break;
                case "Magic/Faith *3 meters":
                  newD[17] = 1;
                  break;
                case "Magic/Faith *4 meters":
                  newD[17] = 2;
                  break;
                case "Magic/Faith *5 meters":
                  newD[17] = 3;
                  break;
                default:
                  newD[17] = 0;
                  break;
              }
              return newD;
            });
            setLosRange(value);
          }}
        />
        <TextField
          value={spell.effect}
          label="Effect"
          icon={faBookOpen}
          onChange={(value) => onEdit({ ...spell, effect: value })}
        />
        <TextField
          value={spell.damage}
          label="Damage"
          icon={faBookOpen}
          onChange={(value) => onEdit({ ...spell, damage: value })}
        />
        <TextField
          value={spell.mastery}
          label="Mastery"
          icon={faBookOpen}
          onChange={(value) => onEdit({ ...spell, mastery: value })}
        />
        <TextField
          value={spell.resist}
          label="Resist"
          icon={faBookOpen}
          onChange={(value) => onEdit({ ...spell, resist: value })}
        />
      </View>
    </CenterWrapper>
  );
};

export default SpellBuilderView;

const CenterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const View = styled.div`
  color: ${({ theme }) => theme.tile.color};
  font-size: 16px;
  padding: 5px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

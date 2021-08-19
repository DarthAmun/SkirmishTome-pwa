import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useCallback } from "react";
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

interface $Props {
  spell: Spell;
  onEdit: (value: Spell) => void;
}

const SpellEditView = ({ spell, onEdit }: $Props) => {
  const makeDrain = useCallback((drainparts: number[]): number => {
    let sum = 0;
    drainparts.forEach((d) => {
      sum += d;
    });
    return sum;
  }, []);

  return (
    <CenterWrapper>
      <View>
        <StringField
          value={spell.name}
          label="Name"
          onChange={(name) => onEdit({ ...spell, name: name })}
        />
        <NumberField value={spell.drain} label="Drain" onChange={(drain) => undefined} />
        <SelectField
          value={spell.drainType}
          options={["Stun", "Physical"]}
          label={"Drain Type"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
            switch (value) {
              case "Stun":
                newD[18] = 0;
                break;
              case "Physical":
                newD[18] = -7;
                break;
              default:
                newD[18] = 0;
                break;
            }
            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, drainType: value });
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
            let newD = [...spell.drainParts];
            newD[0] = category === SpellSource.arcane ? 1 : 0;

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, source: category });
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
            "24/MagiFaith Hours",
          ]}
          label={"Casting Time"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
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
              case "24/MagiFaith Hours":
                newD[2] = 0;
                break;
              default:
                newD[2] = 0;
                break;
            }

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, castTime: value });
          }}
        />
        <SelectField
          value={spell.rite}
          options={[SpellRite.mental, SpellRite.ritual, SpellRite.somatic, SpellRite.verbal]}
          label={"Rite"}
          onChange={(category: string) => {
            let newD = [...spell.drainParts];
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

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, rite: category });
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
            let newD = [...spell.drainParts];
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

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, duration: value });
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
            let newD = [...spell.drainParts];
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

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, range: value });
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
            let newD = [...spell.drainParts];
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

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, school: value });
          }}
        />
        <SelectField
          value={spell.scalingEffect}
          options={[
            "plus MystB Meters Radius",
            "plus MystB Projectiles",
            "1 Projectile/Effect per Variable Factor",
            "1 Projectile/Effect per 3 Magic/Faith Rating",
            "1 Projectile/Effect per 2 Magic/Faith Rating",
            "1 Projectile/Effect and 1 Meter Radius per 2 Magic/Faith Rating",
            "1 Projectile/Effect and 1 Meter Radius per 3 Magic/Faith Rating",
            "plus  1 Projectile/Effect per 2 Magic/Faith Rating",
            "plus  1 Projectile/Effect per 3 Magic/Faith Rating",
            "plus  1 Projectile/Effect per 4 Magic/Faith Rating",
            "plus MystB Meters Radius & Effect",
          ]}
          label={"Scaling Effects"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
            switch (value) {
              case "plus MystB Meters Radius":
              case "plus MystB Projectiles":
              case "1 Projectile/Effect per 3 Magic/Faith Rating":
              case "plus  1 Projectile/Effect per 4 Magic/Faith Rating":
                newD[5] = 2;
                break;
              case "1 Projectile/Effect per Variable Factor":
              case "plus MystB Meters Radius & Effect":
              case "plus  1 Projectile/Effect per 3 Magic/Faith Rating":
                newD[5] = 3;
                break;
              case "1 Projectile/Effect per 2 Magic/Faith Rating":
              case "plus  1 Projectile/Effect per 2 Magic/Faith Rating":
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

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, scalingEffect: value });
          }}
        />
        <SelectField
          value={spell.spellTarget}
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
            let newD = [...spell.drainParts];
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

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, spellTarget: value });
          }}
        />
        {spell.range !== SpellRange.touch && spell.range !== SpellRange.losManipulate && (
          <SelectField
            value={spell.aoeRadius}
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
              "Magic/Faith *2 Meters",
            ]}
            label={"Area of Effect Radius"}
            onChange={(value: string) => {
              let newD = [...spell.drainParts];
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
                case "Magic/Faith Meters":
                  newD[7] = 3;
                  break;
                case "8 Meter":
                case "9 Meter":
                case "Magic/Faith *2 Meters":
                  newD[7] = 4;
                  break;
                case "10 Meter":
                  newD[7] = 5;
                  break;
                default:
                  newD[7] = 0;
                  break;
              }
              onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, aoeRadius: value });
            }}
          />
        )}
        {spell.range !== SpellRange.sonic &&
          spell.range !== SpellRange.touch &&
          spell.range !== SpellRange.radius &&
          spell.range !== SpellRange.radiusPlus && (
            <SelectField
              value={spell.losRange}
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
                let newD = [...spell.drainParts];
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

                onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, losRange: value });
              }}
            />
          )}
        <SelectField
          value={spell.damage[0]}
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
            "1/4 Magic/Faith",
            "1/2 Magic/Faith",
            "Magic/Faith",
            "Collateral Damage based on environment",
          ]}
          label={"Damage/Healing 1"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
            switch (value) {
              case "1":
              case "1d4":
              case "1d6":
              case "MystB":
              case "Collateral Damage based on environment":
                newD[8] = 1;
                break;
              case "MystB *2":
              case "2":
              case "1d8":
              case "2d4":
              case "1/4 Magic/Faith":
                newD[8] = 2;
                break;
              case "3":
              case "1 PR Magic/Faith":
              case "1d10":
              case "1d12":
              case "2d6":
              case "3d4":
              case "1/2 Magic/Faith":
                newD[8] = 3;
                break;
              case "4":
              case "2 PR Magic/Faith":
              case "2d8":
              case "4d4":
              case "Magic/Faith":
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

            let newDa = [...spell.damage];
            newDa[0] = value;
            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, damage: newDa });
          }}
        />
        <SelectField
          value={spell.damage[1]}
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
            "Collateral Damage based on environment",
          ]}
          label={"Damage/Healing 2"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
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
              case "Collateral Damage based on environment":
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

            let newDa = [...spell.damage];
            newDa[1] = value;
            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, damage: newDa });
          }}
        />
        <SelectField
          value={spell.damage[2]}
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
            "Collateral Damage based on environment",
          ]}
          label={"Damage/Healing 3"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
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
              case "Collateral Damage based on environment":
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

            let newDa = [...spell.damage];
            newDa[2] = value;
            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, damage: newDa });
          }}
        />
        <SelectField
          value={spell.directEffects}
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
            "Sphere",
            "Knockdown",
            "Wall / Barrier / Construct / Summon",
            "Teleport",
            "Heal",
            "Buff / Illusion / Shield",
            "Charm / Control / Influence",
            "Transform",
          ]}
          label={"Direct Effects"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
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
              case "Sphere":
              case "Wall / Barrier / Construct / Summon":
              case "Heal":
              case "Buff / Illusion / Shield":
                newD[11] = 5;
                break;
              case "Teleport":
                newD[11] = 6;
                break;
              default:
                newD[11] = 0;
                break;
            }

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, directEffects: value });
          }}
        />
        <SelectField
          value={spell.level + ""}
          options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
          label={"Level"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
            newD[12] = +value - 5;

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, level: +value });
          }}
        />
        <SelectField
          value={spell.projectileType}
          options={["Ball", "Missile", "Bolt", "Ray", "Spray", "Lasso"]}
          label={"Projectile Type"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
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
              case "Lasso":
                newD[13] = 1;
                break;
              default:
                newD[13] = 0;
                break;
            }

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, projectileType: value });
          }}
        />
        {spell.projectileType === "Spray" && (
          <SelectField
            value={spell.projectileNumber}
            options={["1", "2", "3", "4", "5", "Scaling / Variable"]}
            label={"Projectile Type"}
            onChange={(value: string) => {
              let newD = [...spell.drainParts];
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
              onEdit({
                ...spell,
                drain: makeDrain(newD),
                drainParts: newD,
                projectileNumber: value,
              });
            }}
          />
        )}
        {(spell.damage[0] !== "" || spell.damage[1] !== "" || spell.damage[2] !== "") && (
          <SelectField
            value={spell.damageType}
            options={["Combined", "Physical", "Stun", "Pure", "Fatigue", "Agony"]}
            label={"Damage Type"}
            onChange={(value: string) => {
              let newD = [...spell.drainParts];
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
                case "Fatigue":
                  newD[15] = 3;
                  break;
                case "Agony":
                  newD[15] = 5;
                  break;
                default:
                  newD[15] = 0;
                  break;
              }
              onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, damageType: value });
            }}
          />
        )}
        {spell.damageType === "Combined" ||
          (spell.damageType === "Pure" && (
            <SelectField
              value={spell.pureDamage}
              options={[
                "Acid",
                "Necrotic",
                "Frost",
                "Fire",
                "Lightning",
                "Radiant",
                "Arcane",
                "Poison",
              ]}
              label={"Pure Spell Damage"}
              onChange={(value: string) => {
                let newD = [...spell.drainParts];
                switch (value) {
                  case "Arcane":
                    newD[18] = 1;
                    break;
                  default:
                    newD[18] = 0;
                    break;
                }

                onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, pureDamage: value });
              }}
            />
          ))}
        <SelectField
          value={spell.targetingType}
          options={["Direct Target", "Aura Targeting", "Indirect Targeting"]}
          label={"Targeting Type"}
          onChange={(value: string) => {
            let newD = [...spell.drainParts];
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

            onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, targetingType: value });
          }}
        />
        {spell.directEffects === "Wall / Barrier / Construct / Summon" && (
          <SelectField
            value={spell.size}
            options={[
              "1/2 Magic/Faith M²",
              "Magic/Faith M²",
              "Magic/Faith *2 M²",
              "Magic/Faith *3 M²",
              "1/2 Magic/Faith M³",
              "Magic/Faith M³",
              "Magic/Faith *2 M³",
              "Magic/Faith *3 M³",
            ]}
            label={"Targeting Type"}
            onChange={(value: string) => {
              let newD = [...spell.drainParts];
              switch (value) {
                case "1/2 Magic/Faith M²":
                case "1/2 Magic/Faith M³":
                  newD[19] = 0;
                  break;
                case "Magic/Faith M²":
                case "Magic/Faith M³":
                  newD[19] = 1;
                  break;
                case "Magic/Faith *2 M²":
                case "Magic/Faith *2 M³":
                  newD[19] = 2;
                  break;
                case "Magic/Faith *3 M²":
                case "Magic/Faith *3 M³":
                  newD[19] = 4;
                  break;
                default:
                  newD[19] = 0;
                  break;
              }
              onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, size: value });
            }}
          />
        )}
        {spell.directEffects === "Wall / Barrier / Construct / Summon" && (
          <SelectField
            value={spell.hp}
            options={[
              "1/2 Magic/Faith structure rating and Magic/Faith *1 hit points",
              "1/2 Magic/Faith structure rating and Magic/Faith *2 hit points",
              "1/2 Magic/Faith structure rating and Magic/Faith *3 hit points",
              "Magic/Faith structure rating and Magic/Faith *1 hit points",
              "Magic/Faith structure rating and Magic/Faith *2 hit points",
              "Magic/Faith *2 structure rating and Magic/Faith hit points",
              "Magic/Faith *1 hit points",
              "Magic/Faith *2 hit points",
              "Magic/Faith *3 hit points",
              "Magic/Faith *4 hit points",
            ]}
            label={"Targeting Type"}
            onChange={(value: string) => {
              let newD = [...spell.drainParts];
              switch (value) {
                case "1/2 Magic/Faith structure rating and Magic/Faith *1 hit points":
                  newD[20] = 0;
                  break;
                case "1/2 Magic/Faith structure rating and Magic/Faith *2 hit points":
                case "Magic/Faith structure rating and Magic/Faith *1 hit points":
                case "Magic/Faith *1 hit points":
                  newD[20] = 1;
                  break;
                case "1/2 Magic/Faith structure rating and Magic/Faith *3 hit points":
                case "Magic/Faith *2 hit points":
                  newD[20] = 2;
                  break;
                case "Magic/Faith structure rating and Magic/Faith *2 hit points":
                case "Magic/Faith *3 hit points":
                  newD[20] = 3;
                  break;
                case "Magic/Faith *2 structure rating and Magic/Faith hit points":
                case "Magic/Faith *4 hit points":
                  newD[20] = 4;
                  break;
                default:
                  newD[20] = 0;
                  break;
              }
              onEdit({ ...spell, drain: makeDrain(newD), drainParts: newD, hp: value });
            }}
          />
        )}
        <TextField
          value={spell.effect}
          label="Effect"
          icon={faBookOpen}
          onChange={(value) => onEdit({ ...spell, effect: value })}
        />
        <TextField
          value={spell.damageText}
          label="Damage"
          icon={faBookOpen}
          onChange={(value) => onEdit({ ...spell, damageText: value })}
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

export default SpellEditView;

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

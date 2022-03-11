import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Spell from "../../../../data/Spell";
import {
  SpellDuration,
  SpellRange,
  SpellRite,
  SpellSchool,
  SpellSource,
  SpellTarget,
  SpellDrainType,
  SpellCastTime,
  SpellTargetingType,
  SpellProjectileType,
  SpellProjectileNumber,
  SpellLosRange,
  SpellAoeRadius,
  SpellDamage,
  SpellDamageType,
  SpellScalingEffect,
  SpellDirectEffects,
  SpellSize,
  SpellHp,
  SpellPureDamage,
} from "../../../../data/SpellValues";
import { SpellLevel } from "../../../../data/SpellValues";
import CheckField from "../../../form_elements/CheckField";
import NumberField from "../../../form_elements/NumberField";
import SelectField from "../../../form_elements/SelectField";

import StringField from "../../../form_elements/StringField";
import TextField from "../../../form_elements/TextField";

interface $Props {
  spell: Spell;
  onEdit: (value: Spell) => void;
}

const SpellEditView = ({ spell, onEdit }: $Props) => {
  return (
    <CenterWrapper>
      <View>
        <StringField
          value={spell.name}
          label="Name"
          onChange={(name) => onEdit({ ...spell, name: name })}
        />
        <SelectField
          value={spell.school.label}
          options={SpellSchool.getAll()}
          label={"School"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              school: SpellSchool.find(value),
            });
          }}
        />
        <SelectField
          value={spell.source.label}
          options={SpellSource.getAll()}
          label={"Source"}
          onChange={(category: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              source: SpellSource.find(category),
            });
          }}
        />
        <SelectField
          value={spell.level.label + ""}
          options={SpellLevel.getAll()}
          label={"Level"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              level: SpellLevel.find(value),
            });
          }}
        />
        <NumberField
          value={spell.drain}
          label="Drain"
          onChange={(drain) => undefined}
        />
        <CheckField
          value={spell.chargeable}
          label="Chargeable"
          onChange={(value: boolean) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              chargeable: value,
            });
          }}
        />
        <CheckField
          value={spell.needsMaterial}
          label="Needs Material"
          onChange={(value: boolean) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              needsMaterial: value,
            });
          }}
        />
        <Separator />
        <SelectField
          value={spell.rite.label}
          options={SpellRite.getAll()}
          label={"Rite"}
          onChange={(category: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              rite: SpellRite.find(category),
            });
          }}
        />
        <SelectField
          value={spell.duration.label}
          options={SpellDuration.getAll()}
          label={"Duration"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              duration: SpellDuration.find(value),
            });
          }}
        />
        <SelectField
          value={spell.drainType.label}
          options={
            spell.school.label === SpellSchool.NECROMANCY.label
              ? SpellDrainType.getAll()
              : [SpellDrainType.STUN.label]
          }
          label={"Drain Type"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              drainType: SpellDrainType.find(value),
            });
          }}
        />
        <SelectField
          value={spell.castTime.label}
          options={
            spell.drainType.label === SpellDrainType.PHYSICAL.label
              ? SpellCastTime.getAllPhysical()
              : SpellCastTime.getAllStun()
          }
          label={"Casting Time"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              castTime: SpellCastTime.find(value),
            });
          }}
        />
        <Separator />
        <SelectField
          value={spell.spellTarget.label}
          options={SpellTarget.getAll()}
          label={"Spell Target"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              spellTarget: SpellTarget.find(value),
            });
          }}
        />
        <SelectField
          value={spell.range.label}
          options={SpellRange.getAll()}
          label={"Range"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              range: SpellRange.find(value),
            });
          }}
        />
        <SelectField
          value={spell.targetingType.label}
          options={SpellTargetingType.getAll()}
          label={"Targeting Type"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              targetingType: SpellTargetingType.find(value),
            });
          }}
        />
        <SelectField
          value={spell.projectileType.label}
          options={SpellProjectileType.getAll()}
          label={"Projectile Type"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              projectileType: SpellProjectileType.find(value),
            });
          }}
        />
        {spell.projectileType.label !== SpellProjectileType.SPRAY.label && (
          <SelectField
            value={spell.projectileNumber.label}
            options={SpellProjectileNumber.getAll()}
            label={"Projectile Number"}
            onChange={(value: string) => {
              onEdit({
                ...spell,
                drain: Spell.calcDrain(spell),
                projectileNumber: SpellProjectileNumber.find(value),
              });
            }}
          />
        )}
        {spell.range.label !== SpellRange.SONIC.label &&
          spell.range.label !== SpellRange.TOUCH.label &&
          spell.range.label !== SpellRange.RADIUS.label &&
          spell.range.label !== SpellRange.RADIUSPLUS.label && (
            <SelectField
              value={spell.losRange.label}
              options={SpellLosRange.getAll()}
              label={"Line of Sight Range"}
              onChange={(value: string) => {
                onEdit({
                  ...spell,
                  drain: Spell.calcDrain(spell),
                  losRange: SpellLosRange.find(value),
                });
              }}
            />
          )}
        {spell.range.label !== SpellRange.TOUCH.label &&
          spell.range.label !== SpellRange.LOSMANIPULATE.label && (
            <SelectField
              value={spell.aoeRadius.label}
              options={SpellAoeRadius.getAll()}
              label={"Area of Effect Radius"}
              onChange={(value: string) => {
                onEdit({
                  ...spell,
                  drain: Spell.calcDrain(spell),
                  aoeRadius: SpellAoeRadius.find(value),
                });
              }}
            />
          )}
        <Separator />
        <SelectField
          value={spell.damage[0]?.label}
          options={SpellDamage.getAll()}
          label={"Damage/Healing 1"}
          onChange={(value: string) => {
            let newDa = [...spell.damage];
            newDa[0] = SpellDamage.find(value);
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              damage: newDa,
            });
          }}
        />
        <SelectField
          value={spell.damage[1]?.label}
          options={SpellDamage.getAll()}
          label={"Damage/Healing 2"}
          onChange={(value: string) => {
            let newDa = [...spell.damage];
            newDa[1] = SpellDamage.find(value);
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              damage: newDa,
            });
          }}
        />
        <SelectField
          value={spell.damage[2]?.label}
          options={SpellDamage.getAll()}
          label={"Damage/Healing 3"}
          onChange={(value: string) => {
            let newDa = [...spell.damage];
            newDa[2] = SpellDamage.find(value);
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              damage: newDa,
            });
          }}
        />
        {(spell.damage[0]?.label !== "" ||
          spell.damage[1]?.label !== "" ||
          spell.damage[2]?.label !== "") && (
          <SelectField
            value={spell.damageType.label}
            options={SpellDamageType.getAll()}
            label={"Damage Type"}
            onChange={(value: string) => {
              onEdit({
                ...spell,
                drain: Spell.calcDrain(spell),
                damageType: SpellDamageType.find(value),
              });
            }}
          />
        )}
        <SelectField
          value={spell.scalingEffect.label}
          options={SpellScalingEffect.getAll()}
          label={"Scaling Effects"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              scalingEffect: SpellScalingEffect.find(value),
            });
          }}
        />

        <Separator />
        <SelectField
          value={spell.directEffects.label}
          options={SpellDirectEffects.getAll()}
          label={"Direct Effects"}
          onChange={(value: string) => {
            onEdit({
              ...spell,
              drain: Spell.calcDrain(spell),
              directEffects: SpellDirectEffects.find(value),
            });
          }}
        />
        {spell.directEffects.label ===
          SpellDirectEffects.WALLBARRIERCONSTRUCTSUMMON.label && (
          <>
            <SelectField
              value={spell.size.label}
              options={SpellSize.getAll()}
              label={"Shield/Structure Size"}
              onChange={(value: string) => {
                onEdit({
                  ...spell,
                  drain: Spell.calcDrain(spell),
                  size: SpellSize.find(value),
                });
              }}
            />
            <SelectField
              value={spell.hp.label}
              options={SpellHp.getAll()}
              label={"Armor/Hit Points"}
              onChange={(value: string) => {
                onEdit({
                  ...spell,
                  drain: Spell.calcDrain(spell),
                  hp: SpellHp.find(value),
                });
              }}
            />
          </>
        )}
        <Separator />
        {(spell.duration.label === SpellDuration.FIXEDTICKS.label ||
          spell.duration.label === SpellDuration.FIXEDROUNDS.label ||
          spell.duration.label === SpellDuration.FIXEDHOURS.label) && (
          <StringField
            value={spell.durationText}
            label="Duration"
            onChange={(value) => onEdit({ ...spell, durationText: value })}
          />
        )}
        {spell.damageType.label === SpellDamageType.COMBINED.label ||
          (spell.damageType.label === SpellDamageType.PURE.label && (
            <SelectField
              value={spell.pureDamage.label}
              options={SpellPureDamage.getAll()}
              label={"Pure Spell Damage"}
              onChange={(value: string) => {
                onEdit({
                  ...spell,
                  drain: Spell.calcDrain(spell),
                  pureDamage: SpellPureDamage.find(value),
                });
              }}
            />
          ))}
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

const Separator = styled.div`
  flex: 1 1 100%;
  height: 10px;
`;

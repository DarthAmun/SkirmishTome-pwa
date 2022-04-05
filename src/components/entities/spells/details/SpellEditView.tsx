import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
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
  canBeSaved: (val: boolean) => void;
  onEdit: (value: Spell) => void;
}

const SpellEditView = ({ spell, canBeSaved, onEdit }: $Props) => {
  useEffect(() => {
    if (
      spell.name.length > 0 &&
      spell.school.label !== SpellSchool.NONE.label &&
      spell.source.label !== SpellSource.NONE.label &&
      spell.level.label !== SpellLevel.NONE.label &&
      spell.rite.label !== SpellRite.NONE.label &&
      spell.duration.label !== SpellDuration.NONE.label &&
      spell.drainType.label !== SpellDrainType.NONE.label &&
      spell.castTime.label !== SpellCastTime.NONE.label &&
      spell.spellTarget.label !== SpellTarget.NONE.label &&
      spell.range.label !== SpellRange.NONE.label &&
      spell.targetingType.label !== SpellTargetingType.NONE.label
    ) {
      canBeSaved(true);
    } else {
      canBeSaved(false);
    }
  }, [spell]);

  return (
    <CenterWrapper>
      <View>
        <StringField
          value={spell.name}
          label="Name *"
          onChange={(name) => onEdit({ ...spell, name: name })}
        />
        <SelectField
          value={spell.school.label}
          options={SpellSchool.getAll()}
          label={"School *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, school: SpellSchool.NONE }))
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({ ...spell, school: SpellSchool.find(value) })
            );
          }}
        />
        <SelectField
          value={spell.source.label}
          options={SpellSource.getAll()}
          label={"Source *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, source: SpellSource.NONE }))
          }
          onChange={(category: string) => {
            onEdit(
              Spell.calcDrain({ ...spell, source: SpellSource.find(category) })
            );
          }}
        />
        <SelectField
          value={spell.level.label + ""}
          options={SpellLevel.getAll()}
          label={"Level *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, level: SpellLevel.NONE }))
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({ ...spell, level: SpellLevel.find(value) })
            );
          }}
        />
        <NumberField
          value={spell.drain}
          label="Drain *"
          onChange={(drain) => undefined}
        />
        <CheckField
          value={spell.chargeable}
          label="Chargeable?"
          onChange={(value: boolean) => {
            onEdit(Spell.calcDrain({ ...spell, chargeable: value }));
          }}
        />
        <CheckField
          value={spell.needsMaterial}
          label="Needs Material?"
          onChange={(value: boolean) => {
            onEdit(Spell.calcDrain({ ...spell, needsMaterial: value }));
          }}
        />
        <CheckField
          value={spell.glyph}
          label="Can be Glyph?"
          onChange={(value: boolean) => {
            onEdit(Spell.calcDrain({ ...spell, glyph: value }));
          }}
        />
        <Separator />
        <SelectField
          value={spell.rite.label}
          options={SpellRite.getAll()}
          label={"Rite *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, rite: SpellRite.NONE }))
          }
          onChange={(category: string) => {
            onEdit(
              Spell.calcDrain({ ...spell, rite: SpellRite.find(category) })
            );
          }}
        />
        <SelectField
          value={spell.duration.label}
          options={SpellDuration.getAll()}
          label={"Duration *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, duration: SpellDuration.NONE }))
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({ ...spell, duration: SpellDuration.find(value) })
            );
          }}
        />
        <SelectField
          value={spell.drainType.label}
          options={
            spell.school.label === SpellSchool.NECROMANCY.label
              ? SpellDrainType.getAll()
              : [SpellDrainType.STUN.label]
          }
          label={"Drain Type *"}
          onClear={() =>
            onEdit(
              Spell.calcDrain({ ...spell, drainType: SpellDrainType.NONE })
            )
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({
                ...spell,
                drainType: SpellDrainType.find(value),
              })
            );
          }}
        />
        <SelectField
          value={spell.castTime.label}
          options={
            spell.drainType.label === SpellDrainType.PHYSICAL.label
              ? SpellCastTime.getAllPhysical()
              : SpellCastTime.getAllStun()
          }
          label={"Casting Time *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, castTime: SpellCastTime.NONE }))
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({ ...spell, castTime: SpellCastTime.find(value) })
            );
          }}
        />
        <Separator />
        <SelectField
          value={spell.spellTarget.label}
          options={SpellTarget.getAll()}
          label={"Spell Target *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, spellTarget: SpellTarget.NONE }))
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({
                ...spell,
                spellTarget: SpellTarget.find(value),
              })
            );
          }}
        />
        <SelectField
          value={spell.range.label}
          options={SpellRange.getAll()}
          label={"Range *"}
          onClear={() =>
            onEdit(Spell.calcDrain({ ...spell, range: SpellRange.NONE }))
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({ ...spell, range: SpellRange.find(value) })
            );
          }}
        />
        <SelectField
          value={spell.targetingType.label}
          options={SpellTargetingType.getAll()}
          label={"Targeting Type *"}
          onClear={() =>
            onEdit(
              Spell.calcDrain({
                ...spell,
                targetingType: SpellTargetingType.NONE,
              })
            )
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({
                ...spell,
                targetingType: SpellTargetingType.find(value),
              })
            );
          }}
        />
        {spell.range.label === SpellRange.LOSAURA.label && (
          <SelectField
            value={spell.projectileType.label}
            options={
              spell.spellTarget.label === SpellTarget.AOE.label
                ? SpellProjectileType.getAll()
                : SpellProjectileType.getAllSingle()
            }
            label={"Projectile Type"}
            onClear={() =>
              onEdit(
                Spell.calcDrain({
                  ...spell,
                  projectileType: SpellProjectileType.NONE,
                })
              )
            }
            onChange={(value: string) => {
              onEdit(
                Spell.calcDrain({
                  ...spell,
                  projectileType: SpellProjectileType.find(value),
                })
              );
            }}
          />
        )}
        {spell.range.label === SpellRange.LOSAURA.label &&
          spell.projectileType.label !== SpellProjectileType.SPRAY.label && (
            <SelectField
              value={spell.projectileNumber.label}
              options={SpellProjectileNumber.getAll()}
              label={"Projectile Number"}
              onClear={() =>
                onEdit(
                  Spell.calcDrain({
                    ...spell,
                    projectileNumber: SpellProjectileNumber.NONE,
                  })
                )
              }
              onChange={(value: string) => {
                onEdit(
                  Spell.calcDrain({
                    ...spell,
                    projectileNumber: SpellProjectileNumber.find(value),
                  })
                );
              }}
            />
          )}
        {spell.range.label !== SpellRange.SONIC.label &&
          spell.range.label !== SpellRange.TOUCH.label &&
          spell.range.label !== SpellRange.RADIUS90.label &&
          spell.range.label !== SpellRange.RADIUS360.label && (
            <SelectField
              value={spell.losRange.label}
              options={SpellLosRange.getAll()}
              label={"Line of Sight Range"}
              onClear={() =>
                onEdit(
                  Spell.calcDrain({ ...spell, losRange: SpellLosRange.NONE })
                )
              }
              onChange={(value: string) => {
                onEdit(
                  Spell.calcDrain({
                    ...spell,
                    losRange: SpellLosRange.find(value),
                  })
                );
              }}
            />
          )}
        {spell.spellTarget.label === SpellTarget.AOE.label &&
          spell.range.label !== SpellRange.TOUCH.label &&
          spell.range.label !== SpellRange.LOSMANIPULATE.label && (
            <SelectField
              value={spell.aoeRadius.label}
              options={SpellAoeRadius.getAll()}
              label={"Area of Effect Radius"}
              onClear={() =>
                onEdit(
                  Spell.calcDrain({ ...spell, aoeRadius: SpellAoeRadius.NONE })
                )
              }
              onChange={(value: string) => {
                onEdit(
                  Spell.calcDrain({
                    ...spell,
                    aoeRadius: SpellAoeRadius.find(value),
                  })
                );
              }}
            />
          )}
        <Separator />
        <SelectField
          value={spell.damage[0]?.label}
          options={SpellDamage.getAll()}
          label={"Damage/Healing 1"}
          onClear={() => {
            let newDa = [...spell.damage];
            newDa[0] = SpellDamage.NONE;
            onEdit(Spell.calcDrain({ ...spell, damage: newDa }));
          }}
          onChange={(value: string) => {
            let newDa = [...spell.damage];
            newDa[0] = SpellDamage.find(value);
            onEdit(Spell.calcDrain({ ...spell, damage: newDa }));
          }}
        />
        <SelectField
          value={spell.damage[1]?.label}
          options={SpellDamage.getAll()}
          label={"Damage/Healing 2"}
          onClear={() => {
            let newDa = [...spell.damage];
            newDa[1] = SpellDamage.NONE;
            onEdit(Spell.calcDrain({ ...spell, damage: newDa }));
          }}
          onChange={(value: string) => {
            let newDa = [...spell.damage];
            newDa[1] = SpellDamage.find(value);
            onEdit(Spell.calcDrain({ ...spell, damage: newDa }));
          }}
        />
        <SelectField
          value={spell.damage[2]?.label}
          options={SpellDamage.getAll()}
          label={"Damage/Healing 3"}
          onClear={() => {
            let newDa = [...spell.damage];
            newDa[2] = SpellDamage.NONE;
            onEdit(Spell.calcDrain({ ...spell, damage: newDa }));
          }}
          onChange={(value: string) => {
            let newDa = [...spell.damage];
            newDa[2] = SpellDamage.find(value);
            onEdit(Spell.calcDrain({ ...spell, damage: newDa }));
          }}
        />
        {(spell.damage[0]?.label !== "" ||
          spell.damage[1]?.label !== "" ||
          spell.damage[2]?.label !== "") && (
          <SelectField
            value={spell.damageType.label}
            options={SpellDamageType.getAll()}
            label={"Damage Type"}
            onClear={() =>
              onEdit(
                Spell.calcDrain({ ...spell, damageType: SpellDamageType.NONE })
              )
            }
            onChange={(value: string) => {
              onEdit(
                Spell.calcDrain({
                  ...spell,
                  damageType: SpellDamageType.find(value),
                })
              );
            }}
          />
        )}
        <SelectField
          value={spell.scalingEffect.label}
          options={SpellScalingEffect.getAll()}
          label={"Scaling Effects"}
          onClear={() =>
            onEdit(
              Spell.calcDrain({
                ...spell,
                scalingEffect: SpellScalingEffect.NONE,
              })
            )
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({
                ...spell,
                scalingEffect: SpellScalingEffect.find(value),
              })
            );
          }}
        />

        <Separator />
        <SelectField
          value={spell.directEffects.label}
          options={SpellDirectEffects.getAll()}
          label={"Direct Effects"}
          onClear={() =>
            onEdit(
              Spell.calcDrain({
                ...spell,
                directEffects: SpellDirectEffects.NONE,
              })
            )
          }
          onChange={(value: string) => {
            onEdit(
              Spell.calcDrain({
                ...spell,
                directEffects: SpellDirectEffects.find(value),
              })
            );
          }}
        />
        {spell.directEffects.label ===
          SpellDirectEffects.WALLBARRIERCONSTRUCTSUMMON.label && (
          <>
            <SelectField
              value={spell.size.label}
              options={SpellSize.getAll()}
              label={"Shield/Structure Size"}
              onClear={() =>
                onEdit(Spell.calcDrain({ ...spell, size: SpellSize.NONE }))
              }
              onChange={(value: string) => {
                onEdit(
                  Spell.calcDrain({ ...spell, size: SpellSize.find(value) })
                );
              }}
            />
            <SelectField
              value={spell.hp.label}
              options={SpellHp.getAll()}
              label={"Armor/Hit Points"}
              onClear={() =>
                onEdit(Spell.calcDrain({ ...spell, hp: SpellHp.NONE }))
              }
              onChange={(value: string) => {
                onEdit(Spell.calcDrain({ ...spell, hp: SpellHp.find(value) }));
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
        {(spell.damageType.label === SpellDamageType.COMBINED.label ||
          spell.damageType.label === SpellDamageType.PURE.label) && (
          <SelectField
            value={spell.pureDamage.label}
            options={SpellPureDamage.getAll()}
            label={"Pure Spell Damage"}
            onClear={() =>
              onEdit(
                Spell.calcDrain({ ...spell, pureDamage: SpellPureDamage.NONE })
              )
            }
            onChange={(value: string) => {
              onEdit(
                Spell.calcDrain({
                  ...spell,
                  pureDamage: SpellPureDamage.find(value),
                })
              );
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

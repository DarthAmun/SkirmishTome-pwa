import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Spell, { SpellDuration, SpellRite, SpellSchool, SpellSource } from "../../../../data/Spell";
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
        <NumberField
          value={spell.drain}
          label="Drain"
          onChange={(drain) => onEdit({ ...spell, drain: drain })}
        />
        <SelectField
          value={{ value: spell.source, label: spell.source }}
          options={[
            { value: SpellSource.air, label: SpellSource.air },
            { value: SpellSource.arcane, label: SpellSource.arcane },
            { value: SpellSource.demonic, label: SpellSource.demonic },
            { value: SpellSource.divine, label: SpellSource.divine },
            { value: SpellSource.druidic, label: SpellSource.druidic },
            { value: SpellSource.earth, label: SpellSource.earth },
            { value: SpellSource.fire, label: SpellSource.fire },
            { value: SpellSource.frost, label: SpellSource.frost },
            { value: SpellSource.psychic, label: SpellSource.psychic },
          ]}
          label={"Source"}
          onChange={(category: string) => onEdit({ ...spell, source: category })}
        />
        <StringField
          value={spell.castTime}
          label="Casting Time"
          onChange={(value) => onEdit({ ...spell, castTime: value })}
        />
        <SelectField
          value={{ value: spell.rite, label: spell.rite }}
          options={[
            { value: SpellRite.mental, label: SpellRite.mental },
            { value: SpellRite.ritual, label: SpellRite.ritual },
            { value: SpellRite.somatic, label: SpellRite.somatic },
            { value: SpellRite.verbal, label: SpellRite.verbal },
          ]}
          label={"Source"}
          onChange={(category: string) => onEdit({ ...spell, rite: category })}
        />
        <SelectField
          value={{ value: spell.duration, label: spell.duration }}
          options={[
            { value: SpellDuration.concentration, label: SpellDuration.concentration },
            { value: SpellDuration.fixed, label: SpellDuration.fixed },
            { value: SpellDuration.instantaneous, label: SpellDuration.instantaneous },
            { value: SpellDuration.permanent, label: SpellDuration.permanent },
          ]}
          label={"Source"}
          onChange={(category: string) => onEdit({ ...spell, duration: category })}
        />
        {spell.duration === SpellDuration.fixed && (
          <StringField
            value={spell.durationText}
            label="Duration"
            onChange={(value) => onEdit({ ...spell, durationText: value })}
          />
        )}
        <NumberField
          value={spell.range}
          label="Range"
          onChange={(value) => onEdit({ ...spell, range: value })}
        />
        <SelectField
          value={{ value: spell.school, label: spell.school }}
          options={[
            { value: SpellSchool.conjuration, label: SpellSchool.conjuration },
            { value: SpellSchool.evocation, label: SpellSchool.evocation },
            { value: SpellSchool.fortification, label: SpellSchool.fortification },
            { value: SpellSchool.hex, label: SpellSchool.hex },
            { value: SpellSchool.illusion, label: SpellSchool.illusion },
            { value: SpellSchool.necromancy, label: SpellSchool.necromancy },
            { value: SpellSchool.transmutation, label: SpellSchool.transmutation },
          ]}
          label={"Source"}
          onChange={(category: string) => onEdit({ ...spell, school: category })}
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

import React from "react";
import styled from "styled-components";

import StringField from "../../../form_elements/StringField";
import NumberField from "../../../form_elements/NumberField";
import TextField from "../../../form_elements/TextField";

import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import SelectField from "../../../form_elements/SelectField";
import Skill, { SkillDie } from "../../../../data/Skill";

interface $Props {
  skill: Skill;
  onEdit: (value: Skill) => void;
}

const SkillEditView = ({ skill, onEdit }: $Props) => {
  return (
    <CenterWrapper>
      <View>
        <FieldGroup>
          <StringField
            value={skill.name}
            label="Name"
            onChange={(name) => onEdit({ ...skill, name: name })}
          />
        </FieldGroup>
        <FieldGroup>
          <SelectField
            value={skill.die}
            options={[
              SkillDie.dfour,
              SkillDie.dsix,
              SkillDie.deight,
              SkillDie.dten,
              SkillDie.dtwelve,
            ]}
            label={"Die"}
            onClear={() => onEdit({ ...skill, die: "" })}
            onChange={(category: string) => onEdit({ ...skill, die: category })}
          />
          <NumberField
            value={skill.bonus}
            label="Bonus"
            onChange={(cost) => onEdit({ ...skill, bonus: cost })}
          />
          <StringField
            value={skill.mod}
            label="Mod"
            onChange={(name) => onEdit({ ...skill, mod: name })}
          />
          <NumberField
            value={skill.advantage}
            label="Advantage"
            onChange={(cost) => onEdit({ ...skill, advantage: cost })}
          />
          <NumberField
            value={skill.disadvantage}
            label="Disadvantage"
            onChange={(cost) => onEdit({ ...skill, disadvantage: cost })}
          />
        </FieldGroup>
        <TextField
          value={skill.details}
          label="Details"
          icon={faBookOpen}
          onChange={(prerequisite) =>
            onEdit({ ...skill, details: prerequisite })
          }
        />
      </View>
    </CenterWrapper>
  );
};

export default SkillEditView;

const CenterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const FieldGroup = styled.div`
  flex: 2 1 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
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

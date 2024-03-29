import React from "react";
import styled from "styled-components";
import Talent, { TalentCategory, TalentType } from "../../../../data/Talent";

import StringField from "../../../form_elements/StringField";
import NumberField from "../../../form_elements/NumberField";
import TextField from "../../../form_elements/TextField";
import CheckField from "../../../form_elements/CheckField";

import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import SelectField from "../../../form_elements/SelectField";
import { makeEnumSelectable } from "../../../../services/EnumService";

interface $Props {
  talent: Talent;
  onEdit: (value: Talent) => void;
}

const TalentEditView = ({ talent, onEdit }: $Props) => {
  return (
    <CenterWrapper>
      <View>
        <FieldGroup>
          <StringField
            value={talent.name}
            label="Name"
            onChange={(name) => onEdit({ ...talent, name: name })}
          />
          <CheckField
            value={!!talent.isFlaw}
            label="Is Flaw?"
            onChange={(isFlaw) => onEdit({ ...talent, isFlaw: isFlaw })}
          />
        </FieldGroup>
        <NumberField
          value={talent.cost}
          label="Cost"
          onChange={(cost) => onEdit({ ...talent, cost: cost })}
        />
        <SelectField
          value={talent.type}
          options={makeEnumSelectable(TalentType)}
          label={"Type"}
          onClear={() => onEdit({ ...talent, type: TalentType.passiv })}
          onChange={(type: string) => onEdit({ ...talent, type: type })}
        />
        <SelectField
          value={talent.category}
          options={[
            TalentCategory.magical,
            TalentCategory.mental,
            TalentCategory.physical,
            TalentCategory.social,
          ]}
          label={"Category"}
          onClear={() => onEdit({ ...talent, category: "" })}
          onChange={(category: string) =>
            onEdit({ ...talent, category: category })
          }
        />
        <TextField
          value={talent.prerequisite}
          label="Prerequisite"
          icon={faBookOpen}
          onChange={(prerequisite) =>
            onEdit({ ...talent, prerequisite: prerequisite })
          }
        />
        <TextField
          value={talent.effect}
          label="Effect"
          icon={faBookOpen}
          onChange={(effect) => onEdit({ ...talent, effect: effect })}
        />
        {talent.isFlaw && talent.type && (
          <StringField
            value={talent.triggerFrequency}
            label="Trigger Frequency"
            onChange={(triggerFrequency) =>
              onEdit({ ...talent, triggerFrequency: triggerFrequency })
            }
          />
        )}
      </View>
    </CenterWrapper>
  );
};

export default TalentEditView;

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

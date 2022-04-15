import React from "react";
import styled from "styled-components";

import StringField from "../../../form_elements/StringField";
import NumberField from "../../../form_elements/NumberField";
import TextField from "../../../form_elements/TextField";
import CheckField from "../../../form_elements/CheckField";

import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import SelectField from "../../../form_elements/SelectField";
import Power from "../../../../data/Power";

interface $Props {
  power: Power;
  onEdit: (value: Power) => void;
}

const PowerEditView = ({ power, onEdit }: $Props) => {
  return (
    <CenterWrapper>
      <View>
        <FieldGroup>
          <StringField
            value={power.name}
            label="Name"
            onChange={(name) => onEdit({ ...power, name: name })}
          />
        </FieldGroup>
        <FieldGroup>
          <NumberField
            value={power.cost}
            label="Cost"
            onChange={(cost) => onEdit({ ...power, cost: cost })}
          />
          <CheckField
            value={!!power.type}
            label="Is Active?"
            onChange={(type) => onEdit({ ...power, type: type })}
          />
          {power.type && (
            <NumberField
              value={power.ticks}
              label="Ticks"
              onChange={(cost) => onEdit({ ...power, ticks: cost })}
            />
          )}
          <CheckField
            value={!!power.isAdept}
            label="Is Adept?"
            onChange={(type) => onEdit({ ...power, isAdept: type })}
          />
          <StringField
            value={power.path}
            label="Path"
            onChange={(name) => onEdit({ ...power, path: name })}
          />
        </FieldGroup>
        <TextField
          value={power.prerequisite}
          label="Prerequisite"
          icon={faBookOpen}
          onChange={(prerequisite) =>
            onEdit({ ...power, prerequisite: prerequisite })
          }
        />
        <TextField
          value={power.effect}
          label="Effect"
          icon={faBookOpen}
          onChange={(effect) => onEdit({ ...power, effect: effect })}
        />
        <TextField
          value={power.stress}
          label="Stress"
          icon={faBookOpen}
          onChange={(effect) => onEdit({ ...power, stress: effect })}
        />
      </View>
    </CenterWrapper>
  );
};

export default PowerEditView;

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

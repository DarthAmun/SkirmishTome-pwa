import React from "react";
import styled from "styled-components";

import StringField from "../../../form_elements/StringField";
import NumberField from "../../../form_elements/NumberField";
import TextField from "../../../form_elements/TextField";
import CheckField from "../../../form_elements/CheckField";

import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Tradition from "../../../../data/Tradition";

interface $Props {
  tradition: Tradition;
  onEdit: (value: Tradition) => void;
}

const TraditionEditView = ({ tradition, onEdit }: $Props) => {
  return (
    <CenterWrapper>
      <View>
        <FieldGroup>
          <StringField
            value={tradition.name}
            label="Name"
            onChange={(name) => onEdit({ ...tradition, name: name })}
          />
        </FieldGroup>
        <FieldGroup>
          <CheckField
            value={!!tradition.isPath}
            label="Is Path?"
            onChange={(type) => onEdit({ ...tradition, isPath: type })}
          />
        </FieldGroup>
      </View>
    </CenterWrapper>
  );
};

export default TraditionEditView;

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

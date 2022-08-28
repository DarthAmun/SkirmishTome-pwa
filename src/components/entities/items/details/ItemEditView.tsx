import React from "react";
import styled from "styled-components";

import StringField from "../../../form_elements/StringField";
import NumberField from "../../../form_elements/NumberField";
import TextField from "../../../form_elements/TextField";
import CheckField from "../../../form_elements/CheckField";

import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Item from "../../../../data/Item";

interface $Props {
  item: Item;
  onEdit: (value: Item) => void;
}

const ItemEditView = ({ item, onEdit }: $Props) => {
  return (
    <CenterWrapper>
      <View>
        <FieldGroup>
          <StringField
            value={item.name}
            label="Name"
            onChange={(name) => onEdit({ ...item, name: name })}
          />
        </FieldGroup>
        <FieldGroup>
          <StringField
            value={item.quality}
            label="Quality"
            onChange={(name) => onEdit({ ...item, quality: name })}
          />
        </FieldGroup>
        <TextField
          value={item.description}
          label="Description"
          icon={faBookOpen}
          onChange={(effect) => onEdit({ ...item, description: effect })}
        />
      </View>
    </CenterWrapper>
  );
};

export default ItemEditView;

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

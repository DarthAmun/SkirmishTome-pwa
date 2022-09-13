import React from "react";
import styled from "styled-components";

import StringField from "../../../form_elements/StringField";
import CheckField from "../../../form_elements/CheckField";

import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Tradition from "../../../../data/Tradition";
import AutoStringField from "../../../form_elements/AutoStringField";
import IconButton from "../../../form_elements/IconButton";
import TextButton from "../../../form_elements/TextButton";

interface $Props {
  tradition: Tradition;
  onEdit: (value: Tradition) => void;
}

const TraditionEditView = ({ tradition, onEdit }: $Props) => {
  const removePower = (oldPower: string) => {
    let newPowerList = tradition.powers.filter((power) => power !== oldPower);
    onEdit({ ...tradition, powers: newPowerList });
  };
  const addNewPower = () => {
    let newPowerList = [...tradition.powers];
    newPowerList.push("");
    onEdit({ ...tradition, powers: newPowerList });
  };
  const onChangePower = (newPower: string, i: number) => {
    let powers = [...tradition.powers];
    powers[i] = newPower;
    onEdit({ ...tradition, powers: powers });
  };

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
        {tradition.powers.map((power: string, index: number) => {
          return (
            <Container key={index}>
              <AutoStringField
                optionTable={"powers"}
                value={power}
                label="Power"
                onChange={(newPower) => onChangePower(newPower, index)}
              />
              <IconButton icon={faTrash} onClick={() => removePower(power)} />
            </Container>
          );
        })}
        <TextButton
          text={"Add new Power"}
          icon={faPlus}
          onClick={() => addNewPower()}
        />
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1 1 100%;
`;

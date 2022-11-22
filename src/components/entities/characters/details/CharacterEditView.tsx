import React from "react";
import styled from "styled-components";
import Character from "../../../../data/Character";

import StringField from "../../../form_elements/StringField";
import NumberField from "../../../form_elements/NumberField";
import AutoStringField from "../../../form_elements/AutoStringField";
import IconButton from "../../../form_elements/IconButton";
import { faTrash, faPlus, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import TextButton from "../../../form_elements/TextButton";
import SelectField from "../../../form_elements/SelectField";
import { makeEnumSelectable } from "../../../../services/EnumService";
import TextField from "../../../form_elements/TextField";

interface $Props {
  character: Character;
  onEdit: (value: Character) => void;
}

const CharacterEditView = ({ character, onEdit }: $Props) => {
  const removeTalent = (oldTalent: string) => {
    let newTalentList = character.talents.filter((talent) => talent !== oldTalent);
    onEdit({ ...character, talents: newTalentList });
  };
  const addNewTalent = () => {
    let newTalentList = [...character.talents];
    newTalentList.push("");
    onEdit({ ...character, talents: newTalentList });
  };
  const onChangeTalent = (newTalent: string, i: number) => {
    let talents = [...character.talents];
    talents[i] = newTalent;
    onEdit({ ...character, talents: talents });
  };

  const removeFlaw = (oldFlaw: string) => {
    let newFlawList = character.flaws.filter((flaw) => flaw !== oldFlaw);
    onEdit({ ...character, flaws: newFlawList });
  };
  const addNewFlaw = () => {
    let newFlawList = [...character.flaws];
    newFlawList.push("");
    onEdit({ ...character, flaws: newFlawList });
  };
  const onChangeFlaw = (newFlaw: string, i: number) => {
    let flaws = [...character.flaws];
    flaws[i] = newFlaw;
    onEdit({ ...character, flaws: flaws });
  };

  return (
    <CenterWrapper>
      <View>
        <StringField
          value={character.name}
          label="Name"
          onChange={(name) => onEdit({ ...character, name: name })}
        />
       
      </View>
    </CenterWrapper>
  );
};

export default CharacterEditView;

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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1 1 100%;
`;

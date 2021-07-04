import React from "react";
import styled from "styled-components";
import Race from "../../../../data/Race";

import StringField from "../../../form_elements/StringField";
import NumberField from "../../../form_elements/NumberField";
import AutoStringField from "../../../form_elements/AutoStringField";
import IconButton from "../../../form_elements/IconButton";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import TextButton from "../../../form_elements/TextButton";

interface $Props {
  race: Race;
  onEdit: (value: Race) => void;
}

const RaceEditView = ({ race, onEdit }: $Props) => {
  const removeTalent = (oldTalent: string) => {
    let newTalentList = race.talents.filter((talent) => talent !== oldTalent);
    onEdit({ ...race, talents: newTalentList });
  };
  const addNewTalent = () => {
    let newTalentList = [...race.talents];
    newTalentList.push("");
    onEdit({ ...race, talents: newTalentList });
  };
  const onChangeTalent = (newTalent: string, i: number) => {
    let talents = [...race.talents];
    talents[i] = newTalent;
    onEdit({ ...race, talents: talents });
  };

  const removeFlaw = (oldFlaw: string) => {
    let newFlawList = race.flaws.filter((flaw) => flaw !== oldFlaw);
    onEdit({ ...race, flaws: newFlawList });
  };
  const addNewFlaw = () => {
    let newFlawList = [...race.flaws];
    newFlawList.push("");
    onEdit({ ...race, flaws: newFlawList });
  };
  const onChangeFlaw = (newFlaw: string, i: number) => {
    let flaws = [...race.flaws];
    flaws[i] = newFlaw;
    onEdit({ ...race, flaws: flaws });
  };

  return (
    <CenterWrapper>
      <View>
        <StringField
          value={race.name}
          label="Name"
          onChange={(name) => onEdit({ ...race, name: name })}
        />
        <NumberField
          value={race.hp}
          label="Hp"
          onChange={(value) => onEdit({ ...race, hp: value })}
        />
        <NumberField
          value={race.stamina}
          label="Stamina"
          onChange={(value) => onEdit({ ...race, stamina: value })}
        />
        <StringField
          value={race.size}
          label="Size"
          onChange={(value) => onEdit({ ...race, size: value })}
        />
        <StringField
          value={race.abilityModifier}
          label="Ability Modifier"
          onChange={(abilityModifier) => onEdit({ ...race, abilityModifier: abilityModifier })}
        />
        {race.talents.map((talent: string, index: number) => {
          return (
            <Container key={index}>
              <AutoStringField
                optionTable={"talents"}
                filters={[{ fieldName: "isFlaw", value: false, sort: 0 }]}
                value={talent}
                label="Talent"
                onChange={(newTalent) => onChangeTalent(newTalent, index)}
              />
              <IconButton icon={faTrash} onClick={() => removeTalent(talent)} />
            </Container>
          );
        })}
        <TextButton text={"Add new Talent"} icon={faPlus} onClick={() => addNewTalent()} />

        {race.flaws.map((flaw: string, index: number) => {
          return (
            <Container key={index}>
              <AutoStringField
                optionTable={"talents"}
                filters={[{ fieldName: "isFlaw", value: true, sort: 0 }]}
                value={flaw}
                label="Flaw"
                onChange={(newFlaw) => onChangeFlaw(newFlaw, index)}
              />
              <IconButton icon={faTrash} onClick={() => removeFlaw(flaw)} />
            </Container>
          );
        })}
        <TextButton text={"Add new Flaw"} icon={faPlus} onClick={() => addNewFlaw()} />
      </View>
    </CenterWrapper>
  );
};

export default RaceEditView;

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

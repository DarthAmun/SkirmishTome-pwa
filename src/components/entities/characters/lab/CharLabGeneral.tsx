import React from "react";
import styled from "styled-components";

import IconButton from "../../../form_elements/IconButton";
import StringField from "../../../form_elements/StringField";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Lab from "../../../../data/Lab";

interface $Props {
  lab: Lab;
  onChange: (lab: Lab) => void;
  completed: (completed: boolean, nextTab: string) => void;
}

const CharLabGeneral = ({ lab, onChange, completed }: $Props) => {
  return (
    <CenterWrapper>
      <CharView>
        <StringField
          value={lab.char.name}
          label="Name *"
          onChange={(name) => onChange({ ...lab, char: {...lab.char, name: name }})}
        />
        <StringField
          value={lab.char.player}
          label="Player *"
          onChange={(player) => onChange({ ...lab, char: {...lab.char, player: player }})}
        />
        <StringField
          value={lab.char.pic}
          label="Picture"
          onChange={(pic) => onChange({ ...lab, char: {...lab.char, pic: pic  }})}
        />
        <IconButton
          icon={faCheckCircle}
          disabled={!(lab.char && lab.char.name.length > 1 && lab.char.player.length > 1)}
          onClick={() => completed(true, "Matrix")}
        />
      </CharView>
    </CenterWrapper>
  );
};

export default CharLabGeneral;

const CenterWrapper = styled.div`
  overflow: visible;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CharView = styled.div`
  color: ${({ theme }) => theme.tile.color};
  font-size: 16px;
  flex: 1 1 600px;
  padding: 5px;
  margin: 5px;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: stretch;
`;

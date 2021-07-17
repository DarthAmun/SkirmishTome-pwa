import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Spell from "../../../../data/Spell";
import NumberField from "../../../form_elements/NumberField";

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

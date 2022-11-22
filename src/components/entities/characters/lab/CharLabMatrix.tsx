import React from "react";
import styled from "styled-components";

import IconButton from "../../../form_elements/IconButton";
import StringField from "../../../form_elements/StringField";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Character from "../../../../data/Character";

interface $Props {
  char: Character;
  onChange: (character: Character) => void;
  completed: (completed: boolean, nextTab: string) => void;
}

const CharLabMatrix = ({ char, onChange, completed }: $Props) => {
  return (
    <CenterWrapper>
      <CharView>
        <CharSelectionMatrix>
          <CharSelectionMatrixHeaderRow>
            <HeaderSection>Origin</HeaderSection>
            <HeaderSection>Race</HeaderSection>
            <HeaderSection>Abilities</HeaderSection>
            <HeaderSection>Magic/Faith</HeaderSection>
            <HeaderSection>Talents</HeaderSection>
            <HeaderSection>Skills</HeaderSection>
          </CharSelectionMatrixHeaderRow>
          <CharSelectionMatrixRow>
            <MatrixSection>
              Royal/Knight <br></br> 500 Neekon
            </MatrixSection>
            <MatrixSection>
              Gained Talents: Privileged Gifted <br></br> Choose any of the
              races below
            </MatrixSection>
            <MatrixSection>
              3x D6<br></br>
              6x D4<br></br>
              +25 Ap
            </MatrixSection>
            <MatrixSection>
              Magic/Faith rating: 7 Enables Adapt & Spellcasting Talents
              <br></br>
              12 Spell Points (6 Power Points)
            </MatrixSection>
            <MatrixSection>5 Talent Points</MatrixSection>
            <MatrixSection>
              All Categories 25 Free Points <br></br>4 Group Points
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection>
              Knight/Noble <br></br> 350 Neekon
            </MatrixSection>
            <MatrixSection>
              Giant Halfblood Faeborn <br></br> or any of the races below +1
              TalentPoint
            </MatrixSection>
            <MatrixSection>
              3x D6<br></br>
              6x D4<br></br>
              +22 Ap
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection>
              Noble/Scholar <br></br> 250 Neekon
            </MatrixSection>
            <MatrixSection>
              Genome Elf <br></br> or any of the races below +1 TalentPoint
            </MatrixSection>
            <MatrixSection>
              3x D6<br></br>
              6x D4<br></br>
              +20 Ap
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection>
              Scholar/Worker <br></br> 200 Neekon
            </MatrixSection>
            <MatrixSection>
              Orcish Halfblood Dwarf <br></br> or any of the races below +1
              TalentPoint
            </MatrixSection>
            <MatrixSection>
              1x D8<br></br>
              5x D6<br></br>
              3x D4<br></br>
              +10 Ap
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection>
              Worker/Outlaw <br></br> 150 Neekon
            </MatrixSection>
            <MatrixSection>
              Elven Halfblood Goblin Halfblood <br></br> or any of the races
              below +1 TalentPoint
            </MatrixSection>
            <MatrixSection>
              2x D8<br></br>
              5x D6<br></br>
              2x D4<br></br>
              +4 Ap
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection>
              Ourlaw/Slave <br></br> 75 Neekon
            </MatrixSection>
            <MatrixSection>Human</MatrixSection>
            <MatrixSection>
              3x D8<br></br>
              4x D6<br></br>
              2x D4<br></br>
            </MatrixSection>
          </CharSelectionMatrixRow>
        </CharSelectionMatrix>

        <IconButton
          icon={faCheckCircle}
          disabled={!(char && char.name.length > 1 && char.player.length > 1)}
          onClick={() => completed(true, "Class")}
        />
      </CharView>
    </CenterWrapper>
  );
};

export default CharLabMatrix;

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

const CharSelectionMatrix = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CharSelectionMatrixHeaderRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;
const HeaderSection = styled.div`
  padding: 10px;
`;
const CharSelectionMatrixRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  align-items: stretch;
`;
const MatrixSection = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 1px white solid;
  
`;

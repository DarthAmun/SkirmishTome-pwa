import React, { useEffect, useState } from "react";
import styled from "styled-components";

import IconButton from "../../../form_elements/IconButton";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Character from "../../../../data/Character";
import Race from "../../../../data/Race";
import { reciveAll } from "../../../../services/DatabaseService";

interface $Props {
  char: Character;
  onChange: (character: Character) => void;
  completed: (completed: boolean, nextTab: string) => void;
}

const CharLabMatrix = ({ char, onChange, completed }: $Props) => {

  const [selection, setSelection] = useState<boolean[][]>(Array(6).fill(Array(6).fill(false)));
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    reciveAll("races", (results: any[]) => {
      setRaces(results);
    });

    let newSelection: boolean[][] = [];
    newSelection.push([false,false,false,false,false,false])
    newSelection.push([false,false,false,false,false,false])
    newSelection.push([false,false,false,false,false,false])
    newSelection.push([false,false,false,false,false,false])
    newSelection.push([false,false,false,false,false,false])
    newSelection.push([false,false,false,false,false,false])
    setSelection(newSelection)
  }, []);

  const makeSelection = (row: number, col: number) => {
    let newSelection = Array.from(selection);

    for(let i: number = 0; i<6; i++) {
      for(let j: number = 0; j<6; j++) {
        if(i == row || j == col)
        newSelection[i][j] = false;
      }
    }

    newSelection[row][col] = true;
    setSelection(Array.from(newSelection));
  }

  const isValid = () => {
    let valids: number = 0;
    for(let i: number = 0; i<6; i++) {
      for(let j: number = 0; j<6; j++) {
        if(selection[i][j]) valids++;
      }
    }
    return valids >= 6;
  }

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
            <MatrixSection type={selection[0][0]} onClick={() => makeSelection(0,0)}>
              Royal/Knight <br></br> 500 Neekon
            </MatrixSection>
            <MatrixSection type={selection[1][0]} onClick={() => makeSelection(1,0)}>
              Gained Talents: Privileged Gifted <br></br> Choose any of the any
              race
            </MatrixSection>
            <MatrixSection type={selection[2][0]} onClick={() => makeSelection(2,0)}>
              3x D6<br></br>
              6x D4<br></br>
              +25 Ap
            </MatrixSection>
            <MatrixSection type={selection[3][0]} onClick={() => makeSelection(3,0)}>
              Magic/Faith rating: 7 Enables Adapt & Spellcasting Talents
              <br></br>
              12 Spell Points (6 Power Points)
            </MatrixSection>
            <MatrixSection type={selection[4][0]} onClick={() => makeSelection(4,0)}>5 Talent Points</MatrixSection>
            <MatrixSection type={selection[5][0]} onClick={() => makeSelection(5,0)}>
              All Categories 25 Free Points <br></br>4 Group Points
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection type={selection[0][1]} onClick={() => makeSelection(0,1)}>
              Knight/Noble <br></br> 350 Neekon
            </MatrixSection>
            <MatrixSection type={selection[1][1]} onClick={() => makeSelection(1,1)}>
              {races.filter((race) => race.rarity === 1)}
              <br></br> or any of the races below +1 TalentPoint
            </MatrixSection>
            <MatrixSection type={selection[2][1]} onClick={() => makeSelection(2,1)}>
              3x D6<br></br>
              6x D4<br></br>
              +22 Ap
            </MatrixSection>
            <MatrixSection type={selection[3][1]} onClick={() => makeSelection(3,1)}>
              Magic/Faith rating: 5 Enables Adapt & Spellcasting Talents
              <br></br>
              8 Spell Points (4 Power Points)
            </MatrixSection>
            <MatrixSection type={selection[4][1]} onClick={() => makeSelection(4,1)}>4 Talent Points</MatrixSection>
            <MatrixSection type={selection[5][1]} onClick={() => makeSelection(5,1)}>
              All Categories 22 Free Points <br></br>4 Group Points
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection type={selection[0][2]} onClick={() => makeSelection(0,2)}>
              Noble/Scholar <br></br> 250 Neekon
            </MatrixSection>
            <MatrixSection type={selection[1][2]} onClick={() => makeSelection(1,2)}>
              {races.filter((race) => race.rarity === 2)}
              <br></br> or any of the races below +1 TalentPoint
            </MatrixSection>
            <MatrixSection type={selection[2][2]} onClick={() => makeSelection(2,2)}>
              3x D6<br></br>
              6x D4<br></br>
              +20 Ap
            </MatrixSection>
            <MatrixSection type={selection[3][2]} onClick={() => makeSelection(3,2)}>
              Magic/Faith rating: 4 Enables Adapt & Spellcasting Talents
              <br></br>
              6 Spell Points (3 Power Points)
            </MatrixSection>
            <MatrixSection type={selection[4][2]} onClick={() => makeSelection(4,2)}>4 Talent Points</MatrixSection>
            <MatrixSection type={selection[5][2]} onClick={() => makeSelection(5,2)}>
              All Categories 20 Free Points <br></br>3 Group Points
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection type={selection[0][3]} onClick={() => makeSelection(0,3)}>
              Scholar/Worker <br></br> 200 Neekon
            </MatrixSection>
            <MatrixSection type={selection[1][3]} onClick={() => makeSelection(1,3)}>
              {races.filter((race) => race.rarity === 3)} <br></br> or any of
              the races below +1 TalentPoint
            </MatrixSection>
            <MatrixSection type={selection[2][3]} onClick={() => makeSelection(2,3)}>
              1x D8<br></br>
              5x D6<br></br>
              3x D4<br></br>
              +10 Ap
            </MatrixSection>
            <MatrixSection type={selection[3][3]} onClick={() => makeSelection(3,3)}>
              Magic/Faith rating: 3 Unable to use powers & spells but may use magically charged items and has gift of sixth sense.
            </MatrixSection>
            <MatrixSection type={selection[4][3]} onClick={() => makeSelection(4,3)}>3 Talent Points</MatrixSection>
            <MatrixSection type={selection[5][3]} onClick={() => makeSelection(5,3)}>
              All Categories 18 Free Points <br></br>3 Group Points
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection type={selection[0][4]} onClick={() => makeSelection(0,4)}>
              Worker/Outlaw <br></br> 150 Neekon
            </MatrixSection>
            <MatrixSection type={selection[1][4]} onClick={() => makeSelection(1,4)}>
              {races.filter((race) => race.rarity === 4)} <br></br> or any of
              the races below +1 TalentPoint
            </MatrixSection>
            <MatrixSection type={selection[2][4]} onClick={() => makeSelection(2,4)}>
              2x D8<br></br>
              5x D6<br></br>
              2x D4<br></br>
              +4 Ap
            </MatrixSection>
            <MatrixSection type={selection[3][4]} onClick={() => makeSelection(3,4)}>
              Magic/Faith rating: 1 Unable to use powers & spells but may use magically charged items and has gift of sixth sense.
            </MatrixSection>
            <MatrixSection type={selection[4][4]} onClick={() => makeSelection(4,4)}>3 Talent Points</MatrixSection>
            <MatrixSection type={selection[5][4]} onClick={() => makeSelection(5,4)}>
              All Categories 16 Free Points <br></br>3 Group Points
            </MatrixSection>
          </CharSelectionMatrixRow>
          <CharSelectionMatrixRow>
            <MatrixSection type={selection[0][5]} onClick={() => makeSelection(0,5)}>
              Ourlaw/Slave <br></br> 75 Neekon
            </MatrixSection>
            <MatrixSection type={selection[1][5]} onClick={() => makeSelection(1,5)}>
              {races.filter((race) => race.rarity === 5)}
            </MatrixSection>
            <MatrixSection type={selection[2][5]} onClick={() => makeSelection(2,5)}>
              3x D8<br></br>
              4x D6<br></br>
              2x D4<br></br>
            </MatrixSection>
            <MatrixSection type={selection[3][5]} onClick={() => makeSelection(3,5)}>
              Magic/Faith rating: 0 Unable to use powers & spells but may use magically charged items and has gift of sixth sense.
            </MatrixSection>
            <MatrixSection type={selection[4][5]} onClick={() => makeSelection(4,5)}>3 Talent Points</MatrixSection>
            <MatrixSection type={selection[5][5]} onClick={() => makeSelection(5,5)}>
              All Categories 15 Free Points <br></br>3 Group Points
            </MatrixSection>
          </CharSelectionMatrixRow>
        </CharSelectionMatrix>

        <IconButton
          icon={faCheckCircle}
          disabled={!(char && char.name.length > 1 && char.player.length > 1 && isValid())}
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

type SelectionType = {
  type?: boolean;
};

const MatrixSection = styled.div<SelectionType>`
  padding: 10px;
  border-radius: 10px;
  border: 1px white solid;

  cursor: pointer;

  background-color: ${(props) => {
    return props.type ? "lightblue" : "none";
  }};
`;

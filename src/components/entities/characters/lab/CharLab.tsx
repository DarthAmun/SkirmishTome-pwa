import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { saveWithCallback } from "../../../../services/DatabaseService";

import { faCheckCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../form_elements/IconButton";
import TabBar from "../../../general_elements/TabBar";
import CharLabGeneral from "./CharLabGeneral";
import { useQuery } from "../../../../hooks/QueryHook";
import Character from "../../../../data/Character";
import CharacterView from "../details/CharacterView";
import CharLabMatrix from "./CharLabMatrix";
import Lab from "../../../../data/Lab";

const CharLab = () => {
  let history = useHistory();
  const name = useQuery().get("name");
  const [activeTab, setTab] = useState<string>("General");

  const [lab, updateLab] = useState<Lab>(
    new Lab([], new Character(-1, name !== null ? name : ""))
  );

  const [completedGeneral, setGeneral] = useState<boolean>(false);
  const [completedMatrix, setMatrix] = useState<boolean>(false);

  const updateGeneral = (value: boolean, nextTab: string) => {
    setGeneral(value);
    setTab(nextTab);
  };
  const updateMatrix = (value: boolean, nextTab: string) => {
    setMatrix(value);
    setTab(nextTab);
  };

  const saveChar = () => {
    // recalcClasses(lab).then((updatedChar) => {
    //   delete updatedChar["id"];
    //   saveWithCallback("chars", updatedChar, (result) => {
    //     history.push(`/char-detail/id/${result}`);
    //   });
    // });
  };

  return (
    <>
      <TabBar
        children={["General", "Matrix", "Finished"]}
        onChange={(tab: string) => setTab(tab)}
        activeTab={activeTab}
      />
      <CenterWrapper>
        <View>
          {activeTab === "General" && (
            <>
              {!completedGeneral && (
                <CharLabGeneral
                  lab={lab}
                  onChange={updateLab}
                  completed={updateGeneral}
                />
              )}
              {completedGeneral && (
                <PropWrapper>
                  <Prop>Would you like to edit general again? </Prop>
                  <IconButton icon={faEdit} onClick={() => setGeneral(false)} />
                </PropWrapper>
              )}
            </>
          )}
          {activeTab === "Matrix" && (
            <>
              {!completedMatrix && (
                <CharLabMatrix
                  lab={lab}
                  onChange={updateLab}
                  completed={updateGeneral}
                />
              )}
              {completedMatrix && (
                <PropWrapper>
                  <Prop>Would you like to edit matrix again? </Prop>
                  <IconButton icon={faEdit} onClick={() => setMatrix(false)} />
                </PropWrapper>
              )}
            </>
          )}
          {activeTab === "Finished" && (
            <>
              {(!completedGeneral || !completedMatrix) && (
                <PropWrapper>
                  <Prop>Somthing is not finished!</Prop>
                </PropWrapper>
              )}
              {completedGeneral && completedMatrix && (
                <>
                  <PropWrapper>
                    <Prop>Create Char?</Prop>
                    <IconButton
                      icon={faCheckCircle}
                      onClick={() => saveChar()}
                    />
                  </PropWrapper>
                  <CharacterView
                    character={lab.char}
                    // saveChar={() => undefined}
                  ></CharacterView>
                </>
              )}
            </>
          )}
        </View>
      </CenterWrapper>
    </>
  );
};

export default CharLab;

const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const View = styled.div`
  color: ${({ theme }) => theme.tile.color};
  font-size: 16px;
  flex: 1 1 auto;
  padding: 5px;
  margin: 5px;
  height: 100%;
  width: min-content;
  min-width: 300px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const PropWrapper = styled.div`
  width: calc(100% - 6px);
  float: left;
  padding: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Prop = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
  height: auto;
  margin: 2px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.tile.backgroundColor};

  svg {
    margin-right: 5px;
    height: auto;
    border-radius: 150px;
    transition: color 0.2s;
    color: ${({ theme }) => theme.main.highlight};
  }
`;

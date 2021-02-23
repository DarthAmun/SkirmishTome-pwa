import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { exportAll } from "../../services/OptionService";
import { deleteAll, reciveCount } from "../../services/DatabaseService";
import IEntity from "../../data/IEntity";
import P2PReciver from "../p2p/P2PReciver";

import { isSpell } from "../../data/Spell";

import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import TabBar from "../general_elements/TabBar";
import IconButton from "../form_elements/IconButton";
import SpellTile from "../entities/spells/SpellTile";
import GeneralOptions from "./GeneralOptions";
import SpellsOptions from "./SpellsOptions";
import ImportField, { ImportModus } from "../form_elements/ImportField";
import DiscordOptions from "./DiscordOptions";

const Options = () => {
  const [activeTab, setTab] = useState<string>("General");

  const [spellAmount, setSpellAmount] = useState<number>(0);

  const [reload, isReload] = useState<boolean>(true);
  const [data, setData] = useState<IEntity[] | IEntity>();

  useEffect(() => {
    if (reload) {
      reciveCount("spells", (result: number) => {
        setSpellAmount(result);
      });
      isReload(false);
    }
  }, [reload]);

  const triggerDeleteAll = (tableName: string) => {
    deleteAll(tableName);
    isReload(true);
  };

  const returnTile = (entity: IEntity, index: number) => {
    if (isSpell(entity)) {
      return <SpellTile key={index} spell={entity} />;
    } else {
      return <OptionSection key={index}>{entity.name}</OptionSection>;
    }
  };

  return (
    <>
      <OptionSection>
        <SelectionTitle>Import</SelectionTitle>
        <ImportField modus={ImportModus.NORMAL} />
      </OptionSection>
      <OptionSection>
        <SelectionTitle>Export</SelectionTitle>
        <SectionRow>
          <SectionText>Export as one file?</SectionText>
          <IconButton icon={faFileExport} onClick={() => exportAll("SkirmishTome_all.json")} />
        </SectionRow>
      </OptionSection>
      <TabBar
        children={["General", "Spells", "Discord", "Receive"]}
        onChange={(tab: string) => setTab(tab)}
        activeTab={activeTab}
      />
      {activeTab === "General" && <GeneralOptions />}
      {activeTab === "Spells" && (
        <SpellsOptions amount={spellAmount} triggerDeleteAll={triggerDeleteAll} />
      )}
      {activeTab === "Discord" && <DiscordOptions />}
      {activeTab === "Receive" && (
        <OptionTab>
          <OptionSectionLarge>
            <P2PReciver reload={isReload} changeData={setData} />
          </OptionSectionLarge>
          {data !== undefined &&
            Array.isArray(data) &&
            data.map((entity: IEntity, index: number) => {
              return returnTile(entity, index);
            })}
          {data !== undefined && !Array.isArray(data) && returnTile(data, 0)}
        </OptionTab>
      )}
      {/* {failedObjs &&
        failedObjs.length > 0 &&
        failedObjs.map((obj: string, index: number) => {
          return (
            <OptionSection key={index}>
              <SelectionTitle>Formatt Errors</SelectionTitle>
              <SectionText>
                <pre>{obj}</pre>
              </SectionText>
            </OptionSection>
          );
        })} */}
    </>
  );
};

export default Options;

const General = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

const OptionTab = styled(General)`
  flex: 1 1 auto;
`;

const OptionSection = styled(General)`
  flex: 1 1 auto;
  color: ${({ theme }) => theme.tile.color};
  background-color: ${({ theme }) => theme.tile.backgroundColor};
  margin: 0.5em;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.tile.boxShadow};
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

const OptionSectionLarge = styled(OptionSection)`
  width: calc(100% - 1em);
`;

const SelectionTitle = styled.div`
  flex: 1 1 auto;
  padding: 5px;
  margin: 5px;
  min-width: calc(100% - 20px);
  font-weight: bold;
  text-algin: center;
  border-radius: 5px;
  color: ${({ theme }) => theme.input.color};
  background-color: ${({ theme }) => theme.input.backgroundColor};
`;

const SectionRow = styled.div`
  flex: 1 1 auto;
  margin: 5px;
  min-width: calc(100% - 10px);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
`;

const SectionText = styled.div`
  flex: 1 1 auto;
`;

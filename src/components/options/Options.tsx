import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { exportAll } from "../../services/OptionService";
import {
  deleteAll,
  reciveCount,
} from "../../services/DatabaseService";
import IEntity from "../../data/IEntity";
import P2PReciver from "../p2p/P2PReciver";

import Talent, { isTalent } from "../../data/Talent";

import { faFileExport, faFileImport } from "@fortawesome/free-solid-svg-icons";
import TabBar from "../general_elements/TabBar";
import IconButton from "../form_elements/IconButton";
import TalentTile from "../entities/talents/TalentTile";
import GeneralOptions from "./GeneralOptions";
import TalentsOptions from "./TalentsOptions";
import ImportField, { ImportModus } from "../form_elements/ImportField";
import DiscordOptions from "./DiscordOptions";
import { useCSVDownloader, usePapaParse } from "react-papaparse";
import FileField from "../form_elements/FileField";
import { scanImportedSpellCsv } from "../../services/CsvService";
import Spell from "../../data/Spell";
import Race from "../../data/Race";

const Options = () => {
  const [activeTab, setTab] = useState<string>("General");

  const [talentAmount, setTalentAmount] = useState<number>(0);

  const [reload, isReload] = useState<boolean>(true);
  const [data, setData] = useState<IEntity[] | IEntity>();

  const { readString } = usePapaParse();
  const { CSVDownloader, Type } = useCSVDownloader();
  const [csvBackup, setBackup] = useState<any>();

  const handleSpellCsvUpload = (files: any) => {
    const file: File = files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      const content = fileReader.result;
      if (content !== null) {
        readString(content.toString(), {
          worker: true,
          complete: (results) => {
            console.log("Csv loaded from " + file.name);
            const csv: Array<any> = results.data;
            console.log(csv);
            scanImportedSpellCsv(csv, file.name);
            console.log("---------");
          },
        });
      }
    };
    fileReader.readAsText(file);
  };

  useEffect(() => {
    if (reload) {
      reciveCount("talents", (result: number) => {
        setTalentAmount(result);
      });
      let backup: any[] = [];
      backup.push(["Spell"].concat(Object.keys(new Spell())));
      backup.push(["Talent"].concat(Object.keys(new Talent())));
      backup.push(["Race"].concat(Object.keys(new Race())));
      setBackup(backup);
      isReload(false);
    }
  }, [reload]);

  const triggerDeleteAll = (tableName: string) => {
    deleteAll(tableName);
    isReload(true);
  };

  const returnTile = (entity: IEntity, index: number) => {
    if (isTalent(entity)) {
      return <TalentTile key={index} talent={entity} />;
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
          <IconButton
            icon={faFileExport}
            onClick={() => exportAll("SkirmishTome_all.json")}
          />
        </SectionRow>
      </OptionSection>
      <OptionSection>
        <CSVDownloader
          type={Type.Button}
          filename={
            "CsvBackup_" +
            new Date().getFullYear() +
            "." +
            (new Date().getMonth() + 1)
          }
          bom={true}
          config={{
            delimiter: ";",
          }}
          data={csvBackup}
        >
          Download
        </CSVDownloader>
      </OptionSection>
      <TabBar
        children={["General", "Talents", "Discord", "Receive", "CSV Imports"]}
        onChange={(tab: string) => setTab(tab)}
        activeTab={activeTab}
      />
      {activeTab === "General" && <GeneralOptions />}
      {activeTab === "Talents" && (
        <TalentsOptions
          amount={talentAmount}
          triggerDeleteAll={triggerDeleteAll}
        />
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
      {activeTab === "CSV Imports" && (
        <OptionTab>
          <OptionSection>
            <SelectionTitle>Import Spell CSV</SelectionTitle>
            <FileField
              label=""
              isMulti={true}
              accept={".csv"}
              icon={faFileImport}
              onChange={(file) => handleSpellCsvUpload(file)}
            />
          </OptionSection>
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
  text-align: center;
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

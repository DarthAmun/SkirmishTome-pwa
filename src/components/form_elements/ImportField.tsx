import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FileField from "./FileField";
import IEntity from "../../data/IEntity";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";
import { saveNewFromList } from "../../services/DatabaseService";

import ProgressBar from "@ramonak/react-progress-bar";

export enum ImportModus {
  NORMAL,
}

interface $Props {
  modus: ImportModus;
}

const ImportField = ({ modus }: $Props) => {
  const [files, setFiles] = useState<File[]>([]);

  const changeFile = (fileList: FileList | null) => {
    console.log("Start File Upload");
    if (fileList !== null) {
      const files = Array.from(fileList);
      setFiles(files);
    }
  };

  return (
    <>
      <Files>
        <FileField
          label=""
          isMulti={true}
          accept={".json"}
          icon={faFileImport}
          onChange={(file) => changeFile(file)}
        />
      </Files>
      <Files>
        {files &&
          files.map((file: File, index: number) => (
            <FileTile key={index} modus={modus} file={file} />
          ))}
      </Files>
    </>
  );
};

export default ImportField;

interface $FileProps {
  file: File;
  modus: ImportModus;
}

const FileTile = ({ file, modus }: $FileProps) => {
  const [succCount, setSucc] = useState<number>(0);
  const [maxCount, setMax] = useState<number>(0);

  const scanImportFile = async (json: any, fileName: string) => {
    console.log("Start 5eTools Json interpreting " + fileName);

    let listOfNew: { tableName: string; newEntitiy: IEntity }[] = [];

    let newMax: number = 0;
    for (const [key, value] of Object.entries(json)) {
      if (Array.isArray(value)) {
        newMax += value.length;
        if (modus === ImportModus.NORMAL) {
          // eslint-disable-next-line
          value.forEach((obj: any) => listOfNew.push({ tableName: key, newEntitiy: obj }));
        }
      }
    }
    setMax(newMax);

    while (listOfNew.length > 0) {
      let newTableName = listOfNew[0].tableName;
      let bulkList: IEntity[] = listOfNew
        .filter((newEntitiy) => newEntitiy.tableName === newTableName)
        .map((entity: { tableName: string; newEntitiy: IEntity }) => {
          return entity.newEntitiy;
        });
      await saveNewFromList(newTableName, bulkList, fileName);
      listOfNew = listOfNew.filter((entity) => entity.tableName !== newTableName);
      setSucc(newMax - listOfNew.length);
    }
  };

  useEffect(() => {
    console.log("Start Filereader " + file.name);
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      const content = fileReader.result;
      if (content !== null) {
        let json = JSON.parse(content.toString());
        console.log("Json loaded from " + file.name);
        scanImportFile(json, file.name);
      }
    };
    fileReader.readAsText(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <FileWrapper>
      {file.name} {succCount}/{maxCount}
      <ProgressBar
        completed={Math.round((succCount / maxCount) * 100)}
        isLabelVisible={false}
        bgcolor={"#F55C5C"}
        height={"5px"}
        margin={"5px"}
      />
    </FileWrapper>
  );
};

const Files = styled.div`
  flex: 1 1 100%;
`;

const FileWrapper = styled.div`
  width: clac(100% - 20px);
  height: 50px;
  padding: 10px;
`;

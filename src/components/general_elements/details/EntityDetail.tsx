import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import IEntity from "../../../data/IEntity";
import {
  remove,
  updateWithCallback,
  createNewWithId,
} from "../../../services/DatabaseService";

import {
  faArrowLeft,
  faSave,
  faTrash,
  faExclamationTriangle,
  faClone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "../../form_elements/BackButton";
import IconButton from "../../form_elements/IconButton";
import { EditToggle, ToggleLeft, ToggleRight } from "../ToggleStyle";
import Dialog from "../Dialog";

import RandomTableEditView from "../../entities/random_tables/details/RandomTableEditView";
import RandomTableView from "../../entities/random_tables/details/RandomTableView";
import TalentEditView from "../../entities/talents/details/TalentEditView";
import TalentView from "../../entities/talents/details/TalentView";
import RaceView from "../../entities/races/details/RaceView";
import RaceEditView from "../../entities/races/details/RaceEditView";
import SpellView from "../../entities/spells/details/SpellView";
import SpellEditView from "../../entities/spells/details/SpellEditView";
import PowerEditView from "../../entities/powers/details/PowerEditView";
import PowerView from "../../entities/powers/details/PowerView";
import SkillView from "../../entities/skills/details/SkillView";
import SkillEditView from "../../entities/skills/details/SkillEditView";
import ItemView from "../../entities/items/details/ItemView";
import ItemEditView from "../../entities/items/details/ItemEditView";
import TraditionEditView from "../../entities/tradtitons/details/TradtitionEditView";
import TraditionView from "../../entities/tradtitons/details/TradtitionView";
import CharacterView from "../../entities/characters/details/CharacterView";
import CharacterEditView from "../../entities/characters/details/CharacterEditView";

interface $Props {
  entity: IEntity;
  tableName: string;
  isNew: boolean;
  view: string;
}

const EntityDetail = ({ entity, tableName, isNew, view }: $Props) => {
  const [editMode, setMode] = useState<boolean>(isNew);

  const [entityObj, editEntity] = useState<IEntity>(entity);

  const [showDeleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [showAlert, setAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [canBeSaved, setCanBeSaved] = useState<boolean>(true);
  let history = useHistory();

  const deleteEntity = (entityId: number | undefined) => {
    remove(tableName, entityId);
    history.goBack();
  };

  useEffect(() => {
    if (entityObj !== entity) {
      setUnsavedChanges(true);
    }
  }, [entityObj, entity]);

  const updateEntity = (entityObj: IEntity, msg: string) => {
    if (canBeSaved) {
      updateWithCallback(tableName, entityObj, (result) => {
        if (result > 0) {
          setUnsavedChanges(false);
          setMessage(msg);
          setAlert(true);
        } else {
          setMessage("Something went wrong!");
          setAlert(true);
        }
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      });
    } else {
      setMessage("Please fill out all required fields.");
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  const duplicateEntity = (obj: IEntity) => {
    let newObj = { ...obj };
    delete newObj.id;
    createNewWithId(tableName, newObj, (id) => {
      editAndSaveEntity(
        { ...entity, name: entity.name + " [Clone]" },
        "Cloning successful!"
      );
    });
  };

  const editAndSaveEntity = (entity: IEntity, msg: string) => {
    editEntity(entity);
    updateEntity(entity, msg);
  };

  type viewOptions = {
    [key: string]: (props: any) => JSX.Element;
  };
  const views: viewOptions = {
    TalentView: TalentView,
    TalentEditView: TalentEditView,
    PowerView: PowerView,
    PowerEditView: PowerEditView,
    SkillView: SkillView,
    SkillEditView: SkillEditView,
    SpellView: SpellView,
    SpellEditView: SpellEditView,
    RaceView: RaceView,
    RaceEditView: RaceEditView,
    ItemView: ItemView,
    ItemEditView: ItemEditView,
    RandomTableView: RandomTableView,
    RandomTableEditView: RandomTableEditView,
    TraditionView: TraditionView,
    TraditionEditView: TraditionEditView,
    CharacterView: CharacterView,
    CharacterEditView: CharacterEditView,
  };

  return (
    <>
      {showDeleteDialog && (
        <Dialog
          message={`Delete ${entity.name}?`}
          icon={faExclamationTriangle}
          confirmeText={"Delete"}
          confirmeClick={() => {
            remove(tableName, entity.id);
            history.goBack();
          }}
          abortText={"Back"}
          abortClick={() => {
            setDeleteDialog(false);
          }}
        />
      )}
      <TopBar>
        <BackButton icon={faArrowLeft} action={() => history.goBack()} />
        <EditToggle mode={editMode.toString()}>
          <ToggleLeft onClick={() => setMode(false)}>View</ToggleLeft>
          <ToggleRight onClick={() => setMode(true)}>Edit</ToggleRight>
        </EditToggle>
        {editMode && unsavedChanges && <Icon icon={faExclamationTriangle} />}
        {editMode && (
          <>
            <IconButton
              onClick={() => updateEntity(entityObj, "Saved successful!")}
              icon={faSave}
              disabled={!canBeSaved}
            />
            <IconButton
              onClick={() => duplicateEntity(entityObj)}
              icon={faClone}
            />
            <IconButton
              onClick={() => deleteEntity(entityObj.id)}
              icon={faTrash}
            />
            {message && showAlert && <Message>{message}</Message>}
          </>
        )}
      </TopBar>
      {editMode
        ? React.createElement(views[view + "EditView"], {
            [view.toLocaleLowerCase()]: entityObj,
            canBeSaved: (val: boolean) => setCanBeSaved(val),
            onEdit: (value: any) => editEntity(value),
          })
        : React.createElement(views[view + "View"], {
            [view.toLocaleLowerCase()]: entityObj,
            onEdit: (value: any) =>
              editAndSaveEntity(value, "Saved successful!"),
          })}
    </>
  );
};

export default EntityDetail;

const TopBar = styled.div`
  color: ${({ theme }) => theme.tile.color};
  font-size: 16px;
  overflow: hidden;
  flex: 1 1;
  width: 100%;
  max-width: calc(100% - 20px);
  height: 45px;
  padding: 10px;

  @media (max-width: 576px) {
    max-width: calc(100% - 20px);
  }
`;

const Message = styled.div`
  padding: 5px;
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  float: right;
`;

const Icon = styled(FontAwesomeIcon)`
  float: right;
  line-height: 30px;
  display: block;
  height: 30px;
  padding: 10px;
  color: ${({ theme }) => theme.main.highlight};
`;

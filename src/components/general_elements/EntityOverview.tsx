import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import Filter from "../../data/Filter";
import IEntity from "../../data/IEntity";
import { reciveAllFiltered } from "../../services/DatabaseService";

import { LoadingSpinner } from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

import { useQuery } from "../../hooks/QueryHook";
import TalentSearchBar from "../entities/talents/TalentSearchBar";
import TalentTile from "../entities/talents/TalentTile";
import RandomTableSearchBar from "../entities/random_tables/RandomTableSearchBar";
import RandomTableTile from "../entities/random_tables/RandomTableTile";
import RaceSearchBar from "../entities/races/RaceSearchBar";
import RaceTile from "../entities/races/RaceTile";
import SpellTile from "../entities/spells/SpellTile";
import SpellSearchBar from "../entities/spells/SpellSearchBar";
import PowerSearchBar from "../entities/powers/PowerSearchBar";
import PowerTile from "../entities/powers/PowerTile";
import SkillSearchBar from "../entities/skills/SkillSearchBar";
import SkillTile from "../entities/skills/SkillTile";
import ItemSearchBar from "../entities/items/ItemSearchBar";
import ItemTile from "../entities/items/ItemTile";
import TraditionSearchBar from "../entities/tradtitons/TradtitionSearchBar";
import TraditionTile from "../entities/tradtitons/TradtitionTile";
import CharacterSearchBar from "../entities/characters/CharacterSearchBar";
import CharacterTile from "../entities/characters/CharacterTile";

const EntityOverview = ({ match }: RouteComponentProps) => {
  const rawFilters = useQuery().get("filter");
  const [entityName, setEntityName] = useState<string>("");
  const [filters, setFilter] = useState<Filter[]>([]);
  const [allEntitys, setAllEntitys] = useState<IEntity[]>([]);
  const [entitys, setEntitys] = useState<IEntity[]>([]);
  const [scrollParam, setParam] = useState<{
    start: number;
    end: number;
    hasMore: boolean;
  }>({
    start: 100,
    end: 120,
    hasMore: true,
  });

  useEffect(() => {
    if (rawFilters !== null) setFilter(JSON.parse(rawFilters));
    else setFilter([]);
    setAllEntitys([]);
    setEntitys([]);
    setParam({
      start: 100,
      end: 120,
      hasMore: true,
    });
    let newMatch: string = match.path
      .split("/")
      .filter((match: string) => match.includes("-overview"))[0]
      .replaceAll("-overview", "");
    setEntityName(newMatch);
  }, [match, rawFilters]);

  useEffect(() => {
    if (entityName !== "")
      reciveAllFiltered(entityName + "s", filters, (results: any[]) => {
        setAllEntitys(results);
        setEntitys(results.slice(0, 100));
        if (results.length === 0) {
          setParam({
            start: 0,
            end: 0,
            hasMore: false,
          });
        }
      });
  }, [filters, entityName]);

  const fetchMoreData = () => {
    if (entitys.length === allEntitys.length) {
      setParam({
        start: scrollParam.start + 20,
        end: scrollParam.end + 20,
        hasMore: false,
      });
      return;
    }
    setEntitys((s) => s.concat(allEntitys.slice(scrollParam.start, scrollParam.end)));
    setParam({
      start: scrollParam.start + 20,
      end: scrollParam.end + 20,
      hasMore: true,
    });
  };

  type searchOptions = {
    [key: string]: () => JSX.Element;
  };
  const searchbars: searchOptions = {
    talent: TalentSearchBar,
    spell: SpellSearchBar,
    race: RaceSearchBar,
    power: PowerSearchBar,
    skill: SkillSearchBar,
    randomTable: RandomTableSearchBar,
    item: ItemSearchBar,
    tradition: TraditionSearchBar,
    character: CharacterSearchBar,
  };

  type tileOptions = {
    [key: string]: (props: any) => JSX.Element;
  };
  const tiles: tileOptions = {
    talent: TalentTile,
    spell: SpellTile,
    race: RaceTile,
    power: PowerTile,
    skill: SkillTile,
    randomTable: RandomTableTile,
    item: ItemTile,
    tradition: TraditionTile,
    character: CharacterTile,
  };

  return (
    <>
      {entityName !== "" && React.createElement(searchbars[entityName], {})}
      <div id="scrollable" style={{ width: "100%" }}>
        <EntityContainer
          dataLength={entitys.length}
          next={fetchMoreData}
          hasMore={scrollParam.hasMore}
          loader={<LoadingSpinner />}
        >
          {entityName !== "" &&
            entitys.length > 0 &&
            entitys!.map((entity: IEntity, index: number) => {
              return React.createElement(tiles[entityName], {
                key: index,
                [entityName]: entity,
              });
            })}
        </EntityContainer>
      </div>
    </>
  );
};

export default EntityOverview;

const EntityContainer = styled(InfiniteScroll)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

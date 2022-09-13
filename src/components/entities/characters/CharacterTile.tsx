import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Character from "../../../data/Character";

interface $Props {
  character: Character;
}

const CharacterTile = ({ character }: $Props) => {
  return (
    <Tile to={"/character-detail/id/" + character.id}>
      <Name>
        <b>{character.name}</b>
      </Name>

      <PropWrapper>
        <Prop>{character.combat.currentHp}</Prop>
        <Prop>{character.charLevel}</Prop>
        <Prop>Talents: {character.talents.length}</Prop>
        <Prop>Flaws: {character.flaws.length}</Prop>
      </PropWrapper>
    </Tile>
  );
};

export default CharacterTile;

const Tile = styled(Link)`
  flex: 1 1 15em;
  color: ${({ theme }) => theme.tile.color};
  background-color: ${({ theme }) => theme.tile.backgroundColor};
  margin: 0.5em;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.tile.boxShadow};
  overflow: hidden;
  cursor: pointer;

  --notchSize: 15px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    0 100%
  );
`;

const Name = styled.div`
  height: auto;
  float: left;
  padding: 10px;
  margin: 0 5px 5px 5px;
  font-size: 14px;
  width: calc(100% - 30px);
  color: white;
  text-align: center;
  border-radius: 5px;
`;

const PropWrapper = styled.div`
  height: auto;
  width: calc(100% - 10px);
  float: left;
  padding: 5px 5px 0 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Prop = styled.div`
  height: 12px;
  width: calc(50% - 22.5px);
  margin: 0 0 5px 5px;
  float: left;
  line-height: 10px;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:nth-child(odd) {
    margin: 0 0 5px 0px;
  }
`;

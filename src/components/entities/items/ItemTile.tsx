import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Item from "../../../data/Item";

interface $Props {
  item: Item;
}

const ItemTile = ({ item }: $Props) => {
  return (
    <Tile to={"/item-detail/id/" + item.id}>
      <Quality quality={item.quality}>{item.quality}</Quality>

      <Name>
        <b>{item.name}</b>
      </Name>
    </Tile>
  );
};

export default ItemTile;

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

type QualityType = {
  quality?: string;
};

const Quality = styled.div<QualityType>`
  height: auto;
  float: left;
  padding: 5px 10px 7px 10px;
  font-size: 12px;
  line-height: 30px;
  border-radius: 0px 0px 10px 0px;
  background-color: ${({ theme }) => theme.tile.backgroundColor};
  color: ${(props) => {
    if (props.quality === "Common") {
      return "#bef28e";
    } else if (props.quality === "Uncommen") {
      return "#fce97a";
    } else if (props.quality === "Rare") {
      return "#db5740";
    } else if (props.quality === "Legendary") {
      return "#9ebed2";
    } else if (props.quality === "Ultrarare") {
      return "#ce90ca";
    } else if (props.quality === "Trash") {
      return "#e19c60";
    } else if (props.quality === "Abjuration") {
      return "#278ae4";
    } else if (props.quality === "Illusion") {
      return "#8b42f9";
    }
  }};
`;

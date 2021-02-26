import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Talent from "../../../data/Talent";

interface $Props {
  talent: Talent;
}

const TalentTile = ({ talent }: $Props) => {
  return (
    <Tile to={"/talent-detail/id/" + talent.id} isFlaw={talent.isFlaw}>
      <Cost>
        <b>{talent.cost}</b>
      </Cost>

      <Name>
        <b>{talent.name}</b>
      </Name>

      <PropWrapper>
        <Prop>{talent.type ? talent.stress : "Passive"}</Prop>
        <WideProp>{talent.prerequisite}</WideProp>
      </PropWrapper>
    </Tile>
  );
};

export default TalentTile;

type type = {
  isFlaw?: boolean;
};

const Tile = styled(Link)<type>`
  flex: 1 1 15em;
  color: ${({ theme }) => theme.tile.color};
  ${(props) => {
    if (props.isFlaw) {
      return `background-color: ${props.theme.input.backgroundColor};`;
    }
    if (!props.isFlaw) {
      return `background-color: ${props.theme.tile.backgroundColor};`;
    }
    return "";
  }}
  margin: 0.5em;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.tile.boxShadow};
  overflow: hidden;
  cursor: pointer;
`;

const Cost = styled.div`
  height: auto;
  float: left;
  padding: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  float: right;
  text-align: center;
  border-top-right-radius: 3px;
  border-radius: 30px;
  border-bottom: solid 1px ${({ theme }) => theme.main.highlight};
  margin: 5px;
`;

const Name = styled.div`
  height: auto;
  float: left;
  padding: 10px;
  margin: 0 5px 5px 5px;
  font-size: 14px;
  width: calc(100% - 30px);
  color: ${({ theme }) => theme.tile.headerColor};
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
}
`;

const WideProp = styled(Prop)`
  margin: 0 0 5px 0px;
  width: calc(100% - 20px);
`;

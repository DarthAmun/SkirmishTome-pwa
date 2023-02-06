import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Education from "../../../data/Education";

interface $Props {
  education: Education;
}

const EducationTile = ({ education }: $Props) => {
  return (
    <Tile to={"/education-detail/id/" + education.id}>
      <Talent>
        <b>{education.talent ? "T": ""}</b>
      </Talent>

      <Name>
        <b>{education.name}</b>
      </Name>

      <PropWrapper>
        <Prop>{education.caste}</Prop>
        <Prop>Skills: {education.skills.length}</Prop>
      </PropWrapper>
    </Tile>
  );
};

export default EducationTile;

type type = {
  $isflaw: boolean;
};

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

const Flag = styled.div`
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

const Talent = styled.div`
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
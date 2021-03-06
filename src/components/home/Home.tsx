import React from "react";
import packageJson from "../../../package.json";
import { useHistory } from "react-router";
import styled from "styled-components";

import { faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextButton from "../form_elements/TextButton";

const Home = () => {
  let history = useHistory();

  return (
    <>
      <General>
        <WideHomeSection>
          <SelectionTitle>Welcome to SkirmishTome!</SelectionTitle>
          <SectionText>
            SkirmishTome is a progressive web app that lets you manage all of your stuff. It is in
            continous development and currently in <b>v{packageJson.version}</b>.
          </SectionText>
          <SectionText>
            You can install this webapp as a app in certain browsers. For more infos on this visit
            the discord or the help section down below. Additionally this webapp works without an
            connection to the internet once visited. So no worries playing in the woods.
          </SectionText>
          <SectionText>
            If the webapp does not contain anything please import data via the options. For more
            infos on this visit the discord. None of you data is shared via the internet. Everything
            you put into this webapp is stored inside your browser. You can however export and
            import everything.
          </SectionText>
        </WideHomeSection>
        <HomeSection>
          <SelectionTitle>
            <FontAwesomeIcon icon={faCog} /> Options
          </SelectionTitle>
          <SectionText>
            To import/export or to make other adjustments to your collection...
          </SectionText>
          <ButtonBar>
            <TextButton text={"Go to options"} onClick={() => history.push(`/options`)} />
          </ButtonBar>
        </HomeSection>
        <HomeSection>
          <SelectionTitle>
            <FontAwesomeIcon icon={faQuestionCircle} /> Help
          </SelectionTitle>
          <SectionText>
            Help on where to find what and how to add tables or hyperlinks inside of text fields.
          </SectionText>
          <ButtonBar>
            <TextButton text={"Help"} onClick={() => history.push(`/help`)} />
          </ButtonBar>
        </HomeSection>
      </General>
    </>
  );
};

export default Home;

const General = styled.div`
  flex: 1 1 auto;

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
`;

const HomeSection = styled.div`
  flex: 1 1 20em;
  color: ${({ theme }) => theme.tile.color};
  background-color: ${({ theme }) => theme.tile.backgroundColor};
  margin: 0.5em;
  box-shadow: ${({ theme }) => theme.tile.boxShadow};
  overflow: hidden;

  --notchSize: 15px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    0 100%
  );

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
`;

const WideHomeSection = styled(HomeSection)`
  flex: 1 1 100%;
`;

const SelectionTitle = styled.div`
  flex: 1 1 auto;
  padding: 5px 5px 5px 15px;
  min-width: calc(100% - 20px);
  max-height: 20px;
  font-weight: bold;
  text-algin: center;
  border-radius: 5px;
  color: white;
  background-color: ${({ theme }) => theme.tile.headerColor};
`;

const SectionText = styled.div`
  flex: 1 1 auto;
  width: calc(100% - 10px);
  padding: 5px;
`;

const ButtonBar = styled(SectionText)`
  align-self: flex-end;
  max-height: 50px;
`;

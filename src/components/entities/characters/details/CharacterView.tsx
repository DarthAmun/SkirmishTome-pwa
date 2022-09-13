import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Character from "../../../../data/Character";
import P2PSender from "../../../p2p/P2PSender";
import TextButton from "../../../form_elements/TextButton";
import { useWebhook } from "../../../../hooks/webhookHook";
import { sendEmbedMessage } from "../../../../services/DiscordService";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router";
import Talent from "../../../../data/Talent";
import { reciveAll } from "../../../../services/DatabaseService";
import FormatedText from "../../../general_elements/FormatedText";

interface $Props {
  character: Character;
}

const CharacterView = ({ character }: $Props) => {
  let webhook = useWebhook();
  const [json, setJson] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);
  const [talents, setTalents] = useState<Talent[]>([]);
  let history = useHistory();

  useEffect(() => {
    reciveAll("talents", (results: any[]) => {
      setTalents(results);
    });
  }, [character]);

  useEffect(() => {
    if (webhook !== undefined) {
      let newJson = {
        username: webhook.name + " (SkirmishTome)",
        embeds: [
          {
            author: {
              name: character.name,
            },
            fields: [],
          },
        ],
      };
      setJson(JSON.stringify(newJson));
    }
  }, [character, webhook]);

  return (
    <CenterWrapper>
      <View>
        <Name>
          <b>{character.name}</b>
        </Name>

        <PropWrapper>
          {/* <Prop>
            <PropTitle>Hp: </PropTitle>
            {character.hp}
          </Prop>
          <Prop>
            <PropTitle>Stamina: </PropTitle>
            {character.stamina}
          </Prop>
          <Prop>
            <PropTitle>Size: </PropTitle>
            {character.size}
          </Prop>
          <Prop>
            <PropTitle>Sprint: </PropTitle>
            {character.sprint}
          </Prop>
          <Prop>
            <PropTitle>Ability Modifier: </PropTitle>
            {character.abilityModifier}
          </Prop>
          <Prop>
            <PropTitle>Limits: </PropTitle>
            {character.limit}
          </Prop>
          <Text>
            <PropTitle>Stress: </PropTitle>
            <FormatedText text={character.description} />
          </Text> */}
        </PropWrapper>

        <PropWrapper>
          {character.talents.length > 0 &&
            character.talents.map((talent, index: number) => {
              const link: string =
                "/talent-detail/id/" +
                talents.filter((tal) => tal.name === talent)[0]?.id;
              return (
                <TalentLink key={index} onClick={() => history.push(link)}>
                  {talent}
                </TalentLink>
              );
            })}
        </PropWrapper>
        <PropWrapper>
          {character.flaws.length > 0 &&
            character.flaws.map((flaw, index: number) => (
              <Prop key={index}>{flaw}</Prop>
            ))}
        </PropWrapper>
        <PropWrapper>
          {webhook !== undefined && (
            <TextButton
              style={{
                backgroundColor: "#7289da",
              }}
              text={`Cast ${character.name}`}
              icon={faDiscord}
              onClick={() => sendEmbedMessage(webhook, json)}
            />
          )}
          {!send && (
            <TextButton
              text={`Send ${character.name}`}
              icon={faPaperPlane}
              onClick={() => setSend(true)}
            />
          )}
          {!!send && <P2PSender data={character} mode={"THIS"} />}
        </PropWrapper>
      </View>
    </CenterWrapper>
  );
};

export default CharacterView;

const CenterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const View = styled.div`
  color: ${({ theme }) => theme.tile.color};
  font-size: 16px;
  max-width: 800px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled.div`
  height: auto;
  float: left;
  padding: 10px;
  margin: 5px 5px 10px 5px;
  width: calc(100% - 30px);
  color: white;
  text-align: center;

  --notchSize: 15px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    0 100%
  );

  background-color: ${({ theme }) => theme.tile.backgroundColor};
`;

const PropWrapper = styled.div`
  height: auto;
  width: calc(100% - 6px);
  float: left;
  padding: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Prop = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
  height: auto;
  margin: 2px;
  float: left;
  padding: 10px;

  --notchSize: 15px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    0 100%
  );

  background-color: ${({ theme }) => theme.tile.backgroundColor};
`;

const PropTitle = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.tile.backgroundColorLink};
  text-decoration: none;
  margin: 0px 5px 0px 5px;
`;

const TalentLink = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.tile.backgroundColorLink};

  --notchSize: 15px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    0 100%
  );

  text-decoration: none;
  color: ${({ theme }) => theme.tile.backgroundColor};
  font-size: 16px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`;

const Text = styled.div`
  height: auto;
  width: calc(100% - 30px);
  margin: 10px 5px 5px 5px;
  float: left;
  line-height: 18px;
  padding: 10px;
  --notchSize: 15px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    0 100%
  );
  background-color: ${({ theme }) => theme.tile.backgroundColor};
`;

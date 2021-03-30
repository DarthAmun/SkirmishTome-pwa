import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Race from "../../../../data/Race";
import P2PSender from "../../../p2p/P2PSender";
import TextButton from "../../../form_elements/TextButton";
import { useWebhook } from "../../../../hooks/webhookHook";
import { sendEmbedMessage } from "../../../../services/DiscordService";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router";
import Talent from "../../../../data/Talent";
import { reciveAll } from "../../../../services/DatabaseService";

interface $Props {
  race: Race;
}

const RaceView = ({ race }: $Props) => {
  let webhook = useWebhook();
  const [json, setJson] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);
  const [talents, setTalents] = useState<Talent[]>([]);
  let history = useHistory();

  useEffect(() => {
    reciveAll("talents", (results: any[]) => {
      setTalents(results);
    });
  }, [race]);

  useEffect(() => {
    if (webhook !== undefined) {
      let newJson = {
        username: webhook.name + " (SkirmishTome)",
        embeds: [
          {
            author: {
              name: race.name,
            },
            fields: [
              {
                name: "Hp",
                value: race.hp ? race.hp : "-",
                inline: true,
              },
              {
                name: "Ability Modifier",
                value: race.abilityModifier ? race.abilityModifier : "-",
                inline: true,
              },
            ],
          },
        ],
      };
      setJson(JSON.stringify(newJson));
    }
  }, [race, webhook]);

  return (
    <CenterWrapper>
      <View>
        <Name>
          <b>{race.name}</b>
        </Name>

        <PropWrapper>
          <Prop>Hp: {race.hp}</Prop>
          <Prop>Ability Modifier:{race.abilityModifier}</Prop>
        </PropWrapper>

        <PropWrapper>
          {race.talents.length > 0 &&
            race.talents.map((talent, index: number) => {
              const link: string =
                "/talent-detail/id/" + talents.filter((tal) => tal.name === talent)[0]?.id;
              return (
                <TalentLink key={index} onClick={() => history.push(link)}>
                  {talent}
                </TalentLink>
              );
            })}
        </PropWrapper>
        <PropWrapper>
          {race.flaws.length > 0 &&
            race.flaws.map((flaw, index: number) => <Prop key={index}>{flaw}</Prop>)}
        </PropWrapper>
        <PropWrapper>
          {webhook !== undefined && (
            <TextButton
              style={{
                backgroundColor: "#7289da",
              }}
              text={`Cast ${race.name}`}
              icon={faDiscord}
              onClick={() => sendEmbedMessage(webhook, json)}
            />
          )}
          {!send && (
            <TextButton
              text={`Send ${race.name}`}
              icon={faPaperPlane}
              onClick={() => setSend(true)}
            />
          )}
          {!!send && <P2PSender data={race} mode={"THIS"} />}
        </PropWrapper>
      </View>
    </CenterWrapper>
  );
};

export default RaceView;

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

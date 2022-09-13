import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import P2PSender from "../../../p2p/P2PSender";
import TextButton from "../../../form_elements/TextButton";
import { useWebhook } from "../../../../hooks/webhookHook";
import { useHistory } from "react-router";
import { sendEmbedMessage } from "../../../../services/DiscordService";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import Tradition from "../../../../data/Tradition";
import Power from "../../../../data/Power";
import { reciveAll } from "../../../../services/DatabaseService";

interface $Props {
  tradition: Tradition;
}

const TraditionView = ({ tradition }: $Props) => {
  let history = useHistory();
  let webhook = useWebhook();
  const [json, setJson] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);
  const [powers, setPowers] = useState<Power[]>([]);

  useEffect(() => {
    reciveAll("powers", (results: any[]) => {
      setPowers(results);
    });
  }, [tradition]);

  useEffect(() => {
    if (webhook !== undefined) {
      let newJson = {
        username: webhook.name + " (SkirmishTome)",
        embeds: [
          {
            author: {
              name: tradition.name,
            },
            fields: [
              {
                name: "Path",
                value: tradition.isPath ? "yes" : "no",
                inline: true,
              },
            ],
          },
        ],
      };
      setJson(JSON.stringify(newJson));
    }
  }, [tradition, webhook]);

  return (
    <CenterWrapper>
      <View>
        <Cost>
          <b>{tradition.isPath ? "P" : "-"}</b>
        </Cost>

        <Name>
          <b>{tradition.name}</b>
        </Name>

        <PropWrapper>
          {webhook !== undefined && (
            <TextButton
              style={{
                backgroundColor: "#7289da",
              }}
              text={`Cast ${tradition.name}`}
              icon={faDiscord}
              onClick={() => sendEmbedMessage(webhook, json)}
            />
          )}
          {!send && (
            <TextButton
              text={`Send ${tradition.name}`}
              icon={faPaperPlane}
              onClick={() => setSend(true)}
            />
          )}
          <PropWrapper>
            {tradition.powers.length > 0 &&
              tradition.powers.map((power, index: number) => {
                const link: string =
                  "/power-detail/id/" +
                  powers.filter((pow) => pow.name === power)[0]?.id;
                return (
                  <PowerLink key={index} onClick={() => history.push(link)}>
                    {power}
                  </PowerLink>
                );
              })}
          </PropWrapper>
          {!!send && <P2PSender data={tradition} mode={"THIS"} />}
        </PropWrapper>
      </View>
    </CenterWrapper>
  );
};

export default TraditionView;

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

const Cost = styled.div`
  height: auto;
  padding: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  float: left;
  text-align: center;
  border-top-right-radius: 3px;
  border-radius: 30px;
  margin: 0px 5px 5px 5px;
  background-color: ${({ theme }) => theme.tile.backgroundColor};
`;

const Name = styled.div`
  height: auto;
  float: left;
  padding: 10px;
  margin: 5px 5px 10px 5px;
  width: calc(100% - 30px);
  color: var(--card-title-color);
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

const PowerLink = styled.span`
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

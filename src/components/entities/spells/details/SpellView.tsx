import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Spell from "../../../../data/Spell";
import P2PSender from "../../../p2p/P2PSender";
import TextButton from "../../../form_elements/TextButton";
import { useWebhook } from "../../../../hooks/webhookHook";
import { sendEmbedMessage } from "../../../../services/DiscordService";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import FormatedText from "../../../general_elements/FormatedText";

interface $Props {
  spell: Spell;
}

const SpellView = ({ spell }: $Props) => {
  let webhook = useWebhook();
  const [json, setJson] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);

  useEffect(() => {
    if (webhook !== undefined) {
      let newJson = {
        username: webhook.name + " (SkirmishTome)",
        embeds: [
          {
            author: {
              name: spell.name,
            },
            fields: [
              {
                name: "Source",
                value: spell.source ? spell.source : "-",
                inline: true,
              },
              {
                name: "Casting Time",
                value: spell.castTime ? spell.castTime : "-",
                inline: true,
              },
            ],
          },
        ],
      };
      setJson(JSON.stringify(newJson));
    }
  }, [spell, webhook]);

  return (
    <CenterWrapper>
      <View>
        <School school={spell.school.label}>{spell.school.label}</School>

        <Flag>
          <b>{spell.drain}</b>
        </Flag>
        {spell.needsMaterial && (
          <Flag>
            <b>M</b>
          </Flag>
        )}
        {spell.glyph && (
          <Flag>
            <b>G</b>
          </Flag>
        )}

        <Name>
          <b>{spell.name}</b>
        </Name>

        <PropWrapper>
          <Prop>
            <PropTitle>Source: </PropTitle>
            {spell.source.label}
          </Prop>
          <Prop>
            <PropTitle>Casting Time: </PropTitle>
            {spell.castTime.label}
          </Prop>
          <Prop>
            <PropTitle>Rite: </PropTitle>
            {spell.rite.label}
          </Prop>
          <Prop>
            <PropTitle>Range: </PropTitle>
            {spell.range.label}
          </Prop>
        </PropWrapper>
        <Text>
          <PropTitle>Effect: </PropTitle>
          <FormatedText text={spell.effect} />
        </Text>
        <Text>
          <PropTitle>Mastery: </PropTitle>
          <FormatedText text={spell.mastery} />
        </Text>
        <Text>
          <PropTitle>Resist: </PropTitle>
          <FormatedText text={spell.resist} />
        </Text>
        <PropWrapper>
          {webhook !== undefined && (
            <TextButton
              style={{
                backgroundColor: "#7289da",
              }}
              text={`Cast ${spell.name}`}
              icon={faDiscord}
              onClick={() => sendEmbedMessage(webhook, json)}
            />
          )}
          {!send && (
            <TextButton
              text={`Send ${spell.name}`}
              icon={faPaperPlane}
              onClick={() => setSend(true)}
            />
          )}
          {!!send && <P2PSender data={spell} mode={"THIS"} />}
        </PropWrapper>
      </View>
    </CenterWrapper>
  );
};

export default SpellView;

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

type SchoolType = {
  school?: string;
};

const School = styled.div<SchoolType>`
  height: auto;
  float: left;
  padding: 5px 10px 7px 10px;
  line-height: 30px;
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
  color: ${(props) => {
    if (props.school === "Necromancy") {
      return "#bef28e";
    } else if (props.school === "Conjuration") {
      return "#fce97a";
    } else if (props.school === "Evocation") {
      return "#db5740";
    } else if (props.school === "Divination") {
      return "#9ebed2";
    } else if (props.school === "Enchantment") {
      return "#ce90ca";
    } else if (props.school === "Transmutation") {
      return "#e19c60";
    } else if (props.school === "Abjuration") {
      return "#278ae4";
    } else if (props.school === "Illusion") {
      return "#8b42f9";
    } else {
      return "white";
    }
  }};
`;

const Flag = styled.div`
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

import React, { useState } from "react";
import styled from "styled-components";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import FormatedText from "../../../general_elements/FormatedText";
import P2PSender from "../../../p2p/P2PSender";
import TextButton from "../../../form_elements/TextButton";
import { useWebhook } from "../../../../hooks/webhookHook";
import { sendEmbedMessage } from "../../../../services/DiscordService";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import Origin from "../../../../data/Origin";

interface $Props {
  origin: Origin;
}

const OriginView = ({ origin }: $Props) => {
  let webhook = useWebhook();
  const [json, setJson] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);

  // useEffect(() => {
  //   if (webhook !== undefined) {
  //     let newJson = {
  //       username: webhook.name + " (SkirmishTome)",
  //       embeds: [
  //         {
  //           author: {
  //             name: origin.name,
  //           },
  //           fields: [
  //             {
  //               name: "Cost",
  //               value: origin.cost ? origin.cost : "-",
  //               inline: true,
  //             },
  //             {
  //               name: "Ticks",
  //               value: origin.ticks ? origin.ticks : "-",
  //               inline: true,
  //             },
  //             {
  //               name: "Stress",
  //               value: origin.type ? origin.stress : "passive",
  //               inline: true,
  //             },
  //             {
  //               name: "Prerequisite",
  //               value: formatDiscordText(origin.prerequisite),
  //             },
  //             {
  //               name: "Effect",
  //               value: formatDiscordText(origin.effect),
  //             },
  //           ],
  //         },
  //       ],
  //     };
  //     setJson(JSON.stringify(newJson));
  //   }
  // }, [origin, webhook]);

  return (
    <CenterWrapper>
      <View>
        <Name>
          <b>{origin.name}</b>
        </Name>
        <PropWrapper>
          <Prop>
            <PropTitle>Kaste 1: </PropTitle>
            {origin.casteOne}
          </Prop>
          <Prop>
            <PropTitle>Kaste 2: </PropTitle>
            {origin.casteTwo}
          </Prop>
        </PropWrapper>

        <PropWrapper>
          {webhook !== undefined && (
            <TextButton
              style={{
                backgroundColor: "#7289da",
              }}
              text={`Cast ${origin.name}`}
              icon={faDiscord}
              onClick={() => sendEmbedMessage(webhook, json)}
            />
          )}
          {!send && (
            <TextButton
              text={`Send ${origin.name}`}
              icon={faPaperPlane}
              onClick={() => setSend(true)}
            />
          )}
          {!!send && <P2PSender data={origin} mode={"THIS"} />}
        </PropWrapper>
      </View>
    </CenterWrapper>
  );
};

export default OriginView;

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

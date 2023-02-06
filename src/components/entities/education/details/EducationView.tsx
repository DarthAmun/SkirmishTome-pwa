import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import P2PSender from "../../../p2p/P2PSender";
import TextButton from "../../../form_elements/TextButton";
import { useWebhook } from "../../../../hooks/webhookHook";
import { sendEmbedMessage } from "../../../../services/DiscordService";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import Education from "../../../../data/Education";
import Skill from "../../../../data/Skill";
import { reciveAll } from "../../../../services/DatabaseService";
import { useHistory } from "react-router";
import Talent from "../../../../data/Talent";

interface $Props {
  education: Education;
}

const EducationView = ({ education }: $Props) => {
  let webhook = useWebhook();
  const [json, setJson] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [talents, setTalents] = useState<Talent[]>([]);
  let history = useHistory();

  useEffect(() => {
    reciveAll("skills", (results: any[]) => {
      setSkills(results);
    });
    reciveAll("talents", (results: any[]) => {
      setTalents(results);
    });
  }, [education]);

  // useEffect(() => {
  //   if (webhook !== undefined) {
  //     let newJson = {
  //       username: webhook.name + " (SkirmishTome)",
  //       embeds: [
  //         {
  //           author: {
  //             name: education.name,
  //           },
  //           fields: [
  //             {
  //               name: "Cost",
  //               value: education.cost ? education.cost : "-",
  //               inline: true,
  //             },
  //             {
  //               name: "Ticks",
  //               value: education.ticks ? education.ticks : "-",
  //               inline: true,
  //             },
  //             {
  //               name: "Stress",
  //               value: education.type ? education.stress : "passive",
  //               inline: true,
  //             },
  //             {
  //               name: "Prerequisite",
  //               value: formatDiscordText(education.prerequisite),
  //             },
  //             {
  //               name: "Effect",
  //               value: formatDiscordText(education.effect),
  //             },
  //           ],
  //         },
  //       ],
  //     };
  //     setJson(JSON.stringify(newJson));
  //   }
  // }, [education, webhook]);

  return (
    <CenterWrapper>
      <View>
        <Name>
          <b>{education.name}</b>
        </Name>
        <PropWrapper>
          <Prop>
            <PropTitle>Kaste: </PropTitle>
            {education.caste}
          </Prop>
          <Prop>
            <PropTitle>Talent: </PropTitle>
            <SkillLink
              onClick={() =>
                history.push(
                  "/talent-detail/id/" +
                    talents.filter((tal) => tal.name === education.name)[0]?.id
                )
              }
            >
              {education.talent}
            </SkillLink>
            {education.talent}
          </Prop>
        </PropWrapper>

        <PropWrapper>
          {education.skills.length > 0 &&
            education.skills.map((skill, index: number) => {
              const link: string =
                "/skill-detail/id/" +
                skills.filter((ski) => ski.name === skill)[0]?.id;
              return (
                <SkillLink key={index} onClick={() => history.push(link)}>
                  {skill}
                </SkillLink>
              );
            })}
        </PropWrapper>

        <PropWrapper>
          {webhook !== undefined && (
            <TextButton
              style={{
                backgroundColor: "#7289da",
              }}
              text={`Cast ${education.name}`}
              icon={faDiscord}
              onClick={() => sendEmbedMessage(webhook, json)}
            />
          )}
          {!send && (
            <TextButton
              text={`Send ${education.name}`}
              icon={faPaperPlane}
              onClick={() => setSend(true)}
            />
          )}
          {!!send && <P2PSender data={education} mode={"THIS"} />}
        </PropWrapper>
      </View>
    </CenterWrapper>
  );
};

export default EducationView;

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

const SkillLink = styled.span`
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

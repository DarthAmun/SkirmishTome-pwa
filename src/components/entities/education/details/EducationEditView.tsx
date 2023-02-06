import React, { useEffect } from "react";
import styled from "styled-components";

import SelectField from "../../../form_elements/SelectField";
import Education, { Kaste } from "../../../../data/Education";
import { makeEnumSelectable } from "../../../../services/EnumService";

interface $Props {
  education: Education;
  onEdit: (value: Education) => void;
}

const EducationEditView = ({ education, onEdit }: $Props) => {

  return (
    <CenterWrapper>
      <View>
        <FieldGroup>
          <Name>
            <b>{education.name}</b>
          </Name>
        </FieldGroup>
        {/* <SelectField
          value={education.casteOne}
          options={makeEnumSelectable(EducationKaste)}
          label={"Kaste 1"}
          onClear={() => onEdit({ ...education, casteOne: EducationKaste.Slave })}
          onChange={(category: string) => onEdit({ ...education, casteOne: category })}
        />
        <SelectField
          value={education.casteTwo}
          options={makeEnumSelectable(EducationKaste)}
          label={"Kaste 2"}
          onClear={() => onEdit({ ...education, casteTwo: EducationKaste.Slave })}
          onChange={(category: string) => onEdit({ ...education, casteTwo: category })}
        /> */}
      </View>
    </CenterWrapper>
  );
};

export default EducationEditView;

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

const CenterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const FieldGroup = styled.div`
  flex: 2 1 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

const View = styled.div`
  color: ${({ theme }) => theme.tile.color};
  font-size: 16px;
  padding: 5px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

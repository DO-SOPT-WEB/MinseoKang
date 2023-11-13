import React, { useState } from "react";
import TypeSelect from "../../components/TypeSelect";
import Section from "../../components/section";
import Title from "../../components/Title";
import BtnSection from "../../components/BtnSection";
import MoveBtn from "../../components/moveBtn";
import BtnWrapper from "../../components/BtnWrapper";
import Countdown from "./countdown";

const Random = () => {
  const [random, setRandom] = useState(false);
  const type = () => {
    setRandom(true);
  };
  return (
    <>
      {!random && (
        <Section>
          <Title>추천방식</Title>
          <BtnSection>
            <TypeSelect>
              <p>랜덤으로 추천해줄께</p>
            </TypeSelect>
          </BtnSection>
          <BtnWrapper>
            <MoveBtn onClick={type}>
              {" "}
              <p1>시작하기</p1>
            </MoveBtn>
          </BtnWrapper>
        </Section>
      )}
      {random && <Countdown setRandom={setRandom} />}
    </>
  );
};

export default Random;

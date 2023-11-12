import React, { useState } from "react";
import TypeSelect from "../components/TypeSelect";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";
import Result from "./steps/result";
import Data from "../assets/data";
import BtnSection from "../components/BtnSection";
import BtnWapper from "../components/BtnWrapper";
import Section from "../components/section";
import MoveBtn from "../components/moveBtn";
import Title from "../components/Title";

// ChoosePrefer 컴포넌트는 현재 선택된 단계를 상태로 관리
const Preference = () => {
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const [preferStage, setPreferStage] = useState("");

  // const [startPick, setStartPick] = useState(false);

  const filterList = () => {
    const firstFilterList = Data.filter(
      (item) => item.category[0] === firstChoice
    );
    const secondFilterList = firstFilterList.filter(
      (item) => item.category[1] === secondChoice
    );
    const thirdFilterList = secondFilterList.filter(
      (item) => item.category[2] === thirdChoice
    );

    const finalFilterList = thirdFilterList[0];
    return finalFilterList;
  };

  const putResult = () => {
    switch (preferStage) {
      case 0:
        return (
          <Section>
            <Title>추천방식</Title>
            <BtnSection>
              <TypeSelect>
                <p>취향대로 추천해줄께</p>
              </TypeSelect>
            </BtnSection>
            <BtnWapper>
              <MoveBtn
                onClick={() => {
                  setPreferStage(1);
                }}
              >
                <p1>시작하기</p1>
              </MoveBtn>
            </BtnWapper>
          </Section>
        );

      case 1:
        return (
          <First
            setPreferStage={setPreferStage}
            firstChoice={firstChoice}
            setFirstChoice={setFirstChoice}
            setSecondChoice={setSecondChoice}
            setThirdChoice={setThirdChoice}
          />
        );
      case 2:
        return (
          <Second
            setPreferStage={setPreferStage}
            secondChoice={secondChoice}
            setSecondChoice={setSecondChoice}
          />
        );
      case 3:
        return (
          <Third
            setPreferStage={setPreferStage}
            thirdChoice={thirdChoice}
            setThirdChoice={setThirdChoice}
            filterList={filterList}
          />
        );
      case 4:
        return (
          <Result
            filterList={filterList}
            setPreferStage={setPreferStage}
            setFirstChoice={setFirstChoice}
            setSecondChoice={setSecondChoice}
            setThirdChoice={setThirdChoice}
          />
        );

      default:
        return (
          <Section>
            <Title>추천방식</Title>
            <BtnSection>
              <TypeSelect>
                <p>취향대로 추천해줄께</p>
              </TypeSelect>
            </BtnSection>
            <BtnWapper>
              <MoveBtn
                onClick={() => {
                  setPreferStage(1);
                }}
              >
                <p1>시작하기</p1>
              </MoveBtn>
            </BtnWapper>
          </Section>
        );
    }
  };
  return <>{putResult()}</>;
};

export default Preference;

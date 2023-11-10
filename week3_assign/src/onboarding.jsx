import React from "react";
import ChooseButton from "./components/ChooseButton";
import Section from "./components/section";
import BtnSection from "./components/BtnSection";
import useInsert from "./Hooks/useInsert";
import MoveBtn from "./components/moveBtn";
import Question from "./components/Question";

const Onboarding = ({
  selectOption,
  selectOptionHandler,
  startPickHandler,
  moveStep,
}) => {
  const { clickedOption, clickedOptionHandler } = useInsert();

  return (
    <Section>
      <Question>추천방식을 골라줘</Question>
      <BtnSection>
        {selectOption !== "random" && (
          <ChooseButton
            isclicked={clickedOption === 1 ? "checked" : "unchecked"}
            onClick={() => {
              clickedOptionHandler(1);
              selectOptionHandler("type");
            }}
          >
            <p>추첨</p>
          </ChooseButton>
        )}
        {selectOption !== "type" && (
          <ChooseButton
            isclicked={clickedOption === 2 ? "checked" : "unchecked"}
            onClick={() => {
              clickedOptionHandler(2);
              selectOptionHandler("random");
            }}
          >
            <p>랜덤</p>
          </ChooseButton>
        )}
      </BtnSection>
      {selectOption !== "" && (
        <MoveBtn
          onClick={() => {
            moveStep(1);
            startPickHandler(true);
          }}
        >
          시작하기
        </MoveBtn>
      )}
    </Section>
  );
};

export default Onboarding;

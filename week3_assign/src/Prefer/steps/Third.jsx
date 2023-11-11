import React from "react";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import ChooseButton from "../../components/ChooseButton";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";
const Third = ({ selectOptionHandler, thirdChoice, moveStep }) => {
  const { clickedOption, clickedOptionHandler } = useInsert();

  return (
    <Section>
      <Question>국물 유무</Question>
      <BtnSection>
        <ChooseButton
          isclicked={clickedOption === 1 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(1)}
        >
          <p>국물 O</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 2 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(2)}
        >
          <p>국물 X</p>
        </ChooseButton>
      </BtnSection>
      <MoveBtn onClick={() => moveStep(3)}>이전으로</MoveBtn>
      <MoveBtn onClick={() => moveStep(4)}>결과보기</MoveBtn>
    </Section>
  );
};

export default Third;

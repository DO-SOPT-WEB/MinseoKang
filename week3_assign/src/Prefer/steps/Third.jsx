import React from "react";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import ChooseButton from "../../components/ChooseButton";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";
import BtnWapper from "../../components/BtnWrapper";
const Third = ({ selectOptionHandler, setThirdChoice, moveStep }) => {
  const { clickedOption, clickedOptionHandler } = useInsert();
  const handleButtonClick = (value) => {
    clickedOptionHandler(value);
    setThirdChoice(value);
  };

  return (
    <Section>
      <Question>국물 유무</Question>
      <BtnSection>
        <ChooseButton
          isclicked={clickedOption === 1 ? "checked" : "unchecked"}
          onClick={handleButtonClick}
        >
          <p>국물 O</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 2 ? "checked" : "unchecked"}
          onClick={handleButtonClick}
        >
          <p>국물 X</p>
        </ChooseButton>
      </BtnSection>
      <BtnWapper>
        <MoveBtn onClick={() => moveStep(3)}>이전으로</MoveBtn>
        <MoveBtn onClick={() => moveStep(4)}>결과보기</MoveBtn>
      </BtnWapper>
    </Section>
  );
};

export default Third;

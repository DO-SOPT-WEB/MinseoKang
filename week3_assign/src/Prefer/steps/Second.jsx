import React from "react";
import ChooseButton from "../../components/ChooseButton";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";

import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";

const Second = ({ selectOptionHandler, secondChoice, moveStep }) => {
  const { clickedOption, clickedOptionHandler } = useInsert();

  return (
    <Section>
      <Question>그 중에서는?</Question>
      <BtnSection>
        <ChooseButton
          isclicked={clickedOption === 1 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(1)}
        >
          <p>밥</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 2 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(2)}
        >
          <p>면</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 3 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(3)}
        >
          <p>빵</p>
        </ChooseButton>
      </BtnSection>
      <MoveBtn onClick={() => moveStep(1)}>이전으로</MoveBtn>
      <MoveBtn onClick={() => moveStep(3)}>다음으로</MoveBtn>
    </Section>
  );
};

export default Second;

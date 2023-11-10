import React from "react";
import styled from "styled-components";
import ChooseButton from "../../components/ChooseButton";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";

const First = ({ moveStep }) => {
  const { clickedOption, clickedOptionHandler } = useInsert();

  return (
    <Section>
      <Question>어떤 종류를 먹고 싶어?</Question>
      <BtnSection>
        <ChooseButton
          isclicked={clickedOption === 1 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(1)}
        >
          <p>한식</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 2 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(2)}
        >
          <p>중식</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 3 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(3)}
        >
          <p>일식</p>
        </ChooseButton>
      </BtnSection>
      <MoveBtn>이전으로</MoveBtn>
      <MoveBtn onClick={() => moveStep(2)}>다음으로</MoveBtn>
    </Section>
  );
};

export default First;

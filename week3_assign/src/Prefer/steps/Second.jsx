import React from "react";
import ChooseButton from "../../components/ChooseButton";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";
import BtnWapper from "../../components/BtnWrapper";

const Second = ({ setPreferStage, setSecondChoice, secondChoice }) => {
  return (
    <Section>
      <Question>어떤 종류를 먹고 싶어?</Question>
      <p>2/3</p>
      <BtnSection>
        <ChooseButton
          onClick={() => {
            setSecondChoice("rice");
          }}
          className={secondChoice === "rice" ? "selected" : ""}
        >
          <p>한식</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setSecondChoice("noodle");
          }}
          className={secondChoice === "noodle" ? "selected" : ""}
        >
          <p>중식</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setSecondChoice("beef");
          }}
          className={secondChoice === "beef" ? "selected" : ""}
        >
          <p>일식</p>
        </ChooseButton>
      </BtnSection>
      <BtnWapper>
        <MoveBtn onClick={() => setPreferStage(1)}>이전으로</MoveBtn>
        {secondChoice === "" ? (
          <MoveBtn
            onClick={() => {
              setPreferStage(3);
            }}
            disabled
          >
            다음으로
          </MoveBtn>
        ) : (
          <MoveBtn
            onClick={() => {
              setPreferStage(3);
            }}
          >
            다음으로
          </MoveBtn>
        )}
      </BtnWapper>
    </Section>
  );
};

export default Second;

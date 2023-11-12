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
          isselected={secondChoice === "rice"}
          className={secondChoice === "rice" ? "selected" : ""}
        >
          <p>쌀</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setSecondChoice("noodle");
          }}
          isselected={secondChoice === "noodle"}
          className={secondChoice === "noodle" ? "selected" : ""}
        >
          <p>면</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setSecondChoice("beef");
          }}
          isselected={secondChoice === "beef"}
          className={secondChoice === "beef" ? "selected" : ""}
        >
          <p>고기</p>
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

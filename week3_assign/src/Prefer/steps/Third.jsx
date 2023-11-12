import React from "react";
import ChooseButton from "../../components/ChooseButton";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";
import BtnWapper from "../../components/BtnWrapper";

const Third = ({ setPreferStage, setThirdChoice, thirdChoice }) => {
  return (
    <Section>
      <Question>마지막으로</Question>
      <p>3/3</p>
      <BtnSection>
        <ChooseButton
          onClick={() => {
            setThirdChoice("soup");
          }}
          isselected={thirdChoice === "soup"}
          className={thirdChoice === "soup" ? "selected" : ""}
        >
          <p>국물</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setThirdChoice("noodle");
          }}
          isselected={thirdChoice === "soupX"}
          className={thirdChoice === "soupX" ? "selected" : ""}
        >
          <p>국물없음</p>
        </ChooseButton>
      </BtnSection>
      <BtnWapper>
        <MoveBtn onClick={() => setPreferStage(2)}>이전으로</MoveBtn>
        {thirdChoice === "" ? (
          <MoveBtn
            onClick={() => {
              setPreferStage(4);
            }}
            disabled
          >
            다음으로
          </MoveBtn>
        ) : (
          <MoveBtn
            onClick={() => {
              setPreferStage(4);
            }}
          >
            다음으로
          </MoveBtn>
        )}
      </BtnWapper>
    </Section>
  );
};

export default Third;

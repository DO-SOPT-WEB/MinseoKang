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
      <Question>어느 나라 영상을 보고싶어?</Question>
      <p>2/3</p>
      <BtnSection>
        <ChooseButton
          onClick={() => {
            setSecondChoice("domestic");
          }}
          $isselected={secondChoice === "domestic"}
          className={secondChoice === "domestic" ? "selected" : ""}
        >
          <p>국내</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setSecondChoice("oversea");
          }}
          $isselected={secondChoice === "oversea"}
          className={secondChoice === "oversea" ? "selected" : ""}
        >
          <p>해외</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setSecondChoice("asia");
          }}
          $isselected={secondChoice === "asia"}
          className={secondChoice === "asia" ? "selected" : ""}
        >
          <p>아시아</p>
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

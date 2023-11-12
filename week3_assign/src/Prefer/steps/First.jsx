import React from "react";
import ChooseButton from "../../components/ChooseButton";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";
import BtnWapper from "../../components/BtnWrapper";

const First = ({ setPreferStage, setFirstChoice, firstChoice }) => {
  return (
    <Section>
      <Question>어떤 종류를 먹고 싶어?</Question>
      <p>1/3</p>
      <BtnSection>
        <br></br>
        <ChooseButton
          onClick={() => {
            setFirstChoice("korea");
          }}
          className={firstChoice === "korea" ? "selected" : ""}
        >
          <p>한식</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setFirstChoice("china");
          }}
          className={firstChoice === "china" ? "selected" : ""}
        >
          <p>중식</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setFirstChoice("japan");
          }}
          className={firstChoice === "japan" ? "selected" : ""}
        >
          <p>일식</p>
        </ChooseButton>
      </BtnSection>
      <BtnWapper>
        <MoveBtn onClick={() => setPreferStage(0)}>이전으로</MoveBtn>
        {firstChoice === "" ? (
          <MoveBtn
            onClick={() => {
              setPreferStage(2);
            }}
            disabled
          >
            다음으로
          </MoveBtn>
        ) : (
          <MoveBtn
            onClick={() => {
              setPreferStage(2);
            }}
          >
            다음으로
          </MoveBtn>
        )}
      </BtnWapper>
    </Section>
  );
};

export default First;

import React from "react";
import ChooseButton from "../../components/ChooseButton";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";
import BtnWapper from "../../components/BtnWrapper";
import QuestionWrapper from "../../components/QuestionWrapper";
import Nav from "../../components/Nav";

const First = ({ setPreferStage, setFirstChoice, firstChoice }) => {
  return (
    <Section>
      <QuestionWrapper>
        <Question>어떤 장르를 보고 싶어?</Question>
        <Nav>1/3</Nav>
      </QuestionWrapper>

      <BtnSection>
        <br></br>
        <ChooseButton
          onClick={() => {
            setFirstChoice("romance");
          }}
          $isselected={firstChoice === "romance"}
          className={firstChoice === "romance" ? "selected" : ""}
        >
          <p>로맨스</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setFirstChoice("thriller");
          }}
          $isselected={firstChoice === "thriller"}
          className={firstChoice === "thriller" ? "selected" : ""}
        >
          <p>스릴러</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setFirstChoice("sf");
          }}
          $isselected={firstChoice === "sf"}
          className={firstChoice === "sf" ? "selected" : ""}
        >
          <p>SF</p>
        </ChooseButton>
      </BtnSection>
      <BtnWapper>
        <MoveBtn onClick={() => setPreferStage(0)}>
          <p1>이전으로</p1>
        </MoveBtn>
        {firstChoice === "" ? (
          <MoveBtn
            onClick={() => {
              setPreferStage(2);
            }}
            disabled
          >
            <p1>다음으로</p1>
          </MoveBtn>
        ) : (
          <MoveBtn
            onClick={() => {
              setPreferStage(2);
            }}
          >
            <p1>다음으로</p1>
          </MoveBtn>
        )}
      </BtnWapper>
    </Section>
  );
};

export default First;

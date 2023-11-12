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
      <Question>마지막으로 영상의 종류를 선택해줘</Question>
      <p>3/3</p>
      <BtnSection>
        <ChooseButton
          onClick={() => {
            setThirdChoice("drama");
          }}
          $isselected={thirdChoice === "drama"}
          className={thirdChoice === "drama" ? "selected" : ""}
        >
          <p>드라마</p>
        </ChooseButton>
        <ChooseButton
          onClick={() => {
            setThirdChoice("movie");
          }}
          $isselected={thirdChoice === "movie"}
          className={thirdChoice === "movie" ? "selected" : ""}
        >
          <p>영화</p>
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

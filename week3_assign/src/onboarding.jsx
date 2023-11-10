import React from "react";
import styled from "styled-components";
import ChooseButton from "./components/ChooseButton";
import useInsert from "./Hooks/useInsert";
import MoveBtn from "./components/moveBtn";

const onboarding = ({ moveStep }) => {
  const { clickedOption, clickedOptionHandler } = useInsert();
  return (
    <Section>
      <Header>추천방식을 골라줘</Header>
      <BtnSection>
        <ChooseButton
          isclicked={clickedOption === 1 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(1)}
        >
          <p>취향선택</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 2 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(2)}
        >
          <p>랜덤</p>
        </ChooseButton>
      </BtnSection>
      <MoveBtn onClick={() => moveStep(1)}>시작하기</MoveBtn>
    </Section>
  );
};

const Section = styled.div`
  background-color: white;
  width: 44rem;
  height: 30rem;
  margin-left: calc((100vw - 44rem) / 2);
  margin-top: calc((100vh - 30rem) / 2);
  color: black;
`;

const BtnSection = styled.section`
  display: flex;
  width: 44rem;
  height: 20rem;
  background-color: pink;
`;

const Header = styled.h1`
  font-size: 1.5rem;
`;

export default onboarding;

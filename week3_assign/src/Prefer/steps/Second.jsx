import React from "react";
import styled from "styled-components"; // 추가
import ChooseButton from "../../components/ChooseButton";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";

const Second = ({ moveStep }) => {
  const { clickedOption, clickedOptionHandler } = useInsert();

  return (
    <Section>
      <Header>여기중에는</Header>
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
      <MoveBtn onClick={() => goToStepHandler(1)}>이전으로</MoveBtn>
      <MoveBtn onClick={() => goToStepHandler(3)}>다음으로</MoveBtn>
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

export default Second;

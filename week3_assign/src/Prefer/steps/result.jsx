import React from "react";
import styled from "styled-components"; // 추가
import ChooseButton from "../../components/ChooseButton";
import BtnSection from "../../components/BtnSection";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";

const result = ({}) => {
  return (
    <Section>
      <Header>결과</Header>
      <BtnSection></BtnSection>
      <MoveBtn>처음으로</MoveBtn>
    </Section>
  );
};

const Section = styled.div`
  background-color: red;
  width: 44rem;
  height: 30rem;
  margin-left: calc((100vw - 44rem) / 2);
  margin-top: calc((100vh - 30rem) / 2);
`;

const Header = styled.h1`
  font-size: 1.5rem;
`;

export default result;

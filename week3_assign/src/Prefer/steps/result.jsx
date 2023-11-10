import styled from "styled-components";
import DATA from "../assets";
import Title from "./Layout/Title";
import Buttons from "./Layout/Buttons";
import React from "react";

const result = ({}) => {
  return (
    <Section>
      <Header>어떤 종류를 먹고 싶어?</Header>
      <BtnSection></BtnSection>
      <MoveBtn>처음으로</MoveBtn>
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

export default result;

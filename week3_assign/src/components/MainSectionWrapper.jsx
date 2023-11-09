import React from "react";
import styled from "styled-components";
import ChooseButton from "./ChooseButton";

const MainSectionWrapper = () => {
  return (
    <Name>
      <Header>
        <h1>선택방식</h1>
      </Header>
      <ChooseButton>취향대로</ChooseButton>
      <ChooseButton>랜덤</ChooseButton>
    </Name>
  );
};

const Name = styled.div`
  background-color: white;
  color: white;
  width: 44rem;
  height: 30rem;
  margin-left: calc((100vw - 44rem) / 2);
  margin-top: calc((100vh - 30rem) / 2);
  color: black;
`;

const Header = styled.header`
  width: 44rem;
  height: 4rem;
  background-color: red;
`;

export default MainSectionWrapper;

import React from "react";
import styled from "styled-components";

const MainSectionWrapper = () => {
  return (
    <Name>
      <Header>선택방식</Header>
      <Selection>취향대로 추천</Selection>
      <Selection>랜덤 추천</Selection>
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
  color: blue;
`;

const Selection = styled.button`
  width: 10rem;
  height: 10rem;
`;

export default MainSectionWrapper;

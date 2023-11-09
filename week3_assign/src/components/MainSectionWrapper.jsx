import React from "react";
import styled from "styled-components";
import RandomArticle from "../Random/RandomArticle";
import TypeArticle from "../Type/TypeArticle";

const MainSectionWrapper = ({
  selectOption,
  selectOptionHandler,
  startPick,
  startPickHandler,
}) => {
  return (
    <Name>
      <Header>원하는 추천 방식을 골라줘</Header>
      {!startPick && (
        <RandomArticle
          selectOption={selectOption}
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
        />
      )}
      {!!startPick && (
        <TypeArticle
          selectOption={selectOption}
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
        />
      )}
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

// const ChooseButtonBig = styled(ChooseButton)`
//   width: 60rem;
//   font-size: 24px;
// `;

export default MainSectionWrapper;

import React from "react";
import styled from "styled-components";
import SelectType from "../Type/SelectTpe";
import SelectCategory from "./SelectCategory";

import PropTypes from "prop-types";
//유효성 검사

MainSectionWrapper.propTypes = {
  selectOption: PropTypes.string.isRequired,
  selectOptionHandler: PropTypes.func.isRequired,
  startPick: PropTypes.bool.isRequired,
  startPickHandler: PropTypes.func.isRequired,
}; //유효성 검사

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
        <SelectCategory
          selectOption={selectOption}
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
        />
      )}
      {!!startPick && (
        <SelectType
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

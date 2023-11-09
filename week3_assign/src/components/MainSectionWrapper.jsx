import React from "react";
import SelectCategory from "./SelectCategory";
// import SelectType from "../Type/SelectType";
import styled from "styled-components";

const MainSectionWrapper = ({
  selectOption,
  selectOptionHandler,
  setStartPick,
  startPickHandler,
}) => {
  return (
    <Name>
      <SelectCategory
        selectOption={selectOption}
        selectOptionHandler={selectOptionHandler}
        startPickHandler={startPickHandler}
      />
      {/* <SelectType
        selectOption={selectOption}
        selectOptionHandler={selectOptionHandler}
        startPickHandler={startPickHandler}
      /> */}
    </Name>
  );
};

const Name = styled.div`
  background-color: white;
  width: 44rem;
  height: 30rem;
  margin-left: calc((100vw - 44rem) / 2);
  margin-top: calc((100vh - 30rem) / 2);
  color: black;
`;

export default MainSectionWrapper;

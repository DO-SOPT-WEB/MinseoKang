import React from "react";
import SelectCategory from "./SelectCategory";
import ChoosePrefer from "../Prefer/Prefer";
import styled from "styled-components";

const MainSectionWrapper = ({
  selectOption,
  selectOptionHandler,
  setStartPick,
  startPickHandler,
}) => {
  return (
    <Section>
      <ChoosePrefer
        selectOption={selectOption}
        selectOptionHandler={selectOptionHandler}
        startPickHandler={startPickHandler}
      />
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

export default MainSectionWrapper;

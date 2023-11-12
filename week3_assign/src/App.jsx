import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import GlobalStyles from "./GlobalStyles";
import MainSectionWrapper from "./components/MainSectionWrapper";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <SectionWrapper>
        <MainSectionWrapper></MainSectionWrapper>
      </SectionWrapper>
    </>
  );
};

const SectionWrapper = styled.div`
  align-items: 100%;
  display: flex;
  justify-content: center;
`;
export default App;

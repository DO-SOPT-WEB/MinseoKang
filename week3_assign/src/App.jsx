import React from "react";
import GlobalStyles from "./GlobalStyles";
import MainSectionWrapper from "./components/MainSectionWrapper";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <section>
        <MainSectionWrapper></MainSectionWrapper>
      </section>
    </>
  );
};

export default App;

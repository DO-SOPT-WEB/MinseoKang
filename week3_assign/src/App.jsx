import React from "react";
import Header from "./components/header";
import GlobalStyles from "./GlobalStyles";
import MainSectionWrapper from "./components/MainSectionWrapper";
import SelectData from "./components/SelectData";

const App = () => {
  const {
    selectOption,
    setSelectOption,
    startPick,
    setStartPick,
    selectOptionHandler,
    startPickHandler,
  } = SelectData();
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainSectionWrapper
        selectOption={selectOption}
        selectOptionHandler={selectOptionHandler}
        setStartPick={setStartPick}
        startPickHandler={startPickHandler}
      />
    </>
  );
};

export default App;

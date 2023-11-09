import * as React from "react";
import Header from "./components/header";
import GlobalStyles from "./GlobalStyles";
import MainSectionWrapper from "./components/MainSectionWrapper";
import selectData from "./components/SelectData";

const App = () => {
  const useSelectData = () => {
    selectOption,
      setSelectOption,
      startPick,
      setStartPick,
      selectOptionHandler,
      startPickHandler;
  };
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

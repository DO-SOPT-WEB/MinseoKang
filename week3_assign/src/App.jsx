import * as React from "react";
import Header from "./components/header";
import MainSection from "./components/MainSection";
import GlobalStyles from "./GlobalStyles";

const App = () => (
  <React.Fragment>
    <Header></Header>
    <MainSection></MainSection>
    <GlobalStyles />
  </React.Fragment>
);

export default App;

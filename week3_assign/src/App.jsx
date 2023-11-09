import * as React from "react";
import Header from "./components/header";
import GlobalStyles from "./GlobalStyles";

const App = () => (
  <React.Fragment>
    <Header></Header>
    <div>Hi, Im an app!</div>
    <GlobalStyles />
  </React.Fragment>
);

export default App;

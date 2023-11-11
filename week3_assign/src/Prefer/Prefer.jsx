import React, { useState } from "react";
import Onboarding from "../onboarding";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";
import Result from "./steps/result";

// ChoosePrefer 컴포넌트는 현재 선택된 단계를 상태로 관리
const ChoosePrefer = ({ selectOptionHandler, startPickHandler }) => {
  const [goToStep, setGoToStep] = useState(0);
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");

  return (
    <>
      {goToStep === 0 && (
        <Onboarding
          setselectOptionHandler={selectOptionHandler}
          setstartPickHandler={startPickHandler}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 1 && (
        <First
          setselectOptionHandler={selectOptionHandler}
          setfirstChoice={setFirstChoice}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 2 && (
        <Second
          setselectOptionHandler={selectOptionHandler}
          setsecondChoice={setSecondChoice}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 3 && (
        <Third
          setselectOptionHandler={selectOptionHandler}
          setthirdChoice={setThirdChoice}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 4 && (
        <Result
          selectOptionHandler={selectOptionHandler}
          setfirstChoice={setFirstChoice}
          setsecondChoice={setSecondChoice}
          setthirdChoice={setThirdChoice}
          setmoveStep={setGoToStep}
        />
      )}
    </>
  );
};

export default ChoosePrefer;

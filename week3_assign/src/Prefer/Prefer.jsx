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

  const [startPick, setStartPick] = useState(false);

  return (
    <>
      {goToStep === 0 && (
        <Onboarding
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 1 && (
        <First
          selectOptionHandler={selectOptionHandler}
          setFirstChoice={setFirstChoice}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 2 && (
        <Second
          selectOptionHandler={selectOptionHandler}
          setSecondChoice={setSecondChoice}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 3 && (
        <Third
          selectOptionHandler={selectOptionHandler}
          setThirdChoice={setThirdChoice}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 4 && (
        <Result
          selectOptionHandler={selectOptionHandler}
          setFirstChoice={setFirstChoice}
          setSecondChoice={setSecondChoice}
          setThirdChoice={setThirdChoice}
          moveStep={setGoToStep}
        />
      )}
    </>
  );
};

export default ChoosePrefer;

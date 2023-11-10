import React, { useState } from "react";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";
import SelectData from "../Hooks/SelectData";

// ChoosePrefer 컴포넌트는 현재 선택된 단계를 상태로 관리
const ChoosePrefer = ({ selectOptionHandler, startPickHandler }) => {
  const [goToStep, setGoToStep] = useState(1);
  const goToStepHandler = (number) => {
    setGoToStep(number);
  };

  return (
    <>
      {goToStep === 1 && (
        <First
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          goToStepHandler={goToStepHandler}
        />
      )}
      {goToStep === 2 && <Second goToStepHandler={goToStepHandler} />}
      {goToStep === 3 && <Third goToStepHandler={goToStepHandler} />}
    </>
  );
};

export default ChoosePrefer;

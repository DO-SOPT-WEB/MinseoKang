import React, { useState } from "react";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";

// ChoosePrefer 컴포넌트는 현재 선택된 단계를 상태로 관리
const ChoosePrefer = ({ selectOptionHandler, startPickHandler }) => {
  const [goToStep, setGoToStep] = useState(1);
  console.log(goToStep);

  return (
    <>
      {goToStep === 1 && (
        <First
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 2 && (
        <Second
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          moveStep={setGoToStep}
        />
      )}
      {goToStep === 3 && (
        <Third
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
          moveStep={setGoToStep}
        />
      )}
    </>
  );
};

export default ChoosePrefer;

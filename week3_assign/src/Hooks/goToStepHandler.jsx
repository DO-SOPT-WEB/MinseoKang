import { useState } from "react";

const useStepHandler = (number) => {
  const [goToStep, setGoToStep] = useState(1);

  setGoToStep(number);

  return { goToStep, setGoToStep };
};

export default useStepHandler;

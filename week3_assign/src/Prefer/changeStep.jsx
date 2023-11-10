const changeStep = ({ selectOptionHandler, startPickHandler }) => {
  // changeStep을 사용하여 현재 단계(step)와 해당 단계를 변경할 수 있는 setStep 함수를 가져옴
  const useStep = () => {
    const [step, setStep] = useState(1);
    const setStepHandler = (number) => {
      setStep(number);
    };

    return { setStep, setStepHandler };
  };
};

import { useState } from "react";

function SelectData() {
  const [selectOption, setSelectOption] = useState("");
  const [startPick, setStartPick] = useState(false);

  const selectOptionHandler = (selected) => {
    setSelectOption(selected);
  };

  const startPickHandler = (isStart) => {
    setSelectOption(isStart);
  };
  return {
    selectOption,
    setSelectOption,
    startPick,
    setStartPick,
    selectOptionHandler,
    startPickHandler,
  };
}

export default SelectData;

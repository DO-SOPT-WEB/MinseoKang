import { useState } from "react";

function SelectData() {
  const [selectOption, setSelectOption] = useState("");
  const selectOptionHandler = (selected) => {
    setSelectOption(selected);
  };
  const [startPick, setStartPick] = useState(false);
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

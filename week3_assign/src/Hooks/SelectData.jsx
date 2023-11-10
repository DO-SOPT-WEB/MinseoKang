import { useState } from "react";

function SelectData() {
  const [selectOption, setSelectOption] = useState("");
  const selectOptionHandler = (selected) => {
    setSelectOption(selected);
  };
  //취향대로, 랜덤 값 보내기
  const [startPick, setStartPick] = useState(false);
  const startPickHandler = (isStart) => {
    setSelectOption(isStart);
  };

  //시작 버튼 누르기
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

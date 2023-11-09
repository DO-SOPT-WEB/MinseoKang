import { useState } from "react";

const selectBtn = () => {
  const [clickedBtn, setClickBtn] = useState(0);
  const clickedBtnHandler = (number) => setClickBtn(number);
  return { clickedBtn, clickedBtnHandler };
};

export default selectBtn;

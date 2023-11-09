import React, { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const Prefer = ({ startPickHandler }) => {
  const [step, setStep] = useState(1);

  return;
  <>
    <First></First>
    <Second></Second>
    <Third></Third>
  </>;
};

export default Prefer;

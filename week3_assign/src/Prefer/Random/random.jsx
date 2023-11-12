import React, { useState } from "react";
import Data from "../../assets/data";
import Countdown from "./countdown";

const Random = () => {
  const [random, setRandom] = useState(false);
  const type = () => {
    setRandom(true);
  };
  return <div></div>;
};

export default Random;

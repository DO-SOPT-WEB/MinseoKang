import React, { useState } from "react";
import Data from "../../assets/data";
import Countdown from "./countdown";

const Random = () => {
  const [random, setRandom] = useState(false);
  const type = () => {
    setRandom(true);
  };
  return (
    <>
      {!random && (
        <>
          <p>랜덤</p>
          <button onClick={result}> 시작하기</button>
        </>
      )}
      {random && <Countdown setRandom={setRandom} />}
    </>
  );
};

export default Random;

import React, { useEffect, useState } from "react";

const CountDown = ({ setRandomType }) => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  return (
    <>
      {time ? (
        time
      ) : (
        <>{/* <RandomResult setRandomType={setRandomType} /> */}</>
      )}
    </>
  );
};

export default CountDown;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RandomResult from "./RandomResult";
import Section from "../../components/section";

const CountDown = ({ setRandom }) => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  return (
    <Section>
      {time ? (
        <CountDownNumber>{time}</CountDownNumber>
      ) : (
        <RandomResult setRandom={setRandom} />
      )}
    </Section>
  );
};

const CountDownNumber = styled.div`
  padding-top: 10.5rem;
  color: white;
  font-size: 3rem;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export default CountDown;

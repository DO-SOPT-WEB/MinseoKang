import React from "react";
import Section from "../../components/section";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";

const Result = ({ filterList, setPreferStage }) => {
  const result = filterList();

  return (
    <Section>
      <Question>결과</Question>
      <p>{result.name}</p>
      <img src={result.img} alt={result.name}></img>
      <MoveBtn onClick={() => setPreferStage(0)}>처음으로</MoveBtn>
    </Section>
  );
};

export default Result;

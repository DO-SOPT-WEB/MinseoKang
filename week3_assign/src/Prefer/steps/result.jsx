import React, { useState } from "react";
import styled from "styled-components"; // 추가
import Section from "../../components/section";
import { FOOD_DATA, FOOD_TITLE } from "../../assets/data";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";

const Result = ({
  setFirstChoice,
  setSecondChoice,
  setThirdChoice,
  moveStep,
}) => {
  const { clickedOption, clickedOptionHandler } = useInsert();
  const [imgSrc, setimgSrc] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const determineResult = () => {
    console.log("ee");
  };

  return (
    <Section>
      <Question>결과</Question>
      <img src={imgSrc} alt="result"></img>
      <h1>{movieTitle}</h1>
      <MoveBtn onClick={() => moveStep(0)}>처음으로</MoveBtn>
    </Section>
  );
};

export default Result;

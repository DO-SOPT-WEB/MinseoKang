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
    // 여기에 이미지와 영화 제목을 결정하는 로직 추가
    // pickedArr를 이용하여 적절한 데이터를 가져와서 설정
  };

  useEffect(() => {
    determineResult();
  }, []);
  return (
    <Section>
      <Question>결과</Question>
      <img src={imgSrc} alt="result"></img>
      <h1>{movieTitle}</h1>
      <MoveBtn>처음으로</MoveBtn>
    </Section>
  );
};

export default Result;

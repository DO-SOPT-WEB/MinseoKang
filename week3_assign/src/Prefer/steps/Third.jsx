import React, { useState } from "react";
import styled from "styled-components";
import Section from "../../components/section";
import BtnSection from "../../components/BtnSection";
import ChooseButton from "../../components/ChooseButton";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";
import Question from "../../components/Question";
import Result from "./result";
import { MOVIE_DATA, MOVIE_TITLE } from "../../assets/data";

const Third = ({ moveStep }) => {
  const { clickedOption, clickedOptionHandler, pickedArr } = useInsert();
  const [movieTitle, setMovieTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const ResultBtn = () => {
    let result = [];
    for (const [key, value] of Object.entries(pickedArr)) {
      result.push(value);
    }
    let resultImgSrc = `src/assets/img/p${result[0]}_${result[1]}_${result[2]}.jpeg`;
    setMovieTitle(MOVIE_TITLE[result[0]][result[1]][result[2]]);
    setImgSrc(resultImgSrc);
  };

  return (
    <Section>
      <Question>영상의 길이는?</Question>
      <BtnSection>
        <ChooseButton
          isclicked={clickedOption === 1 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(1)}
        >
          <p>드라마</p>
        </ChooseButton>
        <ChooseButton
          isclicked={clickedOption === 2 ? "checked" : "unchecked"}
          onClick={() => clickedOptionHandler(2)}
        >
          <p>영화</p>
        </ChooseButton>
      </BtnSection>
      <MoveBtn onClick={() => moveStep(3)}>이전으로</MoveBtn>
      <MoveBtn onClick={() => moveStep(4)}>결과보기</MoveBtn>
      {moveStep === 4 && <Result pickedArr={pickedArr} />}
    </Section>
  );
};

export default Third;

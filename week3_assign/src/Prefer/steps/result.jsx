import React, { useState } from "react";
import styled from "styled-components"; // 추가
import Section from "../../components/section";

import { MOVIE_DATA, MOVIE_TITLE } from "../../assets/data";
import useInsert from "../../Hooks/useInsert";
import MoveBtn from "../../components/moveBtn";

const Result = ({ pickedArr }) => {
  const [movieTitle, setmovieTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const ResultBtn = () => {
    let result = [];

    for (const [key, value] of Object.entries(pickedArr)) {
      result.push(value);
    }

    let resultImgSrc = `src/assets/img/p${result[0]}_${result[1]}_${result[2]}.jpeg`;
    setmovieTitle(MOVIE_TITLE[result[0]][result[1]][result[2]]);
    setImgSrc(resultImgSrc);
  };

  return (
    <Section>
      <Header>결과</Header>
      <img src={imgSrc} alt="result"></img>
      <h1>{movieTitle}</h1>
      <MoveBtn>처음으로</MoveBtn>
    </Section>
  );
};

const Header = styled.h1`
  font-size: 1.5rem;
`;

export default Result;

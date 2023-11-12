import React from "react";
import styled from "styled-components";
import Section from "../../components/section";
import MoveBtn from "../../components/moveBtn";
import Title from "../../components/Title";
import BtnWapper from "../../components/BtnWrapper";

const Result = ({ filterList, setPreferStage }) => {
  const result = filterList();

  return (
    <Section>
      <Title>결과</Title>

      <ImgSection>
        <img src={result.img} alt={result.name}></img>
      </ImgSection>
      <ResultName>{result.name}</ResultName>
      <BtnWapper>
        <MoveBtn onClick={() => setPreferStage(0)}>
          <p>처음으로</p>
        </MoveBtn>
      </BtnWapper>
    </Section>
  );
};

const ImgSection = styled.section`
  display: flex;
  justify-content: center;
  height: 12rem;
`;

const ResultName = styled.section`
  display: flex;
  color: #e50914;
  justify-content: center;
  margin: 1rem 0;
`;

export default Result;

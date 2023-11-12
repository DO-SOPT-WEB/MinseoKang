import React from "react";
import Data from "../../assets/data";
import Section from "../../components/section";
import styled from "styled-components";
import MoveBtn from "../../components/moveBtn";
import Title from "../../components/Title";
import BtnWapper from "../../components/BtnWrapper";

const RandomResult = ({ setRandom }) => {
  const drawRandom = () => {
    return Data[Math.floor(Math.random() * Data.length)];
  };

  const randomResult = drawRandom();

  return (
    <Section>
      <Title>결과</Title>
      <ImgSection>
        <img src={randomResult.img} alt={randomResult.name} />
      </ImgSection>
      <ResultName>{randomResult.name}</ResultName>
      <BtnWapper>
        <MoveBtn
          onClick={() => {
            setRandom(false);
          }}
        >
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

export default RandomResult;

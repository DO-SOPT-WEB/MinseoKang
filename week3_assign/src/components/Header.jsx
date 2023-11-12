import React from "react";
import styled from "styled-components";
import MoveBtn from "./moveBtn";

function Header({ moveStep }) {
  // useInsert 훅을 통해 얻은 clickedOption와 clickedOptionHandler를 사용하지 않습니다.
  // const { clickedOption, clickedOptionHandler } = useInsert();

  return (
    <>
      <HeaderBox>
        <h1>점메추</h1>
        <MoveBtn onClick={() => moveStep(0)}>처음으로</MoveBtn>
      </HeaderBox>
    </>
  );
}

const HeaderBox = styled.header`
  display: flex;
  width: 100vw;
  height: 3rem;
  background-color: pink;
  position: relative;
  font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
`;

// HeaderBtn은 사용되지 않으므로 제거합니다.
// const HeaderBtn = styled.button`
//   color: pink;
//   position: absolute;
//   right: 3rem;
// `;

export default Header;

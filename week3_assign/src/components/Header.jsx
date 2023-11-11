import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderBox>
        <h1>점메추</h1>
        <HeaderBtn>처음으로</HeaderBtn>
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

const HeaderBtn = styled.button`
  color: pink;
  position: absolute;
  right: 3rem;
`;

export default Header;

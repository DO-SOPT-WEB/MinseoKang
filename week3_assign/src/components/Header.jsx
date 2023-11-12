import React from "react";

import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderBox>
        <h1>오늘 뭐보지</h1>
        <Begin>처음으로</Begin>
      </HeaderBox>
    </>
  );
}

const HeaderBox = styled.header`
  display: flex;
  background-color: pink;
  position: relative;
  color: black;
  padding: 1rem;
`;

const Begin = styled.button`
  width: 5rem;

  position: absolute;
  right: 1rem;
`;

export default Header;

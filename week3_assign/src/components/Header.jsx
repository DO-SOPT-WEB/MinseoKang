import React from "react";

import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderBox>
        <H1>❤️오늘의 넷플릭스 추천🎬</H1>
        <Begin>처음으로</Begin>
      </HeaderBox>
    </>
  );
}

const HeaderBox = styled.header`
  display: flex;
  position: relative;
  color: #e9e9e9;
  padding: 1rem;
`;

const H1 = styled.h1`
  font-size: 1.3rem;
`;

const Begin = styled.button`
  position: absolute;
  right: 1rem;
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  border-style: none;
  cursor: pointer;
  &:hover {
    background-color: #a1a1a1;
  }
`;

export default Header;

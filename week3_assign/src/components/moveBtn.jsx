import React from "react";
import styled from "styled-components";

const moveBtn = (props) => {
  return <Btn>{props.children}</Btn>;
};

const Btn = styled.button`
  width: 2rem;
  height: 1rem;
`;

export default moveBtn;

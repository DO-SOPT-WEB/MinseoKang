import React from "react";
import styled from "styled-components";

const moveBtn = (props) => {
  return <Btn onClick={props.onClick}>{props.children}</Btn>;
};

const Btn = styled.button`
  width: 5rem;
  height: 3rem;
  margin: 0 0.2rem;
  border-radius: 0.5rem;
  border-style: none;
  cursor: pointer;
  &:hover {
    background-color: #222;
    color: white;
  }
`;

export default moveBtn;

import React from "react";
import styled from "styled-components";

const MoveBtn = (props) => {
  return (
    <Btn disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
};

const Btn = styled.button`
  margin-left: 10rem;
  width: 5rem;
  height: 2.4rem;
  margin: 0 0.2rem;
  border-radius: 0.5rem;
  border-style: none;
  cursor: pointer;
  color: ${(props) => (props.disabled ? "#2e2e2e" : "black")};
  background-color: ${(props) => (props.disabled ? "#4d4d4d" : "#e9e9e9")};

  font-weight: 300;
  &:hover {
    background-color: #a1a1a1;
  }
`;

export default MoveBtn;

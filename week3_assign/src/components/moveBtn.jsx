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
  height: 3rem;
  margin: 0 0.2rem;
  border-radius: 0.5rem;
  border-style: none;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#fff" : "white")};
  color: ${(props) => (props.disabled ? "#fff" : "#141414")};
  &:hover {
    background-color: #222;
    color: white;
  }
`;

export default MoveBtn;

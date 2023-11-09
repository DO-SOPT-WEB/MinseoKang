import React from "react";
import styled from "styled-components";

const ChooseButton = (props) => {
  <Button>{props.children}</Button>;
};

const Button = styled.button`
  width: 12rem;
  height: 10rem;
  font-size: 1.3rem;
  font-weight: 500;
  background: pink;
  cursor: pointer;
  border-radius: 0.8rem;
  margin: 0 0.3rem;
  border-style: none;

  &: hover {
    background-color: blue;
  }
`;

export default ChooseButton;

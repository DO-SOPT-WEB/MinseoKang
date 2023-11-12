import styled from "styled-components";

const ChooseButton = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 10rem;
  border: 1px solid;
  border-radius: 1rem;
  margin: 0 0.2rem;
  cursor: pointer;

  background-color: ${(props) =>
    props.$isclicked === "checked" ? "green" : "white"};
  &:hover {
    background-color: #222;
  }
`;

export default ChooseButton;

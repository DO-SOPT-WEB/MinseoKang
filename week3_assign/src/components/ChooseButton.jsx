import styled from "styled-components";

const ChooseButton = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 10rem;
  border-radius: 1rem;
  margin: 2.2rem 0.3rem;
  cursor: pointer;
  border: solid 1.2px #2e2e2e;
  color: #e9e9e9;

  background-color: ${(props) => (props.$isselected ? "#1a1a1a" : "#2e2e2e")};
  border-color: ${(props) => (props.$isselected ? "#e50914" : "#2e2e2e")};
  color: ${(props) => (props.$isselected ? "#e50914" : "white")};
  &:hover {
    background-color: #4d1a1a;
    border: solid 1px #e50914;
    color: #e50914;
  }
`;

export default ChooseButton;

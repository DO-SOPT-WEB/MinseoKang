import styled from "styled-components";

const info = styled.p`
  height: 2rem;
  transform: translate(0, -50%);
  height: 5rem;
  width: 9rem;
  margin: 4rem 2rem;
  display: grid;
  grid-gap: 0.5rem;

  & > p {
    background-color: ${({ theme }) => theme.gray1};
    line-height: 2.5rem;
    padding-left: 0.3rem;
  }
`;

export default info;

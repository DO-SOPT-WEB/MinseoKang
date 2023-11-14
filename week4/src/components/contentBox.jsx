import styled from "styled-components";

const contentBox = styled.section`
  display: grid;
  place-items: center;
  width: 30rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.white};
  grid-gap: 0.3rem;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  border-radius: 1.3rem;
`;
export default contentBox;

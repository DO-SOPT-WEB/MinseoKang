import styled from "styled-components";

const Main = styled.button`
  width: 25rem;
  height: 2.5rem;

  border-style: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.yellow};
`;

const Secondary = styled.button`
  width: 25rem;
  height: 2.5rem;
  border-style: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.grey2};
`;

const Cta = { Main, Secondary };
export default Cta;

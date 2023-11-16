import styled from "styled-components";

const Main = styled.button`
  width: 25rem;
  height: 2.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-style: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.yellow};
  cursor: pointer;
`;

const Secondary = styled.button`
  width: 25rem;
  height: 2.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  font-color: ${({ theme }) => theme.gray2};
  border-style: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.gray1};
  cursor: pointer;
`;

const Cta = { Main, Secondary };
export default Cta;

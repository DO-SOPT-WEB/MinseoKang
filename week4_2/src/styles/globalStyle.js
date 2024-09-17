import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

body{
  background-color:  ${({ theme }) => theme.gray1};
  width: 100%;
  margin: 0 auto;
font-family: 'Noto Sans KR', sans-serif;
}

`;

export default GlobalStyle;

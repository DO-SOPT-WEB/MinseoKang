import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

body{
  background-color: #f2f3f7;
  width: 100%;
  margin: 0 auto;
}

}

*{
    font-family: 'IBM Plex Sans KR', sans-serif;
font-family: 'Questrial', sans-serif;

}

`;

export default GlobalStyle;

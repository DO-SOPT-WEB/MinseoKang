import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

#root, body, html{
    width: 100%;
    height: 100vh;
    margin: 0 auto;
}


*{
    ${({ theme }) => theme.font};
    box-sizing: border-box;
}
`;

export default GlobalStyle;

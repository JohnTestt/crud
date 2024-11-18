import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({theme}) => theme.bodyBackground};
    color: ${({theme}) => theme.color};
  }
  
`;
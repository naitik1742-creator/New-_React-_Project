import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    transition:
      background 0.3s ease,
      color 0.3s ease;
  }

  button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
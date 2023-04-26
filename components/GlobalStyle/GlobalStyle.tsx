import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: inherit;
    overflow-wrap: break-word;
  }

  ul {
    list-style: none;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  *:focus {
    outline: none;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.ring};
  }

  :root {
    color-scheme: dark;
  }

  body {
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes[400]};
    font-family: ${({ theme }) => theme.fontFamilies.base};
  }
`;

export default GlobalStyle;

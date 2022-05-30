import { createGlobalStyle } from 'styled-components'

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

  html,
  body {
    height: 100%;
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
    overflow-wrap: break-word;
  }

  ul {
    list-style: none;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  *:not(input):focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes[400]};
    font-family: ${({ theme }) => theme.fontFamilies.base};
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    background-image: url('/background.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(60px);
    opacity: 0.2;
  } 
`

export default GlobalStyle

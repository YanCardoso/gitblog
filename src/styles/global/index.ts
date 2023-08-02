import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }

 body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  input:focus {
    outline: none;
  }
`

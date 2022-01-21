import { createGlobalStyle } from 'styled-components'
import { colors } from './theme/colors'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
  
  * {
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    background-color: ${colors.appBackground};
    margin: 0;
  }

  p {
    margin: 0;
  }
`

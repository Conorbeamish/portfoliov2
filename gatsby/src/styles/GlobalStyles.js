import {createGlobalStyle} from "styled-components";
import Lato from "../assets/fonts/Lato/Lato-Regular.ttf"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Lato;
    src: url(${Lato});
  }
  :root {
    --highlight-blue: #43b7ff;
  }

  body{
    margin: 0;
    font-family: Lato;
    letter-spacing: 0.05rem;
    color: var(--text-color);
    --landing-bg: linear-gradient(145deg,#001099 0,#3ad9ff 96%);
    --text-color:  #2e2e2e;
    //Sets opacity for dark mode items
    --dark-item: 0;
  }
  body.dark {
    --landing-bg: black;
    --text-color: #F3F4F5;
    --dark-item: 1;
  }


  ul {
    list-style:none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(--text-color);
  }
  a:visited {
    color: var(--text-color)
  } 
`
export default GlobalStyles
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2e2e2e;
    --highlight-blue: #43b7ff;
  }
  body{
    margin: 0;
  }
  ul {
    list-style:none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:visited {
    color: var(--black)
  } 
`
export default GlobalStyles
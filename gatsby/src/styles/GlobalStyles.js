import {createGlobalStyle} from "styled-components";
import Lato from "../assets/fonts/Lato/Lato-Regular.ttf";
import LatoBold from "../assets/fonts/Lato/Lato-Bold.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Lato;
    src: url(${Lato});
  }
  @font-face {
    font-family: Lato;
    src: url(${LatoBold});
    font-weight: bold;
  }
  :root {
    --black: #00111c;
    --white: #F3F4F5;
    --dark-grey: #2e2e2e;
    --light-grey: #a9a9a9;
    --highlight-blue: #43b7ff;
    --blue: #005a91;
    --navy-blue: #001d2f;
    --dark-blue: #00111c;
  }

  body{
    margin: 0;
    font-family: Lato;
    letter-spacing: 0.075rem;
    color: var(--text-color);
    background-color: var(--background-color);
    overflow: overlay;
    ::-webkit-scrollbar-track{
      background-color: transparent;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
    ::-webkit-scrollbar{
      width: 10px; 
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb{
      background-color: var(--highlight-blue);
      border: 2px solid #555555;
      border-radius: 0.25rem;
    }

    --landing-bg: linear-gradient(145deg,#001099 0,#3ad9ff 96%);
    --text-color:  var(--black);
    --text-color-opposite: var(--white);
    --link-border: var(--black);
    --background-color: var(--white);
    --card-border: var(--dark-blue);
    --card-shadow: 0px 3px 5px 3px rgba(0,0,0,0.5);

    //Sets opacity for dark mode items
    --dark-item: 0;
    
    --dark-display: none;
    --light-display: block;
  }
  body.dark {
    --landing-bg: rgba(0,0,0,0);
    --text-color: var(--white);
    --text-color-opposite:  var(--black);
    --dark-item: 1;
    --link-border: var(--highlight-blue);
    --background-color: var(--black); 

    --card-border: var(--highlight-blue);
    --card-shadow: 0px 0px 25px -5px var(--highlight-blue);
    
    //Set opacity for light mode items
    --light-item: 0;

    --light-display: none;
    --dark-display: block;
  }
  h1, h2, h3, h4, h5{
    font-weight: bold;
    letter-spacing: 0.1rem;
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
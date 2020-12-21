import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import LightSwitch from './LightSwitch';

const NavStyle = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 0 0.5rem 0 0.5rem;
  }
  a {
    padding: 0.25rem;
    margin-right: 0.25rem;
    &:hover{
      border-bottom: 2px solid var(--highlight-blue);
    }
    &[aria-current="page"]{
      border-bottom: 2px solid var(--highlight-blue);
    }
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    backdrop-filter: blur(2px);
    z-index: 100;
  }
  h1{
    margin: 1rem;
    border-bottom: solid 2px var(--highlight-blue);
    display: none;
  }
  @media only screen and (min-width: 600px) {
    h1{
      display: block;
    }
  }
`;

const Nav = ({location}) => {
  const {pathname} = location
  let middleLink

  //Changes the animation direction depending on location in the application.
  switch (pathname) {
    case "/":
      middleLink = <AniLink cover direction="left" duration={1} bg="#00111c" to="/projects">Projects</AniLink>
      break;
    case "/contact":
      middleLink = <AniLink cover direction="right" duration={1} bg="#00111c" to="/projects">Projects</AniLink>
      break;
    default:
      middleLink = <AniLink  fade to="/projects">Projects</AniLink>
      break;
  }

  return (  
    <NavStyle>
      <nav>
        <h1>CB</h1>
        <ul>
          <li>
            <AniLink cover direction="right" duration={1} bg="#00111c" to="/">About</AniLink>
          </li>
          <li>
            {middleLink}
          </li>
          <li>
            <AniLink cover direction="left" duration={1} bg="#00111c" to="/contact">Contact</AniLink>
          </li>        
        </ul>
        <LightSwitch />
      </nav>
    </NavStyle>
  );
}
 
export default Nav;
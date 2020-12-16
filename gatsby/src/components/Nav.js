import React from 'react';
import styled from 'styled-components';
import {Link} from "gatsby";
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
  .on-page{
    &[aria-current="page"]{
      border-bottom: 2px solid var(--highlight-blue);
    }
  }
  @media only screen and (min-width: 600px) {
    h1{
      display: block;
    }
  }
`;

const Nav = () => {
  return (  
    <NavStyle>
      <nav>
        <h1>CB</h1>
        <ul>
          <li>
            <Link className="on-page" to="/">About</Link>
          </li>
          <li>
            <Link className="on-page" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="on-page" to="/contact">Contact</Link>
          </li>        
        </ul>
        <LightSwitch />
      </nav>
    </NavStyle>
  );
}
 
export default Nav;
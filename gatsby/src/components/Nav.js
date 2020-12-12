import React from 'react';
import styled from 'styled-components';
import {Link} from "gatsby";

const NavStyle = styled.nav`
  .on-page{
    &[aria-current="page"]{
      border-bottom: 2px solid var(--highlight-blue);
    }
  }
`;

const Nav = () => {
  return (  
    <NavStyle>
      <h1>CB</h1>
      <ul>
        <li>
          <Link className="on-page" to="/">About</Link>
        </li>
        <li>
          <Link className="on-page" to="/skills">Skills</Link>
        </li>
        <li>
          <Link className="on-page" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="on-page" to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyle>
  );
}
 
export default Nav;
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import {BsMoon, BsSun} from "react-icons/bs";
import styled from 'styled-components';

const LightSwitchStyle = styled.div`
  svg{
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    margin: 1rem;
  }
`

const LightSwitch = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
          return (
            <LightSwitchStyle>
              {theme === "light" ? 
                <BsMoon
                  onClick={() => {
                    const nextTheme = theme === 'light' ? 'dark' : 'light'
                    toggleTheme(nextTheme)
                  }}
                />
              : 
                <BsSun
                  onClick={() => {
                    const nextTheme = theme === 'light' ? 'dark' : 'light'
                    toggleTheme(nextTheme)
                  }}
                />
              }
            </LightSwitchStyle>
          )
      }}


      {/* {({theme, toggleTheme}) => (
        <label>
          <input 
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          Dark Mode
        </label>
      )} */}
    </ThemeToggler>
  );
}
 
export default LightSwitch;
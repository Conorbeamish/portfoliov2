import React from 'react';
import styled from 'styled-components';
import fullstack from "../assets/svg/fullstack.svg";
import modern from "../assets/svg/modern.svg";
import responsive from "../assets/svg/responsive.svg";

const AboutStyle = styled.section`
  width:80%;
  margin: 5rem auto;
  min-height: 100vh;
  @media only screen and (min-width: 768px) {
    width:60%;
  }
  text-align: center;
  p{
    color: var(--text-color-soft);
  }
  h2{
    border-bottom: solid 2px var(--highlight-blue);
    width: auto;
    display: inline-block;
    padding-bottom: 0.5rem;
  }
  img{
    height: 5rem;
  }
`
const IconContainer = styled.div`
  margin: 5rem auto;
  display: grid;
  grid-auto-rows: auto auto auto;
  row-gap: 3rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const About = () => {
  return (
    <AboutStyle>
      <h2>What I do</h2>
      <p>Aliquam vel quam eget ex accumsan fringilla. Etiam viverra, leo aliquet bibendum accumsan, magna lacus cursus dolor, a vehicula dolor arcu at ligula. Nullam egestas, mi laoreet tincidunt fermentum, ex purus rutrum quam, eget fringilla augue velit ut dui. Donec suscipit condimentum quam sed scelerisque. Vivamus consectetur fermentum diam, ac malesuada quam eleifend vel. Sed egestas mauris ex, vitae lacinia eros consequat et.</p>
      <IconContainer>
        <div>
          <img src={responsive} alt="Responsive Design"/>
          <h3>Responsive Design</h3>
          <p>I make......</p>
        </div>
        <div>
          <img src={fullstack} alt="Full Stack" />
          <h3>Full Stack Dev</h3>
          <p>I program.....</p>
        </div>
        <div>
          <img src={modern} alt="modern technology" />
          <h3>Modern Technology</h3>
          <p>I use.......</p>
        </div>
      </IconContainer>
      <h2>Get to know me</h2>
    </AboutStyle>
  );
}
 
export default About;
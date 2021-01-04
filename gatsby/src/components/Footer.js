import React from 'react';
import styled from 'styled-components';
import wave from "../assets/svg/wave.svg";
import wavedark from "../assets/svg/wavedark.svg";
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/Ai";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const FooterStyles = styled.footer`
  text-align: center;
  min-height: 50vh;
  position: relative;
  background-color: var(--navy-blue);
  img {
    z-index: 1;
    position: absolute;
    width: 100%;
    top: -1px;
    -webkit-transform: scale(-1, -1);
    transform: scale(-1, -1);
  }
  img:nth-child(1){
    display: var(--light-display);
  }
  img:nth-child(2){
    display: var(--dark-display);
  }
`
const FooterContentStyle = styled.div`
  position: relative;
  z-index: 10;
  padding-top: 5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--text-color-soft);
  h3{
    color: var(--white);
  }
  li{
    margin: 0.5rem 0;
  }
  a{
    color: var(--text-color-soft);
    transition: 0.25s;
    &:hover{
      color: var(--white);
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding-top: 15rem;
  }
`;
const IconContainer = styled.div`
  svg{
    height: 2rem;
    width: 2rem;
    margin: 1rem 2rem;
    color: var(--text-color-soft);
    cursor: pointer;
    &:hover{
      color: var(--blue);
    }
  }
`;

const Footer = ({location}) => {
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
    <FooterStyles>
      <img src={wave} alt="Background wave" />
      <img src={wavedark} alt="Background wave" />
      <FooterContentStyle>
        <div>
          <h3>Nav</h3>
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
        </div>
        <div>
          <h3>Find Me</h3>
          <IconContainer>
            <a href="https://github.com/Conorbeamish/" target="_blank" rel="noopener noreferrer">
              <AiFillGithub/>
            </a>
            <a href="https://www.linkedin.com/in/conor-beamish-81b512192/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin/>
            </a>
            <a href="mailto:conorbeamish@hotmail.co.uk">
              <AiOutlineMail/>
            </a>
          </IconContainer>
        </div>
      </FooterContentStyle>
    </FooterStyles>
  );
}
 
export default Footer;
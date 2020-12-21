import React from 'react';
import styled from 'styled-components';
import wave from "../assets/svg/wave.svg";
import wavedark from "../assets/svg/wavedark.svg";

const FooterStyles = styled.footer`
  min-height: 50vh;
  position: relative;
  background-color: var(--navy-blue);
  img {
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

const Footer = () => {
  return (  
    <FooterStyles>
      <img src={wave} alt="Background wave" />
      <img src={wavedark} alt="Background wave" />
    </FooterStyles>
  );
}
 
export default Footer;
import React from 'react';
import styled from 'styled-components';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import Form from '../components/Form';
import SEO from '../components/SEO';

const ContactPageStyles = styled.div`
  width:80%;
  margin: 5rem auto;
  min-height: 100vh;
  @media only screen and (min-width: 768px) {
    width:60%;
    
  }
  h2{
    border-bottom: solid 2px var(--highlight-blue);
    text-align: center;
    padding-bottom: 0.5rem;
    display: inline-block;
  }
`;

const P = styled.p`
  color: var(--text-color-soft);
  text-align: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
  svg{
    height: 2rem;
    width: 2rem;
    color: var(--text-color);
    &:hover{
      color: var(--blue);
    }
  }
  a{
    cursor: pointer;
  }
`;

const ContactPage = () => {
  return ( 
    <>
      <SEO title="Contact" />
      <ContactPageStyles>
        <h2>Get in touch</h2>
        <P>You can find me on...</P>
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
        <P>Or fill out the form below and I will get back to you...</P>
        <Form />
      </ContactPageStyles>
    </>
  );
}
 
export default ContactPage;
import React from 'react';
import styled from 'styled-components';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/Ai";
import Form from '../components/Form';

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
  p{
    color: var(--text-color-soft);
    text-align: center;
  }
`;

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
  }
`;

const ContactPage = () => {
  return ( 
    <ContactPageStyles>
      <h2>Get in touch</h2>
      <Form />
      <p>You can also find me on...</p>
      <IconContainer>
        <a>
          <AiFillGithub/>
        </a>
        <a>
          <AiFillLinkedin/>
        </a>
        <a>
          <AiOutlineMail/>
        </a>
      </IconContainer>
    </ContactPageStyles>
  );
}
 
export default ContactPage;
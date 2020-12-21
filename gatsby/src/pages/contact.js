import React from 'react';
import styled from 'styled-components';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/Ai";
import Form from '../components/Form';

const ContactPageStyles = styled.div`
  width:80%;
  margin: 5rem auto;
  min-height: 100vh;
`

const ContactPage = () => {
  return ( 
    <ContactPageStyles>
      <h2>Get in touch</h2>
      <p>You can find me on...</p>
      <div>
        <a>
          <AiFillGithub/>
        </a>
        <a>
          <AiFillLinkedin/>
        </a>
        <a>
          <AiOutlineMail/>
        </a>
      </div>
      <Form />
    </ContactPageStyles>
  );
}
 
export default ContactPage;
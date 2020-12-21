import React from 'react';
import styled from 'styled-components';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/Ai";

const ContactPageStyles = styled.div`
  width:80%;
  margin: 5rem auto;
  min-height: 100vh;
  form{
    display: flex;
    flex-direction: column;
    color: var(--white);
    border: 1px solid var(--card-border);
    border-radius: 1rem;
    padding: 1.5rem;
    background-image: var(--card-background);
    box-shadow: var(--card-shadow);
  }
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
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="name" />
        </label>
        <label htmlFor="message">
          Message:
          <textarea name="message">

          </textarea>
        </label>
        <input type="submit" />
      </form>
    </ContactPageStyles>
  );
}
 
export default ContactPage;
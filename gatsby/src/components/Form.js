import React, { useState } from 'react';
import styled from 'styled-components';
import {AiOutlineLoading} from "react-icons/Ai";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  margin: 3rem 0;
  padding: 1.5rem;
  background-image: var(--card-background);
  box-shadow: var(--card-shadow);
  div{
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  input, textarea{
    color: var(--text-color);
    letter-spacing: 0.075rem;
    border: 2px solid var(--input-border);
    border-radius: 0.25rem;
    padding: 0.5rem 2rem;
    background-color: var(--background-color);
    &:focus{
      outline: none;
      border: 2px solid var(--input-highlight);
    }
    font-family: Lato;
  }
  input{
    text-align: center
  }
  input[type="submit"]{
    background: none;
    color: var(--white);
    font-weight: bold;
    width: 50%;
    margin: 0 auto;
    border: 2px solid var(--white);
    cursor: pointer;
    &:hover{
      border: 2px solid var(--highlight-blue);
    }
  }
  label{
    color: var(--white);
    text-align: center;
    font-size: 0.875rem;
    padding-bottom: 0.25rem;
  }
  svg{
    animation: spin 4s linear infinite;
    height: 2rem;
    width: 2rem;
    color: var(--white);
    margin: 0 auto;
  }
  p{
    color: var(--white);
    text-align: center;
  }
  @media only screen and (min-width: 768px) {
    textarea, input{
      width: 50%;
      margin: 0 auto;
    }
    input[type="submit"]{
      width: 25%;
    }
  }
  @keyframes spin { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    }
`
const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email:"",
    message:"",
    subject:"",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    complete: false,
    error: null,
  });

  const url = "https://formspree.io/f/mbjzgbde";

  const handleSubmit = (e) => {
    setFormStatus({...formStatus, error:null, loading:true})
    e.preventDefault()
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if ((res.status >= 400 && res.status < 600)) {
        throw Error("An error has ocurred please refresh the page and try again");
      } else {
        setFormStatus({...formStatus, loading: false, complete: true})
        return res.json();
      }
    })
    .catch((err) => {
      console.log(err);
      setFormStatus({...formStatus, error:err.message, loading: false})
    })
  }

  const submit = formStatus.complete? <p>Thank you your form has been submitted!</p> : <input type="submit"/>

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">What's your Name?</label>
        <input type="text" name="name" placeholder="🙋" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="email">What's your Email?</label>
        <input type="email" name="email" placeholder="📧" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="name">Whats the topic?</label>
        <input type="text" name="subject" placeholder="📃" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="message">Let's talk!</label>
        <textarea name="message" rows="10" placeholder="Hello!" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
      </div>
      <div>
        {formStatus.loading? <AiOutlineLoading /> : submit}
        {formStatus.error? <p>{formStatus.error}</p>: <p></p>}
      </div>
    </FormStyle>
  );
}
 
export default Form;
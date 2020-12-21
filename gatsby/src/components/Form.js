import React, { useState } from 'react';
import styled from 'styled-components';
import {AiOutlineLoading} from "react-icons/Ai";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--white);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.5rem;
  background-image: var(--card-background);
  box-shadow: var(--card-shadow);
  input, textarea{
    &:focus{
      outline: none;
    }
  }
  svg{
    animation:spin 4s linear infinite;
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
    fetch("https://formspree.io/mbjzgbde", {
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
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
      
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>

      <label htmlFor="name">Subject:</label>
      <input type="text" name="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}/>

      <label htmlFor="message">Message:</label>
      <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>

      {formStatus.loading? <AiOutlineLoading /> : submit}
      {formStatus.error? <p>{formStatus}</p>: <p></p>}
    </FormStyle>
  );
}
 
export default Form;
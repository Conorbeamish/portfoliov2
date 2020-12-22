import React, { useState } from 'react';
import styled from 'styled-components';
import {AiOutlineLoading} from "react-icons/Ai";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--light-grey);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  margin: 3rem 0;
  padding: 1.5rem;
  background-image: var(--card-background);
  box-shadow: var(--card-shadow);
  div{
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  input, textarea{
    &:focus{
      outline: none;
    }
  }
  svg{
    animation:spin 4s linear infinite;
  }
  textarea {
    border-radius: 0.25rem;
  }
  input{
    border-radius: 0.25rem;
    border: none;
    
  }
  @media only screen and (min-width: 768px) {
    input{
      width: 50%;
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
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="name">Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}/>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="10" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
      </div>
      <div>
        {formStatus.loading? <AiOutlineLoading /> : submit}
        {formStatus.error? <p>{formStatus.error}</p>: <p></p>}
      </div>
    </FormStyle>
  );
}
 
export default Form;
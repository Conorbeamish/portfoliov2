import React from 'react';
import styled from 'styled-components';
import fullstack from "../assets/svg/fullstack.svg";
import modern from "../assets/svg/modern.svg";
import responsive from "../assets/svg/responsive.svg";
import mountains from "../assets/svg/mountains.svg";
import travel from "../assets/svg/travel.svg";
import university from "../assets/svg/university.svg";

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
  gap: 3rem;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const About = () => {
  return (
    <AboutStyle>
      <h2>What I do</h2>
      <p>I am a Web Developer who creates full stack applications using a range of technologies and skills. I use React, Javascript, CSS and HTML to create web sites and applications that have good UI/UX, are accessible, responsive and built for the modern web.</p>
      <p>My preferred stack is MERN, using React on the frontend with MongoDB, Express and Node on the backend</p>
      <p>I have experience working on professional websites for clients as well as many personal projects, I am always interested in working on a new or exciting idea so please get in touch</p>
      <IconContainer>
        <div>
          <img src={responsive} alt="Responsive Design"/>
          <h3>Responsive Design</h3>
          <p>I make web applications that are fully responsive to display on desktop and mobile</p>
        </div>
        <div>
          <img src={fullstack} alt="Full Stack" />
          <h3>Full Stack Dev</h3>
          <p>I develop both backend and frontend to create full stack applications</p>
        </div>
        <div>
          <img src={modern} alt="modern technology" />
          <h3>Modern Technology</h3>
          <p>I use new technologies, frameworks and design trends to create up to date and modern websites</p>
        </div>
      </IconContainer>
      <h2>Get to know me</h2>
      <p>I am a driven and determined individual who thrives on interesting challenges and in busy environments. I have a keen eye for detail and am happy working from any location whether that be at home in my studio by myself, or in an office environment with your team.</p>    
      <p>My passions are learning and exploration, as most of my knowledge is self taught I have overcome obstacles with time management and self determination to gain the skills that I have today.</p>  
      <p>Outside of of work, I am an avid skier and keen rock-climber who loves being on adventures in the mountains.</p>
      <IconContainer>
        <div>
          <img src={university} alt="university"/>
          <h3>University</h3>
          <p>I graduated with a Bsc Hons in Mathematics, Operational Research and Statistics, it was here I developed a love for coding</p>
        </div>
        <div>
          <img src={travel} alt="travel" />
          <h3>Working Abroad</h3>
          <p>I spent time living and working around the world in different countries including Japan, Canada and New Zealand</p>
        </div>
        <div>
          <img src={mountains} alt="mountains" />
          <h3>My free time</h3>
          <p>If I'm not coding, you will find me adventuring in the mountains either skiing, hiking or rock climbing</p>
        </div>
      </IconContainer>
    </AboutStyle>
  );
}
 
export default About;
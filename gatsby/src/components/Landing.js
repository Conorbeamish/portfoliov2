import React from "react";
import styled from "styled-components";
import wave from "../assets/svg/wave.svg"
import wavedark from "../assets/svg/wavedark.svg"
import StarBackground from "../components/StarBackground";
import WaveBackground from "./WaveBackground";
import yellowtail from "../assets/fonts/Yellowtail/Yellowtail-Regular.ttf";
// import {Link} from "gatsby";
import Link from 'gatsby-plugin-transition-link'

const LandingStyle = styled.div`
  @font-face {
    font-family: Yellowtail;
    src: url(${yellowtail});
  }
  .landing {
    min-height: 100vh;
    background: var(--landing-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
  }
  .highlight{
    color: var(--highlight-blue);
    font-size: 2.5rem;
  }
  h2{
    font-size: 2rem;
    margin:0;
  }
  p{
    margin: 2rem;
    opacity: var(--dark-item);
    font-family: Yellowtail;
    font-size: 2rem;
    transform: rotate(-10deg);
    text-shadow:
        -0.2rem -0.2rem 1rem #fff,
        0.2rem 0.2rem 1rem #fff,
        0 0 2rem var(--highlight-blue),
        0 0 4rem var(--highlight-blue),
        0 0 6rem var(--highlight-blue),
        0 0 8rem var(--highlight-blue),
        0 0 10rem var(--highlight-blue);
  }
  .lights-off{
    position:absolute;
    top: 4.75rem;
    right: 2.5rem;
    font-family: Yellowtail;
    color: var(--white);
    display: var(--light-display);
    font-size: 1rem;
    transform: rotate(-10deg);
  }
  .lights-off-big{
    opacity:0;
  }
  .flicker:nth-child(2){
    animation: flicker 1s infinite alternate; 
  }
  .flicker:nth-child(4n){
    animation: flicker 2s infinite alternate; 
  }
  .flicker:nth-child(9n){
    animation: flicker 3s infinite alternate; 
  }
  a{
    
    border: solid 1px var(--card-border);
    box-shadow: var(--card-shadow);
    border-radius: 0.25rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
    &:hover{
      color: var(--white);
      background-color: var(--navy-blue);
      transition: 0.5s;
    }
  }
  img {
    position: absolute;
    width: 100%;
    bottom: 0; 
  }
  img:nth-child(5){
    display: var(--light-display);
  }
  img:nth-child(6){
    display: var(--dark-display);
  }
  .bounce-text{
    cursor: default;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    display: inline-block;
    padding: 0 0.05rem 0 0.05rem;
    &:hover {
      color: var(--highlight-blue);
      animation-name: rubberBand;
    }
  }
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, .95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes flicker{
    75%{
      filter:blur(0.000001px);
    }
    80%{       
      filter:blur(2px);
    }  
    85%{
      filter:blur(0.000001px);
    }   
  }
  @media only screen and (min-width: 768px) {
    .lights-off{
      font-size:1.25rem;
      top: 5rem;
      right: 3rem;
    }
    .lights-off-big{
      opacity:1;
    }
  }
`
//Takes in a string and a className and returns each letter as a span with that classname
//TODO fix psudeo unique keys
const createSpans = ((string, className) => (
  [...string].map(letter => {
    return (<span className={className} key={Math.floor(Math.random()* 1000) + letter}>{letter}</span>)
  })
))

const Landing = () => {

  const word1 = createSpans("Hi,", "bounce-text");
  const word2 = createSpans("I'm", "bounce-text");
  const word3 = createSpans("onor", "bounce-text");
  const word4 = createSpans("eamish", "bounce-text");
  const word5 = createSpans("Web", "bounce-text");
  const word6 = createSpans("Developer", "bounce-text");

  const after = createSpans("After", "flicker");
  const dark = createSpans("Dark", "flicker");

  return(
    <LandingStyle>
      <StarBackground/>
      <section className="landing">
        <div>
          <h2>{word1} {word2} <br/>
            <span className="highlight">C</span>{word3} <span className="highlight">B</span>{word4}<br/>
            {word5} {word6}
          </h2>
        </div>
        <div className="lights-off">
          <span className="lights-off-big">Turn the </span>Lights Off ↗ <br/>
          <span className="lights-off-big">Trust me it's cool...</span>
        </div>
        <p>{after} {dark}</p>
        <Link to="/contact">Contact Now</Link>  
        <img src={wave} alt="Background wave" />
        <img src={wavedark} alt="Background wave" />
      </section>
    </LandingStyle>
  )
}

export default Landing

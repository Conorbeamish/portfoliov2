import React from "react";
import styled from "styled-components";
import wave from "../assets/svg/wave.svg"

const IndexStyle = styled.div`
  .landing {
    min-height: 100vh;
    background: var(--landing-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .highlight{
    color: var(--highlight-blue);
    font-size: 2.5rem;
  }
  img {
    position: absolute;
    width: 100vw;
    bottom: 0; 
  }
  p{
    opacity: var(--dark-item);
  }
  h2{
    font-size: 2rem;
  }
  span{
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
`
const createSpans = (string => (
  [...string].map(letter => {
    return (<span key={Math.floor(Math.random()* 1000) + letter}>{letter}</span>)
  })
))

const IndexPage = () => {

  const word1 = createSpans("Hi,");
  const word2 = createSpans("I'm");
  const word3 = createSpans("onor");
  const word4 = createSpans("eamish");
  const word5 = createSpans("Web");
  const word6 = createSpans("Developer");

  return(
    <IndexStyle>
      <section className="landing">
        <div>
          <h2>{word1} {word2} <br/>
            <span class="highlight">C</span>{word3} <span class="highlight">B</span>{word4}<br/>
            {word5} {word6}
          </h2>
        </div>
        <p>After Dark</p>
        <img src={wave} alt="Background wave" />
      </section>
      
    </IndexStyle>
  )
}

export default IndexPage

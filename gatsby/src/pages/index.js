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
  img {
    position: absolute;
    width: 100vw;
    bottom: 0; 
  }
  p{
    opacity: var(--dark-item);
  }
`

const IndexPage = () => (
  <IndexStyle>
    <section className="landing">
      <div>
        <h2>Hi,<br/>
          Im Conor Beamish<br/>
          Web Developer
        </h2>
      </div>
      <p>After Dark</p>
      <img src={wave} alt="Background wave" />
    </section>
     
  </IndexStyle>
)

export default IndexPage

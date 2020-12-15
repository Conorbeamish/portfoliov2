import React from 'react';
import styled from 'styled-components';
import wavy from "../assets/images/wavy.png";

const WaveBackgroundStyle = styled.div`
  div{
    display: var(--light-display);
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:50%;
    background:transparent url(${wavy}) top;
    -moz-animation:move-back 200s linear infinite;
    -ms-animation:move-back 200s linear infinite;
    -o-animation:move-back 200s linear infinite;
    -webkit-animation:move-back 200s linear infinite;
    animation:move-back 200s linear infinite;
  }
  @keyframes move-back {
    from {background-position:0 0;}
    to {background-position:-10000px 0;}
  }
  @-webkit-keyframes move-back {
      from {background-position:0 0;}
      to {background-position:-10000px 0px;}
  }
  @-moz-keyframes move-back {
      from {background-position:0 0;}
      to {background-position:-10000px 0px;}
  }
  @-ms-keyframes move-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
`
const WaveBackground = () => {
  return (
    <WaveBackgroundStyle>
      <div ></div>
    </WaveBackgroundStyle>
  );
}
 
export default WaveBackground;
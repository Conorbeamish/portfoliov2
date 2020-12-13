import React from 'react';
import styled from 'styled-components';
import clouds from "../assets/images/clouds.png";
import stars from "../assets/images/stars.png";
import twinkling from "../assets/images/twinkling.png";
import aurora from "../assets/images/aurora.png";

const StarBackgroundStyle = styled.div`
  div{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
  }
  @keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @-webkit-keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
  @-moz-keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
  @-ms-keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }

  @keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
  @-webkit-keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
  @-moz-keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
  @-ms-keyframes move-clouds-back {
      from {background-position: 0;}
      to {background-position:10000px 0;}
  }
  .stars {
    background:#000 url(${stars}) repeat top center;
    z-index:-10;
  }
  .twinkling{
    background:transparent url(${twinkling}) repeat top center;
    z-index:-9;
    -moz-animation:move-twink-back 200s linear infinite;
    -ms-animation:move-twink-back 200s linear infinite;
    -o-animation:move-twink-back 200s linear infinite;
    -webkit-animation:move-twink-back 200s linear infinite;
    animation:move-twink-back 200s linear infinite;
  }
  .clouds{
    background: transparent url(${clouds}) round top center;
    z-index:-8;
    -moz-animation:move-clouds-back 200s linear infinite;
    -ms-animation:move-clouds-back 200s linear infinite;
    -o-animation:move-clouds-back 200s linear infinite;
    -webkit-animation:move-clouds-back 200s linear infinite;
    animation:move-clouds-back 200s linear infinite;
  }

`

const StarBackground = () => {
  return ( 
    <StarBackgroundStyle>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
    </StarBackgroundStyle>
  );
}
 
export default StarBackground;
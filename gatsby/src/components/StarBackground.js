import React from 'react';
import styled from 'styled-components';
import clouds from "../assets/images/clouds.png";
import stars from "../assets/images/stars.png";
import twinkling from "../assets/images/twinkling.png";

const StarBackgroundStyle = styled.div`
  div{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100vh;
    display:block;
  }
  @keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
  }
  @keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
  div:nth-child(1){
    background:#000 url(${stars}) repeat top center;
    z-index:-10;
  }
  div:nth-child(2){
    background:transparent url(${twinkling}) repeat top center;
    z-index:-9;
    animation:move-twink-back 200s linear infinite;
  }
  div:nth-child(3){
    background: transparent url(${clouds}) round top center;
    z-index:-8;
    animation:move-clouds-back 200s linear infinite;
  }

`

const StarBackground = () => {
  return ( 
    <StarBackgroundStyle>
      <div></div>
      <div></div>
      <div></div>
    </StarBackgroundStyle>
  );
}
 
export default StarBackground;
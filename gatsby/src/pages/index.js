import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Landing from '../components/Landing';
import SEO from '../components/SEO';

const IndexStyle = styled.div`

`

const IndexPage = () => {
  return ( 
    <>
      <SEO title="About Me"/>
      <IndexStyle>
        <Landing />
        <About />
      </IndexStyle>
    </>
  );
}
 
export default IndexPage;
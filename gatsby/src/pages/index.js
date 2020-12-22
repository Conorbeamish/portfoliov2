import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Landing from '../components/Landing';

const IndexStyle = styled.div`

`

const IndexPage = () => {
  return ( 
    <IndexStyle>
      <Landing />
      <About />
    </IndexStyle>
  );
}
 
export default IndexPage;
import React from 'react';
import styled from 'styled-components';
import Landing from '../components/Landing';

const IndexStyle = styled.div`
  section{
    height: 100vh;
  }
`

const IndexPage = () => {
  return ( 
    <IndexStyle>
      <Landing />
      <section>

      </section>
    </IndexStyle>
  );
}
 
export default IndexPage;
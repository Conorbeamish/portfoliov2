import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import Footer from "./Footer";
import Nav from "./Nav";

const PageStyles = styled.div`
`;

//See ../gatsby-browser.js for wrapping the whole page element with layout component
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <PageStyles>
        {children}
      </PageStyles>
      <Footer />
    </>
  )
}

export default Layout

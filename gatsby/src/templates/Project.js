import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import BlockContent from '@sanity/block-content-to-react';
import Img from "gatsby-image"

const SingleProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 80%;
  
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1rem;
  background-color: var(--dark-blue);
  box-shadow: var(--card-shadow);
  transition: 0.5s;

  @media only screen and (min-width: 768px) {
    width:60%;
  }
  a{
    align-self: flex-end;
    margin: 1rem;
    font-weight: bold;
    &:hover{
      color: var(--light-grey);
    }
  }
`;

const SingleProjectPage = ({data: {project}}) => {
  return (
    <SingleProjectStyle>
      <h2>{project.name}</h2>
      <Img fluid={project.project_image.asset.fluid} />
      <BlockContent 
        blocks={project._rawContent} 
        projectId={"ky69fho1"} 
        dataset={"production"}
      />
      <Link to="/projects">↩ Go Back</Link>
    </SingleProjectStyle>
  );
}

export const query = graphql`
  query($slug: String!){
    project: sanityProject(slug: {
      current: {eq: $slug }
    }) {
      _rawContent
      name
      id
      technology {
        name
      }
      project_image {
        asset {
          fluid(maxWidth: 800){
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
 
export default SingleProjectPage ;
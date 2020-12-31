import React from 'react';
import styled from 'styled-components';
import { graphql} from "gatsby";
import BlockContent from '@sanity/block-content-to-react';
import Img from "gatsby-image"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const SingleProjectStyle = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 80%;
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.5rem;
  background-image: var(--card-background);
  box-shadow: var(--card-shadow);
  transition: 0.5s;

  @media only screen and (min-width: 768px) {
    width:60%;
  }
  p{
    opacity:0.9;
  }
  a{
    &:hover{
      color: var(--light-grey);
    }
  }
`;

const LinkStyle = styled(AniLink)`
  align-self: flex-end;
  margin: 1rem;
  font-weight: bold;
  color: var(--white);
  &:visited{
    color: var(--white);
  }
  &:hover{
    color: var(--light-grey);
  }
`

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
      <LinkStyle 
        to="/projects"
        fade
      >
        ↩ Go Back
      </LinkStyle>
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
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
  h2{
    margin: 1rem auto 1rem 0;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid var(--highlight-blue);
  }
  p{
    opacity:0.9;
  }
  a{
    color: var(--white);
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
const LinkContainer = styled.div`
  margin: 2rem auto 1rem auto;
  a{
    color: var(--white);
    margin: 0 1rem;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: 2px solid var(--highlight-blue);
  }
`

const SingleProjectPage = ({data: {project}}) => {
  return (
    <SingleProjectStyle>
      <h2>{project.name}</h2>
      <Img fluid={project.project_image.asset.fluid} />
      <LinkContainer>
        {project.code && <a target="_blank" rel="noopener noreferrer" href={`${project.code}`}>View Code</a>}
        {project.site && <a target="_blank" rel="noopener noreferrer" href={`${project.site}`}>View Site</a>}
      </LinkContainer>
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
      code
      site
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
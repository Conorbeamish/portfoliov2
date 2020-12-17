import { graphql, useStaticQuery} from 'gatsby';
import Link from 'gatsby-plugin-transition-link'
import Img from "gatsby-image";
import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const TechnologyStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin: 2rem 0;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 1rem;
    border: 1px solid var(--card-border-light);
    box-shadow: var(--card-shadow);
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
    background-color: var(--white);
    color: var(--black);
    &:hover{
      border: 1px solid var(--highlight-blue);
    }
    &[aria-current="page"]{
      border: 1px solid var(--highlight-blue);
      background-color: var(--highlight-blue);
    }
  }
  h3{
    margin: 0;
    font-size: 1rem;
  }
`

const TechnologyFilter = () => {

  const {technology} = useStaticQuery(graphql`
    query{
      technology: allSanityTechnology {
        nodes {
          name
          id
          technology_logo {
            asset {
              fixed(width: 30, height: 30){
                ...GatsbySanityImageFixed
              }
              fluid(maxWidth: 50, maxHeight: 50){
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <TechnologyStyles>
      <Link to={`/projects`}>
        <h3>Show All</h3>
      </Link>
      {technology.nodes.map(tech => (
        <Link key={tech.id} to={`/technology/${tech.name}`}>
          <h3>{tech.name}</h3>
          <Img fixed={tech.technology_logo.asset.fixed}/>
        </Link>
      ))}
    </TechnologyStyles>
  );
}
 
export default TechnologyFilter;
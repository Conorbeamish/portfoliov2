import { graphql, useStaticQuery} from 'gatsby';
import Img from "gatsby-image";
import React from 'react';
import styled from 'styled-components';

const TechnologyStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;
  margin: 2rem 0;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0 1rem;
    margin: 0 auto;
    border: 1px solid var(--card-border-light);
    box-shadow: var(--card-shadow);
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
    background-color: var(--white);
    color: var(--black);
    cursor: pointer;
    &:hover{
      border: 1px solid var(--highlight-blue);
      background-image: linear-gradient(to bottom right, var(--highlight-blue), var(--white));
    }
    &.active-technology{
      border: 1px solid var(--highlight-blue);
      background-image: linear-gradient(to bottom right, var(--highlight-blue), var(--white));
    }
    &:focus{
      outline:none;
    }
  }
  h3{
    margin: 0;
    font-size: 1rem;
  }
  @media only screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const TechnologyFilter = (props) => {
  const {setProjectFilter, projectFilter} = props
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
      <button 
        onClick={() => setProjectFilter(false)}
        className={!projectFilter ? "active-technology" : undefined}
      >
        <h3>All</h3>
      </button>
      {technology.nodes.map(tech => (
        <button 
          onClick={() => setProjectFilter(tech.name)} 
          key={tech.id} 
          className={projectFilter === tech.name? "active-technology" : ""}
        >
          <h3>{tech.name}</h3>
          <Img fixed={tech.technology_logo.asset.fixed}/>
        </button>
      ))}
    </TechnologyStyles>
  );
}
 
export default TechnologyFilter;
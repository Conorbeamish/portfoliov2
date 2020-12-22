import Link from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styled from 'styled-components';

const ProjectCardStyle = styled(props => <AniLink {...props} />)`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-row: span 3;
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.5rem;
  background-image: var(--card-background);
  box-shadow: var(--card-shadow);

  &:hover{
    background-color: var(--navy-blue);
  }

  .technology-container{
    display: flex;
    flex: row;
    margin: 1rem 0;
    
  }
  .technology-name{
    margin-right: 0.5rem;
    font-weight: bold;
    background-image: linear-gradient(to bottom right, var(--highlight-blue), var(--white));
    color: var(--black);
    border-radius: 0.25rem;
    padding: 0.125rem 0.25rem;
  }
  h3 {
    margin: 0;
    color: var(--white);
  }
  p{
    color: var(--white);
    opacity: 0.9;
    font-weight: bold;
    &:nth-child(4){
      justify-self: end;
      color: var(--white);
      &:hover{
        color: var(--light-grey)
      }
    }
  }
`;

const ProjectCard = ({project}) => {
  return (
    //TODO fix link
      <ProjectCardStyle 
        fade
        to={`/projects/${project.slug.current}`}
      >
        <h3>{project.name}</h3>
        <div className="technology-container">
          {project.technology?.map(technology => (
            <div key={technology.id} className="technology-name">{technology.name}</div>
          ))}
        </div>
        <p>{project.description}</p>
        <p>More info ↪</p>
      </ProjectCardStyle>
  );
}
 
export default ProjectCard;
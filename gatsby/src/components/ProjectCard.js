import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ProjectCardStyle = styled(props => <Link {...props} />)`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-row: span 3;

  border: 1px solid var(--card-border);
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: var(--dark-blue);
  box-shadow: var(--card-shadow);
  transition: 0.5s;

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
    border: 1px solid var(--light-grey);
    background-color: var(--light-grey);
    color: var(--dark-grey);
    border-radius: 0.25rem;
    padding: 0.125rem 0.25rem;
  }
  h3 {
    margin: 0;
    color: var(--white);
  }
  p{
    color: var(--white);
    font-weight: bold;
    &:nth-child(4){
      justify-self: end;
    }
  }
`;

const ProjectCard = ({project}) => {
  return (
    //TODO fix link
      <ProjectCardStyle to={`/projects/${project.slug.current}`}>
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
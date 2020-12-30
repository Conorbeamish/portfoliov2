import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectContainerStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin: 0 1rem;
  grid-auto-rows: auto auto auto;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 2rem;
  }
`

const ProjectContainer = ({projects}) => {
  //Reverse projects so newest first
  return (
    <ProjectContainerStyles>
      {projects.map(project => {
        return <ProjectCard project = {project} key = {project.id} />
      })}
    </ProjectContainerStyles>
  );
}
 
export default ProjectContainer;
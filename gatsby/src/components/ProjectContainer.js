import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectContainerStyles = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 80%;
  margin: 0 auto 0 auto;
  grid-auto-rows: auto auto auto;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const ProjectContainer = ({projects}) => {
  return (
    <ProjectContainerStyles>
      {projects.map(project => {
        return <ProjectCard project = {project} key = {project.id} />
      })}
    </ProjectContainerStyles>
  );
}
 
export default ProjectContainer;
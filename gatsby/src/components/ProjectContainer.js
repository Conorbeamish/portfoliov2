import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectContainer = ({projects}) => {
  return (
    <>
      <h3>Below is a selection of my work</h3>
      {projects.map(project => {
        return <ProjectCard project = {project} key = {project.id} />
      })}
    </>
  );
}
 
export default ProjectContainer;
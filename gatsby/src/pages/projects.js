import React from 'react';
import {graphql} from "gatsby";
import ProjectContainer from '../components/ProjectContainer';

const ProjectsPage = ({data}) => {

  const projects = data.projects.nodes

  return ( 
    <>
      <h2>Projects</h2>
      <ProjectContainer  projects={projects}/>
    </>
   );
}

export const query = graphql`
  query projectsQuery{
    projects: allSanityProject{
      nodes {
        name
        thumbnail_image {
          asset {
          fixed(width: 200, height: 200){
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 200, maxHeight: 200){
            ...GatsbySanityImageFluid
          }
        }
        }
        slug {
          current
        }
      }
    }
  }
`;
 
export default ProjectsPage;
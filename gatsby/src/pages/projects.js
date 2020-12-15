import React from 'react';
import {graphql} from "gatsby";
import ProjectContainer from '../components/ProjectContainer';
import styled from 'styled-components';

const ProjectPageStyle = styled.div`

` 

const ProjectsPage = ({data}) => {
  const projects = data.projects.nodes
  return ( 
    <ProjectPageStyle>
      <h2>Projects</h2>
      <ProjectContainer  projects={projects}/>
    </ProjectPageStyle>
   );
}

export const query = graphql`
  query projectsQuery{
    projects: allSanityProject{
      nodes {
        name
        id
        description
        technology{
          id
          name
        }
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
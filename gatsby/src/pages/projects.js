import React from 'react';
import {graphql} from "gatsby";
import ProjectContainer from '../components/ProjectContainer';
import TechnologyFilter from "../components/TechnologyFilter";
import styled from 'styled-components';

const ProjectPageStyle = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`  
const TechnologyContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
`
const ProjectsPage = ({data}) => {
  const projects = data.projects.nodes
  return ( 
    <ProjectPageStyle>
      <TechnologyContainerStyle>
        <h2>My work</h2>
        <p>Here are some of the technologies I use</p>
        <TechnologyFilter />
      </TechnologyContainerStyle>
      <ProjectContainer  projects={projects}/>
    </ProjectPageStyle>
   );
}

export const query = graphql`
  query projectsQuery($technology: [String]){
    projects: allSanityProject(filter: {
      technology: {
        elemMatch: {
          name: {
            in: $technology
          }
        }
      }
    }){
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
import React, {useState} from 'react';
import {graphql} from "gatsby";
import ProjectContainer from '../components/ProjectContainer';
import TechnologyFilter from "../components/TechnologyFilter";
import styled from 'styled-components';

const ProjectPageStyle = styled.div`
  margin: 5rem auto;
  min-height: 100vh;
 
  h2{
    border-bottom: solid 2px var(--highlight-blue);
    width: auto;
    display: inline-block;
    padding-bottom: 0.5rem;
    text-align: center;
  }
`  
const TechnologyContainerStyle = styled.div`
  margin: 0 auto;
  width: 90%;
  p{
    color: var(--text-color-soft);
    text-align: center;
  }
  @media only screen and (min-width: 769px) {
    width:60%; 
  }
`
const ProjectsPage = ({data}) => {

  const [projectFilter, setProjectFilter] = useState(false);

  const projects = projectFilter 
    ? data.projects.nodes.filter(project => project.technology.map(technology => technology.name).indexOf(projectFilter) >= 0) 
    : data.projects.nodes;

  return ( 
    <ProjectPageStyle>
      <TechnologyContainerStyle>
        <h2>My work</h2>
        <p>Here are some of the technologies I use and the projects I have used them in</p>
        <TechnologyFilter projectFilter={projectFilter} setProjectFilter={setProjectFilter}/>
        {projects.length === 0 && 
          <p>It seems I'm not currently featuring any projects using this technology, 
            if you want some examples please get in contact and I will be happy to share them.
          </p>
        }
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
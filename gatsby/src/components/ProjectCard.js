import Link from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image";

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
  h3 {
    margin: 0 auto 0  0;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid var(--highlight-blue);
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

const TechnologyContainerStyle = styled.div`
  display: flex;
  flex: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: var(--light-grey);
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  justify-content: center;
`;

const ProjectCard = ({project}) => {
  return (
    //TODO fix link
      <ProjectCardStyle 
        fade
        to={`/projects/${project.slug.current}`}
      >
        <h3>{project.name}</h3>
        <TechnologyContainerStyle>
          {project.technology?.map(technology => (
            <div key={technology.id}>
              <Img fixed={technology.technology_logo.asset.fixed}/>
              <div>{technology.name}</div>
            </div>
          ))}
        </TechnologyContainerStyle>
        <Img fluid={project.project_image?.asset.fluid}/>
        <p>{project.description}</p>
        <p>More info ↪</p>
      </ProjectCardStyle>
  );
}
 
export default ProjectCard;
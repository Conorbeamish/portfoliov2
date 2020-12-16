const path = require("path");

async function turnProjectsIntoPages({graphql, actions}){
  const projectTemplate = path.resolve("./src/templates/Project.js");

  const {data} = await graphql(`
    query{
      projects: allSanityProject{
        nodes{
          name
          slug{
            current
          }
        }
      }
    }
  `);
  data.projects.nodes.forEach(project =>{
    actions.createPage({
      path: `projects/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      }
    })
  })
}

async function turnTechnologyIntoPages({graphql, actions}){
  const technologyTemplate = path.resolve("./src/pages/projects.js");

  const {data} = await graphql(`
    query{
      technology: allSanityTechnology{
        nodes {
          name
          id
        }
      }
    }
  `);
  data.technology.nodes.forEach(tech => {
    actions.createPage({
      path: `/technology/${tech.name}`,
      component: technologyTemplate,
      context: {
        technology: tech.name,
        technologyRegex: `/${tech.name}/i`
      }
    })
  })
}

exports.createPages = async function(params){
  await Promise.all([
    turnProjectsIntoPages(params),
    turnTechnologyIntoPages(params),
  ]);
}
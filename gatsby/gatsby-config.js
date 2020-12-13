const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path: ".env"});

module.exports = {
  siteMetadata: {
    title: `Conor Beamish Portfolio`,
    author: `Conor Beamish`,
    description: "Conor Beamish's Portfolio"
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "a8c6haoy",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN
      },
    },
    
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/assets`, `images`),
      },
    },
  ],
};

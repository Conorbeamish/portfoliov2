const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path: ".env"});

module.exports = {
  siteMetadata: {
    title: `Conor Beamish Portfolio`,
    author: `Conor Beamish`,
    description: "A portfolio of my work as a web developer who uses React, HTML, CSS and Javascript to make custom web sites"
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
    "gatsby-plugin-transition-link",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/assets`, `images`),
      },
    },
  ],
};

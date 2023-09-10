/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: 'Brian Angus',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },

  ],
}

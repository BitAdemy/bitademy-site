module.exports = {
  pathPrefix: "/",
  siteMetadata: require("./site-metadata.json"),
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-stackbit-static-sass`,
      options: {
        inputFile: `${__dirname}/src/sass/main.scss`,
        outputFile: `${__dirname}/public/assets/css/main.css`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-component`],
      },
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
        menus: require("./src/data/menus.json"),
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-153738218-1`,
        head: false,
        anonymize: false,
      },
    },
  ],
};

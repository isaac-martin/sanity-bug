module.exports = {
  siteMetadata: {
    title: "sanity-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "oijolsw2",
        dataset: "",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

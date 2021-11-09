module.exports = {
  siteMetadata: {
    title: "Jill Pomares",
    description: "A front-end web developer who builds websites and at the same time enjoy designing too.",
    author: "@jillpomares",
    navLinks: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "My Skills",
        link: "/skills",
      },
      {
        name: "Projects",
        link: "/projects",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // displayName: false,
        // fileName: false,
      },
    },
  ],
};

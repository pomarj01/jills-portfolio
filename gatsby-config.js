module.exports = {
  siteMetadata: {
    title: "Jill Pomares's Portfolio",
    navLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/dev",
      },
      {
        name: "Projects",
        link: "/projects"
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet"
  ],
};

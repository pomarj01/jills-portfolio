import merge from "lodash/merge";
import find from "lodash/find";
import { images } from "../components/images/collection";


export const headTags = {
  title: "Jill Pomares | Front End Developer",
  website: "http:/jillpomares.com",
  meta: {
    description:
      "Portfolio built using Gatsby to showcase previous and current projects",
    keywords: [
      "front-end",
      "developer",
      "designer",
      "document",
      "html",
      "css",
      "reactjs",
      "javascript",
      "ui",
      "ux",
      "tags"
    ]
  },
};

export const theme = {
  colors: {
    dark: "#252835",
    light: "#f0f0f0",
    primary: "#d9bdc7",
    secondary: "transparent",
    accent: "#dda3b8",
  },
  space: [
    0,
    "0.125rem", // 2px
    "0.25rem", // 4px
    "0.5rem", // 8px
    "0.875rem", // 14px
    "1rem", // 16px
    "1.125rem", // 18px
    "1.25rem", // 20px
    "1.5rem", // 24px
    "2rem", // 32px
    "4rem", // 64px
    "8rem", // 128px
    "16rem", // 256px
  ],
  fontWeights: {
    light: 200,
    normal: 400,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  borders: {
    none: "none",
    thin: "1px solid",
  },
  radii: {
    none: 0,
    base: "0.313rem",
    round: "3.125rem",
  },
};


const width = {
  sm_mobile: "320px",
  m_mobile: "375px",
  l_mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  l_laptop: "1440px",
  desktop: "2560px",
};

export const device = {
  sm_mobile: `(min-width: ${width.sm_mobile})`,
  m_mobile: `(min-width: ${width.m_mobile})`,
  l_mobile: `(min-width: ${width.l_mobile})`,
  tablet: `(min-width: ${width.tablet})`,
  laptop: `(min-width: ${width.laptop})`,
  l_laptop: `(min-width: ${width.l_laptop})`,
  desktop: `(min-width: ${width.desktop})`,
};


export const getImageURL = ( toRender ) => {
  const imageList = images;
  const url = toRender.map((img) => {
    return merge(img, find(imageList, { name: img.name }));
  });
  
  return url;
};
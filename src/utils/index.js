import merge from "lodash/merge";
import find from "lodash/find";
import { images } from "../components/images/Images";


export const theme = {
  colors: {
    text: "#252835",
    background: "#f0f0f0",
    primary: "#d9bdc7",
    secondary: "transparent",
    accent: "#dda3b8",
    muted: "#efefef",
  },
  space: [
    0,
    "0.125rem", // 2px
    "0.25rem", // 4px
    "0.5rem", // 8px
    "1rem", // 16px
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
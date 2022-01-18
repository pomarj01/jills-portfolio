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

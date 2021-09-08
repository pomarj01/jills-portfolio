const size = {
  sm_mobile: '320px',
  m_mobile: '375px',
  l_mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  l_laptop: '1440px',
  desktop: '2560px'
}

export const device = {
  sm_mobile: `(min-width: ${size.sm_mobile})`,
  m_mobile: `(min-width: ${size.m_mobile})`,
  l_mobile: `(min-width: ${size.l_mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  l_laptop: `(min-width: ${size.l_laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
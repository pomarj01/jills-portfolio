import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { icons, images, shapes } from "../../components/images/library";
import { device, theme } from "../../utils";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;

  @media ${device.latop} {
    flex-direction: row;
  }
`;

const Box = styled.div`
  background: linear-gradient(0deg, #f5f5f5 0.02%, #d9bdc7 37.72%);
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: 1s;

  @media ${device.tablet} {
    padding: ${theme.space[8]};
  }
`;

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Navigation = styled.div`
  position: relative;
  height: 100px;
  z-index: 2;

  &.slanted-left {
    width: 100px;
    transition: 800ms ease;

    &::after {
      right: 0;
      border-right: 100px solid transparent;
      border-top: 100px solid #484848;
      transition: 800ms ease;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
  }

  ${NavContainer}:hover & {
    cursor: pointer;
    width: 180px;
    height: 180px;

    &::after {
      right: 0;
      border-right: 180px solid transparent;
      border-top: 180px solid #484848;
    }
  }
`;

const Back = styled.div`
  font-size: clamp(1rem, 0.6429rem + 1.1607vw, 1.25rem);
  font-weight: ${theme.fontWeights.bold};

  a {
    background: ${theme.colors.primary};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    display: inline-flex;
    align-items: center;
    position: absolute;
    left: ${theme.space[8]};
    top: ${theme.space[5]};
    z-index: 1;
  }
`;

const ArrowIcon = styled.svg`
  width: 18px;
  transform: translateX(0px);
  transition: 300ms ease-out;
  color: ${theme.colors.light[1]};
  opacity: 0;

  ${NavContainer}:hover & {
    transform: translateX(-10px);
    color: ${theme.colors.accent[1]};
    opacity: 1;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1.5rem 1.5rem 0;
  color: ${theme.colors.dark[0]};
`;

const ExperienceWrapper = styled.div`
  max-width: 400px;
  padding: 1.5rem;
`;

const General = styled(ExperienceWrapper)`
  text-align: right;
`

const Description = styled.p`
  font-size: clamp(0.875rem, 1.0657rem + 0.2714vw, 1.25rem);
`;

const Projects = styled(ExperienceWrapper)`
  background: ${theme.colors.accent[2]};
  color: ${theme.colors.dark[0]};
  margin-top: ${theme.space[9]};
  margin-right: ${theme.space[5]};
  position: absolute;
  bottom: 2%;
  z-index: 1;

  @media ${device.tablet} {
    width: 220px;
    top: 25%;
    bottom: inherit;
  }
`;

const Header = styled.h2`
  margin-bottom: ${theme.space[3]};
  font-size: ${theme.space[6]};

  @media ${device.tablet} {
    margin-bottom: ${theme.space[5]};
    font-size: ${theme.space[8]};
  }
`;
  
const Year = styled.p`
  font-size: ${theme.space[4]};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.space[4]};

  @media ${device.tablet} {
    font-size: ${theme.space[6]};
    margin-bottom: ${theme.space[6]};
  }
`;

const List = styled.ul`
  font-size: ${theme.space[4]};
  padding-left: ${theme.space[9]};
  padding-right: ${theme.space[5]};

  @media ${device.tablet} {
    font-size: ${theme.space[6]};
  }
`;

const Item = styled.li`
  margin-bottom: ${theme.space[2]};
`;

const RoundedWaveShape = styled.img`
  display: none;

  @media ${device.tablet} {
    display: inherit;
    width: 96px;
    padding-right: 1.5rem;
  }
`;

const MultipleShapes = styled.img`
  display: none;

  @media ${device.tablet} {
    display: inherit;
    position: absolute;
    bottom: 2%;
    width: 120px;
  }
`;

const DesImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const IconsWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: clip;
`;

const DesIllustration = styled.img`
  width: 50%;
  height: 100%;
  max-width: 480px;
  display: flex;
  margin: -2rem auto auto;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const Icon = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 48px;

    @media ${device.laptop} {
      width: 64px;
    }
  }

  svg {
    align-self: center;
    width: 5rem;

    @media ${device.laptop} {
      width: 7rem;
    }
  }
`;

const Ruler = styled(Icon)`
  top: 4.5%;
  left: 5%;
  bottom: 0;
  right: 0;

  img {
    margin-left: 6rem;
  }

  svg {
    height: 6rem;
  }
`;

const Scale = styled(Icon)`
  flex-direction: row;
  justify-content: center;
  top: 30%;
  left: 25%;
  right: 0;

  img {
    margin-left: 1.5rem;
  }
`;

const Crop = styled(Icon)`
  bottom: 30%;
  left: 20%;
  right: 0;

  img {
    margin-left: 6rem;
  }
`;

const Grid = styled(Icon)`
  left: 0;
  right: 6%;
  bottom: 0.5%;

  svg {
    width: 6rem;
    margin-bottom: 1rem;

    @media ${device.laptop} {
      width: 8rem;
    }
  }
`;

const Pen = styled(Icon)`
  left: 0;
  right: 16%;
  bottom: 2%;

  img {
    margin-right: 5rem;
  }

  svg {
    margin: 0 0 1rem 0;
  }
`;

const Vector = styled(Icon)`
  top: 2%;
  left: 0;
  bottom: 0;
  right: 10%;
`;

const Palette = styled(Icon)`
  top: 14%;
  right: 38%;
  left: 0;

  img {
    margin-right: 6rem;
  }

  svg {
    margin-top: 1rem;
  }
`;

const Wireframe = styled(Icon)`
  flex-direction: row;
  justify-content: center;
  top: 40%;
  right: 43%;
  left: 0;

  svg {
    margin-left: 1rem;
  }
`;

const Typography = styled(Icon)`
  bottom: 22%;
  right: 38%;
  left: 0;

  img {
    margin-right: 6rem;
  }
`;


const sideProjects = [ 'Waitron UK', 'FoodBooklet', 'SimplySkin', 'HeatTech', 'Icon designs' ]

const Design = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <NavContainer>
            <Navigation className="slanted-left">
              <Back>
                <a onClick={() => navigate(-1)}>
                  <ArrowIcon width="38" height="18" viewBox="0 0 42 28" fill="none">
                    <path
                      d="M39.5 14H2M2 14L14 2M2 14L14 26"
                      stroke="#d9bdc7"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </ArrowIcon>
                  Back
                </a>
              </Back>
            </Navigation>
          </NavContainer>

          <Content>
            <General>
              <Description>
                I’ve recently taken interest in web designing as well as
                iconography. The illustration below and in the rest of the site
                showcase this recent skills I’ve developed using mainly Figma.
              </Description>
            </General>

            <RoundedWaveShape src={shapes("rounded_wave")} alt="rounded waves vector" />

            <Projects>
              <Header>Side projects</Header>
              <Year>2020-Present</Year>
              <List>
                {sideProjects.map((project, i) => (
                  <Item key={i}>{project}</Item>
                ))}
              </List>
            </Projects>

            <MultipleShapes src={shapes("multiple_shapes")} />
          </Content>

          <DesImageWrapper className="illustration_wrapper">
            <IconsWrapper>
              <DesIllustration src={images("full_des_illustration")} />

              <Ruler>
                <img src={icons("ruler_dark")} alt="ruler icon" />
                <svg width="106" height="83" viewBox="0 0 106 83" fill="none">
                  <path
                    d="M13 48.5C11.3431 48.5 10 49.8431 10 51.5V78C10 80.7614 7.76142 83 5 83C2.23858 83 0 80.7614 0 78V51.5C0 44.3203 5.8203 38.5 13 38.5H27V48.5H13Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M5 78V73M97 1H105M97 1H89M97 1V36C97 40.4183 93.4183 44 89 44H29M5 70V65M5 62V57M5 54V49M5 46V46C5 44.8954 5.89543 44 7 44H9M12 44H17M20 44H25"
                    stroke="#F2E2E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Ruler>

              <Scale>
                <svg width="111" height="18" viewBox="0 0 111 18" fill="none">
                  <path
                    d="M5.07353 14C2.2715 14 3.39262e-07 11.7614 2.18557e-07 8.99999C9.78511e-08 6.23857 2.2715 4 5.07353 4L69 4.00001L69 14L5.07353 14Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M5 9H10M110 9V17M110 9V1M110 9L71 9M13 9H18M21 9H26M29 9H34M37 9H42M45 9L50 9M53 9H58M61 9H67"
                    stroke="#F2E2E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <img src={icons("scale_dark")} alt="scale icon" />
              </Scale>

              <Crop>
                <svg width="129" height="69" viewBox="0 0 129 69" fill="none">
                  <path
                    d="M5 10C2.23858 10 3.39263e-07 7.76143 2.18557e-07 5C9.78512e-08 2.23858 2.23858 2.87452e-06 5 2.75382e-06L68 1.34803e-05L68 10L5 10Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M5 5.00001L10 5.00001M119.967 68L128 68M119.967 68L111.935 68M119.967 68L119.967 13C119.967 8.58175 116.386 5.00002 111.967 5.00002L70 5.00002M13 5.00001L18 5.00001M21 5.00001L26 5.00001M29 5.00001L34 5.00001M37 5.00001L42 5.00001M45 5.00001L50 5.00001M53 5.00001L58 5.00001M61 5.00001L66 5.00002"
                    stroke="#F2E2E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <img src={icons("crop_dark")} alt="crop icon" />
              </Crop>

              <Grid>
                <svg width="18" height="103" viewBox="0 0 18 103" fill="none">
                  <path
                    d="M4 5.19608C4 2.32636 6.23857 9.25541e-08 9 5.96244e-08C11.7614 2.66948e-08 14 2.32636 14 5.19608L14 53L4 53L4 5.19608Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M9 5L9 10M9 102L17 102M9 102L0.999999 102M9 102L9 55M9 13L9 18M9 21L9 27M9 30L9 35M9 38L9 43M9 46L9 51"
                    stroke="#f0f0f0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <img src={icons("grid_dark")} alt="grid icon" />
              </Grid>

              <Pen>
                <svg width="114" height="90" viewBox="0 0 114 108" fill="none">
                  <path
                    d="M109 5.96244e-08C111.761 2.66948e-08 114 2.23858 114 5L114 45C114 52.1797 108.18 58 101 58L87 58L87 53L87 48L101 48C102.657 48 104 46.6569 104 45L104 5C104 2.23858 106.239 9.2554e-08 109 5.96244e-08Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M109 5L109 10M9 107L17 107M9 107L1 107M9 107L9 61C9 56.5817 12.5817 53 17 53L85 53M109 14L109 19M109 22L109 27M109 30L109 35M109 38L109 43.5M109 47L109 49C109 51.2091 107.209 53 105 53V53M102 53L97 53M94 53L89 53"
                    stroke="#f0f0f0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <img src={icons("pen_dark")} alt="pen icon" />
              </Pen>

              <Vector>
                <img src={icons("vector_dark")} alt="vector icon" />
                <svg width="18" height="108" viewBox="0 0 18 108" fill="none">
                  <path
                    d="M4 102.643C4 105.602 6.23857 108 9 108C11.7614 108 14 105.602 14 102.643L14 63L4 63L4 102.643Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M9 102L9 97M9 1L17 0.999832M9 1L0.999999 0.999832M9 1L9 61M9 94L9 89M9 86L9 81M9 78L9 73M9 70L9 65"
                    stroke="#F2E2E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Vector>

              <Palette>
                <img src={icons("palette_dark")} alt="palette icon" />
                <svg width="124" height="67" viewBox="0 0 124 67" fill="none">
                  <path
                    d="M119.276 67C121.885 67 124 64.7614 124 62C124 59.2386 121.885 57 119.276 57H58V67H119.276Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M119 62L113 62M8.22254 1H1M8.22254 1H15.1012M8.22254 1V54C8.22254 58.4183 11.8043 62 16.2225 62L56 62M68 62H74M77 62H83M86 62L92 62M65 62L60 62M95 62H101M104 62H110"
                    stroke="#F2E2E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Palette>

              <Wireframe>
                <img src={icons("wireframe_dark")}  alt="wireframe icon" />
                <svg width="144" height="18" viewBox="0 0 144 18" fill="none">
                  <path
                    d="M139.634 14C142.045 14 144 11.7614 144 9C144 6.23858 142.045 4 139.634 4H83V14H139.634Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M139 9H134M0.999924 9V1M0.999924 9V17M0.999924 9H81M131 9H126M123 9H118M115 9H110M107 9H102M99 9H94M90 9H85"
                    stroke="#F2E2E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Wireframe>

              <Typography>
                <svg width="126" height="100" viewBox="0 0 126 100" fill="none">
                  <path
                    d="M121.634 10C124.045 10 126 7.76143 126 5C126 2.23858 124.045 0 121.634 0H65V10H121.634Z"
                    fill="#CEACB7"
                  />
                  <path
                    d="M8.99998 99.0001L0.999996 99.0001M8.99998 99.0001L17 99.0001M8.99998 99.0001L8.99997 13C8.99997 8.58176 12.5817 5.00004 17 5.00004L63 5.00001M67 5.00001L72 5.00001M75 5.00001L80 5.00001M83 5.00001L88 5.00001M91 5.00001L96 5.00001M99 5.00001L104 5.00001M107.098 5.00001L112 5.00001M115 5.00001L120 5.00001"
                    stroke="#F2E2E7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <img src={icons("typography_dark")} alt="typography icon" />
              </Typography>
            </IconsWrapper>
          </DesImageWrapper>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Design;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: 1s;

  &::after {
    content: " ";
    position: absolute;
    display: block;
    width: 50%;
    height: 100%;
    bottom: 0;
    z-index: 1;
  }
`;

const DevBox = styled(Box)`
  background: linear-gradient(
    180deg,
    rgba(37, 40, 53, 1) 0%,
    rgba(72, 72, 72, 1) 100%
  );
  position: relative;
  flex: 4;

  @media ${device.tablet} {
    padding: 1.5rem;
  }
`;


const Title = styled.div`
  font-size: clamp(1.5rem, 0.6429rem + 1.1607vw, 2.5rem);
  font-weight: 700;

  a {
    color: ${theme.colors.dark};
    position: absolute;
    right: 2rem;
    bottom: 1rem;
    z-index: 1;

    svg {
      transform: translateX(10px);
      transition: 300ms ease-out;
      color: ${theme.colors.light};
    }

    &:hover {
      svg {
        transform: translateX(26px);
        color: ${theme.colors.accent};
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 1.5rem 0;
  // font-size: clamp(1.12rem, 1.0657rem + 0.2714vw, 1.5rem);
  color: ${theme.colors.light};
`;

const ChevronShape = styled.img`
  width: 36px;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const ExperienceWrapper = styled.div`
  max-width: 400px;
  padding: 1.5rem;
`;

const General = styled(ExperienceWrapper)`
  p:first-child {
    margin-bottom: 1rem;
  }
`;

const Professional = styled(ExperienceWrapper)`
  background: #14151c;
`;

const Job = styled.h2`
  font-size: ${theme.space[8]};
  margin-bottom: 1rem;
`;

const Company = styled.div`
  margin-bottom: 1rem;
`;

const Name = styled.p`
  font-size: ${theme.space[7]};
  font-weight: ${theme.fontWeights.bold}
`;

const Year = styled.p`
  font-size: ${theme.space[4]};
`;

const Description = styled.p`
  font-size: ${theme.space[7]};
`;


const DevImageWrapper = styled.div`
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

const DevIllustration = styled.img`
  width: 50%;
  height: 100%;
  max-width: 480px;
  display: flex;
  margin: auto;

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

const ABTest = styled(Icon)`
  top: -3%;
  left: 10%;
  bottom: 0;
  right: 0;

  svg {
    margin-top: 1rem;
    height: 6rem;
  }
`;

const Browser = styled(Icon)`
  top: -3%;
  left: -1%;
  bottom: 0;
  right: 0;

  img {
    margin-right: 6rem;
  }
`;

const Html = styled(Icon)`
  top: 30%;
  right: 38%;
  left: 0;

  img {
    margin-right: 6rem;
  }

  svg {
    margin-top: 1rem;
  }
`;

const Css = styled(Icon)`
  flex-direction: row;
  justify-content: center;
  bottom: 41%;
  right: 44%;
  left: 0;

  svg {
    width: 6rem;
    margin: 0 0 0 1rem;

    @media ${device.laptop} {
      width: 8rem;
    }
  }
`;

const JavaScript = styled(Icon)`
  bottom: 22%;
  right: 38%;
  left: 0;

  img {
    margin-right: 6rem;
  }

  svg {
    margin: 0 0 1rem 0;
  }
`;

const Github = styled(Icon)`
  top: 8%;
  right: 0;
  left: 37%;
  bottom: 0;

  img {
    margin-left: 6rem;
  }

  svg {
    width: 6rem;
    margin-top: 1rem;
  }
`;

const Taskboard = styled(Icon)`
  flex-direction: row;
  justify-content: center;
  top: 32%;
  right: 0;
  left: 43%;

  img {
    margin-left: 1.5rem;
  }

  svg {
    margin: 0 0 1rem 0;
  }
`;

const Cloud = styled(Icon)`
  flex-direction: row;
  justify-content: center;
  right: 0;
  left: 42.5%;
  bottom: 41%;

  img {
    margin-top: 2.5rem;
  }

  svg {
    margin: 0 1rem 0 0;
  }
`;

const ContIntegration = styled(Icon)`
  flex-direction: row;
  justify-content: center;
  right: 0;
  left: 40%;
  bottom: 30%;

  img {
    margin-top: 5.5rem;
  }

  svg {
    height: 6rem;
  }
`;

const Database = styled(Icon)`
  right: 0;
  left: 34%;
  bottom: 18%;

  img {
    margin-left: 2.5rem;
  }

  svg {
    margin-bottom: 1rem;
    height: 6rem;
  }
`;

const Terminal = styled(Icon)`
  left: 12%;
  right: 0;
  bottom: -1%;
  

  svg {
    margin-bottom: 1rem;
    height: 6rem;
  }
`;

const Code = styled(Icon)`
  left: 0;
  right: 0;
  bottom: -1%;

  img {
    margin-right: 6rem;
  }
`;

const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Navigation = styled.div`
  position: relative;
  height: 600px;
  z-index: 2;

  &.slanted-left {
    width: 300px;

    &::after {
      right: 0;
      border-left: 300px solid transparent;
      border-bottom: 600px solid #d9bdc7;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
  }
`;


const Development = ({ location }) => {
  return (
    <Wrapper>
      <Container>
        <DevBox>
          <NavContainer>
            <Navigation className="slanted-left">
              <Title>
                <a onClick={() => navigate('/about/design')}>
                  Design
                  <svg width="38" height="18" viewBox="0 0 42 28" fill="none">
                    <path
                      d="M2 14H39.5M39.5 14L27.5 2M39.5 14L27.5 26"
                      stroke="#252835"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Title>
            </Navigation>
          </NavContainer>

          <Content>
            <ChevronShape src={shapes("double_chevrons")} alt="double chevron vector" />

            <General>
              <Description>
                I’m a Front-End Developer who has a passion for creating
                intuitive user interfaces and experiences.
              </Description>
              <Description>
                My focus area in the last few years has been with React and
                aiming to be skilled in back-end with Node.js.
              </Description>
            </General>

            <Professional>
              <Job>Front-End Developer</Job>
              <Company>
                <Name>Workray</Name>
                <Year>2016-2020</Year>
              </Company>
              <Description>
                A software tool that manages all your jobs and tracks the
                progress of your applications in one place.
              </Description>
            </Professional>
          </Content>

          <DevImageWrapper className="illustration_wrapper">
            <IconsWrapper>
              <DevIllustration src={images("full_dev_illustration")} alt="full development illustration" />

              <ABTest>
                <img src={icons("ab_testing_light")} alt="a/b testing icon" />
                <svg width="18" height="130" viewBox="0 0 18 130" fill="none">
                  <path
                    d="M9 129V1M9 1H17M9 1H1"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
              </ABTest>

              <Browser>
                <img src={icons("browser_light")} alt="browser icon" />
                <svg width="159" height="130" viewBox="0 0 159 130" fill="none">
                  <path
                    d="M158 129V49.5C158 45.0817 154.418 41.5 150 41.5H17C12.5817 41.5 9 37.9183 9 33.5V1M9 1H17M9 1H1"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
              </Browser>

              <Html>
                <img src={icons("html_light")} alt="html icon" />
                <svg width="147" height="46" viewBox="0 0 147 46" fill="none">
                  <path
                    d="M146 44.9998H17C12.5817 44.9998 9 41.4181 9 36.9998V1M9 1H17M9 1H1"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
              </Html>

              <Css>
                <img src={icons("css_light")} alt="css icon" />
                <svg width="191" height="18" viewBox="0 0 191 18" fill="none">
                  <path
                    d="M190 9H90H1M1 9V1M1 9V17"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
              </Css>

              <JavaScript>
                <svg width="146" height="46" viewBox="0 0 146 46" fill="none">
                  <path
                    d="M145 1.00012H17C12.5817 1.00012 8.99997 4.58184 8.99997 9.00012V45M8.99997 45H17M8.99997 45H1"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
                <img src={icons("js_light")} alt="javascript icon" />
              </JavaScript>

              <Github>
                <img src={icons("github_light")} alt="github icon" />
                <svg width="118" height="73" viewBox="0 0 118 73" fill="none">
                  <path
                    d="M1 72H101C105.418 72 109 68.4183 109 64V1M109 1H101M109 1H117"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
              </Github>

              <Taskboard>
                <svg width="161" height="18" viewBox="0 0 161 18" fill="none">
                  <path
                    d="M1 9H107H160M160 9V1M160 9V17"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
                <img src={icons("taskboard_light")} alt="takboard icon" />
              </Taskboard>

              <Cloud>
                <svg width="176" height="70" viewBox="0 0 176 70" fill="none">
                  <path
                    d="M1 1H125C129.418 1 133 4.58172 133 9V53.1098C133 57.5381 136.597 61.124 141.026 61.1097L175 61M175 61V69M175 61V53"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
                <img src={icons("cloud_light")} alt="cloud icon" />
              </Cloud>

              <ContIntegration>
                <svg width="137" height="156" viewBox="0 0 137 156" fill="none">
                  <path
                    d="M1 1H97C101.418 1 105 4.58172 105 9V139C105 143.418 108.582 147 113 147H136M136 147V139M136 147V155"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
                <img src={icons("ci_cd_light")} alt="ci/cd icon"/>
              </ContIntegration>

              <Database>
                <svg width="83" height="165" viewBox="0 0 83 165" fill="none">
                  <path
                    d="M1 1H65.9173C70.3339 1 73.9149 4.57912 73.9173 8.99573L74 164M74 164H82M74 164H66"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
                <img src={icons("database_light")} alt="database icon" />
              </Database>

              <Terminal>
                <svg width="18" height="130" viewBox="0 0 18 130" fill="none">
                  <path
                    d="M9 1V129M9 129H17M9 129H1"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>

                <img src={icons("terminal_light")} alt="termnial icon" />
              </Terminal>

              <Code>
                <svg width="159" height="130" viewBox="0 0 159 130" fill="none">
                  <path
                    d="M158 1V80.5C158 84.9183 154.418 88.5 150 88.5H17C12.5817 88.5 9 92.0817 9 96.5V129M9 129H17M9 129H1"
                    stroke="#8D8D8D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="10 10"
                  />
                </svg>
                <img src={icons("code_light")} alt="code icon" />
              </Code>
            </IconsWrapper>
          </DevImageWrapper>
        </DevBox>
      </Container>
    </Wrapper>
  );
};

export default Development;

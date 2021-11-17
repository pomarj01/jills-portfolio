import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Header from "../../components/layout/header";
import { useResizer } from "../../components/hooks/useResizer";
import { images, icons } from "../../components/images/library";
import { device, theme } from "../../utils";


const Wrapper = styled.div`
  background: #252835;
  height: ${props => props.isHomepage ? '80vh' : '95vh'};
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.laptop} {
    height: 100vh;
  }
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

  // &:hover {
  //   flex: 2;

  //   .illustration_wrapper {
  //     width: 100%;
  //     justify-content: center;
  //   }
  // }

  &::after {
    content: " ";
    position: absolute;
    display: block;
    width: 50%;
    height: 100%;
    top: 0;
    z-index: 1;
  }
`;

const DevBox = styled(Box)`
  background: #333;
  position: relative;
  padding: 25px 0 25px 25px;

  &::after {
    right: -4px;
    border-right: 4px solid #fff;
    -ms-transform: skew(-28.5deg, 0deg);
    -webkit-transform: skew(-28.5deg, 0deg);
    transform: skew(-28.5deg, 0deg);
    background: #333;
  }
`;

const DesignBox = styled(Box)`
  background: linear-gradient(0deg, #f5f5f5 0.02%, #d9bdc7 37.72%);
  position: relative;
  padding: 25px 25px 25px 0;

  &::after {
    left: -4px;
    z-index: 2;
    border-left: 4px solid #fff;
    -ms-transform: skew(-28.5deg, 0deg);
    -webkit-transform: skew(-28.5deg, 0deg);
    transform: skew(-28.5deg, 0deg);
    background: linear-gradient(0deg, #f5f5f5 0.02%, #d9bdc7 37.72%);
  }
`;

const Title = styled.div`
  font-size: clamp(1.5rem, -0.5rem + 6.6667vw, 2.5rem);
  // font-size: clamp(1.5rem, 0.6429rem + 1.1607vw, 2.5rem);
  font-weight: 700;

  a {
    svg {
      opacity: 0;
      transform: translateX(-40%);
      transition: 300ms ease-out;
    }

    &:hover {
      color: ${theme.colors.accent};

      svg {
        opacity: 1;
        padding-left: 10px;
        transform: translateX(12px);
      }
    }
  }
`;

const DevTitle = styled(Title)`
  align-self: flex-start;
  padding: 2rem 0 0 2rem;

  a {
    color: ${theme.colors.light};
  }
`;

const DesignTitle = styled(Title)`
  align-self: flex-end;
  padding: 2rem 2rem 0 0;
  z-index: 3;

  a {
    color: ${theme.colors.dark};

    &:hover {
      color: ${theme.colors.dark};

    }

    svg {
      &:hover {
        color: ${theme.colors.dark};
      }
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: 5s;
  z-index: 2;
  position: relative;
`;

const DevImageWrapper = styled(ImageWrapper)`
  justify-content: flex-end;
`;

const DesignImageWrapper = styled(ImageWrapper)`
  z-index: 3;
`;

const IconsWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const DevIllustration = styled.img`
  width: 59%;
  max-width: 360px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -1.3rem;
  margin: auto;
  z-index: 2;

  @media ${device.laptop} {
    width: 64%;
    right: -3rem;
  }

  @media ${device.l_laptop} {
    right: -3.3rem;
  }
`;

const DesignIllustration = styled.img`
  width: 70%;
  max-width: 425px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -4.7rem;
  margin: auto;

  @media ${device.laptop} {
    width: 75%;
    left: -6.8rem;
  }
`;

const Icon = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;

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
  right: 0;
  margin-top: 4rem;
  margin-right: -3rem;
  align-items: center;

  svg {
    margin-top: 1rem;
    height: 5rem;
  }

  @media ${device.laptop} {
    margin-top: ${props => props.isHomepage ? '4.7rem' : '-0.4rem'};
    margin-right: -4rem;

    svg {
      height: 7rem;
    }
  }

  @media ${device.l_laptop} {
    margin-top: ${props => props.isHomepage ? '4.2rem' : '0rem'};
  }

  @media ${device.desktop} {
    margin-top: ${props => props.isHomepage ? '19.4rem' : '15.4rem'};
  }
`;

const Browser = styled(Icon)`
  top: 0;
  right: 0;
  margin-right: 2rem;
  margin-top: 5rem;

  @media ${device.tablet} {
    margin-top: ${props => props.isHomepage ? '6.6rem' : '4rem' };
  }

  @media ${device.laptop} {
    margin-top: ${props => props.isHomepage ? '5.2rem' : '0.2rem' };
  }

  @media ${device.l_laptop} {
    margin-right: 2rem;
    margin-top: ${props => props.isHomepage ? '5.2rem' : '0.8rem' };
  }

  @media ${device.desktop} {
    margin-top: ${props => props.isHomepage ? '20.4rem' : '16.4rem' };
  }

  img {
    margin-left: -1.5rem;
  }
`;

const HTML = styled(Icon)`
  right: 0;
  bottom: 0;
  margin-bottom: 19.6rem;
  margin-right: 12.6rem;

  @media ${device.tablet} {
    margin-bottom: ${(props) => (props.isHomepage ? '19.5rem' : '19.8rem')};
    margin-right: 14.6rem;
  }

  @media ${device.laptop} {
    margin-bottom: ${(props) => (props.isHomepage ? '25.4rem' : '21.8rem')};
    margin-right: 21rem;
  }

  @media ${device.l_laptop} {
    margin-bottom: ${(props) => (props.isHomepage ? '26.5rem' : '21.5rem')};
    margin-right: 20rem;
  }

  img {
    margin-left: -1.5rem;
  }

  svg {
    margin-top: 1rem;
  }
`;

const CSS = styled(Icon)`
  flex-direction: row;
  right: 0;
  bottom: 0;
  margin-bottom: 17.5rem;
  margin-right: 12.6rem;

  @media ${device.tablet} {
    margin-bottom: ${(props) => (props.isHomepage ? '17.5rem' : '17.8rem')};
    margin-right: 14.6rem;
  }

  @media ${device.laptop} {
    margin-bottom: ${(props) => (props.isHomepage ? '22rem' : '18.8rem')};
    margin-right: 21rem;
  }

  @media ${device.l_laptop} {
    margin-bottom: ${(props) => (props.isHomepage ? '22.5rem' : '18rem')};
    margin-right: 20rem;
  }

  svg {
    width: 6rem;
    margin: 0 0 0 1rem;

    @media ${device.laptop} {
      width: 8rem;
    }
  }
`;

const JS = styled(Icon)`
  right: 0;
  bottom: 0;
  margin-bottom: 11.6rem;
  margin-right: 12.6rem;

  @media ${device.tablet} {
    margin-bottom: ${props => props.isHomepage ? '11.6rem' : '11.8rem' };
    margin-right: 14.6rem;
  }

  @media ${device.laptop} {
    margin-bottom: ${props => props.isHomepage ? '15rem' : '11.5rem' };
    margin-right: 21rem;
  }

  @media ${device.l_laptop} {
    margin-bottom: ${props => props.isHomepage ? '15rem' : '10.5rem' };
    margin-right: 20rem;
  }

  img {
    margin-left: -1.5rem;
  }

  svg {
    margin: 0 0 1rem 0;
  }
`;

const Ruler = styled(Icon)`
  margin-top: 5.6rem;
  margin-left: 2rem;

  img {
    margin: 0 0 0.5rem 5.5rem;
  }

  @media ${device.laptop} {
    margin-top: ${props => props.isHomepage ? '6rem' : '2.4rem'};
    margin-left: 4rem;
  }

  @media ${device.l_laptop} {
    margin-top: ${props => props.isHomepage ? '6.6rem' : '2rem'};
    margin-left: 5rem;
  }

  @media ${device.desktop} {
    margin-top: ${props => props.isHomepage ? '20.8rem' : '16.8rem'};
    margin-left: 6rem;
  }
`;

const Scale = styled(Icon)`
  flex-direction: row;
  margin-left: 9.5rem;
  margin-top: 15rem;

  img {
    margin-left: 0.5rem;
  }

  @media ${device.laptop} {
    margin-left: 12.5rem;
    margin-top: ${props => props.isHomepage ? '20rem' : '16rem'};
  }

  @media ${device.l_laptop} {
    margin-left: 11.5rem;
    margin-top: ${props => props.isHomepage ? '19rem' : '15rem'};
  }

  @media ${device.desktop} {
    margin-left: 11.5rem;
    margin-top: ${props => props.isHomepage ? '34rem' : '30rem'};
  }
`;

const Crop = styled(Icon)`
  bottom: 0;
  margin-left: 9.5rem;
  margin-bottom: 13rem;

  img {
    margin-right -4.2rem;
    align-self: center;
  }

  @media ${device.laptop} {
    margin-left: 12.5rem;
    margin-bottom: ${props => props.isHomepage ? '16rem' : '12rem'};
   
    img {
      margin-right -5.5rem;
    }

    svg {
      margin-bottom: 0.5rem;
    }
  }

  @media ${device.l_laptop} {
    margin-left: 11.5rem;
    margin-bottom: ${props => props.isHomepage ? '16rem' : '12rem'};
  }

  @media ${device.desktop} {
    margin-left: 11.5rem;
    margin-bottom: ${props => props.isHomepage ? '32rem' : '26rem'};
  }  
`;

const Grid = styled(Icon)`
  bottom: 0;
  margin-bottom: 4rem;
  align-items: center;

  @media ${device.laptop} {
    margin-left: -1rem;
    margin-bottom: ${props => props.isHomepage ? '5rem' : '0.2rem'};
  }

  @media ${device.l_laptop} {
    margin-left: -1rem;
    margin-bottom: ${props => props.isHomepage ? '4rem' : '0rem'};
  }

  @media ${device.desktop} {
    margin-left: -1rem;
    margin-bottom: ${props => props.isHomepage ? '19.2rem' : '15.2rem'};
  }

  img {
    margin: 0.5rem 0 0 0;
  }

  svg {
    height: 5rem;

    @media ${device.laptop} {
      height: 6.4rem;
    }
  }
`;

const Pen = styled(Icon)`
  bottom: 0;
  margin-bottom: 4.2rem;
  margin-left: -5rem;
  align-items: center;

  @media ${device.laptop} {
    margin-left: -7rem;
    margin-bottom: ${props => props.isHomepage ? '6.1rem' : '1.2rem'};
  }

  @media ${device.l_laptop} {
    margin-left: -7rem;
    margin-bottom: ${props => props.isHomepage ? '5.2rem' : '1rem'};

    svg {
      width: 6.8rem;
    }
  }

  @media ${device.desktop} {
    margin-left: -8rem;
    margin-bottom: 20.3em;
    margin-bottom: ${props => props.isHomepage ? '20.3rem' : '16.3rem'};
  }

  img {
    margin: 0 0 0 -4.2rem;
  }
`;


const About = ({ location }) => {
  const isHomepage = location.pathname === "/";
  const isMobile = useResizer();

  return (
    <Wrapper id="about" isHomepage={isHomepage}>
      {!isHomepage ? <Header /> : ""}

      {isMobile ? (
        <div> For mobile </div>
      ) : (
        <Container>
          <DevBox>
            <DevTitle>
              <Link to="/about/development">
                Development
                <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
                  <path
                    d="M2 14H39.5M39.5 14L27.5 2M39.5 14L27.5 26"
                    stroke="#CEACB7"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </DevTitle>

            <DevImageWrapper className="illustration_wrapper">
              <DevIllustration src={images("dev_illustration")} alt="development illustration" />

              <IconsWrapper>
                <ABTest isHomepage={isHomepage}>
                  <img src={icons("ab_testing_light")} alt="a/b testing icon"/>
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

                <Browser isHomepage={isHomepage}>
                  <img src={icons("browser_light")} alt="browser icon" />
                  <svg
                    width="159"
                    height="130"
                    viewBox="0 0 159 130"
                    fill="none"
                  >
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

                <HTML isHomepage={isHomepage}>
                  <img src={icons("html_light")} alt="hmtl icon" />
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
                </HTML>

                <CSS isHomepage={isHomepage}>
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
                </CSS>

                <JS isHomepage={isHomepage}>
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
                  <img src={icons("js_light")} alt="js icon" />
                </JS>
              </IconsWrapper>
            </DevImageWrapper>
          </DevBox>

          <DesignBox>
            <DesignTitle>
              <Link to="/about/design">
                Design
                <svg width="42" height="28" viewBox="0 0 42 28" fill="none">
                  <path
                    d="M2 14H39.5M39.5 14L27.5 2M39.5 14L27.5 26"
                    stroke="#252835"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </DesignTitle>

            <DesignImageWrapper className="illustration_wrapper">
              <DesignIllustration src={images("des_illustration")} alt="design illustration" />

              <IconsWrapper>
                <Ruler isHomepage={isHomepage}>
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

                <Scale isHomepage={isHomepage}>
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

                <Crop isHomepage={isHomepage}>
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

                <Grid isHomepage={isHomepage}>
                  <svg width="18" height="103" viewBox="0 0 18 103" fill="none">
                    <path
                      d="M4 5.19608C4 2.32636 6.23857 9.25541e-08 9 5.96244e-08C11.7614 2.66948e-08 14 2.32636 14 5.19608L14 53L4 53L4 5.19608Z"
                      fill="#CEACB7"
                    />
                    <path
                      d="M9 5L9 10M9 102L17 102M9 102L0.999999 102M9 102L9 55M9 13L9 18M9 21L9 27M9 30L9 35M9 38L9 43M9 46L9 51"
                      stroke="#F2E2E7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img src={icons("grid_dark")} alt="grid icon" />
                </Grid>

                <Pen isHomepage={isHomepage}>
                  <svg
                    width="114"
                    height="90"
                    viewBox="0 0 114 108"
                    fill="none"
                  >
                    <path
                      d="M109 5.96244e-08C111.761 2.66948e-08 114 2.23858 114 5L114 45C114 52.1797 108.18 58 101 58L87 58L87 53L87 48L101 48C102.657 48 104 46.6569 104 45L104 5C104 2.23858 106.239 9.2554e-08 109 5.96244e-08Z"
                      fill="#CEACB7"
                    />
                    <path
                      d="M109 5L109 10M9 107L17 107M9 107L1 107M9 107L9 61C9 56.5817 12.5817 53 17 53L85 53M109 14L109 19M109 22L109 27M109 30L109 35M109 38L109 43.5M109 47L109 49C109 51.2091 107.209 53 105 53V53M102 53L97 53M94 53L89 53"
                      stroke="#F2E2E7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img src={icons("pen_dark")} alt="pen icon" />
                </Pen>
              </IconsWrapper>
            </DesignImageWrapper>
          </DesignBox>
        </Container>
      )}
    </Wrapper>
  );
};

export default About;
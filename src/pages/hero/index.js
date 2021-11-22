import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { device, theme } from "../../utils";
import ContentImages from "./HeroImages";
import ScrollArrow from "./ScrollArrow";

const Wrapper = styled.div`
  background: ${theme.colors.dark};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContentWrapper = styled.div`
  display: inherit;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: inherit;
  align-items: inherit;
  padding: 1rem;

  .Typewriter {
    font-family: "Cabin", sans-serif;
    font-size: clamp(1.5rem, 0.6429rem + 4.2857vw, 6rem);
    color: ${theme.colors.light[1]};
    width: 40%;
    z-index: 1;
  }

  @media ${device.laptop} {
    padding: 2rem;
    height: 100%;
  }
`;

const LeftColumn = styled(Column)`
  justify-content: center;
  width: 100%;

  @media ${device.laptop} {
    width: 20%;
  }
`;

const RightColumn = styled(Column)`
  width: 100%;
  justify-content: center;

  @media ${device.laptop} {
    width: 70%;
    justify-content: normal;
  }
`;

const TitleWrapper = styled.div`
  display: inherit;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Work Sans", sans-serif;
  font-size: clamp(2rem, 1.2381rem + 3.8095vw, 6rem);
  color: ${theme.colors.light[1]};
`;

const MobileTitle = styled(Title)`
  margin-right: 1rem;
  @media ${device.laptop} {
    display: none;
  }
`;

const StyledTitle = styled(Title)`
  color: #544a55;
  text-shadow: 6px -6px 1px rgb(206 172 183 / 10%);

  @media ${device.laptop} {
    position: absolute;
    left: 0;
    font-size: clamp(1rem, -2.2381rem + 16.1905vw, 18rem);
    text-shadow: 10px -10px 1px rgb(206 172 183 / 10%);
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
`;

const ImagesWrapper = styled.div`
  display: inherit;
  position: relative;
  width: 40%;
`;


const HeroDescription = () => (
  <Typewriter
    onInit={(typewriter) => {
      typewriter
        .typeString("EVELOPER")
        .pauseFor(2500)
        .deleteChars(8)
        .typeString("ESIGNER")
        .pauseFor(2500)
        .start();
    }}
    options={{
      cursor: "_",
      delay: 100,
      loop: true,
    }}
  />
);

const Hero = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LeftColumn>
          <TitleWrapper>
            <MobileTitle>Hello, I'm</MobileTitle>
            <StyledTitle>Jill</StyledTitle>
          </TitleWrapper>
        </LeftColumn>

        <RightColumn>
          <ImagesWrapper>
            <ContentImages />
          </ImagesWrapper>

          <HeroDescription />
        </RightColumn>
      </ContentWrapper>

      <ScrollArrow />
    </Wrapper>
  );
};

export default Hero;
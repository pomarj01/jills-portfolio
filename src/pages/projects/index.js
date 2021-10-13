import React from "react";
import styled from "styled-components";
import Navigation from "../../components/navigation";
import Card from "../../components/card";
import { getImageURL, device } from "../../utils";

const Wrapper = styled.div`
  background: #f5f5f5;
  color: #252835;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  min-height: 0vw;
  font-size: clamp(1.5rem, -0.5rem + 6.6667vw, 2.5rem);
  font-weight: 700;
  padding: 2rem;
  align-self: center;

  @media ${device.tablet} {
    align-self: flex-start;
    padding: 4rem;
  }
`;

const Content = styled.div`
  padding: 2rem 0;
`;

const Project = styled.div`
  position: relative;
  margin: 0 0 4rem;
  
  @media ${device.tablet} {
    padding-bottom: 4rem;
  }
`;

const Shapes = styled.img`
  position: absolute;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const OblongsStyles = styled(Shapes)`
  left: 0;
  top: 0;
  width: 7%;
`;

const EclipsesStyles = styled(Shapes)`
  right: 0;
  bottom: 10%;
  width: 6%;
`;

const BigWavesStyles = styled(Shapes)`
  left: 0;
  top: 0;
  width: 15%;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const renderShapes = [
  { name: "oblongs" },
  { name: "eclipses" },
  { name: "big_waves" },
];

const renderImages = [
  { name: "waitron_dashboard" },
  { name: "fb_landing" },
  { name: "fb_register" },
];


const Projects = ({ location }) => {
  const hideNav = location.pathname === "/";
  const shapes = getImageURL(renderShapes);
  const images = getImageURL(renderImages);

  const setOfShapes = new Map();
  setOfShapes.set(shapes[0].name, shapes[0].url);
  setOfShapes.set(shapes[1].name, shapes[1].url);
  setOfShapes.set(shapes[2].name, shapes[2].url);

  const setOfImages = new Map();
  setOfImages.set(images[0].name, images[0].url);
  setOfImages.set(images[1].name, images[1].url);
  setOfImages.set(images[2].name, images[2].url);

  return (
    <Wrapper>
      {hideNav ? "" : <Navigation />}

      <Header>Personal Projects</Header>

      <Content>
        <Project>
          <OblongsStyles src={setOfShapes.get("oblongs")} />
          <CardWrapper>
            <Card
              background="#ddebf4"
              header="Waitron UK"
              description="An ordering system web app aimed to be used by local pubs. Designed both admin and user side of the app. The admin side was targeted on tablet devices while for the customer side was on mobile."
              tags={["Design", "Figma"]}
              tagsColor="#adc8d9"
              images={[setOfImages.get("waitron_dashboard")]}
              ctaContent="Full Project"
            />
          </CardWrapper>
          <EclipsesStyles src={setOfShapes.get("eclipses")} />
        </Project>

        <Project>
          <BigWavesStyles src={setOfShapes.get("big_waves")} />
          <CardWrapper>
            <Card
              background="#E5F0EF"
              header="FoodBooklet"
              description="A cooking booklet web app where you can organise all your recipes as well as plan them by creating shopping list. Designed using Figma and developed using MERN stack."
              tags={[
                "Design",
                "Development",
                "Figma",
                "ReactJS",
                "MongoDB",
                "Express",
                "Node.js",
              ]}
              tagsColor="#ADCCC9"
              images={[
                setOfImages.get("fb_landing"),
                setOfImages.get("fb_register"),
              ]}
              ctaContent="Full Project"
            />
          </CardWrapper>

        </Project>
      </Content>
    </Wrapper>
  );
};

export default Projects;


// NOTE: clean up card component
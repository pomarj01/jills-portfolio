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

const DoubleWavesStyles = styled(Shapes)`
  left: 14%;
  top: 25%;
  width: 7%;
`;

const SquareDotsStyles = styled(Shapes)`
  right: 17%;
  top: 2%;
  width: 5%;
`;

const TriangleCircleStyles = styled(Shapes)`
  left: 15%;
  top: 0%;
  width: 8%;
`;

const CircledLinesDotsStyles = styled(Shapes)`
  right: 14%;
  bottom: 2%;
  width: 10%;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const renderShapes = [
  { name: "oblongs" },
  { name: "eclipses" },
  { name: "big_waves" },
  { name: "double_waves" },
  { name: "square_dots" },
  { name: "triangle_circle" },
  { name: "circledLines_dots" },
];

const renderImages = [
  { name: "waitron_dashboard" },
  { name: "fb_landing" },
  { name: "fb_register" },
  { name: "heattech" },
  { name: "heattech_2" },
];

const renderIcons = [
  { name: "monitor" },
  { name: "palette" },
  { name: "pen" },
  { name: "vector" },
  { name: "wireframe" },
  { name: "ab_testing" },
  { name: "cloud" },
  { name: "github" },
  { name: "js" },
  { name: "vscode" },
];

const CustomCard = styled(Card)`
  background: green;
`


const Projects = ({ location }) => {
  const hideNav = location.pathname === "/";
  const shapes = getImageURL(renderShapes);
  const images = getImageURL(renderImages);
  const icons = getImageURL(renderIcons);

  const setOfShapes = new Map();
  setOfShapes.set(shapes[0].name, shapes[0].url);
  setOfShapes.set(shapes[1].name, shapes[1].url);
  setOfShapes.set(shapes[2].name, shapes[2].url);
  setOfShapes.set(shapes[3].name, shapes[3].url);
  setOfShapes.set(shapes[4].name, shapes[4].url);
  setOfShapes.set(shapes[5].name, shapes[5].url);
  setOfShapes.set(shapes[6].name, shapes[6].url);

  const setOfImages = new Map();
  setOfImages.set(images[0].name, images[0].url);
  setOfImages.set(images[1].name, images[1].url);
  setOfImages.set(images[2].name, images[2].url);
  setOfImages.set(images[3].name, images[3].url);
  setOfImages.set(images[4].name, images[4].url);

  const setOfIcons = new Map();
  setOfIcons.set(icons[0].name, icons[0].url);
  setOfIcons.set(icons[1].name, icons[1].url);
  setOfIcons.set(icons[2].name, icons[2].url);
  setOfIcons.set(icons[3].name, icons[3].url);
  setOfIcons.set(icons[4].name, icons[4].url);
  setOfIcons.set(icons[5].name, icons[5].url);
  setOfIcons.set(icons[6].name, icons[6].url);
  setOfIcons.set(icons[7].name, icons[7].url);
  setOfIcons.set(icons[8].name, icons[8].url);
  setOfIcons.set(icons[9].name, icons[9].url);

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
              media={[setOfImages.get("waitron_dashboard")]}
              mediaSize="30rem"
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
              media={[
                setOfImages.get("fb_landing"),
                setOfImages.get("fb_register"),
              ]}
              mediaSize="20rem"
              ctaContent="Full Project"
            />
          </CardWrapper>
        </Project>

        <Project>
          <DoubleWavesStyles src={setOfShapes.get("double_waves")} />
          <CardWrapper>
            <Card
              background="#EEDFDC"
              header="HeatTech"
              description="A simple and straight forward website for a plumbing and repair services company which only provides information, fetaures and contact details of the company. Only created designs for mobile view using Figma."
              tags={["Design", "Figma"]}
              tagsColor="#DDC1BB"
              media={[
                setOfImages.get("heattech"),
                setOfImages.get("heattech_2"),
              ]}
              mediaSize="260px"
              ctaContent="Full Project"
            />
          </CardWrapper>
          <SquareDotsStyles src={setOfShapes.get("square_dots")} />
        </Project>

        <Project>
          <TriangleCircleStyles src={setOfShapes.get("triangle_circle")} />
          <CardWrapper>
            <Card
              customCard
              background="#F6EDD3"
              header="Icon Designs"
              description="A collection of icons ranging from outline to filled icons. These icons were created using the easiest styles such as basic shapes and lines and incoroporated colours using Figma."
              tags={["Design", "Figma"]}
              tagsColor="#E5CB80"
              media={[
                setOfIcons.get("monitor"),
                setOfIcons.get("palette"),
                setOfIcons.get("pen"),
                setOfIcons.get("vector"),
                setOfIcons.get("wireframe"),
                setOfIcons.get("vscode"),
                setOfIcons.get("js"),
                setOfIcons.get("cloud"),
                setOfIcons.get("ab_testing"),
                setOfIcons.get("github"),
              ]}
              mediaSize="64px"
              mediaStyles={{
                flexWrap: "wrap",
                boxShadow: "none",
              }}
              mediaBackground="#fff"
              ctaContent="Full Project"
            />
          </CardWrapper>
          <CircledLinesDotsStyles src={setOfShapes.get("circledLines_dots")} />
        </Project>
      </Content>
    </Wrapper>
  );
};

export default Projects;


// NOTE: clean up card component
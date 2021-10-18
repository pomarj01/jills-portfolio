import React from "react";
import styled from "styled-components";
import Navigation from "../../components/navigation";
import Card from "../../components/card";
import { shapes, images, icons } from './media'
import { device } from "../../utils";

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

const FilledOblongsStyles = styled(Shapes)`
  right: 0;
  bottom: 20%;
  width: 8%;
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


const Projects = ({ location }) => {
  const hideNav = location.pathname === "/"; 

  return (
    <Wrapper>
      {hideNav ? "" : <Navigation />}

      <Header>Personal Projects</Header>

      <Content>
        <Project>
          <OblongsStyles src={shapes("oblongs")} />
          <CardWrapper>
            <Card
              background="#ddebf4"
              header="Waitron UK"
              description="An ordering system web app aimed to be used by local pubs. Designed both admin and user side of the app. The admin side was targeted on tablet devices while for the customer side was on mobile."
              tags={["Design", "Figma"]}
              tagsColor="#adc8d9"
              media={[images("waitron_dashboard")]}
              mediaSize="30rem"
              ctaContent="Full Project"
            />
          </CardWrapper>
          <EclipsesStyles src={shapes("eclipses")} />
        </Project>

        <Project>
          <BigWavesStyles src={shapes("big_waves")} />
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
              media={[images("fb_landing"), images("fb_register")]}
              mediaSize="20rem"
              ctaContent="Full Project"
            />
          </CardWrapper>
        </Project>

        <Project>
          <DoubleWavesStyles src={shapes("double_waves")} />
          <CardWrapper>
            <Card
              background="#EEDFDC"
              header="HeatTech"
              description="A simple and straight forward website for a plumbing and repair services company which only provides information, fetaures and contact details of the company. Only created designs for mobile view using Figma."
              tags={["Design", "Figma"]}
              tagsColor="#DDC1BB"
              media={[images("heattech"), images("heattech_2")]}
              mediaSize="260px"
              ctaContent="Full Project"
            />
          </CardWrapper>
          <SquareDotsStyles src={shapes("square_dots")} />
          <FilledOblongsStyles src={shapes("filled_oblongs")} />
        </Project>

        <Project>
          <TriangleCircleStyles src={shapes("triangle_circle")} />
          <CardWrapper>
            <Card
              background="#F6EDD3"
              header="Icon Designs"
              description="A collection of icons ranging from outline to filled icons. These icons were created using the easiest styles such as basic shapes and lines and incoroporated colours using Figma."
              tags={["Design", "Figma"]}
              tagsColor="#E5CB80"
              media={[
                icons("monitor"),
                icons("palette"),
                icons("pen"),
                icons("vector"),
                icons("wireframe"),
                icons("vscode"),
                icons("js"),
                icons("cloud"),
                icons("ab_testing"),
                icons("github"),
                icons("planet"),
                icons("paint_roller"),
                icons("spaceship"),
                icons("letterJ"),
                icons("letterP"),
              ]}
              mediaSize="64px"
              mediaWrapperStyles={{
                flexWrap: "wrap",
                margin: "1rem 0",
                maxWidth: "450px",
                height: "280px",
                justifyContent: "space-around",
                alignContent: "space-around",
              }}
              imageStyles={{
                boxShadow: "none",
                display: "flex",
                width: "16%",
              }}
              mediaBackground="#fff"
              ctaContent="Full Project"
            />
          </CardWrapper>
          <CircledLinesDotsStyles src={shapes("circledLines_dots")} />
        </Project>
      </Content>
    </Wrapper>
  );
};

export default Projects;

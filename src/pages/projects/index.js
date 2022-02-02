import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/card";
import Modal from "../../components/modal";
import { shapes, images, icons } from "../../components/images/library";
import { projectData } from "../../helpers/data";
import { theme } from "../../helpers/theme";
import { device } from "../../helpers/useMediaQuery";

const Wrapper = styled.div`
  background: ${theme.colors.light[0]};
  color: ${theme.colors.dark[0]};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  min-height: 0vw;
  font-size: clamp(1.5rem, -0.5rem + 6.6667vw, 2.5rem);
  font-weight: ${theme.fontWeights.bold};
  padding: 2rem;
  align-self: center;

  @media ${device.tablet} {
    align-self: flex-start;
    padding: 4rem;
  }
`;

const Content = styled.div`
  padding: 0;

  @media ${device.tablet} {
    padding: 2rem 0;
  }
`;

const Project = styled.div`
  position: relative;
  margin: 0 0 4rem;

  @media ${device.tablet} {
    padding-bottom: 4rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const projectContent = projectData.map((project) => {
  const getMediaURL = project.media.map((name) =>
    project.title !== "Icon Designs" ? images(`${name}`) : icons(`${name}`)
  );

  const getShapeURL = project.shapes.map((a) => {
    const url = shapes(a.name);
    return { url, ...a };
  });

  project.media = getMediaURL;
  project.shapes = getShapeURL;

  return { ...project };
});


const Projects = () => {
  const [isOpen, setOpen] = useState(false);
  const [project, setProject] = useState([{}]);
  const toggleModal = (project) => {
    setProject(project);
    setOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Title>Personal Projects</Title>

      <Modal show={isOpen} close={toggleModal} data={project} />

      <Content>
        {projectContent.map((project, i) => (
          <Project key={i}>
            <CardWrapper>
              <Card
                background={project.background}
                header={project.title}
                description={project.description}
                tags={project.tags}
                tagsColor={project.tagsColor}
                media={project.media}
                mediaSize={project.mediaSize}
                ctaContent="Full Project"
                ctaOnClick={() =>
                  toggleModal({
                    header: `${project.title}`,
                    description: `${project.description}`,
                  })
                }
                mediaWrapperStyles={project.mediaWrapperStyles}
                imageStyles={project.imageStyles}
                mediaBackground={project.mediaBackground}
              />
            </CardWrapper>

          </Project>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Projects;

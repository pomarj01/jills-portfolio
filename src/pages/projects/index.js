import React from "react";
import styled from "styled-components";
import Navigation from "../../components/navigation";

const Wrapper = styled.div`
  background: #252835;
  padding: 0 1rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Projects = ({ location }) => {
  const hideNav = location.pathname === '/';

  return (
    <Wrapper>
      {hideNav ? (
        <h1>this is the content</h1>
      ) : (
        <>
          <Navigation location={location} />
          <p>should show navigation</p>
        </>
      )}
    </Wrapper>
  );
};

export default Projects;


import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import About from './about';
import Projects from './projects';

const Wrapper = styled.div`
  background: #252835;
`;

const App = ({ location }) => (
  <Wrapper>
    <Hero location={location} />
    <About location={location} />
    <Projects location={location} />
  </Wrapper>
  );

export default App;
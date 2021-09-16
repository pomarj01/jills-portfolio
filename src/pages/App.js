import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Dev from './dev';
import Projects from './projects';

const Wrapper = styled.div`
  background: #252835;
  padding: 0 1rem;
`;

const App = ({ location }) => (
  <Wrapper>
    <Hero location={location} />
    <Dev location={location} />
    <Projects location={location} />
  </Wrapper>
  );

export default App;
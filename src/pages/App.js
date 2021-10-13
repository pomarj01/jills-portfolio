import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils';
import Hero from './hero';
import About from './about';
import Projects from './projects';

const Wrapper = styled.div`
  background: #252835;
`;

const App = ({ location }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Hero location={location} />
      <About location={location} />
      <Projects location={location} />
    </Wrapper>
  </ThemeProvider>
  );

export default App;
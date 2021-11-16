import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../utils';
import Header from '../components/layout/header';
import Hero from './hero';
import About from './about';
import Projects from './projects';

const Wrapper = styled.div`
  background: #252835;
`;

const App = ({ location }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header>
        <Hero />
        <About location={location} />
        <Projects location={location} />
      </Header>
    </Wrapper>
  </ThemeProvider>
);

export default App;
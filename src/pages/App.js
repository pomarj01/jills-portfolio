import React from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils';
import Hero from './hero';
import About from './about';
import Projects from './projects';


const App = ({ location }) => (
  <ThemeProvider theme={theme}>
    <Hero />
    <About location={location} />
    <Projects location={location} />
  </ThemeProvider>
);

export default App;
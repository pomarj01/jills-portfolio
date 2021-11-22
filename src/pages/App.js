import React from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils';
import { Header, Footer } from '../components/layout/index';
import Hero from './hero';
import About from './about';
import Projects from './projects';


const App = ({ location }) => (
  <ThemeProvider theme={theme}>
    <Header>
      <Hero />
      <About location={location} />
      <Projects location={location} />
    </Header>
    <Footer />
  </ThemeProvider>
);

export default App;
import React from 'react';
import { MantineProvider, createTheme, Paper, Badge, Text } from '@mantine/core';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const theme = createTheme({
  other: {
    bodyBg: '#FAFAFF',
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </MantineProvider>
  )
}
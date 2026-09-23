import React from 'react';
import { MantineProvider, createTheme, Paper, Badge, Text } from '@mantine/core';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import TechStacks from './TechStacks';
import Contact from './Contact';

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
      <section id="stacks">
        <TechStacks />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </MantineProvider>
  )
}
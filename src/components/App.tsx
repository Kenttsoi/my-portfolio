import React from 'react';
import { MantineProvider, createTheme, Paper, Badge, Text } from '@mantine/core';
import Navbar from './Navbar';
import Hero from './Hero';
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
      <Hero />
      <Skills />
    </MantineProvider>
  )
}
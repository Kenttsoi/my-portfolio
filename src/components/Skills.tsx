import React, { useRef } from 'react';
import { SimpleGrid, Container, Title, Text, ThemeIcon, Group, Paper } from '@mantine/core';
import classes from './Skills.module.css';

const skillsData = [
  { icon: '⚡', color: '#E6F7FF', iconColor: '#1890FF', title: 'End-to-End Development', highlight: '', description: 'Translating functional ideas into fully operational applications. Handling the entire development lifecycle—from design implementation and API integration to deployment and operational support.' },
  { icon: '🐍', color: '#FFF7E6', iconColor: '#FA8C16', title: 'Backend Logic & Database Design', highlight: '', description: 'Developing clean backend logic and RESTful APIs, while structuring clear relational database schemas (MySQL / PostgreSQL) to ensure accurate data processing and reliable system operations.' },
  { icon: '🗄️', color: '#FFF0F6', iconColor: '#EB2F96', title: 'Legacy Modernization & Maintenance', highlight: '', description: 'Refactoring a legacy codebase into modern architectures, improving code maintainability, and providing day-to-day operational support to ensure system reliability.' },
  { icon: '🐳', color: '#F0F5FF', iconColor: '#13C2C2', title: 'Project Coordination & Collaboration', highlight: '', description: 'Working closely with cross-functional teams and vendors to align project goals, gather requirements, and support day-to-day software delivery.' }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (currentIndex: number) => {
    if (!containerRef.current) return;
    const cards = Array.from(containerRef.current.children) as HTMLElement[];
    const currentCard = cards[currentIndex];
    if (!currentCard) return;

    const currentRect = currentCard.getBoundingClientRect();

    cards.forEach((card) => card.removeAttribute('data-neighbor'));

    cards.forEach((card, idx) => {
      if (idx === currentIndex) return;
      const rect = card.getBoundingClientRect();

      const isSameRow = Math.abs(rect.top - currentRect.top) < 20;
      const isSameCol = Math.abs(rect.left - currentRect.left) < 20;

      if (isSameRow && rect.left > currentRect.left && rect.left - currentRect.right < 40) {
        card.setAttribute('data-neighbor', 'left');
      }
      if (isSameRow && rect.left < currentRect.left && currentRect.left - rect.right < 40) {
        card.setAttribute('data-neighbor', 'right');
      }
      if (isSameCol && rect.top > currentRect.top && rect.top - currentRect.bottom < 40) {
        card.setAttribute('data-neighbor', 'top');
      }
      if (isSameCol && rect.top < currentRect.top && currentRect.top - rect.bottom < 40) {
        card.setAttribute('data-neighbor', 'bottom');
      }
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const cards = Array.from(containerRef.current.children) as HTMLElement[];
    cards.forEach((card) => card.removeAttribute('data-neighbor'));
  };

  return (
    <Container size="lg" py={80} id="skills">
      <Title order={2} fz={{ base: 28, md: 36 }} ta={"center"}>
        What I do
      </Title>

      <SimpleGrid
        ref={containerRef}
        cols={{ base: 1, sm: 2, md: 2 }}
        spacing="lg"
        onMouseLeave={handleMouseLeave}
      >
        {skillsData.map((skill, index) => (
          <Paper
            key={index}
            radius="lg"
            p="xl"
            className={classes.skillCard}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <Group mb="md" align="center">
              <ThemeIcon size={48} radius="md" style={{ backgroundColor: skill.color, color: skill.iconColor, fontSize: '1.4rem' }}>
                {skill.icon}
              </ThemeIcon>
              <Text fw={700} size="xl">
                {skill.title}
              </Text>
            </Group>

            <Text size="md" c="dimmed" lh={1.6}>
              <Text span fw={700} c="dark.7">
                {skill.highlight}
              </Text>
              {skill.description}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}
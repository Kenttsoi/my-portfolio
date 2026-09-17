import React, { useRef } from 'react';
import { SimpleGrid, Container, Title, Text, ThemeIcon, Group, Paper } from '@mantine/core';
import classes from './Skills.module.css';

const skillsData = [
  { icon: '⚡', color: '#E6F7FF', iconColor: '#1890FF', title: '', highlight: '', description: '' },
  { icon: '🐍', color: '#FFF7E6', iconColor: '#FA8C16', title: '', highlight: '', description: ' ' },
  { icon: '🗄️', color: '#FFF0F6', iconColor: '#EB2F96', title: '', highlight: '', description: '' },
  { icon: '🐳', color: '#F0F5FF', iconColor: '#2F54EB', title: '', highlight: '', description: '' },
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
      <Title order={2} ta="center" mb="xl">
        What I Do
      </Title>

      <SimpleGrid
        ref={containerRef}
        cols={{ base: 1, sm: 2, md: 3 }}
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
              <Text fw={700} size="xl" c="dark.8">
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
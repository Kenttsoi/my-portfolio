import { useState } from 'react';
import { Card, Image, Text, Badge, Group, Button, Box, Stack } from '@mantine/core';
import classes from './ProjectCard.module.css';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      shadow="sm"
      padding="0"
      radius="lg"
      className={classes.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered((prev) => !prev)}
    >
      <Image
        src={project.image}
        height={350}
        alt={project.title}
        fallbackSrc="https://placehold.co/600x400?text=Project+Preview"
      />

      <Box className={classes.defaultOverlay}>
        <Text fw={700} size="lg" c="white">
          {project.title}
        </Text>
        <Text size="xs" c="gray.3">
          {project.category}
        </Text>
      </Box>

      <Box className={`${classes.detailOverlay} ${hovered ? classes.active : ''}`}>
        <Stack justify="space-between" h="100%">
          <Stack gap="xs">
            {/* <Badge variant="filled" color="blue" size="sm" style={{ alignSelf: 'flex-start' }}>
              {project.category}
            </Badge> */}

            <Text fw={700} size="xl" c="white">
              {project.title}
            </Text>

            <Text size="md" c="gray.3" lineClamp={3}>
              {project.description}
            </Text>

            <Group gap={6} mt="xs">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" color="gray" size="lg" c="gray.2">
                  {tag}
                </Badge>
              ))}
            </Group>
          </Stack>

          <Group gap="sm" mt="md">
            {project.demoUrl && (
              <Button
                component="a"
                href={project.demoUrl}
                target="_blank"
                size="xs"
                radius="xl"
                variant="light"
                color="blue"
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                component="a"
                href={project.githubUrl}
                target="_blank"
                size="xs"
                radius="xl"
                variant="default"
              >
                GitHub
              </Button>
            )}
          </Group>
        </Stack>
      </Box>
    </Card>
  );
}
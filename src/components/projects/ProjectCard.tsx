import { useState } from 'react';
import { Card, Image, Text, Badge, Group, Button, Box, Stack, List } from '@mantine/core';
import classes from './ProjectCard.module.css';
import { IconBriefcase, IconBuildingSkyscraper, IconUser } from '@tabler/icons-react';

const PROJECT_TYPE_CONFIG: Record<string, React.ReactNode> = {
  Company: <IconBuildingSkyscraper size={13} />,
  Individual: <IconUser size={13} />,
  Commercial: <IconBriefcase size={13} />
};

export interface ProjectData {
  id: string;
  projectType: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
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
      padding="0"
      radius="lg"
      withBorder={false}
      style={{
        backgroundColor: 'light-dark(rgb(250, 250, 255), rgb(19, 21, 29))',
      }}
      className={classes.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered((prev) => !prev)}
    >
      <Badge
        variant="filled"
        radius="sm"
        size="xl"
        leftSection={PROJECT_TYPE_CONFIG[project.projectType]}
        style={{ textTransform: 'none', fontWeight: 600 }}
      >
        {project.projectType}{' Project'}
      </Badge>
      <Image
        src={project.image}
        height={500}
        alt={project.title}
        radius="sm"
        fallbackSrc="https://placehold.co/600x400?text=Project+Preview"
      />

      <Box className={classes.defaultOverlay}>
        <Text fw={700} size="xl" c="white">
          {project.title}
        </Text>
        <Text size="md" c="gray.3">
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

            <Text size="md" c="gray.3" lineClamp={5}>
              {project.description}
            </Text>

            {project.highlights && project.highlights.length > 0 && (
              <List
                size="md"
                c="gray.2"
                spacing={4}
                withPadding
                style={{ listStyleType: 'disc' }}
              >
                {project.highlights.slice(0, 4).map((item, index) => (
                  <List.Item key={index}>
                    <Text size="md" c="gray.3" lineClamp={2}>
                      {item}
                    </Text>
                  </List.Item>
                ))}
              </List>
            )}

            <Group gap={6} mt="xs">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" color="gray" size="lg" c="gray.2" style={{ textTransform: 'none' }}>
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
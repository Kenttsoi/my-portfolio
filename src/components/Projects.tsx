import { SimpleGrid, Container, Title, Text, Stack } from '@mantine/core';
import { ProjectCard, type ProjectData } from './projects/ProjectCard';

/* sample data*/
const projectsData: ProjectData[] = [
  {
    id: 'japanese-app',
    title: 'Japanese Learning App',
    category: 'Full Stack Web App',
    description: 'A comprehensive Japanese learning platform with Furigana parsing, dictionary component, and VOICEVOX TTS synthesis.',
    image: '',
    tags: ['React', 'TypeScript', 'Flask', 'Supabase', 'Docker'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/japanese-app',
  },
  {
    id: 'movie-catalog',
    title: 'Movie Catalog System',
    category: 'Web Application',
    description: 'Database-driven management platform for movies, actors, and publishers with complex relational queries.',
    image: '',
    tags: ['Node.js', 'Express', 'Knex.js', 'PostgreSQL', 'React'],
    githubUrl: 'https://github.com/example/movie-catalog',
  },
];

export default function Projects() {
  return (
    <Container size="lg" py={60} id="projects">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={2} fz={{ base: 28, md: 36 }}>
            All Projects
          </Title>
          <Text c="dimmed" size="lg">
            A selection of projects I've built, focusing on clean code and robust systems.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="lg">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
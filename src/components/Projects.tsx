import { SimpleGrid, Container, Title, Text, Stack } from '@mantine/core';
import { ProjectCard, type ProjectData } from './projects/ProjectCard';

/* sample data*/
const projectsData: ProjectData[] = [
  {
    id: 'japanese-app',
    title: 'Japanese Learning App',
    category: 'A specialized Japanese learning tool featuring character-level furigana parsing and comprehensive dictionary lookups.',
    description: 'A full-stack Web Application built to help learners master Japanese vocabulary and Kanji. Solved the common limitation of traditional tools by accurately generating character-level furigana alignment instead of word-level overlays.',
    highlights: [
      'Engineered an advanced Furigana generation algorithm by cross-referencing multiple Japanese NLP parser libraries with a Kanji database, enabling precise character-level phonetic alignment.',
      'Integrated a comprehensive multi-tier search system supporting dictionary lookups across Kana, Vocabulary, and individual Kanji characters.',
      'Built RESTful API services with Python Flask and containerized the backend environment using Docker for consistent local testing and deployment.',
      'Designed a responsive and intuitive user interface in React and TypeScript to handle dynamic text annotation and rich dictionary modals smoothly.'
    ],
    image: '',
    tags: ['React', 'TypeScript', 'Python', 'Flask', 'Supabase', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/japanese-app',
  },
  {
    id: 'movie-catalog',
    title: 'Movie Catalog System',
    category: 'Web Application',
    description: 'Database-driven management platform for movies, actors, and publishers with complex relational queries.',
    highlights: [],
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
          <Title order={2} fz={{ base: 28, md: 36 }} ta={"center"}>
            Projects involved
          </Title>
          <Text c="dimmed" size="lg">
            A selection of projects I've built:
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 1, md: 1 }} spacing="lg">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
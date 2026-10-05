import { SimpleGrid, Container, Title, Text, Stack } from '@mantine/core';
import { ProjectCard, type ProjectData } from './projects/ProjectCard';

/* sample data*/
const projectsData: ProjectData[] = [
  {
    id: 'japanese-app',
    projectType: 'Individual',
    title: 'Japanese Learning App',
    category: 'A specialized Japanese learning tool featuring algorithmic character-level phonetic alignment and comprehensive dictionary lookups.',
    description: 'A full-stack Web Application built to help learners master Japanese vocabulary and Kanji. Solved the common limitation of traditional tools by accurately generating character-level furigana alignment instead of word-level overlays.',
    highlights: [
      'Engineered an advanced Furigana generation algorithm by cross-referencing multiple Japanese NLP parser libraries with a Kanji database, enabling precise character-level phonetic alignment.',
      'Integrated a comprehensive multi-tier search system supporting dictionary lookups across Kana, Vocabulary, and individual Kanji characters.',
      'Built RESTful API services with Python Flask and containerized the backend environment using Docker for consistent local testing and deployment.',
      'Designed a responsive and intuitive user interface in React and TypeScript to handle dynamic text annotation and rich dictionary modals smoothly.'
    ],
    image: '/public/preview_project1.png',
    tags: ['React', 'TypeScript', 'Python', 'Flask', 'Supabase', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://jpstudy.kentt.dev/',
    githubUrl: 'https://github.com/Kenttsoi/japanese-text-handler',
  },
  {
    id: 'enterprise-cms-modernization',
    projectType: 'Company',
    title: 'Enterprise Content Management System Revamp and Modernization (Current Company)',
    category: 'Full-Stack Web Development / System Legacy Refactoring',
    description:
      'A comprehensive enterprise CMS revamp migrating legacy PowerBuilder desktop applications to a scalable web platform for course enrollment and academic score management.',
    highlights: [
      'Engineered core enrollment workflows and automated score calculation engines using PHP CodeIgniter and MySQL.',
      'Modernized legacy PowerBuilder logic into modular REST APIs and responsive React components (MUI), significantly reducing code duplication.',
      'Optimized database query performance and data fetch strategies for handling large-volume student record processing.',
      'Containerized local development environments with Docker to streamline team deployment and environment consistency.',
    ],
    image: 'public/preview.jpeg',
    tags: ['React', 'JavaScript', 'MUI', 'PHP', 'CodeIgniter', 'MySQL', 'Docker'],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: 'healthcare-appointment-system',
    projectType: 'Commercial',
    title: 'Healthcare Network Appointment & Booking Portal',
    category: 'Frontend Development / Client Collaboration',
    description:
      'A client-facing medical portal developed for a healthcare group, empowering patients to seamlessly search for network doctors and book clinical appointments.',
    highlights: [
      'Engineered the patient appointment workflow and doctor selection module using React, TypeScript, and Mantine UI.',
      'Implemented centralized state management with Redux to persist authenticated staff credentials and real-time doctor selection states.',
      'Collaborated within an Agile team environment, managing Git feature branching workflows and resolving cross-developer merge conflicts.',
      'Adapted to rapid client feedback by rapidly triaging, debugging, and resolving edge-case issues under tight deliverable deadlines.',
    ],
    image: 'public/preview.jpeg',
    tags: ['React', 'TypeScript', 'Redux', 'Mantine', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Next.js'],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: 'english-vocabulary-vault',
    projectType: 'Individual',
    title: 'English Vocabulary & Lexical Vault',
    category: 'AI-Assisted Vibe Coding',
    description:
      'A high-performance personal vocabulary vault built through AI-assisted Vibe Coding, designed to organize, search, and analyze complex English word families and contextual usage.',
    highlights: [
      'Leveraged modern LLM AI workflow (Vibe Coding) to rapidly architect and ship a full-stack vocabulary tool in record time.',
      'Engineered a developer-tool style UI with virtualized table scrolling (Mantine React Table) to ensure high-performance rendering of large datasets.',
      'Integrated Supabase (PostgreSQL) for real-time cloud data synchronization and relational lexical schema management.',
      'Designed multi-attribute filtering and dynamic search engines to query vocabulary across word families and grammar classifications.',
    ],
    image: '/public/preview_project4.png',
    tags: ['Vibe Coding', 'React', 'TypeScript', 'Mantine', 'Supabase'],
    demoUrl: 'https://eng-vocab-note.vercel.app/',
    githubUrl: 'https://github.com/Kenttsoi/eng-vocab-notebook',
  }
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
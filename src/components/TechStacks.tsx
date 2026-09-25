import { useState } from 'react';
import { Container, Title, Text, SimpleGrid, Stack, Group, Box, UnstyledButton, useComputedColorScheme } from '@mantine/core';
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandPython,
  IconDatabase,
  IconBrandPhp,
  IconBrandReact,
  IconBrandRedux,
  IconServer,
  IconBrandNodejs,
  IconFlame,
  IconBrandMantine,
  IconComponents,
  IconBolt,
  IconBrandGit,
  IconBrandDocker
} from '@tabler/icons-react';
import classes from './TechStacks.module.css';
import { AnimatePresence, motion } from 'framer-motion';

type Category = 'All' | 'Programming Languages' | 'Frameworks & Libraries' | 'Tools' | 'Databases';

interface StackItem {
  name: string;
  icon: React.ElementType;
  color: string | { light: string; dark: string };
  category: Category;
}

const filterCategories: Category[] = [
  'All',
  'Programming Languages',
  'Frameworks & Libraries',
  'Databases',
  'Tools',
];

const allStackItems: StackItem[] = [
  // Programming Languages
  { name: 'JavaScript', icon: IconBrandJavascript, color: '#F7DF1E', category: 'Programming Languages' },
  { name: 'TypeScript', icon: IconBrandTypescript, color: '#3178C6', category: 'Programming Languages' },
  { name: 'HTML5 / CSS3', icon: IconBrandHtml5, color: '#E34F26', category: 'Programming Languages' },
  { name: 'Python', icon: IconBrandPython, color: '#3776AB', category: 'Programming Languages' },
  { name: 'SQL', icon: IconDatabase, color: '#4479A1', category: 'Programming Languages' },
  { name: 'PHP', icon: IconBrandPhp, color: '#777BB4', category: 'Programming Languages' },

  // Frameworks
  { name: 'React', icon: IconBrandReact, color: '#61DAFB', category: 'Frameworks & Libraries' },
  { name: 'Redux', icon: IconBrandRedux, color: '#764ABC', category: 'Frameworks & Libraries' },
  { name: 'Flask', icon: IconServer, color: { light: '#000000', dark: '#FFFFFF' }, category: 'Frameworks & Libraries' },
  { name: 'Express', icon: IconBrandNodejs, color: '#339933', category: 'Frameworks & Libraries' },
  { name: 'Node.js', icon: IconBrandNodejs, color: '#5FA04E', category: 'Frameworks & Libraries' },
  { name: 'CodeIgniter', icon: IconFlame, color: '#EF4223', category: 'Frameworks & Libraries' },
  { name: 'Mantine UI', icon: IconBrandMantine, color: '#339AF0', category: 'Frameworks & Libraries' },
  { name: 'Material-UI', icon: IconComponents, color: '#007FFF', category: 'Frameworks & Libraries' },

  // Databases
  { name: 'MySQL', icon: IconDatabase, color: '#4479A1', category: 'Databases' },
  { name: 'PostgreSQL', icon: IconDatabase, color: '#336791', category: 'Databases' },
  { name: 'Supabase', icon: IconBolt, color: '#3ECF8E', category: 'Databases' },
  { name: 'SQLite', icon: IconDatabase, color: '#003B57', category: 'Databases' },

  // Others
  { name: 'Git', icon: IconBrandGit, color: '#F05032', category: 'Tools' },
  { name: 'Docker', icon: IconBrandDocker, color: '#2496ED', category: 'Tools' },
];

export default function TechStacks() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const computedColorScheme = useComputedColorScheme('light');
  const isDark = computedColorScheme === 'dark';

  const filteredItems = activeCategory === 'All'
    ? allStackItems
    : allStackItems.filter((item) => item.category === activeCategory);

  return (
    <Container size="lg" py={80} id="skills">
      <Stack gap={48}>
        <Stack gap="xs" ta="center">
          <Text fw={700} c="blue" size="sm" tt="uppercase" lts={1.5}>
            Tech Stack
          </Text>
          <Title order={2} fz={{ base: 32, md: 42 }}>
            Technologies & Tools
          </Title>
        </Stack>

        <Group justify="center" gap="sm">
          {filterCategories.map((cat) => (
            <UnstyledButton
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={classes.badgeBtn}
              data-active={activeCategory === cat || undefined}
            >
              {cat}
            </UnstyledButton>
          ))}
        </Group>
        <Box className={classes.gridWrapper}>
          <SimpleGrid
            cols={{ base: 3, sm: 4, md: 5 }}
            spacing={{ base: 'lg', md: 'xl' }}
            verticalSpacing={{ base: 'xl', md: 'xxl' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <Box className={classes.stackItem}>
                      <Stack align="center" gap="md">
                        <IconComponent
                          size={32}
                          style={{ color: typeof item.color === 'object' ? (isDark ? item.color.dark : item.color.light) : item.color }}
                          stroke={1.5}
                          className={classes.icon}
                        />
                        <Text fw={600} fz={{ base: 'sm', sm: 'md' }} ta="center">
                          {item.name}
                        </Text>
                      </Stack>
                    </Box>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}
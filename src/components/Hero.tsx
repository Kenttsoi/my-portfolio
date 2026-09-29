import React from 'react';
import { Container, Title, Text, Button, Group, Stack, Badge, Grid, Box } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';

function Hero() {
  return (
    <Container size="lg" py={{ base: 40, md: 80 }} >
      <Grid align="center" gutter={{ base: 'xl', md: 50 }}>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="xl" align="center">
            <Badge variant="light" color="blue" size="lg" radius="xl">
              Open to Opportunities
            </Badge>

            <Title
              order={1}
              fz={{ base: 36, sm: 48, md: 56 }}
              fw={900}
              lh={1.15}
              align="center"
            >
              Hello, I'm{' '}
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                inherit
                style={{ whiteSpace: 'nowrap' }}
              >
                Kent Tsoi
              </Text>
            </Title>

            <Text fz={{ base: 'lg', md: 'xl' }} fw={700} c="dimmed">
              Full Stack Developer
            </Text>
            <Group gap="md" py="md" justify="center">
              <Button
                size="md"
                radius="xl"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
                component="a"
                href="#projects"
              >
                View Projects
              </Button>

              <Button
                size="md"
                radius="xl"
                variant="default"
                component="a"
                href="#contact"
              >
                Get in Touch
              </Button>
            </Group>
          </Stack>

        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="lg" align="flex-start">
            <Box style={{ position: 'relative', pt: 12, pl: 8 }}>
              <IconQuote
                size={48}
                style={{
                  position: 'absolute',
                  top: -18,
                  left: -18,
                  opacity: 0.15,
                  color: 'var(--mantine-color-blue-6)',
                  transform: 'rotate(180deg)'
                }}
              />

              <Text size="lg" p={'sm'} c="gray.6" lh={1.6} ta="justify" style={{ position: 'relative', zIndex: 1 }}>
                Full Stack Developer with 4 years of practical experience, specializing in end-to-end application development, product implementation, backend logic, and database management. Hands-on experience in cross-functional team collaboration, user requirement gathering, and building practical software products.
              </Text>
            </Box>


          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Hero
import { Container, Title, Text, Stack, Group, Box, Anchor, UnstyledButton } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import classes from './Contact.module.css';

const contactData = {
  email: '',
  navLinks: [
    { label: 'About', href: '#about' },
  ],
};

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container size="lg" py={80} id="contact">
      <Box className={classes.cardContainer}>
        <Stack gap={48} align="center">

          <Stack gap="xl" align="center" ta="center" pt={{ base: 20, md: 40 }}>
            <Stack gap="xs" align="center">
              {/* <Text fw={700} c="dimmed" size="xs" tt="uppercase" lts={2}>
                CONTACT ME
              </Text> */}
              <Title order={2} className={classes.title}>
                Contact Me
              </Title>
            </Stack>

            <Anchor
              href={`mailto:${contactData.email}`}
              underline="never"
              className={classes.emailLink}
            >
              <Group gap="xs" align="center">
                <Box className={classes.mailIconWrapper}>
                  <IconMail size={24} stroke={1.8} />
                </Box>
                <Text fw={700} fz={{ base: 'lg', sm: 'xl' }} className={classes.emailText}>
                  {contactData.email}
                </Text>
              </Group>
            </Anchor>
          </Stack>

          <Box className={classes.footerWrapper}>
            <UnstyledButton onClick={scrollToTop} className={classes.logoBtn} aria-label="Home">
              <Box className={classes.logoBadge}>
                <Box className={classes.logoInnerIcon} />
              </Box>
            </UnstyledButton>

            <Group gap={'md'} justify="center" className={classes.navGroup}>
              {contactData.navLinks.map((link) => (
                <Anchor
                  key={link.label}
                  href={link.href}
                  className={classes.navLink}
                  underline="never"
                >
                  {link.label}
                </Anchor>
              ))}
            </Group>
          </Box>

        </Stack>
      </Box>
    </Container>
  );
}
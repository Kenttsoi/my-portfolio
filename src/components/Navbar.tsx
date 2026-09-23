import { useState, useEffect } from 'react';
import { Box, Burger, Text, FloatingIndicator, Group, Paper, Stack, UnstyledButton, Portal, Transition, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './Navbar.module.css';

const navItems = [
  { label: 'About', id: 'hero' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Stacks', id: 'stacks' },
];

const popoverItems = [
  { label: 'Contact', id: 'contact' },
];


export default function Navbar() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState<string>('hero');
  const [opened, setOpened] = useState<boolean>(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const handleScroll = (id: string) => {
    setActive(id);
    setOpened(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setControlRef = (id: string) => (node: HTMLButtonElement | null) => {
    if (node && controlsRefs[id] !== node) {
      setControlsRefs((prev) => ({ ...prev, [id]: node }));
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Paper
        component="header"
        shadow="sm"
        radius="xl"
        withBorder={false}
        w="fit-content"
        p="sm"
        mx="auto" // Margin Left & Right
        mt="lg"
        style={{
          position: 'sticky',
          top: '16px',
          zIndex: 101,
          backdropFilter: 'blur(8px) saturate(180%)',
          WebkitBackdropFilter: 'blur(8px) saturate(180%)',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',

        }}
      >
        <Group justify="center" px="sm" gap="xs" wrap="nowrap">
          <div className={classes.root} ref={setRootRef}>
            {navItems.map((item) => (
              <UnstyledButton
                key={item.id}
                className={classes.control}
                ref={setControlRef(item.id)}
                onClick={() => handleScroll(item.id)}
                data-active={active === item.id || undefined}
              >
                <span className={classes.controlLabel}>{item.label}</span>
              </UnstyledButton>
            ))}

            <FloatingIndicator
              target={controlsRefs[active]}
              parent={rootRef}
              className={classes.indicator}
            />
          </div>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="xs"
            aria-label="Toggle navigation"
          />


        </Group>
      </Paper>
      <Portal>
        <Transition transition="slide-down" duration={200} mounted={opened}>
          {(transitionStyles) => (
            <div
              className={classes.viewportCenteredPopover}
              style={transitionStyles}
            >
              <Stack gap={4}>
                {popoverItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <UnstyledButton
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className={`${classes.menuItem} ${isActive ? classes.menuItemActive : ''}`}
                    >
                      <Group gap="sm">
                        <Text fw={500} size="sm">
                          {item.label}
                        </Text>
                      </Group>
                    </UnstyledButton>
                  );
                })}
              </Stack>

              <Box className={classes.menuFooter} mt="sm" pt={6}>
                <UnstyledButton
                  onClick={() => toggleColorScheme()}
                  className={classes.themeToggleBtn}
                >
                  <Group justify="center" gap="xs">
                    {isDark ? (
                      <IconSun size={18} style={{ color: '#FCC419' }} />
                    ) : (
                      <IconMoon size={18} style={{ color: '#4C6EF5' }} />
                    )}
                    {/* <Text size="xs" fw={500}>
                      {isDark ? 'Light Mode' : 'Dark Mode'}
                    </Text> */}
                  </Group>
                </UnstyledButton>
              </Box>
            </div>
          )}
        </Transition>
      </Portal>
    </>
  )
}
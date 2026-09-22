import React, { useState } from 'react';
import { FloatingIndicator, Group, Paper, UnstyledButton } from '@mantine/core';
import classes from './Navbar.module.css';

const navItems = [
  { label: 'About', id: 'hero' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('hero');

  const handleScroll = (id: string) => {
    setActive(id);
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

  return (
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
        zIndex: 100,
        backdropFilter: 'blur(8px) saturate(180%)',
        WebkitBackdropFilter: 'blur(8px) saturate(180%)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',

      }}
    >
      <Group justify="center" px="md">
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
      </Group>
    </Paper>
  )
}
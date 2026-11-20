'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['#about', 'About'], ['#expertise', 'Expertise'], ['#projects', 'Work'],
  ['#education', 'Education'], ['#content', 'Content'],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 761px)');
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', escape);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', escape);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);

  return (
    <header className="site-header portfolio-header" ref={header}>
      <nav className="nav shell" aria-label="Main navigation" onBlur={event => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
        <a className="wordmark" href="#home" aria-label="Dixon Araya home" onClick={() => setOpen(false)}>
          da<span>.</span><span className="wordmark-label">ENGINEERING</span>
        </a>
        <button ref={toggle} type="button" className="navigation-toggle" aria-expanded={open}
          aria-controls="navigation-links" onClick={() => setOpen(value => !value)}>
          {open ? 'Close' : 'Menu'}{open ? <X size={20} aria-hidden="true"/> : <Menu size={20} aria-hidden="true"/>}
        </button>
        <div id="navigation-links" className="navigation-panel" data-open={open}>
          <div className="nav-links">
            {links.map(([href, label]) => <a key={href} href={href} onClick={() => {
              setOpen(false);
              const section = document.querySelector<HTMLElement>(href);
              if (section) { section.tabIndex = -1; section.focus({ preventScroll: true }); }
            }}>{label}</a>)}
          </div>
          <a className="nav-contact" href="#contact" onClick={() => {
            setOpen(false);
            const section = document.getElementById('contact');
            if (section) { section.tabIndex = -1; section.focus({ preventScroll: true }); }
          }}>Let’s connect <ArrowUpRight size={15}/></a>
        </div>
      </nav>
    </header>
  );
}

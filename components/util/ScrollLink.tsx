'use client';
import React from 'react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const ScrollLink = ({ children, href }: Readonly<{ children: React.ReactNode; href: string }>) => {
  return (
    <a onClick={() => scrollTo(href)}>
      {children}
    </a>
  )
}

export default ScrollLink
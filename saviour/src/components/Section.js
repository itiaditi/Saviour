import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Section = ({ children }) => {
  const { containerRef, isVisible } = useIntersectionObserver({
    threshold: 0.1, // Adjust this threshold according to your needs
  });

  return (
    <div
      ref={containerRef}
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default Section;

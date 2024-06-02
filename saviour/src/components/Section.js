import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Section = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const { containerRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    onIntersect: ([{ isIntersecting, boundingClientRect }]) => {
      if (isIntersecting) {
        const { y } = boundingClientRect;
        setScrollDirection(y > 0 ? 'up' : 'down');
      }
    },
  });

  return (
    <div
      ref={containerRef}
      className={`transition-transform duration-500 ${
        isVisible ? 'scale-100 ease-in-out' : 'scale-75 ease-in-out'
      } ${scrollDirection === 'up' ? 'translate-y-0' : 'translate-y-0'}`}
      style={{
        transformOrigin: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default Section;

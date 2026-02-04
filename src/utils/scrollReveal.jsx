import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-reveal animations
 * Uses IntersectionObserver for performance
 * Respects prefers-reduced-motion
 */
export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};

/**
 * Scroll reveal component wrapper
 * Usage: <ScrollReveal><YourContent /></ScrollReveal>
 */
export const ScrollReveal = ({ children, delay = 0, ...options }) => {
  const ref = useScrollReveal(options);

  return (
    <div
      ref={ref}
      className="scroll-reveal"
      style={{
        '--reveal-delay': `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

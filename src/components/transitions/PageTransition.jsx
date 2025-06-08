"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionContext = createContext();

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};

// Transition variants for different effects
const transitionVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  },
  slideRight: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  },
  crossDissolve: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(10px)' }
  }
};

// Easing functions
const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  snappy: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.6, 0.32, 1.6]
};

export const PageTransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState('fade');
  const [duration, setDuration] = useState(0.4);
  const [easing, setEasing] = useState('smooth');
  const pathname = usePathname();

  // Detect user's motion preferences
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const startTransition = (type = 'fade', customDuration = 0.4, customEasing = 'smooth') => {
    setIsTransitioning(true);
    setTransitionType(type);
    setDuration(customDuration);
    setEasing(customEasing);
  };

  const endTransition = () => {
    setIsTransitioning(false);
  };

  const getTransitionConfig = () => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2, ease: 'linear' }
      };
    }

    const variant = transitionVariants[transitionType] || transitionVariants.fade;
    return {
      ...variant,
      transition: {
        duration,
        ease: easings[easing] || easings.smooth,
        staggerChildren: 0.1
      }
    };
  };

  return (
    <TransitionContext.Provider value={{
      isTransitioning,
      startTransition,
      endTransition,
      transitionType,
      duration,
      easing,
      prefersReducedMotion
    }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const PageTransition = ({ children, className = "" }) => {
  const pathname = usePathname();
  const { prefersReducedMotion } = usePageTransition();
  
  const config = prefersReducedMotion 
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 }
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { 
          duration: 0.4, 
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1
        }
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        {...config}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
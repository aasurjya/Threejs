"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { usePageTransition } from './PageTransition';

const SectionTransition = ({ 
  children, 
  className = "",
  variant = "slideUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  stagger = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, triggerOnce });
  const controls = useAnimation();
  const { prefersReducedMotion } = usePageTransition();

  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [isInView, controls, triggerOnce]);

  const getTransitionConfig = () => {
    if (prefersReducedMotion) {
      return {
        duration: 0.2,
        ease: "linear"
      };
    }

    const baseConfig = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    };

    if (stagger) {
      return {
        ...baseConfig,
        staggerChildren: 0.1,
        delayChildren: delay
      };
    }

    return baseConfig;
  };

  const selectedVariant = prefersReducedMotion 
    ? variants.fade 
    : variants[variant] || variants.slideUp;

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: getTransitionConfig()
          }
        }}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={selectedVariant}
            transition={getTransitionConfig()}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      transition={getTransitionConfig()}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
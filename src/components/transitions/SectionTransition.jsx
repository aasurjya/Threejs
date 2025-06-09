"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SectionTransition = ({ 
  children, 
  className = "",
  variant = "slideUp",
  delay = 0
}) => {
  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedVariant = variants[variant] || variants.slideUp;

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={selectedVariant}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from './PageTransition';

const LoadingTransition = ({ isLoading, children, loadingComponent }) => {
  const { prefersReducedMotion } = usePageTransition();

  const variants = {
    loading: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    loaded: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.2 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const DefaultLoader = () => (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-accent/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-foreground text-sm">Loading...</p>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            variants={prefersReducedMotion ? {} : variants}
            initial="loading"
            exit="loaded"
          >
            {loadingComponent || <DefaultLoader />}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingTransition;
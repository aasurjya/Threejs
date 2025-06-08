"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { usePageTransition } from './PageTransition';

const NavigationTransition = ({ href, children, className = "", transitionType = "fade", ...props }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startTransition, prefersReducedMotion } = usePageTransition();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    
    // Don't transition if already on the same page
    if (href === pathname) return;

    setIsNavigating(true);
    
    // Start page transition
    if (!prefersReducedMotion) {
      startTransition(transitionType, 0.4, 'smooth');
    }

    // Small delay to allow transition to start
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Navigate to new page
    router.push(href);
    
    // Reset navigation state
    setTimeout(() => {
      setIsNavigating(false);
    }, 400);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={className}
      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <AnimatePresence mode="wait">
        {isNavigating ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center"
          >
            <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default NavigationTransition;
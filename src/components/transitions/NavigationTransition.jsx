"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavigationTransition = ({ href, children, className = "", ...props }) => {
  return (
    <Link href={href} className={className} {...props}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default NavigationTransition;
"use client";

import React from "react";
import { motion } from "framer-motion";

const SlideUpReveal = ({ text, className }) => {
  const sentences = text.split(/\n/);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1.5,
      },
    },
  };

  const sentenceVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {sentences.map((sentence, index) => (
        <div key={index} style={{ overflow: "hidden" }}>
          <motion.div variants={sentenceVariants} className="inline-block">
            {sentence}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default SlideUpReveal;

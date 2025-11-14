"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="w-full h-auto"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative h-full custom-bg rounded-2xl p-6 md:p-8 flex flex-col gap-4 backdrop-blur-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
      >
        {/* Soft Reflection Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(37, 99, 235, 0.10) 0%, transparent 55%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Static Glaze Overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.12 : 0.08,
            background: `radial-gradient(120% 140% at 25% 15%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.1) 35%, rgba(255, 255, 255, 0.08) 60%, transparent 100%),
                        radial-gradient(90% 120% at 80% 10%, rgba(233, 255, 255, 0.08) 0%, rgba(233, 255, 255, 0.05) 45%, transparent 80%),
                        radial-gradient(110% 150% at 55% 85%, rgba(245, 255, 255, 0.1) 0%, transparent 75%)`,
            mixBlendMode: "screen",
          }}
        />
        {/* Header */}
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex-1">
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/30">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${
              project.status === 'Live' ? 'bg-green-500' : 'bg-muted'
            } animate-pulse`} />
            <span className="text-xs text-muted">{project.status}</span>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="relative z-10 text-sm md:text-base text-muted leading-relaxed line-clamp-3" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <div className="relative z-10 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-xs bg-background/60 text-foreground rounded-lg border border-accent/10 hover:border-accent/30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="relative z-10 flex items-center gap-4 text-xs text-muted mt-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center gap-1">
            <Code2 className="w-3 h-3" />
            <span>{project.role}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex gap-3 mt-auto pt-4 border-t border-accent/10">
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
          {project.sourceLink && (
            <motion.a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 custom-bg text-foreground font-semibold rounded-lg hover:text-accent transition-colors text-sm border border-accent/20 hover:border-accent/40"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const HorizontalScroll = ({ projects }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-16 md:py-24 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Full-Stack <span className="text-accent">Projects</span>
        </h1>
        <p className="text-muted text-base md:text-lg">
          Explore my latest web applications and development work
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-2 text-sm text-muted mb-8"
      >
        <span>Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xl"
        >
          ↓
        </motion.span>
      </motion.div>

      {/* Vertical Scroll Container */}
      <div className="w-full max-w-4xl flex flex-col gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Project Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted">
          <span className="text-accent font-semibold">{projects.length}</span> projects showcased
        </p>
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;

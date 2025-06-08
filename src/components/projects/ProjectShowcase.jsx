"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ExternalLink, Github, Calendar, User, Target, TrendingUp } from 'lucide-react';

const ProjectShowcase = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const navigateToSlide = (newIndex) => {
    if (isScrolling || newIndex < 0 || newIndex >= projects.length) return;
    
    setIsScrolling(true);
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  const handleWheel = (e) => {
    if (isScrolling) return;
    
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = currentIndex + direction;
    navigateToSlide(newIndex);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (isScrolling) return;
    
    const touchDiff = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(touchDiff) > minSwipeDistance) {
      const direction = touchDiff > 0 ? 1 : -1;
      const newIndex = currentIndex + direction;
      navigateToSlide(newIndex);
    }
  };

  const handleKeyDown = (e) => {
    if (isScrolling) return;
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      navigateToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      navigateToSlide(currentIndex + 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isScrolling]);

  const currentProject = projects[currentIndex];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background"
      tabIndex={0}
    >
      {/* Navigation Indicators */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent scale-125' 
                : 'bg-muted/50 hover:bg-muted'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
        <button
          onClick={() => navigateToSlide(currentIndex - 1)}
          disabled={currentIndex === 0 || isScrolling}
          className="p-2 rounded-full custom-bg text-foreground hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          aria-label="Previous project"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigateToSlide(currentIndex + 1)}
          disabled={currentIndex === projects.length - 1 || isScrolling}
          className="p-2 rounded-full custom-bg text-foreground hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          aria-label="Next project"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Project Counter */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 custom-bg px-4 py-2 rounded-full">
        <span className="text-accent font-semibold">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="text-muted mx-2">/</span>
        <span className="text-foreground">
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      {/* Project Slides */}
      <AnimatePresence mode="wait" custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Project Image */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="relative order-2 lg:order-1"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden custom-bg p-4">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full border border-accent/30">
                      {currentProject.status}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6 order-1 lg:order-2"
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">
                    {currentProject.category}
                  </span>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                    {currentProject.title}
                  </h1>
                </motion.div>

                <motion.p 
                  variants={itemVariants}
                  className="text-muted text-lg leading-relaxed"
                >
                  {currentProject.description}
                </motion.p>

                {/* Technologies */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <h3 className="text-foreground font-semibold">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-background/50 text-foreground text-sm rounded-full border border-accent/20 hover:border-accent/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Details Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Timeline</span>
                    </div>
                    <p className="text-foreground font-medium">{currentProject.timeline}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Role</span>
                    </div>
                    <p className="text-foreground font-medium">{currentProject.role}</p>
                  </div>
                </motion.div>

                {/* Key Achievements */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <div className="flex items-center space-x-2 text-muted">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">Key Achievements</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentProject.achievements.slice(0, 4).map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-foreground text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                  {currentProject.demoLink && (
                    <a
                      href={currentProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {currentProject.sourceLink && (
                    <a
                      href={currentProject.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 custom-bg text-foreground font-semibold rounded-lg hover:text-accent transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-center"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-muted text-sm">Scroll or swipe to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted/50 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
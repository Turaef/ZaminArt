import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  id, 
  className = "", 
  delay = 0, 
  once = true 
}) => {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection; 
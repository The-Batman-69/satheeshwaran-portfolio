import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Copyright © {currentYear}</span>
            <span className="text-purple-400">Satheeshwaran Durairaj</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground"
          >
            <span>Designed & Developed with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-blue-400" />
            <span>by Satheeshwaran</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Mail, Download, ChevronDown } from 'lucide-react';
import { ProfilePicture } from './ProfilePicture';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Building Intelligent Systems that Merge AI, Automation & Real-World Impact';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    // Create a sample resume download
    const resumeContent = `
SATHEESHWARAN DURAIRAJ
AI & IoT Engineer | Full Stack Developer | UI/UX Trainer

CONTACT:
📱 +91 9952637103
📧 satheeshwaran.d007@gmail.com
📍 Tamil Nadu, India

EXPERIENCE:
Software Consultant – LIVEWIRE
- AI Masterclasses & IoT Workshops
- Cybersecurity Sessions
- Academic & Industrial Projects
- Intern Mentoring

SKILLS:
AI/ML: TensorFlow, Anomaly Detection, Face Recognition
Backend: Node.js, Express, Flask, MongoDB, MySQL
Frontend: React, TypeScript, Tailwind CSS
IoT: Arduino, ESP32, Sensor Integration
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Satheeshwaran_Durairaj_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <ProfilePicture />
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Satheeshwaran
            <br />
            Durairaj
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI & IoT Engineer | Full Stack Developer | UI/UX Trainer
          </motion.div>
          
          <motion.div
            className="text-lg md:text-xl text-muted-foreground mb-8 h-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "{text}"
            <span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg animate-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'mailto:satheeshwaran.d007@gmail.com'}
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
          
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

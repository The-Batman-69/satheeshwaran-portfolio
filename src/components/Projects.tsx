import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "AI-Based Intrusion Detection System",
      description: "Advanced OOD (Out-of-Distribution) model for detecting network intrusions with real-time monitoring and alert system.",
      techStack: ["TensorFlow", "Python", "Network Security", "OOD Models"],
      github: "https://github.com/satheeshwaran/intrusion-detection",
      demo: "https://intrusion-detection-demo.com"
    },
    {
      title: "Smart Electricity Monitoring & Billing System",
      description: "AI-integrated system for real-time electricity consumption monitoring with automated billing and predictive analytics.",
      techStack: ["IoT", "Machine Learning", "ESP32", "Web Dashboard"],
      github: "https://github.com/satheeshwaran/smart-energy",
      demo: "https://smart-energy-demo.com"
    },
    {
      title: "IoT-Based Fire Fighting Robot",
      description: "Autonomous robot equipped with sensors and AI for fire detection and suppression in industrial environments.",
      techStack: ["Arduino", "Computer Vision", "Sensor Fusion", "Robotics"],
      github: "https://github.com/satheeshwaran/fire-robot",
      demo: "https://fire-robot-demo.com"
    },
    {
      title: "Face Recognition Attendance System",
      description: "Real-time face recognition system for automated attendance tracking with high accuracy and speed.",
      techStack: ["OpenCV", "Deep Learning", "Flask", "React"],
      github: "https://github.com/satheeshwaran/face-attendance",
      demo: "https://face-attendance-demo.com"
    },
    {
      title: "FDP Management System",
      description: "Full-stack MERN application for managing Faculty Development Programs with comprehensive tracking and reporting.",
      techStack: ["MERN", "MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/satheeshwaran/fdp-system",
      demo: "https://fdp-system-demo.com"
    },
    {
      title: "Blockchain Demo System",
      description: "Educational blockchain implementation demonstrating distributed ledger technology with smart contracts.",
      techStack: ["Blockchain", "Solidity", "Web3.js", "Ethereum"],
      github: "https://github.com/satheeshwaran/blockchain-demo",
      demo: "https://blockchain-demo.com"
    },
    {
      title: "AI Vertical Farming System",
      description: "Intelligent vertical farming solution using AI for optimal plant growth monitoring and automated resource management.",
      techStack: ["Computer Vision", "IoT Sensors", "Machine Learning", "Automation"],
      github: "https://github.com/satheeshwaran/vertical-farming",
      demo: "https://vertical-farming-demo.com"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning AI, IoT, and full-stack development that demonstrate real-world impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://github.com/satheeshwaran', '_blank')}
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8"
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

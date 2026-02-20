import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Brain, Cpu, Users, Lightbulb } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Focused Development",
      description: "Expertise in machine learning, anomaly detection, and intelligent systems development with TensorFlow and advanced AI frameworks."
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems",
      description: "Hands-on experience with Arduino, ESP32, sensor integration, and smart automation systems for real-world applications."
    },
    {
      icon: Users,
      title: "Training & Mentorship",
      description: "Conducted masterclasses and workshops in AI, cybersecurity, full stack development, blockchain, and IoT technologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Leadership",
      description: "Strong communication skills combined with technical expertise to lead projects and mentor the next generation of developers."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-focused developer with experience in IoT systems, Smart Automation, Intrusion Detection, 
            Smart Energy Monitoring, and Full Stack Applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <Card className="glass border-purple-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As an AI & IoT Engineer, I specialize in creating intelligent systems that bridge the gap 
                between digital innovation and real-world applications. My work spans from developing sophisticated 
                machine learning models to implementing IoT solutions that transform everyday challenges into 
                smart, automated experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-blue-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Teaching Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about sharing knowledge and empowering others. Through comprehensive masterclasses 
                and hands-on workshops, I've trained numerous students and professionals in cutting-edge technologies, 
                from AI fundamentals to advanced IoT implementations.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

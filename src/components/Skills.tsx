import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Brain, Server, Monitor, Cpu } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI / ML",
      color: "from-purple-600 to-pink-600",
      skills: [
        "TensorFlow",
        "Anomaly Detection",
        "Intrusion Detection Systems",
        "Face Recognition",
        "Data Analytics"
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-blue-600 to-cyan-600",
      skills: [
        "Node.js",
        "Express.js",
        "Flask",
        "MongoDB",
        "MySQL",
        "Supabase"
      ]
    },
    {
      icon: Monitor,
      title: "Frontend",
      color: "from-green-600 to-emerald-600",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Power BI"
      ]
    },
    {
      icon: Cpu,
      title: "IoT / Hardware",
      color: "from-orange-600 to-red-600",
      skills: [
        "Arduino",
        "ESP32",
        "Sensor Integration",
        "Relay Logic",
        "Smart Automation Systems"
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML, full-stack development, and IoT technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass border-purple-500/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly expanding my skill set to stay at the forefront of technology. 
                From exploring new AI frameworks to mastering emerging IoT protocols, 
                I believe in lifelong learning to deliver innovative solutions that make a real impact.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

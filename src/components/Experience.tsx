import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Briefcase, Users, Award, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Software Consultant",
      company: "LIVEWIRE",
      period: "2022 - Present",
      description: "Leading AI and IoT initiatives while developing cutting-edge solutions for academic and industrial clients."
    },
    {
      icon: Users,
      title: "AI Masterclasses & Workshops",
      company: "Training Programs",
      period: "2022 - Present",
      description: "Conducted comprehensive training sessions in AI, machine learning, and emerging technologies for students and professionals."
    },
    {
      icon: Award,
      title: "Project Development",
      company: "Academic & Industrial",
      period: "2022 - Present",
      description: "Developed and deployed numerous AI and IoT projects solving real-world challenges across various domains."
    },
    {
      icon: Users,
      title: "Mentorship",
      company: "Intern Training",
      period: "2022 - Present",
      description: "Mentored and guided interns in AI development, full-stack applications, and IoT implementations."
    }
  ];

  const achievements = [
    "Trained 500+ students in AI and IoT technologies",
    "Developed 20+ production-ready AI/ML projects",
    "Conducted 50+ workshops and masterclasses",
    "Mentored 30+ interns in full-stack development",
    "Published research in anomaly detection systems",
    "Built smart automation solutions for industrial clients"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Extensive experience in AI development, IoT solutions, and technical education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <experience.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-purple-400">{experience.title}</CardTitle>
                        <p className="text-blue-400 font-medium">{experience.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
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
        >
          <Card className="glass border-purple-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

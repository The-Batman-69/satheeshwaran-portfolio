export default function handler(req, res) {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Anomaly Detection System",
      description: "Developed an intelligent system using machine learning algorithms to detect anomalies in real-time data streams, achieving 95% accuracy in identifying unusual patterns.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      github: "https://github.com/satheeshwaran/anomaly-detection",
      demo: "https://anomaly-detection-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "IoT Smart Home Automation",
      description: "Created a comprehensive IoT solution for home automation with real-time monitoring, voice control integration, and energy optimization features.",
      technologies: ["Node.js", "Arduino", "MQTT", "React", "Firebase"],
      image: "https://images.unsplash.com/photo-1558629167-0a8f0c4e2a1e?w=800",
      github: "https://github.com/satheeshwaran/smart-home-iot",
      demo: "https://smart-home-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Face Recognition Attendance System",
      description: "Built an automated attendance system using computer vision and deep learning, reducing manual attendance tracking time by 80%.",
      technologies: ["Python", "OpenCV", "Keras", "Django", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      github: "https://github.com/satheeshwaran/face-recognition",
      demo: "https://face-attendance-demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Intrusion Detection Network Security",
      description: "Implemented a network security system using machine learning to detect and prevent unauthorized access attempts in real-time.",
      technologies: ["Python", "Scikit-learn", "Wireshark", "Docker", "ELK Stack"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      github: "https://github.com/satheeshwaran/intrusion-detection",
      demo: "https://intrusion-detection-demo.com",
      featured: false
    }
  ];

  res.json(projects);
}

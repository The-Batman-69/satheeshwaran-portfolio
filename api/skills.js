export default function handler(req, res) {
  const skills = {
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP", "Computer Vision"],
    "Backend": ["Node.js", "Express.js", "Flask", "Django", "MongoDB", "MySQL", "PostgreSQL", "Supabase"],
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    "IoT": ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "LoRaWAN", "Sensor Networks"],
    "DevOps": ["Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud", "Linux", "Git"],
    "Tools": ["Git", "VS Code", "Postman", "Figma", "Jira", "Agile", "Scrum"]
  };

  res.json(skills);
}

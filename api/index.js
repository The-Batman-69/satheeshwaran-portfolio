import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again after 15 minutes'
  }
});
app.use('/api/', limiter);

// Handle preflight OPTIONS requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(200);
});

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message, subject } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required'
    });
  }

  try {
    // Email to portfolio owner
    const ownerMailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.FROM_EMAIL,
      subject: `New Contact Form Submission: ${subject || 'Portfolio Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #4f46e5; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Sent from portfolio contact form on ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    // Auto-reply to the sender
    const autoReplyMailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: `Thank you for contacting ${process.env.FROM_NAME}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Hi ${name},</p>
            <p>Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.</p>
            <div style="background: white; padding: 15px; border-left: 4px solid #4f46e5; margin: 10px 0;">
              <strong>Your message:</strong><br>
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666;">
            Best regards,<br>
            ${process.env.FROM_NAME}<br>
            AI & IoT Engineer
          </p>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(autoReplyMailOptions)
    ]);

    res.json({
      success: true,
      message: 'Your message has been sent successfully!'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Project data API
app.get('/api/projects', (req, res) => {
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
});

// Skills API
app.get('/api/skills', (req, res) => {
  const skills = {
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLP", "Computer Vision"],
    "Backend": ["Node.js", "Express.js", "Flask", "Django", "MongoDB", "MySQL", "PostgreSQL", "Supabase"],
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    "IoT": ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "LoRaWAN", "Sensor Networks"],
    "DevOps": ["Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud", "Linux", "Git"],
    "Tools": ["Git", "VS Code", "Postman", "Figma", "Jira", "Agile", "Scrum"]
  };

  res.json(skills);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    message: 'The requested API endpoint does not exist'
  });
});

export default app;

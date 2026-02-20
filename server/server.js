import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email format'
    });
  }

  try {
    // Email to portfolio owner
    const ownerMailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.FROM_EMAIL,
      subject: `New Portfolio Contact: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Sent from portfolio contact form on ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Thank you for contacting Satheeshwaran Durairaj',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
          <p>Best regards,</p>
          <p><strong>Satheeshwaran Durairaj</strong></p>
          <p>AI & IoT Engineer | Full Stack Developer</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            📱 +91 9952637103<br>
            📧 satheeshwaran.d007@gmail.com<br>
            🌐 satheeshwaran-portfolio.com
          </p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
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
      title: "AI-Based Intrusion Detection System",
      description: "Advanced OOD (Out-of-Distribution) model for detecting network intrusions with real-time monitoring and alert system.",
      techStack: ["TensorFlow", "Python", "Network Security", "OOD Models"],
      github: "https://github.com/satheeshwaran/intrusion-detection",
      demo: "https://intrusion-detection-demo.com",
      category: "AI/ML",
      featured: true
    },
    {
      id: 2,
      title: "Smart Electricity Monitoring & Billing System",
      description: "AI-integrated system for real-time electricity consumption monitoring with automated billing and predictive analytics.",
      techStack: ["IoT", "Machine Learning", "ESP32", "Web Dashboard"],
      github: "https://github.com/satheeshwaran/smart-energy",
      demo: "https://smart-energy-demo.com",
      category: "IoT",
      featured: true
    },
    {
      id: 3,
      title: "IoT-Based Fire Fighting Robot",
      description: "Autonomous robot equipped with sensors and AI for fire detection and suppression in industrial environments.",
      techStack: ["Arduino", "Computer Vision", "Sensor Fusion", "Robotics"],
      github: "https://github.com/satheeshwaran/fire-robot",
      demo: "https://fire-robot-demo.com",
      category: "IoT",
      featured: true
    },
    {
      id: 4,
      title: "Face Recognition Attendance System",
      description: "Real-time face recognition system for automated attendance tracking with high accuracy and speed.",
      techStack: ["OpenCV", "Deep Learning", "Flask", "React"],
      github: "https://github.com/satheeshwaran/face-attendance",
      demo: "https://face-attendance-demo.com",
      category: "AI/ML",
      featured: false
    },
    {
      id: 5,
      title: "FDP Management System",
      description: "Full-stack MERN application for managing Faculty Development Programs with comprehensive tracking and reporting.",
      techStack: ["MERN", "MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/satheeshwaran/fdp-system",
      demo: "https://fdp-system-demo.com",
      category: "Full Stack",
      featured: false
    },
    {
      id: 6,
      title: "Blockchain Demo System",
      description: "Educational blockchain implementation demonstrating distributed ledger technology with smart contracts.",
      techStack: ["Blockchain", "Solidity", "Web3.js", "Ethereum"],
      github: "https://github.com/satheeshwaran/blockchain-demo",
      demo: "https://blockchain-demo.com",
      category: "Blockchain",
      featured: false
    },
    {
      id: 7,
      title: "AI Vertical Farming System",
      description: "Intelligent vertical farming solution using AI for optimal plant growth monitoring and automated resource management.",
      techStack: ["Computer Vision", "IoT Sensors", "Machine Learning", "Automation"],
      github: "https://github.com/satheeshwaran/vertical-farming",
      demo: "https://vertical-farming-demo.com",
      category: "AI/ML",
      featured: false
    }
  ];

  res.json({
    success: true,
    data: projects,
    count: projects.length
  });
});

// Skills API
app.get('/api/skills', (req, res) => {
  const skills = {
    "AI/ML": ["TensorFlow", "Anomaly Detection", "Intrusion Detection Systems", "Face Recognition", "Data Analytics"],
    "Backend": ["Node.js", "Express.js", "Flask", "MongoDB", "MySQL", "Supabase"],
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Power BI"],
    "IoT/Hardware": ["Arduino", "ESP32", "Sensor Integration", "Relay Logic", "Smart Automation Systems"]
  };

  res.json({
    success: true,
    data: skills
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio API Server running on port ${PORT}`);
  console.log(`📧 Email service configured`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});

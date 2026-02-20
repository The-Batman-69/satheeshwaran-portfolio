# Satheeshwaran Durairaj - AI & IoT Engineer Portfolio

A premium, modern, and professional portfolio website built for Satheeshwaran Durairaj, an AI & IoT Engineer with expertise in Full Stack Development and UI/UX Training.

## 🚀 Features

- **Modern Design**: Apple-style minimalism combined with clean SaaS UI aesthetics
- **Dark Theme**: Elegant dark theme with purple and blue gradient accents
- **Responsive Design**: Fully responsive mobile-first design
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, scroll progress indicator, and cursor glow effect
- **Contact Form**: Integrated contact form with EmailJS support
- **Glassmorphism**: Modern glassmorphism card design
- **Typing Animation**: Dynamic typing effect in hero section
- **Floating Background**: Animated AI-themed background elements

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Shadcn UI** - Component library
- **Lucide React** - Icon library

### Additional Features
- **EmailJS** - Contact form integration
- **Glassmorphism** - Modern UI design pattern
- **Gradient Animations** - Dynamic background effects

## 📁 Project Structure

```
satheeshwaran-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/                 # Shadcn UI components
│   │   ├── About.tsx           # About section
│   │   ├── Contact.tsx         # Contact section with form
│   │   ├── Experience.tsx       # Experience section
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── ScrollProgress.tsx  # Scroll progress indicator
│   │   ├── Skills.tsx          # Skills section
│   │   └── CursorGlow.tsx      # Custom cursor effect
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd satheeshwaran-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📧 EmailJS Configuration

To enable the contact form functionality:

1. **Sign up for EmailJS** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create a new email service** and get your Service ID

3. **Create an email template** and get your Template ID

4. **Get your Public Key** from the EmailJS dashboard

5. **Update the Contact.tsx component** with your credentials:
   ```typescript
   // In src/components/Contact.tsx
   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
   
   await emailjs.send(
     'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
     'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
     templateParams
   );
   ```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- **Hero.tsx**: Name, title, tagline, and contact details
- **About.tsx**: Professional description and features
- **Skills.tsx**: Technical skills and categories
- **Projects.tsx**: Project details, tech stack, and links
- **Experience.tsx**: Work experience and achievements
- **Contact.tsx**: Contact information and social links

### Styling

- **Colors**: Modify the color scheme in `src/index.css` and `tailwind.config.js`
- **Typography**: Update font families and sizes in Tailwind configuration
- **Animations**: Adjust animation parameters in component files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Add corresponding styles if needed

## 🌟 Features Implemented

### ✅ Core Sections
- [x] Hero section with typing animation
- [x] About section with feature cards
- [x] Skills section with categorized display
- [x] Projects showcase with interactive cards
- [x] Experience timeline
- [x] Contact form with validation
- [x] Footer with credits

### ✅ Design Features
- [x] Dark theme with purple/blue gradients
- [x] Glassmorphism card design
- [x] Smooth scroll animations
- [x] Hover effects and micro-interactions
- [x] Responsive design (mobile-first)
- [x] Custom cursor glow effect
- [x] Scroll progress indicator
- [x] Floating animated background

### ✅ Technical Features
- [x] TypeScript for type safety
- [x] Component-based architecture
- [x] Modern React patterns
- [x] SEO-friendly meta tags
- [x] Performance optimized
- [x] Accessibility considerations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Satheeshwaran Durairaj**
- Email: satheeshwaran.d007@gmail.com
- Phone: +91 9952637103
- Location: Tamil Nadu, India

---

**Designed & Developed with ❤️ and 💻 by Satheeshwaran**

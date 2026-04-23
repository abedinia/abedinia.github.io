# Aydin Abedinia - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing Aydin Abedinia's work as a Machine Learning Researcher and Distributed Systems Engineer.

## 🌐 Live Demo

Visit the live portfolio: [https://abedinia.github.io/](https://abedinia.github.io/)

## ✨ Features

### Core Sections
- **Hero Section** - Eye-catching introduction with animated title rotator and dynamic particle background
- **About Section** - Professional background, expertise, and career highlights
- **Projects Section** - Showcase of key projects (SemiCART, Rust Decision Tree, GoProxyGet)
- **Research Section** - Academic research profile with links to Google Scholar, ResearchGate, and Kaggle
- **Blog Section** - Auto-fetched Medium blog posts with lazy loading
- **Footer** - Quick navigation and social links

### Technical Features
- **Dark/Light Theme Toggle** - Persistent theme preference with system preference detection
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Scrolling** - Elegant navigation with smooth scroll behavior
- **Custom Cursor** - Interactive custom cursor design
- **Lazy Loading** - Performance optimized content loading
- **SEO Optimized** - Comprehensive meta tags for search engines and social media
- **Google Analytics** - Integrated analytics for tracking visitor insights
- **Modern Animations** - CSS animations and transitions throughout

## 📁 Project Structure

```
abedinia.github.io/
├── index.html                 # Main HTML entry point
├── script.js                  # Core JavaScript functionality
├── style.css                  # Custom CSS styles
├── README.md                  # This file
├── assets/
│   ├── css/
│   │   └── style.css         # Additional stylesheets
│   ├── images/               # Image assets
│   └── js/
│       ├── main.js           # React app initialization
│       ├── medium-fetcher.js # Medium blog RSS fetcher
│       ├── scholar-fetcher.js # Google Scholar integration
│       ├── twitter-fetcher.js # Twitter/X feed fetcher
│       └── components/
│           ├── Header.js          # Navigation header
│           ├── HeroSection.js      # Hero section with intro
│           ├── AboutSection.js     # About section
│           ├── ProjectsSection.js  # Projects showcase
│           ├── ResearchSection.js  # Research profiles
│           ├── BlogSection.js      # Blog posts
│           ├── Footer.js           # Footer component
│           ├── ContactSection.js   # Contact form
│           └── SocialSection.js    # Social media feeds
└── public/
    └── 404.html              # Custom 404 error page
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and transitions
- **JavaScript (ES6+)** - DOM manipulation and interactivity
- **React** - UI component library for dynamic rendering
- **Tailwind CSS** - Utility-first CSS framework (via CDN)

### Features & Libraries
- **Google Fonts** - DM Sans, DM Serif Display, JetBrains Mono
- **Google Analytics** - Visitor tracking and insights
- **CORS Proxy API** - For fetching Medium blog feeds
- **Responsive Design** - Mobile-first approach

### Styling Framework
Custom Tailwind configuration with:
- Dark mode support
- Custom color palette (Indigo accent, Emerald secondary)
- Custom shadows (glow effect for dark mode)
- Gradient backgrounds

## 🎨 Design System

### Color Palette
- **Dark Background**: `#030712`
- **Light Background**: `#fafafa`
- **Primary Accent**: Indigo `#818cf8`
- **Secondary Accent**: Emerald `#34d399`
- **Surface Dark**: `#18181b`
- **Surface Light**: `#ffffff`

### Typography
- **Display Font**: DM Serif Display
- **Body Font**: DM Sans
- **Mono Font**: JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abedinia/abedinia.github.io.git
   cd abedinia.github.io
   ```

2. **Start a local server** (for development)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (http-server package)
   http-server -p 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📋 Content Sections

### Hero Section
- Animated introduction with rotating job titles
- Gradient text effect
- Dynamic particle background with blue and yellow elements
- Call-to-action elements

### About Section
- Professional biography highlighting:
  - 7+ years of industry experience
  - ML systems implementation at scale (5M+ daily trips)
  - 60-layer MLP model achievements
  - Research focus on semi-supervised and reinforcement learning
  - SemiCART algorithm development

### Projects Section
Showcases three featured projects:
1. **SemiCART** - Semi-supervised learning algorithm
   - 12% accuracy improvement on UCI benchmarks
   - Weighted decision trees implementation
   - [Repository](https://github.com/WeightedAI/semicart)

2. **Rust Decision Tree** - High-performance ML library
   - 40% faster training on large datasets
   - Gini impurity and entropy support
   - [Repository](https://github.com/abedinia/rust_decision_tree)

3. **GoProxyGet** - Command-line file downloader
   - SOCKS5 proxy support
   - Cross-platform compatibility
   - [Repository](https://github.com/abedinia/GoProxyGet)

### Research Section
Links to professional research profiles:
- **Google Scholar** - Academic publications and citations
- **ResearchGate** - Research network profile
- **Kaggle** - Data science competitions and datasets

### Blog Section
- Auto-fetches latest posts from Medium
- Lazy loading for performance
- Fallback content if fetching fails
- 5-minute refresh interval

## 🔧 Customization

### Update Personal Information
Edit `assets/js/components/AboutSection.js` to update:
- Bio and professional history
- Skills and expertise
- Career achievements

### Modify Projects
Edit `assets/js/components/ProjectsSection.js` to:
- Add new projects
- Update project descriptions and technologies
- Change repository links

### Update Social Links
Edit relevant component files to update:
- GitHub profile URLs
- LinkedIn connections
- Twitter/X handle
- Email contact

### Change Color Scheme
In `index.html`, modify the Tailwind config section:
```javascript
colors: {
  accent: '#818cf8', // Change primary color
  accentSecondary: '#34d399', // Change secondary color
  // ... other colors
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile** - `< 768px`
- **Tablet** - `768px - 1024px`
- **Desktop** - `> 1024px`

Key responsive features:
- Mobile hamburger menu navigation
- Stacked layout on small screens
- Touch-friendly buttons and links
- Optimized typography sizes

## 🔍 SEO & Analytics

### SEO Features
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card integration
- Schema markup ready
- Semantic HTML structure
- Mobile-friendly design

### Analytics
- **Google Analytics** - Integrated with tag `G-3QX5RKQZKW`
- Tracks visitor behavior and engagement
- Cross-domain tracking capable

## 🎯 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚧 Development Notes

### Performance Optimizations
- Lazy loading of Medium blog posts
- CDN-based Tailwind CSS
- Smooth scroll behavior
- Optimized image loading

### Accessibility
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast for dark/light modes

### Future Enhancements
- [ ] Add email subscription form
- [ ] Implement blog search functionality
- [ ] Add project filtering by technology
- [ ] GitHub API integration for live repository stats
- [ ] Dark mode animations
- [ ] Internationalization (i18n)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

While this is a personal portfolio, feel free to:
- Report issues
- Suggest improvements
- Use this as a template for your own portfolio

## 📧 Contact

- **Email** - aydin.abedinia@gmail.com
- **LinkedIn** - [LinkedIn Profile](https://linkedin.com/in/aydin-abedinia)
- **GitHub** - [GitHub Profile](https://github.com/abedinia)
- **Twitter** - [@AydinAbedinia](https://twitter.com/AydinAbedinia)

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Google Analytics Setup](https://support.google.com/analytics)
- [Web Accessibility Standards (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## 🎓 Academic Profile

**Research Interests:**
- Semi-supervised Learning
- Reinforcement Learning
- Distributed Systems
- Machine Learning Algorithms
- Decision Trees & Ensemble Methods

**Publications:**
- International Journal of Machine Learning and Cybernetics
- International Conference on Machine Learning Technologies

---

**Last Updated:** April 2026  
**Version:** 1.0.0

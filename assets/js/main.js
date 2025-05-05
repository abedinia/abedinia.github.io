'use strict';

// DOM Elements
const root = document.getElementById('root');

// App Component
const App = () => {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Apply changes directly to ensure immediate visual feedback
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
  };
  
  return React.createElement(
    'div', 
    { className: 'min-h-screen' },
    React.createElement(Header, { darkMode, toggleDarkMode }),
    React.createElement(HeroSection, null),
    React.createElement(AboutSection, null),
    React.createElement(ProjectsSection, null),
    React.createElement(BlogSection, null),
    React.createElement(ResearchSection, null),
    // Removed SocialSection (Latest Updates) as requested
    // Removed ContactSection (Get in Touch) as requested
    React.createElement(Footer, null)
  );
};

// Initialize animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Render the App
  ReactDOM.render(React.createElement(App), root);
  
  // Initialize fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
  
  // Initialize staggered animations
  const staggerElements = document.querySelectorAll('.stagger-item');
  
  const staggerObserver = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        delay += 150;
      }
    });
  }, { threshold: 0.1 });
  
  staggerElements.forEach(element => {
    staggerObserver.observe(element);
  });
  
  // Initialize 3D hover effect
  const hover3dElements = document.querySelectorAll('.hover-3d');
  
  hover3dElements.forEach(element => {
    element.addEventListener('mousemove', e => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      element.style.transform = `
        perspective(1000px)
        rotateX(${y * 10}deg)
        rotateY(${x * -10}deg)
        translateZ(10px)
      `;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
  
  // Initialize scroll progress bar
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);
  
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = `${(scrollTop / scrollHeight) * 100}%`;
    
    document.documentElement.style.setProperty('--scroll', scrollPercent);
  });
  
  // Initialize parallax effect
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const distance = window.scrollY;
      const speed = element.dataset.speed || 0.2;
      element.style.transform = `translateY(${distance * speed}px)`;
    });
  });
  
  // Initialize typewriter effect for hero section
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    // Save the original text
    const originalText = heroTitle.textContent;
    // Clear the text
    heroTitle.textContent = '';
    heroTitle.classList.add('typewriter');
    
    // Type out the text
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
        // Remove the typewriter class after the animation
        setTimeout(() => {
          heroTitle.classList.remove('typewriter');
        }, 1000);
      }
    }, 100);
  }
  
  // Add floating effect to profile image
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.classList.add('float');
  }
  
  // Convert primary buttons to gradient buttons
  const primaryButtons = document.querySelectorAll('.btn-primary');
  primaryButtons.forEach(button => {
    button.classList.add('btn-gradient');
  });
  
  // Apply dynamic underline to navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.add('dynamic-underline');
  });
  
  // Add pulse effect to contact buttons
  const contactButtons = document.querySelectorAll('.contact-link');
  contactButtons.forEach(button => {
    button.classList.add('pulse');
  });
  
  // Add shimmer effect for loading
  const loadingElements = document.querySelectorAll('.loading');
  loadingElements.forEach(element => {
    element.classList.add('shimmer');
  });
  
  // Initialize rotating titles
  const titleRotator = document.getElementById('title-rotator');
  if (titleRotator) {
    const titles = [
      'Machine Learning Researcher',
      'Distributed Systems Engineer',
      'Research Assistant',
      'Backend Developer',
      'Software Engineer',
      'ML Engineer'
    ];
    
    let currentIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const rotateTitle = () => {
      const currentTitle = titles[currentIndex];
      
      if (isDeleting) {
        // Deleting text
        titleRotator.textContent = currentTitle.substring(0, currentCharIndex--);
        typingSpeed = 50; // Faster when deleting
      } else {
        // Adding text
        titleRotator.textContent = currentTitle.substring(0, currentCharIndex++);
        typingSpeed = 100; // Normal speed when typing
      }
      
      // Check if typing is complete
      if (!isDeleting && currentCharIndex > currentTitle.length) {
        // Start deleting after a pause
        isDeleting = true;
        typingSpeed = 1000; // Pause before deleting
      } else if (isDeleting && currentCharIndex < 0) {
        // Move to next title
        isDeleting = false;
        currentIndex = (currentIndex + 1) % titles.length;
        currentCharIndex = 0;
        typingSpeed = 500; // Pause before typing next title
      }
      
      setTimeout(rotateTitle, typingSpeed);
    };
    
    // Start the rotation
    setTimeout(rotateTitle, 1000);
  }
});

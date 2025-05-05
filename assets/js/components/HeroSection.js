'use strict';

// Hero Section Component
const HeroSection = () => {
  return React.createElement(
    'section', 
    { 
      id: 'hero',
      className: 'min-h-screen flex items-center py-20 bg-gradient-to-br from-blue-50 via-amber-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden'
    },
    // Background particles for dynamic effect - now with yellow particles too
    React.createElement(
      'div',
      { className: 'absolute inset-0 overflow-hidden pointer-events-none' },
      Array.from({ length: 20 }).map((_, i) => 
        React.createElement('div', {
          key: i,
          className: `absolute rounded-full ${i % 2 === 0 ? 'bg-blue-500 dark:bg-blue-400' : 'bg-yellow-500 dark:bg-yellow-400'} opacity-10`,
          style: {
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          },
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'flex flex-col-reverse md:flex-row items-center justify-between gap-12' },
        // Text Content
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 fade-in' },
          React.createElement(
            'h1',
            { className: 'text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white leading-tight' },
            React.createElement('span', { className: 'bg-gradient-blue-yellow bg-clip-text text-transparent block' }, 'Aydin Abedinia')
          ),
          React.createElement(
            'div',
            { className: 'h-14 mb-4 relative overflow-hidden title-animation-container' },
            React.createElement('div', { 
              id: 'title-rotator',
              className: 'text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200',
            })
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl parallax', 'data-speed': '0.1' },
            'Machine Learning Researcher and Distributed Systems Engineer with expertise in semi-supervised learning, reinforcement learning, and scalable AI solutions for real-world challenges.'
          ),
          React.createElement(
            'div',
            { className: 'flex flex-wrap gap-4' },
            React.createElement(
              'a',
              { 
                href: '#projects',
                className: 'btn btn-dual py-3 px-6 rounded-lg shadow-lg'
              },
              'Projects'
            ),
            React.createElement(
              'a',
              { 
                href: '#blog',
                className: 'btn btn-dual py-3 px-6 rounded-lg shadow-lg'
              },
              'Blog'
            ),
            React.createElement(
              'a',
              { 
                href: '#research',
                className: 'btn btn-dual py-3 px-6 rounded-lg shadow-lg'
              },
              'Research'
            ),
            // ORCID
            // React.createElement(
            //   'a',
            //   { 
            //     href: 'https://orcid.org/0000-0001-9739-7021',
            //     target: '_blank',
            //     rel: 'noopener noreferrer',
            //     className: 'btn-outline py-3 px-6 rounded-lg shadow-lg flex items-center'
            //   },
            //   React.createElement('i', { className: 'fab fa-orcid mr-2' }),
            //   'ORCID'
            // )
            // Contact Me button removed as requested
          ),
          React.createElement(
            'div',
            { className: 'flex mt-8 space-x-6 stagger-item' },
            // GitHub
            React.createElement(
              'a', 
              { 
                href: 'https://github.com/abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-github text-2xl' })
            ),
            // LinkedIn
            React.createElement(
              'a', 
              { 
                href: 'https://www.linkedin.com/in/aydin-abedinia-96b2276b/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-linkedin text-2xl' })
            ),
            // Twitter/X
            React.createElement(
              'a', 
              { 
                href: 'https://x.com/abedinia_aydin',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-twitter text-2xl' })
            ),
            // Medium
            React.createElement(
              'a', 
              { 
                href: 'https://medium.com/@abedinia.aydin',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-medium text-2xl' })
            ),
            // Reddit
            React.createElement(
              'a', 
              { 
                href: 'https://www.reddit.com/user/abedinia_aydin/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-reddit text-2xl' })
            ),
            // Stack Overflow
            React.createElement(
              'a', 
              { 
                href: 'https://stackoverflow.com/users/5637416/aydin-abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-stack-overflow text-2xl' })
            ),
            // Kaggle
            React.createElement(
              'a', 
              { 
                href: 'https://www.kaggle.com/abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-kaggle text-2xl' })
            ),
            // ResearchGate
            React.createElement(
              'a', 
              { 
                href: 'https://www.researchgate.net/profile/Aydin-Abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-researchgate text-2xl' })
            ),
            // Google Scholar
            React.createElement(
              'a', 
              { 
                href: 'https://scholar.google.com/citations?user=B1SRyKwAAAAJ&hl=en',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fas fa-graduation-cap text-2xl' })
            ),
            // ORCID
            React.createElement(
              'a', 
              { 
                href: 'https://orcid.org/0000-0001-9739-7021',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-orcid text-2xl' })
            ),
            // Mastodon
            React.createElement(
              'a', 
              { 
                href: 'https://mastodon.social/@abedinia_aydin',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-mastodon text-2xl' })
            ),
            // Xing
            React.createElement(
              'a', 
              { 
                href: 'https://www.xing.com/profile/aydin_abedinia/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors contact-link pulse'
              },
              React.createElement('i', { className: 'fab fa-xing text-2xl' })
            )
          )
        ),
        // Profile Image
        React.createElement(
          'div',
          { className: 'w-full md:w-1/2 flex justify-center fade-in' },
          React.createElement(
            'div',
            { 
              className: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl profile-image hover-3d'
            },
            React.createElement(
              'img',
              { 
                src: './assets/images/profile.jpg',
                alt: 'Aydin Abedinia',
                className: 'absolute inset-0 w-full h-full object-cover',
                onError: 'this.src="https://via.placeholder.com/400x400?text=Aydin+Abedinia"'
              }
            )
          )
        )
      )
    )
  );
};

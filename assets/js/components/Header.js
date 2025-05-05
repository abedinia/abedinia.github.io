'use strict';

// Header Component
const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  
  // Track scroll position to add background to header
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return React.createElement(
    'header',
    { 
      className: `fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 flex justify-between items-center' },
      // Logo and Name
      React.createElement(
        'div',
        { className: 'flex items-center' },
        React.createElement(
          'a',
          { 
            href: '#', 
            className: 'flex items-center gap-2'
          },
          React.createElement(
            'div',
            { 
              className: 'w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg'
            },
            'AA'
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'h1',
              { className: 'text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400' },
              'Aydin Abedinia'
            ),
            React.createElement(
              'p',
              { className: 'text-xs text-gray-600 dark:text-gray-400 hidden sm:block' },
              'ML Researcher & Distributed Systems Engineer'
            )
          )
        )
      ),
      // Desktop Navigation
      React.createElement(
        'nav',
        { className: 'hidden md:flex items-center space-x-6' },
        React.createElement('a', { 
          href: '#about', 
          className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group'
        }, 
          'About',
          React.createElement('span', { 
            className: 'absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full'
          })
        ),
        React.createElement('a', { 
          href: '#projects', 
          className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group'
        }, 
          'Projects',
          React.createElement('span', { 
            className: 'absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full'
          })
        ),
        React.createElement('a', { 
          href: '#blog', 
          className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group'
        }, 
          'Blog',
          React.createElement('span', { 
            className: 'absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full'
          })
        ),
        React.createElement('a', { 
          href: '#research', 
          className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group'
        }, 
          'Research',
          React.createElement('span', { 
            className: 'absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full'
          })
        ),
        // Social Links
        React.createElement(
          'div',
          { className: 'ml-auto hidden md:flex items-center space-x-5' },
          // GitHub
          React.createElement(
            'a',
            { 
              href: 'https://github.com/abedinia',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-github' })
          ),
          // LinkedIn
          React.createElement(
            'a',
            { 
              href: 'https://www.linkedin.com/in/aydin-abedinia-96b2276b/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-linkedin' })
          ),
          // X (formerly Twitter)
          React.createElement(
            'a',
            { 
              href: 'https://x.com/abedinia_aydin',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-twitter' })
          ),
          // Medium
          React.createElement(
            'a',
            { 
              href: 'https://medium.com/@abedinia.aydin',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-medium' })
          ),
          // Reddit
          React.createElement(
            'a',
            { 
              href: 'https://www.reddit.com/user/abedinia_aydin/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-reddit' })
          ),
          // Stack Overflow
          React.createElement(
            'a',
            { 
              href: 'https://stackoverflow.com/users/5637416/aydin-abedinia',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-stack-overflow' })
          ),
          // Kaggle
          React.createElement(
            'a',
            { 
              href: 'https://www.kaggle.com/abedinia',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-kaggle' })
          ),
          // ResearchGate
          React.createElement(
            'a',
            { 
              href: 'https://www.researchgate.net/profile/Aydin-Abedinia',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-researchgate' })
          ),
          // Google Scholar
          React.createElement(
            'a',
            { 
              href: 'https://scholar.google.com/citations?user=B1SRyKwAAAAJ&hl=en',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors'
            },
            React.createElement('i', { className: 'fas fa-graduation-cap' })
          ),
          // ORCID
          React.createElement(
            'a',
            { 
              href: 'https://orcid.org/0000-0001-9739-7021',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-orcid' })
          ),
          // Mastodon
          React.createElement(
            'a',
            { 
              href: 'https://mastodon.social/@abedinia_aydin',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-mastodon' })
          ),
          // Xing
          React.createElement(
            'a',
            { 
              href: 'https://www.xing.com/profile/aydin_abedinia/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
            },
            React.createElement('i', { className: 'fab fa-xing' })
          ),
          // Dark mode toggle
          React.createElement(
            'button',
            { 
              onClick: toggleDarkMode, 
              className: 'p-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none transition-transform hover:scale-110'
            },
            darkMode 
              ? React.createElement('i', { className: 'fas fa-sun text-yellow-400' })
              : React.createElement('i', { className: 'fas fa-moon text-gray-700' })
          )
        ),
        // Mobile Menu Button
        React.createElement(
          'div',
          { className: 'md:hidden flex items-center' },
          React.createElement(
            'button',
            { 
              onClick: toggleDarkMode, 
              className: 'p-2 mr-2 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none'
            },
            darkMode 
              ? React.createElement('i', { className: 'fas fa-sun text-yellow-400' })
              : React.createElement('i', { className: 'fas fa-moon text-gray-700' })
          ),
          React.createElement(
            'button',
            { 
              onClick: toggleMenu,
              className: 'focus:outline-none bg-gray-200 dark:bg-gray-800 p-2 rounded'
            },
            React.createElement('i', { 
              className: menuOpen ? 'fas fa-times' : 'fas fa-bars', 
              'aria-hidden': 'true' 
            })
          )
        ),
        // Mobile Menu
        menuOpen && React.createElement(
          'div',
          { 
            className: 'absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden transition-all duration-300 ease-in-out',
            style: { opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)' }
          },
          React.createElement(
            'div',
            { className: 'container mx-auto px-4 py-4 flex flex-col space-y-4' },
            React.createElement('a', { href: '#about', className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2', onClick: toggleMenu }, 'About'),
            React.createElement('a', { href: '#projects', className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2', onClick: toggleMenu }, 'Projects'),
            React.createElement('a', { href: '#blog', className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2', onClick: toggleMenu }, 'Blog'),
            React.createElement('a', { href: '#research', className: 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2', onClick: toggleMenu }, 'Research'),
            React.createElement(
              'div',
              { className: 'flex space-x-4 p-2 border-t border-gray-200 dark:border-gray-800 pt-4' },
              React.createElement('a', { href: 'https://github.com/abedinia', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-github' })),
              React.createElement('a', { href: 'https://www.linkedin.com/in/aydin-abedinia-96b2276b/', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-linkedin' })),
              React.createElement('a', { href: 'https://x.com/abedinia_aydin', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-twitter' })),
              React.createElement('a', { href: 'https://medium.com/@abedinia.aydin', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-medium' })),
              React.createElement('a', { href: 'https://www.reddit.com/user/abedinia_aydin/', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors' }, React.createElement('i', { className: 'fab fa-reddit' })),
              React.createElement('a', { href: 'https://stackoverflow.com/users/5637416/aydin-abedinia', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-stack-overflow' })),
              React.createElement('a', { href: 'https://www.kaggle.com/abedinia', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors' }, React.createElement('i', { className: 'fab fa-kaggle' })),
              React.createElement('a', { href: 'https://www.researchgate.net/profile/Aydin-Abedinia', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-researchgate' })),
              React.createElement('a', { href: 'https://scholar.google.com/citations?user=B1SRyKwAAAAJ&hl=en', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors' }, React.createElement('i', { className: 'fas fa-graduation-cap' })),
              React.createElement('a', { href: 'https://orcid.org/0000-0001-9739-7021', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-orcid' })),
              React.createElement('a', { href: 'https://mastodon.social/@abedinia_aydin', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors' }, React.createElement('i', { className: 'fab fa-mastodon' })),
              React.createElement('a', { href: 'https://www.xing.com/profile/aydin_abedinia/', target: '_blank', rel: 'noopener noreferrer', className: 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' }, React.createElement('i', { className: 'fab fa-xing' }))
            )
          )
        )
      )
    )
  );
};

'use strict';

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return React.createElement(
    'footer',
    { className: 'bg-gray-900 text-white py-12 relative overflow-hidden' },
    // Background pattern
    React.createElement(
      'div',
      { 
        className: 'absolute inset-0 opacity-5',
        style: {
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }
      }
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-12 gap-8 items-start' },
        // Logo and Copyright
        React.createElement(
          'div',
          { className: 'md:col-span-4' },
          React.createElement(
            'div',
            { className: 'flex items-center mb-4' },
            React.createElement(
              'div',
              { 
                className: 'w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg mr-3'
              },
              'AA'
            ),
            React.createElement(
              'h3',
              { className: 'text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400' },
              'Aydin Abedinia'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-400 mb-4' },
            'Machine Learning Researcher and Distributed Systems Engineer - Crafting Scalable AI Solutions for Real-World Challenges.'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 text-sm' },
            ` ${currentYear} All Rights Reserved`
          )
        ),
        // Navigation
        React.createElement(
          'div',
          { className: 'md:col-span-3' },
          React.createElement(
            'h4',
            { className: 'text-lg font-semibold mb-4 text-gray-300 border-b border-gray-800 pb-2' },
            'Navigation'
          ),
          React.createElement(
            'ul',
            { className: 'space-y-2' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 
                  href: '#about',
                  className: 'text-gray-400 hover:text-white transition-colors inline-flex items-center'
                },
                React.createElement('i', { className: 'fas fa-chevron-right text-xs mr-2 text-yellow-400' }),
                'About'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 
                  href: '#projects',
                  className: 'text-gray-400 hover:text-white transition-colors inline-flex items-center'
                },
                React.createElement('i', { className: 'fas fa-chevron-right text-xs mr-2 text-blue-400' }),
                'Projects'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 
                  href: '#blog',
                  className: 'text-gray-400 hover:text-white transition-colors inline-flex items-center'
                },
                React.createElement('i', { className: 'fas fa-chevron-right text-xs mr-2 text-yellow-400' }),
                'Blog'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { 
                  href: '#research',
                  className: 'text-gray-400 hover:text-white transition-colors inline-flex items-center'
                },
                React.createElement('i', { className: 'fas fa-chevron-right text-xs mr-2 text-blue-400' }),
                'Research'
              )
            )
            // Contact link removed as requested
          )
        ),
        // Connect
        React.createElement(
          'div',
          { className: 'md:col-span-5' },
          React.createElement(
            'h4',
            { className: 'text-lg font-semibold mb-4 text-gray-300 border-b border-gray-800 pb-2' },
            'Connect'
          ),
          React.createElement(
            'div',
            { className: 'grid grid-cols-3 gap-4' },
            // GitHub
            React.createElement(
              'a', 
              { 
                href: 'https://github.com/abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-github text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'GitHub')
            ),
            // LinkedIn
            React.createElement(
              'a', 
              { 
                href: 'https://www.linkedin.com/in/aydin-abedinia-96b2276b/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-linkedin text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'LinkedIn')
            ),
            // Twitter
            React.createElement(
              'a', 
              { 
                href: 'https://x.com/abedinia_aydin',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-yellow-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-twitter text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Twitter')
            ),
            // Medium
            React.createElement(
              'a', 
              { 
                href: 'https://medium.com/@abedinia.aydin',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-medium text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Medium')
            ),
            // Reddit
            React.createElement(
              'a', 
              { 
                href: 'https://www.reddit.com/user/abedinia_aydin/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-yellow-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-reddit text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Reddit')
            ),
            // Stack Overflow
            React.createElement(
              'a', 
              { 
                href: 'https://stackoverflow.com/users/5637416/aydin-abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-stack-overflow text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Stack OF')
            ),
            // Kaggle
            React.createElement(
              'a', 
              { 
                href: 'https://www.kaggle.com/abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-yellow-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-kaggle text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Kaggle')
            ),
            // ResearchGate
            React.createElement(
              'a', 
              { 
                href: 'https://www.researchgate.net/profile/Aydin-Abedinia',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-researchgate text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Research')
            ),
            // Google Scholar
            React.createElement(
              'a', 
              { 
                href: 'https://scholar.google.com/citations?user=B1SRyKwAAAAJ&hl=en',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-yellow-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fas fa-graduation-cap text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Scholar')
            ),
            // ORCID
            React.createElement(
              'a', 
              { 
                href: 'https://orcid.org/0000-0001-9739-7021',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-orcid text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'ORCID')
            ),
            // Mastodon
            React.createElement(
              'a', 
              { 
                href: 'https://mastodon.social/@abedinia_aydin',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-yellow-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-mastodon text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Mastodon')
            ),
            // Xing
            React.createElement(
              'a', 
              { 
                href: 'https://www.xing.com/profile/aydin_abedinia/',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-gray-800 p-3 rounded-lg hover:bg-blue-900 transition-colors flex flex-col items-center justify-center'
              },
              React.createElement('i', { className: 'fab fa-xing text-xl mb-2' }),
              React.createElement('span', { className: 'text-xs' }, 'Xing')
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm' },
        'Designed and developed with  using React, Tailwind CSS, and Framer Motion'
      )
    )
  );
};

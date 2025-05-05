'use strict';

// Contact Section Component
const ContactSection = () => {
  return React.createElement(
    'section',
    {
      id: 'contact',
      className: 'py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300'
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-4' },
      React.createElement(
        'div',
        { className: 'text-center mb-16 fade-in' },
        React.createElement(
          'h2',
          { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white' },
          'Get In Touch'
        ),
        React.createElement(
          'div',
          { className: 'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-indigo-600 dark:from-blue-400 dark:via-yellow-400 dark:to-indigo-400 mx-auto mb-6 rounded-full' }
        ),
        React.createElement(
          'p',
          { className: 'max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300' },
          'Interested in collaborating, discussing research, or just want to say hello? Feel free to reach out!'
        )
      ),
      React.createElement(
        'div',
        { className: 'max-w-4xl mx-auto' },
        React.createElement(
          'div',
          { className: 'flex flex-wrap justify-center gap-8 mb-12' },
          // Email Contact
          React.createElement(
            'div',
            { className: 'bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center fade-in w-full md:w-auto md:flex-1 max-w-md' },
            React.createElement(
              'div',
              { className: 'w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-yellow-500 dark:from-blue-600 dark:to-yellow-500 rounded-full flex items-center justify-center mb-6' },
              React.createElement('i', { className: 'far fa-envelope text-white dark:text-white text-3xl' })
            ),
            React.createElement(
              'h3',
              { className: 'text-2xl font-bold mb-4 text-gray-900 dark:text-white' },
              'Email'
            ),
            React.createElement(
              'p',
              { className: 'text-gray-700 dark:text-gray-300 mb-6' },
              'Drop me a message anytime!'
            ),
            React.createElement(
              'a',
              { 
                href: 'mailto:abedinia.aydin@gmail.com',
                className: 'text-lg text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 hover:underline'
              },
              'abedinia.aydin@gmail.com'
            )
          ),
          // Social Connect
          React.createElement(
            'div',
            { className: 'bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center fade-in w-full md:w-auto md:flex-1 max-w-md' },
            React.createElement(
              'div',
              { className: 'w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500 to-blue-500 dark:from-yellow-500 dark:to-blue-600 rounded-full flex items-center justify-center mb-6' },
              React.createElement('i', { className: 'fas fa-globe text-white dark:text-white text-3xl' })
            ),
            React.createElement(
              'h3',
              { className: 'text-2xl font-bold mb-4 text-gray-900 dark:text-white' },
              'Connect'
            ),
            React.createElement(
              'p',
              { className: 'text-gray-700 dark:text-gray-300 mb-6' },
              'Find me on these platforms'
            ),
            React.createElement(
              'div',
              { className: 'grid grid-cols-3 md:grid-cols-9 gap-4' },
              // GitHub
              React.createElement(
                'a', 
                { 
                  href: 'https://github.com/abedinia',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:scale-110 pulse',
                  title: 'GitHub'
                },
                React.createElement('i', { className: 'fab fa-github text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'GitHub')
              ),
              // LinkedIn
              React.createElement(
                'a', 
                { 
                  href: 'https://www.linkedin.com/in/abedinia',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:scale-110 pulse',
                  title: 'LinkedIn'
                },
                React.createElement('i', { className: 'fab fa-linkedin text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'LinkedIn')
              ),
              // Twitter
              React.createElement(
                'a', 
                { 
                  href: 'https://twitter.com/abedinia.aydin',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors hover:scale-110 pulse',
                  title: 'Twitter'
                },
                React.createElement('i', { className: 'fab fa-twitter text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'Twitter')
              ),
              // Medium
              React.createElement(
                'a', 
                { 
                  href: 'https://medium.com/@abedinia.aydin',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:scale-110 pulse',
                  title: 'Medium'
                },
                React.createElement('i', { className: 'fab fa-medium text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'Medium')
              ),
              // Reddit
              React.createElement(
                'a', 
                { 
                  href: 'https://www.reddit.com/user/abedinia_aydin/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors hover:scale-110 pulse',
                  title: 'Reddit'
                },
                React.createElement('i', { className: 'fab fa-reddit text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'Reddit')
              ),
              // Stack Overflow
              React.createElement(
                'a', 
                { 
                  href: 'https://stackoverflow.com/users/5637416/aydin-abedinia',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:scale-110 pulse',
                  title: 'Stack Overflow'
                },
                React.createElement('i', { className: 'fab fa-stack-overflow text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'Stack OF')
              ),
              // Kaggle
              React.createElement(
                'a', 
                { 
                  href: 'https://www.kaggle.com/abedinia',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors hover:scale-110 pulse',
                  title: 'Kaggle'
                },
                React.createElement('i', { className: 'fab fa-kaggle text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'Kaggle')
              ),
              // ResearchGate
              React.createElement(
                'a', 
                { 
                  href: 'https://www.researchgate.net/profile/Aydin-Abedinia',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors hover:scale-110 pulse',
                  title: 'ResearchGate'
                },
                React.createElement('i', { className: 'fab fa-researchgate text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'ResearchGate')
              ),
              // Google Scholar
              React.createElement(
                'a', 
                { 
                  href: 'https://scholar.google.com/citations?user=B1SRyKwAAAAJ&hl=en',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex flex-col items-center text-gray-700 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors hover:scale-110 pulse',
                  title: 'Google Scholar'
                },
                React.createElement('i', { className: 'fas fa-graduation-cap text-2xl mb-1' }),
                React.createElement('span', { className: 'text-xs' }, 'Scholar')
              )
            )
          )
        )
      )
    )
  );
};

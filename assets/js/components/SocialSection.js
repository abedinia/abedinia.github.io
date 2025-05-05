'use strict';

// Social Section Component
const SocialSection = () => {
  return React.createElement(
    'section',
    {
      id: 'social',
      className: 'py-20 bg-white dark:bg-gray-900 transition-colors duration-300'
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
          'Latest Updates'
        ),
        React.createElement(
          'div',
          { className: 'w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6' }
        ),
        React.createElement(
          'p',
          { className: 'max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300' },
          'Follow me on X (formerly Twitter) for the latest updates on my projects, research, and thoughts on tech.'
        )
      ),
      React.createElement(
        'div',
        { 
          id: 'twitter-posts-container',
          className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        },
        // The content of this div will be populated by the TwitterFetcher
        React.createElement(
          'div',
          { className: 'col-span-full text-center p-8' },
          React.createElement('div', { className: 'animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto' }),
          React.createElement('p', { className: 'mt-4 text-gray-700 dark:text-gray-300' }, 'Loading tweets...')
        )
      ),
      React.createElement(
        'div',
        { className: 'text-center mt-12' },
        React.createElement(
          'a',
          {
            href: 'https://x.com/abedinia_aydin',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-outline inline-flex items-center'
          },
          'Follow on X ',
          React.createElement('i', { className: 'fab fa-x-twitter ml-2' })
        )
      )
    )
  );
};

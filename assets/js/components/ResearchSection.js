'use strict';

// Research Section Component
const ResearchSection = () => {
  // Research Profile Links Component
  const ResearchProfileLinks = () => {
    const profiles = [
      {
        name: "Google Scholar",
        icon: "fas fa-graduation-cap",
        url: "https://scholar.google.com/citations?user=B1SRyKwAAAAJ",
        color: "bg-blue-600 dark:bg-blue-700"
      },
      {
        name: "ResearchGate",
        icon: "fab fa-researchgate",
        url: "https://www.researchgate.net/profile/Aydin-Abedinia",
        color: "bg-green-600 dark:bg-green-700"
      },
      {
        name: "Kaggle",
        icon: "fab fa-kaggle",
        url: "https://www.kaggle.com/abedinia",
        color: "bg-blue-500 dark:bg-blue-600"
      }
    ];

    return React.createElement(
      'div',
      { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 mt-8' },
      profiles.map((profile, index) => (
        React.createElement(
          'a',
          {
            key: index,
            href: profile.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: `${profile.color} rounded-lg p-4 flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md`
          },
          React.createElement('i', { className: `${profile.icon} text-3xl mb-2` }),
          React.createElement(
            'span',
            { className: 'text-sm font-medium' },
            profile.name
          )
        )
      ))
    );
  };

  return React.createElement(
    'section',
    {
      id: 'research',
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
          'Research & Publications'
        ),
        React.createElement(
          'div',
          { className: 'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-indigo-600 dark:from-blue-400 dark:via-yellow-400 dark:to-indigo-400 mx-auto mb-6 rounded-full' }
        ),
        React.createElement(
          'p',
          { className: 'max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300' },
          'My research focuses on data-efficient, probabilistically grounded machine learning methods, with particular emphasis on semi-supervised learning and reinforcement learning for mission-critical domains.'
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-12' },
        // Featured Publication - Static content
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center' },
            React.createElement('i', { className: 'fas fa-file-alt text-blue-500 mr-3' }),
            'Building Semi-Supervised Decision Trees with Semi-CART Algorithm'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-2' },
            'A Abedinia, V Seydi'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-4' },
            'International Journal of Machine Learning and Cybernetics 15 (10), 4493-4510, 2024'
          ),
          React.createElement(
            'div',
            { className: 'flex justify-between items-center mb-4' },
            React.createElement(
              'span',
              { className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium' },
              'Citations: 11'
            ),
            React.createElement(
              'span',
              { className: 'text-gray-500 dark:text-gray-400 text-sm' },
              '2024'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'This research introduces a novel approach to decision tree algorithms that effectively leverages both labeled and unlabeled data, resulting in improved classification accuracy in semi-supervised learning contexts.'
          ),
          React.createElement(
            'div',
            { className: 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end' },
            React.createElement(
              'a',
              {
                href: 'https://link.springer.com/article/10.1007/s13042-024-02161-z',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm font-medium'
              },
              'Read Paper ',
              React.createElement('i', { className: 'fas fa-external-link-alt ml-1' })
            )
          )
        ),
        // Second publication
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center' },
            React.createElement('i', { className: 'fas fa-file-alt text-blue-500 mr-3' }),
            'Enhancing Classification with Semi-Supervised Deep Learning Using Distance-Based Sample Weights'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-2' },
            'A Abedinia, S Tabakhi, V Seydi'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-500 dark:text-gray-400 text-sm mb-4' },
            '10th International Conference on Machine Learning Technologies (ICMLT 2025), Helsinki, Finland'
          ),
          React.createElement(
            'div',
            { className: 'flex justify-between items-center mb-4' },
            React.createElement(
              'span',
              { className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium' },
              'Accepted for oral presentation'
            ),
            React.createElement(
              'span',
              { className: 'text-gray-500 dark:text-gray-400 text-sm' },
              '2025'
            )
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'This research introduces novel distance-based weighting techniques for enhancing deep learning models in semi-supervised contexts, improving classification accuracy with limited labeled data.'
          )
        ),
        // Research interests section
        React.createElement(
          'div',
          { className: 'col-span-full bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center' },
            React.createElement('i', { className: 'fas fa-flask text-blue-500 mr-3' }),
            'Research Interests'
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300 mb-4' },
            'My research focuses on developing interpretable, uncertainty-aware algorithms that learn effectively from scarce or weak labels. I also seek to integrate reinforcement learning with causal inference to guarantee robust decision-making under distributional shift.'
          ),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mt-6' },
            React.createElement(
              'div',
              { className: 'bg-gray-50 dark:bg-gray-800 p-4 rounded-lg' },
              React.createElement(
                'h4',
                { className: 'font-semibold text-gray-900 dark:text-white mb-2' },
                'Semi-Supervised Learning'
              ),
              React.createElement(
                'ul',
                { className: 'list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1' },
                React.createElement('li', null, 'Weighted decision tree algorithms'),
                React.createElement('li', null, 'Distance-based sample weighting'),
                React.createElement('li', null, 'XGBoost optimizations for limited labels')
              )
            ),
            React.createElement(
              'div',
              { className: 'bg-gray-50 dark:bg-gray-800 p-4 rounded-lg' },
              React.createElement(
                'h4',
                { className: 'font-semibold text-gray-900 dark:text-white mb-2' },
                'Neural Networks & Reinforcement Learning'
              ),
              React.createElement(
                'ul',
                { className: 'list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1' },
                React.createElement('li', null, 'Causal reinforcement learning'),
                React.createElement('li', null, 'Semi-supervised DeepLearning'),
                React.createElement('li', null, 'Multi-modal decision making')
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'text-center mt-12' },
        React.createElement(
          'a',
          {
            href: 'https://scholar.google.com/citations?user=B1SRyKwAAAAJ&hl=en',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 hover:bg-blue-700 text-white inline-flex items-center font-medium py-3 px-6 rounded-lg shadow-lg transition-all'
          },
          'View Google Scholar Profile ',
          React.createElement('i', { className: 'fas fa-external-link-alt ml-2' })
        )
      )
    )
  );
};

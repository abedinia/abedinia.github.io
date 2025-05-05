'use strict';

// Projects Section Component
const ProjectsSection = () => {
  // Sample project data (in a real application, this would be fetched from GitHub API)
  const projects = [
    {
      id: 1,
      name: "SemiCART",
      description: "An efficient implementation of the Semi-CART algorithm for weighted decision trees, enhancing prediction accuracy by 12% on UCI benchmarks by utilizing test data weights determined through distance-based methods.",
      technologies: ["Python", "Machine Learning", "Decision Trees", "Semi-Supervised Learning"],
      repoUrl: "https://github.com/WeightedAI/semicart"
    },
    {
      id: 2,
      name: "Rust Decision Tree",
      description: "A high-performance Rust library for building decision trees for classification tasks, cutting training time by 40% on large datasets. Supports both Gini impurity and entropy-based information gain criteria.",
      technologies: ["Rust", "Machine Learning", "Decision Trees", "High Performance"],
      repoUrl: "https://github.com/abedinia/rust_decision_tree"
    },
    {
      "id": 3,
      "name": "GoProxyGet",
      "description": "A command‑line utility in Go for securely downloading files through SOCKS5 proxies, offering effortless proxy handling, customizable settings, and cross‑platform support.",
      "technologies": ["Go", "SOCKS5", "Networking", "Concurrency"],
      "repoUrl": "https://github.com/abedinia/GoProxyGet"
    }
    // {
    //   id: 4,
    //   name: "db_weights",
    //   description: "Provides tools for calculating weights of training records based on their distance from the test set, employing nearest neighbors and various distance measures to facilitate semi-supervised learning.",
    //   technologies: ["Python", "Data Preprocessing", "Distance Metrics", "Semi-Supervised Learning"],
    //   repoUrl: "https://github.com/WeightedAI/db_weights"
    // },
    // {
    //   id: 5,
    //   name: "C-COAT",
    //   description: "Causal Counterfactual-based Observation-Action Transparency for Interpretable Reinforcement Learning, improving decision transparency in RL systems.",
    //   technologies: ["Python", "Reinforcement Learning", "Causal Inference", "Interpretability"],
    //   repoUrl: "https://github.com/abedinia/c-coat"
    // },
    // {
    //   id: 6,
    //   name: "cache_service",
    //   description: "A simple HTTP server built with Rust and Actix-Web, providing both in-memory and Redis caching solutions. It supports Time-To-Live (TTL) management and basic cache operations, designed for high performance.",
    //   technologies: ["Rust", "Caching", "HTTP Server", "Actix-Web"],
    //   repoUrl: "https://github.com/abedinia/cache_service"
    // }
  ];

  // Project Card Component
  const ProjectCard = (project) => {
    return React.createElement(
      'div',
      { 
        className: 'project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover-3d',
        'data-tilt': true,
        'data-tilt-max': '10',
        'data-tilt-scale': '1.05'
      },
      React.createElement(
        'div',
        { className: 'bg-white dark:bg-gray-800 rounded-xl p-6 h-full border-t-4 border-l-4 border-r-0 border-b-0 border-t-blue-500 border-l-yellow-500 dark:border-t-blue-400 dark:border-l-yellow-400 rounded-br-none' },
        React.createElement(
          'div',
          { className: 'flex justify-between items-start mb-4' },
          React.createElement(
            'h3',
            { className: 'text-xl font-bold text-gray-900 dark:text-white dynamic-underline' },
            project.name
          ),
          // Add a floating icon - alternating between blue and yellow based on project ID
          React.createElement(
            'div', 
            { className: 'float' },
            React.createElement('i', { 
              className: `fas fa-code ${project.id % 2 === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-yellow-500 dark:text-yellow-400'} text-xl`
            })
          )
        ),
        React.createElement(
          'p',
          { className: 'text-gray-700 dark:text-gray-300 mb-6 h-24 overflow-hidden' },
          project.description
        ),
        React.createElement(
          'div',
          { className: 'flex flex-wrap gap-2 mb-4' },
          project.technologies.map(tech => (
            React.createElement(
              'span',
              { 
                key: tech,
                className: `px-2.5 py-1.5 ${tech.length % 2 === 0 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'} rounded-full text-xs font-medium transform transition-all hover:scale-110 hover:shadow-md skill-tag`
              },
              tech
            )
          ))
        ),
        React.createElement(
          'a',
          { 
            href: project.repoUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors group mt-4'
          },
          'View on GitHub ',
          React.createElement('i', { 
            className: 'fas fa-external-link-alt ml-1 transform transition-transform group-hover:translate-x-1'
          })
        )
      )
    );
  };

  return React.createElement(
    'section',
    {
      id: 'projects',
      className: 'py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 relative'
    },
    // Background pattern for visual interest
    React.createElement(
      'div', 
      { 
        className: 'absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none',
        style: {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }
      }
    ),
    React.createElement(
      'div',
      { className: 'container mx-auto px-4 relative z-10' },
      React.createElement(
        'div',
        { className: 'text-center mb-20 fade-in' },
        React.createElement(
          'h2',
          { className: 'text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-gradient' },
          'Featured Projects'
        ),
        React.createElement(
          'div',
          { className: 'w-24 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-500 to-indigo-600 dark:from-blue-400 dark:via-yellow-400 dark:to-indigo-400 mx-auto mb-6 rounded-full' }
        ),
        React.createElement(
          'p',
          { className: 'max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 parallax mb-8', 'data-speed': '0.05' },
          // 'Explore some of my open-source projects focused on machine learning, backend development, and distributed systems.'
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        projects.map((project, index) => (
          React.createElement(
            'div',
            { 
              key: project.id,
              className: 'stagger-item transform transition-all duration-500',
              style: {
                animationDelay: `${index * 100}ms`,
                transform: 'translateY(0) scale(1)',
              }
            },
            ProjectCard(project)
          )
        ))
      ),
      React.createElement(
        'div',
        { className: 'text-center mt-12' },
        React.createElement(
          'a',
          { 
            href: 'https://github.com/abedinia',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn bg-gradient-blue-yellow hover:bg-blue-700 text-white inline-flex items-center font-medium py-3 px-6 rounded-lg shadow-lg transition-all'
          },
          'View More on GitHub ',
          React.createElement('i', { className: 'fas fa-arrow-right ml-2' })
        )
      )
    )
  );
};

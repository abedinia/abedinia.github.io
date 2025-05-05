'use strict';

// About Section Component
const AboutSection = () => {
  return React.createElement(
    'section',
    {
      id: 'about',
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
          'About Me'
        ),
        React.createElement(
          'div',
          { className: 'w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto' }
        )
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-12 items-center' },
        // Left Column: Text Content
        React.createElement(
          'div',
          { className: 'fade-in' },
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6' },
            'I am Aydin Abedinia, a Machine Learning Researcher and Distributed Systems Engineer with 7+ years of industry experience implementing scalable AI solutions. My work seamlessly blends academic research with practical industry applications, enabling me to bridge theoretical innovation with real-world impact in artificial intelligence and distributed systems.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6' },
            'At Snapp!, Iran\'s top ride-hailing platform, I engineered and deployed ML systems handling 5M+ daily trips, including a 60-layer MLP that improved ride allocation efficiency by 2%, significantly enhancing platform capacity. My experience building high-performance distributed systems and leading cross-functional teams has prepared me to drive collaborative research initiatives and translate theoretical advances into practical implementations.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-6' },
            'My research focuses on semi-supervised learning and reinforcement learning, with publications in the International Journal of Machine Learning and Cybernetics and the International Conference on Machine Learning Technologies. I developed the ',
            'SemiCART algorithm , which achieved 12% accuracy improvements on UCI benchmarks by extending scikit-learn\'s CART with weighted GINI-Index techniques.'
          ),
          React.createElement(
            'p',
            { className: 'text-lg text-gray-700 dark:text-gray-300 mb-8' },
            'My research interests continue to evolve at the intersection of probabilistic methods and machine learning, with a focus on developing uncertainty-aware algorithms for real-world applications. I am passionate about advancing the field through rigorous research that bridges theoretical insights with practical implementation, particularly in mission-critical domains where reliable decision-making under uncertainty is essential.'
          ),
          React.createElement(
            'div',
            { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6' },
            React.createElement(
              'div',
              { className: 'fade-in' },
              React.createElement(
                'h3',
                { className: 'text-xl font-semibold mb-3 text-gray-900 dark:text-white' },
                'Education'
              ),
              React.createElement(
                'ul',
                { className: 'space-y-4' },
                React.createElement(
                  'li',
                  { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
                  React.createElement(
                    'div',
                    { className: 'font-medium' },
                    '🎓 MSc in Software Engineering, GPA: 3.5/4'
                  ),
                  React.createElement(
                    'div',
                    { className: 'text-sm italic mt-1' },
                    'Thesis: Optimizing the XGBoost Algorithm for Semi-Supervised Datasets'
                  ),
                  React.createElement(
                    'div',
                    { className: 'text-sm italic mt-1' },
                    'Islamic Azad University, South Tehran Branch, Graduated in 2018'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'bg-gray-100 dark:bg-gray-800 p-3 rounded-lg' },
                  React.createElement(
                    'div',
                    { className: 'font-medium' },
                    '🎓 BS in Software Engineering'
                  ),
                  React.createElement(
                    'div',
                    { className: 'text-sm italic mt-1' },
                    'IAU - Kashan, Graduated in 2013'
                  )
                )
              )
            )
          )
        ),
        // Right Column: Skills
        React.createElement(
          'div',
          { className: 'space-y-8 fade-in' },
          React.createElement(
            'h3',
            { className: 'text-2xl font-semibold mb-6 text-gray-900 dark:text-white' },
            'Technical Skills'
          ),
          React.createElement(
            'div',
            { className: 'space-y-4' },
            // Programming Languages
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Languages'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                ['Python', 'Go', 'Rust', 'PHP', 'SQL', 'Bash', 'LaTeX'].map(lang => (
                  React.createElement(
                    'span',
                    { 
                      key: lang,
                      className: 'px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium'
                    },
                    lang
                  )
                ))
              )
            ),
            // Engineering Tools & Frameworks
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Engineering Tools & Frameworks'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                ['Linux', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Ansible', 'AWS', 'Git', 'Redis', 'NATS', 'Kafka', 'RabbitMQ', 'Elastic Stack', 'PostgreSQL', 'MySQL', 'ClickHouse', 'TimescaleDB', 'Prometheus', 'Grafana', 'Jaeger', 'pytest', 'Matplotlib'].map(tool => (
                  React.createElement(
                    'span',
                    { 
                      key: tool,
                      className: 'px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm font-medium'
                    },
                    tool
                  )
                ))
              )
            ),
            // Engineering Expertise
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Engineering Expertise'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                [
                  'Microservices', 'RESTful APIs', 'gRPC', 'GraphQL', 'Distributed Systems', 'Concurrency', 
                  'Event-Driven Architecture', 'Database Optimization', 'High-Traffic Systems',
                  'CI/CD', 'Observability', 'Agile (Scrum)'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium'
                    },
                    area
                  )
                ))
              )
            ),
            // Research & Academic Skills Section
            React.createElement(
              'h3',
              { className: 'text-2xl font-semibold mb-6 mt-12 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-8' },
              'Research & Academic Skills'
            ),
            // Research Tools
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Research Tools'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'Scikit-learn', 'Jupyter', 'Matplotlib'].map(tool => (
                  React.createElement(
                    'span',
                    { 
                      key: tool,
                      className: 'px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium'
                    },
                    tool
                  )
                ))
              )
            ),
            // Research Areas
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Research Areas'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                [
                  'Semi-Supervised Learning', 'Reinforcement Learning', 'Machine Learning', 
                  'Decision Trees', 'Statistical Analysis', 'Uncertainty Quantification',
                  'Deep Learning', 'Large Language Models', 'Causal Inference', 
                  'Transfer Learning', 'AI Ethics', 'Bayesian Deep Learning'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium'
                    },
                    area
                  )
                ))
              )
            ),
            // Academic Skills
            React.createElement(
              'div',
              { className: 'mb-8' },
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Academic Skills'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                [
                  'Scientific Writing', 'Literature Review', 'Research Methodology',
                  'Experiment Design', 'Data Visualization', 'Interdisciplinary Research'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-full text-sm font-medium'
                    },
                    area
                  )
                ))
              )
            ),
            // Languages
            React.createElement(
              'div',
              null,
              React.createElement(
                'h4',
                { className: 'text-xl font-medium mb-4 text-gray-900 dark:text-white' },
                'Languages'
              ),
              React.createElement(
                'div',
                { className: 'flex flex-wrap gap-3' },
                [
                  'English (Fluent - C1)', 'Persian (Native)', 'Turkish (Native)'
                ].map(area => (
                  React.createElement(
                    'span',
                    { 
                      key: area,
                      className: 'px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium'
                    },
                    area
                  )
                ))
              )
            ) 
          )
        )
      )
    )
  );
};

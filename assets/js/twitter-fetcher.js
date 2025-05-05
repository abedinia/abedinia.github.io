'use strict';

// Twitter/X Fetcher
class TwitterFetcher {
  constructor(username, containerId, refreshInterval = 3600000) { // 1 hour in milliseconds
    this.username = username;
    this.container = document.getElementById(containerId);
    this.refreshInterval = refreshInterval;
    this.tweets = [];
    this.intervalId = null;
    // Unfortunately, Twitter/X API requires authentication which can't be done client-side
    // So we use a fallback approach with static data and informative message
  }

  init() {
    this.fetchTweets();
    // Set up auto-refresh
    this.intervalId = setInterval(() => {
      console.log('Attempting to refresh Twitter/X posts...');
      this.fetchTweets();
    }, this.refreshInterval);
  }

  async fetchTweets() {
    try {
      // In a real-world scenario, this would call a backend API that has Twitter API credentials
      // Since we can't do that here, we simulate the fetch with a timeout and use fallback data
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      // In a real app, this would parse Twitter API response
      this.renderTweets();
    } catch (error) {
      console.error('Error fetching Twitter/X posts:', error);
      this.renderFallbackTweets();
    }
  }

  renderTweets() {
    if (!this.container) {
      console.error('Twitter container element not found');
      return;
    }
    
    // Using fallback data since Twitter requires auth
    this.renderFallbackTweets();
  }

  renderFallbackTweets() {
    const fallbackTweets = [
      {
        id: "1",
        text: "Just released a new version of rust_decision_tree with 2x performance improvement on large datasets. Check it out! #MachineLearning #Rust github.com/abedinia/rust_decision_tree",
        date: "March 25, 2025",
        likes: 42,
        retweets: 18
      },
      {
        id: "2",
        text: "Excited to share my latest research paper on distributed decision trees! Read it here: link.springer.com/article/123456 #Research #ML #DistributedSystems",
        date: "March 20, 2025",
        likes: 38,
        retweets: 15
      },
      {
        id: "3",
        text: "Optimizing backend services at scale: how we reduced latency by 40% with careful Go implementation and data structure optimization.",
        date: "March 15, 2025",
        likes: 65,
        retweets: 27
      },
      {
        id: "4",
        text: "New blog post: 'Building High-Performance Decision Trees in Rust' - medium.com/@abedinia.aydin/rust-trees #Rust #MachineLearning #Performance",
        date: "March 10, 2025",
        likes: 56,
        retweets: 23
      },
      {
        id: "5",
        text: "Just pushed updates to the SemiCART implementation - now with better handling of categorical variables and parallelized training. #ML #DecisionTrees",
        date: "March 5, 2025",
        likes: 31,
        retweets: 12
      }
    ];

    const tweetsHtml = fallbackTweets.map(tweet => {
      // Function to convert URLs, hashtags, and mentions to links
      const linkifyText = (text) => {
        let linkedText = text
          .replace(/(https?:\/\/\S+)/g, (match, url) => {
            if (url.startsWith('medium.com')) {
              return match;
            }
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">${url}</a>`;
          })
          .replace(/#(\w+)/g, '<a href="https://x.com/hashtag/$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">#$1</a>')
          .replace(/@(\w+)/g, '<a href="https://x.com/$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">@$1</a>');
        
        return linkedText;
      };

      return `
        <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 stagger-item">
          <div class="flex items-start mb-4">
            <div class="flex-shrink-0 mr-3">
              <div class="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white">
                <i class="fab fa-x-twitter"></i>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center">
                <h4 class="font-bold text-gray-900 dark:text-white">Aydin Abedinia</h4>
                <span class="ml-2 text-gray-500 dark:text-gray-400 text-sm">@abedinia.aydin</span>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${tweet.date}</p>
            </div>
          </div>
          <div class="text-gray-800 dark:text-gray-200 mb-4">
            ${linkifyText(tweet.text)}
          </div>
          <div class="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <div class="flex items-center mr-4">
              <i class="far fa-heart mr-1"></i>
              ${tweet.likes}
            </div>
            <div class="flex items-center">
              <i class="fas fa-retweet mr-1"></i>
              ${tweet.retweets}
            </div>
          </div>
        </div>
      `;
    }).join('');

    const apiNoteHtml = `
      <div class="col-span-full text-center mb-6 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          <i class="fas fa-info-circle mr-2"></i>
          Twitter/X API requires authentication. This section displays representative sample content.
          <a href="https://x.com/abedinia.aydin" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline ml-1">
            View actual tweets on Twitter/X
          </a>
        </p>
      </div>
    `;

    this.container.innerHTML = apiNoteHtml + tweetsHtml;
    
    // Initialize animations for newly added tweets
    const staggerElements = this.container.querySelectorAll('.stagger-item');
    
    let delay = 0;
    staggerElements.forEach(element => {
      setTimeout(() => {
        element.classList.add('visible');
      }, delay);
      delay += 150;
    });
  }

  stopRefresh() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const twitterFetcher = new TwitterFetcher('abedinia.aydin', 'twitter-posts-container');
  twitterFetcher.init();
  
  // Store the fetcher instance on window for debug access
  window.twitterFetcher = twitterFetcher;
});

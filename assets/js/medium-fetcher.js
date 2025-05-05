'use strict';

// Medium Blog Posts Fetcher
class MediumFetcher {
  constructor(username, containerId, refreshInterval = 300000) {
    this.username = username;
    this.container = document.getElementById(containerId);
    this.refreshInterval = refreshInterval; // 5 minutes in milliseconds
    this.posts = [];
    this.intervalId = null;
    this.rssFeedUrl = `https://medium.com/feed/@${username}`;
    this.corsProxyUrl = 'https://api.allorigins.win/raw?url=';
    this.isLoading = false;
    this.isLoaded = false;
  }

  init() {
    // Use lazy loading instead of immediate fetching
    this.setupLazyLoading();
  }

  setupLazyLoading() {
    // Show loading placeholder
    if (this.container) {
      this.container.innerHTML = `
        <div class="text-center py-8">
          <div class="inline-block animate-pulse">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2.5"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-2.5"></div>
            <div class="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full mx-auto"></div>
          </div>
        </div>
      `;
    }

    // Set up intersection observer for lazy loading
    if ('IntersectionObserver' in window && this.container) {
      const options = {
        root: null,
        rootMargin: '200px', // Load before it's visible for smoother experience
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isLoading && !this.isLoaded) {
            this.isLoading = true;
            this.fetchPosts();
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(this.container);
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      // Delay loading to prioritize visible content first
      setTimeout(() => {
        this.fetchPosts();
      }, 800);
    }
  }

  async fetchPosts() {
    try {
      // Show loading state
      if (this.container) {
        this.container.innerHTML = `
          <div class="flex justify-center items-center py-8">
            <div class="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        `;
      }

      const feedUrl = encodeURIComponent(this.rssFeedUrl);
      const response = await fetch(`${this.corsProxyUrl}${feedUrl}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
      }
      
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      this.posts = this.parseRssFeed(xmlDoc);
      this.renderPosts();
      
      // Mark as loaded and set up auto-refresh
      this.isLoaded = true;
      this.isLoading = false;
      
      // Set up auto-refresh only after initial successful load
      this.intervalId = setInterval(() => {
        console.log('Refreshing Medium posts...');
        this.fetchPosts();
      }, this.refreshInterval);
    } catch (error) {
      console.error('Error fetching Medium posts:', error);
      this.renderError(error);
      this.isLoading = false;
    }
  }

  parseRssFeed(xmlDoc) {
    const items = xmlDoc.querySelectorAll('item');
    const posts = [];
    
    items.forEach((item, index) => {
      // Only process the first 5 items
      if (index < 5) {
        const title = item.querySelector('title')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        const pubDate = item.querySelector('pubDate')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        
        // Extract the image from the content if available
        const content = item.querySelector('content\\:encoded')?.textContent || '';
        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
        const imgSrc = imgMatch ? imgMatch[1] : '';
        
        // Format the date
        const date = new Date(pubDate);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        
        // Get a preview of the description (strip HTML tags)
        const div = document.createElement('div');
        div.innerHTML = description;
        const textDescription = div.textContent || div.innerText || '';
        const preview = textDescription.substring(0, 120) + (textDescription.length > 120 ? '...' : '');
        
        posts.push({
          title,
          link,
          pubDate: formattedDate,
          preview,
          imgSrc
        });
      }
    });
    
    return posts;
  }

  renderPosts() {
    if (!this.container) return;
    
    if (this.posts.length === 0) {
      this.container.innerHTML = '<div class="text-center py-8 text-gray-500 dark:text-gray-400">No blog posts found</div>';
      return;
    }
    
    const postsHtml = this.posts.map(post => `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
        <h3 class="text-lg font-semibold mb-2">
          <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
            ${post.title}
          </a>
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">${post.preview}</p>
        <div class="flex justify-between items-center mt-2">
          <span class="text-sm text-gray-500 dark:text-gray-500">${post.pubDate}</span>
          <span class="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded-full">
            Medium
          </span>
        </div>
      </div>
    `).join('');
    
    this.container.innerHTML = `
      <div class="space-y-4">
        ${postsHtml}
      </div>
    `;
  }

  renderError(error) {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-4 rounded-lg">
        <p class="font-medium">Failed to load Medium blog posts</p>
        <p class="text-sm mt-1">Error: ${error.message}</p>
      </div>
    `;
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const mediumFetcher = new MediumFetcher('abedinia.aydin', 'medium-posts-container');
  mediumFetcher.init();
});

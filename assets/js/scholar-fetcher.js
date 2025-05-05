'use strict';

// Google Scholar Fetcher
class ScholarFetcher {
  constructor(scholarId, containerId, refreshInterval = 30000) { // 30 seconds in milliseconds
    this.scholarId = scholarId;
    this.container = document.getElementById(containerId);
    this.refreshInterval = refreshInterval;
    this.papers = [];
    this.stats = {
      totalCitations: 0,
      hIndex: 0,
      i10Index: 0
    };
    this.intervalId = null;
    
    // Initialize with multiple potential CORS proxies
    this.corsProxies = [
      'https://corsproxy.io/?',
      'https://api.allorigins.win/raw?url=',
      'https://cors-anywhere.herokuapp.com/',
      'https://proxy.cors.sh/'
    ];
    
    this.scholarUrl = `https://scholar.google.com/citations?user=${scholarId}&hl=en`;
    this.isLoading = false;
    this.isLoaded = false;
  }

  init() {
    // Fetch immediately on init rather than waiting for lazy loading
    console.log('Initializing Google Scholar papers fetch immediately...');
    this.fetchPapers();
    
    // Also set up lazy loading as a backup
    this.setupLazyLoading();
  }

  setupLazyLoading() {
    console.log('Setting up lazy loading for Google Scholar papers...');
    
    // Show initial loading placeholder
    if (this.container) {
      this.container.innerHTML = `
        <div class="text-center py-8 scholar-loading-placeholder">
          <div class="inline-block animate-pulse">
            <div class="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-900 mx-auto mb-4"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2.5"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      `;
    }

    // Set up intersection observer for lazy loading
    if ('IntersectionObserver' in window && this.container) {
      const options = {
        root: null,
        rootMargin: '100px', // Start loading when element is 100px from viewport
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isLoading && !this.isLoaded) {
            console.log('Scholar section is visible, loading papers...');
            this.isLoading = true;
            this.fetchPapers();
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(this.container);
      console.log('Intersection Observer set up for Scholar papers');
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      console.log('IntersectionObserver not supported, using setTimeout');
      setTimeout(() => {
        this.fetchPapers();
      }, 1000);
    }
  }

  async fetchPapers() {
    try {
      console.log('Fetching papers from Google Scholar...');
      
      // Show loading state
      if (this.container) {
        const loadingPlaceholder = this.container.querySelector('.scholar-loading-placeholder');
        if (loadingPlaceholder) {
          loadingPlaceholder.innerHTML = `
            <div class="flex justify-center items-center py-8">
              <div class="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          `;
        } else {
          this.container.innerHTML = `
            <div class="flex justify-center items-center py-8">
              <div class="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          `;
        }
      }

      // Mock data from exact Google Scholar HTML
      const mockData = [
        {
          title: 'Building semi-supervised decision trees with semi-cart algorithm',
          url: 'https://link.springer.com/article/10.1007/s13042-024-02161-z',
          authors: 'A Abedinia, V Seydi',
          venue: 'International Journal of Machine Learning and Cybernetics 15 (10), 4493-4510, 2024',
          year: '2024',
          citations: '8'
        }
      ];

      // Try each CORS proxy in sequence
      let htmlText = null;
      let proxySuccess = false;
      
      for (const proxy of this.corsProxies) {
        try {
          console.log(`Trying CORS proxy: ${proxy}`);
          const url = encodeURIComponent(this.scholarUrl);
          const response = await fetch(`${proxy}${url}`);
          
          if (response.ok) {
            htmlText = await response.text();
            proxySuccess = true;
            console.log(`Successfully fetched Google Scholar with proxy: ${proxy}`);
            break;
          }
        } catch (proxyError) {
          console.warn(`CORS proxy failed: ${proxy}`, proxyError);
          // Continue to next proxy
        }
      }
      
      if (!proxySuccess || !htmlText) {
        console.warn('All CORS proxies failed to fetch Google Scholar data');
        // Use mock data instead
        console.log('Using mock data instead');
        this.papers = mockData;
        this.renderPapers();
        
        // Set up auto-refresh even with mock data
        if (!this.intervalId) {
          this.intervalId = setInterval(() => {
            console.log('Retrying Google Scholar papers fetch...');
            this.isLoading = true;
            this.fetchPapers();
          }, this.refreshInterval);
          console.log(`Set up automatic retry every ${this.refreshInterval/1000} seconds`);
        }
        
        this.isLoading = false;
        return;
      }
      
      // Extract data from the HTML
      this.extractStats(htmlText);
      const papers = this.parseScholarHtml(htmlText);
      
      if (papers && papers.length > 0) {
        this.papers = papers;
        console.log(`Successfully parsed ${papers.length} papers from Google Scholar`);
        this.renderPapers();
        this.renderStats();
      } else {
        console.warn('Failed to parse papers from Google Scholar HTML');
        // Keep existing content if we couldn't parse papers
        const loadingPlaceholder = this.container.querySelector('.scholar-loading-placeholder');
        if (loadingPlaceholder) {
          loadingPlaceholder.remove();
        }
      }
      
      // Mark as loaded
      this.isLoaded = true;
      this.isLoading = false;
      
      // Set up auto-refresh only after initial successful load
      if (proxySuccess && !this.intervalId) {
        this.intervalId = setInterval(() => {
          console.log('Refreshing Google Scholar papers...');
          // Don't show loading animation on refresh
          this.isLoading = true;
          this.refreshPapers();
        }, this.refreshInterval);
        console.log(`Set up automatic refresh every ${this.refreshInterval/1000} seconds`);
      }
    } catch (error) {
      console.error('Error fetching Google Scholar papers:', error);
      this.isLoading = false;
      // Remove loading placeholder if present
      const loadingPlaceholder = this.container.querySelector('.scholar-loading-placeholder');
      if (loadingPlaceholder) {
        loadingPlaceholder.remove();
      }
    }
  }
  
  // Silent refresh without UI changes
  async refreshPapers() {
    try {
      let htmlText = null;
      let proxySuccess = false;
      
      for (const proxy of this.corsProxies) {
        try {
          const url = encodeURIComponent(this.scholarUrl);
          const response = await fetch(`${proxy}${url}`);
          
          if (response.ok) {
            htmlText = await response.text();
            proxySuccess = true;
            break;
          }
        } catch (proxyError) {
          // Continue to next proxy
        }
      }
      
      if (proxySuccess && htmlText) {
        this.extractStats(htmlText);
        const newPapers = this.parseScholarHtml(htmlText);
        
        if (newPapers && newPapers.length > 0) {
          this.papers = newPapers;
          this.renderPapers();
          this.renderStats();
          console.log('Successfully refreshed papers from Google Scholar');
        }
      }
    } catch (error) {
      console.error('Error refreshing Google Scholar papers:', error);
    } finally {
      this.isLoading = false;
    }
  }

  parseScholarHtml(html) {
    console.log('Parsing Google Scholar HTML...');
    
    // Create a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Find all paper entries using the structure from the user's example
    const paperElements = doc.querySelectorAll('#gsc_a_b .gsc_a_tr');
    const papers = [];
    
    if (!paperElements || paperElements.length === 0) {
      console.warn('No paper elements found in HTML');
      // Try alternative selector that might work with different HTML structure
      const altPaperElements = doc.querySelectorAll('.gsc_a_tr');
      if (!altPaperElements || altPaperElements.length === 0) {
        console.warn('Alternative selector also found no papers');
        return papers;
      }
      
      console.log(`Found ${altPaperElements.length} papers using alternative selector`);
      
      for (let i = 0; i < Math.min(altPaperElements.length, 5); i++) {
        const paperEl = altPaperElements[i];
        const titleEl = paperEl.querySelector('.gsc_a_t a');
        const authorsEl = paperEl.querySelector('.gsc_a_t .gs_gray:nth-child(1)');
        const venueEl = paperEl.querySelector('.gsc_a_t .gs_gray:nth-child(2)');
        const yearEl = paperEl.querySelector('.gsc_a_y span');
        const citationsEl = paperEl.querySelector('.gsc_a_c a');
        
        if (titleEl) {
          let paperUrl = titleEl.getAttribute('href');
          
          // Fix relative URLs
          if (paperUrl && paperUrl.startsWith('/')) {
            paperUrl = 'https://scholar.google.com' + paperUrl;
          }
          
          papers.push({
            title: titleEl.textContent.trim(),
            url: paperUrl,
            authors: authorsEl ? authorsEl.textContent.trim() : '',
            venue: venueEl ? venueEl.textContent.trim() : '',
            year: yearEl ? yearEl.textContent.trim() : '',
            citations: citationsEl ? (citationsEl.textContent.trim() || '0') : '0'
          });
        }
      }
      
      return papers;
    }
    
    console.log(`Found ${paperElements.length} papers`);
    
    for (let i = 0; i < Math.min(paperElements.length, 5); i++) {
      const paperEl = paperElements[i];
      const titleEl = paperEl.querySelector('.gsc_a_t a');
      const authorsEl = paperEl.querySelector('.gsc_a_t .gs_gray:nth-child(1)');
      const venueEl = paperEl.querySelector('.gsc_a_t .gs_gray:nth-child(2)');
      const yearEl = paperEl.querySelector('.gsc_a_y span');
      const citationsEl = paperEl.querySelector('.gsc_a_c a');
      
      if (titleEl) {
        let paperUrl = titleEl.getAttribute('href');
        
        // Fix relative URLs
        if (paperUrl && paperUrl.startsWith('/')) {
          paperUrl = 'https://scholar.google.com' + paperUrl;
        }
        
        papers.push({
          title: titleEl.textContent.trim(),
          url: paperUrl,
          authors: authorsEl ? authorsEl.textContent.trim() : '',
          venue: venueEl ? venueEl.textContent.trim() : '',
          year: yearEl ? yearEl.textContent.trim() : '',
          citations: citationsEl ? (citationsEl.textContent.trim() || '0') : '0'
        });
      }
    }
    
    return papers;
  }

  renderPapers() {
    if (!this.container || !this.papers || this.papers.length === 0) {
      console.log('No papers to render or container not found');
      return;
    }
    
    console.log(`Rendering ${this.papers.length} papers to the container`);
    
    // Create a document fragment to hold the new content
    const fragment = document.createDocumentFragment();
    
    // Preserve any existing static content if it represents the first paper
    // Look for the static publication that might exist
    const existingContent = Array.from(this.container.children).filter(el => 
      !el.classList.contains('scholar-loading-placeholder')
    );
    
    if (existingContent.length > 0) {
      console.log('Preserving existing static content');
      // Clear the container except for loading placeholders
      const loadingPlaceholder = this.container.querySelector('.scholar-loading-placeholder');
      if (loadingPlaceholder) {
        loadingPlaceholder.remove();
      }
    } else {
      // Clear the container completely
      this.container.innerHTML = '';
    }
    
    // Add dynamic papers
    this.papers.forEach(paper => {
      const paperEl = document.createElement('div');
      paperEl.className = 'bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 fade-in mb-6';
      
      if (paper.title.toLowerCase().includes('semi-cart') || 
          paper.title.toLowerCase().includes('semi-supervised decision trees')) {
        paperEl.classList.add('col-span-full');
      }
      
      const titleEl = document.createElement('h3');
      titleEl.className = 'text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center';
      
      const iconEl = document.createElement('i');
      iconEl.className = 'fas fa-file-alt text-blue-500 mr-3';
      titleEl.appendChild(iconEl);
      
      const titleLink = document.createElement('a');
      titleLink.href = paper.url;
      titleLink.target = '_blank';
      titleLink.rel = 'noopener noreferrer';
      titleLink.className = 'hover:text-blue-600 dark:hover:text-blue-400';
      titleLink.textContent = paper.title;
      titleEl.appendChild(titleLink);
      
      const metaEl = document.createElement('p');
      metaEl.className = 'text-gray-500 dark:text-gray-400 text-sm mb-4';
      metaEl.textContent = paper.venue ? `${paper.venue}` : '';
      
      const authorsEl = document.createElement('p');
      authorsEl.className = 'text-gray-700 dark:text-gray-300 mb-4';
      authorsEl.textContent = paper.authors;
      
      const bottomRow = document.createElement('div');
      bottomRow.className = 'flex justify-between items-center';
      
      const yearEl = document.createElement('span');
      yearEl.className = 'text-gray-500 dark:text-gray-400 text-sm';
      yearEl.textContent = paper.year;
      
      const citationsEl = document.createElement('span');
      citationsEl.className = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium';
      citationsEl.textContent = `Citations: ${paper.citations}`;
      
      bottomRow.appendChild(yearEl);
      bottomRow.appendChild(citationsEl);
      
      paperEl.appendChild(titleEl);
      paperEl.appendChild(metaEl);
      paperEl.appendChild(authorsEl);
      paperEl.appendChild(bottomRow);
      
      // Check if this paper already exists in the container
      const existingPaper = Array.from(this.container.querySelectorAll('h3')).find(
        h3 => h3.textContent.trim() === paper.title.trim()
      );
      
      if (!existingPaper) {
        fragment.appendChild(paperEl);
      }
    });
    
    // Add the fragment to the container
    this.container.appendChild(fragment);
  }

  renderStats() {
    const statsContainer = document.getElementById('scholar-stats-container');
    if (!statsContainer) return;
    
    statsContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">${this.stats.totalCitations}</div>
          <div class="text-gray-700 dark:text-gray-300 text-sm">Total Citations</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">${this.stats.hIndex}</div>
          <div class="text-gray-700 dark:text-gray-300 text-sm">h-index</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">${this.stats.i10Index}</div>
          <div class="text-gray-700 dark:text-gray-300 text-sm">i10-index</div>
        </div>
      </div>
    `;
  }

  renderError(error) {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-4 rounded-lg">
        <p class="font-medium">Failed to load Google Scholar papers</p>
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
  const scholarFetcher = new ScholarFetcher('B1SRyKwAAAAJ', 'scholar-papers-container');
  scholarFetcher.init();
});

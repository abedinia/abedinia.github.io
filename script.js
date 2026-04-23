// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
const htmlEl = document.documentElement;
const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');

function applyTheme(theme) {
  if (theme === 'dark') {
    htmlEl.classList.add('dark');
    themeIconLight.classList.add('hidden');
    themeIconDark.classList.remove('hidden');
  } else {
    htmlEl.classList.remove('dark');
    themeIconLight.classList.remove('hidden');
    themeIconDark.classList.add('hidden');
  }
  localStorage.setItem('theme', theme);
}

// Initial Load
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (systemDark ? 'dark' : 'light'));

function toggleTheme() {
  const currentTheme = htmlEl.classList.contains('dark') ? 'dark' : 'light';
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

themeToggleBtn.addEventListener('click', toggleTheme);
mobileThemeToggleBtn.addEventListener('click', toggleTheme);

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    mobileMenu.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  } else {
    mobileMenu.classList.remove('hidden');
    menuIconOpen.classList.add('hidden');
    menuIconClose.classList.remove('hidden');
  }
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  });
});

// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
window.addEventListener('mousemove', (e) => {
  if (window.innerWidth >= 1024) {
    cursorDot.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  }
});

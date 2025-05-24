/*
Hide header on scroll down & show on scroll up
*/

const header = document.getElementById('header');
let lastPos = document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  const currPos = document.documentElement.scrollTop;

  if (currPos > lastPos) {
    if (currPos > header.offsetHeight) {
      header.classList.add('-translate-y-full');
      header.classList.remove('shadow-md');
    }
  } else {
    header.classList.remove('-translate-y-full');
    header.classList.add('shadow-md');
  }

  lastPos = currPos;
}, false);

/*
Toggle the menu when pressed on hamburger button
Only on mobile devices
*/

const menu = document.getElementById('menu');
const searchBox = document.getElementById('search');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  searchBox.classList.toggle('hidden');
}, false);

/*
Lazy load images
*/

const lazyImages = document.getElementsByClassName('lazy');

document.addEventListener('DOMContentLoaded', () => {
  [...lazyImages].forEach((elem) => {
    const originalImage = elem.dataset.src;

    elem.setAttribute('src', originalImage);
    elem.removeAttribute('data-src');
  });
}, false);


// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to 'dark'
    function getTheme() {
        if (typeof(Storage) !== "undefined") {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    }

    // Save theme preference
    function setTheme(theme) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('theme', theme);
        }
    }

    // Apply theme to HTML element and update icons
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        } else {
            htmlElement.classList.remove('dark');
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
        }
    }

    // Initialize theme on page load
    const currentTheme = getTheme();
    applyTheme(currentTheme);

    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        setTheme(newTheme);
        applyTheme(newTheme);
    });

    // Listen for system theme changes (optional)
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only apply system preference if no saved preference exists
        if (!localStorage.getItem('theme')) {
            const systemTheme = mediaQuery.matches ? 'dark' : 'light';
            applyTheme(systemTheme);
        }

        // Listen for changes in system preference
        mediaQuery.addEventListener('change', function(e) {
            // Only apply if no saved preference exists
            if (!localStorage.getItem('theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                applyTheme(systemTheme);
            }
        });
    }
});
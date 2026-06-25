/* ===================================
   CloudSentinel Technologies
   Main JavaScript File — PATCHED VERSION
   
   INSTRUCTIONS:
   This file REPLACES your existing js/main.js entirely.
   Changes from original:
   - Added initDarkMode() to DOMContentLoaded
   - Added initDarkMode() function (bottom of file)
   - Added initFAQ() for contact page accordion
   - All other functions unchanged
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initNavigation();
  initScrollReveal();
  initSmoothScroll();
  initCounterAnimation();
  initContactForm();
  initDarkMode();    /* ← NEW */
  initFAQ();         /* ← NEW */
});

/* ===================================
   Navigation
   =================================== */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll handler for navbar styling
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      if (navOverlay) {
        navOverlay.classList.toggle('active');
      }
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close menu on overlay click
  if (navOverlay) {
    navOverlay.addEventListener('click', function() {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close menu on link click (mobile)
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 968) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        if (navOverlay) {
          navOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
      }
    });
  });

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ===================================
   Scroll Reveal Animation
   =================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  function reveal() {
    revealElements.forEach(function(element) {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal(); // Check initial state
}

/* ===================================
   Smooth Scroll
   =================================== */
function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ===================================
   Counter Animation
   =================================== */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  
  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(easeOutQuart * target);
          
          counter.textContent = current + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(function(counter) {
    observer.observe(counter);
  });
}

/* ===================================
   Contact Form Validation
   =================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const formGroups = form.querySelectorAll('.form-group');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;

    // Clear previous errors
    formGroups.forEach(function(group) {
      group.classList.remove('error');
    });

    // Validate name
    const nameInput = form.querySelector('#name');
    if (nameInput && nameInput.value.trim() === '') {
      showError(nameInput, 'Please enter your name');
      isValid = false;
    }

    // Validate email
    const emailInput = form.querySelector('#email');
    if (emailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Please enter your email');
        isValid = false;
      } else if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }
    }

    // Validate phone (optional but format check if provided)
    const phoneInput = form.querySelector('#phone');
    if (phoneInput && phoneInput.value.trim() !== '') {
      const phoneRegex = /^[\d\s+()-]+$/;
      if (!phoneRegex.test(phoneInput.value)) {
        showError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
      }
    }

    // Validate service selection
    const serviceSelect = form.querySelector('#service');
    if (serviceSelect && serviceSelect.value === '') {
      showError(serviceSelect, 'Please select a service');
      isValid = false;
    }

    // Validate message
    const messageInput = form.querySelector('#message');
    if (messageInput && messageInput.value.trim() === '') {
      showError(messageInput, 'Please enter your message');
      isValid = false;
    }

    if (isValid) {
      // Show success message
      showFormSuccess();
    }
  });

  // Real-time validation on blur
  formGroups.forEach(function(group) {
    const input = group.querySelector('input, select, textarea');
    if (input) {
      input.addEventListener('blur', function() {
        validateField(this);
      });

      input.addEventListener('input', function() {
        group.classList.remove('error');
      });
    }
  });

  function showError(input, message) {
    const group = input.closest('.form-group');
    const errorElement = group.querySelector('.form-error');
    group.classList.add('error');
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function validateField(input) {
    const group = input.closest('.form-group');
    const type = input.type || input.tagName.toLowerCase();

    if (input.hasAttribute('required') && input.value.trim() === '') {
      group.classList.add('error');
      return false;
    }

    if (type === 'email' && input.value.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        group.classList.add('error');
        return false;
      }
    }

    group.classList.remove('error');
    return true;
  }

  function showFormSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <div style="background: var(--success); color: white; padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin-bottom: 1rem;">
        <svg style="width: 48px; height: 48px; margin-bottom: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h3 style="margin-bottom: 0.5rem; color: white;">Message Sent Successfully!</h3>
        <p style="margin: 0; opacity: 0.9;">Thank you for contacting CloudSentinel Technologies. We will get back to you shortly.</p>
      </div>
    `;

    form.innerHTML = '';
    form.appendChild(successMessage);
  }
}

/* ===================================
   FAQ Accordion (contact page)
   =================================== */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length === 0) return;

  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(function(i) { i.classList.remove('active'); });

      // Open clicked if it wasn't already open
      if (!isActive) { item.classList.add('active'); }
    });
  });
}

/* ===================================
   Dark Mode — Night Mode Toggle
   =================================== */
function initDarkMode() {
  const html = document.documentElement;
  const STORAGE_KEY = 'cs-theme';

  /* --- Build the sun/moon toggle button --- */
  const btn = document.createElement('button');
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.innerHTML = `
    <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  `;

  /* --- Insert button before the hamburger toggle --- */
  const navbarContainer = document.querySelector('.navbar .container');
  const navToggle = document.querySelector('.nav-toggle');
  if (navbarContainer && navToggle) {
    navbarContainer.insertBefore(btn, navToggle);
  }

  /* --- Apply saved or system preference on load --- */
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }

  /* --- Toggle on click --- */
  btn.addEventListener('click', function() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem(STORAGE_KEY, 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem(STORAGE_KEY, 'dark');
    }
  });

  /* --- Sync across tabs --- */
  window.addEventListener('storage', function(e) {
    if (e.key === STORAGE_KEY) {
      if (e.newValue === 'dark') {
        html.setAttribute('data-theme', 'dark');
      } else {
        html.removeAttribute('data-theme');
      }
    }
  });
}

/* ===================================
   Utility Functions
   =================================== */

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function() {
        inThrottle = false;
      }, limit);
    }
  };
}

// Debounce function
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

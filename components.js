// ═══════════════════════════════════════════════════════════════════════════
// Swetang Gajjar — Portfolio Components
// Shared Header & Footer Dynamic Injection
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Inject Header
  const globalHeader = document.getElementById('global-header');
  if (globalHeader) {
    globalHeader.className = 'header';
    globalHeader.setAttribute('role', 'banner');
    globalHeader.innerHTML = `
      <nav class="nav container" aria-label="Primary">
        <a href="index.html" class="logo" aria-label="Home">
          <svg class="logo-symbol" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="var(--accent)" />
                <stop offset="100%" stop-color="var(--accent-2)" />
              </linearGradient>
            </defs>
            <path d="M6 10L16 4L26 10V22L16 28L6 22V10Z" stroke="url(#logo-grad)" stroke-width="2" stroke-linejoin="round" fill="none"/>
            <path d="M16 4V16L26 22M16 16L6 22" stroke="url(#logo-grad)" stroke-width="1.5" stroke-linejoin="round"/>
            <circle cx="16" cy="16" r="3" fill="var(--accent)" />
            <circle cx="16" cy="4" r="2" fill="var(--accent-2)" />
            <circle cx="6" cy="10" r="2" fill="var(--accent-2)" />
            <circle cx="26" cy="10" r="2" fill="var(--accent-2)" />
            <circle cx="6" cy="22" r="2" fill="var(--accent-2)" />
            <circle cx="26" cy="22" r="2" fill="var(--accent-2)" />
            <circle cx="16" cy="28" r="2" fill="var(--accent-2)" />
          </svg>
          <span class="logo-text">Swetang Portfolio</span>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="index.html" class="nav-link-item" id="nav-home">Home</a>
          <a href="about.html" class="nav-link-item" id="nav-about">About</a>
          <a href="experience.html" class="nav-link-item" id="nav-experience">Experience</a>
          <a href="projects.html" class="nav-link-item" id="nav-projects">Projects</a>
          <a href="research.html" class="nav-link-item" id="nav-research">Research</a>
          <a href="contact.html" class="nav-link-item" id="nav-contact">Contact</a>
        </div>
        <a href="mailto:gajjarswetang@gmail.com" class="btn btn-primary btn-sm magnetic">
          <span>Let's talk</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </nav>
    `;
  }

  // Inject Footer
  const globalFooter = document.getElementById('global-footer');
  if (globalFooter) {
    globalFooter.className = 'footer';
    globalFooter.innerHTML = `
      <div class="container">
        <div class="footer-content">
          <span class="footer-text">© 2026 Swetang Gajjar · Built with care in Ahmedabad</span>
          <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="experience.html">Experience</a>
            <a href="projects.html">Projects</a>
            <a href="research.html">Research</a>
            <a href="contact.html">Contact</a>
            <a href="#top" style="margin-left: 16px;">Back to top ↑</a>
          </div>
        </div>
      </div>
    `;
  }

  // Highlight active link based on current path
  const path = window.location.pathname;
  const pageName = path.split('/').pop() || 'index.html';
  
  let activeId = 'nav-home';
  if (pageName.includes('about')) activeId = 'nav-about';
  else if (pageName.includes('experience')) activeId = 'nav-experience';
  else if (pageName.includes('project')) activeId = 'nav-projects';
  else if (pageName.includes('research')) activeId = 'nav-research';
  else if (pageName.includes('contact')) activeId = 'nav-contact';
  
  const activeLink = document.getElementById(activeId);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Bind Mobile Nav Toggle after injection
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('open'); // add open class to animate hamburger lines!
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
  }

  // Reinforce Magnetic Elements after injection
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = el.classList.contains('btn') ? 0.18 : 0.12;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
});

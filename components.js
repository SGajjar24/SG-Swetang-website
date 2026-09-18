// ═══════════════════════════════════════════════════════════════════════════
// Swetang Gajjar — Portfolio Components
// Shared Header, Footer, Mobile Navigation & "Let's Talk" Interactive Modal
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // ── 1. Inject Header ──────────────────────────────────────────────────────
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
          <div class="mobile-nav-header" aria-hidden="true">
            <span class="mobile-nav-badge">Navigation</span>
          </div>

          <a href="index.html" class="nav-link-item" id="nav-home">
            <span>Home</span>
            <svg class="nav-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12l4-4-4-4"/></svg>
          </a>
          <a href="about.html" class="nav-link-item" id="nav-about">
            <span>About</span>
            <svg class="nav-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12l4-4-4-4"/></svg>
          </a>
          <a href="experience.html" class="nav-link-item" id="nav-experience">
            <span>Experience</span>
            <svg class="nav-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12l4-4-4-4"/></svg>
          </a>
          <a href="projects.html" class="nav-link-item" id="nav-projects">
            <span>Projects</span>
            <svg class="nav-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12l4-4-4-4"/></svg>
          </a>
          <a href="research.html" class="nav-link-item" id="nav-research">
            <span>Research</span>
            <svg class="nav-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12l4-4-4-4"/></svg>
          </a>
          <a href="contact.html" class="nav-link-item" id="nav-contact">
            <span>Contact</span>
            <svg class="nav-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 12l4-4-4-4"/></svg>
          </a>

          <div class="mobile-nav-footer">
            <button class="btn btn-primary mobile-talk-btn" id="mobile-talk-btn" type="button">
              <span>Let's talk</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </button>
            <div class="mobile-social-row">
              <a href="https://github.com/SGajjar24" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/gajjarswetang" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:gajjarswetang@gmail.com" aria-label="Direct Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>

        <button class="btn btn-primary btn-sm magnetic header-talk-btn" id="header-talk-btn" type="button" aria-haspopup="dialog" aria-expanded="false">
          <span>Let's talk</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </button>

        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div class="nav-backdrop" id="nav-backdrop" aria-hidden="true"></div>
    `;
  }

  // ── 2. Inject Footer ──────────────────────────────────────────────────────
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

  // ── 3. Inject "Let's Talk" Modal ──────────────────────────────────────────
  if (!document.getElementById('talk-modal')) {
    const modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
      <div id="talk-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="talk-modal-title" hidden>
        <div class="modal-backdrop" id="modal-backdrop"></div>
        <div class="modal-card">
          <button class="modal-close" id="modal-close-btn" aria-label="Close dialog" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          
          <div class="modal-header">
            <div class="modal-badge"><span class="pulse-dot"></span> Available for immediate opportunities</div>
            <h3 id="talk-modal-title" class="modal-title">Let's build reliable AI together</h3>
            <p class="modal-desc">I specialize in applied AI evaluation, RAG architecture, and production systems reliability. Connect with me directly through any channel below:</p>
          </div>

          <!-- 1-Click Copy Email Box -->
          <div class="modal-copy-box">
            <div class="copy-box-left">
              <span class="copy-box-label">DIRECT EMAIL</span>
              <span class="copy-box-email" id="modal-email-val">gajjarswetang@gmail.com</span>
            </div>
            <button class="btn btn-primary btn-sm copy-btn" id="modal-copy-email-btn" type="button">
              <svg class="copy-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span id="copy-btn-text">Copy Email</span>
            </button>
          </div>
          
          <!-- Fast Action Channels -->
          <div class="modal-actions-grid">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gajjarswetang@gmail.com&su=Applied%20AI%20Engineering%20Inquiry%20%E2%80%94%20Swetang%20Gajjar" target="_blank" rel="noreferrer" class="modal-action-card">
              <div class="modal-action-icon gmail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </div>
              <div class="modal-action-info">
                <div class="modal-action-title">Open in Gmail</div>
                <div class="modal-action-sub">Webmail compose window</div>
              </div>
              <svg class="modal-action-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>

            <a href="mailto:gajjarswetang@gmail.com?subject=Applied%20AI%20Engineering%20Inquiry%20%E2%80%94%20Swetang%20Gajjar" class="modal-action-card">
              <div class="modal-action-icon mail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="modal-action-info">
                <div class="modal-action-title">Default Mail App</div>
                <div class="modal-action-sub">Apple Mail, Outlook, client</div>
              </div>
              <svg class="modal-action-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>

            <a href="https://www.linkedin.com/in/gajjarswetang" target="_blank" rel="noreferrer" class="modal-action-card">
              <div class="modal-action-icon linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div class="modal-action-info">
                <div class="modal-action-title">Message on LinkedIn</div>
                <div class="modal-action-sub">linkedin.com/in/gajjarswetang</div>
              </div>
              <svg class="modal-action-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>

            <a href="contact.html" class="modal-action-card">
              <div class="modal-action-icon visa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div class="modal-action-info">
                <div class="modal-action-title">Hiring &amp; Visa Details</div>
                <div class="modal-action-sub">Prior H-1B Cap-Exempt &amp; Global info</div>
              </div>
              <svg class="modal-action-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>

          <div class="modal-footer-note">
            <span>Prior US H-1B Cap-Exempt status preserved (no lottery required) · Global relocation ready</span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalWrap);
  }

  // ── 4. Highlight active link based on current path ─────────────────────────
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

  // ── 5. Bind Mobile Nav Toggle & Backdrop ───────────────────────────────────
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navBackdrop = document.getElementById('nav-backdrop');

  const closeMenu = () => {
    if (navLinks) navLinks.classList.remove('open');
    if (mobileToggle) {
      mobileToggle.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'Open navigation');
    }
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
  };

  const openMenu = () => {
    if (navLinks) navLinks.classList.add('open');
    if (mobileToggle) {
      mobileToggle.classList.add('open');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.setAttribute('aria-label', 'Close navigation');
    }
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.classList.add('mobile-menu-open');
  };

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on navigation link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on backdrop tap
    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMenu);
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // ── 6. "Let's Talk" Modal Logic ───────────────────────────────────────────
  const talkModal = document.getElementById('talk-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const copyBtn = document.getElementById('modal-copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');

  const openTalkModal = () => {
    closeMenu(); // ensure mobile menu closes
    if (talkModal) {
      talkModal.removeAttribute('hidden');
      document.body.classList.add('modal-open');
      const headerBtn = document.getElementById('header-talk-btn');
      if (headerBtn) headerBtn.setAttribute('aria-expanded', 'true');
      if (modalCloseBtn) modalCloseBtn.focus();
    }
  };

  const closeTalkModal = () => {
    if (talkModal) {
      talkModal.setAttribute('hidden', '');
      document.body.classList.remove('modal-open');
      const headerBtn = document.getElementById('header-talk-btn');
      if (headerBtn) headerBtn.setAttribute('aria-expanded', 'false');
    }
  };

  // Bind trigger buttons
  const headerTalkBtn = document.getElementById('header-talk-btn');
  const mobileTalkBtn = document.getElementById('mobile-talk-btn');
  if (headerTalkBtn) headerTalkBtn.addEventListener('click', openTalkModal);
  if (mobileTalkBtn) mobileTalkBtn.addEventListener('click', openTalkModal);

  // Close handlers
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeTalkModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeTalkModal);

  // Global Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (talkModal && !talkModal.hasAttribute('hidden')) {
        closeTalkModal();
      } else if (navLinks && navLinks.classList.contains('open')) {
        closeMenu();
      }
    }
  });

  // Copy Email Functionality
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'gajjarswetang@gmail.com';
      let copied = false;
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          copied = document.execCommand('copy');
        } catch (e) {
          copied = false;
        }
        document.body.removeChild(textarea);
      }

      if (copied) {
        copyBtn.classList.add('copied');
        if (copyBtnText) copyBtnText.textContent = '✓ Copied!';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          if (copyBtnText) copyBtnText.textContent = 'Copy Email';
        }, 2200);
      }
    });
  }

  // ── 7. Reinforce Magnetic Elements after injection ────────────────────────
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

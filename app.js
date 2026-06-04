// ═══════════════════════════════════════════════════════════════════════════
// Swetang Gajjar — Portfolio v2.0
// Interactivity layer: cursor, scroll progress, magnetic buttons,
// counter animation, scroll reveal, active nav, smooth scroll
// ═══════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // Custom cursor logic removed to restore standard browser cursor.

  // ─── Scroll progress bar ───────────────────────────────────────────
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }



  // ─── Animated counters ─────────────────────────────────────────────
  const counters = document.querySelectorAll('[data-counter]');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  };

  if (counters.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => counterObserver.observe(c));
  }

  // Mobile nav and active section highlighting are now handled in components.js for multi-page support.

  // ─── Magnetic buttons (subtle effect on desktop only) ───────────────
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

  // ─── Scroll reveal (IntersectionObserver) ──────────────────────────
  const revealTargets = document.querySelectorAll('[data-reveal]');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.revealDelay || '0', 10);
            setTimeout(() => entry.target.classList.add('revealed'), delay);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  // ─── Subtle parallax on hero grid background ──────────────────────
  const heroGrid = document.querySelector('.hero-grid-bg');
  if (heroGrid) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY * 0.3;
          heroGrid.style.transform = `translateY(${y}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ─── Manifesto Quote Slider ───────────────────────────────────────
  const slides = document.querySelectorAll('.manifesto-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  if (slides.length && dots.length) {
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
    };

    const nextSlide = () => {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    };

    const startInterval = () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 6000); // 6 seconds auto-play
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        startInterval(); // reset timer on user click
      });
    });

    // Start auto-play
    startInterval();
  }

  // ─── Console signature (optional flavor) ───────────────────────────
  const style = 'background:linear-gradient(135deg,#f59e0b,#3b82f6);color:#000;padding:6px 12px;border-radius:6px;font-family:monospace;font-weight:600';
  console.log('%cSG · Applied AI Engineer', style);
  console.log('Looking for an engineer who can build AND evaluate production AI? Let\'s talk.');
  console.log('gajjarswetang@gmail.com');
})();

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll([
  '.hero-eyebrow', '.hero h1', '.hero-subtitle', '.hero-buttons',
  '.section-heading', '.eyebrow',
  '.card', '.card--link',
  '.poem-card', '.quote-banner',
  '.welcome-text', '.welcome-text h2', '.welcome-text p', '.welcome-text .btn',
  '.welcome-image', '.welcome-image img',
  '.about-strip .text-col', '.about-strip .image-col',
  '.page-hero h1', '.page-hero p', '.page-hero .eyebrow',
  '.cta-peacock h2', '.cta-peacock p', '.cta-peacock .btn',
  '.cta-banner h2', '.cta-banner p', '.cta-banner .btn',
  '.therapist-card',
  '.bio-header', '.bio-content', '.bio-sidebar',
  '.contact-form', '.contact-info',
  '.group-card',
  '.poem-card', '.poems-grid',
  '.values-list', '.btn',
  'section img', '.about-strip img'
].join(',')).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Stagger delays for card groups
['.cards-grid .card', '.poems-grid .poem-card', '.group-cards .group-card'].forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.12}s`;
  });
});

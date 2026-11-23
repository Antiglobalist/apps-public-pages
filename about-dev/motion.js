(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('has-js');

  // An inline disclosure menu keeps the rest of the page available to keyboards.
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const mobile = window.matchMedia('(max-width: 600px)');
  if (menu && nav) {
    const label = menu.querySelector('.menu-label');
    const openLabel = menu.getAttribute('aria-label');
    const openText = label.textContent;
    menu.hidden = false;
    const setMenu = (open) => {
      nav.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? menu.dataset.closeLabel : openLabel);
      label.textContent = open ? menu.dataset.closeText : openText;
    };
    setMenu(false);
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link || !mobile.matches) return;
      setMenu(false);
      // After the menu collapses, move keyboard focus to the requested section.
      if (link.hash && link.origin === location.origin) {
        const target = document.querySelector(link.hash);
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      } else {
        menu.focus({ preventScroll: true });
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
    });
    mobile.addEventListener('change', () => setMenu(false));
  }

  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet();
  const targets = [...document.querySelectorAll('[data-reveal], .product-map')];
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-seen');
      seen.add(entry.target);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12 }) : null;

  const syncMotion = () => {
    const reduced = preference.matches;
    root.dataset.motion = reduced ? 'reduced' : 'full';
    observer?.disconnect();
    for (const target of targets) {
      if (reduced || !observer) {
        target.classList.add('is-seen');
        seen.add(target);
      } else if (!seen.has(target)) {
        observer.observe(target);
      }
    }
  };
  preference.addEventListener('change', syncMotion);
  syncMotion();
})();

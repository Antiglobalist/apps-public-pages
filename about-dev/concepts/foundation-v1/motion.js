// Play the diagram once when it is actually visible, including on mobile.
// No content depends on this enhancement; reduced-motion uses the static design.
(() => {
  const diagram = document.querySelector('.architecture');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!diagram || !('IntersectionObserver' in window)) return;

  let hasPlayed = false;
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting) || motionPreference.matches) return;
    diagram.classList.add('is-visible');
    hasPlayed = true;
    observer.disconnect();
  }, { threshold: 0.25 });

  function syncPreference() {
    observer.disconnect();
    if (motionPreference.matches) {
      diagram.classList.remove('is-visible');
    } else if (!hasPlayed) {
      observer.observe(diagram);
    }
  }

  motionPreference.addEventListener('change', syncPreference);
  syncPreference();
})();

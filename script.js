const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Squad slider: arrow buttons scroll one photo at a time; disabled at the ends.
const track = document.querySelector('#squad-track');
const sliderBtns = document.querySelectorAll('.slider-btn');
if (track) {
  const updateBtns = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    sliderBtns.forEach((btn) => {
      btn.disabled = btn.dataset.dir === '-1' ? track.scrollLeft <= 2 : track.scrollLeft >= max;
    });
  };
  sliderBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const slides = [...track.children];
      const dir = Number(btn.dataset.dir);
      const left = track.getBoundingClientRect().left;
      const current = slides.findIndex((s) => s.getBoundingClientRect().left - left >= -2);
      const target = slides[Math.min(Math.max(current + dir, 0), slides.length - 1)];
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft });
    });
  });
  track.addEventListener('scroll', updateBtns, { passive: true });
  window.addEventListener('resize', updateBtns);
  updateBtns();
}

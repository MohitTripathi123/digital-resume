const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

const anchoredSection = location.hash ? document.querySelector(location.hash) : null;
anchoredSection?.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));

document.querySelectorAll('.reveal:not(.visible)').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

const landing = document.querySelector('.landing');
const toggleButton = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuLinks = document.querySelectorAll('[data-close-menu]');

function setMobileMenuOpen(open) {
  if (!landing || !toggleButton || !mobileMenu) return;

  landing.classList.toggle('menu-open', open);
  toggleButton.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
}

toggleButton?.addEventListener('click', () => {
  const isOpen = landing?.classList.contains('menu-open') ?? false;
  setMobileMenuOpen(!isOpen);
});

closeMenuLinks.forEach((link) => {
  link.addEventListener('click', () => setMobileMenuOpen(false));
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMobileMenuOpen(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    setMobileMenuOpen(false);
  }
});

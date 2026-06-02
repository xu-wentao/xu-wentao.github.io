const glow = document.querySelector('.cursor-glow');
const progress = document.querySelector('.scroll-progress');
const terminalOutput = document.querySelector('#terminal-output');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

window.addEventListener('scroll', () => {
  if (!progress) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = `${ratio}%`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

const terminalLines = [
  '$ grandet run "refactor this module"',
  '',
  'strategy: cost-first',
  'model: cheap-fast',
  'fallback: high-quality',
  'signals: task-complexity, user-reject-rate, model-price',
  '',
  'decision: execute with low-cost route',
  'status: accepted'
];

function typeTerminal() {
  if (!terminalOutput) return;

  const fullText = terminalLines.join('\n');
  let index = 0;

  const timer = window.setInterval(() => {
    terminalOutput.textContent = fullText.slice(0, index);
    index += 1;

    if (index > fullText.length) {
      window.clearInterval(timer);
    }
  }, 22);
}

const terminalObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeTerminal();
        terminalObserver.disconnect();
      }
    });
  },
  { threshold: 0.35 }
);

if (terminalOutput) {
  terminalObserver.observe(terminalOutput);
}

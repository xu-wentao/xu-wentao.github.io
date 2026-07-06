const ASSET_BASE = 'https://polo-pecan-73837341.figma.site/_assets/v11/';
const logo = document.querySelector('#brand-logo');
if (logo) logo.src = `${ASSET_BASE}17ae538989a509947a8de3892c644664895e69b1.png`;

const title = document.querySelector('.hero-title');
const fullText = 'Unlock Top Marketing Talent You Thought Was Out of Reach -- Now Just One Click Away!';
const splitAt = 67;

function typeHeading() {
  if (!title) return;
  let index = 0;
  window.setTimeout(() => {
    const timer = window.setInterval(() => {
      const text = fullText.slice(0, index);
      title.innerHTML = [...text]
        .map((char, i) => `<span class="${i < splitAt ? 'typed-dark' : 'typed-light'}">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('') + '<span class="typing-cursor"></span>';
      index += 1;
      if (index > fullText.length) {
        window.clearInterval(timer);
        title.querySelector('.typing-cursor')?.remove();
      }
    }, 35);
  }, 400);
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

function countUp() {
  const node = document.querySelector('#count-up');
  if (!node) return;
  const start = performance.now() + 1200;
  const duration = 2000;
  function frame(now) {
    if (now < start) {
      requestAnimationFrame(frame);
      return;
    }
    const progress = Math.min((now - start) / duration, 1);
    node.textContent = Math.round(easeOutCubic(progress) * 20);
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const avatars = [
  ['orbit-4 spin-left', [
    ['c76d8a0b99676de31c014344bfaf75bad090758d.png', 'avatar purple', '30deg', '399px', '.6s'],
    ['7b1b5f039de7b54cc9913e96c1923c3b15a157fa.png', 'avatar orange big square', '95deg', '399px', '.8s'],
    ['9ae171d8895199349755c43fbff00e122221a027.png', 'avatar pink big square', '220deg', '399px', '1s'],
    ['926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png', 'avatar purple', '320deg', '399px', '1.2s']
  ]],
  ['orbit-3 spin-right', [
    ['018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png', 'avatar pink large', '130deg', '325px', '1.4s']
  ]],
  ['orbit-2 spin-right-slow', [
    ['ca755f7f93c1126fb8bdbf99ab364a33aa9ab272.png', 'avatar yellow', '60deg', '251px', '1.6s'],
    ['dc01064c7093dcc32674876ee3cf5e41c4a485c6.png', 'avatar pink mid', '180deg', '251px', '1.8s'],
    ['d5470a58b02388336141575048720f19a50de832.png', 'avatar blue square', '300deg', '251px', '2s']
  ]],
  ['orbit-1 spin-left-fast', [
    ['aa51718fb3af3637e6d666b6543fc27a175fada6.png', 'avatar purple square', '270deg', '177px', '2.3s']
  ]]
];

function renderCircles() {
  const stage = document.querySelector('#circles-stage');
  if (!stage) return;
  stage.innerHTML = avatars.map(([orbitClass, items]) => {
    const center = orbitClass.startsWith('orbit-1')
      ? '<div class="center-counter"><strong><span id="count-up">0</span>k+</strong><span>Specialists</span></div>'
      : '';
    const imgs = items.map(([file, cls, angle, radius, delay]) =>
      `<img class="${cls}" style="--a:${angle};--r:${radius};--delay:${delay}" src="${ASSET_BASE}${file}" alt="" />`
    ).join('');
    return `<div class="orbit ${orbitClass}">${center}${imgs}</div>`;
  }).join('');
}

const logoFiles = [
  '1e7b0e6fcc016cd28aec5c68990118b8c54c35a5.svg',
  '3eac03c183db2ae080d910159211c14843398b61.svg',
  '17705a4c0023a0e5a99154dfb10582adbbf4260b.svg',
  '0e5f442b09dc5c248e3e60d40a65505fb1887228.svg',
  '63f99030ceb459e3c9ab9e429cfa2353491d3816.svg'
];

function renderTicker() {
  const ticker = document.querySelector('#ticker-track');
  if (!ticker) return;
  const repeated = Array.from({ length: 4 }, () => logoFiles).flat();
  ticker.innerHTML = repeated.map(file => `<img src="${ASSET_BASE}${file}" alt="" />`).join('');
}

renderCircles();
renderTicker();
typeHeading();
countUp();

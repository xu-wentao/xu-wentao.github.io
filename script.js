const title = document.querySelector('.hero-title');
const fullText = 'Building practical infrastructure for Kubernetes, GPU clusters, and cost-aware AI agents.';
const splitAt = 62;

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
    }, 32);
  }, 300);
}

const orbitData = [
  ['orbit-4 spin-left', [
    ['Volcano', 'repo-node feature', '26deg', '360px', '.5s'],
    ['GPU Infra', 'repo-node light', '96deg', '360px', '.7s'],
    ['Prometheus', 'repo-node', '210deg', '360px', '.9s'],
    ['AIBrix', 'repo-node blue', '320deg', '360px', '1.1s']
  ]],
  ['orbit-3 spin-right', [
    ['Kubernetes', 'repo-node feature', '122deg', '290px', '1.25s'],
    ['containerd', 'repo-node', '280deg', '290px', '1.4s']
  ]],
  ['orbit-2 spin-slow', [
    ['GrandetAgent', 'repo-node feature', '45deg', '220px', '1.55s'],
    ['k8s-manager-ts', 'repo-node light', '188deg', '220px', '1.7s'],
    ['Alerting', 'repo-node orange', '310deg', '220px', '1.85s']
  ]],
  ['orbit-1 spin-fast', [
    ['Go', 'repo-node light', '270deg', '150px', '2s']
  ]]
];

function renderCircles() {
  const stage = document.querySelector('#circles-stage');
  if (!stage) return;
  stage.innerHTML = orbitData.map(([orbitClass, items]) => {
    const center = orbitClass.startsWith('orbit-1')
      ? '<div class="center-counter"><strong>10y+</strong><span>infra engineering</span></div>'
      : '';
    const nodes = items.map(([label, cls, angle, radius, delay]) =>
      `<span class="${cls}" style="--a:${angle};--r:${radius};--delay:${delay}">${label}</span>`
    ).join('');
    return `<div class="orbit ${orbitClass}">${center}${nodes}</div>`;
  }).join('');
}

const tickerItems = [
  'Volcano', 'ShardingSphere-on-Cloud', 'GrandetAgent', 'k8s-manager-ts',
  'alertmanager-wechat-webhook', 'Kubernetes', 'Prometheus', 'Go', 'Python',
  'AI Infrastructure', 'Scheduling', 'Observability'
];

function renderTicker() {
  const ticker = document.querySelector('#ticker-track');
  if (!ticker) return;
  const repeated = Array.from({ length: 3 }, () => tickerItems).flat();
  ticker.innerHTML = repeated.map(item => `<span>${item}</span>`).join('');
}

renderCircles();
renderTicker();
typeHeading();

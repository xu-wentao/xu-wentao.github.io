import { useEffect, useMemo, useRef, useState } from 'react';

const FULL_HEADING = 'Building practical infrastructure for Kubernetes, AI clusters, and cost-aware agent systems.';
const DARK_HEADING = 'Building practical infrastructure for Kubernetes, AI clusters,';
const TECH_ITEMS = ['Kubernetes', 'Volcano', 'AIBrix', 'HAMi', 'GrandetAgent', 'Observability', 'GPU/NPU', 'Go', 'React', 'SRE'];

const ORBIT_ITEMS = [
  { orbit: 1, angle: 270, radius: 177, label: 'K8s', size: 'large', shape: 'square', glow: 'purple', duration: 30, direction: 'left', delay: 0.6 },
  { orbit: 2, angle: 60, radius: 251, label: 'GPU', size: 'small', shape: 'circle', glow: 'yellow', duration: 40, direction: 'right', delay: 0.85 },
  { orbit: 2, angle: 180, radius: 251, label: 'NPU', size: 'large', shape: 'circle', glow: 'pink', duration: 40, direction: 'right', delay: 1.1 },
  { orbit: 2, angle: 300, radius: 251, label: 'SRE', size: 'small', shape: 'square', glow: 'blue', duration: 40, direction: 'right', delay: 1.35 },
  { orbit: 3, angle: 130, radius: 325, label: 'Volcano', size: 'xlarge', shape: 'square', glow: 'pink', duration: 50, direction: 'right', delay: 1.6 },
  { orbit: 4, angle: 30, radius: 399, label: 'AIBrix', size: 'small', shape: 'circle', glow: 'purple', duration: 60, direction: 'left', delay: 1.75 },
  { orbit: 4, angle: 95, radius: 399, label: 'HAMi', size: 'xlarge', shape: 'square-soft', glow: 'orange', duration: 60, direction: 'left', delay: 1.95 },
  { orbit: 4, angle: 220, radius: 399, label: 'Grandet', size: 'xlarge', shape: 'square-soft', glow: 'pink', duration: 60, direction: 'left', delay: 2.15 },
  { orbit: 4, angle: 320, radius: 399, label: 'Go', size: 'small', shape: 'circle', glow: 'purple', duration: 60, direction: 'left', delay: 2.3 }
];

const PROFILE_CARDS = [
  {
    title: 'Current Focus',
    heading: 'AI Cluster Platform',
    text: 'Kubernetes-based GPU/NPU orchestration, training reliability, model-serving infrastructure, and internal platform engineering.'
  },
  {
    title: 'Open Source',
    heading: 'Scheduling & Cloud Native',
    text: 'Interested in Volcano, DRA, device plugins, observability, operators, and practical production infrastructure.'
  },
  {
    title: 'Featured Project',
    heading: 'GrandetAgent',
    text: 'A local-first cost-aware Agent CLI that routes tasks through cheaper models first while tracking quality, latency, and spend.'
  }
];

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function useCountUp({ end, duration = 2000, delay = 1200 }) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    let startTime;
    const timeout = window.setTimeout(() => {
      const tick = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setValue(Math.round(end * easeOutCubic(progress)));
        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(tick);
        }
      };
      frameRef.current = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [delay, duration, end]);

  return value;
}

function TypewriterHeading({ text, splitIndex, speed = 35, delay = 400, onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setCount((current) => {
          const next = current + 1;
          if (next >= text.length) {
            window.clearInterval(interval);
            setDone(true);
            onComplete?.();
            return text.length;
          }
          return next;
        });
      }, speed);
    }, delay);

    return () => window.clearTimeout(startTimer);
  }, [delay, onComplete, speed, text]);

  const typed = text.slice(0, count);
  const dark = typed.slice(0, Math.min(splitIndex, typed.length));
  const light = typed.slice(splitIndex);

  return (
    <h1 className="hero-title" aria-label={text}>
      <span className="typed-dark">{dark}</span>
      <span className="typed-light">{light}</span>
      {!done && <span className="typing-cursor" aria-hidden="true" />}
    </h1>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <a className="brand" href="#top" aria-label="xuwentao home">
          <span className="brand-mark">xw</span>
          <span>xuwentao</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className="link-underline dark" href="#work">Work</a>
          <a className="link-underline dark" href="#oss">Open Source</a>
          <a className="link-underline dark" href="#projects">Projects</a>
          <a className="link-underline dark" href="#writing">Writing</a>
          <a className="link-underline dark" href="#contact">Contact</a>
        </nav>
      </div>
      <div className="header-actions">
        <a className="github-link link-underline light" href="https://github.com/xu-wentao" target="_blank" rel="noreferrer">GitHub</a>
        <div className="btn-border-wrap small">
          <a className="pill-btn join-btn" href="mailto:cutenear1993@yahoo.com"><span>Reach Me</span></a>
        </div>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function CursorBadge() {
  return (
    <div className="cursor-badge" aria-hidden="true">
      <svg viewBox="0 0 32 32">
        <path d="M5.6 2.7 26 17.1c1.2.8.7 2.7-.8 2.8l-8.8.6-4.7 7.4c-.8 1.2-2.7.8-2.9-.7L5.6 2.7Z" />
      </svg>
      <span>infra systems</span>
    </div>
  );
}

function OrbitItem({ item }) {
  const style = {
    '--angle': `${item.angle}deg`,
    '--radius': `${item.radius}px`,
    '--counter-duration': `${item.duration}s`,
    '--fly-delay': `${item.delay}s`
  };

  return (
    <div className="orbit-item" style={style}>
      <div className="orbit-fly">
        <div className={`orbit-badge ${item.size} ${item.shape} glow-${item.glow} counter-${item.direction}`}>
          <span>{item.label}</span>
        </div>
      </div>
    </div>
  );
}

function CircleVisualization() {
  const count = useCountUp({ end: 10 });

  const itemsByOrbit = useMemo(() => {
    return ORBIT_ITEMS.reduce((acc, item) => {
      acc[item.orbit] = acc[item.orbit] || [];
      acc[item.orbit].push(item);
      return acc;
    }, {});
  }, []);

  return (
    <div className="circles-stage">
      {[4, 3, 2, 1].map((orbit) => (
        <div key={orbit} className={`orbit orbit-${orbit} spin-${orbit === 1 || orbit === 4 ? 'left' : 'right'}`}>
          {(itemsByOrbit[orbit] || []).map((item) => (
            <OrbitItem key={`${item.label}-${item.angle}`} item={item} />
          ))}
        </div>
      ))}
      <div className="center-metric">
        <strong>{count}y+</strong>
        <span>Engineering</span>
      </div>
    </div>
  );
}

function Hero({ typedDone, setTypedDone }) {
  return (
    <section className="hero" id="top">
      <div className="hero-left">
        <p className="eyebrow">Kubernetes · AI Infrastructure · Observability · Agents</p>
        <TypewriterHeading text={FULL_HEADING} splitIndex={DARK_HEADING.length} onComplete={() => setTypedDone(true)} />
        <p className="hero-summary">I work on platform systems around cluster scheduling, GPU/NPU resource orchestration, model-serving reliability, production observability, and local-first AI engineering tools.</p>
        <div className={`hero-actions ${typedDone ? 'is-visible' : ''}`}>
          <div className="btn-border-wrap large">
            <a className="pill-btn start-btn" href="https://github.com/xu-wentao/grandet-agent" target="_blank" rel="noreferrer">
              <span>Explore GrandetAgent</span>
              <ArrowIcon />
            </a>
          </div>
          <a className="secondary-link link-underline dark" href="https://github.com/xu-wentao" target="_blank" rel="noreferrer">View GitHub Profile</a>
          <CursorBadge />
        </div>
      </div>
      <div className="hero-right" aria-label="Technical orbit visualization">
        <CircleVisualization />
      </div>
    </section>
  );
}

function ProfileCards() {
  return (
    <section className="profile-strip" id="work" aria-label="Profile summary">
      {PROFILE_CARDS.map((card, index) => (
        <article key={card.title} id={index === 1 ? 'oss' : index === 2 ? 'projects' : undefined}>
          <span>{card.title}</span>
          <strong>{card.heading}</strong>
          <p>{card.text}</p>
        </article>
      ))}
    </section>
  );
}

function LogoTicker() {
  const repeated = Array.from({ length: 4 }, () => TECH_ITEMS).flat();

  return (
    <section className="logo-ticker" id="writing" aria-label="Technology ticker">
      <div className="ticker-track">
        {repeated.map((item, index) => (
          <span className="ticker-pill" key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [typedDone, setTypedDone] = useState(false);

  return (
    <main className="app">
      <Header />
      <Hero typedDone={typedDone} setTypedDone={setTypedDone} />
      <ProfileCards />
      <LogoTicker />
      <a className="contact-float" id="contact" href="mailto:cutenear1993@yahoo.com">cutenear1993@yahoo.com</a>
    </main>
  );
}

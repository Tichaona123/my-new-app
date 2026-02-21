/* ============================================
   TICHAONA'S 24TH BIRTHDAY — ENHANCED ENGINE V2
   Birthday: February 22, 2002
   ============================================ */

// ==========================================
// DATA
// ==========================================
const BIRTHDAY = new Date(2002, 1, 22); // Feb 22, 2002

const TWENTY_FOUR_THINGS = [
  "Your work ethic puts most people to shame — and it's only getting stronger.",
  "You're the kind of friend people are lucky to have — loyal, present, real.",
  "Your mind works differently — you see solutions where others see walls.",
  "You haven't even scratched the surface of your potential yet.",
  "The way you stay disciplined when no one is watching — that's rare.",
  "You handle pressure like it's a privilege, not a burden.",
  "Your creativity isn't just a skill — it's a superpower.",
  "People trust you because you've earned it a thousand times over.",
  "You've turned every setback into a setup for something greater.",
  "Your ambition is contagious — people rise just from being near you.",
  "You're building something the world doesn't fully understand yet — but it will.",
  "Your consistency speaks louder than any motivational speech ever could.",
  "You lead without needing a title — that's true leadership.",
  "Your vision for your future is clearer than most people twice your age.",
  "You make learning look effortless, even when it's anything but.",
  "The resilience you've shown in tough seasons deserves a standing ovation.",
  "You bring light into rooms without even trying.",
  "Your intelligence isn't just academic — it's emotional, social, strategic.",
  "You dream in a way that scares ordinary people — and that's beautiful.",
  "The way you invest in yourself is the smartest investment you'll ever make.",
  "You've already accomplished things 24-year-olds only dream about.",
  "Your story inspires people who haven't even met you yet.",
  "You're not chasing greatness — you're becoming it.",
  "Year 24 chose the right person. Let's go. 🚀"
];

const TIMELINE_DATA = [
  { year: '2002', title: 'Chapter One: Born to Stand Out', desc: 'February 22nd — a future legend enters the world. The journey of a thousand miles begins with a single breath.' },
  { year: '2008', title: 'The Curiosity Era', desc: 'Questions that stumped adults. A hunger for knowledge that couldn\'t be satisfied. The spark was already visible.' },
  { year: '2014', title: 'Foundations of Greatness', desc: 'Academics, character, ambition — the pillars were being laid one by one, quietly and deliberately.' },
  { year: '2020', title: 'The Proving Ground', desc: 'A global storm hit, but you adapted. While the world paused, you evolved. Resilience became your signature.' },
  { year: '2023', title: 'Breakthrough Season', desc: 'Skills sharpened, networks built, confidence earned. The world started to see what you always knew.' },
  { year: '2026', title: 'Season 24: The Rise', desc: 'This is it. The chapter where everything clicks. The year you step into your full power. Happy Birthday, Captain. 👑' }
];

const WISH_CAPSULES = [
  { icon: '💫', wish: 'May your confidence match your competence this year — and may both be limitless.', emoji: '✨' },
  { icon: '🧠', wish: 'May every skill you learn compound into something the world hasn\'t seen before.', emoji: '🔥' },
  { icon: '💰', wish: 'May financial abundance flow to you — not just money, but richness in every sense.', emoji: '💎' },
  { icon: '❤️', wish: 'May the people around you uplift you as much as you uplift them.', emoji: '🤝' },
  { icon: '🌍', wish: 'May your impact stretch across borders and your name echo in rooms you haven\'t entered yet.', emoji: '👑' },
  { icon: '🛡️', wish: 'May you be protected from envy, negativity, and anything that dims your light.', emoji: '🙏' },
  { icon: '🎯', wish: 'May every goal you set this year be hit with precision and purpose.', emoji: '⚡' },
  { icon: '🏆', wish: 'May year 24 be the year you look back on and say: "That\'s when everything changed."', emoji: '🎉' },
];

const VISION_DATA = [
  { icon: '🚀', title: 'Career Mastery', desc: 'Leveling up professionally — new skills, bigger stages, undeniable impact.', pct: 85 },
  { icon: '💰', title: 'Financial Growth', desc: 'Building wealth intelligently — investments, income streams, generational thinking.', pct: 78 },
  { icon: '🧠', title: 'Knowledge Expansion', desc: 'Learning never stops — AI, leadership, innovation, languages, life.', pct: 92 },
  { icon: '❤️', title: 'Meaningful Connections', desc: 'Deepening bonds with people who matter — love, loyalty, community.', pct: 88 },
  { icon: '🌍', title: 'Global Presence', desc: 'Expanding influence beyond borders — travel, network, make your mark.', pct: 70 },
  { icon: '⭐', title: 'Legacy Building', desc: 'Planting seeds for the future — mentoring, creating, leaving fingerprints on the world.', pct: 75 },
];

const FUN_FACTS = [
  { icon: '🗓️', title: 'Your Day', text: 'February 22nd falls under Pisces ♓ — creative, intuitive, and deeply empathetic. That tracks.' },
  { icon: '🔢', title: 'Number 22', text: 'In numerology, 22 is the "Master Builder" number — the most powerful of all. You literally have it in your birthday.' },
  { icon: '🌍', title: 'World Day', text: 'Feb 22 is World Thinking Day — a day dedicated to international thinking and global impact. Coincidence? Never.' },
  { icon: '📅', title: 'Day of the Week', text: 'You were born on a Friday — the day of celebration, joy, and good vibes. You brought the party with you.' },
  { icon: '⏳', title: 'Alive For', text: 'By your 24th birthday, you\'ll have been alive for about 8,766 days. Each one building toward this moment.' },
  { icon: '🎵', title: '#1 Song', text: 'The #1 song when you were born? "Always On Time" by Ja Rule ft. Ashanti. You\'ve been on time since day one.' },
];

const LETTER_LINES = [
  { text: 'Dear Tichaona,', class: 'greeting' },
  { text: '' },
  { text: 'Twenty-four years of building something remarkable. Every challenge you\'ve faced, every late night, every moment of doubt that you pushed through — it all brought you here.' },
  { text: '' },
  { text: 'You\'re not just growing older. You\'re growing into the person the world needs. Your intelligence, your discipline, your relentless drive — these aren\'t ordinary qualities. They\'re the blueprint of someone destined for greatness.' },
  { text: '' },
  { text: 'This year, don\'t just dream bigger. Become the dream.' },
  { text: '' },
  { text: 'The world is about to learn your name. And when they do, they\'ll realize they were late.' },
  { text: '' },
  { text: '— With admiration and belief in everything you are ✨', class: 'sign' },
];

const PAD_DATA = [
  { emoji: '🥁', label: 'Kick', freq: 80, type: 'kick' },
  { emoji: '🪇', label: 'Snare', freq: 200, type: 'snare' },
  { emoji: '🎩', label: 'Hat', freq: 800, type: 'hat' },
  { emoji: '👏', label: 'Clap', freq: 400, type: 'clap' },
  { emoji: '🔔', label: 'Bell', freq: 660, type: 'bell' },
  { emoji: '🎹', label: 'Key C', freq: 523, type: 'tone' },
  { emoji: '🎵', label: 'Key E', freq: 659, type: 'tone' },
  { emoji: '🎶', label: 'Key G', freq: 784, type: 'tone' },
  { emoji: '✨', label: 'Chime', freq: 1047, type: 'tone' },
  { emoji: '🎺', label: 'Horn', freq: 440, type: 'horn' },
  { emoji: '🎸', label: 'Bass', freq: 110, type: 'bass' },
  { emoji: '🎉', label: 'Party', freq: 600, type: 'party' },
];

const PAD_COLORS = [
  '#a78bfa', '#fb7185', '#34d399', '#f59e0b',
  '#38bdf8', '#e879f9', '#fb923c', '#a3e635',
  '#fbbf24', '#818cf8', '#f472b6', '#22d3ee'
];

// ==========================================
// AUDIO ENGINE
// ==========================================
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.master = null;
    this.playing = false;
  }

  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.25;
    this.master.connect(this.ctx.destination);
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.master) {
      this.master.gain.linearRampToValueAtTime(this.enabled ? 0.25 : 0, this.ctx.currentTime + 0.3);
    }
    return this.enabled;
  }

  playAmbient() {
    if (!this.ctx || this.playing) return;
    this.playing = true;
    const notes = [261.63, 329.63, 392.00, 493.88];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = 0;
      gain.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 3 + i * 0.5);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start();
    });
  }

  playNote(freq, dur = 0.4, vol = 0.08, type = 'sine') {
    if (!this.ctx || !this.enabled) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = vol;
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + dur);
  }

  playPad(padType, freq) {
    if (!this.ctx || !this.enabled) return;
    switch (padType) {
      case 'kick':
        this.playNote(freq, 0.3, 0.12, 'sine');
        const osc2 = this.ctx.createOscillator();
        const g2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.value = freq;
        osc2.frequency.exponentialRampToValueAtTime(20, this.ctx.currentTime + 0.15);
        g2.gain.value = 0.15;
        g2.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
        osc2.connect(g2);
        g2.connect(this.master);
        osc2.start();
        osc2.stop(this.ctx.currentTime + 0.3);
        break;
      case 'snare':
        this.playNoise(0.12, 0.1);
        this.playNote(freq, 0.1, 0.06, 'triangle');
        break;
      case 'hat':
        this.playNoise(0.06, 0.05);
        break;
      case 'clap':
        this.playNoise(0.08, 0.08);
        setTimeout(() => this.playNoise(0.06, 0.05), 20);
        break;
      case 'horn':
        this.playNote(freq, 0.6, 0.06, 'sawtooth');
        break;
      case 'bass':
        this.playNote(freq, 0.5, 0.1, 'sine');
        break;
      case 'party':
        [600, 700, 800].forEach((f, i) => setTimeout(() => this.playNote(f, 0.2, 0.04), i * 60));
        break;
      default:
        this.playNote(freq, 0.6, 0.06, 'sine');
    }
  }

  playNoise(dur, vol) {
    if (!this.ctx) return;
    const bufSize = this.ctx.sampleRate * dur;
    const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
    const src = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    src.buffer = buf;
    gain.gain.value = vol;
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    src.connect(gain);
    gain.connect(this.master);
    src.start();
  }

  playChime() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((n, i) => setTimeout(() => this.playNote(n, 0.7, 0.05), i * 180));
  }

  playCelebration() {
    const melody = [523, 587, 659, 784, 659, 784, 1047];
    melody.forEach((n, i) => setTimeout(() => this.playNote(n, 0.5, 0.06), i * 180));
  }

  playPop() { this.playNote(880, 0.12, 0.04); }
}

const audio = new AudioEngine();

// ==========================================
// PARTICLES
// ==========================================
class Particles {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.canvas.offsetWidth * dpr;
    this.canvas.height = this.canvas.offsetHeight * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  add(x, y, opts = {}) {
    this.particles.push({
      x, y,
      vx: opts.vx ?? (Math.random() - 0.5) * 3,
      vy: opts.vy ?? (Math.random() - 0.5) * 3,
      life: 1,
      decay: opts.decay ?? 0.012,
      size: opts.size ?? 3,
      color: opts.color ?? '#a78bfa',
      gravity: opts.gravity ?? 0,
      shape: opts.shape ?? 'circle'
    });
  }

  confetti(count = 100) {
    const w = this.canvas.offsetWidth;
    const colors = ['#a78bfa', '#f59e0b', '#fb7185', '#34d399', '#38bdf8', '#fde047', '#e879f9', '#fff'];
    for (let i = 0; i < count; i++) {
      this.add(Math.random() * w, -10, {
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 4 + 1,
        decay: 0.003,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        gravity: 0.06,
        shape: 'rect'
      });
    }
  }

  sparkle(x, y, count = 25) {
    const colors = ['#a78bfa', '#f59e0b', '#fde047', '#fb7185'];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i;
      const speed = Math.random() * 4 + 1;
      this.add(x, y, {
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        decay: 0.018,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        gravity: 0.02
      });
    }
  }

  update() {
    const w = this.canvas.offsetWidth;
    const h = this.canvas.offsetHeight;
    this.ctx.clearRect(0, 0, w, h);
    this.particles = this.particles.filter(p => p.life > 0);

    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.life -= p.decay;

      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.life * 6);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.ctx.restore();
      } else {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }
    this.ctx.globalAlpha = 1;
  }
}

// ==========================================
// STAR FIELD
// ==========================================
function createStarField(canvas) {
  const ctx = canvas.getContext('2d');
  const stars = [];
  let shooting = [];
  let animId;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function init() {
    resize();
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
        dir: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  function draw() {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);

    // Stars
    for (const s of stars) {
      s.a += s.speed * s.dir;
      if (s.a >= 1 || s.a <= 0.1) s.dir *= -1;
      ctx.globalAlpha = s.a;
      ctx.fillStyle = '#a78bfa';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Shooting stars
    if (Math.random() < 0.003) {
      shooting.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.4,
        vx: (Math.random() * 4 + 3) * (Math.random() > 0.5 ? 1 : -1),
        vy: Math.random() * 2 + 1,
        life: 1,
        trail: []
      });
    }

    shooting = shooting.filter(s => s.life > 0);
    for (const s of shooting) {
      s.trail.push({ x: s.x, y: s.y });
      if (s.trail.length > 12) s.trail.shift();
      s.x += s.vx;
      s.y += s.vy;
      s.life -= 0.02;

      for (let i = 0; i < s.trail.length; i++) {
        const t = s.trail[i];
        ctx.globalAlpha = (i / s.trail.length) * s.life * 0.6;
        ctx.fillStyle = '#c4b5fd';
        ctx.beginPath();
        ctx.arc(t.x, t.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  init();
  draw();
  return () => cancelAnimationFrame(animId);
}

// ==========================================
// FLOATING EMOJIS
// ==========================================
function startFloatingEmojis() {
  const container = document.getElementById('floatingEmojis');
  const emojis = ['🎂', '🎉', '🎈', '✨', '🎁', '⭐', '🥳', '🎊', '💫', '🌟'];

  function spawn() {
    const el = document.createElement('div');
    el.className = 'float-emoji';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (Math.random() * 12 + 10) + 's';
    el.style.fontSize = (Math.random() * 0.8 + 0.8) + 'rem';
    container.appendChild(el);
    setTimeout(() => el.remove(), 22000);
  }

  setInterval(spawn, 2500);
  // Spawn a few immediately
  for (let i = 0; i < 4; i++) setTimeout(spawn, i * 600);
}

// ==========================================
// AGE COUNTER
// ==========================================
function updateAgeCounter() {
  const now = new Date();
  const diff = now - BIRTHDAY;
  const totalSecs = Math.floor(diff / 1000);
  const totalMins = Math.floor(totalSecs / 60);
  const totalHours = Math.floor(totalMins / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Calculate years & months precisely
  let years = now.getFullYear() - BIRTHDAY.getFullYear();
  let months = now.getMonth() - BIRTHDAY.getMonth();
  let days = now.getDate() - BIRTHDAY.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, '0');
  };

  set('ageYears', years);
  set('ageMonths', months);
  set('ageDays', days);
  set('ageHours', hours);
  set('ageMins', mins);
  set('ageSecs', secs);
}

// ==========================================
// TYPEWRITER
// ==========================================
class Typewriter {
  constructor(container, lines) {
    this.container = container;
    this.lines = lines;
    this.lineIndex = 0;
    this.charIndex = 0;
    this.currentEl = null;
    this.cursor = null;
  }

  start() {
    this.container.innerHTML = '';
    this.cursor = document.createElement('span');
    this.cursor.className = 'letter-cursor';
    this.nextLine();
  }

  nextLine() {
    if (this.lineIndex >= this.lines.length) {
      if (this.cursor) this.cursor.remove();
      return;
    }

    const line = this.lines[this.lineIndex];
    this.currentEl = document.createElement('p');
    this.currentEl.className = 'letter-line';
    if (line.class) this.currentEl.classList.add(line.class);
    this.container.appendChild(this.currentEl);

    this.charIndex = 0;

    if (!line.text) {
      this.currentEl.innerHTML = '&nbsp;';
      this.lineIndex++;
      setTimeout(() => this.nextLine(), 200);
    } else {
      this.typeChar();
    }
  }

  typeChar() {
    const line = this.lines[this.lineIndex];
    if (this.charIndex < line.text.length) {
      if (this.cursor.parentElement) this.cursor.remove();
      this.currentEl.textContent += line.text[this.charIndex];
      this.currentEl.appendChild(this.cursor);
      this.charIndex++;
      const delay = line.text[this.charIndex - 1] === '.' ? 80 :
        line.text[this.charIndex - 1] === ',' ? 50 :
          20 + Math.random() * 15;
      setTimeout(() => this.typeChar(), delay);
    } else {
      this.lineIndex++;
      setTimeout(() => this.nextLine(), 300);
    }
  }
}

// ==========================================
// MAIN APP
// ==========================================
class BirthdayApp {
  constructor() {
    this.started = false;
    this.heroParticles = null;
    this.finaleParticles = null;
    this.candlesBlown = false;
    this.capsuleCount = 0;
    this.letterOpened = false;

    // Cursor glow
    document.addEventListener('mousemove', (e) => {
      const glow = document.getElementById('cursorGlow');
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });

    // Stars
    this.stopStars = createStarField(document.getElementById('starsCanvas'));

    // Intro reveal animations
    document.querySelectorAll('.reveal-text').forEach(el => {
      const delay = parseInt(el.dataset.delay || 0);
      el.style.animationDelay = delay + 'ms';
    });

    // Enter
    document.getElementById('enterBtn').addEventListener('click', () => this.start());

    // Audio toggle
    document.getElementById('audioToggle').addEventListener('click', () => {
      const on = audio.toggle();
      document.querySelector('.audio-icon.on').classList.toggle('hidden', !on);
      document.querySelector('.audio-icon.off').classList.toggle('hidden', on);
    });

    // Back to top
    const btt = document.getElementById('backToTop');
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Progress bar + back-to-top visibility
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      document.getElementById('progressFill').style.width = pct + '%';
      btt.classList.toggle('visible', window.scrollY > 600);
      btt.classList.toggle('hidden', window.scrollY <= 600);
    });
  }

  start() {
    if (this.started) return;
    this.started = true;

    audio.init();
    audio.playAmbient();
    audio.playChime();

    document.getElementById('intro').classList.add('leaving');

    setTimeout(() => {
      document.getElementById('intro').style.display = 'none';
      const main = document.getElementById('mainContent');
      main.classList.remove('hidden');
      main.style.opacity = '1';
      main.style.transition = 'opacity 1s ease';

      this.buildContent();
      this.setupObservers();
      this.setupCake();
      this.setupShare();
      this.setupMidnightCountdown();
      this.setupFinaleExtras();
      startFloatingEmojis();

      // Hero particles
      this.heroParticles = new Particles(document.getElementById('heroParticles'));
      this.heroParticleLoop();

      // Age counter
      updateAgeCounter();
      setInterval(updateAgeCounter, 1000);
    }, 1300);
  }

  buildContent() {
    // Fun Facts
    const factsGrid = document.getElementById('factsGrid');
    FUN_FACTS.forEach((fact, i) => {
      const card = document.createElement('div');
      card.className = 'fact-card';
      card.style.transitionDelay = `${i * 0.1}s`;
      card.innerHTML = `
        <div class="fact-icon">${fact.icon}</div>
        <div class="fact-title">${fact.title}</div>
        <div class="fact-text">${fact.text}</div>
      `;
      factsGrid.appendChild(card);
    });

    // 24 Things
    const grid = document.getElementById('thingsGrid');
    TWENTY_FOUR_THINGS.forEach((text, i) => {
      const card = document.createElement('div');
      card.className = 'thing-card';
      card.style.transitionDelay = `${(i % 12) * 0.04}s`;
      card.innerHTML = `
        <div class="thing-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="thing-text">${text}</div>
      `;
      grid.appendChild(card);
    });

    // Timeline
    const track = document.getElementById('timeline-track');
    TIMELINE_DATA.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = 'timeline-item';
      el.style.transitionDelay = `${i * 0.12}s`;
      el.innerHTML = `
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-desc">${item.desc}</div>
      `;
      track.appendChild(el);
    });

    // Wish Capsules
    document.getElementById('capsuleTotal').textContent = WISH_CAPSULES.length;
    const capsGrid = document.getElementById('capsulesGrid');
    WISH_CAPSULES.forEach((cap) => {
      const el = document.createElement('div');
      el.className = 'capsule';
      el.innerHTML = `
        <div class="capsule-icon">${cap.icon}</div>
        <div class="capsule-label">Tap to reveal</div>
        <div class="capsule-message">
          <div class="capsule-wish">${cap.wish}</div>
          <div class="capsule-emoji">${cap.emoji}</div>
        </div>
      `;
      el.addEventListener('click', () => {
        if (!el.classList.contains('opened')) {
          el.classList.add('opened');
          audio.playPop();
          this.capsuleCount++;
          document.getElementById('capsuleCount').textContent = this.capsuleCount;
          document.getElementById('capsuleProgressFill').style.width =
            (this.capsuleCount / WISH_CAPSULES.length * 100) + '%';

          // All opened celebration
          if (this.capsuleCount === WISH_CAPSULES.length) {
            audio.playCelebration();
          }
        }
      });
      capsGrid.appendChild(el);
    });

    // Vision Board
    const vGrid = document.getElementById('visionGrid');
    VISION_DATA.forEach((v, i) => {
      const card = document.createElement('div');
      card.className = 'vision-card';
      card.style.transitionDelay = `${i * 0.1}s`;
      card.innerHTML = `
        <div class="vision-icon">${v.icon}</div>
        <div class="vision-title">${v.title}</div>
        <div class="vision-desc">${v.desc}</div>
        <div class="vision-bar">
          <div class="vision-bar-fill" data-pct="${v.pct}"></div>
        </div>
      `;
      vGrid.appendChild(card);
    });

    // Soundboard Pads
    const padsGrid = document.getElementById('padsGrid');
    PAD_DATA.forEach((pad, i) => {
      const el = document.createElement('div');
      el.className = 'sound-pad';
      el.style.setProperty('--pad-color', PAD_COLORS[i]);
      el.style.background = `rgba(${hexToRgb(PAD_COLORS[i])}, 0.1)`;
      el.style.borderColor = `rgba(${hexToRgb(PAD_COLORS[i])}, 0.2)`;
      el.innerHTML = `
        <span>${pad.emoji}</span>
        <span class="pad-label">${pad.label}</span>
      `;
      el.addEventListener('click', () => {
        audio.init();
        audio.playPad(pad.type, pad.freq);
        el.classList.add('flash');
        el.style.background = `rgba(${hexToRgb(PAD_COLORS[i])}, 0.3)`;
        el.style.borderColor = PAD_COLORS[i];
        setTimeout(() => {
          el.classList.remove('flash');
          el.style.background = `rgba(${hexToRgb(PAD_COLORS[i])}, 0.1)`;
          el.style.borderColor = `rgba(${hexToRgb(PAD_COLORS[i])}, 0.2)`;
        }, 200);
      });
      padsGrid.appendChild(el);
    });

    // Finale candles
    const finaleCandles = document.getElementById('finaleCandles');
    for (let i = 0; i < 24; i++) {
      const c = document.createElement('div');
      c.className = 'mini-candle';
      finaleCandles.appendChild(c);
    }

    // Cake candles
    const cakeCandles = document.getElementById('cakeCandles');
    for (let i = 0; i < 5; i++) {
      const c = document.createElement('div');
      c.className = 'cake-candle';
      cakeCandles.appendChild(c);
    }

    // Letter envelope
    const envelope = document.getElementById('letterEnvelope');
    envelope.addEventListener('click', () => {
      if (this.letterOpened) return;
      this.letterOpened = true;
      envelope.classList.add('opened');
      document.querySelector('.letter-seal').classList.add('visible');

      const letterInner = document.createElement('div');
      letterInner.className = 'letter-body-inner visible';
      document.getElementById('letterBody').appendChild(letterInner);

      setTimeout(() => {
        const typewriter = new Typewriter(letterInner, LETTER_LINES);
        typewriter.start();
      }, 500);

      audio.playChime();
    });
  }

  setupObservers() {
    const observe = (selector, callback, opts = { threshold: 0.15 }) => {
      const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if (!el) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { callback(entry); observer.unobserve(entry.target); } });
      }, opts);
      observer.observe(el);
    };

    // Generic anim-items per section
    const animSections = ['#hero', '#letter', '#facts', '#things', '#timeline', '#wishes', '#vision', '#playlist', '#finale'];
    animSections.forEach(sel => {
      observe(sel, () => {
        const items = document.querySelectorAll(`${sel} .anim-item`);
        items.forEach((item, i) => {
          setTimeout(() => item.classList.add('visible'), i * 120);
        });
      }, { threshold: 0.1 });
    });

    // Fact cards
    observe('#facts', () => {
      document.querySelectorAll('.fact-card').forEach((c, i) => {
        setTimeout(() => c.classList.add('visible'), i * 100);
      });
    }, { threshold: 0.1 });

    // 24 Things
    observe('#things', () => {
      document.querySelectorAll('.thing-card').forEach((c, i) => {
        setTimeout(() => c.classList.add('visible'), i * 35);
      });
    }, { threshold: 0.05 });

    // Timeline
    observe('#timeline', () => {
      document.querySelectorAll('.timeline-item').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 200);
      });
    }, { threshold: 0.1 });

    // Vision
    observe('#vision', () => {
      document.querySelectorAll('.vision-card').forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('visible');
          const fill = card.querySelector('.vision-bar-fill');
          if (fill) setTimeout(() => fill.style.width = fill.dataset.pct + '%', 300);
        }, i * 120);
      });
    }, { threshold: 0.1 });

    // Finale
    observe('#finale', () => {
      document.getElementById('finaleContent').classList.add('visible');
      this.finaleParticles = new Particles(document.getElementById('finaleCanvas'));
      this.finaleParticleLoop();
      audio.playChime();
    });
  }

  setupCake() {
    const cake = document.getElementById('finaleCake');
    cake.addEventListener('click', () => this.blowCandles(false));
  }

  blowCandles(isAutomatic) {
    if (this.candlesBlown) return;
    this.candlesBlown = true;

    // Blow candles
    document.querySelectorAll('.cake-candle').forEach((c, i) => {
      setTimeout(() => c.classList.add('blown'), i * 80);
    });
    document.querySelectorAll('.mini-candle').forEach((c, i) => {
      setTimeout(() => c.classList.add('blown'), i * 25);
    });

    document.getElementById('cakeHint').style.opacity = '0';
    audio.playCelebration();

    // Show post-blow celebration
    setTimeout(() => {
      const postBlow = document.getElementById('postBlow');
      postBlow.classList.remove('hidden');

      if (this.finaleParticles) {
        const w = document.getElementById('finaleCanvas').offsetWidth;
        const h = document.getElementById('finaleCanvas').offsetHeight;

        this.finaleParticles.confetti(200);
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            this.finaleParticles.sparkle(Math.random() * w, Math.random() * h * 0.5, 35);
          }, i * 300);
        }
        for (let i = 1; i <= 8; i++) {
          setTimeout(() => this.finaleParticles.confetti(80), i * 600);
        }
      }
    }, 400);

    // If automatic (midnight), scroll to finale
    if (isAutomatic) {
      document.getElementById('finale').scrollIntoView({ behavior: 'smooth' });
    }
  }

  setupMidnightCountdown() {
    // Target: February 22, 2026 at 00:00:00 local time
    const target = new Date(2026, 1, 22, 0, 0, 0);
    const cdEl = document.getElementById('midnightCountdown');
    const a24El = document.getElementById('already24');

    const update = () => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        // IT'S MIDNIGHT — HAPPY BIRTHDAY!
        cdEl.classList.add('hidden');
        a24El.classList.remove('hidden');

        // Auto-blow the candles!
        this.blowCandles(true);
        return;
      }

      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('cdHours').textContent = String(hrs).padStart(2, '0');
      document.getElementById('cdMins').textContent = String(mins).padStart(2, '0');
      document.getElementById('cdSecs').textContent = String(secs).padStart(2, '0');
    };

    // Check if already past midnight on Feb 22
    const now = new Date();
    if (now >= target) {
      cdEl.classList.add('hidden');
      a24El.classList.remove('hidden');
      // Auto-blow after a short delay so the finale has time to render
      setTimeout(() => this.blowCandles(false), 3000);
    } else {
      update();
      setInterval(update, 1000);
    }
  }

  setupFinaleExtras() {
    // Sparkle ring dots
    const ring = document.getElementById('sparkleRing');
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement('div');
      dot.className = 'sparkle-dot';
      const angle = (360 / 12) * i;
      const rad = angle * (Math.PI / 180);
      dot.style.left = (50 + 50 * Math.cos(rad)) + '%';
      dot.style.top = (50 + 50 * Math.sin(rad)) + '%';
      ring.appendChild(dot);
    }

    // Floating hearts & stars in finale
    const floaters = document.getElementById('finaleFloaters');
    const heartEmojis = ['💜', '✨', '💛', '⭐', '💫', '🌟', '💕', '💖', '🤍'];
    const spawnFloater = () => {
      const el = document.createElement('div');
      el.className = 'floater';
      el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      el.style.left = Math.random() * 100 + '%';
      el.style.bottom = '-20px';
      el.style.fontSize = (Math.random() * 0.8 + 0.8) + 'rem';
      el.style.animationDuration = (Math.random() * 8 + 8) + 's';
      floaters.appendChild(el);
      setTimeout(() => el.remove(), 16000);
    };
    setInterval(spawnFloater, 1800);
    for (let i = 0; i < 5; i++) setTimeout(spawnFloater, i * 400);

    // Wishes ticker
    const tickerMsgs = [
      '🎂 Happy 24th Birthday! 🎂',
      '✨ You are one of a kind ✨',
      '💜 Wishing you endless joy 💜',
      '🌟 Your light shines so bright 🌟',
      '🎉 Year 24 is YOUR year 🎉',
      '👑 Crown on, world off 👑',
      '💫 Believe in your magic 💫',
      '🎈 Celebrate every moment 🎈',
      '🚀 Sky is just the beginning 🚀',
      '❤️ Loved and celebrated today ❤️',
    ];
    const track = document.getElementById('tickerTrack');
    // Double the items for seamless loop
    [...tickerMsgs, ...tickerMsgs].forEach(msg => {
      const item = document.createElement('span');
      item.className = 'ticker-item';
      item.textContent = msg;
      track.appendChild(item);
    });
  }

  setupShare() {
    document.getElementById('shareBtn').addEventListener('click', async () => {
      const url = window.location.href;
      try {
        if (navigator.share) {
          await navigator.share({ title: 'Happy 24th Birthday, Tichaona!', url });
        } else {
          await navigator.clipboard.writeText(url);
          const msg = document.getElementById('shareCopied');
          msg.classList.remove('hidden');
          setTimeout(() => msg.classList.add('hidden'), 3000);
        }
      } catch {
        await navigator.clipboard.writeText(url);
        const msg = document.getElementById('shareCopied');
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 3000);
      }
    });
  }

  heroParticleLoop() {
    if (!this.heroParticles) return;
    const w = this.heroParticles.canvas.offsetWidth;
    const h = this.heroParticles.canvas.offsetHeight;

    if (Math.random() < 0.08) {
      this.heroParticles.add(Math.random() * w, h + 5, {
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.8 + 0.2),
        decay: 0.003,
        size: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.6 ? '#a78bfa' : '#f59e0b',
        gravity: 0
      });
    }
    this.heroParticles.update();
    requestAnimationFrame(() => this.heroParticleLoop());
  }

  finaleParticleLoop() {
    if (!this.finaleParticles) return;
    const w = this.finaleParticles.canvas.offsetWidth;
    const h = this.finaleParticles.canvas.offsetHeight;

    if (Math.random() < 0.06) {
      this.finaleParticles.add(Math.random() * w, h + 5, {
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.7 + 0.2),
        decay: 0.004,
        size: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.5 ? '#a78bfa' : '#fde047',
        gravity: 0
      });
    }
    this.finaleParticles.update();
    requestAnimationFrame(() => this.finaleParticleLoop());
  }
}

// ==========================================
// HELPERS
// ==========================================
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16)
  ].join(', ');
}

// ==========================================
// LAUNCH
// ==========================================
document.addEventListener('DOMContentLoaded', () => new BirthdayApp());

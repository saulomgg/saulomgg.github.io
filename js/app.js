/* ============================================================
   SAULOMMG HUB v4 — RENDER ENGINE
   Módulos: background 3D · popups · galerias · tabs · PIX
   ============================================================ */

/* ---------------- Three.js: rede neural 3D ---------------- */
function initBG() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07070c, 0.055);

  const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 100);
  camera.position.z = 4.6;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  function syncSize() {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  }
  syncSize();
  new ResizeObserver(syncSize).observe(canvas);

  const COUNT = 74;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(COUNT * 3);
  const vel = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 11;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 7;
    vel[i * 3] = (Math.random() - 0.5) * 0.0025;
    vel[i * 3 + 1] = (Math.random() - 0.5) * 0.0025;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.0025;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const mat = new THREE.PointsMaterial({ color: 0x00ff41, size: 0.055, transparent: true, opacity: 0.9 });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  const lineMat = new THREE.LineBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.16 });
  const lineGeo = new THREE.BufferGeometry();
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('mousemove', e => {
    mouse.tx = (e.clientX / innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / innerHeight - 0.5) * 2;
  });

  function animate() {
    requestAnimationFrame(animate);
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    const p = geo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      p[i3] += vel[i3]; p[i3 + 1] += vel[i3 + 1]; p[i3 + 2] += vel[i3 + 2];
      if (Math.abs(p[i3]) > 6) vel[i3] *= -1;
      if (Math.abs(p[i3 + 1]) > 5) vel[i3 + 1] *= -1;
      if (Math.abs(p[i3 + 2]) > 4) vel[i3 + 2] *= -1;
    }
    geo.attributes.position.needsUpdate = true;

    const linesArr = [];
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = p[i * 3] - p[j * 3], dy = p[i * 3 + 1] - p[j * 3 + 1], dz = p[i * 3 + 2] - p[j * 3 + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < 2.6) linesArr.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2], p[j * 3], p[j * 3 + 1], p[j * 3 + 2]);
      }
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linesArr, 3));

    points.rotation.y += 0.0008 + mouse.x * 0.0006;
    points.rotation.x += mouse.y * 0.0005;
    renderer.render(scene, camera);
  }
  animate();
  addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    syncSize();
  });
}
window.addEventListener('load', initBG);

/* ---------------- GSAP intro ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-badge, .hero h1, .hero-sub, .hero-ctas, .hero-stats', {
      y: 26, opacity: 0, duration: 0.8, stagger: 0.14, ease: 'power3.out'
    });
    if (typeof AOS !== 'undefined') AOS.refresh();
    gsap.utils.toArray('.stat .n').forEach(el => {
      const target = parseFloat(el.dataset.n ?? el.textContent);
      if (isNaN(target)) return;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
        onUpdate() { el.textContent = Math.round(obj.v) + (el.dataset.suf ?? ''); }
      });
    });
  }
});

/* ---------------- Card → Popup ---------------- */
const WA = 'https://wa.me/5522988195993';

function buildPopup(app, kind) {
  const initial = app.name.charAt(0).toUpperCase();
  const feats = (app.feats || []).slice(0, 4).map(f =>
    `<div class="m-feat"><span class="tick">▣</span>${f}</div>`).join('');
  const links = [];
  if (app.site) links.push(`<a class="enter" href="${app.site}" target="_blank" rel="noopener">▶ Entrar no App</a>`);
  if (app.download) links.push(`<a class="enter" href="${app.download}" target="_blank" rel="noopener">⬇ Download</a>`);
  if (app.zap) links.push(`<a class="buy" href="${WA}?text=${encodeURIComponent(app.zap)}" target="_blank" rel="noopener">WhatsApp</a>`);
  if (app.ml) links.push(`<a class="ml" href="${app.ml}" target="_blank" rel="noopener">Mercado Livre</a>`);
  if (app.github) links.push(`<a class="github" href="${app.github}" target="_blank" rel="noopener">GitHub</a>`);
  const pillCls = kind === 'paid' ? 'pill-paid' : kind === 'win' ? 'pill-win' : 'pill-free';
  return `
    <div class="m-top">
      <div class="m-letter" style="color:var(--${app.tone || 'green'});border:1px solid var(--${app.tone || 'green'});box-shadow:0 0 18px var(--${app.tone || 'green'})">${initial}</div>
      <div>
        <h3>${app.name}</h3>
        <span class="m-pill ${pillCls}">${app.tag || ''}${app.price ? ' · ' + app.price : ''}</span>
      </div>
    </div>
    <div class="m-body">
      <p>${app.desc}</p>
      <div class="m-feats">${feats}</div>
    </div>
    <div class="m-links">${links.join('')}</div>`;
}

function openPopup(html) {
  const ov = document.getElementById('modal-overlay');
  document.getElementById('modal-body').innerHTML = html;
  ov.classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closePopup() {
  document.getElementById('modal-overlay').classList.remove('on');
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', () => {
  const ov = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  document.addEventListener('click', e => {
    const card = e.target.closest('[data-app]');
    if (card) {
      e.preventDefault();
      e.stopPropagation();
      const id = card.dataset.app;
      const all = [].concat(HUB.free, HUB.premium, HUB.tools);
      const app = all.find(a => a.id === id);
      if (!app) return;
      const kind = (HUB.premium.includes(app) || HUB.tools.includes(app)) ? 'paid' : 'free';
      openPopup(buildPopup(app, kind));
      return;
    }
  });
  closeBtn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); closePopup(); });
  closeBtn.addEventListener('touchend', e => { e.preventDefault(); closePopup(); }, { passive: false });
  ov.addEventListener('click', e => { if (e.target.id === 'modal-overlay') closePopup(); });
  ov.addEventListener('touchend', e => { if (e.target.id === 'modal-overlay') closePopup(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
});

/* ---------------- Render galerias ---------------- */
function cardHTML(app, kind) {
  const initial = app.name.charAt(0).toUpperCase();
  const pill = kind === 'paid' ? 'pill-paid' : kind === 'win' ? 'pill-win' : 'pill-free';
  const cls = kind === 'paid' ? 'paid' : kind === 'win' ? 'win' : '';
  return `
  <div class="app-card ${cls}" data-app="${app.id}" data-aos="fade-up" data-aos-duration="650">
    <div class="phone-topbar"><span>09:41</span><span>● ● ●</span><span class="pill ${pill}">${app.tag}</span></div>
    <div class="phone-body">
      <div class="app-letter" style="color:var(--${app.tone});border:1px solid rgba(255,255,255,0.08);box-shadow:0 0 22px var(--${app.tone})">${initial}</div>
      <h3>${app.name}</h3>
      <p class="d">${app.desc}</p>
      <span class="tap">i <i></i> Ver detalhes</span>
      <div class="phone-term">
        <span class="g">const</span> app = <span class="c">"${app.id}"</span>;<br>
        <span class="cm">// toque no card para abrir</span>
      </div>
    </div>
  </div>`;
}

function renderGrid(containerId, apps, kind) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = apps.map(a => cardHTML(a, kind)).join('');
}
function openTabByName(bar, name) {
  const tab = bar.querySelector(`.tab[data-tab="${name}"]`);
  if (tab) tab.click();
}

/* ---------------- Repo Lab (ferramentas Python em teste) ---------------- */
function renderRepoLab(containerId) {
  const c = document.getElementById(containerId);
  if (!c || !HUB.repoLab || !HUB.repoLab.length) return;
  const repoLink = HUB.repoLabLink || "https://github.com/saulomgg/HubPython/tree/main/tools";
  c.innerHTML = HUB.repoLab.map(t => `\
    <div class="lab-item" data-aos="fade-up" data-aos-duration="500">
      <span class="lab-dot">▣</span>
      <div>
        <span class="lab-name">${t.name}</span><span class="lab-ext">.py</span>
        <div class="lab-desc">${t.desc}</div>
      </div>
    </div>`).join('') + `\
    <a class="lab-go" href="${repoLink}" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:9px;text-decoration:none;border:1px dashed rgba(255,0,110,0.35);border-radius:8px;font-family:var(--font-mono);font-size:11.5px;letter-spacing:1px;text-transform:uppercase;color:var(--purple);padding:12px;transition:all .25s;cursor:pointer" onmouseover="this.style.background='rgba(255,0,110,0.12)'" onmouseout="this.style.background=''">⬇ Abrir pasta e baixar — ${HUB.repoLab.length} ferramentas</a>`;
  if (window.AOS) setTimeout(() => AOS.refresh(), 50);
}

/* ---------------- Todos os apps (Grátis/Premium) ---------------- */
function renderAllApps(containerId) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const all = [].concat(HUB.free, HUB.premium, HUB.tools);
  c.innerHTML = all.map(a => {
    const kind = (HUB.premium.includes(a) || HUB.tools.includes(a)) ? 'paid' : 'free';
    const tone = a.tone || 'green';
    return `\
    <div class="all-item" data-aos="fade-up" data-aos-duration="500">
      <div class="all-letter" style="color:var(--${tone});border:1px solid rgba(255,255,255,0.08);box-shadow:0 0 16px var(--${tone})">${a.name.charAt(0).toUpperCase()}</div>
      <div style="min-width:0">
        <h4>${a.name}</h4>
        <span class="all-tag t-${kind}">${kind === 'paid' ? 'PREMIUM' : 'GRÁTIS'}</span>
      </div>
      <a class="all-go" data-app="${a.id}" href="javascript:void(0)" style="text-decoration:none">Abrir painel →</a>
    </div>`;
  }).join('');
  if (window.AOS) setTimeout(() => AOS.refresh(), 50);
}

/* ---------------- Tabs ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs').forEach(bar => {
    bar.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        bar.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
        tab.classList.add('on');
        document.querySelectorAll('.tab-panel').forEach(p => {
          p.classList.toggle('on', p.dataset.panel === tab.dataset.tab);
        });
      });
    });
  });
});

/* ---------------- PIX oculto ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('pixBtn');
  if (!btn) return;
  const key = document.getElementById('pixKey');
  const hint = document.getElementById('pixHint');
  btn.addEventListener('click', () => {
    const val = key.dataset.value || '';
    if (!val) return;
    key.textContent = val;
    key.style.display = 'inline-block';
    if (hint) hint.style.display = 'none';
    navigator.clipboard?.writeText(val).then(() => {
      btn.textContent = '✓ Copiado';
      setTimeout(() => { btn.textContent = 'Copiar'; }, 2200);
    }).catch(() => { btn.textContent = 'Copiado'; });
  });
});

/* ---------------- Render automático nas páginas ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid('grid-free', HUB.free, 'free');
  renderGrid('grid-premium', HUB.premium, 'paid');
  renderGrid('grid-tools', HUB.tools, 'paid');
  // Home: 2 free apps + HubSynk banner (rendered via renderGrid('grid-home-free'))
  renderGrid('grid-home-free', HUB.free.slice(0, 2), 'free');
  renderRepoLab('grid-lab');
  renderAllApps('grid-all-apps');

    /* Lab: link do repositório (a grade é renderizada por renderRepoLab) */
  const labList = document.getElementById('lab-list');
  if (labList && HUB.repoLabLink) {
    labList.href = HUB.repoLabLink;
  }

  const hub = document.getElementById('hub-window-body');
  if (hub && HUB.windows && HUB.windows.hub) {
    const w = HUB.windows.hub;
    hub.innerHTML = `
      <h3 style="font-family:var(--font-display);font-size:22px;color:#fff">${w.name}
        <span class="m-pill pill-win" style="margin-left:10px">${w.tag}</span>
      </h3>
      <p style="color:var(--txt-dim);font-size:13px;margin-top:10px;line-height:1.8">${w.desc}</p>
      <div class="feature-row" style="margin-top:16px">
        ${(w.feats || []).map(f => `<div class="feature"><h4><span style="color:var(--cyan)">▣</span> ${f}</h4></div>`).join('')}
      </div>
      <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap">
        ${w.download ? `<a class="btn btn-primary" href="${w.download}" target="_blank" rel="noopener">⬇ Download v1.0</a>` : ''}
        ${w.github ? `<a class="btn btn-ghost" href="${w.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
      </div>`;
  }
  const gridWin = document.getElementById('grid-win-tools');
  if (gridWin && HUB.windows) {
    gridWin.innerHTML = (HUB.windows.tools || []).map(t => `
      <div class="app-card win" style="cursor:default">
        <div class="phone-topbar"><span>WINDOWS</span><span style="margin-left:auto" class="pill pill-win">${t.tag}</span></div>
        <div class="phone-body">
          <h3>${t.name}</h3>
          <p class="d">${t.desc}</p>
          ${t.github ? `<a class="tap" href="${t.github}" target="_blank" rel="noopener" style="color:var(--cyan)">GitHub → <i></i></a>` : ''}
        </div>
      </div>`).join('');
  }

  const gridSv = document.getElementById('grid-services');
  if (gridSv && HUB.services) {
    gridSv.innerHTML = HUB.services.map(s => `
      <div class="dest svc" data-tone="${s.tone}" data-aos="fade-up">
        <div class="svc-glow" data-tone="${s.tone}"></div>
        <div class="svc-head">
          <span class="svc-code">${s.code || '// build()'}</span>
          <div class="ico svc-ico">▣</div>
        </div>
        <h3 class="svc-title">${s.name}</h3>
        <p>${s.desc}</p>
        <div class="svc-feats">${(s.feats || []).map(f => `<span class="svc-pill">${f}</span>`).join('')}</div>
        <div style="margin-top:16px"><a class="go svc-go" href="https://wa.me/5522988195993?text=${encodeURIComponent('Olá! Quero saber mais sobre: ' + s.name)}" target="_blank" rel="noopener">→ Solicitar orçamento</a></div>
      </div>`).join('');
  }
});

/* ---------------- Menu mobile ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const mt = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (!mt || !nav) return;
  const closeMenu = () => { nav.classList.remove('on'); mt.textContent = '☰'; };
  mt.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('on');
    mt.textContent = nav.classList.contains('on') ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('on') && !nav.contains(e.target) && !mt.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
});

/* ---------------- Favicon "S" gerado em canvas (sem imagens) ---------------- */
(function favicon() {
  try {
    const cv = document.createElement('canvas');
    cv.width = 64; cv.height = 64;
    const x = cv.getContext('2d');
    x.fillStyle = '#0a0a0f';
    x.fillRect(0, 0, 64, 64);
    x.strokeStyle = '#00ff41'; x.lineWidth = 3;
    x.shadowColor = '#00ff41'; x.shadowBlur = 8;
    x.strokeRect(2, 2, 60, 60);
    x.fillStyle = '#00ff41';
    x.font = '900 38px "JetBrains Mono", monospace';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.shadowBlur = 14;
    x.fillText('S', 32, 35);
    const link = document.createElement('link');
    link.rel = 'icon'; link.href = cv.toDataURL('image/png');
    document.head.appendChild(link);
  } catch (e) {}
})();

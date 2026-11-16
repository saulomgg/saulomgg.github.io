/* ===== IDIOMA (padrão: português) ===== */
let LANG = 'pt';
try { const s = localStorage.getItem('smgg_lang'); if (['pt','en','es'].includes(s)) LANG = s; } catch(e){}
const tr = k => (I18N[LANG] && I18N[LANG][k] != null) ? I18N[LANG][k] : (I18N.pt[k] || k);
const L = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[LANG] || v.pt) : v;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function applyLang() {
  document.documentElement.lang = {pt:'pt-BR',en:'en',es:'es'}[LANG];
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = tr(el.dataset.i18n); });
  document.querySelectorAll('.glitch-text').forEach(e => e.setAttribute('data-text', e.textContent));
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
  renderHubsynk('hubsynk'); renderApps('listaApps'); renderDev('listaDev'); renderWindows('listaWindows'); renderLab('listaLab'); renderSlots();
}
function setLang(l) { LANG = l; try { localStorage.setItem('smgg_lang', l); } catch(e){} applyLang(); }

/* ===== RELÓGIO ===== */
function updateClock() {
  const n = new Date(), el = document.getElementById('headerTime');
  if (el) el.textContent = String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
}
setInterval(updateClock, 30000); updateClock();

/* ===== PERFIL (fica só neste aparelho) ===== */
function initProfile() {
  let nome = null; try { nome = localStorage.getItem('smgg_nome'); } catch(e){}
  const n = document.getElementById('userName'), a = document.getElementById('userAvatar');
  if (nome && n) n.textContent = nome;
  if (a) {
    a.style.cursor = 'pointer';
    a.addEventListener('click', () => {
      const novo = prompt(tr('ui.askname'), n ? n.textContent : '');
      if (novo && novo.trim()) { const v = novo.trim().slice(0,24); try { localStorage.setItem('smgg_nome', v); } catch(e){} n.textContent = v; }
    });
  }
}

function navigateTo(url) {
  if (url.startsWith('http')) window.open(url, '_blank', 'noopener');
  else window.location.href = url;
}

/* ===== PIX ===== */
function revealPix() {
  const c = document.getElementById('pixCode'), b = document.getElementById('pixBtn');
  if (c.dataset.on === '1') {
    navigator.clipboard && navigator.clipboard.writeText(LINKS.pix).then(() => { b.textContent = tr('ui.copied'); setTimeout(() => b.textContent = tr('ui.copy'), 1800); });
    return;
  }
  c.textContent = LINKS.pix; c.dataset.on = '1'; b.textContent = tr('ui.copy');
}

/* ===== RENDERIZADORES (leem js/data.js) ===== */
function renderHubsynk(id) {
  const el = document.getElementById(id); if (!el || typeof HUBSYNK === 'undefined') return;
  const h = HUBSYNK, dl = h.download || h.github || h.url;
  const downloadName = h.downloadName || 'HubSynk_Setup_v1.0.zip';
  el.innerHTML = `<article class="hs-hero" aria-labelledby="hs-title">
    <div class="hs-top">
      <div class="hs-logo"><i class="fab fa-windows"></i></div>
      <div class="hs-title">
        <span class="ft-label">★ ${tr('ui.highlight')} · WINDOWS</span>
        <h3 id="hs-title">${esc(h.nome)}</h3>
        <span class="hs-ver">v1.0 · ${tr('ui.free')}</span>
      </div>
    </div>
    <p>${esc(L(h.desc))}</p>
    <div class="dev-chips">${(L(h.itens)||[]).map(i=>`<span>${esc(i)}</span>`).join('')}</div>
    <a class="btn-cta btn-big" href="${dl}" download="${esc(downloadName)}" type="application/zip" aria-label="${tr('ui.dlhub')} ${esc(h.nome)}" referrerpolicy="no-referrer"><i class="fas fa-download" aria-hidden="true"></i> ${tr('ui.dlhub')}</a>
    <small class="hs-note">${tr('hs.sub')}</small>
  </article>`;
}
function renderApps(id) {
  const el = document.getElementById(id); if (!el || typeof APPS === 'undefined') return;
  el.innerHTML = APPS.map(a => `
    <div class="app-item">
      <div class="app-item-head"><span class="app-item-icon">${a.icone}</span><h4>${esc(L(a.nome))}</h4><span class="card-tag">${tr('ui.free')}</span></div>
      <p>${esc(L(a.desc))}</p>
      <div class="app-actions">
        <a class="btn-cta secondary" href="${a.site}" target="_blank" rel="noopener"><i class="fas fa-globe"></i> ${tr('ui.site')}</a>
        <a class="btn-cta" href="${a.app}" target="_blank" rel="noopener"><i class="fas fa-play"></i> ${tr('ui.openapp')}</a>
      </div>
    </div>`).join('');
}
function renderDev(id) {
  const el = document.getElementById(id); if (!el || typeof EM_DEV === 'undefined') return;
  el.innerHTML = EM_DEV.map(a => { const it = L(a.itens); return `
    <div class="app-item dev">
      <div class="app-item-head"><span class="app-item-icon">${a.icone}</span><h4>${esc(L(a.nome))}</h4><span class="card-tag">${tr('ui.devtag')}</span></div>
      <p>${esc(L(a.desc))}</p>
      ${it && it.length ? `<div class="dev-chips">${it.map(i=>`<span>${esc(i)}</span>`).join('')}</div>` : ''}
      <div class="loader"><i style="width:${a.progresso||20}%"></i></div>
      <div class="loader-label"><span>${tr('ui.loading')}</span><b>${tr('ui.indev')}</b></div>
    </div>`; }).join('');
}
function renderWindows(id) {
  const el = document.getElementById(id); if (!el || typeof WINDOWS === 'undefined') return;
  el.innerHTML = WINDOWS.map(w => {
    const direct = !!w.download, href = w.download || w.github || w.url;
    return `
    <div class="app-item">
      <div class="app-item-head"><span class="app-item-icon">${w.icone||'🪟'}</span><h4>${esc(L(w.nome))}</h4><span class="card-tag">${tr('ui.free')}</span></div>
      <p>${esc(L(w.desc)||'')}</p>
      <div class="app-actions"><a class="btn-cta" href="${href}" ${direct ? 'download' : 'target="_blank"'} rel="noopener"><i class="fas fa-download"></i> ${tr(direct ? 'ui.download' : 'ui.dlgh')}</a></div>
    </div>`; }).join('');
}
function renderLab(id) {
  const el = document.getElementById(id); if (!el || typeof REPO_LAB === 'undefined') return;
  el.innerHTML = `<div class="dev-chips">${REPO_LAB.map(n=>`<span>${esc(n)}</span>`).join('')}</div>
    <a class="btn-cta secondary" href="${REPO_LAB_LINK}" target="_blank" rel="noopener" style="width:100%"><i class="fab fa-github"></i> ${tr('ui.openlab')} — ${REPO_LAB.length}</a>`;
}
function renderSlots() {
  document.querySelectorAll('.ad-slot').forEach(el => {
    const b = (typeof BANNERS !== 'undefined') ? BANNERS[+el.dataset.slot] : null;
    if (b && b.img) {
      el.innerHTML = `<a class="ad has-img" href="${b.link||'#'}" target="_blank" rel="noopener sponsored"><img src="${b.img}" alt="${esc(b.alt||'')}" loading="lazy"></a>`;
    } else {
      el.innerHTML = `<a class="ad ad-bubble" href="apoio.html#marca" aria-label="${tr('ad.title')}"><span class="ad-icon" aria-hidden="true"><i class="fas fa-bullhorn"></i></span><span class="ad-copy"><span class="ad-label">${tr('ad.label')}</span><strong class="ad-title">${tr('ad.title')}</strong><span class="ad-sub">${tr('ad.sub')}</span></span><span class="ad-cta">${tr('ad.btn')} <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span></a>`;
    }
  });
}

/* ===== EFEITO DE CLIQUE ===== */
function initRipple() {
  const st = document.createElement('style');
  st.textContent = '@keyframes cyberRipple{0%{transform:scale(1);opacity:1}100%{transform:scale(3);opacity:0}}';
  document.head.appendChild(st);
  document.addEventListener('click', e => {
    if (!e.target.closest('.app-card, .btn-cta')) return;
    const r = document.createElement('div');
    r.style.cssText = `position:fixed;pointer-events:none;border-radius:50%;background:radial-gradient(circle,rgba(0,212,255,.8) 0%,transparent 70%);width:100px;height:100px;left:${e.clientX-50}px;top:${e.clientY-50}px;animation:cyberRipple .6s ease-out forwards;z-index:9999`;
    document.body.appendChild(r); setTimeout(() => r.remove(), 600);
  });
}

/* ===== INSTALAR O APP (PWA) ===== */
let deferredPrompt = null;
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
function updateInstallUI() {
  const hasInstallBanner = !!document.querySelector('.install-banner');
  document.querySelectorAll('[data-install-wrap]').forEach(el => {
    el.hidden = isStandalone() || (hasInstallBanner && el.classList.contains('install-float'));
  });
}
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; window.__dp = e; });
window.addEventListener('appinstalled', () => { deferredPrompt = null; updateInstallUI(); });
function showInstallHelp() {
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const bg = document.createElement('div'); bg.className = 'modal-bg';
  bg.innerHTML = `<div class="modal-box"><h3>📲 ${tr('inst.title')}</h3><p>${tr(ios ? 'inst.ios' : 'inst.other')}</p><button class="btn-cta">${tr('inst.close')}</button></div>`;
  bg.addEventListener('click', e => { if (e.target === bg || e.target.tagName === 'BUTTON') bg.remove(); });
  document.body.appendChild(bg);
}
async function installApp() {
  if (isStandalone()) return;
  if (!deferredPrompt && window.__dp) deferredPrompt = window.__dp;
  if (deferredPrompt) {
    deferredPrompt.prompt();
    try { await deferredPrompt.userChoice; } catch(e){}
    deferredPrompt = null; updateInstallUI(); return;
  }
  showInstallHelp();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-install]').forEach(b => b.addEventListener('click', installApp));
  updateInstallUI();
  initProfile(); initRipple();
  document.querySelectorAll('.lang-switch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  document.querySelectorAll('.app-card').forEach((c,i) => c.style.animationDelay = (i*0.1)+'s');
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { const b = document.querySelector('.btn-back'); if (b) b.click(); } });
  applyLang();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
});

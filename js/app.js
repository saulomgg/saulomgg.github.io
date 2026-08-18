/* ============================================================
   Saulomgg HUB v3 — global interactions
   ============================================================ */
(() => {
  'use strict';

  /* ---------- Mobile menu ---------- */
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.textContent = open ? '✕' : '☰';
    });
  }

  /* ---------- Active nav link ---------- */
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('.nav a[href]').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ---------- Carousel ---------- */
  const track = document.getElementById('track');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (track) {
    let pos = 0;
    const cards = () => Array.from(track.children);
    const gap = 18;
    const compute = () => {
      const first = cards()[0];
      if (!first) return 0;
      return first.getBoundingClientRect().width + gap;
    };
    const maxPos = () => {
      const m = Math.max(0, track.scrollWidth - track.parentElement.clientWidth - 4);
      return m;
    };
    const apply = () => {
      pos = Math.max(0, Math.min(pos, maxPos()));
      track.style.transform = `translateX(${-pos}px)`;
    };
    if (prevBtn) prevBtn.addEventListener('click', () => { pos -= compute(); apply(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { pos += compute(); apply(); });
    // swipe
    let startX = null;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      if (startX === null) return;
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) { pos += dx > 0 ? compute() : -compute(); apply(); }
      startX = null;
    }, { passive: true });
    window.addEventListener('resize', apply);
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Modal helpers (exposed) ---------- */
  const overlay = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  const close = document.getElementById('modalClose');

  const closeAll = () => {
    if (overlay) overlay.classList.remove('active');
  };

  const openAppModal = (ev, idx, list) => {
    if (ev && ev.preventDefault) ev.preventDefault();
    const app = (list || PAID_APPS)[idx];
    if (!app || !overlay) return;
    let html = `<span class="kicker">${app.category || 'Premium'} · ${app.badge}</span>`;
    html += `<h3>${app.name}</h3>`;
    if (app.gallery && app.gallery.length) {
      html += '<div class="gals">';
      app.gallery.forEach(g => {
        html += `<img src="${ASSETS}${g}" alt="${app.name} - ${g}" loading="lazy">`;
      });
      html += '</div>';
    }
    html += `<p>${app.desc}</p>`;
    if (app.features && app.features.length) {
      html += '<ul>' + app.features.map(f => `<li>${f}</li>`).join('') + '</ul>';
    }
    if (app.price) html += `<div class="price" style="margin-top:10px;">Vitalício · <b>${app.price}</b> — 1 chave, até 3 aparelhos</div>`;
    if (app.links && app.links.length) {
      html += '<div class="modal-actions">';
      app.links.forEach(l => {
        html += `<a href="${l.href}" target="${l.target || '_self'}" rel="noopener" class="${l.cls || ''}">${l.label}</a>`;
      });
      html += '</div>';
    }
    body.innerHTML = html;
    overlay.classList.add('active');
  };

  window.openAppModal = openAppModal;

  if (overlay) {
    close && close.addEventListener('click', closeAll);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeAll(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
  }

  /* ---------- Copy PIX ---------- */
  document.querySelectorAll('.copy-btn[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const val = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(val);
        btn.textContent = '✓ Copiado';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 1800);
      } catch (_) {}
    });
  });

  /* ---------- SW register ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
})();

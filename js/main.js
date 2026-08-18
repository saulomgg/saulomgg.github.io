// ===== SAULOMGG HUB — main.js =====

// ===== CLOCK =====
function updateClock() {
  const now = new Date();
  const t = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  const el = document.getElementById('headerTime');
  if (el) el.textContent = t;
}
setInterval(updateClock, 60000);
updateClock();

// ===== NAVIGATION =====
function navigateTo(url) {
  if (url.startsWith('http')) {
    window.open(url, '_blank', 'noopener');
  } else {
    window.location.href = url;
  }
}

// ===== GLITCH TEXT =====
document.querySelectorAll('.glitch-text').forEach(el => {
  el.setAttribute('data-text', el.getAttribute('data-text') || el.textContent);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.content-card, .app-portal-card, .nosites-grid').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease-out';
  revealObserver.observe(card);
});

// ===== CYBER CLICK RIPPLE =====
document.addEventListener('click', e => {
  if (e.target.closest('.app-card') || e.target.closest('.btn-cta') || e.target.closest('.project-card')) {
    const ripple = document.createElement('div');
    ripple.style.cssText =
      'position:fixed;pointer-events:none;border-radius:50%;background:radial-gradient(circle,rgba(0,212,255,0.8) 0%,transparent 70%);width:100px;height:100px;left:' + (e.clientX - 50) + 'px;top:' + (e.clientY - 50) + 'px;animation:cyberRipple 0.6s ease-out forwards;z-index:9999;';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
});
if (!document.querySelector('[data-ripple-style]')) {
  const st = document.createElement('style');
  st.setAttribute('data-ripple-style', '');
  st.textContent = '@keyframes cyberRipple{0%{transform:scale(1);opacity:1}100%{transform:scale(3);opacity:0}}';
  document.head.appendChild(st);
}

// ===== MODAL DE APP =====
const APPS = {
  doce: {
    title: 'DoceGestor',
    category: 'GESTOR · CONFEITARIA',
    desc: 'O DoceGestor é o app completo de gestão para quem trabalha com bolos, doces e encomendas. Calcule o preço certo considerando ingredientes, mão de obra e margem de lucro. Registre vendas, acompanhe faturamento e lucro estimado, organize receitas e insumos, e tenha balanços financeiros mensais. Funciona online e offline — seus dados ficam no seu dispositivo.',
    features: [
      'Calculadora de preço por receita',
      'Controle de custos e lucro real',
      'Registro de vendas e faturamento',
      'Receitas e insumos organizados',
      'Balanço financeiro mensal',
      'Funciona offline e 100% privado',
      'Acesso vitalício — sem mensalidade',
      '1 chave para até 3 aparelhos'
    ],
    price: '<strong>R$ 49,90 — ACESSO VITALÍCIO.</strong> Pague uma vez e use para sempre. Sem mensalidade, sem anúncios.',
    images: ['assets/dg-mockup.jpg', 'assets/dg-print-calcular.jpg', 'assets/dg-print-organize.jpg'],
    ml: 'https://www.mercadolivre.com.br/aplicativo-gestao-confeitaria-docegestor-controle-vendas/up/MLBU4686356819?pdp_filters=item_id:MLB7401439782',
    site: 'https://docegestor.github.io/'
  },
  juri: {
    title: 'JurisGestor',
    category: 'GESTOR · ADVOCACIA',
    desc: 'O JurisGestor foi criado para advogados que precisam controlar prazos processuais e não deixar nenhuma data passar. Organize clientes, honorários com calculadora por % do valor da causa, audiências e o financeiro do escritório — tudo em um app rápido, offline e privado.',
    features: [
      'Controle de prazos com alertas',
      'Cadastro de clientes e processos',
      'Calculadora de honorários',
      'Financeiro do escritório (entradas/saídas)',
      'Agenda de audiências',
      'Funciona offline e 100% privado',
      'Acesso vitalício — sem mensalidade',
      '1 chave para até 3 aparelhos'
    ],
    price: '<strong>R$ 49,90 — ACESSO VITALÍCIO.</strong> Pague uma vez e use para sempre. Sem mensalidade, sem anúncios.',
    images: ['assets/juri-mockup.jpg', 'assets/juri-print-1.jpg', 'assets/juri-print-2.jpg'],
    ml: 'https://www.mercadolivre.com.br/jurisgestor-software-advogado-controle-prazos-app-vitalicio/up/MLBU4715764333?pdp_filters=item_id:MLB5065004315',
    site: 'https://jurigestor.github.io/'
  },
  orca: {
    title: 'OrçaGestor',
    category: 'GESTOR · ORÇAMENTOS',
    desc: 'Crie orçamentos profissionais em PDF em minutos. Cadastre clientes, monte itens com preço e custo, veja sua margem de lucro e envie o orçamento direto pelo WhatsApp. Inclui catálogo de serviços, dados da sua empresa no PDF, modelos personalizáveis e status de vendas.',
    features: [
      'Orçamento em PDF com sua marca',
      'Enviar direto pelo WhatsApp',
      'Custo, margem e lucro por item',
      'Catálogo de serviços',
      'Status de vendas (enviado, aprovado...)',
      '2 modelos de PDF + 6 cores',
      'Funciona offline e 100% privado',
      'Acesso vitalício — sem mensalidade'
    ],
    price: '<strong>R$ 49,90 — ACESSO VITALÍCIO.</strong> Pague uma vez e use para sempre. Sem mensalidade, sem anúncios.',
    images: ['assets/og-mockup.jpg', 'assets/og-1.jpg', 'assets/og-2.jpg', 'assets/og-3.jpg', 'assets/og-8.jpg'],
    ml: 'https://www.mercadolivre.com.br/sistema-de-orcamento-online-profissional--pdf-e-whatsapp/up/MLBU4763330633?pdp_filters=item_id:MLB5082154381',
    site: 'https://orcagestor.github.io/'
  },
  pdf: {
    title: 'PDFGestor',
    category: 'FERRAMENTA · PDF',
    desc: 'Tudo que você precisa com PDF em um só lugar, funcionando 100% offline no seu navegador. Junte vários PDFs, separe páginas específicas, comprima para enviar pelo WhatsApp, adicione assinatura e marca d\'água — seus arquivos nunca saem do seu dispositivo.',
    features: [
      'Unir PDFs (quantos quiser)',
      'Separar páginas específicas',
      'Comprimir PDFs',
      'Assinar (texto, desenho ou imagem)',
      'Fotos → PDF',
      'Marca d\'água e numeração',
      'Trabalho em lote (vários arquivos)',
      'Acesso vitalício — sem mensalidade'
    ],
    price: '<strong>R$ 49,90 — ACESSO VITALÍCIO.</strong> Pague uma vez e use para sempre. Sem mensalidade, sem anúncios.',
    images: ['assets/pdf-mockup.jpg', 'assets/pdf-print-1.jpg', 'assets/pdf-print-2.jpg', 'assets/pdf-print-3.jpg'],
    ml: 'https://www.mercadolivre.com.br/pdfgestor-softwareapp-editar-pdf-unir-separar-comprimir/up/MLBU4770696024?pdp_filters=item_id%3AMLB7431730914',
    site: 'https://pdfgestor.github.io/'
  },
  foto: {
    title: 'FotoGestor',
    category: 'FERRAMENTA · IMAGENS',
    desc: 'A dor mais comum de quem trabalha com fotos: comprimir imagens pesadas para o WhatsApp ou edital, converter HEIC de iPhone para JPG, redimensionar e marcar muitas fotos de uma vez. O FotoGestor faz tudo isso em lote, offline, sem enviar nada para a internet.',
    features: [
      'Comprimir imagens (MB → KB)',
      'Converter HEIC → JPG',
      'Redimensionar em lote',
      'Marca d\'água (texto e imagem)',
      'Fotos → PDF',
      'Imagem sobreposta em lote',
      'Conversões: PNG, WEBP, ICO e mais',
      'Acesso vitalício — sem mensalidade'
    ],
    price: '<strong>R$ 49,90 — ACESSO VITALÍCIO.</strong> Pague uma vez e use para sempre. Sem mensalidade, sem anúncios.',
    images: ['assets/foto-1-mockup.jpg', 'assets/foto-2-comprimir.jpg', 'assets/foto-3-heic.jpg', 'assets/foto-4-converter.jpg', 'assets/foto-8-marca.jpg', 'assets/foto-10-vantagens.jpg'],
    ml: 'https://www.mercadolivre.com.br/fotogestor-comprimir-converter-heic-jpg-marca-agua-pdf-vital/up/MLBU4742622173?pdp_filters=item_id:MLB7432243572',
    site: 'https://fotogestor.github.io/'
  },
  media: {
    title: 'MediaGestor',
    category: 'FERRAMENTA · VÍDEO',
    desc: 'Edite vídeos direto do celular ou computador: corte em pontos específicos (por segundos ou minutos), junte vários vídeos em um só, comprima para enviar e extraia o áudio em MP3. Funciona offline e está em desenvolvimento ativo — novas funções chegando em breve.',
    features: [
      'Cortar vídeo em pontos exatos',
      'Juntar quantos vídeos quiser',
      'Comprimir para WhatsApp',
      'Extrair áudio (MP3)',
      'Presets para redes sociais',
      'Funciona offline — seus vídeos não saem do aparelho',
      'Acesso vitalício — sem mensalidade',
      'Em desenvolvimento — atualizações gratuitas'
    ],
    price: '<strong>R$ 59,90 — ACESSO VITALÍCIO.</strong> Pague uma vez e use para sempre, incluindo atualizações futuras. Sem mensalidade, sem anúncios.',
    images: ['assets/media-mockup.jpg', 'assets/media-cortar.jpg', 'assets/media-juntar.jpg', 'assets/media-comprimir.jpg', 'assets/media-vantagens.jpg'],
    ml: 'https://www.mercadolivre.com.br/mediagestor-editar-video-cortar-juntar-comprimir-converter/up/MLBU4743384683?pdp_filters=item_id:MLB5075740381',
    site: 'https://mediagestor.github.io/'
  }
};

function openModal(key) {
  const app = APPS[key];
  if (!app) return;
  const body = document.getElementById('modal-body');
  if (!body) return;
  body.innerHTML =
    '<h2 class="modal-title">' + app.title + '</h2>' +
    '<p class="modal-category">' + app.category + '</p>' +
    '<p class="modal-desc">' + app.desc + '</p>' +
    '<div class="modal-features">' +
    app.features.map(f => '<div class="feature-item"><span class="check">✓</span><span>' + f + '</span></div>').join('') +
    '</div>' +
    '<div class="modal-gallery">' +
    app.images.map(img => '<img src="' + img + '" alt="' + app.title + '" loading="lazy">').join('') +
    '</div>' +
    '<div class="modal-price">' + app.price + '</div>' +
    '<div class="modal-actions">' +
    '<a href="' + app.ml + '" class="modal-btn ml" target="_blank" rel="noopener">🛒 Comprar no Mercado Livre</a>' +
    '<a href="https://wa.me/5522988195993?text=Ol%C3%A1!%20Tenho%20interesse%20no%20' + encodeURIComponent(app.title) + '%20(compra%20direta)" class="modal-btn zap" target="_blank" rel="noopener">💬 Comprar direto comigo</a>' +
    '<a href="' + app.site + '" class="modal-btn site" target="_blank" rel="noopener">▶ Site oficial do app</a>' +
    '</div>';
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) return;
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== PIX COPY =====
function copyPix() {
  const pix = 'saulomg2@hotmail.com';
  navigator.clipboard.writeText(pix).then(() => {
    const btn = document.querySelector('.pix-copy');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = '✓ PIX copiado!';
    setTimeout(() => { btn.textContent = original; }, 2500);
  }).catch(() => {
    prompt('Copie o PIX abaixo:', pix);
  });
}

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW:', err));
  });
}

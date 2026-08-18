/* ============================================================
   Saulomgg HUB v3 — Central data for apps, tools & services
   ============================================================ */

const ASSETS = 'assets/';

const FREE_APPS = [
  {
    id: 'remed', name: 'Reméd', short: 'R', color: 'var(--green)',
    badge: 'Grátis · PWA',
    desc: 'Controle inteligente de medicamentos, estoque e pedidos de farmácia via WhatsApp. PWA offline e 100% privado.',
    logoUrl: null, links: [
      { label: '▶ Abrir App', href: 'https://saulomgg.github.io/remed-pwa/', target: '_blank', cls: 'login' },
      { label: 'GitHub', href: 'https://github.com/saulomgg/remed-pwa', target: '_blank', cls: 'github' }
    ]
  },
  {
    id: 'meupet', name: 'MeuPet', short: 'M', color: 'var(--purple)',
    badge: 'Grátis · PWA',
    desc: 'Gestão completa de pets: cadastro, rotinas personalizadas e histórico de atividades. Funciona offline e é 100% privado.',
    logoUrl: null, links: [
      { label: '▶ Abrir App', href: 'https://saulomgg.github.io/meupet-pwa', target: '_blank', cls: 'login' },
      { label: 'GitHub', href: 'https://github.com/saulomgg/meupet-pwa', target: '_blank', cls: 'github' }
    ]
  },
  {
    id: 'controleplus', name: 'Controle+', short: 'C+', color: 'var(--cyan)',
    badge: 'Grátis · PWA',
    desc: 'Gestão de assinaturas e gastos recorrentes. Relatórios por categoria, avisos de vencimento e backup em JSON.',
    logoUrl: null, links: [
      { label: '▶ Ver Projeto', href: 'https://github.com/saulomgg/controleplus-pwa', target: '_blank', cls: 'login' },
      { label: 'GitHub', href: 'https://github.com/saulomgg/controleplus-pwa', target: '_blank', cls: 'github' }
    ]
  }
];

const PAID_APPS = [
  {
    id: 'doce', name: 'DoceGestor', short: 'D', color: 'var(--pink)',
    badge: 'Premium · Vitalício', price: 'R$ 49,90',
    category: 'Gestor',
    desc: 'App completo de gestão para confeitarias: calculadora de preço real (ingredientes, mão de obra e lucro), registro de vendas com balanço financeiro, insumos e receitas próprias.',
    gallery: ['dg-mockup.jpg', 'dg-print-calcular.jpg', 'dg-print-organize.jpg'],
    features: [
      'Calculadora de preço com custo real por receita',
      'Registro de vendas com lucro e faturamento',
      'Insumos, ingredientes e receitas próprias',
      'Balanço financeiro com visão do negócio',
      'Funciona offline — dados só no seu aparelho',
      'Chave vitalícia · 1 chave ativa em até 3 aparelhos'
    ],
    links: [
      { label: '▶ Login (abrir app)', href: 'https://docegestor.pages.dev/', target: '_blank', cls: 'login' },
      { label: 'Comprar no Mercado Livre', href: 'https://www.mercadolivre.com.br/docegestor-app-gestao-confeitaria-calcular-preco-vital/up/MLBU4752858528?pdp_filters=item_id:MLB5076005714', target: '_blank', cls: 'buy' },
      { label: 'Comprar direto (WhatsApp)', href: 'https://wa.me/5522988195993?text=Olá! Quero comprar o DoceGestor.', target: '_blank', cls: 'buy' },
      { label: 'Site oficial', href: 'https://docegestor.github.io/', target: '_blank', cls: 'site' }
    ]
  },
  {
    id: 'juri', name: 'JurisGestor', short: 'J', color: 'var(--pink)',
    badge: 'Premium · Vitalício', price: 'R$ 59,90',
    category: 'Gestor',
    desc: 'Gestão para advogados: prazos processuais com alertas, cadastro de clientes, calculadora de honorários e controle financeiro.',
    gallery: ['juri-mockup.jpg', 'juri-print-1.jpg', 'juri-print-2.jpg'],
    features: [
      'Prazos processuais com alertas automáticos',
      'Cadastro de clientes e casos',
      'Calculadora de honorários (% valor da causa)',
      'Financeiro: entradas e saídas por cliente',
      'Agenda de audiências',
      'Offline · chave vitalícia · até 3 aparelhos'
    ],
    links: [
      { label: '▶ Login (abrir app)', href: 'https://jurisgestor.pages.dev/', target: '_blank', cls: 'login' },
      { label: 'Comprar direto (WhatsApp)', href: 'https://wa.me/5522988195993?text=Olá! Quero comprar o JurisGestor.', target: '_blank', cls: 'buy' }
    ]
  },
  {
    id: 'orca', name: 'OrçaGestor', short: 'O', color: 'var(--pink)',
    badge: 'Premium · Vitalício', price: 'R$ 59,90',
    category: 'Gestor',
    desc: 'Orçamentos profissionais gerados em PDF e enviados direto ao cliente pelo WhatsApp. Catálogo de produtos, controle de custos e estilização do PDF com sua logo.',
    gallery: ['og-mockup.jpg', 'og-1.jpg', 'og-2.jpg', 'og-3.jpg'],
    features: [
      'Orçamento em PDF profissional com sua logo',
      'Envio direto ao cliente pelo WhatsApp',
      'Catálogo de produtos e serviços',
      'Custos, gastos e margem em tempo real',
      'Estilize o PDF como quiser',
      'Offline · chave vitalícia · até 3 aparelhos'
    ],
    links: [
      { label: '▶ Login (abrir app)', href: 'https://orcaexpress.pages.dev/', target: '_blank', cls: 'login' },
      { label: 'Comprar direto (WhatsApp)', href: 'https://wa.me/5522988195993?text=Olá! Quero comprar o OrçaGestor.', target: '_blank', cls: 'buy' }
    ]
  },
  {
    id: 'pdf', name: 'PDFGestor', short: 'P', color: 'var(--pink)',
    badge: 'Premium · Vitalício', price: 'R$ 59,90',
    category: 'Ferramenta',
    desc: 'Tudo com PDF em um só lugar: unir, separar, comprimir, assinar, converter e marcar com marca d\'água — processamento em lote, 100% offline.',
    gallery: ['pdf-mockup.jpg', 'pdf-print-1.jpg', 'pdf-print-2.jpg', 'pdf-print-3.jpg'],
    features: [
      'Unir e separar páginas de PDFs',
      'Comprimir para envio fácil',
      'Assinar: texto, desenho ou imagem',
      'Imagens → PDF e marca d\'água',
      'Processamento em lote (vários arquivos)',
      'Offline · chave vitalícia · até 3 aparelhos'
    ],
    links: [
      { label: '▶ Login (abrir app)', href: 'https://pdfgestor.pages.dev/', target: '_blank', cls: 'login' },
      { label: 'Comprar no Mercado Livre', href: 'https://www.mercadolivre.com.br/pdfgestor-softwareapp-editar-pdf-unir-separar-comprimir/up/MLBU4770696024?pdp_filters=item_id=MLB7431730914', target: '_blank', cls: 'buy' },
      { label: 'Comprar direto (WhatsApp)', href: 'https://wa.me/5522988195993?text=Olá! Quero comprar o PDFGestor.', target: '_blank', cls: 'buy' },
      { label: 'Site oficial', href: 'https://pdfgestor.github.io/', target: '_blank', cls: 'site' }
    ]
  },
  {
    id: 'foto', name: 'FotoGestor', short: 'F', color: 'var(--pink)',
    badge: 'Premium · Vitalício', price: 'R$ 49,90',
    category: 'Ferramenta',
    desc: 'Comprimir imagens (MB→KB), converter HEIC→JPG, redimensionar, marca d\'água em lote, imagens sobrepostas, fotos→PDF e mais formatos (ICO, WEBP e outros).',
    gallery: ['foto-1-mockup.jpg', 'foto-2-comprimir.jpg', 'foto-3-heic.jpg', 'foto-4-converter.jpg'],
    features: [
      'Comprimir imagens para WhatsApp e editais',
      'Converter HEIC (iPhone) → JPG',
      'Marca d\'água e sobreposição em lote',
      'Redimensionar e converter (ICO, WEBP...)',
      'Fotos → PDF',
      'Offline · chave vitalícia · até 3 aparelhos'
    ],
    links: [
      { label: '▶ Login (abrir app)', href: 'https://fotogestor.pages.dev/', target: '_blank', cls: 'login' },
      { label: 'Comprar no Mercado Livre', href: 'https://www.mercadolivre.com.br/fotogestor-comprimir-converter-heic-jpg-marca-agua-pdf-vital/up/MLBU4742622173?pdp_filters=item_id=MLB7432243572', target: '_blank', cls: 'buy' },
      { label: 'Comprar direto (WhatsApp)', href: 'https://wa.me/5522988195993?text=Olá! Quero comprar o FotoGestor.', target: '_blank', cls: 'buy' },
      { label: 'Site oficial', href: 'https://fotogestor.github.io/', target: '_blank', cls: 'site' }
    ]
  },
  {
    id: 'media', name: 'MediaGestor', short: 'M', color: 'var(--pink)',
    badge: 'Premium · Vitalício', price: 'R$ 59,90',
    category: 'Ferramenta',
    desc: 'Edição de vídeo direto no navegador: corte automático por tempo, juntar quantos vídeos quiser, comprimir, extrair áudio, presets para redes sociais.',
    gallery: ['media-mockup.jpg', 'media-cortar.jpg', 'media-juntar.jpg', 'media-comprimir.jpg'],
    features: [
      'Corte automático por minutos',
      'Juntar quantos vídeos quiser',
      'Comprimir e converter vídeos',
      'Extrair áudio (MP3)',
      'Presets para redes sociais',
      'Offline · chave vitalícia · até 3 aparelhos'
    ],
    links: [
      { label: '▶ Login (abrir app)', href: 'https://mediagestor.pages.dev/', target: '_blank', cls: 'login' },
      { label: 'Comprar no Mercado Livre', href: 'https://www.mercadolivre.com.br/mediagestor-editar-video-cortar-juntar-comprimir-converter/up/MLBU4743384683?pdp_filters=item_id=MLB5075740381', target: '_blank', cls: 'buy' },
      { label: 'Comprar direto (WhatsApp)', href: 'https://wa.me/5522988195993?text=Olá! Quero comprar o MediaGestor.', target: '_blank', cls: 'buy' },
      { label: 'Site oficial', href: 'https://mediagestor.github.io/', target: '_blank', cls: 'site' }
    ]
  }
];

const SYNK_TOOLS = [
  {
    name: 'ConvertSynk', tag: 'Tool · Conversor',
    desc: 'Conversor de arquivos oficial do ecossistema HubSynk. Instale e execute com um clique, protegido por RSA 4096 + SHA-256.',
    gh: 'https://github.com/saulomgg/convertsynk'
  },
  {
    name: 'AudioSynk', tag: 'Tool · Áudio',
    desc: 'Processamento de áudio do ecossistema Synk: conversão, edição e normalização direto no seu PC.',
    gh: 'https://github.com/saulomgg/audiosynk'
  },
  {
    name: 'MetaSynk', tag: 'Tool · Metadados',
    desc: 'Gestão e edição de metadados de arquivos — parte do ecossistema Synk, com integridade criptográfica.',
    gh: 'https://github.com/saulomgg/metasynk'
  },
  {
    name: 'PDFSynk', tag: 'Tool · PDF',
    desc: 'Manipulação de PDFs para Windows — ferramenta irmã do PDFGestor, executada e protegida pelo HubSynk.',
    gh: 'https://github.com/saulomgg/pdfsynk'
  }
];

const SERVICES = [
  {
    name: 'Site + App Exclusivo', badge: 'Destaque', price: 'a partir de R$ 250',
    desc: 'Seu negócio com site completo (localização, avaliações do Google, SEO avançado) e um aplicativo exclusivo desenvolvido sob medida para o seu nicho.',
    cta: { label: '💬 Solicitar Orçamento', href: 'https://wa.me/5522988195993?text=Olá! Quero um site + app exclusivo para meu negócio.' }
  },
  {
    name: 'Websites', badge: 'Sites', price: 'pagamento único',
    desc: 'Sites personalizados e landing pages profissionais para seu negócio. Sem mensalidade, sem vínculo — você paga uma vez e o site é seu.',
    cta: { label: '💬 Ver Portfólio', href: 'https://wa.me/5522988195993?text=Olá! Tenho interesse em um site personalizado.' }
  },
  {
    name: 'Sistemas & PWAs', badge: 'Custom', price: 'sob medida',
    desc: 'Sistemas web completos com PWA: apps para gestão, vendas, agendamento e calculadoras. Desenvolvidos sob medida para sua necessidade.',
    cta: { label: '💬 Falar Comigo', href: 'https://wa.me/5522988195993?text=Olá! Preciso de um sistema personalizado.' }
  },
  {
    name: 'Automações', badge: 'Python', price: 'sob medida',
    desc: 'Automação de processos repetitivos: bots, scrapers, integrações com APIs, processamento de dados e fluxos inteligentes.',
    cta: { label: '💬 Orçamento', href: 'https://wa.me/5522988195993?text=Olá! Preciso de uma automação.' }
  }
];

// Dados sensíveis (WhatsApp/PIX) nunca são exibidos em texto —
// ficam somente dentro de links wa.me e revelados por interação do usuário.

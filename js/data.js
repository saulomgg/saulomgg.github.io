/* ============================================================
   SAULOMMG HUB v4 — DATA MODULE (único arquivo de cadastro)
   ------------------------------------------------------------
   COMO ADICIONAR UM NOVO APP/PROGRAMA:
   Copie um bloco abaixo, cole dentro do array correto e preencha:
     id        → identificador único (slug, sem espaços)
     name      → nome completo do app (ex.: "DoceGestor")
     desc      → descrição curta (máx. 180 caracteres)
     tone      → cor do card: "green" | "cyan" | "purple" | "pink"
     tag       → rótulo exibido: "GRÁTIS" | "PREMIUM" | "WINDOWS" | "TOOL"
     site      → link do app (pages.dev) — aparece no popup "Entrar no App"
     github    → link do repositório (opcional, deixe "" se não tiver)
     ml        → link do Mercado Livre (opcional)
     zap       → mensagem WhatsApp de compra (opcional)
     price     → texto do preço (opcional, ex.: "R$49,90 · vitalício")
     feats     → até 4 funcionalidades curtas exibidas no popup
   Depois salve e suba no GitHub. Pronto.
   ============================================================ */

const HUB = {

  /* ── Apps GRÁTIS (pwas) ── */
  free: [
    {
      id: "remed", name: "Reméd",
      desc: "Controle inteligente de medicamentos: estoque, horários e pedidos via WhatsApp. PWA offline e 100% privado.",
      tone: "green", tag: "GRÁTIS",
      site: "https://saulomgg.github.io/remed-pwa/",
      github: "https://github.com/saulomgg/remed-pwa",
      feats: ["Estoque de medicamentos", "Alertas de horário", "Pedidos via WhatsApp", "Offline-first"]
    },
    {
      id: "meupet", name: "MeuPet",
      desc: "Gestão completa de pets: cadastro, rotinas personalizadas e histórico de atividades. Offline e privado.",
      tone: "cyan", tag: "GRÁTIS",
      site: "https://saulomgg.github.io/meupet-pwa",
      github: "https://github.com/saulomgg/meupet-pwa",
      feats: ["Cadastro de pets", "Rotinas personalizadas", "Histórico de atividades", "100% offline"]
    },
    {
      id: "controle-plus", name: "Controle+",
      desc: "Gestão de assinaturas e gastos recorrentes com relatórios por categoria, avisos de vencimento e backup JSON.",
      tone: "purple", tag: "GRÁTIS",
      site: "",
      github: "https://github.com/saulomgg/controleplus-pwa",
      feats: ["Assinaturas centralizadas", "Relatórios por categoria", "Avisos de vencimento", "Backup JSON"]
    }
  ],

  /* ── Gestores PAGOS (premium) ── */
  premium: [
    {
      id: "docegestor", name: "DoceGestor",
      desc: "Gestão completa para confeitarias: calculadora de preço real, registro de vendas com lucro, insumos, receitas próprias e balanço financeiro.",
      tone: "pink", tag: "PREMIUM",
      site: "https://docegestor.pages.dev/",
      github: "",
      ml: "https://www.mercadolivre.com.br/docegestor-app-gestao-confeitaria-calcular-preco-vital/up/MLBU4752858528?pdp_filters=item_id:MLB5076005714",
      zap: "Olá! Quero comprar o DoceGestor.",
      price: "R$49,90 · vitalício",
      feats: ["Calculadora de preço real", "Vendas com lucro", "Insumos e receitas", "Balanço financeiro"]
    },
    {
      id: "jurisgestor", name: "JurisGestor",
      desc: "Gestão para advogados: prazos processuais com alertas, clientes, honorários e financeiro em um só lugar.",
      tone: "purple", tag: "PREMIUM",
      site: "https://jurisgestor.pages.dev/",
      github: "",
      ml: "",
      zap: "Olá! Quero comprar o JurisGestor.",
      price: "Vitalício",
      feats: ["Prazos processuais", "Gestão de clientes", "Calculadora de honorários", "Financeiro integrado"]
    },
    {
      id: "orcagestor", name: "OrçaGestor",
      desc: "Orçamentos profissionais em PDF enviados direto ao cliente pelo WhatsApp, com catálogo de produtos e controle de custos.",
      tone: "cyan", tag: "PREMIUM",
      site: "https://orcaexpress.pages.dev/",
      github: "",
      ml: "https://www.mercadolivre.com.br/sistema-de-orcamento-online-profissional--pdf-e-whatsapp/up/MLBU4763330633?pdp_filters=item_id:MLB5082154381",
      zap: "Olá! Quero comprar o OrçaGestor.",
      price: "Vitalício",
      feats: ["Orçamento em PDF", "Envio via WhatsApp", "Catálogo de produtos", "Controle de custos"]
    }
  ],

  /* ── Ferramentas PAGAS ── */
  tools: [
    {
      id: "pdfgestor", name: "PDFGestor",
      desc: "Unir, separar, comprimir, assinar e converter PDFs com marca d'água e processamento em lote. Tudo offline.",
      tone: "pink", tag: "PREMIUM",
      site: "https://pdfgestor.pages.dev/",
      github: "",
      ml: "https://www.mercadolivre.com.br/pdfgestor-softwareapp-editar-pdf-unir-separar-comprimir/up/MLBU4770696024?pdp_filters=item_id:MLB7431730914",
      zap: "Olá! Quero comprar o PDFGestor.",
      price: "Vitalício",
      feats: ["Unir e separar PDFs", "Comprimir arquivos", "Assinar PDF", "Marca d'água em lote"]
    },
    {
      id: "fotogestor", name: "FotoGestor",
      desc: "Comprimir, converter HEIC→JPG e ICO, redimensionar, marca d'água em lote e transformar fotos em PDF.",
      tone: "purple", tag: "PREMIUM",
      site: "https://fotogestor.pages.dev/",
      github: "",
      ml: "https://www.mercadolivre.com.br/fotogestor-comprimir-converter-heic-jpg-marca-agua-pdf-vital/up/MLBU4742622173?pdp_filters=item_id:MLB7432243572",
      zap: "Olá! Quero comprar o FotoGestor.",
      price: "Vitalício",
      feats: ["HEIC → JPG / ICO", "Compressão em lote", "Marca d'água", "Fotos → PDF"]
    },
    {
      id: "mediagestor", name: "MediaGestor",
      desc: "Editar, cortar, juntar, comprimir e converter vídeos com presets prontos para redes sociais.",
      tone: "cyan", tag: "PREMIUM",
      site: "https://mediagestor.pages.dev/",
      github: "",
      ml: "https://www.mercadolivre.com.br/mediagestor-editar-video-cortar-juntar-comprimir-converter/up/MLBU4743384683?pdp_filters=item_id:MLB5075740381",
      zap: "Olá! Quero comprar o MediaGestor.",
      price: "Vitalício",
      feats: ["Cortar e juntar vídeos", "Presets para redes", "Compressão", "Conversão de formato"]
    }
  ],

  /* ── Windows ── */
  windows: {
    hub: {
      id: "hubsynk", name: "HubSynk",
      desc: "Hub de produtividade para Windows: instala, protege e executa todas as ferramentas do ecossistema com segurança criptográfica RSA 4096 + SHA-256 e Python Hub integrado.",
      tone: "cyan", tag: "WINDOWS",
      github: "https://github.com/saulomgg/HubSynk",
      download: "https://github.com/user-attachments/files/28485345/HubSynk_Setup_v1.0.zip",
      feats: ["RSA 4096 + SHA-256", "Execução segura", "Python Hub integrado", "Chave de ativação"]
    },
    tools: [
      { id: "convertsynk", name: "ConvertSynk", desc: "Conversor de arquivos — ferramenta oficial do ecossistema HubSynk.", github: "https://github.com/saulomgg/convertsynk", tag: "TOOL" },
      { id: "audiosynk", name: "AudioSynk", desc: "Processamento de áudio — parte do ecossistema Synk.", github: "https://github.com/saulomgg/audiosynk", tag: "TOOL" },
      { id: "metasynk", name: "MetaSynk", desc: "Gestão e edição de metadados — ferramenta do ecossistema Synk.", github: "https://github.com/saulomgg/metasynk", tag: "TOOL" },
      { id: "pdfsynk", name: "PDFSynk", desc: "Manipulação de PDFs — parte do ecossistema Synk.", github: "https://github.com/saulomgg/pdfsynk", tag: "TOOL" }
    ]
  },

  /* ── Serviços ── */
  services: [
    {
      id: "sites", name: "Websites",
      desc: "Sites personalizados e landing pages profissionais. Sem mensalidade: você paga uma vez e o site é seu.",
      tone: "green",
      feats: ["Site completo com SEO", "Localização e avaliações", "Sem mensalidade", "Vitalício"]
    },
    {
      id: "sistemas", name: "Sistemas & PWAs",
      desc: "Sistemas web completos com PWA: gestão, vendas, agendamento e calculadoras, desenvolvidos sob medida.",
      tone: "cyan",
      feats: ["Aplicativo exclusivo", "Funciona offline", "1 chave vitalícia", "Sob medida"]
    },
    {
      id: "automacao", name: "Automações",
      desc: "Automação de processos repetitivos: bots, scrapers, integrações com APIs e fluxos inteligentes em Python.",
      tone: "purple",
      feats: ["Bots e scrapers", "Integração de APIs", "Processamento de dados", "Fluxos inteligentes"]
    }
  ],

  /* ── Contatos e redes (número do WhatsApp nunca é exibido em texto) ── */
  contact: {
    group: "https://chat.whatsapp.com/BntopSDTuvn1sx0XoAd4iY",
    whatsapp: "https://wa.me/5522988195993?text=Olá, Saulo! Vim pelo seu site.",
    whatsappMsg: "https://wa.me/5522988195993",
    telegram: "https://t.me/saulomgg",
    github: "https://github.com/saulomgg",
    linkedin: "https://www.linkedin.com/in/saulomgg/",
    pix: "saulomg2@hotmail.com"
  },

  /* ── Stats da home ── */
  stats: [
    { n: 10, suffix: "+", label: "Apps e ferramentas" },
    { n: 100, suffix: "%", label: "Offline e privado" },
    { n: 1, suffix: "×", label: "Pagamento vitalício" },
    { n: 0, suffix: "", label: "Mensalidades" }
  ]
};

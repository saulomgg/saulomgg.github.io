/* =====================================================================
   SAULOMGG HUB — ARQUIVO DE DADOS  (único lugar que você precisa editar)
   Textos podem ser simples ("texto") ou em 3 idiomas ({pt:"",en:"",es:""}).
   ===================================================================== */

const LINKS = {
  telegram:  "https://t.me/S0M9Net",
  youtube:   "https://youtube.com/@saulomgg",
  instagram: "https://instagram.com/saulo_mgg",
  github:    "https://github.com/saulomgg",
  linkedin:  "https://www.linkedin.com/in/saulomgg/",
  apoio:     "https://link.mercadopago.com.br/saulomgg",
  stripe:    "https://buy.stripe.com/test_3cI7sN6FT5Er2Xhean2Ji00",
  pix:       "saulomg2@hotmail.com"
};

/* ---------- DESTAQUE WINDOWS ---------- */
const HUBSYNK = {
  icone:"🛡️", nome:"HubSynk",
  download:"https://github.com/user-attachments/files/28485345/HubSynk_Setup_v1.0.zip",
  downloadName:"HubSynk_Setup_v1.0.zip",
  github:"https://github.com/saulomgg/HubSynk",
  url:"https://saulomgg.github.io/windows.html",
  desc:{
    pt:"O hub do seu Windows. Instala, protege e executa todas as ferramentas Windows do ecossistema com segurança criptográfica RSA 4096 + SHA-256 e Python Hub integrado.",
    en:"The hub for your Windows. Installs, protects and runs every Windows tool of the ecosystem with RSA 4096 + SHA-256 cryptographic security and a built-in Python Hub.",
    es:"El hub de tu Windows. Instala, protege y ejecuta todas las herramientas Windows del ecosistema con seguridad criptográfica RSA 4096 + SHA-256 y Python Hub integrado."
  },
  itens:{
    pt:["RSA 4096 + SHA-256","Python Hub integrado","Ambiente isolado","Atualizações controladas"],
    en:["RSA 4096 + SHA-256","Built-in Python Hub","Isolated environment","Controlled updates"],
    es:["RSA 4096 + SHA-256","Python Hub integrado","Entorno aislado","Actualizaciones controladas"]
  }
};

/* ---------- APPS GRÁTIS NO AR ----------
   site = página | app = abre o app direto. Copie um bloco para adicionar.   */
const APPS = [
  { icone:"💊", nome:"Reméd",
    desc:{pt:"Controle de medicamentos: horários, doses e estoque em um só lugar.",
          en:"Medication control: schedules, doses and stock in one place.",
          es:"Control de medicamentos: horarios, dosis y existencias en un solo lugar."},
    site:"https://remedapp.github.io/", app:"https://remedapp.github.io/app/" },
  { icone:"🍰", nome:"DoceGestor",
    desc:{pt:"Gestão para confeiteiras: receitas, custos, pedidos e lucro.",
          en:"Management for bakers: recipes, costs, orders and profit.",
          es:"Gestión para pasteleras: recetas, costos, pedidos y ganancias."},
    site:"https://docegestor.github.io/", app:"https://docegestor.github.io/app/" },
  { icone:"🧾", nome:"Orçamento Express",
    desc:{pt:"Orçamentos rápidos e profissionais para prestadores de serviço.",
          en:"Fast, professional quotes for service providers.",
          es:"Presupuestos rápidos y profesionales para prestadores de servicios."},
    site:"https://orcamentoexpress.github.io/", app:"https://orcamentoexpress.github.io/app/" }
];

/* ---------- EM DESENVOLVIMENTO (barra de loading) ----------
   Quando ficar pronto, mova o bloco para APPS e preencha site/app.          */
const EM_DEV = [
  { icone:"📄", nome:"Pdf Studio", progresso:55,
    desc:{pt:"Editor de PDF profissional.", en:"Professional PDF editor.", es:"Editor de PDF profesional."} },
  { icone:"🔐", nome:"Controle+", progresso:60,
    desc:{pt:"Controle de senhas, logins e pagamentos de streaming, assinaturas e outros.",
          en:"Control of passwords, logins and payments for streaming, subscriptions and more.",
          es:"Control de contraseñas, accesos y pagos de streaming, suscripciones y más."} },
  { icone:"⚖️", nome:"JurisGestor", progresso:40,
    desc:{pt:"Gestão para advogados: prazos processuais com alertas, clientes, honorários e financeiro em um só lugar.",
          en:"Management for lawyers: court deadlines with alerts, clients, fees and finances in one place.",
          es:"Gestión para abogados: plazos procesales con alertas, clientes, honorarios y finanzas en un solo lugar."},
    itens:{pt:["Prazos processuais","Gestão de clientes","Calculadora de honorários","Financeiro integrado"],
           en:["Court deadlines","Client management","Fee calculator","Integrated finances"],
           es:["Plazos procesales","Gestión de clientes","Calculadora de honorarios","Finanzas integradas"]} },
  { icone:"📸", nome:"FotoGestor", progresso:45,
    desc:{pt:"Comprimir, converter HEIC→JPG e ICO, redimensionar, marca d'água em lote e transformar fotos em PDF.",
          en:"Compress, convert HEIC→JPG and ICO, resize, batch watermark and turn photos into PDF.",
          es:"Comprimir, convertir HEIC→JPG e ICO, redimensionar, marca de agua en lote y fotos a PDF."},
    itens:{pt:["HEIC → JPG / ICO","Compressão em lote","Marca d'água","Fotos → PDF"],
           en:["HEIC → JPG / ICO","Batch compression","Watermark","Photos → PDF"],
           es:["HEIC → JPG / ICO","Compresión en lote","Marca de agua","Fotos → PDF"]} },
  { icone:"🎬", nome:"MediaGestor", progresso:35,
    desc:{pt:"Editar, cortar, juntar, comprimir e converter vídeos com presets prontos para redes sociais.",
          en:"Edit, cut, merge, compress and convert videos with ready-made social media presets.",
          es:"Editar, cortar, unir, comprimir y convertir videos con presets listos para redes sociales."},
    itens:{pt:["Cortar e juntar vídeos","Presets para redes","Compressão","Conversão de formato"],
           en:["Cut and merge videos","Social media presets","Compression","Format conversion"],
           es:["Cortar y unir videos","Presets para redes","Compresión","Conversión de formato"]} },
  { icone:"🏠", nome:"Aluguel Gestor", progresso:30,
    desc:{pt:"Controle de imóveis, inquilinos e aluguéis.", en:"Control of properties, tenants and rents.", es:"Control de inmuebles, inquilinos y alquileres."} },
  { icone:"🏗️", nome:"Obra Gestor", progresso:25,
    desc:{pt:"Controle de obras, materiais e custos.", en:"Control of construction works, materials and costs.", es:"Control de obras, materiales y costos."} },
  { icone:"➕", nome:{pt:"E muito mais...",en:"And much more...",es:"Y mucho más..."}, progresso:10,
    desc:{pt:"Novos apps grátis chegando. A ordem depende do apoio e do uso da comunidade.",
          en:"New free apps coming. The order depends on community support and usage.",
          es:"Nuevas apps gratis en camino. El orden depende del apoyo y uso de la comunidad."} }
];

/* ---------- FERRAMENTAS SYNK (rodam dentro do HubSynk) ----------
   { icone, nome, desc, github, download? }  → botões aparecem sozinhos      */
const WINDOWS = [
  { icone:"🔄", nome:"ConvertSynk", github:"https://github.com/saulomgg/convertsynk",
    desc:{pt:"Conversor de arquivos — ferramenta oficial do ecossistema HubSynk.", en:"File converter — official tool of the HubSynk ecosystem.", es:"Conversor de archivos — herramienta oficial del ecosistema HubSynk."} },
  { icone:"🎧", nome:"AudioSynk", github:"https://github.com/saulomgg/audiosynk",
    desc:{pt:"Processamento de áudio — parte do ecossistema Synk.", en:"Audio processing — part of the Synk ecosystem.", es:"Procesamiento de audio — parte del ecosistema Synk."} },
  { icone:"🏷️", nome:"MetaSynk", github:"https://github.com/saulomgg/metasynk",
    desc:{pt:"Gestão e edição de metadados — ferramenta do ecossistema Synk.", en:"Metadata management and editing — Synk ecosystem tool.", es:"Gestión y edición de metadatos — herramienta del ecosistema Synk."} },
  { icone:"📑", nome:"PDFSynk", github:"https://github.com/saulomgg/pdfsynk",
    desc:{pt:"Manipulação de PDFs — parte do ecossistema Synk.", en:"PDF handling — part of the Synk ecosystem.", es:"Manipulación de PDFs — parte del ecosistema Synk."} }
];

/* ---------- REPO LAB (ferramentas Python em teste) ---------- */
const REPO_LAB_LINK = "https://github.com/saulomgg/HubPython/tree/main/tools";
const REPO_LAB = [
  "AI Image Creator","Bilibili Downloader","Binaural Generator","CSV Name Modifier","Cut Video","FFmpeg Editor",
  "IG Link Downloader","Image to PDF","IMC Calculator","Instagram Backup","PDF to JPG","Remove BG",
  "Video Converter","Video Portrait","Webcam Simulator","WebM to MP4","Word Splitter","WordPress AI Poster"
];

/* ---------- BANNERS / ANUNCIANTES ----------
   Cada posição (0, 1) aparece em várias páginas. Vazio = "Sua marca aqui".
   Para ocupar uma posição, troque null por:
   { img:"assets/banner-cliente.png", link:"https://site-do-cliente.com", alt:"Nome do cliente" }
   (imagem sugerida: 600x160)                                                 */
const BANNERS = [
  null,   // posição 0
  null    // posição 1
];

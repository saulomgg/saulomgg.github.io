<div align="center">

# ⚡ SAULOMMG HUB v4.4

**Ecossistema descentralizado de apps locais, ferramentas Windows e desenvolvimento sob medida**

[![Site](https://img.shields.io/badge/site-saulomgg.github.io-00e5ff?style=for-the-badge&logo=github)](https://saulomgg.github.io/)
[![Community](https://img.shields.io/badge/community-S0m9Net-ff3333?style=for-the-badge)](https://t.me/S0M9Net)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-grupo-25D366?style=for-the-badge&logo=whatsapp)](https://chat.whatsapp.com/BntopSDTuvn1sx0XoAd4iY?s=cl&p=a&ilr=1)

</div>

---

## // o que é isso

O **Saulomgg HUB** é o portal central de um ecossistema de ferramentas digitais construído sobre três pilares:

- **Privacidade** — apps que rodam 100% no seu dispositivo, dados nunca saem de lá
- **Pagamento único** — compre uma vez, use para sempre, sem mensalidade, sem assinatura
- **Descentralização** — cada repositório é independente, conectado pela comunidade **S0m9Net**

---

## // arquitetura

```
saulomgg.github.io/
├── index.html          # Home — hero, apps premium & grátis, banner HubSynk, manifesto
├── apps.html           # Todos os apps: tabs Grátis / Gestores / Ferramentas
├── windows.html        # HubSynk + ferramentas Synk (ConvertSynk, AudioSynk, MetaSynk, PDFSynk)
├── servicos.html       # Serviços sob medida: site + app exclusivo
├── sobre.html          # Roadmap + stack & habilidades
├── comunidade.html     # S0m9Net — grupos, apoio PIX, ciclo de financiamento
├── css/system.css      # Design system cyberpunk (minificado)
├── js/data.js          # JSON central — todos os apps, links e contatos
├── js/app.js           # Motor de renderização: WebGL, GSAP, popups
├── manifest.json       # PWA — instalável como app no celular/PC
├── sw.js               # Service Worker — offline-first
└── 404.html            # Redireciona para a home
```

---

## // apps do ecossistema

### Gestão (Premium)
| App | Nicho | Funcionalidade |
|-----|-------|----------------|
| **DoceGestor** | Confeitaria | Precificação, vendas, insumos, balanço |
| **JurisGestor** | Advogados | Prazos, clientes, honorários, financeiro |
| **OrçaGestor** | Prestadores | Orçamentos PDF, WhatsApp, catálogo |

### Ferramentas (Premium)
| App | Função |
|-----|--------|
| **PDFGestor** | Unir, separar, comprimir, assinar PDFs |
| **FotoGestor** | Compressão, HEIC→JPG, marcas d'água |
| **MediaGestor** | Cortar, juntar, converter vídeos |

### Grátis (Open)
| App | Função |
|-----|--------|
| **Reméd** | Controle de medicamentos e estoque |
| **MeuPet** | Gestão de pets e rotinas |
| **Controle+** | Gestão de assinaturas e gastos |

### Windows (HubSynk)
| Tool | Descrição |
|------|-----------|
| **HubSynk** | Hub principal — gerencia todas as ferramentas com segurança criptográfica |
| **ConvertSynk** | Conversor de arquivos |
| **AudioSynk** | Processamento de áudio |
| **MetaSynk** | Edição de metadados |
| **PDFSynk** | Manipulação de PDFs |

---

## // comunidade S0m9Net

A comunidade é o motor do ecossistema. Cada compra financia o desenvolvimento de novos apps gratuitos e atualizações.

- **Telegram:** [t.me/S0M9Net](https://t.me/S0M9Net) — canal de novidades e feedback
- **WhatsApp:** [Grupo S0m9Net](https://chat.whatsapp.com/BntopSDTuvn1sx0XoAd4iY?s=cl&p=a&ilr=1) — suporte direto

```json
{
  "ciclo": {
    "compra": "financia o projeto",
    "resultado": "novos apps gratuitos",
    "comunidade": "S0m9Net"
  }
}
```

---

## // stack técnica

| Tecnologia | Uso |
|------------|-----|
| Three.js / WebGL | Background 3D animado |
| GSAP + ScrollTrigger | Animações de scroll |
| AOS | Reveal on scroll |
| CSS Grid + Flexbox | Layout responsivo mobile-first |
| Service Worker | PWA offline |
| RSA 4096 + SHA-256 | Segurança das ferramentas Windows |

---

## // deploy

1. Delete os arquivos antigos do repositório
2. Upload dos arquivos deste ZIP na raiz
3. GitHub Pages atualiza em ~1min: **https://saulomgg.github.io/**

---

## // adicionar novo app

Edite `js/data.js` — adicione o objeto no array correspondente (`HUB.free`, `HUB.premium` ou `HUB.tools`). O motor de renderização gera os cards e popups automaticamente.

```js
{
  id: "nomeapp",
  name: "Nome App",
  desc: "Descrição curta do que faz",
  tone: "green",
  tag: "GRÁTIS",
  site: "https://...",
  github: "https://github.com/...",
  feats: ["Feature 1", "Feature 2", "Feature 3"]
}
```

---

<div align="center">

**built with `js` + `webgl` + `coffee`** · pagamento único · dados locais · comunidade S0m9Net

</div>

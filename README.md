# Saulomgg HUB — v2 (Layout Cyberpunk Multi-página)

Central oficial de aplicativos, ferramentas e serviços do Saulo.
Site multi-página no estilo NOE Cyber: neon, glitch, fonte Orbitron.

## Como subir no GitHub (saulomgg.github.io)

1. Abra o repositório `saulomgg.github.io` no GitHub.
2. Faça upload de TODO o conteúdo deste pacote na **raiz** do repositório:
   - `html/` (páginas)
   - `css/`, `js/`, `assets/` (estilos, scripts e imagens)
   - `manifest.json` e `sw.js` (PWA)
   - `404.html`
3. Ative o GitHub Pages em **Settings → Pages → Source: main /root**.
4. O site abre em `https://saulomgg.github.io/` e a home fica em `https://saulomgg.github.io/html/index.html` (o link `https://saulomgg.github.io/` também funciona, pois a raiz lista os arquivos; para entrar direto na home, fixe o link `html/index.html`).

## Páginas

| Página | Caminho |
|---|---|
| Home (destinos) | `html/index.html` |
| Gestores (Doce, Juris, Orça) | `html/gestores.html` |
| Ferramentas (PDF, Foto, Media) | `html/ferramentas.html` |
| Gratuitos (Reméd, MeuPet, Controle+) | `html/gratuitos.html` |
| Windows (HubSynk destaque) | `html/windows.html` |
| Serviços Freelance (site + app R$250) | `html/servicos.html` |
| Comunidade / Fórum Telegram | `html/comunidade.html` |
| Apoio (PIX, filosofia vitalício) | `html/apoio.html` |
| Redes sociais | `html/redes-sociais.html` |

## Modais de app (pop-up)

Clique em qualquer card de app para abrir o pop-up com: descrição,
vantagens, galeria de prints/mockup, preço vitalício e botões de compra
(Mercado Livre / compra direta WhatsApp / site oficial).

## Links de venda configurados

- DoceGestor: Mercado Livre + WhatsApp (22 98819-5993) + docegestor.github.io
- JurisGestor: Mercado Livre + WhatsApp + jurisgestor.github.io
- OrçaGestor: Mercado Livre + WhatsApp + orcagestor.github.io
- PDFGestor: Mercado Livre + WhatsApp + pdfgestor.github.io
- FotoGestor: Mercado Livre + WhatsApp + fotogestor.github.io
- MediaGestor: Mercado Livre + WhatsApp + mediagestor.github.io

## PIX de apoio

E-mail/chave: saulomg2@hotmail.com (com botão "copiar chave").

## PWA / offline

`manifest.json` + `sw.js` já configurados (cache de todas as páginas e imagens).
Para instalar no celular: menu do navegador → "Adicionar à tela inicial".

## Adicionar um novo app pago

1. Em `js/main.js`, adicione uma entrada em `APPS` (id, nome, categoria, descrição, features, gallery, preço, links ML/zap/site).
2. Na página correspondente (`gestores.html` ou `ferramentas.html`), copie um bloco `.project-card.paid` e mude `onclick="openModal('seuId')"`.

## Adicionar um app grátis

1. Em `js/main.js`, adicione a entrada em `APPS` com `type: 'free'` e `siteUrl`.
2. Em `gratuitos.html`, copie um bloco de card grátis apontando para o site oficial.

## Ajustes futuros

- Trocar o link do grupo do fórum Telegram (`t.me/+...`) pelo convite real.
- Substituir o link do GitHub do desenvolvedor se mudar.

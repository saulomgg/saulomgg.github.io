# Saulomgg HUB v3

Site oficial do ecossistema: https://saulomgg.github.io/

## Estrutura

- index.html — home com carrossel de apps (grátis, premium e HubSynk)
- apps.html — aplicativos grátis + pagos (com botão Login → pages.dev)
- windows.html — HubSynk + ferramentas Synk (ConvertSynk, AudioSynk, MetaSynk, PDFSynk)
- servicos.html — serviços freelance (site + app exclusivo a partir de R$250)
- sobre.html — Sobre Mim
- comunidade.html — fórum Telegram, canal, suporte e PIX
- css/ js/ assets/ — estilos, scripts e imagens
- manifest.json + sw.js — PWA offline (funciona instalado)
- 404.html — redireciona para a home

## Como subir no GitHub

1. Apague os arquivos do site antigo no repositório saulomgg.github.io (incluindo a pasta html/ e o index antigo)
2. Em Add file → Upload files, arraste TODO o conteúdo deste ZIP na raiz
3. Aguarde 1-2 minutos; o Pages atualiza sozinho em https://saulomgg.github.io/

## Como adicionar um app novo

Edite js/data.js: adicione o app no array PAID_APPS (com gallery de imagens em assets/) e em apps.html o card renderiza automaticamente. Modais usam as imagens da galeria automaticamente.

## Observações

- Links do fórum Telegram estão genéricos (t.me/saulomgg) — trocar pelo convite real do grupo quando criado
- Apps pagos: botões "Login" abrem os sites .pages.dev de cada app

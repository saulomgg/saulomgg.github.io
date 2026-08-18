# Saulomgg HUB — v2 (Layout Cyberpunk Multi-página)

## ATENÇÃO — Estrutura para a RAIZ do repositório

Este pacote deve ser enviado na **RAIZ** do repositório `saulomgg.github.io`.
NÃO crie nenhuma pasta. Ao descompactar, os arquivos `index.html`,
`gestores.html`, `css/`, `js/`, `assets/` etc. devem aparecer logo na
primeira tela do repositório (no mesmo nível do README.md).

A home abre diretamente em: https://saulomgg.github.io/

## Conteúdo

| Arquivo/Pasta | Função |
|---|---|
| index.html | Home — "Escolha seu destino" (8 cartões) |
| gestores.html | DoceGestor, JurisGestor, OrçaGestor |
| ferramentas.html | PDFGestor, FotoGestor, MediaGestor |
| gratuitos.html | Reméd, MeuPet, Controle+ |
| windows.html | HubSynk (destaque em janela de navegador) + ferramentas Synk |
| servicos.html | Site + App exclusivo a partir de R$250 |
| comunidade.html | Fórum Telegram, grupos, suporte |
| apoio.html | PIX saulomg2@hotmail.com + filosofia vitalício/privacidade |
| redes-sociais.html | GitHub, WhatsApp, Telegram |
| 404.html | Redireciona para a home |
| css/ js/ assets/ | Estilos, scripts e imagens (mockups e prints dos apps) |
| manifest.json sw.js | PWA offline (cache de todas as páginas) |

## Modais (pop-up dos apps)

Clique em qualquer card de app para abrir o pop-up com prints/mockups,
vantagens, preço vitalício e botões: Mercado Livre, compra direta
WhatsApp (22 98819-5993) e site oficial do app.

## Como subir no GitHub (atualização do site)

1. Acesse https://github.com/saulomgg/saulomgg.github.io
2. Recomendação: primeiro APAGUE os arquivos antigos do site v1 do
   repositório (para não sobrar nada da versão antiga).
3. Em "Add file" → "Upload files", arraste o conteúdo deste pacote na raiz.
4. Comite e aguarde 1-2 minutos — o GitHub Pages atualiza automaticamente.

## Adicionar um app novo

- Pago: adicione entrada em `APPS` (js/main.js) e copie um bloco
  `.project-card.paid` na página da categoria.
- Grátis: adicione entrada com `type: 'free'` e coloque um card na
  gratuitos.html apontando para o site oficial.
- Novas imagens: coloque em `assets/` e referencie com `assets/nome.jpg`.

## Pendências para o usuário

- Trocar o link do fórum Telegram (`t.me/+saulomgg_hub`) pelo convite
  real do grupo, quando criar.
- Conferir links de Mercado Livre dos apps (estão em js/main.js).

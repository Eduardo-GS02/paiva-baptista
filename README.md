# Paiva & Baptista Advogados — Landing Page

Landing page estática em HTML, CSS e JavaScript.

## Arquivos

- `index.html`: estrutura e conteúdo
- `styles.css`: identidade visual e responsividade
- `script.js`: menu mobile, FAQ e animações
- `assets/`: logotipos e fotografia

## Como abrir

Abra o arquivo `index.html` em qualquer navegador.

## Como publicar

A pasta pode ser publicada em serviços como Netlify, Vercel, GitHub Pages ou em uma hospedagem convencional.

## Edições mais comuns

### WhatsApp
O número está configurado como `5516994217869`. Pesquise por esse número no `index.html` para substituí-lo.

### Textos
Todo o conteúdo está no `index.html`, organizado por seções com comentários visuais e IDs.

### Fotos dos advogados
As fotografias ficam na pasta `assets`.

Quando receber as fotos de Romero e Venâncio:
1. salve-as em `assets/`;
2. substitua o bloco `lawyer-placeholder` correspondente por:
   `<div class="lawyer-photo"><img src="assets/nome-da-foto.jpg" alt="Retrato de Nome do Advogado"></div>`.

### Cores
As cores principais ficam no início de `styles.css`, dentro de `:root`.

## Observações

- O conteúdo evita promessa de resultado.
- O site contém SEO básico, dados estruturados e acessibilidade básica.
- Antes da publicação, recomenda-se revisar textos, horários de atendimento, política de privacidade e eventual atendimento remoto.


## Alterações recentes

- Hero principal com rotação automática entre os 3 advogados.
- Daniel aparece com foto real.
- Romero e Venâncio aparecem em slides de placeholder elegantes até as fotos serem adicionadas.
- Paleta visual atualizada para as cores do escritório: `#1F3F5E`, `#C6A573` e `#264367`.


## Correções mobile
- Botão flutuante do WhatsApp convertido em botão circular compacto no celular, com suporte à área segura de iPhone.
- Removido o preenchimento inferior que causava desalinhamento.
- Ajustes de hero, cards, textos, menu e rodapé para telas pequenas.
- Proteção contra rolagem horizontal acidental.

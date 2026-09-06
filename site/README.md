# HK Custom — Site institucional

Site institucional e comercial da HK Custom (React + Vite + Tailwind CSS). Sem checkout — o objetivo é apresentar os produtos e direcionar o visitante para Mercado Livre e Shopee.

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Onde editar

- **Links de venda e contato**: `src/config/site.js` (Mercado Livre, Shopee, WhatsApp, Instagram, e-mail).
- **Produtos**: `src/data/products.js` — para adicionar um novo produto, inclua um novo objeto no array; os componentes já renderizam a partir dele.
- **Diferenciais e FAQ**: `src/data/content.js`.
- **Imagens**: pasta `public/`.

## Stack

React 19 · Vite · Tailwind CSS v4 · lucide-react

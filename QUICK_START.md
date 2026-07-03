# Astro & Physics Guide - Quick Start Guide

**Bem-vindo ao seu novo blog de Física! 🚀**

## ⚡ Iniciar em 30 Segundos

```bash
# 1. Instale dependências
npm install

# 2. Inicie o servidor dev
npm run dev

# 3. Acesse http://localhost:3000 🎉
```

---

## 📚 Próximos Passos

### 1️⃣ **Personalize seu site**
- Edite `Header.astro` para mudar o título
- Atualize links sociais no `Footer.astro`
- Customize cores em `tailwind.config.cjs`

### 2️⃣ **Crie seu primeiro post**
```bash
# Copie ou crie um arquivo em:
src/content/blog/seu-novo-post.md
```

Estrutura mínima:
```markdown
---
title: "Título"
description: "Descrição"
pubDate: 2024-12-20
image: "https://url-imagem.jpg"
draft: false
---

# Seu conteúdo aqui
```

### 3️⃣ **Explore os arquivos**
- `src/components/` → Componentes reutilizáveis
- `src/layouts/` → Templates de página
- `src/pages/` → Páginas (roteamento automático)

---

## 📖 Documentação Completa

- **README.md** - Visão geral do projeto
- **ARCHITECTURE.md** - Estrutura e padrões
- **USAGE.md** - Guia de uso e customizações

---

## 🎨 Sistema Visual

### Paleta Catppuccin
- **Light (Latte)**: Fundo claro `#eff1f5`
- **Dark (Mocha)**: Fundo escuro `#1e1e2e`
- **Destaque**: Mauve para interações

### Fonte
- **JetBrains Mono** - Monospace elegante

---

## 🌙 Toggle de Tema

Clique no ícone Sun/Moon no canto superior direito!

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel && vercel
```

### Netlify
```bash
npm i -D netlify-cli && netlify deploy
```

---

## 💡 Dicas

✅ Use `npm run dev` para desenvolvimento  
✅ Posts em `draft: true` não aparecem  
✅ Imagens em `public/` servem como-está  
✅ Busca funciona em tempo real  
✅ Tema persiste em localStorage  

---

## 🐛 Problemas?

1. **Tema não funciona?** → Limpe localStorage e cache
2. **Posts não aparecem?** → Verifique `draft: false`
3. **Build falha?** → `npm run build` com logs detalhados

---

## 📞 Suporte

- [Docs Astro](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com)
- [Catppuccin Colors](https://catppuccin.com)

---

**Boa sorte com seu blog! 🌟**

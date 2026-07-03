# 🎓 Guia de Uso & Customizações

Documentação prática para usar e estender o projeto.

---

## 📝 Trabalhando com Posts

### Estrutura Básica de um Post

```markdown
---
title: "O Título do Seu Post"
description: "Uma breve descrição que aparece na preview do card"
pubDate: 2024-12-20
image: "https://images.unsplash.com/photo-xxxxx?w=800&h=400&fit=crop"
draft: false
---

# Seu Conteúdo em Markdown

## Seções principais

Todo post suporta:
- Headings (H1 a H6)
- Parágrafos
- Listas ordenadas e não-ordenadas
- Blockquotes
- Code blocks com syntax highlighting
- Imagens
- Links
```

### Campos Obrigatórios
- `title` (string): Título que aparece em cards e página
- `description` (string): Resumo do post
- `pubDate` (date): Data de publicação (formato: YYYY-MM-DD)
- `image` (string): URL da imagem de preview
- `draft` (boolean): Se `true`, não aparece na listagem

### Exemplo Completo

```markdown
---
title: "Relatividade Especial de Einstein"
description: "Como Einstein revolucionou nossa compreensão do tempo e espaço"
pubDate: 2024-12-20
image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=400&fit=crop"
draft: false
---

## Introdução

A teoria da relatividade especial, publicada em 1905, mudou fundamentalmente nossa compreensão da física.

## Conceitos-Chave

### Velocidade da Luz Constante

A velocidade da luz no vácuo é constante para todos os observadores.

$$c = 299.792.458 \text{ m/s}$$

### Dilatação do Tempo

$$t' = \frac{t}{\sqrt{1 - v^2/c^2}}$$

Onde $v$ é a velocidade do objeto em relação ao observador.

## Conclusão

Este princípio leva a consequências fascinantes...
```

---

## 🎨 Customizando Cores

### Alterando a Paleta Catppuccin

**Arquivo**: `tailwind.config.cjs`

```javascript
// Adicione cores customizadas
const catppuccin = {
  latte: {
    // ... colores existentes
    custom: '#FF6B6B', // ← Adicione aqui
  },
  mocha: {
    // ... cores existentes
    custom: '#FF8787', // ← Adicione aqui
  },
};
```

### Usando Cores em Componentes

```astro
<!-- No modo light: usa cor Latte -->
<!-- No modo dark: usa cor Mocha -->
<div class="bg-light-mauve dark:bg-dark-mauve">
  Texto com fundo Mauve
</div>

<!-- Ou use cores customizadas -->
<div class="text-light-custom dark:text-dark-custom">
  Texto customizado
</div>
```

### Transições Suaves

Todas as mudanças de cor devem ter transição:

```astro
<button class="text-light-text dark:text-dark-text transition-colors duration-300 hover:text-light-mauve dark:hover:text-dark-mauve">
  Botão
</button>
```

---

## 🧩 Criando Novos Componentes

### Exemplo: Componente "Badge"

```astro
---
// src/components/Badge.astro
export interface Props {
  label: string;
  color?: 'mauve' | 'sapphire' | 'peach';
}

const { label, color = 'mauve' } = Astro.props;

const colorClasses = {
  mauve: 'bg-light-mauve dark:bg-dark-mauve text-white',
  sapphire: 'bg-light-sapphire dark:bg-dark-sapphire text-white',
  peach: 'bg-light-peach dark:bg-dark-peach text-white',
};
---

<span class={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colorClasses[color]} transition-colors duration-300`}>
  {label}
</span>
```

**Usar em um Post:**
```astro
import Badge from '../components/Badge.astro';

<Badge label="Física Quântica" color="sapphire" />
```

---

## 📱 Tipografia

### Estrutura de Headings

```markdown
# H1 - Título Principal (use apenas 1 por página)
## H2 - Seção Principal
### H3 - Subseção
#### H4 - Subsecção menor
```

### Tamanhos Configuráveis

No `tailwind.config.cjs`:

```javascript
theme: {
  fontSize: {
    xs: ['0.75rem', '1rem'],
    sm: ['0.875rem', '1.25rem'],
    base: ['1rem', '1.5rem'],
    lg: ['1.125rem', '1.75rem'],
    xl: ['1.25rem', '1.75rem'],
    '2xl': ['1.5rem', '2rem'],
    // ... adicione mais
  },
}
```

### Linha de Base

Ajuste line-height em `BaseLayout.astro`:

```css
body {
  line-height: 1.6;  /* 1.5-1.8 é ideal para leitura */
  letter-spacing: 0.5px;  /* Espaçamento entre letras */
}
```

---

## 🔍 Busca e Filtros

### Como Funciona a Busca

No `src/pages/index.astro`:

```javascript
searchInput?.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  
  searchItems.forEach((item) => {
    const title = item.getAttribute('data-title') || '';
    const description = item.getAttribute('data-description') || '';
    const matches = title.includes(query) || description.includes(query);
    
    item.classList.toggle('hidden', !matches);
  });
});
```

### Expandindo a Busca

Para buscar por tags também:

```astro
<!-- Em index.astro -->
<div class="search-item" 
  data-title={post.data.title.toLowerCase()} 
  data-description={post.data.description.toLowerCase()}
  data-tags={post.data.tags?.join(' ').toLowerCase() || ''}>
  <!-- ... -->
</div>

<!-- Script -->
<script>
  const query = e.target.value.toLowerCase();
  const matches = 
    title.includes(query) || 
    description.includes(query) ||
    tags.includes(query); // ← Adicionado
</script>
```

---

## 🌙 Tema Claro/Escuro

### Como Funciona

1. **Detecção** em `BaseLayout.astro`:
```javascript
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add('dark');
}
```

2. **Toggle** em `Header.astro`:
```javascript
themeToggle?.addEventListener('click', () => {
  const isDark = html.classList.contains('dark');
  
  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});
```

3. **Aplicação** em componentes:
```astro
<!-- Automático com Tailwind -->
<div class="bg-white dark:bg-dark-base">
  Muda de fundo conforme o tema
</div>
```

---

## 📐 Layout & Espaçamento

### Padrão de Espaçamento

Use múltiplos de 4:

```astro
<!-- Padding -->
<div class="p-4">   <!-- 1rem -->
<div class="p-6">   <!-- 1.5rem -->
<div class="p-8">   <!-- 2rem -->

<!-- Margin -->
<div class="mb-4">  <!-- margin-bottom 1rem -->
<div class="mt-8">  <!-- margin-top 2rem -->
<div class="gap-6"> <!-- gap 1.5rem em flex/grid -->
```

### Container Máximo

```astro
<!-- Sempre use max-w-5xl para conteúdo -->
<section class="max-w-5xl mx-auto px-6">
  <!-- Conteúdo -->
</section>
```

---

## 🎬 Animações & Transições

### Transições Padrão

```astro
<!-- Suave em hover -->
<a class="transition-colors duration-300 hover:text-light-mauve">
  Link
</a>

<!-- Escala em cards -->
<div class="transition-transform duration-300 hover:scale-105">
  Card
</div>

<!-- Opacidade em botão -->
<button class="transition-opacity duration-200 hover:opacity-80">
  Botão
</button>
```

### Adicionar Animações Customizadas

Em `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in',
      'slide-up': 'slideUp 0.3s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(10px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
}
```

---

## 📊 Estrutura de Dados Estendida

### Adicionando Campos ao Post

```typescript
// src/content/config.ts
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    draft: z.boolean().default(false),
    // ← Novos campos
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readTime: z.number().optional(),
    category: z.enum(['Física', 'Astronomia', 'Tecnologia']).optional(),
  }),
});
```

**Usar nos posts:**
```markdown
---
title: "Meu Post"
description: "..."
pubDate: 2024-12-20
image: "..."
draft: false
author: "Gu1Assis"
tags: ["Quântica", "Física", "Ciência"]
readTime: 8
category: "Física"
---
```

---

## 🔗 Integrações Recomendadas

### Adicionar Comentários (Giscus)

```bash
npm install giscus
```

```astro
<!-- Em PostLayout.astro -->
<script src="https://giscus.app/client.js"
  data-repo="seu-usuario/seu-repo"
  data-repo-id="ID"
  data-category="Comments"
  data-category-id="ID"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="pt"
  crossorigin="anonymous"
  async>
</script>
```

### Analytics (Plausible, Fathom)

```astro
<!-- Em BaseLayout.astro -->
<script defer data-domain="seu-site.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🚀 Deploy & Performance

### Otimizações Recomendadas

1. **Imagens**: Use Unsplash ou Cloudinary
2. **Compressão**: `npm install sharp` para otimizar
3. **Cache**: Vercel/Netlify fazem automaticamente

### Vercel Deployment

```bash
npm i -g vercel
vercel
```

### Netlify Deployment

```bash
npm i -D netlify-cli
netlify deploy --prod
```

---

**Última atualização**: 2024

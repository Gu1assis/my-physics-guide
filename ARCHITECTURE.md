# 🏗️ Arquitetura e Padrões

Um guia detalhado sobre a estrutura, componentes e padrões de desenvolvimento do projeto.

---

## 📐 Princípios de Design

### 1. **Componentização Máxima**
Todo elemento reutilizável é um componente independente:
- `Header` - Navegação superior com toggle de tema
- `Footer` - Links e informações de rodapé
- `PostCard` - Card individual de post

### 2. **Separação de Responsabilidades**
- **Layouts**: Estrutura HTML de página (BaseLayout, PostLayout)
- **Components**: Elementos reutilizáveis (Header, Footer, PostCard)
- **Pages**: Páginas que combinam componentes e layouts

### 3. **Tema Centralizado**
Todas as cores estão em `tailwind.config.cjs`:
```javascript
colors: {
  light: { /* Latte colors */ },
  dark: { /* Mocha colors */ }
}
```

---

## 📁 Estrutura Detalhada

### `src/components/`
Componentes reutilizáveis e sem lógica de roteamento:

#### **Header.astro**
```astro
interface Props {
  // Props customizáveis se necessário
}
```
- Sticky ao topo
- Toggle de tema (Sun/Moon icons)
- Transições suaves

#### **Footer.astro**
- Links sociais (GitHub, Instagram, YouTube)
- Info do desenvolvedor
- Copyright

#### **PostCard.astro**
```astro
interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}
```
- Efeito hover scale-105
- Gradiente Mauve no dark mode
- Seta animada "Ler mais"

### `src/layouts/`
Layouts compartilhados por múltiplas páginas:

#### **BaseLayout.astro**
- HTML5 estruturado
- Google Fonts (JetBrains Mono)
- Scripts globais (tema, scroll-to-top)
- Estilos globais com Tailwind

#### **PostLayout.astro**
- Estende BaseLayout
- Inclui Header e Footer
- Meta informações de post
- Placeholders para anúncios

### `src/pages/`
Roteamento baseado em arquivo (file-based routing):

#### **index.astro**
- Hero section
- Barra de busca em Vanilla JS
- Grid de posts com `getCollection()`
- Placeholder para anúncio

#### **posts/[...slug].astro**
- Template dinâmico (`getStaticPaths()`)
- Renderiza conteúdo Markdown
- Navegação entre posts
- Espaços para anúncios

### `src/content/`
Sistema de CMS do Astro:

#### **config.ts**
Define schema Zod para validação:
```typescript
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    draft: z.boolean().default(false),
  }),
});
```

#### **blog/`**
Arquivos `.md` com frontmatter validado:
```markdown
---
title: "Título"
description: "Descrição"
pubDate: 2024-01-01
image: "url"
draft: false
---
```

---

## 🎨 Sistema de Cores (Catppuccin)

### Light Mode (Latte)
```javascript
latte: {
  base: '#eff1f5',      // Fundo principal
  mantle: '#e6e9f0',    // Fundo secundário
  crust: '#dce0e8',     // Fundo terciário
  text: '#4c4f69',      // Texto principal
  subtext0: '#6c6f85',  // Texto secundário
  mauve: '#8839ef',     // Destaque
  sapphire: '#209fb5',  // Link
}
```

### Dark Mode (Mocha)
```javascript
mocha: {
  base: '#1e1e2e',      // Fundo principal
  mantle: '#181825',    // Fundo secundário
  crust: '#11111b',     // Fundo terciário
  text: '#cdd6f4',      // Texto principal
  subtext0: '#a6adc8',  // Texto secundário
  mauve: '#cba6f7',     // Destaque
  sapphire: '#89dceb',  // Link
}
```

---

## 🔧 Padrões de Desenvolvimento

### 1. **Criando um Novo Componente**

```astro
---
// Define props com tipagem TypeScript
export interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class="component">
  <h2>{title}</h2>
  <!-- Template HTML -->
</div>

<style>
  /* Scoped styles (opcional) */
  .component {
    /* CSS aqui não vaza para outros componentes */
  }
</style>
```

### 2. **Adicionando Novo Post**

```bash
# 1. Crie arquivo em src/content/blog/
touch src/content/blog/meu-novo-post.md

# 2. Adicione frontmatter e conteúdo
# 3. Build automático detectará o novo post
```

### 3. **Estendendo o Schema de Posts**

```typescript
// src/content/config.ts
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    draft: z.boolean().default(false),
    author: z.string().optional(), // ← Novo campo
    tags: z.array(z.string()).optional(), // ← Novo campo
  }),
});
```

### 4. **Personalizando Cores**

```javascript
// tailwind.config.cjs
// Edite as paletas Catppuccin ou adicione cores customizadas:

colors: {
  light: {
    // ... cores Latte
    accent: '#your-color',
  },
  dark: {
    // ... cores Mocha
    accent: '#your-color',
  },
}
```

---

## 🎯 Fluxo de Dados

```
src/content/blog/*.md (Markdown + Frontmatter)
    ↓
src/content/config.ts (Validação com Zod)
    ↓
Astro getCollection() - Busca posts na index
    ↓
src/pages/index.astro (Renderiza com PostCard)
    ↓
src/pages/posts/[...slug].astro (Post individual)
```

---

## 🧩 Componentes por Categoria

### Estruturais
- `BaseLayout` - Layout principal com theme script
- `PostLayout` - Layout para posts com Header/Footer

### Navegação
- `Header` - Barra superior com toggle
- `Footer` - Rodapé com links sociais

### Conteúdo
- `PostCard` - Card para lista de posts

### Páginas
- `index.astro` - Home com busca
- `posts/[...slug].astro` - Leitor de posts

---

## 🚀 Performance

### Build Estático
- Todo conteúdo é pré-renderizado em build time
- Astro gera HTML puro (sem JS desnecessário)
- Páginas servem instantaneamente

### CSS Otimizado
- Tailwind purga CSS não utilizado
- Apenas classes ativas são incluídas no bundle
- Dark mode sem JS overhead (usa classe `dark`)

### Assets
- Imagens em `public/` servem como-está
- URLs absolutas em posts (external CDN)
- Lazy loading automático de imagens

---

## 🔐 Segurança

### Markdown
- Astro sanitiza Markdown automaticamente
- XSS prevention built-in
- HTML injection não é possível

### Variáveis de Ambiente
```bash
# .env (não commitar)
PUBLIC_SITE_URL=https://seu-site.com
```

---

## 📈 Escalabilidade

### Adicionar Seções
1. Crie nova coleção em `src/content/config.ts`
2. Adicione pasta em `src/content/nova-secao/`
3. Crie página em `src/pages/`

### Adicionar Funcionalidades
1. Componente em `src/components/`
2. Lógica em `<script>` do componente
3. Styles com `<style is:global>` se necessário

### Adicionar Integrações
```bash
# Exemplos
npm install @astrojs/image      # Otimização de imagens
npm install @astrojs/sitemap    # Sitemap automático
npm install astro-icon          # Icons SVG
```

---

## 📚 Recursos para Estender

- [Astro Integrations](https://astro.build/integrations/)
- [Tailwind Plugins](https://tailwindcss.com/docs/plugins)
- [Catppuccin Repos](https://github.com/catppuccin)
- [MDX Support](https://docs.astro.build/en/guides/markdown-content/)

---

## 🐛 Troubleshooting

### Tema não persiste
- Verifique localStorage em DevTools
- Confirme que `BaseLayout` está siendo usado

### Posts não aparecem
- Verifique frontmatter com `zod` error logs
- Confirme que `draft: false`

### Build falha
- Rode `npm run build` em debug mode
- Verifique TypeScript errors

---

**Última atualização**: 2024

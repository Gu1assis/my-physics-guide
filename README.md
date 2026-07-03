# Guia para a Física 🌌

Um blog minimalista e altamente componentizado para explorar os mistérios do universo. Construído com **Astro**, **Tailwind CSS** e a paleta **Catppuccin**, seguindo a estética Unixporn/Hyprland.

## 🎨 Design & Filosofia

- **Minimalista**: Interface limpa e sem distrações
- **Componentizado**: Código reutilizável e modular
- **Responsivo**: Experiência perfeita em qualquer tela
- **Temas**: Light (Latte) e Dark (Mocha) do Catppuccin
- **Tipografia**: JetBrains Mono para leitura confortável

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone ou navegue até o projeto
cd my-physics-guide

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
├── .vscode/               # Configurações do VS Code
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.astro   # Cabeçalho com toggle de tema
│   │   ├── Footer.astro   # Rodapé com links sociais
│   │   └── PostCard.astro # Card para exibição de posts
│   ├── content/           # Conteúdo gerenciado
│   │   ├── config.ts      # Validação de schema (Zod)
│   │   └── blog/          # Posts em Markdown
│   ├── layouts/           # Layouts de página
│   │   ├── BaseLayout.astro  # Layout principal
│   │   └── PostLayout.astro  # Layout para posts
│   └── pages/             # Roteamento baseado em arquivos
│       ├── index.astro       # Home com busca
│       └── posts/[...slug].astro  # Detalhes do post
├── public/                # Arquivos estáticos
├── astro.config.mjs       # Configuração do Astro
├── tailwind.config.cjs    # Tema Catppuccin
└── tsconfig.json          # Configuração TypeScript
```

## 🎯 Funcionalidades Principais

### 1. **Busca em Tempo Real**
Filtra posts enquanto você digita, com debounce suave.

### 2. **Tema Claro/Escuro**
Persiste sua preferência em localStorage com transições suaves.

### 3. **Botão Voltar ao Topo**
Aparece após scroll de 300px com efeito hover scale.

### 4. **Validação de Schema**
Garante que todo post tenha: `title`, `description`, `pubDate`, `image`, `draft`.

### 5. **Componentes Reutilizáveis**
- Header com toggle de tema (Sun/Moon)
- Footer com links para GitHub, Instagram, YouTube
- PostCard com efeito hover e gradiente Mauve

## 🎨 Paleta Catppuccin

### Light Mode (Latte)
- Base: `#eff1f5`
- Text: `#4c4f69`
- Mauve: `#8839ef`
- Sapphire: `#209fb5`

### Dark Mode (Mocha)
- Base: `#1e1e2e`
- Text: `#cdd6f4`
- Mauve: `#cba6f7`
- Sapphire: `#89dceb`

## ✍️ Criando Novos Posts

Crie um arquivo `.md` em `src/content/blog/`:

```markdown
---
title: "Seu Título"
description: "Uma breve descrição"
pubDate: 2024-01-01
image: "https://url-da-imagem.com/image.jpg"
draft: false
---

# Seu conteúdo em Markdown aqui

## Seções suportadas
- Headings
- Listas
- Código com syntax highlighting
- Blockquotes
- Imagens
```

## 🔧 Personalizações Recomendadas

1. **Alterar cores**: Edite `tailwind.config.cjs`
2. **Mudar fontes**: Atualize `BaseLayout.astro` e `PostLayout.astro`
3. **Adicionar funcionalidades**: Crie novos componentes em `src/components/`
4. **Estender schema**: Modifique `src/content/config.ts` com Zod

## 📦 Dependências Principais

- **astro**: Framework web moderno
- **@astrojs/tailwind**: Integração Tailwind com Astro
- **tailwindcss**: Utilitários CSS
- **zod**: Validação de schema TypeScript

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -D netlify-cli
netlify deploy --prod --dir=dist
```

## 📚 Recursos Úteis

- [Documentação Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Catppuccin](https://catppuccin.com)
- [Markdown Guide](https://www.markdownguide.org)

## 💡 Dicas de Desenvolvimento

- Use `npm run dev` para desenvolvimento com hot reload
- Componentes Astro são renderizados no servidor (SSR-ready)
- Tailwind oferece autocompletar com extensão oficial
- Imagens em Markdown: use URLs absolutas ou coloque em `public/images/`

## 📝 Licença

MIT - Sinta-se livre para usar este template como base!

## 👨‍💻 Desenvolvido por

**Gu1Assis**

- GitHub: [@gu1assis](https://github.com/Gu1assis)
- Instagram: [@heitoritoz](https://www.instagram.com/heitoritoz/)
- YouTube: [@Física com Profº Heitor](https://www.youtube.com/@fisicacomprofessorheitor9180)

---

**Última atualização**: 2024

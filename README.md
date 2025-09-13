# JP Audio - Catálogo de Produtos

Site de catálogo completo para a JP Audio com funcionalidades B2B e B2C, desenvolvido com React, Tailwind CSS e otimizado para SEO e performance.

## 🚀 Funcionalidades Implementadas

### ✅ Catálogo Dinâmico
- **Busca em tempo real** por nome, descrição e categoria
- **Filtros avançados** por categoria (Subwoofers, Mid-Range, Tweeters) e potência
- **Ordenação** por nome, preço ou potência
- **Visualização** em grid ou lista
- **Contador de resultados** dinâmico

### ✅ Páginas de Produto Detalhadas
- **Sistema de abas** completo (Visão Geral, Especificações, Curvas, Mídia, Aplicações, Onde Comprar, Documentos)
- **Layout inspirado na Samsung** com design profissional
- **Especificações técnicas** detalhadas
- **Integração com WhatsApp** para cotações
- **Breadcrumbs** para navegação

### ✅ Áreas Específicas B2B e B2C

**Área do Revendedor (B2B):**
- Programa de incentivos e vantagens
- Formulário de cadastro completo
- Requisitos e processo de aprovação
- Suporte especializado

**Área do Consumidor (B2C):**
- Guia de produtos educativo
- Dicas de instalação
- Suporte ao cliente
- Avaliações e depoimentos

### ✅ SEO e Performance
- **Metatags dinâmicas** para cada página
- **Dados estruturados** (Schema.org)
- **Open Graph** e Twitter Cards
- **Sitemap.xml** e robots.txt
- **Otimizações de build** com code splitting
- **Compressão GZIP** e cache headers

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes de interface
- **Lucide Icons** - Ícones modernos
- **Terser** - Minificação de JavaScript

## 📁 Estrutura do Projeto

```
catalogo-jp-audio/
├── public/
│   ├── .htaccess          # Configurações do servidor
│   ├── robots.txt         # Diretrizes para crawlers
│   ├── sitemap.xml        # Mapa do site
│   └── favicon.ico        # Ícone do site
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── product/       # Cards, Filtros, Modal
│   │   ├── ui/            # Componentes base (Button, Badge, Input)
│   │   ├── SEO.jsx        # Componente de SEO
│   │   └── PerformanceOptimizer.jsx
│   ├── data/
│   │   └── produtos.json  # Base de dados dos produtos
│   ├── pages/
│   │   ├── Home.jsx       # Página inicial
│   │   ├── Catalog.jsx    # Catálogo de produtos
│   │   ├── ProductDetail.jsx # Página de produto
│   │   ├── ResellerArea.jsx  # Área B2B
│   │   └── ConsumerArea.jsx  # Área B2C
│   ├── utils/
│   │   └── router.js      # Sistema de roteamento
│   └── App.jsx            # Componente principal
├── dist/                  # Build de produção
├── package.json
├── vite.config.js         # Configurações do Vite
└── README.md
```

## 🚀 Como Executar

### Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Executar servidor de desenvolvimento
pnpm run dev

# Acessar em http://localhost:5173
```

### Produção
```bash
# Criar build de produção
pnpm run build

# Servir arquivos estáticos
pnpm run preview
```

## 📊 Dados dos Produtos

Os produtos são gerenciados através do arquivo `src/data/produtos.json`. Cada produto contém:

```json
{
  "id": "jp-mid-6-300w",
  "nome": "JP Mid 6\" 300W",
  "categoria": "Mid-Range",
  "potencia": 300,
  "impedancia": "4 ohms",
  "preco": 459.90,
  "descricao": "Alto-falante mid-range...",
  "especificacoes": {
    "potencia_rms": "300W",
    "potencia_pico": "600W",
    "resposta_frequencia": "80Hz - 5kHz",
    "sensibilidade": "92dB",
    "impedancia": "4 ohms"
  },
  "imagens": [...],
  "videos": [...],
  "documentos": [...],
  "aplicacoes": [...]
}
```

## 🔧 Personalização

### Adicionar Novos Produtos
1. Edite o arquivo `src/data/produtos.json`
2. Adicione as imagens na pasta `public/images/`
3. O catálogo será atualizado automaticamente

### Modificar Cores e Estilos
- As cores principais estão definidas no Tailwind CSS
- Componentes de UI podem ser customizados em `src/components/ui/`

### SEO e Metatags
- Configure URLs base no componente `SEO.jsx`
- Atualize o `sitemap.xml` com novas páginas
- Modifique dados estruturados conforme necessário

## 📈 Performance

### Métricas de Build
- **CSS:** 97.48 kB (15.56 kB gzipped)
- **JavaScript:** 301.73 kB total (86.09 kB gzipped)
- **Chunks separados:** vendor, ui, main
- **Assets inline:** < 4KB

### Otimizações Implementadas
- Code splitting automático
- Lazy loading de imagens
- Preload de recursos críticos
- Compressão GZIP
- Cache headers otimizados

## 🌐 Deploy

O site está configurado para deploy em qualquer servidor web que suporte arquivos estáticos:

1. **Build de produção:** `pnpm run build`
2. **Arquivos gerados:** pasta `dist/`
3. **Configuração:** `.htaccess` incluído para Apache
4. **URLs amigáveis:** Suporte a SPA routing

### Servidores Recomendados
- Netlify
- Vercel
- GitHub Pages
- Apache/Nginx

## 📞 Suporte

Para dúvidas sobre implementação ou customização:
- Documentação técnica: Este README
- Estrutura de componentes: Comentários no código
- Dados de exemplo: `produtos.json`

## 🔄 Próximas Melhorias

### Funcionalidades Sugeridas
- [ ] Sistema de favoritos
- [ ] Comparação de produtos
- [ ] Calculadora de potência
- [ ] Integração com CRM
- [ ] Dashboard administrativo
- [ ] Sistema de avaliações
- [ ] Chat online
- [ ] PWA (Progressive Web App)

### Integrações Possíveis
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] WhatsApp Business API
- [ ] Sistema de pagamento
- [ ] ERP/CRM integration

---

**Desenvolvido com ❤️ para JP Audio**  
*Site profissional, responsivo e otimizado para conversão*

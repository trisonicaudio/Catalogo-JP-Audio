# Guia de Manutenção - JP Audio

Este documento contém instruções para manutenção, atualizações e gerenciamento do site JP Audio.

## 📝 Atualizações de Conteúdo

### Adicionar Novos Produtos

1. **Editar arquivo de dados:**
   ```bash
   # Abrir arquivo de produtos
   nano src/data/produtos.json
   ```

2. **Estrutura do produto:**
   ```json
   {
     "id": "codigo-unico-produto",
     "nome": "Nome do Produto",
     "categoria": "Subwoofer|Mid-Range|Tweeter",
     "potencia": 500,
     "impedancia": "4 ohms",
     "preco": 899.90,
     "descricao": "Descrição detalhada do produto...",
     "especificacoes": {
       "potencia_rms": "500W",
       "potencia_pico": "1000W",
       "resposta_frequencia": "20Hz - 200Hz",
       "sensibilidade": "90dB",
       "impedancia": "4 ohms",
       "diametro": "12 polegadas",
       "profundidade": "15cm"
     },
     "imagens": [
       "/images/produtos/produto-1.jpg",
       "/images/produtos/produto-2.jpg"
     ],
     "videos": [
       "https://youtube.com/watch?v=exemplo"
     ],
     "documentos": [
       {
         "nome": "Manual de Instalação",
         "url": "/docs/manual-produto.pdf"
       }
     ],
     "aplicacoes": [
       "Sistemas de som automotivo",
       "Home theater",
       "Som profissional"
     ]
   }
   ```

3. **Adicionar imagens:**
   - Colocar imagens em `public/images/produtos/`
   - Usar formato WebP quando possível
   - Tamanho recomendado: 800x600px
   - Otimizar para web (< 200KB por imagem)

### Atualizar Preços

1. **Atualização em lote:**
   ```bash
   # Fazer backup
   cp src/data/produtos.json src/data/produtos.backup.json
   
   # Editar preços no arquivo JSON
   nano src/data/produtos.json
   ```

2. **Testar localmente:**
   ```bash
   pnpm run dev
   # Verificar se os preços estão corretos
   ```

3. **Deploy das alterações:**
   ```bash
   pnpm run build
   # Fazer deploy da pasta dist/
   ```

### Modificar Conteúdo das Páginas

**Página Inicial (Home):**
- Arquivo: `src/pages/Home.jsx`
- Seções: Hero, Benefícios, Produtos em destaque

**Área do Revendedor:**
- Arquivo: `src/pages/ResellerArea.jsx`
- Seções: Vantagens, Requisitos, Suporte, Cadastro

**Área do Consumidor:**
- Arquivo: `src/pages/ConsumerArea.jsx`
- Seções: Guia, Instalação, Suporte, Avaliações

## 🔧 Manutenção Técnica

### Atualizações de Dependências

```bash
# Verificar dependências desatualizadas
pnpm outdated

# Atualizar dependências menores
pnpm update

# Atualizar dependências maiores (cuidado!)
pnpm update --latest
```

### Monitoramento de Performance

1. **Métricas importantes:**
   - Tempo de carregamento < 2s
   - First Contentful Paint < 1.5s
   - Largest Contentful Paint < 2.5s
   - Cumulative Layout Shift < 0.1

2. **Ferramentas de teste:**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest
   - Lighthouse (Chrome DevTools)

### Backup e Versionamento

```bash
# Backup completo
tar -czf backup-jpaudio-$(date +%Y%m%d).tar.gz catalogo-jp-audio/

# Versionamento com Git
git add .
git commit -m "Atualização: [descrição]"
git push origin main
```

## 🔍 SEO e Analytics

### Atualizar Sitemap

1. **Adicionar novas páginas:**
   ```xml
   <!-- Em public/sitemap.xml -->
   <url>
     <loc>https://jpaudio.com.br/nova-pagina</loc>
     <lastmod>2025-01-01</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.7</priority>
   </url>
   ```

2. **Submeter ao Google:**
   - Google Search Console
   - Bing Webmaster Tools

### Monitorar SEO

**Ferramentas recomendadas:**
- Google Search Console
- Google Analytics
- SEMrush ou Ahrefs
- Screaming Frog

**Métricas importantes:**
- Posições das palavras-chave
- Tráfego orgânico
- Taxa de cliques (CTR)
- Tempo na página

## 🚨 Solução de Problemas

### Site não carrega

1. **Verificar build:**
   ```bash
   pnpm run build
   # Verificar se há erros
   ```

2. **Testar localmente:**
   ```bash
   pnpm run preview
   # Acessar http://localhost:4173
   ```

3. **Verificar logs do servidor**

### Produtos não aparecem

1. **Verificar JSON:**
   ```bash
   # Validar sintaxe JSON
   cat src/data/produtos.json | jq .
   ```

2. **Verificar console do navegador:**
   - F12 → Console
   - Procurar por erros JavaScript

### Performance lenta

1. **Otimizar imagens:**
   ```bash
   # Converter para WebP
   cwebp input.jpg -o output.webp -q 80
   ```

2. **Verificar tamanho do bundle:**
   ```bash
   pnpm run build
   # Analisar tamanhos em dist/assets/
   ```

## 📊 Relatórios e Métricas

### Relatório Mensal

**Dados para coletar:**
- Visitantes únicos
- Páginas mais visitadas
- Produtos mais visualizados
- Taxa de conversão (contatos)
- Tempo médio na página
- Taxa de rejeição

**Fontes:**
- Google Analytics
- Search Console
- Logs do servidor

### KPIs Importantes

1. **Tráfego:**
   - Visitantes mensais
   - Crescimento mês a mês
   - Fontes de tráfego

2. **Conversão:**
   - Formulários preenchidos
   - Cliques no WhatsApp
   - Downloads de catálogos

3. **SEO:**
   - Posições das palavras-chave
   - Impressões no Google
   - CTR médio

## 🔄 Cronograma de Manutenção

### Diário
- [ ] Verificar funcionamento do site
- [ ] Monitorar erros no console

### Semanal
- [ ] Backup dos dados
- [ ] Verificar métricas de performance
- [ ] Atualizar preços se necessário

### Mensal
- [ ] Relatório de analytics
- [ ] Verificar links quebrados
- [ ] Atualizar conteúdo sazonal
- [ ] Revisar palavras-chave

### Trimestral
- [ ] Atualizar dependências
- [ ] Auditoria de SEO completa
- [ ] Otimização de performance
- [ ] Backup completo do projeto

## 📞 Contatos de Suporte

**Desenvolvimento:**
- Documentação: Este arquivo
- Código fonte: Comentários inline
- Estrutura: README.md

**Hospedagem:**
- Verificar painel de controle
- Logs de erro do servidor
- Configurações de DNS

---

**Mantenha este documento atualizado com mudanças no projeto!**

# Portal Imobiliário Condomínio Blue — RE/MAX VIP

Portal moderno de inteligência imobiliária com todas as casas à venda no **Condomínio Blue** (Capão da Canoa / Xangri-Lá), desenvolvido exclusivamente para a **RE/MAX VIP**.

---

## 🎨 Características do Projeto & Design

- **Design System Estilo Apple**: Estética ultra clean, minimalista e moderna com efeito **Glassmorphic** (`backdrop-blur-md`, bordas arredondadas e sombras suaves).
- **Tipografia**: Google Font **Inter Tight** em peso **Negrito / Cheia** (Font-weight 700/800/900).
- **Paleta de Cores RE/MAX VIP**:
  - **Fundo / Principal**: Branco puro (`#FFFFFF`) e variações off-white super refinadas.
  - **Secundária**: Azul Marinho oficial RE/MAX (`#0B1E3B`).
  - **Contornos & Destaques**: Vermelho RE/MAX (`#E11C2A`) em bordas de cards, botões de ação e indicadores.
- **Navegação Interativa de Fotos (Estilo Portais)**:
  - Carrossel de fotos em cada card com **setas esquerda/direita**, indicador de contagem ("1 / 5") e barra de pontos.
- **Links para Portais Originais**:
  - Links diretos para anúncios no ZAP Imóveis, Viva Real, OLX, RE/MAX VIP, ImóvelWeb, Chaves na Mão e Auxiliadora Predial.
- **Histórico de Preços & Radar Litoral**:
  - Acompanhamento da evolução de preço por casa e painel de estatísticas consolidadas (Média por m², Faixa de valores, Oportunidades com preço reduzido).
- **Modal de Detalhes HD**:
  - Galeria expansível em alta definição, especificações completas, botão de agendamento via WhatsApp e atributos VIP.

---

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 14 (App Router) + React 18
- **Estilização**: Tailwind CSS + PostCSS + Autoprefixer
- **Ícones**: Lucide React
- **Tipografia**: Inter Tight (Google Fonts)
- **Containerização**: Dockerfile multi-stage com `output: 'standalone'` preparado para VPS

---

## 🚀 Como Executar Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

3. **Testar Build de Produção**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Implantação no EasyPanel (VPS) - Domínio: `lista.integramob.com.br`

1. **Criar Novo Serviço no EasyPanel**:
   - Acesse seu painel do EasyPanel na VPS.
   - Clique em **Create Service** > selecione **App** (GitHub / Git Repository ou Dockerfile).

2. **Configuração de Origem / Repositório**:
   - Aponta para o repositório do projeto no GitHub/Git ou faça upload dos arquivos.
   - O EasyPanel utilizará automaticamente o `Dockerfile` presente na raiz do projeto.

3. **Configuração de Domínio & Porta**:
   - **Domains**: Adicione o domínio `lista.integramob.com.br` com SSL automático (Let's Encrypt ativado pelo EasyPanel).
   - **Porta do Contêiner**: `3000`.

4. **Deploy**:
   - Clique em **Deploy**. O EasyPanel executará o build multi-stage do Next.js e disponibilizará o portal com excelente performance.

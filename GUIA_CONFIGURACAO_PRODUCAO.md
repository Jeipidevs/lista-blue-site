# Guia de Implantação e Automação — Radar Litoral Imóveis

Este documento contém o guia completo de configuração, script SQL para o Supabase, variáveis de ambiente do EasyPanel e o **Workflow JSON do n8n** para automação via MCP (Claude Code CLI).

---

## 📋 Divisão de Tarefas

### 👤 1. Ações Manuais (Você)
1. **Criar Conta/Projeto no Supabase**:
   - Acesse [Supabase.com](https://supabase.com) e crie um novo projeto.
   - Copie a **Project URL** e a **Anon Key**.
   - No SQL Editor do Supabase, execute o script SQL fornecido abaixo.
2. **Obter API Key da Anthropic**:
   - Acesse [Console Anthropic](https://console.anthropic.com) e gere uma chave de API (`sk-ant-...`).

---

### 🤖 2. Ações Automatizadas via MCP (Claude Code CLI / n8n / EasyPanel)

#### A. Variáveis de Ambiente no EasyPanel
Configure as seguintes variáveis no serviço **radar-litoral-imoveis** no EasyPanel:

```env
# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR...

# AI Anthropic Claude
ANTHROPIC_API_KEY=sk-ant-api03-...

# VPS Services Microservices
GOTENBERG_URL=http://gotenberg:3000
BROWSERLESS_URL=ws://browserless:3000
```

---

## 🗄️ Script SQL de Estrutura do Banco (Supabase SQL Editor)

Execute o código SQL abaixo no **SQL Editor** do Supabase para criar as tabelas do Radar Litoral:

```sql
-- 1. Tabela de Condomínios
CREATE TABLE IF NOT EXISTS condominiums (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  city TEXT DEFAULT 'Xangri-Lá',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Inserir os 7 condomínios de luxo
INSERT INTO condominiums (slug, name, city) VALUES
  ('blue', 'Condomínio Blue', 'Xangri-Lá'),
  ('amare', 'Condomínio Amare', 'Xangri-Lá'),
  ('sunset', 'Condomínio Sunset', 'Xangri-Lá'),
  ('ventura', 'Condomínio Ventura', 'Xangri-Lá'),
  ('sea-coast', 'Condomínio Sea Coast', 'Xangri-Lá'),
  ('celebration', 'Condomínio Celebration', 'Xangri-Lá'),
  ('zen', 'Condomínio Zen', 'Xangri-Lá')
ON CONFLICT (slug) DO NOTHING;

-- 2. Tabela Principal de Imóveis
CREATE TABLE IF NOT EXISTS properties (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL,
  condo_slug TEXT REFERENCES condominiums(slug),
  condo_name TEXT NOT NULL,
  title TEXT NOT NULL,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  price_per_m2 NUMERIC NOT NULL,
  area NUMERIC NOT NULL,
  lot_area NUMERIC,
  bedrooms INTEGER DEFAULT 4,
  suites INTEGER DEFAULT 4,
  bathrooms INTEGER DEFAULT 5,
  garages INTEGER DEFAULT 2,
  is_lakefront BOOLEAN DEFAULT false,
  is_furnished BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  has_pool BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'disponivel',
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  images JSONB DEFAULT '[]'::jsonb,
  portal_links JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Histórico de Variação de Preços
CREATE TABLE IF NOT EXISTS price_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id TEXT REFERENCES properties(id) ON DELETE CASCADE,
  price NUMERIC NOT NULL,
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices para buscas ultrarrápidas
CREATE INDEX IF NOT EXISTS idx_properties_condo_slug ON properties(condo_slug);
CREATE INDEX IF NOT EXISTS idx_properties_price ON properties(price);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
```

---

## 🔄 Workflow JSON do n8n (Importação / Automação MCP)

O arquivo `n8n_workflow_radar_litoral.json` criado na raiz contém a especificação do fluxo:

### Estrutura do Workflow:
1. **Schedule Trigger**: Dispara diariamente às 07:00 da manhã.
2. **HTTP Request Node (`Sincronizar Scraper`)**:
   - `POST https://lista.integramob.com.br/api/scrape`
3. **HTTP Request Node (`Notificar WhatsApp Evolution API`)**:
   - Envia um resumo no WhatsApp do grupo de corretores RE/MAX VIP informando que a varredura foi concluída.

---

## 🚀 Como Importar o Workflow no n8n via MCP / Interface

1. No **n8n**, clique em **Workflows** > **Import from File**.
2. Selecione o arquivo `n8n_workflow_radar_litoral.json`.
3. Ative o Workflow (`Active: ON`).

# Guia de Implantação e Automação — Radar Litoral Imóveis (Com Isolamento Vip-Crm)

Este documento contém o guia definitivo de implantação do **Radar Litoral Imóveis** integrado ao mesmo Supabase do seu **Vip-Crm (em produção)** de forma 100% isolada e segura.

---

## 🛡️ Garantia de Isolamento Total (Proteção ao Vip-Crm em Produção)

Após analisarmos a estrutura do **Vip-Crm (`C:\Projetos\Vip-Crm`)**, identificamos que ele utiliza o schema padrão `public`.

Para garantir que o **Radar Litoral** nunca afete, altere ou conflite com o Vip-Crm em produção:
- Toda a estrutura do Radar Litoral foi isolada dentro de um **Schema PostgreSQL exclusivo**: `radar_litoral`.
- As tabelas ficam sob o namespace `radar_litoral.properties`, `radar_litoral.condominiums`, `radar_litoral.price_history`.
- O cliente Supabase (`src/lib/supabase.ts`) está configurado com `{ db: { schema: 'radar_litoral' } }`.

---

## 📋 Divisão de Tarefas

### 👤 1. Ações Manuais (Você)
1. **Acessar o mesmo Projeto Supabase do Vip-Crm**.
2. **Abrir o SQL Editor do Supabase**.
3. **Executar o Script SQL** abaixo para criar o schema isolado `radar_litoral`.
4. **Obter/Confirmar API Key da Anthropic** (`sk-ant-...`).

---

### 🤖 2. Ações Automatizadas via MCP (Claude Code CLI / n8n / EasyPanel)

#### A. Variáveis de Ambiente no EasyPanel
Configure no serviço **radar-litoral-imoveis** no EasyPanel:

```env
# Mesmas credenciais Supabase do Vip-Crm
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR...

# AI Anthropic Claude
ANTHROPIC_API_KEY=sk-ant-api03-...

# VPS Services
GOTENBERG_URL=http://gotenberg:3000
BROWSERLESS_URL=ws://browserless:3000
```

---

## 🗄️ Script SQL de Isolamento (Executar no SQL Editor do Supabase)

Execute o código SQL abaixo no **SQL Editor** do Supabase. Este script cria o schema exclusivo `radar_litoral` sem tocar em nenhuma tabela do `public` (Vip-Crm):

```sql
-- 1. Criar Schema Exclusivo do Radar Litoral (Isolamento 100% do Vip-Crm)
CREATE SCHEMA IF NOT EXISTS radar_litoral;

-- 2. Tabela de Condomínios no Schema Isolado
CREATE TABLE IF NOT EXISTS radar_litoral.condominiums (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  city TEXT DEFAULT 'Xangri-Lá',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Inserir os 7 condomínios de luxo
INSERT INTO radar_litoral.condominiums (slug, name, city) VALUES
  ('blue', 'Condomínio Blue', 'Xangri-Lá'),
  ('amare', 'Condomínio Amare', 'Xangri-Lá'),
  ('sunset', 'Condomínio Sunset', 'Xangri-Lá'),
  ('ventura', 'Condomínio Ventura', 'Xangri-Lá'),
  ('sea-coast', 'Condomínio Sea Coast', 'Xangri-Lá'),
  ('celebration', 'Condomínio Celebration', 'Xangri-Lá'),
  ('zen', 'Condomínio Zen', 'Xangri-Lá')
ON CONFLICT (slug) DO NOTHING;

-- 3. Tabela de Imóveis no Schema Isolado
CREATE TABLE IF NOT EXISTS radar_litoral.properties (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL,
  condo_slug TEXT REFERENCES radar_litoral.condominiums(slug),
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

-- 4. Tabela de Histórico de Variação de Preços
CREATE TABLE IF NOT EXISTS radar_litoral.price_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id TEXT REFERENCES radar_litoral.properties(id) ON DELETE CASCADE,
  price NUMERIC NOT NULL,
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Índices de Desempenho
CREATE INDEX IF NOT EXISTS idx_rl_properties_condo_slug ON radar_litoral.properties(condo_slug);
CREATE INDEX IF NOT EXISTS idx_rl_properties_price ON radar_litoral.properties(price);
CREATE INDEX IF NOT EXISTS idx_rl_properties_status ON radar_litoral.properties(status);

-- 6. VIEW LEITURA (OPCIONAL): Cruzamento seguro com Leads do Vip-Crm (Apenas Leitura)
-- Permite que o n8n identifique Leads do Vip-Crm com perfil compatível para casas com Preço Reduzido
CREATE OR REPLACE VIEW radar_litoral.v_opportunity_matches AS
SELECT 
  p.code AS property_code,
  p.condo_name,
  p.price AS opportunity_price,
  p.price_per_m2,
  p.status
FROM radar_litoral.properties p
WHERE p.status = 'preco_reduzido';
```

---

## 🔄 Workflow JSON do n8n (Importação / Automação MCP)

O arquivo `n8n_workflow_radar_litoral.json` na raiz contém a automação:
1. **Schedule Trigger**: Executa diariamente às 07:00.
2. **HTTP Request Node (`Sincronizar Scraper`)**: `POST https://lista.integramob.com.br/api/scrape`.
3. **HTTP Request Node (`Evolution API WhatsApp`)**: Envia o resumo de atualização dos imóveis para os corretores RE/MAX VIP.

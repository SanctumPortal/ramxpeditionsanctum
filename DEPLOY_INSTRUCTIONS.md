# 🚀 Instruções de Deploy - RAM Expeditions Sanctum

## 📋 Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Domínio `ramxpedition.com.br` configurado
- Git instalado (opcional para deploy manual)

## 🌐 Método 1: Deploy via Vercel Dashboard (Recomendado)

### Passo 1: Preparar os arquivos
1. Faça upload de todos os arquivos do projeto para um repositório Git (GitHub, GitLab, etc.)
2. Certifique-se de que o arquivo `index.html` está na raiz do projeto

### Passo 2: Conectar ao Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Conecte sua conta Git (GitHub/GitLab/Bitbucket)
4. Selecione o repositório do projeto
5. Configure as seguintes opções:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (raiz)
   - **Build Command**: (deixe vazio)
   - **Output Directory**: `./` (raiz)

### Passo 3: Deploy
1. Clique em "Deploy"
2. Aguarde o processo de build e deploy
3. Seu site estará disponível em uma URL temporária do Vercel

## 🌍 Método 2: Deploy Manual via CLI

### Passo 1: Instalar Vercel CLI
```bash
npm i -g vercel
```

### Passo 2: Login
```bash
vercel login
```

### Passo 3: Deploy
```bash
cd ramxpedition-site
vercel --prod
```

## 🔗 Configuração do Domínio Personalizado

### Passo 1: Adicionar Domínio no Vercel
1. No dashboard do Vercel, vá para o projeto
2. Clique em "Settings" > "Domains"
3. Adicione `ramxpedition.com.br`
4. Adicione também `www.ramxpedition.com.br`

### Passo 2: Configurar DNS
Configure os seguintes registros DNS no seu provedor de domínio:

```
# Registro A para domínio principal
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

# Registro CNAME para www
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Passo 3: Verificar SSL
- O Vercel automaticamente provisiona certificados SSL
- Aguarde alguns minutos para propagação
- Teste acessando `https://ramxpedition.com.br`

## ⚙️ Configurações Avançadas

### Variables de Ambiente (se necessário)
No dashboard do Vercel:
1. Vá em "Settings" > "Environment Variables"
2. Adicione as seguintes variáveis se necessário:
   - `FORMSPREE_FORM_ID`: ID do formulário Formspree
   - `POLYGON_RPC_URL`: URL RPC da rede Polygon
   - `CONTRACT_ADDRESS`: Endereço do contrato principal

### Headers de Segurança
O arquivo `vercel.json` já inclui headers de segurança:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### Cache Configuration
- CSS/JS: Cache por 1 ano
- Imagens: Cache por 1 ano
- HTML: Cache dinâmico

## 🔧 Configurações Específicas

### Formspree (Formulário de Contato)
1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário
3. Substitua `YOUR_FORM_ID` no arquivo `index.html` pelo ID real
4. Exemplo: `action="https://formspree.io/f/xpzgkqyw"`

### Web3 Integration
Para funcionalidade completa da blockchain:
1. Configure os endereços dos contratos em `js/app.js`
2. Adicione os ABIs reais em `/contracts/`
3. Teste a conectividade com MetaMask

## 📱 Teste de Responsividade

Antes do deploy final, teste em:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)
- Mobile Large (414x896)

## 🚨 Checklist Pré-Deploy

- [ ] Todos os links funcionam
- [ ] Imagens carregam corretamente
- [ ] Formulário de contato funciona
- [ ] Site é responsivo
- [ ] Performance otimizada (Lighthouse > 90)
- [ ] SEO configurado
- [ ] Meta tags sociais configuradas
- [ ] Favicon configurado
- [ ] Robots.txt e sitemap.xml criados

## 🔍 Monitoramento Pós-Deploy

### Analytics (Recomendado)
Adicione Google Analytics ou Vercel Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
- Use Vercel Analytics para monitorar performance
- Configure alertas para downtime
- Monitore Core Web Vitals

## 🆘 Troubleshooting

### Problemas Comuns

**1. Site não carrega**
- Verifique se `index.html` está na raiz
- Confirme configuração DNS
- Aguarde propagação (até 48h)

**2. Imagens não aparecem**
- Verifique caminhos relativos
- Confirme se arquivos estão no repositório
- Teste URLs das imagens

**3. Formulário não funciona**
- Verifique ID do Formspree
- Confirme configuração CORS
- Teste em modo incógnito

**4. Web3 não conecta**
- Verifique se MetaMask está instalado
- Confirme rede Polygon
- Teste endereços dos contratos

### Logs e Debug
- Acesse logs no dashboard Vercel
- Use DevTools do navegador
- Monitore console para erros JavaScript

## 📞 Suporte

Para problemas técnicos:
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Suporte Vercel: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: Crie issues no repositório do projeto

---

**✅ Deploy Concluído!**

Após seguir estas instruções, seu site estará disponível em:
- `https://ramxpedition.com.br`
- `https://www.ramxpedition.com.br`

Lembre-se de testar todas as funcionalidades após o deploy!


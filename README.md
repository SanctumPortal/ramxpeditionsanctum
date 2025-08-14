# RAM Expeditions Sanctum

Site oficial da jornada RAM Expeditions Sanctum para COP30 2025.

## 🌿 Sobre o Projeto

A RAM Expeditions Sanctum representa uma parceria estratégica entre RAM, Stellantis e AIONDJ para demonstrar que sustentabilidade e performance podem coexistir, criando impacto positivo mensurável nas comunidades amazônicas e no meio ambiente global.

## 🚀 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Blockchain**: Web3.js, Polygon Network
- **Deploy**: Vercel
- **Design**: Responsive, Mobile-first
- **Performance**: Lazy loading, Image optimization

## 📁 Estrutura do Projeto

```
ramxpedition-site/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos principais
├── js/
│   └── app.js              # JavaScript principal
├── img/                    # Imagens e assets
├── videos/                 # Vídeos do projeto
├── contracts/              # ABIs dos contratos blockchain
├── docs/                   # Documentação adicional
├── vercel.json             # Configuração Vercel
├── package.json            # Configuração do projeto
└── README.md               # Este arquivo
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js (opcional, para ferramentas de desenvolvimento)
- Git
- Navegador moderno com suporte a ES6+

### Desenvolvimento Local

1. Clone o repositório:
```bash
git clone https://github.com/ramxpedition/sanctum-site.git
cd sanctum-site
```

2. Inicie um servidor local:
```bash
# Usando Python (recomendado)
python3 -m http.server 8000

# Ou usando Node.js
npx serve .

# Ou usando PHP
php -S localhost:8000
```

3. Acesse `http://localhost:8000` no navegador

## 🌐 Deploy no Vercel

### Método 1: Deploy Automático via Git

1. Faça fork deste repositório
2. Conecte sua conta Vercel ao GitHub
3. Importe o projeto no Vercel
4. Configure o domínio personalizado `ramxpedition.com.br`

### Método 2: Deploy Manual

1. Instale a CLI do Vercel:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Configuração do Domínio

1. No painel do Vercel, vá em **Settings > Domains**
2. Adicione `ramxpedition.com.br`
3. Configure os DNS no seu provedor:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔗 Integração Blockchain

O site integra com contratos inteligentes na rede Polygon para exibir métricas ESG em tempo real:

- **Stellantis ESG Contract**: `0x742d35Cc6634C0532925a3b844Bc454e4438f44e`
- **RAM NFT Contract**: `0xdA10bEa1100A109dD0A04A25a3B844Bc454e4438`

### Configuração Web3

Para funcionalidade completa da blockchain:

1. Instale MetaMask ou outro provedor Web3
2. Conecte à rede Polygon
3. Os dados ESG serão carregados automaticamente

## 📱 Recursos

### ✅ Implementado
- [x] Design responsivo e mobile-first
- [x] Integração Web3 com MetaMask
- [x] Métricas ESG em tempo real
- [x] Countdown para COP30
- [x] Galeria NFT
- [x] Formulário de contato
- [x] Otimização de performance
- [x] SEO otimizado

### 🔄 Em Desenvolvimento
- [ ] Integração com contratos reais
- [ ] Sistema de notificações
- [ ] Dashboard administrativo
- [ ] Multilíngue (EN/ES)

## 🎨 Design System

### Cores Oficiais
- **RAM Orange**: `#FF6B00`
- **Stellantis Blue**: `#0033A0`
- **ESG Green**: `#00A859`
- **Amazon Green**: `#2E8B57`

### Tipografia
- **Fonte Principal**: Montserrat
- **Pesos**: 300, 400, 600, 700, 900

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Segurança

- Headers de segurança configurados
- Proteção XSS
- Content Security Policy
- HTTPS obrigatório

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Equipe

- **Embaixador Oficial**: Daniel Domingos (AIONDJ)
- **Parceiro Estratégico**: RAM Trucks Brasil
- **Parceiro Corporativo**: Stellantis
- **Evento Alvo**: COP30 Belém 2025

## 📞 Contato

- **Email**: contato@ramxpedition.com.br
- **Instagram**: [@ramxpeditionsanctum](https://instagram.com/ramxpeditionsanctum)
- **Twitter**: [@ram_sanctum](https://twitter.com/ram_sanctum)
- **LinkedIn**: [RAM Xpedition](https://linkedin.com/company/ramxpedition)

---

**RAM Expeditions Sanctum** - Regeneração através da aventura 🌿🚗


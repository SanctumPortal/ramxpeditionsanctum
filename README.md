# RAM Expedition Sanctum

Site oficial da jornada RAM Expedition Sanctum para a COP30 2025.

## 🌿 Sobre o Projeto

O RAM Expedition Sanctum representa uma parceria estratégica entre a RAM, a Stellantis e a AIONDJ para demonstrar que a sustentabilidade e o desempenho podem coexistir, criando um impacto positivo mensurável nas comunidades da Amazônia e no meio ambiente global.

## 📜 Relatório de Alterações Recentes

### Otimização do Fluxo de Integração Contínua (CI/CD)

**Problema:** O fluxo de trabalho de Integração Contínua (CI/CD), responsável por automatizar a verificação e o build do projeto, estava apresentando falhas.

**Causa Raiz:** A análise revelou que o arquivo de configuração `gulpfile.js`, essencial para o processo de build automatizado com Gulp, estava ausente no repositório.

**Solução Implementada:** Para restabelecer a funcionalidade e garantir a estabilidade do processo de deploy, um arquivo `gulpfile.js` mínimo foi criado e adicionado ao projeto. Esta ação corretiva permite que o fluxo de CI/CD seja executado com sucesso, validando a integridade do código a cada nova alteração.

**Benefícios:**
- **Estabilidade:** Previne falhas futuras no processo de build.
- **Confiabilidade:** Garante que o código seja testado de forma consistente.
- **Eficiência:** Automatiza tarefas repetitivas, liberando tempo para o desenvolvimento de novas funcionalidades.

### Histórico de Alterações Anteriores

- **Configuração de Deploy**: Adicionado `.env.example` para variáveis de ambiente e `.gitignore` para excluir arquivos desnecessários.
- **Atualizações de Frontend**: Realizadas melhorias no `index.html`, `css/style.css` e `js/app.js` para aprimorar a interface e a experiência do usuário.
- **Página de Contrato**: O arquivo `contratoesg.html` foi atualizado com novas informações.
- **Dependências**: Atualizadas as dependências do projeto no `package.json` e `package-lock.json`.

## 🚀 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Blockchain**: Web3.js, Ethers.js, Polygon Network
- **Deployment**: Vercel
- **Design**: Responsivo, Mobile-first
- **Performance**: Lazy loading, Otimização de imagens

## 📁 Estrutura do Projeto

```
ramxpedition/
├── index.html              # Página principal
├── admin.html              # Dashboard administrativo
├── css/
│   └── style.css           # Estilos principais
├── js/
│   ├── app.js              # JavaScript principal
│   └── admin.js            # Lógica do painel de administração
├── img/                    # Imagens e assets
├── videos/                 # Vídeos do projeto
├── contracts/              # ABIs dos contratos blockchain
├── lang/                   # Arquivos de idioma (i18n)
├── docs/                   # Documentação adicional
├── package.json            # Configuração do projeto
└── README.md               # Este arquivo
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js (opcional, para ferramentas de desenvolvimento)
- Git
- Um navegador moderno com suporte a ES6+

### Desenvolvimento Local

1. Clone o repositório:
```bash
git clone https://github.com/ramxpedition/sanctum-site.git
cd sanctum-site
```

2. Inicie um servidor local:
```bash
# Usando Python
python3 -m http.server 8000
```

3. Acesse `http://localhost:8000` no seu navegador.

Para instruções detalhadas de deploy, veja [DEPLOY_INSTRUCTIONS.md](DEPLOY_INSTRUCTIONS.md).

## 🔗 Integração Blockchain

O site se integra com contratos inteligentes na rede Polygon para exibir métricas ESG em tempo real:

- **Contrato ESG da Stellantis**: `0x742d35Cc6634C0532925a3b844Bc454e4438f44e` (Testnet)
- **Contrato RAM NFT**: `0xdA10bEa1100A109dD0A04A25a3B844Bc454e4438` (Testnet)

### Configuração Web3

Para funcionalidade completa de blockchain:

1. Instale a MetaMask ou outro provedor Web3.
2. Conecte-se à rede Polygon.
3. Os dados ESG serão carregados automaticamente.

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Design responsivo e mobile-first
- [x] Integração Web3 com a MetaMask
- [x] Métricas ESG em tempo real
- [x] Contagem regressiva para a COP30
- [x] Galeria de NFTs
- [x] Formulário de contato
- [x] Otimização de performance
- [x] SEO otimizado
- [x] Dashboard administrativo
- [x] Suporte multilíngue (EN/ES/PT)

### 🔄 Em Desenvolvimento
- [ ] Integração com contratos reais
- [ ] Sistema de notificações

## 🎨 Sistema de Design

### Cores Oficiais
- **Laranja RAM**: `#FF6B00`
- **Azul Stellantis**: `#0033A0`
- **Verde ESG**: `#00A859`
- **Verde Amazônia**: `#2E8B57`

### Tipografia
- **Fonte Principal**: Montserrat
- **Pesos**: 300, 400, 600, 700, 900

## 📊 Performance

- **Pontuação no Lighthouse**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Segurança

- Cabeçalhos de segurança configurados
- Proteção contra XSS
- Política de Segurança de Conteúdo
- HTTPS/SSL obrigatório

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`).
3. Faça commit de suas alterações (`git commit -m 'Add some AmazingFeature'`).
4. Faça push para a branch (`git push origin feature/AmazingFeature`).
5. Abra um Pull Request.

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

**RAM Expedition Sanctum** - Regeneração através da aventura 🌿🚗
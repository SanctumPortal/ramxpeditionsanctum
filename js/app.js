const CONFIG = {
    // Endereços dos contratos blockchain
    stellantisContractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    ramNFTAddress: '0xdA10bEa1100A109dD0A04A25a3B844Bc454e4438',
    
    // Data da COP30
    cop30Date: new Date('2025-11-10T00:00:00'),
    
    // Configurações de animação
    animationDuration: 300,
    scrollOffset: 100,
    
    // URLs de verificação
    polygonscanUrl: 'https://polygonscan.com/address/',
    
    // Configurações de loading
    loadingDuration: 3000,

    // API endpoints
    esgApiUrl: 'https://api.example.com/esg-data', // Example API endpoint

    // Feature flags
    useWeb3: true,
};

// Estado global da aplicação
const AppState = {
    web3: null,
    account: null,
    contracts: {},
    isLoading: true,
    esgData: {
        carbon: 0,
        community: 0,
        area: 0,
        lastTransaction: 'Carregando...'
    }
};

// Utilitários
const Utils = {
    // Debounce function para otimizar performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Formatação de números
    formatNumber(num) {
        return new Intl.NumberFormat('pt-BR').format(num);
    },

    // Formatação de valores em ETH
    formatEth(wei) {
        if (!wei) return '0';
        return parseFloat(web3.utils.fromWei(wei, 'ether')).toFixed(4);
    },

    // Scroll suave para seção
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - CONFIG.scrollOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    },

    // Verificar se elemento está visível
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Animação de contadores
    animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        const range = end - start;

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (range * progress));
            
            element.textContent = Utils.formatNumber(current);
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
};

// Gerenciamento de Loading
const LoadingManager = {
    init() {
        const loadingScreen = document.getElementById('loading-screen');
        const progressBar = document.querySelector('.loading-progress');
        
        // Simular progresso de carregamento
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    AppState.isLoading = false;
                    this.onLoadingComplete();
                }, 500);
            }
        }, 100);
    },

    onLoadingComplete() {
        // Inicializar animações após loading
        AnimationManager.init();
        CountdownManager.init();
        
        // Tentar conectar Web3 se disponível
        if (window.ethereum) {
            Web3Manager.init();
        }
    }
};

// Gerenciamento de Navegação
const NavigationManager = {
    init() {
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupSmoothScrolling();
        this.setupLanguageSwitcher();
        this.setupBackToTop();
    },

    setupMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Fechar menu ao clicar em link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
    },

    setupScrollEffects() {
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', Utils.debounce(() => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 10));
    },

    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                Utils.scrollToSection(targetId);
                
                // Atualizar link ativo
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    },

    setupLanguageSwitcher() {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                LanguageManager.switchLanguage(e.target.value);
            });
        }
    },

    setupBackToTop() {
        const backToTopButton = document.querySelector('.back-to-top');

        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });

            backToTopButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
};

// Gerenciamento de Countdown
const CountdownManager = {
    init() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 60000); // Atualizar a cada minuto
    },

    updateCountdown() {
        const now = new Date();
        const diff = CONFIG.cop30Date - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (86400000)) / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            
            if (daysEl) daysEl.textContent = days.toString().padStart(3, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        }
    }
};

// Gerenciamento de Animações
const AnimationManager = {
    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
    },

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observar elementos para animação
        const animateElements = document.querySelectorAll('.metric, .nft-card, .timeline-item');
        animateElements.forEach(el => observer.observe(el));
    },

    setupHoverEffects() {
        // Efeitos de hover para cards NFT
        const nftCards = document.querySelectorAll('.nft-card');
        nftCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
};

// Gerenciamento Web3 e Blockchain
const Web3Manager = {
    async init() {
        if (!CONFIG.useWeb3) {
            console.log('Web3 is disabled by configuration.');
            this.simulateContractData(); // Simulate data even if Web3 is disabled
            return;
        }

        try {
            if (window.ethereum) {
                AppState.web3 = new Web3(window.ethereum);
                await this.setupContracts();
                this.setupEventListeners();
            } else {
                console.warn('MetaMask não detectado');
                this.showWeb3Warning();
                this.simulateContractData(); // Simulate data if no provider
            }
        } catch (error) {
            console.error('Erro ao inicializar Web3:', error);
            this.showWeb3Error();
            this.simulateContractData(); // Simulate data on error
        }
    },

    async setupContracts() {
        try {
            // ABIs should be loaded from json files
            const stellantisESGABI = await (await fetch('contracts/stellantis-esg-abi.json')).json();
            const ramNFTABI = await (await fetch('contracts/ram-nft-abi.json')).json();

            AppState.contracts.stellantisESG = new AppState.web3.eth.Contract(stellantisESGABI, CONFIG.stellantisContractAddress);
            AppState.contracts.ramNFT = new AppState.web3.eth.Contract(ramNFTABI, CONFIG.ramNFTAddress);

            this.updateESGMetrics();
        } catch (error) {
            console.error('Erro ao configurar contratos:', error);
            this.simulateContractData();
        }
    },

    setupEventListeners() {
        const connectWalletBtn = document.getElementById('connect-wallet');
        if (connectWalletBtn) {
            connectWalletBtn.addEventListener('click', () => this.connectWallet());
        }

        const verifyChainBtn = document.getElementById('verify-chain');
        if (verifyChainBtn) {
            verifyChainBtn.addEventListener('click', () => this.verifyOnBlockchain());
        }

        const refreshBtn = document.getElementById('refresh-impact');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.updateESGMetrics());
        }

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    AppState.account = accounts[0];
                    this.updateWalletUI();
                } else {
                    AppState.account = null;
                    this.updateWalletUI();
                }
            });
        }
    },

    async connectWallet() {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            AppState.account = accounts[0];
            this.updateWalletUI();
            this.updateESGMetrics();
        } catch (error) {
            console.error('Erro ao conectar carteira:', error);
            NotificationManager.show('Erro ao conectar carteira. Verifique se o MetaMask está instalado e tente novamente.', 'error');
        }
    },

    updateWalletUI() {
        const connectBtn = document.getElementById('connect-wallet');
        if (connectBtn) {
            if (AppState.account) {
                connectBtn.textContent = `Conectado: ${AppState.account.substring(0, 6)}...${AppState.account.substring(38)}`;
                connectBtn.disabled = true;
            } else {
                connectBtn.textContent = 'Conectar Carteira';
                connectBtn.disabled = false;
            }
        }
    },

    simulateContractData() {
        console.log("Simulating contract data...");
        // Simulate more realistic data changes
        setInterval(() => {
            AppState.esgData.carbon += Math.floor(Math.random() * 100);
            AppState.esgData.community += Math.floor(Math.random() * 2);
            AppState.esgData.area += Math.floor(Math.random() * 500);
            AppState.esgData.lastTransaction = `0x${[...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
            this.updateESGUI();
        }, 5000); // Update every 5 seconds
    },

    async updateESGMetrics() {
        if (!CONFIG.useWeb3 || !AppState.contracts.stellantisESG) {
            this.simulateContractData();
            return;
        }

        try {
            const carbonEl = document.getElementById('carbon-live');
            const communityEl = document.getElementById('community-live');
            const areaEl = document.getElementById('area-live');
            
            if (carbonEl) carbonEl.textContent = 'Atualizando...';
            if (communityEl) communityEl.textContent = 'Atualizando...';
            if (areaEl) areaEl.textContent = 'Atualizando...';

            const [carbon, community, area, lastTransaction] = await Promise.all([
                AppState.contracts.stellantisESG.methods.getCompensatedCarbon().call(),
                AppState.contracts.stellantisESG.methods.getImpactedCommunities().call(),
                AppState.contracts.stellantisESG.methods.getPreservedArea().call(),
                AppState.contracts.stellantisESG.methods.getLastTransaction().call(),
            ]);

            AppState.esgData = { carbon, community, area, lastTransaction };
            this.updateESGUI();

        } catch (error) {
            console.error('Erro ao atualizar métricas ESG:', error);
            NotificationManager.show('Erro ao buscar dados da blockchain. Mostrando dados simulados.', 'error');
            this.simulateContractData();
        }
    },

    updateESGUI() {
        // Atualizar valores nos gauges
        const carbonValue = document.getElementById('carbon-value');
        const communityValue = document.getElementById('community-value');
        const areaValue = document.getElementById('area-value');
        
        const carbonLive = document.getElementById('carbon-live');
        const communityLive = document.getElementById('community-live');
        const areaLive = document.getElementById('area-live');
        
        const lastTransaction = document.getElementById('last-transaction');
        
        if (carbonValue) {
            Utils.animateCounter(carbonValue, 0, AppState.esgData.carbon, 2000);
        }
        if (communityValue) {
            Utils.animateCounter(communityValue, 0, AppState.esgData.community, 2000);
        }
        if (areaValue) {
            Utils.animateCounter(areaValue, 0, AppState.esgData.area, 2000);
        }
        
        if (carbonLive) carbonLive.textContent = `${Utils.formatNumber(AppState.esgData.carbon)} kg CO₂ compensado`;
        if (communityLive) communityLive.textContent = `${AppState.esgData.community} famílias beneficiadas`;
        if (areaLive) areaLive.textContent = `${Utils.formatNumber(AppState.esgData.area)} m² preservados`;
        
        if (lastTransaction) lastTransaction.textContent = AppState.esgData.lastTransaction;
        
        // Atualizar gauges visuais
        this.updateGauges();
    },

    updateGauges() {
        const carbonGauge = document.getElementById('carbon-gauge');
        const communityGauge = document.getElementById('community-gauge');
        const areaGauge = document.getElementById('area-gauge');
        
        // Calcular percentuais (baseado em metas fictícias)
        const carbonPercent = Math.min((AppState.esgData.carbon / 15000) * 100, 100);
        const communityPercent = Math.min((AppState.esgData.community / 100) * 100, 100);
        const areaPercent = Math.min((AppState.esgData.area / 200000) * 100, 100);
        
        if (carbonGauge) {
            carbonGauge.style.background = `conic-gradient(var(--esg-green) 0% ${carbonPercent}%, var(--amazon-green) ${carbonPercent}% 100%)`;
        }
        if (communityGauge) {
            communityGauge.style.background = `conic-gradient(var(--esg-green) 0% ${communityPercent}%, var(--amazon-green) ${communityPercent}% 100%)`;
        }
        if (areaGauge) {
            areaGauge.style.background = `conic-gradient(var(--esg-green) 0% ${areaPercent}%, var(--amazon-green) ${areaPercent}% 100%)`;
        }
    },

    verifyOnBlockchain() {
        const url = `${CONFIG.polygonscanUrl}${CONFIG.stellantisContractAddress}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    },

    showWeb3Warning() {
        const message = 'Para ver dados em tempo real da blockchain, instale o MetaMask ou outro provedor Web3.';
        NotificationManager.show(message, 'warning');
    },

    showWeb3Error() {
        const message = 'Erro ao conectar com a blockchain. Alguns recursos podem não funcionar.';
        NotificationManager.show(message, 'error');
    },

    showNotification(message, type = 'info') {
        // Criar notificação simples
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : '#4caf50'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
};

// Gerenciamento de Idioma
const LanguageManager = {
    currentLanguage: 'pt',
    translations: {},

    async init() {
        await this.loadLanguage(this.getInitialLanguage());
        this.translatePage();
    },

    async loadLanguage(lang) {
        try {
            const response = await fetch(`lang/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language file: ${lang}.json`);
            }
            this.translations = await response.json();
            this.currentLanguage = lang;
            document.documentElement.lang = lang;
        } catch (error) {
            console.error(error);
            // Fallback to default language (Portuguese)
            if (lang !== 'pt') {
                await this.loadLanguage('pt');
            }
        }
    },

    translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[key]) {
                element.textContent = this.translations[key];
            }
        });
    },

    async switchLanguage(lang) {
        await this.loadLanguage(lang);
        this.translatePage();
    },

    getInitialLanguage() {
        const browserLang = navigator.language.split('-')[0];
        if (['en', 'es', 'pt'].includes(browserLang)) {
            return browserLang;
        }
        return 'pt'; // Default language
    }
};

// Gerenciamento de Notificações
const NotificationManager = {
    init() {
        const notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        document.body.appendChild(notificationContainer);
    },

    show(message, type = 'info', duration = 5000) {
        const container = document.getElementById('notification-container');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icon = this.getIcon(type);
        const closeButton = '<button class="close-btn">&times;</button>';

        notification.innerHTML = `
            <div class="notification-icon">${icon}</div>
            <div class="notification-content">
                <p>${message}</p>
            </div>
            ${closeButton}
        `;

        container.appendChild(notification);

        // Animação de entrada
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Fechar ao clicar no botão
        notification.querySelector('.close-btn').addEventListener('click', () => {
            this.hide(notification);
        });

        // Fechar após a duração
        if (duration) {
            setTimeout(() => {
                this.hide(notification);
            }, duration);
        }
    },

    hide(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    },

    getIcon(type) {
        switch (type) {
            case 'success':
                return '✅';
            case 'error':
                return '❌';
            case 'warning':
                return '⚠️';
            default:
                return 'ℹ️';
        }
    }
};

// Gerenciamento de Formulários
const FormManager = {
    init() {
        this.setupContactForm();
    },

    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }
    },

    async handleContactSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Desabilitar botão durante envio
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                this.showFormSuccess();
                form.reset();
            } else {
                throw new Error('Erro no envio');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            this.showFormError();
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensagem';
        }
    },

    showFormSuccess() {
        NotificationManager.show('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    },

    showFormError() {
        NotificationManager.show('Erro ao enviar mensagem. Tente novamente.', 'error');
    }
};

// Gerenciamento de Performance
const PerformanceManager = {
    init() {
        this.setupLazyLoading();
        this.setupImageOptimization();
    },

    setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    },

    setupImageOptimization() {
        // Detectar suporte a WebP
        const supportsWebP = this.checkWebPSupport();
        
        if (supportsWebP) {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (img.src.includes('.jpg') || img.src.includes('.png')) {
                    const webpSrc = img.src.replace(/\.(jpg|png)$/, '.webp');
                    // Verificar se versão WebP existe (em produção)
                    img.src = webpSrc;
                }
            });
        }
    },

    checkWebPSupport() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
};

// Funções globais para uso em HTML
window.scrollToSection = Utils.scrollToSection;

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar loading
    LoadingManager.init();
    
    // Aguardar loading completar antes de inicializar outros módulos
    setTimeout(() => {
        LanguageManager.init();
        NotificationManager.init();
        NavigationManager.init();
        FormManager.init();
        PerformanceManager.init();
    }, CONFIG.loadingDuration);
});

// Gerenciamento de erros globais
window.addEventListener('error', (e) => {
    console.error('Erro global capturado:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Promise rejeitada:', e.reason);
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(registrationError => {
                console.log('SW falhou:', registrationError);
            });
    });
}

// Exportar para uso em outros scripts se necessário
window.RamExpedition = {
    Utils,
    Web3Manager,
    AppState,
    CONFIG
};


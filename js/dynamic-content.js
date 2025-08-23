
document.addEventListener('DOMContentLoaded', function() {

    // --- DATA ---

    const nftData = [
        {
            image: 'img/nft-1.jpg',
            title: 'Amazônia Preservada #001',
            description: '100m² de área preservada',
            price: '0.1 ETH'
        },
        {
            image: 'img/nft-2.jpg',
            title: 'Amazônia Preservada #002',
            description: '100m² de área preservada',
            price: '0.1 ETH'
        },
        {
            image: 'img/nft-3.jpg',
            title: 'Amazônia Preservada #003',
            description: '100m² de área preservada',
            price: '0.1 ETH'
        }
    ];

    const timelineData = [
        {
            date: '2024',
            title: 'Preparação e Parcerias',
            description: 'Estabelecimento das parcerias estratégicas e desenvolvimento da plataforma blockchain.'
        },
        {
            date: 'Q1 2025',
            title: 'Lançamento NFT Collection',
            description: 'Primeira coleção de NFTs para conservação da Amazônia.'
        },
        {
            date: 'Q3 2025',
            title: 'Expedições Preparatórias',
            description: 'Série de expedições para mapear e documentar áreas de conservação.'
        },
        {
            date: '06-07 Nov 2025',
            title: 'COP30 - Leaders Summit',
            description: 'Encontro de líderes globais para discussões de alto nível.'
        },
        {
            date: '10-21 Nov 2025',
            title: 'COP30 - Belém',
            description: 'Apresentação oficial dos resultados e impacto gerado.',
            active: true
        }
    ];

    const esgMetricsData = [
        {
            id: 'carbon',
            title: 'Carbono Compensado',
            unit: 'kg CO₂',
            value: 0
        },
        {
            id: 'community',
            title: 'Comunidades Impactadas',
            unit: 'famílias',
            value: 0
        },
        {
            id: 'area',
            title: 'Área Preservada',
            unit: 'm²',
            value: 0
        }
    ];


    // --- RENDER FUNCTIONS ---

    function renderNFTs() {
        const nftGrid = document.querySelector('.nft-grid');
        if (!nftGrid) return;

        nftGrid.innerHTML = nftData.map(nft => `
            <div class="nft-card" role="listitem">
                <div class="nft-image">
                    <img src="${nft.image}" alt="${nft.title}" loading="lazy">
                </div>
                <div class="nft-info">
                    <h4>${nft.title}</h4>
                    <p>${nft.description}</p>
                    <div class="nft-price">${nft.price}</div>
                </div>
            </div>
        `).join('');
    }

    function renderTimeline() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = timelineData.map(item => `
            <div class="timeline-item ${item.active ? 'active' : ''}">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    function renderESGMetrics() {
        const esgMetrics = document.querySelector('.esg-metrics');
        if (!esgMetrics) return;

        esgMetrics.innerHTML = esgMetricsData.map(metric => `
            <div class="metric">
                <div class="gauge" id="${metric.id}-gauge">
                    <div class="gauge-inner">
                        <span class="gauge-value" id="${metric.id}-value">${metric.value}</span>
                        <span class="gauge-unit">${metric.unit}</span>
                    </div>
                </div>
                <h3>${metric.title}</h3>
                <p id="${metric.id}-live">Carregando...</p>
            </div>
        `).join('');
    }


    // --- INITIALIZE ---

    renderNFTs();
    renderTimeline();
    renderESGMetrics();

});

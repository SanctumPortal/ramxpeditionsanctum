// ==========================================================================
// RAM EXPEDITION SANCTUM - AIONDJ - Core Navigation Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const brandBar = document.querySelector('.brand-bar');

    if (header && brandBar) {
        const headerHeight = header.offsetHeight;
        brandBar.style.marginTop = `${headerHeight}px`;
    }

    const navLinks = document.querySelectorAll('.nav-link');

    // Function to handle navigation click
    const handleNavClick = (targetSectionId, clickedLink) => {
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Update active state on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    };

    // Add click listeners to all main navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if(link.dataset.section !== 'countdowns' && link.id !== 'open-login-modal-button') {
                e.preventDefault();
                const targetSectionId = link.dataset.section;
                handleNavClick(targetSectionId, link);
            }
        });
    });

    const expeditionButton = document.getElementById('cta-expedition');
    if (expeditionButton) {
        expeditionButton.addEventListener('click', () => {
            handleNavClick('expedition', document.querySelector('[data-section="expedition"]'));
        });
    }

    const manifestoButton = document.getElementById('cta-manifesto');
    if (manifestoButton) {
        manifestoButton.addEventListener('click', () => {
            handleNavClick('manifesto', document.querySelector('[data-section="manifesto"]'));
        });
    }
});
// ==========================================================================
// RAM EXPEDITION SANCTUM - AIONDJ - Core Navigation Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.main-content > section');
    const heroCtaButton = document.querySelector('.section-link');

    // Function to handle navigation click
    const handleNavClick = (targetSectionId) => {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active state on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === targetSectionId) {
                link.classList.add('active');
            }
        });

        // Scroll to the top of the page to see the new section
        window.scrollTo(0, 0);
    };

    // Add click listeners to all main navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = link.dataset.section;
            handleNavClick(targetSectionId);
        });
    });

    // Add click listener for the hero CTA button
    if (heroCtaButton) {
        heroCtaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = heroCtaButton.dataset.section;
            handleNavClick(targetSectionId);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const countdowns = [
        {
            id: 'tomorrowland-countdown',
            name: 'Tomorrowland Brasil',
            date: '2025-10-10T00:00:00'
        },
        {
            id: 'the-town-countdown',
            name: 'The Town',
            date: '2025-09-06T00:00:00'
        }
    ].sort((a, b) => new Date(a.date) - new Date(b.date));

    const countdownGrid = document.querySelector('.countdown-grid');

    if (countdownGrid) {
        countdowns.forEach(event => {
            const countdownCard = document.createElement('div');
            countdownCard.classList.add('countdown-card');
            countdownCard.innerHTML = `
                <h2>${event.name}</h2>
                <div class="countdown" id="${event.id}">
                    <div class="countdown-item"><span class="countdown-number" data-days>0</span><span class="countdown-label">Dias</span></div>
                    <div class="countdown-item"><span class="countdown-number" data-hours>0</span><span class="countdown-label">Horas</span></div>
                    <div class="countdown-item"><span class="countdown-number" data-minutes>0</span><span class="countdown-label">Minutos</span></div>
                    <div class="countdown-item"><span class="countdown-number" data-seconds>0</span><span class="countdown-label">Segundos</span></div>
                </div>
            `;
            countdownGrid.appendChild(countdownCard);
        });
    }

    const updateCountdown = () => {
        countdowns.forEach(event => {
            const countdownElement = document.getElementById(event.id);
            if (countdownElement) {
                const eventDate = new Date(event.date).getTime();
                const now = new Date().getTime();
                const distance = eventDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if (countdownElement && countdownElement.querySelector('[data-days]')) {
                    countdownElement.querySelector('[data-days]').textContent = days;
                    countdownElement.querySelector('[data-hours]').textContent = hours;
                    countdownElement.querySelector('[data-minutes]').textContent = minutes;
                    countdownElement.querySelector('[data-seconds]').textContent = seconds;
                }

                if (distance < 0) {
                    countdownElement.innerHTML = '<div class="countdown-item"><h2>Evento Encerrado!</h2></div>';
                }
            }
        });
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

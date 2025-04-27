document.addEventListener('DOMContentLoaded', () => {
    // --- Staggered Card Animation ---
    const cards = document.querySelectorAll('.wish-card');
    cards.forEach((card, index) => {
        // Calculate delay: start quickly, then slightly slower
        const delay = index * 0.08; // Adjust multiplier for speed (smaller = faster)
        card.style.animationDelay = `${delay}s`;
    });

    // --- Simple Confetti Effect on Load ---
    function launchConfetti() {
        const duration = 3 * 1000; // 3 seconds
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // Launch confetti from both sides
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    // Launch confetti shortly after page load allows elements to render
    setTimeout(launchConfetti, 500); // Wait 0.5 seconds

    // Optional: Re-launch confetti on click anywhere (can be annoying, use carefully)
    // document.body.addEventListener('click', launchConfetti);
});

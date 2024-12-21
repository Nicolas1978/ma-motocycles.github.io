console.log('JavaScript est chargé.');

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        console.log(targetElement);
        const scrollContainer = document.getElementById('scroll-container');

        if (targetElement && scrollContainer) {
            const targetPosition = targetElement.getBoundingClientRect().top + scrollContainer.scrollTop - 100;
            const startPosition = scrollContainer.scrollTop;
            const distance = targetPosition - startPosition;
            const duration = 1000; // La durée du défilement en millisecondes (1 seconde)
            let startTime;


            function scrollStep(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const scrollY = startPosition + distance * easeInOutCubic(progress / duration);

                scrollContainer.scrollTop = scrollY;

                if (progress < duration) {
                    window.requestAnimationFrame(scrollStep);
                } else {
                    // Pour garantir que nous terminons à la position exacte souhaitée
                    scrollContainer.scrollTop = targetPosition;
                }
            }

            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }

            window.requestAnimationFrame(scrollStep);
        }
    });
});
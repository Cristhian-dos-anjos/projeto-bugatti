const videos = document.querySelectorAll('.video-background');
        const modelCards = document.querySelectorAll('.model-card');

        modelCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                videos[index].classList.add('active');
            });

            card.addEventListener('mouseleave', () => {
                videos[index].classList.remove('active');
            });
        });
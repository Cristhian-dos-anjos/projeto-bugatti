// Logica da Navbar
        const nav = document.getElementById('mainNav');
        let lastScrollTop = 0;
        let isNavHidden = false;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;

            // Muda background e padding ao scroll
            nav.style.background = window.scrollY > 50 ? "rgba(5, 5, 5, 0.95)" : "rgba(0, 0, 0, 0.8)";
            nav.style.padding = window.scrollY > 50 ? "15px 50px" : "20px 50px";

            // Detecta direção do scroll e esconde/mostra navbar
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrollando para baixo
                if (!isNavHidden) {
                    nav.classList.remove('show-nav');
                    nav.classList.add('hide-nav');
                    isNavHidden = true;
                }
            } else {
                // Scrollando para cima
                if (isNavHidden) {
                    nav.classList.remove('hide-nav');
                    nav.classList.add('show-nav');
                    isNavHidden = false;
                }
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });

        // Logica do Contador
        const startCounter = (el) => {
            const target = parseFloat(el.getAttribute('data-target'));
            const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
            let current = 0;
            const step = target / 100;

            const update = () => {
                current += step;
                if (current < target) {
                    el.innerText = current.toFixed(decimals);
                    requestAnimationFrame(update);
                } else {
                    el.innerText = target.toFixed(decimals);
                }
            };
            update();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.counter').forEach(startCounter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(document.querySelector('.specs'));
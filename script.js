document.addEventListener('DOMContentLoaded', () => {

    /* ============================================================
       Acordeón
       ============================================================ */
    const buttons = document.querySelectorAll('.accordion-btn');

    const closePanel = (btn) => {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.style.maxHeight = null;
    };

    const openPanel = (btn) => {
        const panel = btn.nextElementSibling;
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            const isOpen = this.getAttribute('aria-expanded') === 'true';

            // Solo un panel abierto por acordeón
            this.closest('.accordion')
                .querySelectorAll('.accordion-btn[aria-expanded="true"]')
                .forEach(closePanel);

            if (!isOpen) openPanel(this);
        });
    });

    window.addEventListener('resize', debounce(() => {
        document.querySelectorAll('.accordion-btn[aria-expanded="true"]').forEach(openPanel);
    }, 150));

    function debounce(fn, wait) {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(null, args), wait);
        };
    }


    /* ============================================================
       Carrusel
       ============================================================ */
    const repeat = false;
    const noArrows = false;
    const noBullets = false;

    const autoplay = true;
    const autoplayTime = 4000;

    const container = document.querySelector('.slider-container');
    if (!container) return;

    var slide = document.querySelectorAll('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    var autoplayTimer = null;
    var autoplayPaused = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function initBullets() {
        if (noBullets) {
            return;
        }
        const bulletContainer = document.createElement('div');
        bulletContainer.classList.add('bullet-container')
        slide.forEach((elem, i) => {
            const bullet = document.createElement('div');
            bullet.classList.add('bullet')
            bullet.id = `bullet-index-${i}`
            bullet.addEventListener('click', () => {
                goToIndexSlide(i);
                restartAutoplay();
            })
            bulletContainer.appendChild(bullet);
            elem.classList.add('proactivede');
        })
        container.appendChild(bulletContainer);
    }

    function initArrows() {
        if (noArrows) {
            return;
        }
        const leftArrow = document.createElement('a')
        const iLeft = document.createElement('i');
        iLeft.classList.add('fa')
        iLeft.classList.add('fa-arrow-left')
        leftArrow.classList.add('slider-left')
        leftArrow.appendChild(iLeft)
        leftArrow.addEventListener('click', () => {
            slideLeft();
            restartAutoplay();
        })
        const rightArrow = document.createElement('a')
        const iRight = document.createElement('i');
        iRight.classList.add('fa')
        iRight.classList.add('fa-arrow-right')
        rightArrow.classList.add('slider-right')
        rightArrow.appendChild(iRight)
        rightArrow.addEventListener('click', () => {
            slideRight();
            restartAutoplay();
        })
        container.appendChild(leftArrow);
        container.appendChild(rightArrow);
    }

    function slideInitial() {
        initBullets();
        initArrows();
        initGestures();
        setTimeout(function () {
            slideRight();
            startAutoplay();
        }, 500);
    }

    function updateBullet() {
        if (!noBullets) {
            document.querySelector('.bullet-container').querySelectorAll('.bullet').forEach((elem, i) => {
                elem.classList.remove('active');
                if (i === slideCurrent) {
                    elem.classList.add('active');
                }
            })
        }
        checkRepeat();
    }

    function checkRepeat() {
        if (!repeat) {
            if (slideCurrent === slide.length - 1) {
                slide[0].classList.add('not-visible');
                slide[slide.length - 1].classList.remove('not-visible');
                if (!noArrows) {
                    document.querySelector('.slider-right').classList.add('not-visible')
                    document.querySelector('.slider-left').classList.remove('not-visible')
                }
            }
            else if (slideCurrent === 0) {
                slide[slide.length - 1].classList.add('not-visible');
                slide[0].classList.remove('not-visible');
                if (!noArrows) {
                    document.querySelector('.slider-left').classList.add('not-visible')
                    document.querySelector('.slider-right').classList.remove('not-visible')
                }
            } else {
                slide[slide.length - 1].classList.remove('not-visible');
                slide[0].classList.remove('not-visible');
                if (!noArrows) {
                    document.querySelector('.slider-left').classList.remove('not-visible')
                    document.querySelector('.slider-right').classList.remove('not-visible')
                }
            }
        }
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide[slideCurrent - 1];
        } else {
            var preactiveSlide = slide[slideTotal];
        }
        var activeSlide = slide[slideCurrent];
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide[slideCurrent + 1];
        } else {
            var proactiveSlide = slide[0];

        }

        slide.forEach((elem) => {
            var thisSlide = elem;
            if (thisSlide.classList.contains('preactivede')) {
                thisSlide.classList.remove('preactivede');
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.add('proactivede');
            }
            if (thisSlide.classList.contains('preactive')) {
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.remove('proactivede');
                thisSlide.classList.add('preactivede');
            }
        });
        preactiveSlide.classList.remove('preactivede');
        preactiveSlide.classList.remove('active');
        preactiveSlide.classList.remove('proactive');
        preactiveSlide.classList.remove('proactivede');
        preactiveSlide.classList.add('preactive');

        activeSlide.classList.remove('preactivede');
        activeSlide.classList.remove('preactive');
        activeSlide.classList.remove('proactive');
        activeSlide.classList.remove('proactivede');
        activeSlide.classList.add('active');

        proactiveSlide.classList.remove('preactivede');
        proactiveSlide.classList.remove('preactive');
        proactiveSlide.classList.remove('active');
        proactiveSlide.classList.remove('proactivede');
        proactiveSlide.classList.add('proactive');

        updateBullet();
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide[slideCurrent + 1];
        } else {
            var proactiveSlide = slide[0];
        }
        var activeSlide = slide[slideCurrent];
        if (slideCurrent > 0) {
            var preactiveSlide = slide[slideCurrent - 1];
        } else {
            var preactiveSlide = slide[slideTotal];
        }
        slide.forEach((elem) => {
            var thisSlide = elem;
            if (thisSlide.classList.contains('proactive')) {
                thisSlide.classList.remove('preactivede');
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.add('proactivede');
            }
            if (thisSlide.classList.contains('proactivede')) {
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.remove('proactivede');
                thisSlide.classList.add('preactivede');
            }
        });

        preactiveSlide.classList.remove('preactivede');
        preactiveSlide.classList.remove('active');
        preactiveSlide.classList.remove('proactive');
        preactiveSlide.classList.remove('proactivede');
        preactiveSlide.classList.add('preactive');

        activeSlide.classList.remove('preactivede');
        activeSlide.classList.remove('preactive');
        activeSlide.classList.remove('proactive');
        activeSlide.classList.remove('proactivede');
        activeSlide.classList.add('active');

        proactiveSlide.classList.remove('preactivede');
        proactiveSlide.classList.remove('preactive');
        proactiveSlide.classList.remove('active');
        proactiveSlide.classList.remove('proactivede');
        proactiveSlide.classList.add('proactive');

        updateBullet();
    }

    function goToIndexSlide(index) {
        // Avanza hacia el índice por el camino más corto
        const sliding = (slideCurrent > index) ? () => slideLeft() : () => slideRight();
        while (slideCurrent !== index) {
            sliding();
        }
    }

    /* --- Deslizar con el dedo o arrastrando el mouse --- */
    function initGestures() {
        var startX = 0, startY = 0, tracking = false, fired = false;
        const THRESHOLD = 45;

        container.addEventListener('pointerdown', (e) => {
            tracking = true;
            fired = false;
            startX = e.clientX;
            startY = e.clientY;
        });

        container.addEventListener('pointermove', (e) => {
            if (!tracking || fired) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            // Ignora el gesto si es más vertical que horizontal (scroll de la página)
            if (Math.abs(dy) > Math.abs(dx)) { tracking = false; return; }

            if (Math.abs(dx) > THRESHOLD) {
                dx < 0 ? slideRight() : slideLeft();
                fired = true;
                restartAutoplay();
            }
        });

        const endDrag = () => { tracking = false; };
        container.addEventListener('pointerup', endDrag);
        container.addEventListener('pointercancel', endDrag);
        container.addEventListener('pointerleave', endDrag);
        container.addEventListener('dragstart', (e) => e.preventDefault());

        // Pausa mientras se mira
        container.addEventListener('pointerenter', () => { autoplayPaused = true;  });
        container.addEventListener('pointerleave', () => { autoplayPaused = false; });
    }

    /* --- Avance automático --- */
    function startAutoplay() {
        if (!autoplay || reduceMotion || autoplayTimer) return;
        autoplayTimer = setInterval(() => {
            if (autoplayPaused || document.hidden) return;
            // Con repeat = false se detiene en el último look
            if (!repeat && slideCurrent === slideTotal) {
                stopAutoplay();
                return;
            }
            slideRight();
        }, autoplayTime);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    slideInitial();

});

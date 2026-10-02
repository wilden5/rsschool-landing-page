document.addEventListener("DOMContentLoaded", function() {
    const BURGER_BUTTON = document.querySelector('.burger-button');
    const MAIN_NAV = document.querySelector('.main-nav');

    const closeMenuHandler = () => {
        MAIN_NAV.classList.remove('active');
        BURGER_BUTTON.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && MAIN_NAV.classList.contains('active')) {
            closeMenuHandler();
        }
    });

    BURGER_BUTTON.addEventListener('click', () => {
        MAIN_NAV.classList.toggle('active');
        BURGER_BUTTON.classList.toggle('active');

        if (MAIN_NAV.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    })

    MAIN_NAV.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-item-link') && !event.target.classList.contains('active')) {
            closeMenuHandler();
        }
    });
})
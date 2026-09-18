document.addEventListener("DOMContentLoaded", function() {
    const BURGER_BUTTON = document.querySelector('.burger-button');
    const MAIN_NAV = document.querySelector('.main-nav');

    BURGER_BUTTON.addEventListener('click', () => {
        MAIN_NAV.classList.toggle('active');
        BURGER_BUTTON.classList.toggle('active');

        if (MAIN_NAV.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    })
})
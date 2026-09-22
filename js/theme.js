const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

document.addEventListener("DOMContentLoaded", () => {
    const HTML = document.documentElement;
    const LIGHT_BUTTON = document.querySelector('.light-theme-button');
    const DARK_BUTTON = document.querySelector('.dark-theme-button');

    const applyTheme = (theme) => {
        HTML.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        LIGHT_BUTTON.classList.toggle('active', theme === LIGHT_THEME);
        DARK_BUTTON.classList.toggle('active', theme === DARK_THEME);
    }

    const SAVED_THEME = localStorage.getItem('theme') || LIGHT_THEME;
    applyTheme(SAVED_THEME);

    LIGHT_BUTTON.addEventListener('click', () => applyTheme(LIGHT_THEME));
    DARK_BUTTON.addEventListener('click', () => applyTheme(DARK_THEME));
})
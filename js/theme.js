document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const lightButton = document.querySelector('.light-theme-button');
    const darkButton = document.querySelector('.dark-theme-button');

    const applyTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        lightButton.classList.toggle('active', theme === 'light');
        darkButton.classList.toggle('active', theme === 'dark');
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    lightButton.addEventListener('click', () => applyTheme('light'));
    darkButton.addEventListener('click', () => applyTheme('dark'));
})
const rootElement = document.querySelector(':root');
const btnTheme = document.querySelector('.btn-theme');
const btnThemeIcon = document.querySelector('.btn-theme i');

const togleTheme = () => {
    rootElement.classList.toggle('dark');
    btnThemeIcon.classList.toggle('bxs-sun');
    btnThemeIcon.classList.toggle('bxs-moon');
};

btnTheme.addEventListener('click', togleTheme);
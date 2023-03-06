const html = document.querySelector('html');
const darkModeBtn = document.querySelector('#dark-mode');
darkModeBtn.addEventListener('change', () => {
    html.classList.toggle('dark__mode');
});

const html = document.querySelector('html')!;
const darkModeBtn = document.querySelector('#dark-mode') as HTMLInputElement;

darkModeBtn.addEventListener('change', () => {
    html.classList.toggle('dark__mode');
})
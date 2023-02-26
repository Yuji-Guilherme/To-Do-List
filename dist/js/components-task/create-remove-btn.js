export function createRemoveBtn() {
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add('remove-btn');
    newRemoveBtn.textContent = 'x';
    addEventRemoveBtn(newRemoveBtn);
    return newRemoveBtn;
}
function addEventRemoveBtn(newRemoveBtn) {
    newRemoveBtn.addEventListener('click', function () {
        const taskCompletedForRemoveBtn = this.parentElement;
        taskCompletedForRemoveBtn.remove();
    });
}

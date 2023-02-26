export function createCheckBox() {
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add('check-box');
    newCheckBox.type = 'checkbox';
    addEventCheckBox(newCheckBox);
    return newCheckBox;
}
function addEventCheckBox(newCheckBox) {
    newCheckBox.addEventListener('change', function () {
        const taskCompletedForCheckBox = this.parentElement;
        taskCompletedForCheckBox.classList.toggle("checked");
    });
}

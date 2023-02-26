export function createCheckBox():HTMLInputElement {
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add('check-box');
    newCheckBox.type = 'checkbox';
    addEventCheckBox(newCheckBox);
    return newCheckBox;
}

function addEventCheckBox(newCheckBox: HTMLInputElement) {
    newCheckBox.addEventListener('change', function() {
        const taskCompletedForCheckBox = this.parentElement!;
        taskCompletedForCheckBox.classList.toggle("checked");
    });
}
export function createTaskLabel(taskText) {
    const newLabel = document.createElement('label');
    newLabel.classList.add('label');
    addEventLabel(newLabel);
    const newInput = createInput(taskText);
    newLabel.append(newInput);
    return newLabel;
}
function addEventLabel(newLabel) {
    newLabel.addEventListener('dblclick', function () {
        const inputForLabel = this.firstElementChild;
        inputForLabel.removeAttribute('readonly'),
            inputForLabel.focus();
    });
}
function createInput(taskText) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.setAttribute('readonly', "");
    newInput.value = `${taskText}`;
    addEventInput(newInput);
    return newInput;
}
function addEventInput(newInput) {
    newInput.addEventListener('keypress', function (e) {
        if (e.key === "Enter") {
            e.preventDefault,
                this.setAttribute('readonly', ""),
                this.blur();
        }
    });
    newInput.addEventListener('blur', function () {
        this.setAttribute('readonly', "");
    });
}

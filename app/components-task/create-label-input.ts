export function createTaskLabel(taskText:string):HTMLLabelElement {
    const newLabel = document.createElement('label');
    newLabel.classList.add('label');
    addEventLabel(newLabel);
    const newInput = createInput(taskText);
    newLabel.append(newInput);
    return newLabel;
}

function addEventLabel(newLabel: HTMLLabelElement) {
    newLabel.addEventListener('dblclick', function() {
        const inputForLabel= this.firstElementChild as HTMLInputElement;
        inputForLabel.removeAttribute('readonly'),
        inputForLabel.focus();
    });
}

function createInput(taskText: string) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.setAttribute('readonly', "");
    newInput.value = `${taskText}`;
    addEventInput(newInput);
    return newInput;
}

function addEventInput(newInput: HTMLInputElement) {
    newInput.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            e.preventDefault,
            this.setAttribute('readonly', ""),
            this.blur();
        }
    });
    newInput.addEventListener('blur', function() {
        this.setAttribute('readonly', "");
    });
}
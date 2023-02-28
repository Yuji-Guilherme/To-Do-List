import { removeItemLocalStorageArray, setTaskInLocalStorage } from "../local-storage/get-set-remove-functions.js";
import { tasksForLocalStorageArray } from "../local-storage/show-update-functions.js";

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
    let oldInputValue:string = "";
    newInput.addEventListener('focus', function() {
        oldInputValue = this.value;
    })
    newInput.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            e.preventDefault;
            this.blur();
        }
    });
    newInput.addEventListener('blur', function() {
        changeNameInLocalStorage.call(this, oldInputValue);
        this.setAttribute('readonly', "");
    });
}

function changeNameInLocalStorage(this: HTMLInputElement, oldTask: string) {
    const newTask = this.value;
    const checkBtnForInput = this.parentElement?.previousElementSibling as HTMLInputElement;
    removeItemLocalStorageArray(tasksForLocalStorageArray, oldTask, checkBtnForInput.checked);
    setTaskInLocalStorage(newTask, checkBtnForInput.checked);
}
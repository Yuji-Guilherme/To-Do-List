import { removeItemLocalStorageArray, setTaskInLocalStorage } from "../local-storage/get-set-remove-functions.js";
import { tasksForLocalStorageArray } from "../local-storage/show-update-functions.js";
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
    let oldInputValue = "";
    newInput.addEventListener('focus', function () {
        oldInputValue = this.value;
    });
    newInput.addEventListener('keypress', function (e) {
        if (e.key === "Enter") {
            e.preventDefault;
            this.blur();
        }
    });
    newInput.addEventListener('blur', function () {
        changeNameInLocalStorage.call(this, oldInputValue);
        this.setAttribute('readonly', "");
    });
}
function changeNameInLocalStorage(oldTask) {
    var _a;
    const newTask = this.value;
    const checkBtnForInput = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.previousElementSibling;
    removeItemLocalStorageArray(tasksForLocalStorageArray, oldTask, checkBtnForInput.checked);
    setTaskInLocalStorage(newTask, checkBtnForInput.checked);
}

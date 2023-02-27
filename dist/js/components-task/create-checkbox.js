import { removeItemLocalStorageArray, tasksForLocalStorageArray, setTaskInLocalStorage } from "../local-storage/local-storage-functions.js";
export function createCheckBox(checked) {
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add('check-box');
    newCheckBox.type = 'checkbox';
    newCheckBox.checked = checked || false;
    addEventCheckBox(newCheckBox);
    return newCheckBox;
}
function addEventCheckBox(newCheckBox) {
    newCheckBox.addEventListener('change', function () {
        var _a;
        const taskCompletedForCheckBox = this.parentElement;
        const inputForCheckBox = (_a = this.nextElementSibling) === null || _a === void 0 ? void 0 : _a.firstChild;
        const checked = this.checked;
        taskCompletedForCheckBox.classList.toggle("checked");
        taskCompletedForCheckBox.toggleAttribute("data-checked");
        checkedInputInLocalStorage(inputForCheckBox.value, checked);
    });
}
function checkedInputInLocalStorage(task, checked) {
    removeItemLocalStorageArray(tasksForLocalStorageArray, task, !checked);
    setTaskInLocalStorage(task, checked);
}

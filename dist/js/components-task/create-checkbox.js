import { removeItemLocalStorageArray, setTaskInLocalStorage } from "../local-storage/get-set-remove-functions.js";
import { tasksForLocalStorageArray } from "../local-storage/show-update-functions.js";
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
        const TaskObjectCompletedForCheckBox = this.parentElement;
        const inputForCheckBox = (_a = this.nextElementSibling) === null || _a === void 0 ? void 0 : _a.firstChild;
        const checked = this.checked;
        TaskObjectCompletedForCheckBox.classList.toggle("checked");
        TaskObjectCompletedForCheckBox.toggleAttribute("data-checked");
        changeCheckedInLocalStorage(inputForCheckBox.value, checked);
    });
}
function changeCheckedInLocalStorage(task, checked) {
    removeItemLocalStorageArray(tasksForLocalStorageArray, task, !checked);
    setTaskInLocalStorage(task, checked);
}

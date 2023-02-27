import { removeItemLocalStorageArray, tasksForLocalStorageArray } from "../local-storage/local-storage-functions.js";
export function createRemoveBtn() {
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add('remove-btn');
    newRemoveBtn.textContent = 'x';
    addEventRemoveBtn(newRemoveBtn);
    return newRemoveBtn;
}
function addEventRemoveBtn(newRemoveBtn) {
    newRemoveBtn.addEventListener('click', function () {
        var _a;
        const inputForRemoveBtn = (_a = this.previousElementSibling) === null || _a === void 0 ? void 0 : _a.firstChild;
        const TaskObjectCompletedForRemoveBtn = this.parentElement;
        const checked = TaskObjectCompletedForRemoveBtn.hasAttribute("data-checked");
        removeTaskLocalStorage(inputForRemoveBtn.value, checked);
        TaskObjectCompletedForRemoveBtn.remove();
    });
}
function removeTaskLocalStorage(task, checked) {
    removeItemLocalStorageArray(tasksForLocalStorageArray, task, checked);
    localStorage.setItem("local-save-task", JSON.stringify(tasksForLocalStorageArray));
}

import { removeItemLocalStorageArray } from "../local-storage/get-set-remove-functions.js";
import { tasksForLocalStorageArray } from "../local-storage/show-update-functions.js";
export function createRemoveBtn() {
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add('remove__btn');
    newRemoveBtn.innerHTML = `<span class="material-symbols-rounded">close</span>`;
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

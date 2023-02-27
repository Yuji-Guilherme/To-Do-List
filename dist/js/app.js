import { createTemplate } from "./components-task/create-template.js";
import { getTaskInLocalStorage, setTaskInLocalStorage } from "./local-storage/get-set-remove-functions.js";
import { showTasksInLocalStorage, updateTasksForLocalStorageArray } from "./local-storage/show-update-functions.js";
export const listContainer = document.querySelector("#to-do-list");
export const arrayInLocalStorage = getTaskInLocalStorage();
const input = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");
showTasksInLocalStorage(arrayInLocalStorage);
updateTasksForLocalStorageArray();
input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault,
            addBtn.click();
    }
});
addBtn.addEventListener('click', () => {
    focusInput();
    if (input.value.trim() === "")
        return;
    const taskObject = createTemplate(input.value);
    insertOnPage(taskObject);
    setTaskInLocalStorage(input.value);
    clearInput();
});
function clearInput() {
    input.value = "";
}
function focusInput() {
    input.focus();
}
export function insertOnPage({ checkbox, label, removeBtn }) {
    const list = document.createElement('li');
    list.append(checkbox, label, removeBtn);
    listContainer.appendChild(list);
}

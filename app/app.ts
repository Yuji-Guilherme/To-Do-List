import { TaskObjectCompleted, createTemplate } from "./components-task/create-template.js";
import { getTaskInLocalStorage, setTaskInLocalStorage } from "./local-storage/get-set-remove-functions.js";
import { showTasksInLocalStorage, updateTasksForLocalStorageArray } from "./local-storage/show-update-functions.js";

export const listContainer = document.querySelector("#to-do-list")!;
const arrayInLocalStorage = getTaskInLocalStorage();
const input = document.querySelector("#input") as HTMLInputElement;
const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;

showTasksInLocalStorage(arrayInLocalStorage);
updateTasksForLocalStorageArray();

input.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        e.preventDefault,
        addBtn.click();
    }
})

addBtn.addEventListener('click', () => {
    focusInput();
    if (input.value.trim() === "") return;
    const taskObject = createTemplate(input.value);
    insertOnPage(taskObject);
    setTaskInLocalStorage(input.value);
    clearInput();
})

function clearInput():void {
    input.value = "";
}

function focusInput():void {
    input.focus();
}

export function insertOnPage({checkbox, label, removeBtn}:TaskObjectCompleted):void {
    const list = document.createElement('li');
    list.append(checkbox, label, removeBtn);
    listContainer.appendChild(list);
}
import { TaskCompleted, createTemplate } from "./components-task/create-template.js";
import { getTaskInLocalStorage, tasksForLocalStorageArray, setTaskInLocalStorage } from "./local-storage/local-storage-functions.js";

const input = document.querySelector("#input") as HTMLInputElement;
const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;
const listContainer = document.querySelector("#to-do-list")!;
const allBtn = document.querySelector("#all-btn")as HTMLButtonElement;
const activeBtn = document.querySelector("#active-btn")as HTMLButtonElement;
const completedBtn = document.querySelector("#completed-btn")as HTMLButtonElement;

getTaskInLocalStorage().forEach(item => {
    tasksForLocalStorageArray.push(item);
    const taskLocalStorageObject = createTemplate(item.name, item.checked);
    insertOnPage(taskLocalStorageObject);
})

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
    input.focus()
}

function insertOnPage({checkbox, label, removeBtn}:TaskCompleted):void {
    const list = document.createElement('li');
    list.append(checkbox, label, removeBtn);
    listContainer.appendChild(list);
}

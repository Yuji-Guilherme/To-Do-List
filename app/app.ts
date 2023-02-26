import { TaskCompleted, createTemplate } from "./create-template.js";

const input = document.querySelector("#input") as HTMLInputElement;
const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;
const listContainer = document.querySelector("#to-do-list")!;

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
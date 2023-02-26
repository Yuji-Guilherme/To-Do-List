import { createTemplate } from "./create-template.js";
const input = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");
const listContainer = document.querySelector("#to-do-list");
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
    clearInput();
});
function clearInput() {
    input.value = "";
}
function focusInput() {
    input.focus();
}
function insertOnPage({ checkbox, label, removeBtn }) {
    const list = document.createElement('li');
    list.append(checkbox, label, removeBtn);
    listContainer.appendChild(list);
}

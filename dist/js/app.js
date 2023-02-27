import { createTemplate } from "./components-task/create-template.js";
import { getTaskInLocalStorage, tasksForLocalStorageArray, setTaskInLocalStorage } from "./local-storage/local-storage-functions.js";
const input = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");
const listContainer = document.querySelector("#to-do-list");
const allBtn = document.querySelector("#all-btn");
const activeBtn = document.querySelector("#active-btn");
const completedBtn = document.querySelector("#completed-btn");
const arrayInLocalStorage = getTaskInLocalStorage();
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
allBtn.addEventListener('click', () => {
    clearList();
    showTasksInLocalStorage(arrayInLocalStorage);
});
activeBtn.addEventListener('click', () => {
    clearList();
    const activeTasksArray = getTaskInLocalStorage().filter(item => item.checked === false);
    showTasksInLocalStorage(activeTasksArray);
});
completedBtn.addEventListener('click', () => {
    clearList();
    const completedTasksArray = getTaskInLocalStorage().filter(item => item.checked === true);
    showTasksInLocalStorage(completedTasksArray);
});
function clearList() {
    listContainer.innerHTML = "";
}
function clearInput() {
    input.value = "";
}
function focusInput() {
    input.focus();
}
function updateTasksForLocalStorageArray() {
    getTaskInLocalStorage().forEach(item => {
        tasksForLocalStorageArray.push(item);
    });
}
function showTasksInLocalStorage(array) {
    array.forEach(item => {
        const taskLocalStorageObject = createTemplate(item.name, item.checked);
        insertOnPage(taskLocalStorageObject);
    });
}
function insertOnPage({ checkbox, label, removeBtn }) {
    const list = document.createElement('li');
    list.append(checkbox, label, removeBtn);
    listContainer.appendChild(list);
}
